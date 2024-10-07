import { useState } from "react";
import { useStore } from "@nanostores/react";
import { users } from "../stores/nano";
import { addUser } from "../stores/nano";
import { User } from "../Types/types";
export default function AddUser() {
  const [userName, setUserName] = useState("");
  console.log("AddUser");
  const myUsers = useStore(users);
  const handleClickAddUser = (e: any) => {
    e.preventDefault;
    addUser({ id: myUsers.length, name: userName });
  };
  return (
    <div>
      AddUser - {myUsers.length - 1}
      <p>userName - {userName}</p>
      <input
        type="text"
        name="name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleClickAddUser}>Add User</button>
    </div>
  );
}
