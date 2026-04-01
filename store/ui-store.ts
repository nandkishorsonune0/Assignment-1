"use client";

import { create } from "zustand";

type UiState = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export const useUiStore = create<UiState>((set) => ({
  activeSection: "visa-info",
  setActiveSection: (section) => set({ activeSection: section }),
}));
