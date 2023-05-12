import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	token: '',
}

const authSilce = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			state.token = action.payload
		},
		logout: () => {
			return initialState
		},
	},
})

export const { login, logout } = authSilce.actions
export default authSilce.reducer
