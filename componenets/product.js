import React from 'react';
import "../componenets/product.css"

class ProductTable extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        { no: 1, name: 'Product A', price: 10, tags: 'Tag 1', vendor: 'Vendor 1' },
        { no: 2, name: 'Product B', price: 15, tags: 'Tag 2', vendor: 'Vendor 2' },
        { no: 3, name: 'Product C', price: 20, tags: 'Tag 3', vendor: 'Vendor 3' },
        { no: 1, name: 'Product D', price: 10, tags: 'Tag 1', vendor: 'Vendor 4' },
        { no: 2, name: 'Product E', price: 15, tags: 'Tag 2', vendor: 'Vendor 5' },
        { no: 3, name: 'Product F', price: 20, tags: 'Tag 3', vendor: 'Vendor 6' }
        // Add more products as needed
      ],
      cart: [],
      total: 0,
    };
  }

  renderTableHeader() {
    return (
      <tr>
        <th>No</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Tags</th>
        <th>Vendor</th>
        <th>Add to Cart</th>
      </tr>
    );
  }

  renderTableData(products) {
    return products.map((product) => (
      <tr key={product.no}>
        <td>{product.no}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.tags}</td>
        <td>{product.vendor}</td>
        <td>
          <button onClick={() => this.addToCart(product)}>Add to Cart</button>
        </td>
      </tr>
    ));
  }

  renderCartTableHeader() {
    return (
      <tr>
        <th>No</th>
        <th>Product Name</th>
        <th>Original Price</th>
        <th>Discount Percentage</th>
        <th>Vendor</th>
        <th>Remove</th>
      </tr>
    );
  }

  renderCartTableData(cart) {
    return cart.map((item) => (
      <tr key={item.no}>
        <td>{item.no}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.discount}%</td>
        <td>{item.vendor}</td>
        <td>
          <button onClick={() => this.removeFromCart(item.no)}>Remove</button>
        </td>
      </tr>
    ));
  }

  addToCart(product) {
    // Calculate a discount percentage (e.g., 10% off)
    const discount = 10;
    const discountedPrice = (1 - discount / 100) * product.price;
    const cartItem = { ...product, discount, price: discountedPrice };

    this.setState((prevState) => ({
      cart: [...prevState.cart, cartItem],
      total: prevState.total + discountedPrice,
    }));
  }

  removeFromCart(itemNo) {
    this.setState((prevState) => {
      const updatedCart = prevState.cart.filter((item) => item.no !== itemNo);
      const total = updatedCart.reduce((acc, item) => acc + item.price, 0);
      return { cart: updatedCart, total };
    });
  }

  render() {
    return (
      <div>
        <h2 align="center">Product Table</h2>
        <table border="1">
          <thead>{this.renderTableHeader()}</thead>
          <tbody>{this.renderTableData(this.state.products)}</tbody>
        </table>
        <h2 align="center">Shopping Cart</h2>
        <table border="1">
          <thead>{this.renderCartTableHeader()}</thead>
          <tbody>{this.renderCartTableData(this.state.cart)}</tbody>
        </table>
        <p>Total Price: ${this.state.total.toFixed(2)}</p>
      </div>
    );
  }
}

export default ProductTable;
