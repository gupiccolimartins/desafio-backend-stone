export type CreateCustomerDto = {
  document: number;
  name: string;
}

export type RequestData = {
  body: CreateCustomerDto
}