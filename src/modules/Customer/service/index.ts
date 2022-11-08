import { BusinessError } from "../../../core/errors/index";
import { Customer } from "../domain/Customer";
import { CreateCustomerDto } from "../dto/request/CreateCustomerRequest";
import { UpdateCustomerDto } from "../dto/request/UpdateCustomerRequest";
import { ICustomerRepo } from "../repos/ICustomerRepo";
import { ICustomerService } from "./ICustomerService";

export class CustomerService implements ICustomerService {
  constructor(private customerRepo: ICustomerRepo = null) {}

  async create(req: CreateCustomerDto): Promise<string> {
    const customerInserted = await this.customerRepo.create(req);
    return customerInserted.id;
  }

  async update(req: UpdateCustomerDto): Promise<Customer> {
    const customerExisted = await this.customerRepo.get(req.id);
    if (!customerExisted) {
      throw new BusinessError('Nao foi encontrado um cliente com esse id!');
    }
    const newCustomer = {
      id: customerExisted.id,
      document: req.document,
      name: req.name
    } as UpdateCustomerDto;

    const result = await this.customerRepo.update(newCustomer);
    return result;
  }

  async get(id: string): Promise<Customer> {
    const customer = await this.customerRepo.get(id);
    if (!customer) {
      throw new BusinessError('Nao foi encontrado um cliente com esse id!');
    }
    return customer;
  }

}