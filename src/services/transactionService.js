import { TransactionModel } from "../models/TransactionModel.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

export const getTransactions = async (filter) => {
  try {
    const response = await TransactionModel.find({ yearMonth: filter }).sort({
      yearMonthDay: 1,
    });

    return response;
  } catch (err) {
    console.log(err.message);
  }
};

export const getDates = async () => {
  try {
    const response = await TransactionModel.find({})
      .sort({
        yearMonthDay: 1,
      })
      .select("yearMonth");

    return response;
  } catch (err) {
    console.log(err.message);
  }
};

getDates();

export const createTransaction = async (transaction) => {
  try {
    const response = await TransactionModel.create(transaction);

    return response;
  } catch (err) {
    console.log(err.message);
  }
};

export const editTransaction = async (id, transaction) => {
  try {
    const response = await TransactionModel.findByIdAndUpdate(id, transaction, {
      useFindAndModify: false,
      new: true,
    });

    return response;
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteTransaction = async (id) => {
  try {
    const response = await TransactionModel.findByIdAndDelete(id);

    return response;
  } catch (err) {
    console.log(err.message);
  }
};
