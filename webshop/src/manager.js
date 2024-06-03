import axios from 'axios';

class Product {
  constructor(id="", name="", desc="", price=0) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
  }
}

class Stock {
  constructor() {
    this.list_product = [];
  }

  async init_products() {
    try {
      const response = await axios.get('http://localhost:3000/products');
      console.log(response.data);
      for (const productData of response.data) {
        const { id, name, description, price } = productData;
        const product = new Product(id, name, description, price);
        this.list_product[id-1] = product;
        console.log(this.list_product);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  get_list_product() {
    return this.list_product;
  }

  get_prod_by_id(id) {
    for (var i = 0; i < this.list_product.length; i++) {
      if (this.list_product[i].id == id) {
        return this.list_product[i];
      }
    }
    return null;
  }
}

class Cart {
  constructor() {
    this.list_cart = {};
  }

  get_list_cart() {
    return this.list_cart;
  }

  addInCart(id) {
    if (this.list_cart[id]) {
      this.list_cart[id]++;
    } else {
      this.list_cart[id] = 1;
    }
  }

  removeFromCart(id) {
    if (this.list_cart[id]) {
      if (this.list_cart[id] === 1) {
        delete this.list_cart[id];
      } else {
        this.list_cart[id]--;
      }
    }
  }

  get_nbr_product() {
    return Object.values(this.list_cart).reduce((total, quantity) => total + quantity, 0);
  }

  get_total_price(stk) {
    return Object.entries(this.list_cart).reduce((total, [productId, quantity]) => {
      const product = stk.get_prod_by_id(productId);
      return total + (product ? product.price * quantity : 0);
    }, 0);
  }
}

export { Product, Stock, Cart };
