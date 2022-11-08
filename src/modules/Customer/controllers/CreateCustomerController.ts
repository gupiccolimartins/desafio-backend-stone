import { Controller } from "../../../core/infra/Controller";
import { fail, HttpResponse, ok } from "../../../core/infra/HttpResponse";
import { CreateCustomerDto, RequestData } from "../dto/request/CreateCustomerRequest";
import { customerRepo } from "../repos";
import { CustomerService } from "../service";
import { ICustomerService } from "../service/ICustomerService";

export class CreateCustomerController implements Controller {
  constructor(
    private readonly customerService: ICustomerService
  ) {}
  
  async handle(req: RequestData): Promise<HttpResponse> {
    try {
      const { body } = req;
      const response = await this.customerService.create(body);
      return ok(response);
    } catch (error) {
      return fail(error);
    }
  }
}

export const createCustomerFactory = () => {
  const customerService = new CustomerService(customerRepo);
  return new CreateCustomerController(customerService);
}