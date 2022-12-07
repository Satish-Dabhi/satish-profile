import React from 'react'

const CommonListItem = ({ list }) => {
    return list.length > 0 && list.map((item) => {
        return (
            <div key={item.name}>
                <h3>{item.name}</h3>
                <p className="info">
                    {item.percentage} <span>&bull;</span>
                    <em className="date">{item.year}</em>
                </p>
                <p>{item.description}</p>
            </div>
        )
    })
}

export default CommonListItem;