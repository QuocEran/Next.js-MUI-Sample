import axios from "axios";
import Endpoints from "utilities/enums/endpoints";

export default axios.create({
  baseURL: Endpoints.BASE_URL,
  headers: {
    Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH}`,
  },
});
