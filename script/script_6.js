// 6) напишите функцию, которая получает id товара и новую цену и обновляет цену данного товара
const change_price = async (id_product, new_price) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id_product}`);
    const product = await response.json();
    console.log({...product, price:new_price});
}

change_price(1, 1200);