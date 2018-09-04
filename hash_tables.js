let customerData = new Map();

let customer = {
  name: "Kelli",
  phoneNumber: 1234567890,
  address: "123 Main St."
};

customerData.set(customer.phoneNumber, customer);
console.log(customerData.get(1234567890));



let storeInventory = new Map();

let inventory = {
  grocery: {
    items: "groceries",
    amount: 45,
  },
  toiletries: {
    items: "paper goods",
    amount: 68
  },
  outdoor: {
    items: "outdoor items",
    amount: 37
  }
};

storeInventory.set(inventory.grocery.items, inventory);
console.log(storeInventory.get("groceries"));