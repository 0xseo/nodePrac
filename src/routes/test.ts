import { Router, Request, Response } from "express";
import supabase from "../database/db";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const { data, error } = await supabase.from("GDGgraffity").select("*");
  console.log(data);
  console.log(error);
  const result = data?.map((item) => item.content);
  res.send(data == null ? "NO ITEMS" : result);
});

router.post("/gdg", async (req: Request, res: Response) => {
  const { content } = req.body;
  const { data, error } = await supabase
    .from("GDGgraffity")
    .insert({ content });
  res.status(201).json({
    message: "success",
    data: content,
  });
  // res.send(data);
});

export default router;
