import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
let tyres

export default class TyresDAO {
  static async injectDB(conn) {
    if (tyres) {
      return
    }
    try {
      tyres = await conn.db(process.env.TYRES_NS).collection("tyres")
    } catch (e) {
      console.error(`Unable to establish a collection handle in tyresDAO: ${e}`,)
    }
  }

  static async getTyres({
    filters = null,
    page = 0,
    tyresPerPage = 15,
  } = {}) {
    let query
    if (filters) {     
      if ("brand" in filters) {
        query = { "brand": { $eq: filters["brand"] } }
      } else if ("title" in filters) {
        query = { "title": { $eq: filters["title"] } }
      } else if ("size" in filters) {
        query = { "size": { $eq: filters["size"] } }
      }
    }
  
    let cursor 

    try {
      cursor = await tyres
      .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { tyresList: [], totalNumtyres: 0 }
    }

    const displayCursor = cursor.limit(tyresPerPage).skip(tyres * page)

    try {
      const tyresList = await displayCursor.toArray()
      const totalNumTyres = await tyres.countDocuments(query)

      return { tyresList, totalNumTyres }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { tyresList: [], totalNumTyres: 0 }
    }
  }
  
  static async getBrands() {
    let brands = []
    try {
      brands = await tyres.distinct("brand")
      return brands
    } catch (e) {
      console.error(`Unable to get brands, ${e}`)
      return brands
    }
  }

  static async getTitles() {
    let titles = []
    try {
      titles = await tyres.distinct("title")
      return titles
    } catch (e) {
      console.error(`Unable to get titles, ${e}`)
      return titles
    }
  }

  static async getSizes() {
    let sizes = []
    try {
      sizes = await tyres.distinct("size")
      return sizes
    } catch (e) {
      console.error(`Unable to get sizes, ${e}`)
      return sizes
    }
  }
}
