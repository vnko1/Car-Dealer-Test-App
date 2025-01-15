type ResponseType = string | Blob | Error;

export default class ApiInstance {
  constructor(
    private baseUrl: RequestInfo | URL,
    private baseInit: RequestInit = {}
  ) {}

  private handleError(error: unknown) {
    return new Error(
      error instanceof Error
        ? error.message
        : "Something went wrong during the operation."
    );
  }

  private async request<T>(
    method: string,
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<T | ResponseType> {
    const url = new URL(input.toString(), this.baseUrl.toString());
    const baseInit: RequestInit = { ...this.baseInit, ...init, method };

    try {
      const response = await fetch(url.toString(), baseInit);

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const contentType = response.headers.get("Content-Type") || "";

      if (contentType.includes("application/json")) return response.json();
      else if (contentType.includes("text/"))
        return response.text() as unknown as T;

      return response.blob() as unknown as T;
    } catch (error) {
      throw this.handleError(error) as never as T;
    }
  }

  get<T>(
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<T | ResponseType> {
    return this.request("GET", input, init);
  }

  post<T>(
    url: string,
    body: unknown,
    init?: RequestInit
  ): Promise<T | ResponseType> {
    return this.request<T>("POST", url, {
      ...init,
      body: JSON.stringify(body),
      headers: {
        ...init?.headers,
        "Content-Type": "application/json",
      },
    });
  }

  put<T>(
    url: string,
    body: unknown,
    init?: RequestInit
  ): Promise<T | ResponseType> {
    return this.request<T>("PUT", url, {
      ...init,
      body: JSON.stringify(body),
      headers: {
        ...init?.headers,
        "Content-Type": "application/json",
      },
    });
  }

  delete<T>(url: string, init?: RequestInit): Promise<T | ResponseType> {
    return this.request<T>("DELETE", url, init);
  }
}
