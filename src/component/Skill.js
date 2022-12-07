import React from 'react'

const Skill = ({ list }) => {
    const getRandomColor = () => {
        let color = "#681f30";
        return color;
    }
    return list.length > 0 && list.map((skills) => {
        console.log("skilllll", skills);
        const backgroundColor = getRandomColor();
        const className = "bar-expand " + skills.name;
        const width = skills.level;

        return (
            <li key={skills.name}>
                <span style={{ width, backgroundColor }} className={className}></span>
                <em>{skills.name}</em>
            </li>
        );
    })
}

export default Skill