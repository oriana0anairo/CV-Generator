import type { HttpMethod } from "../types/httpMethod";

const API_URL = import.meta.env.VITE_API_URL;

async function request<T>(
  endpoint: string,
  options: {
    method?: HttpMethod;
    body?: unknown;
    headers?: HeadersInit;
  } = {}
): Promise<T> {
  const { method = "GET", body, headers } = options;

  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || "Unexpected error");
  }

  return response.json();
}

export const http = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, body: unknown) =>
    request<T>(url, { method: "POST", body }),
  patch: <T>(url: string, body: unknown) =>
    request<T>(url, { method: "PATCH", body }),
  delete: <T>(url: string) => request<T>(url, { method: "DELETE" }),
};
