import { config } from "dotenv";
import "reflect-metadata";
config();

import { serve } from "./bootstrap/app";

serve();
