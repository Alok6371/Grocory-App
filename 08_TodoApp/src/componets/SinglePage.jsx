import { useState } from "react";

const SinglePage = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const [image, setImage] = useState("");

  const EditTodo = (item) => {
    setName(item.name);
    setEditId(item.id);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId === null) {
      setList([
        ...list,
        {
          id: Date.now(),
          name,
          image,
        },
      ]);
    } else {
      setList(
        list.map((item) => (item.id == editId ? { ...item, name, image } : item)),
      );
      setEditId(null);
    }
    setName("");
    setImage("");
  };

  const DeleteTodo = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleImages = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const filteredSearch = list.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );


  return (
    <div className=" mr-3  p-10 flex items-center justify-center">
      <div className="bg-green-400 p-10 rounded-xl z-10 w-[60vw]  fixed top-0">
        <form
          action=""
          onSubmit={handleSubmit}
          className="rounded-xl flex justify-center items-center gap-10"
        >
          <input
            type="text "
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl p-3 border-2 text-2xl border-black"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImages}
            className="rounded-xl bg-gray-300 p-2"
          />
          <button className="rounded-xl p-4 bg-blue-200 ml-3 " type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* Show Data */}

      <div className="flex flex-col justify-center items-center mr-[15vw] mt-[10vh] ml-[15vw] w-[70vw] ">
        <input
          type="text"
          className="w-[100%] p-2 text-3xl border-2 border-black m-3 rounded-xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex flex-wrap wrap-3  justify-center items-center bg-gray-300 min-h-[60vh] min-w-[70vw] rounded-3xl">

          {
            filteredSearch.map((t) => (
              <div className="h-[100%] bg-gray-400  w-[15vw] rounded-xl min-h-[40vh] mt-10 mr-3 mb-3 ">
                <div className="min-h-[30vh]">
                  <h3 className="text-3xl ml-3">{t.name}</h3>
                  {/* {search === "" ? "No Data Found" : search} */}
                  <img src={t.image} alt="" className="h-[20vh] flex justify-center items-center" />
                </div>
                <div className="flex absolute ">
                  <button
                    className="bg-blue-300 mt-10 p-2 m-2 rounded-lg"
                    onClick={() => EditTodo(t)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-blue-300 mt-10 p-2 m-2 rounded-lg"
                    onClick={() => DeleteTodo(t.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>

            ))
          }
        </div>

      </div>
    </div>
  );
};

export default SinglePage;
