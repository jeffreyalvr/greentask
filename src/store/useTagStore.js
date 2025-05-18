import { create } from "zustand";

const useTagStore = create((set) => ({
  tags: [
    { id: 0, name: "web development", colorId: 2 },
    { id: 1, name: "leitura", colorId: 1 },
    { id: 2, name: "game dev", colorId: 6 },
    { id: 3, name: "meditação", colorId: 4 },
    { id: 4, name: "workout", colorId: 0 },
  ],
  getTagById: (id) => {
    const tag = useTagStore.getState().tags.find((t) => t.id === id);
    return tag;
  },
}));

export default useTagStore;
