import Button from "../Button";

const TaskSection = () => {
  return (
    <section className="flex flex-col gap-8 w-[600px] h-auto p-8 border-2 border-teal-600">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h1 className="text-xl text-[var(--primary)]">TAREFA:</h1>
        <select className="py-2 px-4 rounded-4xl border-2 border-gray-300 text-[var(--fg-light)] uppercase">
          <option>leitura</option>
          <option>web development</option>
          <option>game dev</option>
          <option>japonês</option>
          <option>italiano</option>
          <option>meditação</option>
          <option>workout</option>
        </select>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h1 className="text-xl text-[var(--accent-primary)]">TEMPO TOTAL:</h1>
        <div className="w-full pb-4 flex flex-row gap-4 overflow-x-auto">
          <Button texto={5} />
          <Button texto={10} />
          <Button texto={15} />
          <Button texto={20} />
          <Button texto={25} />
          <Button texto={30} />
          <Button texto={35} />
          <Button texto={40} />
          <Button texto={45} />
          <Button texto={50} />
          <Button texto={55} />
          <Button texto={60} />
          <Button texto={65} />
          <Button texto={70} />
          <Button texto={75} />
          <Button texto={80} />
          <Button texto={85} />
          <Button texto={90} />
          <Button texto={95} />
          <Button texto={100} />
          <Button texto={105} />
          <Button texto={110} />
          <Button texto={115} />
          <Button texto={120} />
          <Button texto={125} />
          <Button texto={130} />
          <Button texto={135} />
          <Button texto={140} />
          <Button texto={145} />
          <Button texto={150} />
          <Button texto={155} />
          <Button texto={160} />
          <Button texto={165} />
          <Button texto={170} />
          <Button texto={175} />
          <Button texto={180} />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <button className="w-max px-10 py-4 rounded-4xl text-white bg-[var(--accent-opaque)] uppercase cursor-pointer hover:bg-[var(--accent-primary)]">
          iniciar
        </button>
      </div>
    </section>
  );
};

export default TaskSection;
