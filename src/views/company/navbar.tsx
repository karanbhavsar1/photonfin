import { useNavigate } from "react-router-dom";
import MainSearch from "./searchBar";

export default function Navbar() {
    const navigate= useNavigate()
    return (
        <div className="sticky top-0 z-10  flex justify-between p-4 bg-white px-8">
            <div className="flex justify-center items-center gap-8">
            <img src="/img/photonfin.png" style={{width:"150px"}} onClick={()=>navigate("/main")} ></img>
                <p onClick={()=>navigate("/main")} className="cursor-default">HOME</p>
            </div>

            <MainSearch />
        </div>
    )
}