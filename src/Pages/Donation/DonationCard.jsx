import { Link } from "react-router-dom";


const DonationCard = ({data}) => {
    const {id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color,price,description }=data || {};
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md" style={{backgroundColor:category_bg_color}}>
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={picture}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
  <div className="rounded-md bold  w-1/2 font-bold" style={{backgroundColor:card_bg_color, color:text_button_bg_color}}>
    <p className="py-2 px-2 text-center " >{category}</p>
    </div>
    <h4 className="mb-2 mt-3 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
    <p className="mb-8 block font-sans text-base font-bold  leading-relaxed text-gray-700 antialiased" style={{color:text_button_bg_color}}>
      ${price}
    </p>
    
    <Link to={`/categoryData/${id}`} className="inline-block" href="#">
      <button
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button" style={{backgroundColor:text_button_bg_color}}
      >
        View Details
        
      </button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default DonationCard;