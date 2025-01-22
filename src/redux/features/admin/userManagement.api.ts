import { TQueryParam, TResponseRedux, TStudent } from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //Get All Students.
    getAllStudents: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        console.log("🚀 ~ params:", params);
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        console.log(params);
        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TStudent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getAllFaculties: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/faculties",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TStudent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    //Add Student.
    addStudent: builder.mutation({
      query: (data) => ({
        url: "users/create-student",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useAddStudentMutation, useGetAllStudentsQuery, useGetAllFacultiesQuery } = userManagementApi;
