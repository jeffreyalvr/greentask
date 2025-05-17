import { create } from "zustand";

const useColorStore = create((set) => ({
  colors: [
    { id: 0, name: "vermelho", hexColor: "#f94144" },
    { id: 1, name: "azul", hexColor: "#0096c7" },
    { id: 2, name: "amarelo", hexColor: "#f9c74f" },
    { id: 3, name: "verde", hexColor: "#588157" },
    { id: 4, name: "verde musgo", hexColor: "#90be6d" },
    { id: 5, name: "salmão", hexColor: "#f8ad9d" },
    { id: 6, name: "roxo", hexColor: "#b892ff" },
    { id: 7, name: "laranja", hexColor: "#f3722c" },
    { id: 8, name: "rosa", hexColor: "#ff8fab" },
    { id: 9, name: "cinza", hexColor: "#a5a5a5" },
    { id: 10, name: "verde azulado", hexColor: "#3c6e71" },
    { id: 11, name: "ciano", hexColor: "#70e4ef" },
    { id: 12, name: "magenta", hexColor: "#b43e8f" },
    { id: 13, name: "marrom", hexColor: "#9c6644" },
    { id: 14, name: "bege", hexColor: "#e6ccb2" },
    { id: 15, name: "preto", hexColor: "#242423" },
  ],
  getColorById: (id) => {
    const color = useColorStore
      .getState()
      .colors.find((color) => color.id === id);
    return color ? color.hexColor : "#cccccc";
  },
}));

export default useColorStore;
