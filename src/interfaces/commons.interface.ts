// export interface Commons {}

export interface Result {
  // 返回状态码
  code: number;
  // 返回信息描述
  message?: string;
  // 返回值
  data: object;
}

export interface Product {
  code: string;
  description: string;
  type: string;
}

export interface Query {
  attributes?: Array<string>;
  where?: string;
  order?: string;
  offset?: number;
  limit?: number;
}

export interface RequestBody {
  //
}

export interface Count {
  count: number;
}
