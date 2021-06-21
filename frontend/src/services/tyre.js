import http from "../http-common";

class TyreDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }

  getBrands(id) {
    return http.get(`/brands`);
  }

  getTitles(id) {
    return http.get(`/titles`);
  }

  getSizes(id) {
    return http.get(`/sizes`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  } 

}

export default new TyreDataService()