interface ImageResponse {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  links: {
    html: string;
  };
}

export default ImageResponse;
