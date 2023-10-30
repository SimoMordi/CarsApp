import axios from "axios"
import { useState, useEffect } from "react"

const Cars = () => {

    const [cars, setCars] = useState([])


useEffect(() => {
        axios({
            method: "GET",
            url: "server/cars",

        }).then((res) => {
            console.log(res.data);
            setCars(res.data)
        })

    },[])
console.log(cars);

return (
    <div>
      Show all fruits here:
      <ul>
        {cars.map((car) => {
          return (
            <li key={JSON.stringify(car)}>
              <p>Name: {car.name}</p>
              <p>Color: {car.color}</p>
              <p>Age: {car.age}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cars;