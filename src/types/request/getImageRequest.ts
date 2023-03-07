import BaseQueryRequest from "types/base";

interface IGetImageRequest {
  query: string;
}

class GetImageRequest extends BaseQueryRequest implements IGetImageRequest {
  public query: string = "VietNam";
  constructor(params: Partial<IGetImageRequest>, paging: BaseQueryRequest) {
    super(paging);
    Object.assign(this, params);
  }
}

export default GetImageRequest;
