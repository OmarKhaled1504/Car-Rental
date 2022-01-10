import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {useState} from "react";
import axios from "axios";


const BlogList = ({ cars }) => {
    const history = useHistory();
    const [plate,setPlate] = useState("");
    var username = sessionStorage.getItem('username');


    function convert(str) {
        var mnths = {
            Jan: "01",
            Feb: "02",
            Mar: "03",
            Apr: "04",
            May: "05",
            Jun: "06",
            Jul: "07",
            Aug: "08",
            Sep: "09",
            Oct: "10",
            Nov: "11",
            Dec: "12"
          },
          date = str.split(" ");
        return [date[3], mnths[date[1]], date[2]].join("-");
      }
    const click = async()=>{
        var startDate = sessionStorage.getItem('startDate');
        var start = convert(startDate)
        var endDate = sessionStorage.getItem('endDate');
        var end = convert(endDate);
        var pricePerDay = sessionStorage.getItem('price');
        var date1 = new Date(start);
        var date2 = new Date(end);
        var diffDays = date2.getDate() - date1.getDate() + 1; 
        var payment = pricePerDay * diffDays;
        var license = sessionStorage.getItem('license');
        sessionStorage.setItem('startDate',start)
        sessionStorage.setItem('endDate',end)
        sessionStorage.setItem('amount',payment)
        sessionStorage.setItem('username',username)
        sessionStorage.setItem('license',license)
         
        var jsonData = {
            "license": license,
            "username": username,
            "start_date": start,
            "end_date": end,
            "reservation_status": "Incoming",
            "payment": payment,
            "payment_status": "Not Paid"
        }
        console.log(jsonData)
        fetch('http://localhost:8080/api/v1/reservations/insert', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData)
        })
        history.push('/Reserve')
    }
    return (
        <div className="blog-list">
            {cars.map(car => (
                        <div  className="blog-preview" key={car.license} >
                            <h2> <img className="image" src ={car.image}></img> </h2>
                            <h2 className="Text"> {car.manufacturer}</h2>
                            <h2 className="Text"> {car.model}</h2>
                            <h2 className="Text">Year: {car.year}</h2>
                            <h2 className="Text">Color: {car.color }</h2>
                            <h2  className="Text">Plate: {car.license}</h2>
                            <h2  className="Text">Price per day: {car.price_per_day}</h2>
                            <div ><button className='button' varient="outlined" onClick={()=>{
                                console.log(car.license);
                                sessionStorage.setItem("license",car.license);
                                sessionStorage.setItem("price",car.price_per_day)
                                click()
                            }} className="button">Rent</button></div>
                        </div>

                    ))
                }
        </div>

    );
}

export default BlogList;