import React, { useEffect, useState } from 'react';

const Main = () => {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        const storedTitles = JSON.parse(localStorage.getItem('titles')) || [];
        setTitles(storedTitles.slice(0, 10));
    }, []);

    return (
        <div className="flex flex-col items-center gap-10">
            <div className="w-80 h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 border border-black rounded-md p-3 text-center flex items-center justify-center mt-5">
                <p className="text-lg font-bold">Today Recipe</p>
            </div>

            <p className="text-center">추천 레시피</p>

            {titles.length > 0 ? (
                titles.map((title, i) => (
                    <div key={i}>
                        <div className="w-80 h-40 md:w-96 md:h-32 lg:w-96 lg:h-40 border border-black rounded-md p-3 text-center flex items-center justify-center mb-5">
                            <p className="text-md font-bold">{title}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No recipes available</p>
            )}
        </div>
    );
};

export default Main;
