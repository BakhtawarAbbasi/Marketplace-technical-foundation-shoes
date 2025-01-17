// Store details about shoes products.
const ProductSchema = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'id', type: 'string', title: 'Product Id' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'size', type: 'string', title: 'Size' },
      { name: 'category', type: 'string', title: 'Category' },
      { name: 'tags', type: 'string', title: 'Tags' },
      { name: 'stock', type: 'number', title: 'Stock Level' },
      { name: 'image', type: 'image', title: 'Product Image' },
    ],
}


//Store details about shoes order
const Order = {
    name: 'order',
    type: 'document',
    title: 'order',
    fields: [
      { name: 'orderid', type: 'string', title: 'OrderId' },
      { name: 'customerId', type: 'string', title: 'Customer Id' },
      { name: 'productDetails', type: 'string', title: 'ProductDetail' },
      { name: 'status', type: 'string', title: 'Status' },
      { name: 'Timestamp', type: 'number', title: 'TimeStamp' },
    ],  
}



// /Store details about Customer
const CustomerId = {
    name: 'customerId',
    type: 'document',
    title: 'CustomerId',
    fields: [
      { name: 'customerid', type: 'number', title: 'customerId' },
      { name: 'name', type: 'string', title: 'Customer name' },
      { name: 'ContactInfo', type: 'string', title: 'ContactInfo' },
      { name: 'Address', type: 'string', title: 'Address' },
      { name: 'Orderhistory', type: 'number', title: 'Orderhistory' },
    ],  
}


// Store details about Shipments
const Shipments ={
    name: 'shipments',
    type: 'document',
    title: 'Shipments',
    fields: [
      { name: 'shipmentId', type: 'number', title: 'shipmentId' },
      { name: 'orderId', type: 'number', title: 'Customer orderId' },
      { name: 'deliveryDate', type: 'number', title: 'deliveryDate' },
      { name: 'status', type: 'string', title: 'status' },
    ],  
}


// Store details about payment
const payment ={
    name: 'payment',
    type: 'document',
    title: 'Payments',
    fields: [
      { name: 'paymentId', type: 'number', title: 'paymentId' },
      { name: 'orderId', type: 'number', title: 'Customer orderId' },
      { name: 'Amount', type: 'number', title: 'Amount' },
      { name: 'method', type: 'string', title: 'method' },
      { name: 'status', type: 'string', title: 'status' },
    ],  
}