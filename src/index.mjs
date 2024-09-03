class Product {
  constructor(name, description, price, quantity) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }
  display() {
    return {
      `<div class="card-h-100"> 
        <img src="${this.image}" class="card-img-top" alt="${this.name}">
        <div class="card-body"> 
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.description}</p>
          <p class="card-text font-weightbold">$${this.price.toFixed(2)}</p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>`
    };
  }
}

