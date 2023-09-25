
const CategoryCard = ({categoryData}) => {
    const {id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color }=categoryData;
    return (
        <div >
            <div className='card card-compact   shadow-xl' style={{backgroundColor:category_bg_color}}>
  <figure><img src={picture} alt="picture" /></figure>
  <div className="card-body">
    <div className="rounded-md bold  w-1/3  font-bold" style={{backgroundColor:card_bg_color, color:text_button_bg_color}}>
    <h2 className="py-2 px-2 text-center " >{category}</h2>
    </div>
    <p className="text-xl font-bold" style={{ color:text_button_bg_color}}>{title}</p>
    
  </div>
</div>

        </div>
    );
};

export default CategoryCard;