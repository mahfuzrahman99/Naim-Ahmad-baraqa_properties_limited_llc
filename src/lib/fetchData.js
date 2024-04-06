export const loginUser = async (userData) => {
  const res = await fetch(
    "https://baraqa-properties-server.vercel.app/api/login",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );
  return res.json();
};

export const createUser = async (userData) => {
  const res = await fetch(
    "https://baraqa-properties-server.vercel.app/api/users",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );
  return res.json();
};


export const getDemos = async () => {
  const res = await fetch(
    "https://baraqa-properties-server.vercel.app/api/demos",
    {
      next: {
        tags: ["demos"],
      },
    }
  );
  return res.json();
};

export const getUsers = async () => {
  const res = await fetch(
    "https://baraqa-properties-server.vercel.app/api/users",
    {
      next: {
        tags: ["users"],
      },
    }
  );
  return res.json();
};
