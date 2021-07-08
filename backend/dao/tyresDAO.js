import mongodb from "mongodb"

// Data Access Object allows code to access 'tyres' data in the database

//const ObjectId = mongodb.ObjectID (not needed)

let tyres // variable used to store reference to our database

export default class TyresDAO {
  static async injectDB(conn) { // async returns a promise - how we connect to database when server starts
    if (tyres) {
      return
    }
    try { // if there is no reference to our db we can fill with a reference to the database
      tyres = await conn.db(process.env.TYRES_NS).collection("tyres") // mongodb collection
    } catch (e) {
      console.error(`Unable to establish a collection handle in tyresDAO: ${e}`,)
    }
  }

  static async getTyres({   // function we call to get a list of our entire collection in database
    filters = null,  // filters to sort by
    page = 0, // 
    tyresPerPage = 15,
  } = {}) {
    let query
    if (filters) {     // search when a filter is requested
      if ("brand" in filters) {
        query = { "brand": { $eq: filters["brand"] } } // if entry in db equals filter passed in
      } else if ("title" in filters) {
        query = { "title": { $eq: filters["title"] } }
      } else if ("size" in filters) {
        query = { "size": { $eq: filters["size"] } }
      }
    }
  
    let cursor  

    try {
      cursor = await tyres
      .find(query)            // finds all tyres from db with the query we passed in (filters)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { tyresList: [], totalNumtyres: 0 }
    }

    const displayCursor = cursor.limit(tyresPerPage).skip(tyres * page) // limits results in cursor to tyres per page. Skip used to get actual page number

    try {
      const tyresList = await displayCursor.toArray() // returns array of tyreslist
      const totalNumTyres = await tyres.countDocuments(query) // counts the documents returned in query

      return { tyresList, totalNumTyres }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { tyresList: [], totalNumTyres: 0 }
    }
  }
  
  static async getBrands() { // 
    let brands = [] // empty array
    try {
      brands = await tyres.distinct("brand") // get all distinct brands
      return brands
    } catch (e) {
      console.error(`Unable to get brands, ${e}`)
      return brands  // return all brands
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
