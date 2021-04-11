import { ResponseModel } from "./responseModel";

export interface ItemResponseModel<Type> extends ResponseModel{
    data:Type
}