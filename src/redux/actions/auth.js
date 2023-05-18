import { createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../helpers/http'

export const asyncLoginAction = createAsyncThunk(
    'auth/login',
    async (payload, { rejectWithValue }) => {
        try {
            const body = new URLSearchParams(payload).toString()
            const { data } = await http().post('/auth/login', body)
            return data.results.token
        } catch (err) {
            const results = err?.response?.data?.results
            const message = err?.response?.data?.message
            if (results) {
                return rejectWithValue(results)
            }
            if (err.code === 'ERR.NETWORK') {
                return rejectWithValue('Error: Connection to backend failed')
            }
            // return rejectWithValue(message);
            return rejectWithValue(message)
        }
    }
)

export const asyncRegisterAction = createAsyncThunk(
    'auth/register',
    async (payload, { rejectWithValue }) => {
        try {
            const body = new URLSearchParams(payload).toString()
            const { data } = await http().post('/auth/register', body)
            return data.message
        } catch (err) {
            const results = err?.response?.data?.results
            const message = err?.response?.data?.message
            if (results) {
                return rejectWithValue(results)
            }
            if (err.code === 'ERR.NETWORK') {
                return rejectWithValue('Error: Connection to backend failed')
            }
            // return rejectWithValue(message);
            return rejectWithValue(message)
        }
    }
)

export const asyncForgotPasswordAction = createAsyncThunk(
    'auth/forgotPassword',
    async (payload, { rejectWithValue }) => {
        try {
            const body = new URLSearchParams(payload).toString()
            const { data } = await http().post('/auth/forgotPassword', body)
            return data.message
        } catch (err) {
            const results = err?.response?.data?.results
            const message = err?.response?.data?.message
            if (results) {
                return rejectWithValue(results)
            }
            if (err.code === 'ERR.NETWORK') {
                return rejectWithValue('Error: Connection to backend failed')
            }
            // return rejectWithValue(message);
            return rejectWithValue(message)
        }
    }
)