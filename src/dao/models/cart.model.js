import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const cartCollection = "carts";

const cartSchema = new mongoose.Schema({
  products: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
        quantity: Number,
      },
    ],
  },
});
cartSchema.plugin(mongoosePaginate);

export const cartModel = mongoose.model(cartCollection, cartSchema);
