import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const asyncLoginAction = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const body = new URLSearchParams(payload).toString();
      const { data } = await http().post("/auth/login", body);
      return data.results.token;
    } catch (err) {
      const results = err?.response?.results;
      // const message = err?.response?.message;
      if (results) {
        return rejectWithValue(results);
      }
      if (err.code === "ERR.NETWORK") {
        return rejectWithValue("Error: Connection to backend failed");
      }
      // return rejectWithValue(message);
      return rejectWithValue("invalid email or password is invvalid");
    }
  }
);
