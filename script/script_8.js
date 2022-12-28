//8) напишите обратный процесс. Который получает объект с двумя свойствами titles и images и возвращает массив из объектов {image и title}

const object2array = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    const current_object = {
        titles: products.map(product => product.title),
        images: products.map(product => product.image)
    }

    const new_array = [];
    for (let i = 0; i < products.length; i++){
        new_array.push({title:current_object.titles[i], image:current_object.images[i]})
    }
    console.log(new_array)
}

object2array();