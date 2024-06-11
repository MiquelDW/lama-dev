import { addPost } from "@/lib/action";

const ServerActionTest = () => {
  //   const actionInComponent = async () => {
  //     "use server";
  //     console.log("Server Action Works!");
  //   };

  return (
    <div>
      {/* on submit, send form data to the 'addPost' function and execute it */}
      <form action={addPost} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="title"
          className="p-2 text-black"
          name="title"
        />
        <input
          type="text"
          placeholder="description"
          className="p-2 text-black"
          name="desc"
        />
        <input
          type="text"
          placeholder="slug"
          className="p-2 text-black"
          name="slug"
        />
        <input
          type="text"
          placeholder="userId"
          className="p-2 text-black"
          name="userId"
        />
        <button className="bg-blue-600">Create</button>
      </form>
    </div>
  );
};

export default ServerActionTest;
