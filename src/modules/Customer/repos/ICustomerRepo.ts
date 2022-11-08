import { Customer } from "../domain/Customer";
import { CreateCustomerDto } from "../dto/request/CreateCustomerRequest";
import { UpdateCustomerDto } from "../dto/request/UpdateCustomerRequest";

export interface ICustomerRepo {
  create(customerDto: CreateCustomerDto): Promise<Customer>;
  update(customerDto: UpdateCustomerDto): Promise<Customer>;
  get(id: string): Promise<Customer>;
}