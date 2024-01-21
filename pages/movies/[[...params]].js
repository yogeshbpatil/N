import {useRouter} from "next/router"
function Movies() {
    const router = useRouter();
    const {params = []} = router.query;
    console.log(params);
  
    if(params.length === 2)
    {
        return(
            <h1>Industry = {params[0]} and Moive = {params[1]}</h1>
        )
    }
    else if(params.length === 1)
    {
        return(
            <h1>Industry = {params[0]}</h1>
        )
    }
    return <h1>Moives Page</h1>
}

export default Movies