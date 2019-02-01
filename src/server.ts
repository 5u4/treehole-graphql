import { config } from "dotenv";
import "reflect-metadata";
config();

process.env.NODE_ENV = process.env.APP_ENV || "production";

import { serve } from "./bootstrap/app";

serve();
