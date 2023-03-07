// External link (endpoints api)

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; // dev
// const BASE_URL = "https://jsonplaceholder.typicode.com"; // prod

const Endpoints = {
  BASE_URL: BASE_URL,
  USER: BASE_URL + "/user",
};

export default Endpoints;
