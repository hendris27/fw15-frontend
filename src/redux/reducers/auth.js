import { createSlice } from '@reduxjs/toolkit'
import { asyncLoginAction, asyncRegisterAction, asyncForgotPasswordAction } from '../actions/auth'

const initialState = {
    token: '',
    succesMessage: '',
    errorMessage: '',
    warningMessage: '',
    formError: [],
}

const authSilce = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    // login: (state, action) => {
    // 	state.token = action.payload
    // },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload
        },
        setWarningMessage: (state, action) => {
            state.warningMessage = action.payload
        },
        clearMessage: (state) => {
            state.errorMessage = ''
            state.warningMessage = ''
            state.succesMessage = ''
        },
        logout: () => {
            return initialState
        },
    },
    extraReducers: (builder) => {
        builder.addCase(asyncLoginAction.rejected, (state, action) => {
            if (typeof action.payload === 'string') {
                state.errorMessage = action.payload
            } else {
                state.formError = action.payload
            }
        })
        builder.addCase(asyncLoginAction.fulfilled, (state, action) => {
            state.token = action.payload
        })

        builder.addCase(asyncRegisterAction.rejected, (state, action) => {
            if (typeof action.payload === 'string') {
                state.errorMessage = action.payload
            } else {
                state.formError = action.payload
            }
        })
        builder.addCase(asyncRegisterAction.fulfilled, (state, action) => {
            state.succesMessage = action.payload
        })
        builder.addCase(asyncForgotPasswordAction.rejected, (state, action) => {
            if (typeof action.payload === 'string') {
                state.errorMessage = action.payload
            } else {
                state.formError = action.payload
            }
        })
        builder.addCase(asyncForgotPasswordAction.fulfilled, (state, action) => {
            state.succesMessage = action.payload
        })
    },
})

export const { logout, setErrorMessage, setWarningMessage, clearMessage } = authSilce.actions
export default authSilce.reducer
