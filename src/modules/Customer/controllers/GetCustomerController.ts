import { Controller } from "../../../core/infra/Controller";
import { fail, HttpResponse, ok } from "../../../core/infra/HttpResponse";
import { customerRepo } from "../repos";
import { CustomerService } from "../service";
import { ICustomerService } from "../service/ICustomerService";

export class GetCustomerController implements Controller {
  constructor(
    private readonly customerService: ICustomerService
  ) {}
  
  async handle(req): Promise<HttpResponse> {
    try {
      const { params } = req;
      const response = await this.customerService.get(params.id);
      return ok(response);
    } catch (error) {
      return fail(error);
    }
  }
}

export const getCustomerFactory = () => {
  const customerService = new CustomerService(customerRepo);
  return new GetCustomerController(customerService);
}