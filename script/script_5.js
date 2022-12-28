// 5) напишите функцию, которая получает id товара и возвращает его рейтинг

const rate_product = async (id_product) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id_product}`);
    const product = await response.json();
    
    console.log(product.rating.rate);
}
rate_product(5);