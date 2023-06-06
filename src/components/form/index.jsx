import { useState } from "react";
import StarRanking from "../rankingStar";

const Formulario = ({ value }) => {
  const handleSubmit = value;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const agregar = () => {
    handleSubmit({
      title: title,
      description: description,
      rating: rating,
    });
    setTitle("");
    setDescription("");
    setRating("");
  };

  const rankingStar = (props) => {
    setRating(props.rating);
    console.log(rating);
  };

  return (
    <div style={{textAlign:"center"}}>
      <div>
      <div className="margin-input">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="width-input"
          value={title}
          type="text"
          placeholder="Ingrese el titulo"
        />
      </div>
      <div>
        <textarea
          className="width-text-area"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          cols="40"
          rows="5"
          placeholder=" Ingrese la descripción"
          ></textarea>
      </div>
      <div className="card-cursor">
        <StarRanking score={0} edit={true} value={rankingStar} />
      </div>
      <div>
        <button className="btn-color" disabled={!title || !description || !rating} onClick={agregar}>Enviar</button>
      </div>
      </div>
    </div>
  );
}

export default Formulario;
