import type { NextApiRequest, NextApiResponse } from "next";
import user from "../../../schemas/user";
import { createClient } from "next-sanity";
import {
  dataset,
  projectId,
  apiVersion,
  registerToken,
} from "../../../lib/sanity.client";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: registerToken,
  useCdn: false,
});

interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstname, lastname, email, password } = req.body;

  try {
    const result = await client.create({
      ...user,
      _type: "user",
      firstname,
      lastname,
      email,
      password,
    });
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ message: "Erreur lors de la création du compte" });
  }
}
