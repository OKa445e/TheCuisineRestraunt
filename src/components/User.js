import { useState } from "react";

const User = () => {
    const [count,setCount] = useState(0);
    return (
        <div className="user-data">
            <h1>Count: {count} </h1>
            <button onClick={()=>{
                setCount(count+1);
            }}
            >CLick</button>
            <h1>Name: Atharv Sinha</h1>
            <h2>Location: Delhi</h2>
            <h3>Contact: atharvdav@gmail.com</h3>
        </div>
    );
};

export default User;