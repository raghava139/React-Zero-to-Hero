import { useState } from "react"

const useOnlineStatus = ()=>{
    const [onlinseStatus,setOnlineStatus] =useState(true)

    window.addEventListener('online',()=>{
        setOnlineStatus(true);
    })
    window.addEventListener('offline',()=>{
        setOnlineStatus(false);
    })
    return onlinseStatus;
}
export default useOnlineStatus;