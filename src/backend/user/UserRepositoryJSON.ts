import fs from "fs/promises";

interface User {
  id: string;
  email: string;
  name: string;
  password: string;
}

export class UserRepositoryJSON {
  private filePath = "./data/users.json";

  async findByEmail(email: string): Promise<User | null> {
    const users = await this.getUsers();
    return users.find((user) => user.email === email) || null;
  }

  private async getUsers(): Promise<User[]> {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  }
}
