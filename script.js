

const anStor = {
    woner: 'SF Manjur Jubu',
    storName: 'Yeang Digital Product',
    location: 'Lakshmipur sadar',
    isOpen: true,
    inNew: false,
    products: {
        laptop: 50,
        mobile: 100,
        watch: 25,
        mouse: 30
    }
}

// console.log(anStor);
const anStorJSON = JSON.stringify(anStor);
// console.log(anStorJSON);
const anStorObj = JSON.parse(anStorJSON);
// console.log(anStorObj);
