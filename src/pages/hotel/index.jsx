import { getHoteles } from "../../data/dataHotel";
import Card from "../card";
import { CircularProgress } from "@material-ui/core";

const Hoteles = () => {
  const { data, loading } = getHoteles();
  return (
    <div>
      <div>
      {loading && (
          <CircularProgress />
      )}
      </div>
      <div>
      {!loading && <h1 className="title-hotel">Hoteles Trivago</h1>}
      {data?.map((item) => (
        <Card key={item.id} hotel={item} />
      ))}
      </div>
    </div>
  );
}

export default Hoteles;
