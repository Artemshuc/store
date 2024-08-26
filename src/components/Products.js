function Products() {
  const [products, setProducts] = useState([]);

  // Асинхронная функция для получения данных
  const fetchProducts = async (category) => {
    try {
      let API = "https://fakestoreapi.com/products";
      if (category !== "all") {
        API = `https://fakestoreapi.com/products/category/${category}`;
      }
      const response = await axios.get(API);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Используем useEffect для первоначальной загрузки данных
  useEffect(() => {
    fetchProducts("all"); // Загружаем все продукты при монтировании
  }, []);

  return (
    <div>
      <Categories
        onSelectCategory={(category) => {
          fetchProducts(category); // Обновляем продукты в зависимости от выбранной категории
        }}
      />
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <h3>{product.title}</h3>
              <p>{product.price} $</p>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default Products;
