export default function SetupComponent({
  neededEnvs,
}: {
  neededEnvs: string[];
}) {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 uppercase">VYTVORKONVERZKU</h1>
        <p className="text-zinc-500 mb-4">
          <strong>Hello</strong>! Welcome to the setup of the{" "}
          <strong>VYTVORKONVERZKU</strong> project. To get it up and running,
          you need to set the following environment variables for now:
        </p>
        <div className="flex flex-col mt-4">
          {neededEnvs.map((env, i) => {
            return (
              <div className="flex flex-col" key={i}>
                <label htmlFor={env} className="text-zinc-500">
                  {env}
                </label>
                <input
                  type="text"
                  id={env}
                  name={env}
                  className="border border-zinc-300 p-2 rounded-md pt-4"
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}