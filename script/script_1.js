// 1) сформировать массив, который содержит все названия продуктов

const get_info = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    // Solution method 1
    // console.log(products.map(product => product.title));

    // Solution method 2
    const result = products.reduce((titles, {title}) => [...titles, title], [])
    console.log(result)
}
get_info();

