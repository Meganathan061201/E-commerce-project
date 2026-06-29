import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  // READ
  const getUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    api.get("/users").then((res) => setUsers(res.data));
  }, []);

  // CREATE
  const addUser = async () => {
    await api.post("/users", {
      name: name,
    });
    setName("");
    getUsers();
  };

  // DELETE
  const deleteUser = async (id) => {
    await api.delete(`/users/${id}`);
    getUsers();
  };

  const startEdit = (user) => {
    setEditId(user.id);
    setName(user.name);
  };

  const cancelEdit = () => {
    setEditId(null);
    setName("");
  };

  // UPDATE
  const updateUser = async () => {
    await api.put(`/users/${editId}`, {
      id: editId,
      name: name,
    });

    cancelEdit();
    getUsers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Axios CRUD</h2>

      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={editId ? updateUser : addUser}>
        {editId ? "Update" : "Add"}
      </button>
      {editId && <button onClick={cancelEdit}>Cancel</button>}

      <hr />

      {users.map((user) => (
        <div key={user.id}>
         <h1 style={{color: "red"}}> {user.name}</h1>

          <button onClick={() => startEdit(user)}>Edit</button>
          

          <button onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;