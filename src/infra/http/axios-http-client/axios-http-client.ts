import axios from 'axios'

import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse,
} from '@data/protocols/http'

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponde = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponde.status,
      body: httpResponde.data,
    }
  }
}
