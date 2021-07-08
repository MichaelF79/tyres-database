import http from "../http-common"; // axios library

class TyreDataService { // class used to make all api calls and return functions from api calls
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }
  // get request of
  getBrands(id) {
    return http.get(`/brands`);
  }

  getTitles(id) {
    return http.get(`/titles`);
  }

  getSizes(id) {
    return http.get(`/sizes`);
  }
  // find used to filter through selections of dropdown box
  find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  } 

}

export default new TyreDataService()