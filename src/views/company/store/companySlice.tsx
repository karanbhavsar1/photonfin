import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import type { TableQueries } from '@/@types/common'
import { getCompanyDetails, getCompanyGraphDetails } from '@/services/CompanyService'


export type CompanyListState = {
    loading: boolean
    // deleteConfirmation: boolean
    // addNewConfirmation:boolean
    // pageType:any
    // selectedCity: string
    // tableData: TableQueries
    // filterData: FilterQueries
    companyList: any
    graphData: any,
    graphLoading:boolean
}

// type GetCityRequest = TableQueries & { filterData?: FilterQueries }

export const SLICE_NAME = 'companyList'

export const apigetCompanyDetails = createAsyncThunk(
    SLICE_NAME + '/getCompanyDetails',
    async (data:any) => {
        const response = await getCompanyDetails(data)
        console.log("response",response)
        return response?.data
    }
)

export const apigetCompanyGraphDetails= createAsyncThunk(
    SLICE_NAME + '/apigetCompanyGraphDetails',
    async (data:any) => {
        const response = await getCompanyGraphDetails(data)
        console.log("response",response)
        return response?.data
    }
)


// export const initialTableData: TableQueries = {
//     total: 0,
//     page_index: 1,
//     page_size: 10,
//     query: '',
//     sort: {
//         order: '',
//         key: '',
//     },
// }

const initialState: CompanyListState = {
    loading: false,
    // deleteConfirmation: false,
    // addNewConfirmation: false,
    // selectedCity: '',
    companyList: [],
    graphData: [],
    graphLoading:false
    // pageType:"",
    // tableData: initialTableData,
    // filterData: "",
}

const companyListSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers: {
        updatecompanyList: (state, action) => {
            state.companyList = action.payload
        },
        updategraphData: (state, action) => {
            state.graphData = action.payload
        },
        // setTableData: (state, action) => {
        //     state.tableData = action.payload
        // },
        // setFilterData: (state, action) => {
        //     state.filterData = action.payload
        // },
        // toggleDeleteConfirmation: (state, action) => {
        //     state.deleteConfirmation = action.payload
        // },
        // setSelectedCity: (state, action) => {
        //     state.selectedCity = action.payload
        // },
        // toggleAddNewConfirmation: (state, action) => {
        //     state.addNewConfirmation = action.payload
        // },
        // setPageType: (state, action) => {
        //     state.pageType = action.payload
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(apigetCompanyDetails.fulfilled, (state, action) => {
                state.companyList = action.payload
                // state.tableData.total = action.payload.total
                state.loading = false
            })
            .addCase(apigetCompanyDetails.pending, (state) => {
                state.loading = true
            })
            .addCase(apigetCompanyDetails.rejected, (state) => {
                state.companyList = []
                // state.tableData.total = 0
                state.loading = false
            })
            .addCase(apigetCompanyGraphDetails.fulfilled, (state, action) => {
                state.graphData = action.payload
                // state.tableData.total = action.payload.total
                state.graphLoading = false
            })
            .addCase(apigetCompanyGraphDetails.pending, (state) => {
                state.graphLoading = true
            })
            .addCase(apigetCompanyGraphDetails.rejected, (state) => {
                state.graphData = []
                // state.tableData.total = 0
                state.graphLoading = false
            })
    },
})

export const {
    updatecompanyList,
    updategraphData
} = companyListSlice.actions

export default companyListSlice.reducer
