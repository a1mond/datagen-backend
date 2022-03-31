export interface IApiCodegenRequest {
    str: string,
    times: number,
    variables: {
        rawValue: string,
        parsed: string,
        type: string,
        colored?: string,
        options?: {[p: string]: any}
    }[]
}
export interface IApiCodegenResponse {
    data: string[];
}