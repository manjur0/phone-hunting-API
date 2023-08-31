const shop = {
    woner: "SF Manjur",
    Location: "Lakshmipur",
    Catagories: "Digital Shop",
    Item: {
        Laptop: "Samsung",
        Phone: "Iphon",
        Headphon: "MSI"
    },
    product: [12, 32, 432, 23, 53, 53],
    inNew: false,
    inOpen: true
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);