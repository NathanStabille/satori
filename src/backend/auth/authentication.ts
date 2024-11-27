import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginHandler } from "../user/LoginHandler";
import { UserRepositoryMemory } from "../user/UserRepositoryJSON";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User;
  }
}

export type User = {
  id: string;
} & DefaultSession["user"];

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      };
    },
  },

  pages: {
    signIn: "/login",
  },

  providers: [
    Credentials({
      credentials: {
        email: { label: "E-mail", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials.password) {
            return null;
          }

          const useRepo = new UserRepositoryJSON();
          const handler = new LoginHandler(userRepo);

          const user = handler.execute(credentials);

          if (!user) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
