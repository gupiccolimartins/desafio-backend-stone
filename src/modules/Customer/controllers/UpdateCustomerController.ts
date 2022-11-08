import { Controller } from "../../../core/infra/Controller";
import { fail, HttpResponse, ok } from "../../../core/infra/HttpResponse";
import { RequestData } from "../dto/request/UpdateCustomerRequest";
import { customerRepo } from "../repos";
import { CustomerService } from "../service";
import { ICustomerService } from "../service/ICustomerService";

export class UpdateCustomerController implements Controller {
  constructor(
    private readonly customerService: ICustomerService
  ) {}
  
  async handle(req: RequestData): Promise<HttpResponse> {
    try {
      const { body } = req;
      const response = await this.customerService.update(body);
      return ok(response);
    } catch (error) {
      return fail(error);
    }
  }
}

export const updateCustomerFactory = () => {
  const customerService = new CustomerService(customerRepo);
  return new UpdateCustomerController(customerService);
}