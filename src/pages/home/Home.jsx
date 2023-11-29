import TopRest from "../../components/TopRest/TopRest"
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();

    const handleTypeRestaurant = () => {
        navigate('/restaurants');
    }
    return (
        <div>
            <div>
                <TopRest/>
                <div>
                    <div onClick={handleTypeRestaurant}>
                        Restaurants
                    </div>
                    <div>
                        Emprendimientos
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;