// 3) найдите общую сумму всех продуктов (сумма всех продуктов 
// - колличество продуктов или общая сумма стоимости всех товаров ???)

const get_info = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    
    // общее колличество всех продуктов
    const count_products = products.length;
    // console.log(count_products);

    // общая стоимость всех товаров
    const sum_products = products.reduce((total_sum, { price }) => total_sum + price, products[0].price)
    console.log(sum_products);
}

get_info();