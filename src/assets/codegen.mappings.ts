import { faker } from '@faker-js/faker';

export const CODEGEN_MAPPINGS: { [p: string]: Function } = {
  name: faker.name.findName,
  color: faker.commerce.color
}