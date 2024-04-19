import { setLayout } from "@/store"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { companyNames } from "../company/companyNames"
import MainSearch from "./searchBar"


export default function Main() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(setLayout("blank"))
    }, [])

    return (
        <div className="w-full h-full bg-white">
            <div className="w-full h-full flex justify-center items-center flex-col gap-8">
            <img src="/img/photonfin.png" style={{width:"400px"}}></img>
            <h4>The modern stock Screener that helps you pick better stock</h4>
            <MainSearch />
            <div className="flex justify-center items-center gap-4">
                <h5 className="font-semibold text-black">Trending :</h5>
                {
                    companyNames.map((company:any,ind:any)=>{
                        if(ind<5){
                            return (
                             <div className="p-2 bg-[#E1EFFF]  text-[#0078ff] rounded-full min-w-[50px] text-center cursor-pointer " onClick={()=>navigate(`/company/${company}`)} >{company}</div>

                            )
                        }
                    })
                }
            </div>
        </div>
        </div>
    )
}