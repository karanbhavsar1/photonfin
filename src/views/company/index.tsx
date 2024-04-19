import { Loading } from '@/components/shared'
import { injectReducer } from '@/store'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CompanyDetails from './CompanyDetails'
import {CompanyGraph} from './companyGraph'
import Navbar from './navbar'
import reducer, { updatecompanyList, updategraphData } from "./store"

injectReducer("companyDetails",reducer)

const Company = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(updatecompanyList([]))
        dispatch(updategraphData([]))

    },[])
    const companyList = useSelector(
        (state) => state.companyDetails.data.companyList
    )
    const graphData = useSelector(
        (state) => state.companyDetails.data.graphData
    )
    const companyListLoading = useSelector(
        (state) => state.companyDetails.data.loading
    )
    const graphLoading = useSelector(
        (state) => state.companyDetails.data.graphLoading
    )

    return (
        <div className=' w-full  flex flex-col gap-4'>
            <Navbar className=''/>
            <div className="p-4 flex flex-col gap-8 h-[90vh]">
            <CompanyDetails />
            {/* {companyListLoading && graphLoading ? <div className='flex justify-center items-center h-full'>Loading...</div> : (Object.keys(companyList)?.length && Object.keys(graphData)?.length ? <CompanyDetails /> : <div className='flex justify-center items-center h-full'>No data found</div> )} */}
            </div>
        </div>
    )
}

export default Company