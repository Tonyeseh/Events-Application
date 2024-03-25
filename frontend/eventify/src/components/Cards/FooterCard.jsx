import React from "react";

const FooterCard = ({header, listItems}) => {
    return (
        <div className="mb-7">
            <h2 className="text-lg font-bold text-white mb-4">{header}</h2>
            <ul>
                {listItems && listItems.map(item => {
                    return <li className="p-0.5" key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default FooterCard
