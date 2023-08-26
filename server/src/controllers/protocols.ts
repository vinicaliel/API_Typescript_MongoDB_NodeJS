export interface HttpResponse<T> {
  statusCode: number;
  body: T | string;
}

export interface HttpRequest<B>{
    body?: B
    params?: any
    headers?: any
}