import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectRest, fetchTopRest } from "../../features/restaurant/restaurantSlice"

function TopRest() {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(fetchTopRest());  
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [dispatch]);

    const TopRest = useSelector(selectRest);

    return (
        <>
        <div>
            <h2>Restaurantes recomendados</h2>
            <div>
                {
                    TopRest && TopRest.length > 0 ? (
                        TopRest.map((rest) => (
                            <div key={rest.id}>
                                <h3>{rest.name}</h3>
                            </div>
                        ))
                    ) : (
                        <p>No hay restaurantes recomendados</p>
                    )
                }
            </div>
        </div>
        </>
    )
};

export default TopRest;