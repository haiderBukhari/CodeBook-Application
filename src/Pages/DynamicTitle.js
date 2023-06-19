import { useEffect } from "react";

export function DynamicTitile(title){
    useEffect(()=>{
        document.title = `${title} - CodeBook`
    }, [title])
}