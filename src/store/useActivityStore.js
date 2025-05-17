import { create } from "zustand";

const useActivityStore = create((set) => ({
  activities: [
    { id: 0, tagId: 1, startedAt: "06:35", totalTime: 30 },
    { id: 1, tagId: 3, startedAt: "08:13", totalTime: 30 },
    { id: 2, tagId: 0, startedAt: "10:00", totalTime: 120 },
    { id: 3, tagId: 0, startedAt: "12:25", totalTime: 120 },
    { id: 4, tagId: 4, startedAt: "17:42", totalTime: 60 },
    { id: 5, tagId: 1, startedAt: "22:00", totalTime: 30 },
  ],
  getActivityById: (id) => {
    const activity = useActivityStore
      .getState()
      .activities.find((a) => a.id === id);
    return activity;
  },
}));

export default useActivityStore;
