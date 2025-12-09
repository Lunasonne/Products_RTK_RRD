import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type AuthState from './types/AuthState'
import type Credentials from './types/Credentials'
import * as api from './api'


const initialState: AuthState = {user: undefined};

export const login = createAsyncThunk('auth/login', ({ username, password }: Credentials) =>
    api.login(username, password)
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {logout(state) {
      state.user = undefined
      state.error = ''
    },},
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                if ('message' in action.payload) {
                    state.error = action.payload.message
                } else {
                    state.user = action.payload
                    state.error = ''
                }
            })
            .addCase(login.rejected, (state) => {
                state.error = 'Wrong email or password' 
            })
    },
})
export default authSlice.reducer // Сам редьюсер (функция)
export const { logout } = authSlice.actions; // Action creator нужен для dispatch на фронтенде.
// authSlice.reducer — это одна функция редьюсера, которая объединяет все изменения из reducers + extraReducers.
// Redux видит только функцию редьюсера — не reducers, не extraReducers, а объединённую функцию, которую slice сам генерирует.
// То есть всё, что написано в reducers и extraReducers, уже внутри одной функции authSlice.reducer
// Ключ auth → ветка в state
// Значение authReducer → единственная функция, которая умеет обрабатывать все действия из reducers и extraReducers
// Redux не выбирает ничего вручную — он просто вызывает эту функцию редьюсера с state и action.