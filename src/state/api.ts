import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({ 
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis"],
    endpoints: (build) => ({
        //have to have <void, void> because of typescript will show error when called in tsx file
        getKpis: build.query<void, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        })
    })

})

export const { useGetKpisQuery } = api;