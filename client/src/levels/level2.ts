/**
 * Pros:
 * + Response type
 * + Coupling to OpenAPI schema
 */

import type { components } from "../../../server";

type User = components["schemas"]["User"];

export default async function level2(): Promise<void> {
  console.log("Level 2");
  const response = await fetch("/api/users/4");
  const user: User = await response.json();
  console.log(user.name);
}
