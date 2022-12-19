import { useContext } from "react";
import { userContext } from "./context/UserContext";

function Card() {
  let mode = useContext(userContext);
  return (
    <div className="card_item">
      <div className={mode ? "card_inner_dark" : "card_inner_light"}>
        <div className="card_top">
          <img src="https://i.imgur.com/qhE9KtV.jpg" alt="car" />
        </div>
        <div className="card_bottom">
          <div className="card_category">Travel</div>
          <div className="card_info">
            <p className="title">10 Best Things about Travel</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ab.
            </p>
          </div>
          <div className="card_creator">By Alex Kato</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
