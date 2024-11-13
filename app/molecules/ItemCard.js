import React from 'react';
import { useRouter } from 'next/navigation';
import TextAtom from '../atoms/TextAtom';

const ItemCard = ({ title, onClick }) => {
    return (
        <button onClick={onClick} className="w-80 h-40 md:w-96 md:h-32 lg:w-96 lg:h-40 border border-black rounded-md p-3 text-center flex items-center justify-center">
            <TextAtom>{title}</TextAtom>
        </button>
    );
};

export default ItemCard;
