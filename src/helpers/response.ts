export class CustomResponse{
    static responseWithData(status: number, message: string, data: any){
        return {
            status: status,
            message: message,
            data: data
        }
    }

    static responseWithoutData(status: number, message: string,){
        return {
            status: status,
            message: message,
        }
    }
}

export class ResponseModel{
    status: number;
    message: string;
    data: any;
}