import { useNavigate } from "react-router-dom";
import StarRanking from "../../components/rankingStar";
import { Container, Grid } from "@material-ui/core";

const Card = ({ hotel }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Grid
        Container
        key={hotel.id}
        className="card card-cursor"
        onClick={() => {
          navigate(`detalle/${hotel.id}`, { state: { idHotel: hotel.id } });
        }}
      >
        <Grid item xs={12} sm={12} md={3} lg={2}>
          <img className="card-img-top" src={hotel.thumbnail}></img>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={10}>
            <Grid item xs={12}>
                  <div className="title">{hotel.title}</div>
                </Grid>
                <Grid item xs={12}>
                  <StarRanking score={hotel.rating} edit={false} />
                </Grid>
              <Grid item xs={12}>
                <div className="descrip">{hotel.description}</div>
              </Grid>
          
          </Grid>
        </Grid>
    </Container>
  );
}

export default Card;
