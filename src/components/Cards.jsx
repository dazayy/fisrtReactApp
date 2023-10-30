import React from "react";
import Card from "./Card";

import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <Card
                    imgUrl={Single}
                    userTitle={"Singe User"}
                    btnText={"Start Trial"}
                    storageInfo={{
                        price: "$149",
                        size: "500 GB",
                        user: "1 Granted User",
                        send: "Send up to 2 GB",
                    }}
                    btnBg="#00df9a"
                    btnTextColor="#000"
                />
                <Card
                    imgUrl={Double}
                    userTitle={"Double User"}
                    btnText={"Start Trial"}
                    storageInfo={{
                        price: "$249",
                        size: "1 TB",
                        user: "2 Granted User",
                        send: "Send up to 12 GB",
                    }}
                />
                <Card
                    imgUrl={Triple}
                    userTitle={"Triple User"}
                    btnText={"Start Trial"}
                    storageInfo={{
                        price: "$599",
                        size: "3 TB",
                        user: "3 Granted User",
                        send: "Send up to 24 GB",
                    }}
                    btnBg="#00df9a"
                    btnTextColor="#000"
                />
            </div>
        </div>
    );
};

export default Cards;
