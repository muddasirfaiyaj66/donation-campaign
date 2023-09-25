import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SectorCard from "./SectorCard/SectorCard";

const Sector = () => {

    const [data, setData] = useState({});
    const {id} =useParams();
    const idNum =parseInt(id);
    
    const sectorData = useLoaderData();
     useEffect(() =>{
        const findData = sectorData?.find((data) => data.id === idNum);
        setData(findData);
        
     },[ idNum, sectorData])

    return (
        <div>
            <SectorCard data={data}></SectorCard>
        </div>
    );
};

export default Sector;