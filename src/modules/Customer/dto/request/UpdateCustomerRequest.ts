export type UpdateCustomerDto = {
  id: string,
  document: number,
  name: string
}

export type RequestData = {
  body: UpdateCustomerDto
}