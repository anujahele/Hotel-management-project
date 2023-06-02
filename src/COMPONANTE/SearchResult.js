import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./SearchResult.css";

function SearchResult({img,location,title,description,star,price,total,book,
}) {
  return (
    <div className="searchresult">
      <img src={img} alt="" />
      <div className="searchresult_info">
        <div className="searchresult_infotop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>------</p>
          <p>{description}</p>
        </div>
        <div className="searchresult_infobottom">
          <div className="searchresult_stars">
            <StarIcon className="searchresult_star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchresults_price">
            <h2>${price}/night</h2>
            <p>${total}totle</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;


