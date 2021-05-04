import {
  createTransaction,
  deleteTransaction,
  editTransaction,
  getDates,
  getTransactions,
} from "../services/transactionService.js";

import express from "express";

export const router = express.Router();

router.get("/", async (req, res) => {
  try {
    if (typeof req.query.filter === "undefined") {
      res.status(404).json({
        success: false,
        error: "Filter not informed",
      });
    }

    const response = await getTransactions(req.query.filter);

    res.status(200).json({
      success: true,
      count: response.length,
      transactions: response,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

router.get("/dates", async (req, res) => {
  try {
    const response = await getDates();

    res.status(200).json({
      success: true,
      count: response.length,
      dates: response,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const response = await createTransaction(req.body);

    res.status(200).json({
      success: true,
      transaction: response,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const response = await editTransaction(req.params.id, req.body);

    res.status(200).json({
      success: true,
      updatedTransaction: response,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const response = await deleteTransaction(req.params.id);

    res.status(200).json({
      success: true,
      deletedTransaction: response,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});
