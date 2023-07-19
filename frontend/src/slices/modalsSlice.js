import { createSlice } from '@reduxjs/toolkit';
import messagesSlice from './messagesSlice';

const initialState = {
  addChannel: null,
  deleteChannel: null,
  renameChannel: null,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showModal: (state, { payload }) => {
      state[payload] = true;
    },
    hideModal: (state, { payload }) => {
      state[payload] = false;
    },
    deleteChannelModal: (state, { payload }) => {
      state.deleteChannel = payload;
    },
    renameChannelModal: (state, { payload }) => {
      state.renameChannel = payload;
    },
  },
});

export const { showModal, hideModal, deleteChannelModal, renameChannelModal } = modalsSlice.actions;
export default modalsSlice.reducer;