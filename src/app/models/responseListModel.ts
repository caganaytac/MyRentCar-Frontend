import { ResponseModel } from "./responseModel";

export interface ResponseListModel<Type> extends ResponseModel{
    data:Type[]
}