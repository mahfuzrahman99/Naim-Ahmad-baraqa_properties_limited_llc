"use server";

import { revalidateTag } from "next/cache";

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

export const postDemo = async (demoData) => {
  const res = await fetch(
    "https://baraqa-properties-server.vercel.app/api/demos",
    {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(demoData),
    }
  );
  revalidateTag("demos");
  return res.json();
};

export const updateDemo = async (demoID, demoData) => {
  const res = await fetch(
    `https://baraqa-properties-server.vercel.app/api/demos/${demoID}`,
    {
      method: "patch",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(demoData),
    }
  );
  revalidateTag("demos");
  return res.json();
};

export const deleteDemo = async (demoID) => {
  const res = await fetch(
    `https://baraqa-properties-server.vercel.app/api/demos/${demoID}`,
    {
      method: "delete",
    }
  );
  revalidateTag("demos");
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
