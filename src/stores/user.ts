import axios from "axios";
import UserResponse from "types/response/userResponse";
import create from "zustand";
import { persist } from "zustand/middleware";

interface userStoreState {
  access_token: string;
  userInfo: UserResponse;
  setUserInfo: (userInfo: UserResponse) => void;
  saveAccessToken: (access_token: string) => void;
  refreshToken: (url: string) => void;
  logout: () => void;
}

const userStore = create<userStoreState>()(
  persist(
    (set, get) => ({
      // Var
      access_token: "",
      userInfo: new UserResponse(),

      // Method
      setUserInfo: (userInfo: UserResponse) => {
        /// use in sign up
        set((state) => ({
          ...state,
          userInfo: userInfo,
        }));
      },

      saveAccessToken: (accessToken) => {
        set((state) => ({
          ...state,
          access_token: accessToken,
        }));
      },
      refreshToken: async (url) => {
        console.log("refresh:", url);
        var config = {
          method: "post",
          url: "/auth/refresh",
          headers: {
            Authorization: `Bearer ${get().access_token}`,
          },
        };

        await axios(config)
          .then(function (response) {
            set((state) => ({
              ...state,
              access_token: response.data.data.access_token,
            }));
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      logout: () => {
        set((state) => ({
          ...state,
          access_token: "",
          userInfo: new UserResponse(),
        }));
      },
    }),
    { name: "user" },
  ),
);

export default userStore;
