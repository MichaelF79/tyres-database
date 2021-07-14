import React, { useState, useEffect } from "react";
import TyreDataService from "../services/tyre"; // provides information from backend server

const TyresList = props => { //react hooks used to create state variables...
  const [tyres, setTyres] = useState([]);
  const [searchSize, setSearchSize ] = useState("");
  const [searchTitle, setSearchTitle ] = useState("");
  const [searchBrand, setSearchBrand ] = useState("");
  const [brands, setBrands] = useState(["All Brands"]);
  const [titles, setTitles] = useState(["All Titles"]);
  const [sizes, setSizes] = useState(["All Sizes"]);
  
  useEffect(() => { // what component needs to do after rendering
    retrieveTyres();
    retrieveBrands();
    retrieveTitles();
    retrieveSizes();
  }, []);

  // how to select and return a choice from the dropdown filter menu
  const onChangeSearchBrand = e => { 
    const searchBrand = e.target.value;
    setSearchBrand(searchBrand);
    
  };

  const onChangeSearchSize = e => {
    const searchSize = e.target.value;
    setSearchSize(searchSize);
  };

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTyres = () => { // find all tyres in db
    TyreDataService.getAll()
      .then(response => {
        console.log(response.data);
        setTyres(response.data.tyres);
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrieveBrands = () => {
    TyreDataService.getBrands()
      .then(response => {
        console.log(response.data);
        setBrands(["All Brands"].concat(response.data));
        // 'All Brands' as first element in data
      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrieveTitles = () => {
    TyreDataService.getTitles()
      .then(response => {
        console.log(response.data);
        setTitles(["All Titles"].concat(response.data));
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrieveSizes = () => {
    TyreDataService.getSizes()
      .then(response => {
        console.log(response.data);
        setSizes(["All Sizes"].concat(response.data));
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTyres();
  };

  const find = (query, by) => {
    TyreDataService.find(query, by)
      .then(response => {
        console.log(response.data);
        setTyres(response.data.tyres);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByBrand = () => {
    if (searchBrand === "All Brands") {
      refreshList();
    } else {
      find(searchBrand, "brand")
    }
  };

  const findBySize = () => {
    if (searchSize === "All Sizes") {
      refreshList();
    } else {
    find(searchSize, "size")
    }
  };

  const findByTitle = () => {
    if (searchTitle === "All Titles") {
      refreshList();
    } else {
    find(searchTitle, "title")
    }
  };

  return (
    <div className="container">
      <div className="row pb-1">
        <div className="input-group col pb-1">
          <select onChange={onChangeSearchBrand}>
            {brands.map(brand => {
              return (
                <option value={brand}> {brand.substr(0, 15)} </option>
              )
            })}
          </select>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByBrand}
            >
              Search
            </button>
          </div>
        </div>

        <div className="input-group col pb-1">
          <select onChange={onChangeSearchTitle}>
            {titles.map(title => {
              return (
                <option value={title}> {title.substr(0, 15)} </option>
              )
            })}
          </select>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>         
        </div>

        <div className="input-group col pb-1">
          <select onChange={onChangeSearchSize}>
            {sizes.map(size => {
              return (
                <option value={size}> {size.substr(0, 15)} </option>
              )
            })}
          </select>        
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findBySize}
            >
              Search
            </button>
          </div>
        </div>     
      </div>

      <div className="row">
        {tyres.map((tyre) => {         
          return (
            <div className="col-lg-4 mt-3 pb-1">
              <div className="card h-100 shadow-lg mb-5 bg-white rounded border border-dark" style={{width: 300}}> 
                <img className="card-img-top border-bottom border-dark"src={tyre.logo_url} alt={`${tyre.brand}`} />                 
                <img className="card-img-top border-bottom border-secondary"src={tyre.image_url} alt={`${tyre.title}`} />
                <div className="card-body bg-light">             
                  <h2 className="card-title text-center">{tyre.brand}</h2>
                  <h5 className="card-subtitle text-center mb-2">{tyre.title}</h5>               
                  <h6 className="card-text text-center">
                    {tyre.size}                 
                  </h6>
                  <p className="card-text text-center">
                  {tyre.description}
                  </p>                                               
                </div>
                <div className="card-footer mt-auto">
                  <h3 className="card-text text-center text-white bg-dark rounded">{tyre.price}</h3>
                </div>              
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TyresList;