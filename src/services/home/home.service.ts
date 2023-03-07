import { AxiosRequestConfig, AxiosResponse, CancelToken } from "axios";
import GetImageRequest from "types/request/getImageRequest";
import api from "utilities/api";

const getImages = (page: number, cancelToken?: CancelToken): Promise<AxiosResponse<any, any>> => {
  const params: AxiosRequestConfig = {
    url: "/",
    method: "GET",
    params: new GetImageRequest(
      {
        query: "VietNam",
      },
      {
        page: page,
      },
    ),
  };
  return api.request({ ...params, cancelToken: cancelToken });
};

export { getImages };
