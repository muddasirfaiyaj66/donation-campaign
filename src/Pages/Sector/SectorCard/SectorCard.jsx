import Swal from "sweetalert2";


const SectorCard = ({data}) => {
    const {id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color,price,description }=data || {};
    const handleAddToDonate =() =>{

        const addedDonateArray = [];
        const donateCard = JSON.parse(localStorage.getItem("donate"));
        if(!donateCard){
            addedDonateArray.push(data);
            localStorage.setItem("donate",JSON.stringify(addedDonateArray));
            Swal.fire(
                'Good job!',
                'Thanks for Donating',
                'success'
              )
           

        }
        else{
            const isExist = donateCard.find((donate) => donate.id === id);
            if(!isExist){
                addedDonateArray.push(...donateCard,data);
                localStorage.setItem("donate",JSON.stringify(addedDonateArray));
                Swal.fire(
                    'Good job!',
                    'Thanks for Donating',
                    'success'
                  );

            } else{

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You have already Donated!!!',
                    
                  })
                
            }
        }
    }
    return (
        <div className="my-10 p-5 md:p-10">
            <div className="relative mb-10">
            <img src={picture}  alt="" />
            <div style={{backgroundColor:'rgba(11, 11, 11, 0.50)'}} className="absolute  bottom-0 left-0 right-0 p-5 ">

            <button onClick={handleAddToDonate} className="text-white btn" style={{backgroundColor:text_button_bg_color} } >Donate ${price}</button>
            </div>

        </div>

        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-xl font-semibold">{description}</p>
        </div>
    );
};

export default SectorCard;