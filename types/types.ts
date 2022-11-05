import { ArithmeticOperation } from "../const/const";

export interface RequestBodyType {
  x: number;
  y: number;
  operation_type: ArithmeticOperation;
}
