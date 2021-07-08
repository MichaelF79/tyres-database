import TyresDAO from "../dao/tyresDAO.js"

export default class TyresController { 
  static async apiGetTyres(req, res) { // method to call url, create query string
    const tyresPerPage = req.query.tyresPerPage ? parseInt(req.query.tyresPerPage, 5) : 15  // set to equal query passed into url - if it exists we convert the string to an integer, if not default is 15
    const page = req.query.page ? parseInt(req.query.page, 10) : 0
    // same thing with the page numbers, default 0
    let filters = {} // starts off as empty object
    if (req.query.brand) {  // if we see the 'brand' in query string filter set to query string
      filters.brand = req.query.brand
    } else if (req.query.title) {
      filters.title = req.query.title
    } else if (req.query.size) {
      filters.size = req.query.size
    }

    const { tyresList, totalNumTyres } = await TyresDAO.getTyres({ // call getTyres by passing in... returns tyresList and number of tyres, as we specified
      filters,
      page,
      tyresPerPage,
    })

    let response = {     // create response to send when api url is called
      tyres: tyresList,
      page: page,
      filters: filters,
      entries_per_page: tyresPerPage,
      total_results: totalNumTyres,
    }
    res.json(response)
  }
  
  static async apiGetTyreBrands(req, res, next) { // create methods to call url with filters... Simple get request, no parameters to enter
    try {
      let brands = await TyresDAO.getBrands()
      res.json(brands)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }

  static async apiGetTyreTitles(req, res, next) {
    try {
      let titles = await TyresDAO.getTitles()
      res.json(titles)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }

  static async apiGetTyreSizes(req, res, next) {
    try {
      let sizes = await TyresDAO.getSizes()
      res.json(sizes)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }

}

// test api in Postman