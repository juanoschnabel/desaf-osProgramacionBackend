let products = [];
let idCounter = 1;
class ProductManager {
  constructor(id, title, description, price, thumbnail, code, stock) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
  static generateId() {
    return idCounter++;
  }
  static getProducts() {
    console.log(products);
  }
  static getProductById(id) {
    if (products.find((product) => product.id === id)) {
      console.log(products.find((product) => product.id === id));
    } else {
      console.log("Producto no encontrado");
    }
  }
  static addProduct(id, title, description, price, thumbnail, code, stock) {
    let codes = products.map((product) => product.code);
    if (codes.includes(code)) {
      console.log("Ya existe un producto con este código");
    } else {
      const product = new ProductManager(
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      );
      products.push(product);
      console.log("Producto creado exitosamente");
    }
  }
}
ProductManager.addProduct(
  ProductManager.generateId(),
  "GUANTE BOXEO EVERLAST",
  "GUANTE EVERLAST 12 OZ BOXEO, KICK BOXING, MUAY THAY",
  250000,
  "img.jpg",
  80,
  25
);
ProductManager.addProduct(
  ProductManager.generateId(),
  "PAR DE VENDAS 3M",
  "VENDAS DE BOXEO 3 METROS",
  800,
  "img.jpg",
  100,
  10
);
ProductManager.addProduct(
  ProductManager.generateId(),
  "GUANTINES PARA BOLSA BOXEO",
  "GUANTINES PARA BOLSA DE BOXEO, KICK BOXING, MUAY THAY. TALLE S-M-L",
  200,
  "img.jpg",
  55,
  12
);
ProductManager.addProduct(
  ProductManager.generateId(),
  "BOLSA DE BOXEO RELLENO DE TELA",
  "BOLSA DE BOXEO 120CM CON RELLENO DE TELA PARA BOXEO, KICK BOXING, MUAY THAY",
  180,
  "img.jpg",
  58,
  120
);
ProductManager.getProducts();
ProductManager.getProductById(/ID a buscar/);
