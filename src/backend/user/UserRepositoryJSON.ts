import fs from "fs";
import { User } from "./User";
import { UserRepository } from "./UserRepository";

export class UserRepositoryJSON implements UserRepository {
  private filePath = "./data/users.json";

  findByEmail(email: string): User | null {
    const users = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
    const user = users.find((u: User) => u.email === email);

    if (!user) return null;

    return user;
  }

  addUser(user: User): void {
    const users = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
    users.push(user);
    fs.writeFileSync(this.filePath, JSON.stringify(users, null, 2));
  }
}
