// 4) найдите средний райтинг среди всех продуктов

const get_info = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    const rating_array = products.map(product => product.rating);
    const avg_rate = rating_array.reduce((total_rage, { rate }) => total_rage + rate, rating_array[0].rate) / products.length;
    console.log(avg_rate)
}

get_info();