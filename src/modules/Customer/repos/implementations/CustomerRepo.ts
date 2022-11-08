import RedisConnection from "../../../../infra/db/redis/index";
import { CreateCustomerDto } from "../../dto/request/CreateCustomerRequest";
import { ICustomerRepo } from "../ICustomerRepo";
import { uuid } from 'uuidv4'
import { Customer } from "../../domain/Customer";
import { DatabaseError } from "../../../../core/errors/index";
import { UpdateCustomerDto } from "../../dto/request/UpdateCustomerRequest";

export class CustomerRepo implements ICustomerRepo {
  constructor(private redisConnection: RedisConnection) {}

  async create(customerDto: CreateCustomerDto): Promise<Customer> {
    const client = await this.redisConnection.makeConnection();

    try {
      const customer = {
        id: uuid(),
        document: customerDto.document,
        name: customerDto.name
      } as Customer;

      await client.set(`customer:${customer.id}`, JSON.stringify(customer));
      return customer;
    } catch (error) {
      throw new DatabaseError(error, 'Erro ao salvar customer no Redis.');
    }
  }

  async update(customerDto: UpdateCustomerDto): Promise<Customer> {
    const client = await this.redisConnection.makeConnection();
    try {
      await client.set(`customer:${customerDto.id}`, JSON.stringify(customerDto));
      return customerDto;
    } catch (error) {
      throw new DatabaseError(error, 'Erro ao atualizar customer no Redis.');
    }
  }

  async get(id: string): Promise<Customer> {
    const client = await this.redisConnection.makeConnection();
    try {
      const customer = await client.get(`customer:${id}`);
      return JSON.parse(customer);
    } catch (error) {
      throw new DatabaseError(error, 'Erro ao buscar customer no Redis.');
    }
  }
}
