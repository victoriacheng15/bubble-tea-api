async function getTeas (db) {
  const teasCollection = db.collection("teas");
  return teasCollection.find().toArray();
};

async function getOrders (db) {
  const orderCollection = db.collection("orders");
  return orderCollection.find().sort({ count: -1 }).toArray();
};

async function updateOrderCount (db, tea, topping) {
  const orderCollection = db.collection("orders");

  const order = await orderCollection.find({ tea, topping }).toArray();

  if (order.length > 0) {
    orderCollection.updateOne({ tea, topping }, { $inc: { count: 1 } });
  } else {
    orderCollection.insertOne({
      tea,
      topping,
      count: 1,
    });
  }
};

module.exports = { getTeas, getOrders, updateOrderCount };