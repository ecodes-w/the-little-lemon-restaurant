import React, { useReducer } from 'react'
import Heading from "../sections/reservePages/Heading";
import ReservationForm from "../sections/reservePages/BookingForm";
import { fetchAPI } from "../../bookingsAPI";

const BookingPage = () => {
    function updateTimes(date){
        return fetchAPI(date);
    }
    const output = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, output)
  return (
    <>
        <Heading/>
        <ReservationForm availableTimes={availableTimes} updateTimes={dispatch}/>
        </>
   
  );
}

export default BookingPage
