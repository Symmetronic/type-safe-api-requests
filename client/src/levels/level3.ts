/**
 * Pros:
 * + Parameters, request body and response types
 * + Coupling to OpenAPI schema
 * + No typos in URLs or params
 */

import createClient from "openapi-fetch";
import type { paths } from "../../../server";

const { GET } = createClient<paths>({ baseUrl: "/api" });

const getUser = (userId: number) =>
  GET("/users/{userId}", {
    params: {
      path: {
        userId,
      },
    },
  });

export default async function level3(): Promise<void> {
  console.log("Level 3");
  const { data: user, error } = await getUser(4);

  if (error) {
    console.error(error);
    return;
  }

  console.log(user.name);
}
