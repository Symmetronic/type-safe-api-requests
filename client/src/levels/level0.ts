/**
 * Pro:
 * + Quick implementation
 */

export default async function level0(): Promise<void> {
  console.log("Level 0");
  const response = await fetch("/api/users/4");
  const user = await response.json();
  console.log(user.name);
}
