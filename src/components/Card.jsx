import React from "react";

const Card = ({
    imgUrl,
    userTitle,
    btnText,
    btnBg = "#000",
    btnTextColor = "#00df9a",
    storageInfo,
}) => {
    return (
        <>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300">
                <img
                    className="w-20 mx-auto mt-[-3rem] bg-white"
                    src={imgUrl}
                    alt="/"
                />
                <h2 className="text-2xl font-bold text-center py-8">
                    {userTitle}
                </h2>
                <p className="text-center text-4xl font-bold">
                    {storageInfo.price}
                </p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">
                        {storageInfo.size}
                    </p>
                    <p className="py-2 border-b mx-8">{storageInfo.user}</p>
                    <p className="py-2 border-b mx-8">{storageInfo.send}</p>
                </div>
                <button
                    className={`bg-[${btnBg}] text-[${btnTextColor}] w-[200px] rounded-md font-medium mx-auto my-6 py-3 px-6`}
                >
                    {btnText}
                </button>
            </div>
        </>
    );
};

export default Card;
