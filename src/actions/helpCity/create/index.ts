import { Request, Response } from "express";

function create(req: Request, res: Response) {
  try {
    return res.status(200).send({ message: "Hello World" });
  } catch (err) {
    throw err;
  }
}

export default {
  action: create,
};
