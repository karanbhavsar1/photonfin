import { Card } from "@/components/ui"

export default function CompanyInfo({ companyList }: any) {

    return (
        <>
            {/* <div> */}

            {/* <div className='flex gap-8 p-2 mb-4'>
                            <div className='flex justify-center items-center gap-2'>
                                <FaLink color='blue' size={"20"} />
                                <p className='text-blue-700 font-semibold text-lg'>Sandur.com</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <HiOutlineExternalLink color='blue' size={"20"} />
                                <p className=' font-semibold text-lg'>BSE: 504918</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <HiOutlineExternalLink color='blue' size={"20"} />
                                <p className=' font-semibold text-lg'>NSE : SANDUMA</p>
                            </div>
                        </div> */}
            {/* </div> */}
            <Card>
                <div className="flex gap-8 mb-2 justify-between px-8 h-full mt-4">
                    <h1>{companyList?.meta?.['2. Symbol']}</h1>

                </div>
                <div className='grid grid-cols-3 gap-16 p-4 px-8'>
                    <div className='col-span-3'>
                        <div className=' p-8 rounded-lg flex flex-col gap-8  border border-2 w-[100%] px-16' >
                            <div className="flex justify-between">
                            <h4>Last Week Data</h4>
                            <p>
                                Last Refreshed :{' '}
                                {companyList?.meta?.['3. Last Refreshed'] ? companyList?.meta?.['3. Last Refreshed'] : "-"}
                            </p>
                            </div>
                            <div className='grid grid-cols-3 gap-8 text-lg text-black gap-x-32 '>
                                {
                                    companyList?.weeklyResult && Object.keys(companyList.weeklyResult).map((li) => {
                                        return (
                                            <div key={li} className='flex justify-between p-2 bg-gray-200 rounded px-4'>
                                                <p className=''>{li}</p>
                                                <p> <span className='font-semibold text-black'>{Number(companyList.weeklyResult[li]).toFixed(2)} </span></p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/* <div className='flex flex-col gap-2'>
                                <h6>Add ratio to table</h6>
                                <div className='grid grid-cols-3 gap-8'>
                                    <input className='col-span-2 border border-2 p-4 rounded-lg ' placeholder='eg. Promoter holding' />
                                    <div className='flex justify-end items-center gap-2'>
                                        <MdModeEditOutline color='blue' size={"16"} />
                                        <p className='text-blue-700 font-semibold '>EDIT RATIOS</p>
                                    </div>
                                </div>
                            </div> */}

                        </div>

                    </div>
                </div>
            </Card>
        </>

    )
}