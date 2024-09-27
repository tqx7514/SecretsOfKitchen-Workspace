import { useNavigate } from 'react-router-dom';

const Writing = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center flex-col items-center">
            <p className="text-center text-4xl font-bold mt-5">Recipe 작성</p>
            <div className="relative w-full max-w-2xl">
                <button onClick={() => navigate('/list')} className="absolute right-4 top-0 rounded-2xl bg-FC1818 text-white px-4 py-1">
                    <p className="text-lg font-bold ">작성</p>
                </button>
            </div>

            <div className="w-full h-40 md:h-32 lg:h-40 p-3 text-center flex flex-col items-center justify-center gap-8 mt-10">
                <input type="text" placeholder="제목을 입력하세요" className="w-[50%] p-2 border border-black rounded" />
                <input type="text" placeholder="내용을 입력하세요" className="w-[80%] p-2 border border-black rounded" />
            </div>
        </div>
    );
};

export default Writing;
