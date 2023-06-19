import { useCallback, useEffect } from "react";
export const FetchProducts = ({setdata, link}) => {
    const fetchdata = useCallback(async () => {
        try {
            let response = await fetch(link);
            if (!response.ok) {
                throw new Error('Error Occured');
            }
            let new_data = await response.json();
            setdata(new_data);
        }
        catch (err) {
        }
    }, [setdata, link])
    useEffect(() => {
        fetchdata();
    }, [fetchdata])
}