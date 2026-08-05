const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
     //"http://localhost:5000/api/v1";
    "https://mercuryapi.bouncyboxstudio.in/api/v1"

type ApiRequestOptions = RequestInit & {
    revalidate?: number | false;
    tags?: string[];
};

export class ApiError extends Error {
    status: number;
    data: unknown;

    constructor(
        message: string,
        status: number,
        data: unknown,
    ) {
        super(message);

        this.name = "ApiError";
        this.status = status;
        this.data = data;
    }
}

export async function apiRequest<T>(
    endpoint: string,
    options: ApiRequestOptions = {},
): Promise<T> {
    const {
        revalidate = 3600,
        tags = [],
        headers,
        ...requestOptions
    } = options;

    const response = await fetch(
        `${API_BASE_URL}${endpoint}`,
        {
            ...requestOptions,

            headers: {
                "Content-Type": "application/json",
                ...headers,
            },

            next: {
                revalidate,
                tags,
            },
        },
    );

    let responseData: unknown = null;

    const contentType =
        response.headers.get("content-type");

    if (contentType?.includes("application/json")) {
        responseData = await response.json();
    }

    if (!response.ok) {
        const errorResponse = responseData as {
            message?: string;
        } | null;

        throw new ApiError(
            errorResponse?.message ||
            "Something went wrong while fetching data.",
            response.status,
            responseData,
        );
    }

    return responseData as T;
}