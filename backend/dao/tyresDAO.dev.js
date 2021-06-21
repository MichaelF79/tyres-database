"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongodb = _interopRequireDefault(require("mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ObjectId = _mongodb["default"].ObjectID;
var tyres;

var TyresDAO =
/*#__PURE__*/
function () {
  function TyresDAO() {
    _classCallCheck(this, TyresDAO);
  }

  _createClass(TyresDAO, null, [{
    key: "injectDB",
    value: function injectDB(conn) {
      return regeneratorRuntime.async(function injectDB$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!tyres) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.prev = 2;
              _context.next = 5;
              return regeneratorRuntime.awrap(conn.db(process.env.TYRES_NS).collection("tyres"));

            case 5:
              tyres = _context.sent;
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              console.error("Unable to establish a collection handle in tyresDAO: ".concat(_context.t0));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[2, 8]]);
    }
  }, {
    key: "getTyres",
    value: function getTyres() {
      var _ref,
          _ref$filters,
          filters,
          _ref$page,
          page,
          _ref$tyresPerPage,
          tyresPerPage,
          query,
          cursor,
          displayCursor,
          tyresList,
          totalNumTyres,
          _args2 = arguments;

      return regeneratorRuntime.async(function getTyres$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref$filters = _ref.filters, filters = _ref$filters === void 0 ? null : _ref$filters, _ref$page = _ref.page, page = _ref$page === void 0 ? 0 : _ref$page, _ref$tyresPerPage = _ref.tyresPerPage, tyresPerPage = _ref$tyresPerPage === void 0 ? 9 : _ref$tyresPerPage;

              if (filters) {
                if ("brand" in filters) {
                  query = {
                    "brand": {
                      $eq: filters["brand"]
                    }
                  };
                } else if ("title" in filters) {
                  query = {
                    "title": {
                      $eq: filters["title"]
                    }
                  };
                } else if ("size" in filters) {
                  query = {
                    "size": {
                      $eq: filters["size"]
                    }
                  };
                }
              }

              _context2.prev = 2;
              _context2.next = 5;
              return regeneratorRuntime.awrap(tyres.find(query));

            case 5:
              cursor = _context2.sent;
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](2);
              console.error("Unable to issue find command, ".concat(_context2.t0));
              return _context2.abrupt("return", {
                tyresList: [],
                totalNumtyres: 0
              });

            case 12:
              displayCursor = cursor.limit(tyresPerPage).skip(tyres * page);
              _context2.prev = 13;
              _context2.next = 16;
              return regeneratorRuntime.awrap(displayCursor.toArray());

            case 16:
              tyresList = _context2.sent;
              _context2.next = 19;
              return regeneratorRuntime.awrap(tyres.countDocuments(query));

            case 19:
              totalNumTyres = _context2.sent;
              return _context2.abrupt("return", {
                tyresList: tyresList,
                totalNumTyres: totalNumTyres
              });

            case 23:
              _context2.prev = 23;
              _context2.t1 = _context2["catch"](13);
              console.error("Unable to convert cursor to array or problem counting documents, ".concat(_context2.t1));
              return _context2.abrupt("return", {
                tyresList: [],
                totalNumTyres: 0
              });

            case 27:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[2, 8], [13, 23]]);
    }
  }, {
    key: "getBrands",
    value: function getBrands() {
      var brands;
      return regeneratorRuntime.async(function getBrands$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              brands = [];
              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap(tyres.distinct("brand"));

            case 4:
              brands = _context3.sent;
              return _context3.abrupt("return", brands);

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              console.error("Unable to get brands, ".concat(_context3.t0));
              return _context3.abrupt("return", brands);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "getTitles",
    value: function getTitles() {
      var titles;
      return regeneratorRuntime.async(function getTitles$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              titles = [];
              _context4.prev = 1;
              _context4.next = 4;
              return regeneratorRuntime.awrap(tyres.distinct("title"));

            case 4:
              titles = _context4.sent;
              return _context4.abrupt("return", titles);

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);
              console.error("Unable to get titles, ".concat(_context4.t0));
              return _context4.abrupt("return", titles);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "getSizes",
    value: function getSizes() {
      var sizes;
      return regeneratorRuntime.async(function getSizes$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              sizes = [];
              _context5.prev = 1;
              _context5.next = 4;
              return regeneratorRuntime.awrap(tyres.distinct("size"));

            case 4:
              sizes = _context5.sent;
              return _context5.abrupt("return", sizes);

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](1);
              console.error("Unable to get sizes, ".concat(_context5.t0));
              return _context5.abrupt("return", sizes);

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }]);

  return TyresDAO;
}();

exports["default"] = TyresDAO;