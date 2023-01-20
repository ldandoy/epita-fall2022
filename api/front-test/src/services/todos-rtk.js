import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import axios from 'axios'

/*const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, body, params }) => {
    try {
        console.log("axiosBaseQuery", baseUrl, url)
        const result = await axios({ url: baseUrl + url, method, data: body, params })
        return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
}*/

export const todoRtkApi = createApi({
    reducerPath: 'todoRtkApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    /*baseQuery: axiosBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL+"/",
    }),*/
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => ({
                url: `todos`,
                method: 'GET'
            }),
            providesTags: ["Todos"]
        }),
        postTodo: builder.mutation({
            query: (todo) => ({
                url: `todos`,
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ["Todos"]
        })
    })
});

export const { 
    useGetTodosQuery,
    usePostTodoMutation
} = todoRtkApi;