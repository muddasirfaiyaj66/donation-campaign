import { useLoaderData } from "react-router-dom";
import Banner from "../../Componants/Header/Banner/Banner";
import Category from "../../Componants/Category/Category";


const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
        <Category data={data}></Category>
            
        </div>
    );
};

export default Home;