import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
  name: "app",
  initialState: { channel: null },
  reducers: {
    setChannel: (state, action) => {
      console.log(action.payload.value);
      state.channel = action.payload.value;
    },
  },
});
export const { setChannel } = appSlice.actions;
export default appSlice.reducer;
