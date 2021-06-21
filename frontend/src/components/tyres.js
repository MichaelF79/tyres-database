import React, { useState, useEffect } from "react";
import TyreDataService from "../services/tyre";

const Tyre = props => {
  const initialTyreState = {
    _id: null,
    brand: "",
    logo_url: "",
    title: "",
    size: "",
    price: "",
    description: "",
    image_url: ""
  };

  const [tyre, setTyre] = useState(initialTyreState);

  const getTyre = _id => {
    TyreDataService.get(_id)
      .then(response => {
        setTyre(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTyre(props.match.params._id);
  }, [props.match.params._id]);


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
