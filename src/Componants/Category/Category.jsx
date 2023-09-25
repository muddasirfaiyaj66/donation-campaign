import CategoryCard from "./CategoryCard";


const Category = ({data}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:10 lg:grid-cols-4 gap-5 my-20">
            {
                data?.map(categoryData => <CategoryCard key={categoryData.id} categoryData={categoryData} ></CategoryCard>)
            }
        </div>
    );
};

export default Category;