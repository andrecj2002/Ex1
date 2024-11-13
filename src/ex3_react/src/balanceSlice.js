import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 1000, // Saldo inicial
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  // Reducers -> Explicam como é que o estado da aplicação devem mudar consoante o que é enviado para o REDUX
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => { 
      state.balance -= action.payload;
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions;
export default balanceSlice.reducer;
