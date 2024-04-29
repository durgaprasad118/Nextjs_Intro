import axios from "axios";

async function fetchData() {
  const { data } = await axios.get("http://localhost:3000/api/user");
  console.log("data is: ", data);
  return data;
}
const User = async () => {
  const data = await fetchData();
  return (
    <div>
      <h1 className="text-xl font-medium">{data.name}</h1>
      <h1 className="text-xl font-medium">{data.email}</h1>
    </div>
  );
};

export default User;
