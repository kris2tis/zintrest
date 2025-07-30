import { http } from "./httpService"

export const likeApi = async (id) => {
    return await http.post(`/post/like/${id}`).then(({data}) => data.data )
}

export const bookmarkApi = async (id) => {
    return await http.post(`/post/bookmark/${id}`).then(({data}) => data.data )
}

export const deleteApi = async (id , option) => {
    return await http.delete(`/post/remove/${id}` ,option).then(({data}) => data.data )
}

export const createApi = async (value) => {
    return await http.post(`/post/create` , value).then(({data}) => data.data )
}

export const editPostApi = async ({id , data}) => {
    return await http.patch(`/post/update/${id}` , data).then(({data}) => data.data )
}
