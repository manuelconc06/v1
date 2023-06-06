import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const StarRanking = ({ score, edit, value }) => {
  const rankingStar = value;
  const [ranking, setRanking] = useState(score);

  const indexStart = (index) => {
    if (edit) {
      setRanking(index + 1);
      rankingStar({ rating: index + 1 });
    }
  };
  return (
    <div className="star-container">
      {[...new Array(5)].map((star, index) => {
        return index + 1 > ranking ? (
          <AiOutlineStar
            onClick={() => indexStart(index)}
            style={{ color: "#f0d320" }}
          />
        ) : (
          <AiFillStar
            onClick={() => indexStart(index)}
            style={{ color: "#f0d320" }}
          />
        );
      })}
    </div>
  );
};

export default StarRanking;
