// 2) сформировать массив, который содержит объекты с наименованием продукта, картинкой и значением рейтинга (числом)
const get_info = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    const result = products.map(({ title, image, rating }) => 
        ({title, image, rate: rating.rate})
    );
    console.log(result)
}
get_info()