export interface HttpResponse<T> {
    timeStamp : string;
    statusCode : number;
    httpStatus : string;
    reason: string;
    message: string;
    developerMessage: string;
    data : T;
}