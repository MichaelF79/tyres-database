let tyres

export default class tyresDAO {
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
    tyresPerPage = 9,
  } = {}) {
    let query
    if (filters) {
      if ("size" in filters) {
        query = { $text: { $search: filters["size"] } }
      } else if ("brand" in filters) {
        query = { "brand": { $eq: filters["brand"] } }
      } else if ("title" in filters) {
        query = { "title": { $eq: filters["title"] } }
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
}