import TyresDAO from "../dao/tyresDAO.js"

export default class TyresController {
  static async apiGetTyres(req, res, next) {
    const tyresPerPage = req.query.tyresPerPage ? parseInt(req.query.tyresPerPage, 5) : 15
    const page = req.query.page ? parseInt(req.query.page, 10) : 0

    let filters = {}
    if (req.query.brand) {
      filters.brand = req.query.brand
    } else if (req.query.title) {
      filters.title = req.query.title
    } else if (req.query.size) {
      filters.size = req.query.size
    }

    const { tyresList, totalNumTyres } = await TyresDAO.getTyres({
      filters,
      page,
      tyresPerPage,
    })

    let response = {
      tyres: tyresList,
      page: page,
      filters: filters,
      entries_per_page: tyresPerPage,
      total_results: totalNumTyres,
    }
    res.json(response)
  }

  static async apiGetTyreBrands(req, res, next) {
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