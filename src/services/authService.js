import { http } from "./httpService"

export const signupApi = async (data) => {
    return await http.post("/user/signup" , data).then(({data}) => data.data)
}

export const signinApi = async (data) => {
    return await http.post("/user/signin", data).then(({ data }) => data.data)
}

export const getUserAPi = async () => {
    return await http.get("/user/profile").then(({ data }) => data.data)
}
