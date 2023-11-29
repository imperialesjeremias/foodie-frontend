import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Category.css';

function Category({ onSelect }) {
    const initialCategory = 'Cafeteria'; // Elige la categoría inicial deseada
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [marginTop, setMarginTop] = useState(true);

    useEffect(() => {
        onSelect(selectedCategory);
    }, [selectedCategory, onSelect]);

    const handleValue = (category) => {
        setSelectedCategory(category);
        setMarginTop(true);
    }

    return (
        <>
            <div>
                <Navbar />
                <div className={`bg-[#fff] flex flex-col absolute top-44 left-0 w-full items-center flex-wrap lg:top-80 ${marginTop ? 'lg:top-[12rem]' : ''} z-10`}>
                    <div className='bg-[#50793D] py-2 mx-4 lg:p-10 rounded-xl'>
                        <h1 className='flex mb-10 text-2xl justify-center font-titulo text-[#fff]'>Categorías</h1>
                        <div className='flex flex-wrap justify-center gap-10'>
                            {
                                ['Cafeteria', 'Comida Rapida', 'Gourmet', 'Pastas'].map((category) => (
                                    <div key={category} className={`max-w-sm rounded-lg w-60 items-center  overflow-hidden shadow-lg bg-slate-200 background-${category} lg:w-80`}>
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl  mb-2 text-[#fff] font-texto">{category}</div>

                                            <button onClick={() => handleValue(category)} className={`w-full mt-8 text-[black] border-none bg-[#fff] rounded-md cursor-pointer btn  hover:text-white ${selectedCategory === category ? 'bg-[rgb(80,121,61)] text-[rgb(255,255,255)]' : ''} font-texto`}>
                                                Ver restaurantes
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;
