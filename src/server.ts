import "reflect-metadata";
import { serve } from "./bootstrap/app";
import { connectMongo } from "./bootstrap/database";

serve();
connectMongo();
