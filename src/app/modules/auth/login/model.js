import mongoose, { Schema } from 'mongoose';

const BillSchema = new Schema(
  {
    userId: { type: String, required: true },
    client: { type: Schema.Types.Mixed, required: true },
    products: { type: Schema.Types.Array },
  },
  { timestamps: true },
);

const Bill = mongoose.model('bill', BillSchema);

export default Bill;