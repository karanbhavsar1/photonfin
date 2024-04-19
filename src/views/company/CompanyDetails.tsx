import React, { useEffect } from 'react'
import { FaLink } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { MdModeEditOutline } from 'react-icons/md'
import { BiSolidUpArrowCircle } from 'react-icons/bi'
import { setLayout } from '@/store'
import { Card } from '@/components/ui'
import { apigetCompanyDetails, apigetCompanyGraphDetails } from './store'
import { CompanyGraph } from './companyGraph'
import CompanyInfo from './companyInfo'
import useQuery from '@/utils/hooks/useQuery'
import { useParams } from 'react-router-dom'
import App from './stockGraph'

const CompanyDetails = () => {
    const dispatch = useDispatch()
    const company = useParams()
    const companyList = useSelector(
        (state) => state.companyDetails.data.companyList
    )
    const companyListLoading = useSelector(
        (state) => state.companyDetails.data.loading
    )
    const graphData = useSelector(
        (state) => state.companyDetails.data.graphData
    )
    const graphLoading = useSelector(
        (state) => state.companyDetails.data.graphLoading
    )
    // let companyList= {
    //     "meta": {
    //         "1. Information": "Weekly Prices (open, high, low, close) and Volumes",
    //         "2. Symbol": "IBM",
    //         "3. Last Refreshed": "2024-04-17",
    //         "4. Time Zone": "US/Eastern"
    //     },
    //     "weeklyResult": {
    //         "1. open": "185.5700",
    //         "2. high": "187.4800",
    //         "3. low": "180.8800",
    //         "4. close": "183.1000",
    //         "5. volume": "11004827",
    //         "6. average": "184.18"
    //     }
    // }
    useEffect(() => {
        dispatch(setLayout('blank'))
    }, [])
    useEffect(() => {
        let data: any = {}
        data.symbol = company?.id + ".BSE"
        dispatch(apigetCompanyDetails(data))
        dispatch(apigetCompanyGraphDetails(data))

    }, [company])

    console.log('companyList', companyList, companyListLoading)
    return (
        <div className=" h-full">
            <div className=" h-full py-4 px-24">
                {companyListLoading ? <div className='flex justify-center items-center h-[80vh]'><h1>Loading...</h1></div> :
                    (Object.keys(companyList)?.length ? <div>
                        
                        <div className='grid grid-cols-1 gap-8'>
                            <CompanyInfo className="col-span-1" companyList={companyList} />
                            <App className="col-span-1" graphData={graphData} />
                        </div>
                    </div> :
                        <div className='flex justify-center items-center h-full'></div>)}
            </div>
        </div>
    )
}

export default CompanyDetails
