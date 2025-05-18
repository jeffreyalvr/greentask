import ActivityItem from "@components/Activity/ActivityItem";

import useActivityStore from "@/store/useActivityStore";

const Activity = () => {
  const items = useActivityStore((state) => state.activities);

  return (
    <div className="flex gap-3 flex-wrap w-full">
      {items.map((item) => (
        <ActivityItem
          key={item.id}
          tagId={item.tagId}
          startedAt={item.startedAt}
          totalTime={item.totalTime}
        />
      ))}
    </div>
  );
};

export default Activity;
