import { useEffect,useState } from "react";
import axios from "axios";

const Axios = () => {
   
    const [data1, setData] = useState([]);
    
    useEffect(() => { 
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(a => {
            // console.log(a.data)
            setData(a.data)
            console.log(a.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            {data1.map((i) => (
                <div key={i.id}>
                    <h1>{i.name}</h1>
                    <h1>{i.username}</h1>
                    <p>{i.email}</p>
                    <p>{i.phone}</p>
                    <p>{i.website}</p>
                    <p>{i.company.name}</p>
                    <p>{i.company.catchPhrase}</p>
                    <p>{i.company.bs}</p>
                    <p>{i.address.street}</p>
                    <p>{i.address.suite}</p>
                    <p>{i.address.city}</p>
                    <p>{i.address.zipcode}</p>
                    <p>{i.address.geo.lat}</p>
                    <p>{i.address.geo.lng}</p>

                    <br />
                    <div>--------------------------------</div>
                </div>
            ))}
        </div>
    )
};

export default Axios;