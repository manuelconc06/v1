import { createContext, useState } from "react";
import {getReview} from '../data/dataReview'
export const HotelContext = createContext();

export const HotelContextProvider = (props) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoadig] = useState([]);

  const dataReview = (id) => {
    debugger
    const { dataR, loading } = getReview(id);
    setReviews(dataR)
    setLoadig(loading)
  }


  const createReviews = async (newReview) => {
    const data = {
      description: newReview.description,
      title: newReview.title,
      rating: newReview.rating,
      hotelId: newReview.id,
    };

    const response = await postReview(data);
    if (response) {
      setReviews([
        ...reviews,
        {
          id: Date.now,
          description: response.description,
          title: response.title,
          rating: response.rating,
          hotelId: param.id,
        },
      ]);
    } else {
      alert("Error al crear la Review");
    }
  }

  return (
    <HotelContext.Provider
      value={{
        reviews,
        loading,
        dataReview,
       createReviews
      }}
    >
      {props.children}
    </HotelContext.Provider>
  );
}
