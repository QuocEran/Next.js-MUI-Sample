class BaseQueryRequest {
  public page: number = 0;
  constructor(params: Partial<BaseQueryRequest>) {
    Object.assign(this, params);
  }
}

export default BaseQueryRequest;
