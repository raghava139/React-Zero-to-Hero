import { useEffect, useState } from "react";

const User = ({ name }) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    // useEffect(() => {
        // const timer= setInterval(()=>{
        //     console.log('I like it')
        // },1000)
        // console.log("useEffect")
        // return ()=>{
        //     console.log('clean up function')
        //     clearInterval(timer)
        // }
    // }, [])

    // console.log("render")
    return (
        <div className="user-card">
            {/* <h3>Count: {count}</h3>
            <h3>count2: {count2}</h3>
            <h3>Name: {name}</h3>
            <h3>Location: Hyderabad</h3>
            <h3>Email: Raghava@gmail.com</h3> */}
        </div>
    )
}
export default User;