export default class UserResponse {
  accessToken: any;
  constructor(public id: string = "", public name: string = "", public status: string = "") {}
}
