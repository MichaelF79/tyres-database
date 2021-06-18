// const tyres = [
//   {
//     id: 0,
//     brand: "Bridgestone",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/bridgestonelogo.jpg",
//     title: "Ecopia EP150",
//     size: "185/55 V 16",
//     price: "£95.99",
//     description: "Excellent levels of comfort and stability. More precise control of the vehicle. High levels of safety. Fantastic performance in wet weather conditions.",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/bridgestone-ecopia-ep150.png"
//   },
//   {
//     id: 1,
//     brand: "Bridgestone",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/bridgestonelogo.jpg",
//     title: "Potenza RE050",
//     size: "205/45 W 17",
//     price: "£105.00",
//     description: "Assurance of maximum safety levels. Greater degree of control on the car, enhancing driver confidence significantly. A quiet and smooth ride. Ensures safe driving experience at high speeds by maintaining high stability and improved traction that maximises the braking responsiveness.",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/bridgestone-potenza-s001.png"
//   },
//   {
//     id: 2,
//     brand: "Bridgestone",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/bridgestonelogo.jpg",
//     title: "Turanza Eco",
//     size: "195/55 V 16",
//     price: "£100.25",
//     description: "This pattern may have options that are suited for Audi, Bentley, Ferrari, Chrysler, Porsche, Jaguar, Mercedes-Benz or BMW vehicles. This pattern may also be available as a Run Flat or have extra-load capabilities.",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/bridgestone-turanza-el42.png"
//   },
//   {
//     id: 3,
//     brand: "Continental",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/continental-300.jpg",
//     title: "AllSeasonContact",
//     size: "225/40 V 18",
//     price: "£115.73",
//     description: "The Continental AllSeasonContact tyre has won the Auto Express 2018 all-season tyre test. With Continental Tyres once again taking the top spot, this means that the premium tyre manufacturer becomes the first brand to win all three seasonal tyre tests within one calender year.",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/continental-allseasoncontact-seal.png"
//   },
//   {
//     id: 4,
//     brand: "Continental",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/continental-300.jpg",
//     title: "ContiEcoContact 3",
//     size: "185/65 T 15",
//     price: "£66.34",
//     description: "Safety is increased due to reduced braking distances. Excellent value for money due to higher fuel efficiency. Improved traction when cornering on wet roads. Maximum control due to excellent handling capabilities.",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/continental-contiecocontact-3.png"
//   },
//   {
//     id: 5,
//     brand: "Continental",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/continental-300.jpg",
//     title: "SportContact 6",
//     size: "225/35 Y 19",
//     price: "£143.88",
//     description: "This pattern may have options that are suited for Audi, Bentley, Ferrari, Chrysler, Porsche, Jaguar, Mercedes-Benz or BMW vehicles. This pattern may also be available as a Run Flat or have extra-load capabilities. Please check for the appropriate symbols in the tyre search results.",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/sport-contact-6-with-logo.png"
//   },
//   {
//     id: 6,
//     brand: "Dunlop",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/dunlop-lrg.jpg",
//     title: "SP Sport 01",
//     size: "225/50 Y 17",
//     price: "£102.75",
//     description: "Reduced rolling resistance to ensure cost savings due to the ability to drive for an increased number of miles. Improved dry and wet grip increases safety and enhances control on all surfaces. Resistance against aquaplaning ensures maximum control on wet road surfaces. Outstanding levels of comfort due to reduced tyre noise levels.",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/dunlop-sp-sport-01.png"
//   },
//   {
//     id: 7,
//     brand: "Dunlop",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/dunlop-lrg.jpg",
//     title: "SP Sport BluResponse",
//     size: "215/60 V 16",
//     price: "£103.36",
//     description: "Dunlop SP Sport BluResponse is a premium tyre suited for high-performance driving. These tyres offer safety and improved handling in wet or dry summer conditions.",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/dunlopspsportbluresponse.png"
//   },
//   {
//     id: 8,
//     brand: "Dunlop",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/dunlop-lrg.jpg",
//     title: "StreetResponse 2",
//     size: "165/65 T 15",
//     price: "£68.29",
//     description: "Reduced braking distances on both dry and wet road surfaces. Minimised tyre noise and vibration levels. Improved steering and braking responsiveness. Excellent comfort levels.",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/dunlop-streetresponse-2.png"
//   },
//   {
//     id: 9,
//     brand: "Goodyear",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/goodyear-lrg.jpg",
//     title: "DuraGrip",
//     size: "175/65 T 15",
//     price: "£71.14",
//     description: "Increased dry handling performance and improved noise reduction. Aquaplaning resistance and enhanced wet performance. Significantly enhanced tyre longevity. Improved comfort levels.",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/goodyear-duragrip.png"
//   },
//   {
//     id: 10,
//     brand: "Goodyear",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/goodyear-lrg.jpg",
//     title: "EfficientGrip Performance 2",
//     size: "215/55 V 16",
//     price: "£104.35",
//     description: "Get superior performance and a fantastic 20% more mileage with the new summer compound tyre from Goodyear, TÜV SÜD tested and certified. Drive with confidence with improved stability on corners, thanks to a high tread elasticity and improved flexibility. This tyre also offers a shorter braking distance on wet and dry roads without compromising on performance, and the larger ribs at the centre ensure excellent handling and smooth vehicle control",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/efficient-grip-2-win.png"
//   },
//   {
//     id: 11,
//     brand: "Goodyear",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/goodyear-lrg.jpg",
//     title: "Vector 4Seasons",
//     size: "215/55 V 16",
//     price: "£111.70",
//     description: "Improved fuel efficiency. Excellent grip in wet conditions. Superb braking responsiveness on wet road surfaces. Fantastic levels of comfort due to reduced internal noise levels.",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/goodyear-vector-4seasons.png" 
//   },
//   {
//     id: 12,
//     brand: "Michelin",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/michelin-300.jpg",
//     title: "CrossClimate +",
//     size: "195/55 V 16",
//     price: "£115.44",
//     description: "Excellent grip levels. Improved tyre longevity to ensure excellent value for money. High mileage characteristics. Increased steering and braking responsiveness to ensure excellent handling capabilities.",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/untitled-design--30-.png"
//   },
//   {
//     id: 13,
//     brand: "Michelin",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/michelin-300.jpg",
//     title: "Energy Saver",
//     size: "195/55 W 16",
//     price: "£125.47",
//     description: "Improved levels of safety due to fantastic grip levels. Extended tyre longevity due to even wear characteristics of the tyre tread. Minimised risk of skidding or aquaplaning on wet surfaces. Reduced fuel consumption ensuring excellent value for money.",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/michelin-energy-saver.png"
//   },
//   {
//     id: 14,
//     brand: "Michelin",
//     logo_url: "https://www.tyre-shopper.co.uk/images/manufacturers/michelin-300.jpg",
//     title: "Primacy 3",
//     size: "215/55 H 16",
//     price: "£125.00",
//     description: "Excellent mileage performance due to reduced rolling resistance. Improved levels of safety in wet weather conditions. Fantastic gripping capabilities on both dry and wet road surfaces. Heightened comfort levels due to reduced tyre noise.",
//     image_url: "https://nta.azureedge.net/tyre-patterns-sm/michelin-primacy-3.png"
//   },
// ]