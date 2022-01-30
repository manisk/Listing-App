const carList = async () => {
  const url = "https://my-json-server.typicode.com/manisk/json-server/cars";
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    throw data;
  }
  return data;
};
export default carList;
