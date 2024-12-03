import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserRepositoryJSON } from "@/backend/user/UserRepositoryJSON";

const handler = NextAuth({
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
  
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const userRepo = new UserRepositoryJSON();
        const user = await userRepo.findByEmail(credentials.email);

        if (user && user.password === credentials.password) {
          return { id: user.id, email: user.email, name: user.name };
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/",
  },
});

export { handler as GET, handler as POST };
