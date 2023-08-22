import axios from 'axios'

import { faker } from '@faker-js/faker'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue({
    data: faker.helpers.objectEntry({ prop1: 'prop1' }),
    status: faker.number.int(),
  })
  return mockedAxios
}
