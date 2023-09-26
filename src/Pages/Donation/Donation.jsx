import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donate , setDonate] =useState([]);
    const [noFound, setNoFound] =useState(false);
    const [isShow, setIsShow] =useState(false);


    useEffect(() => {
        const donateCard = JSON.parse(localStorage.getItem('donate'));
        if(donateCard){
            setDonate(donateCard);
        } else{
            setNoFound("No data found");
        }
    },[])
    return (
        <div>
            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            ) :(
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 gap-5">
                    {
                        isShow ? donate.map((data) => (
                            <DonationCard key={data.id} data={data}></DonationCard>

                        ))
                        : donate.slice(0,4).map((data) => (
                            <DonationCard key={data.id} data={data}></DonationCard>
                        ))
                    }
                     
                </div>
                    {donate.length > 4 &&
                    <button onClick={() => setIsShow(!isShow)} className="px-5 btn mb-10 hover:bg-red-500 bg-green-500 text-white mx-auto flex justify-center items-center test-white ">
                        {isShow ? "see less" : "see more"}
                    </button>
                    }

                </div>
                
                
            )}
        </div>
    );
};

export default Donation;