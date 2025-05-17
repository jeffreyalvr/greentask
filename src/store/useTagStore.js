import { create } from "zustand";

const useTagStore = create((set) => ({
  tags: [
    { id: 0, name: "web development", colorId: 2 },
    { id: 1, name: "leitura", colorId: 0 },
    { id: 2, name: "game dev", colorId: 6 },
    { id: 3, name: "meditação", colorId: 10 },
    { id: 4, name: "workout", colorId: 14 },
  ],
  getTagById: (id) => {
    const tag = useTagStore.getState().tags.find((tag) => tag.id === id);
    return tag;
  },
}));

export default useTagStore;
