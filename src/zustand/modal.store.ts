import { create } from "zustand";

type ModalStoreState = {
  openModal: boolean;
  closeModal: boolean;
};
export const useModalStore = create<ModalStoreState>(() => ({
  openModal: false,
  closeModal: true,
}));
