import React, { useState, useEffect } from "react";
import TyreDataService from "../services/tyre";
import { Link } from "react-router-dom";

const Tyre = props => {
  const initialTyreState = {
    id: "",
    brand: "",
    logo_url: "",
    title: "",
    size: "",
    price: "",
    description: "",
    image_url: ""
  };

  const [tyre, setTyre] = useState(initialTyreState);

  const getTyre = () => {
    TyreDataService.get()
      .then(response => {
        setTyre(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTyre(props.match.params);
  }, [props.match.params]);

  return (
    <div>
      {tyre ? (
        <div>
          <h5>{tyre.brand}</h5>
          <p>
            <strong>Title: </strong>{tyre.title}<br/>
            <strong>Size: </strong>{tyre.size} 
          </p>        
        </div>
      ) : (
        <div>
          <br />
          <p>No tyre selected.</p>
        </div>
      )}
    </div>
  );
};

export default Tyre;
