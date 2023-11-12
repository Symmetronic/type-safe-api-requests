/**
 * Pro:
 * + Response type
 */

interface User {
  id: number;
  name: string;
}

export default async function level1(): Promise<void> {
  console.log("Level 1");
  const response = await fetch("/api/users/4");
  const user: User = await response.json();
  console.log(user.name);
}
