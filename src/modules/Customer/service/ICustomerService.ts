import { Customer } from "../domain/Customer";
import { CreateCustomerDto } from "../dto/request/CreateCustomerRequest";
import { UpdateCustomerDto } from "../dto/request/UpdateCustomerRequest";

export interface ICustomerService {
  create(req: CreateCustomerDto): Promise<string>;
  update(req: UpdateCustomerDto): Promise<Customer>;
  get(id: string): Promise<Customer>;
}