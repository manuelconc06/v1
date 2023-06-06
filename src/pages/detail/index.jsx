import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getHotel } from "../../data/dataHotel";
import StarRanking from "../../components/rankingStar";
import {HotelContext} from '../../context/hotel'
import Formulario from "../../components/form";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import { getReview, postReview } from "../../data/dataReview";

const Detalle = () => {
  const navigate = useNavigate();
  const param = useParams();
  const { data } = getHotel(param.id);

  const {dataReview, reviews, loading } = useContext(HotelContext);
  dataReview(param.id)
 /*  const { dataR, loading } = getReview(param.id);
  const [reviews, setReviews] = useState([]); */
  const [show, setShow] = useState(false);
/*   useEffect(() => {
    setReviews(dataR);
  }, [dataR]); */

  const handleSubmit = async (props) => {
    const data = {
      description: props.description,
      title: props.title,
      rating: props.rating,
      hotelId: param.id,
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
    setShow(false);
  };
  return (
    <Container>
      <div>{loading && <CircularProgress />}</div>
      {!loading && (
        <div>
          <Grid Container>
            <Grid item xs={12}>
              {" "}
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="btn-regresar btn-pad-regresar"
              >
                Regresar al Inicio
              </button>
            </Grid>
          </Grid>
          <Grid item xs={12} className="title-review">
            Detalle del hotel
          </Grid>
          <Grid Container key={data?.id} className="card">
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <img className="card-img-top" src={data?.thumbnail}></img>
            </Grid>
            <Grid item xs={6} sm={8} md={9} lg={10}>
              <Grid item xs={12}>
                <div className="title">{data?.title}</div>
              </Grid>
              <Grid item xs={12}>
                <StarRanking score={data?.rating} edit={false} />
              </Grid>
              <Grid item xs={12}>
                <div className="descrip">{data?.description}</div>
              </Grid>
            </Grid>
          </Grid>

          <div className="title-review">Reviews</div>
          <ul className="card-detalle">
            {reviews?.map((review) => (
              <>
                <Grid Container key={review.id}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className="card-title"
                  >
                    <div className="card-review">{review.title}</div>
                    <div className="marg-star">
                      <StarRanking score={review.rating} edit={false} />
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className="descrip"
                    style={{ margin: "2px 4px 14px 0px" }}
                  >
                    {review.description}
                  </Grid>
                </Grid>
              </>
            ))}
          </ul>
          <div>{show && <Formulario value={handleSubmit} />}</div>
          <div style={{ textAlign: "center" }}>
            {!show && (
              <button className="btn-color" onClick={() => setShow(true)}>
                Agregar Review
              </button>
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Detalle;
