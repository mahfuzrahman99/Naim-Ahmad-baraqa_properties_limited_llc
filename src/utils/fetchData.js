export const createUser = async (userData) => {
  const res = await fetch("http://localhost:5000/api/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const getDemos = async () => {
  const res = await fetch("http://localhost:5000/api/demos");
  return res.json();
};

export const getUsers = async () => {
  const res = await fetch("http://localhost:5000/api/users");
  return res.json();
};
