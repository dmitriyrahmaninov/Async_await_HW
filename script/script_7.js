// 7) сформируйте объект, который содержит два 3 свойства
//     - titles (все наименования товаров)
//     - images (все картинки товаров)

const get_new_obj = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    const result = {
        titles: products.map(product => product.title),
        images: products.map(product => product.image)
    }
    console.log(result)
}

get_new_obj();