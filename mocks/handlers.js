import { rest } from "msw";
import TripsData from "../data/trips.json";

export const handlers = [
  rest.get("/api/trips", (req, res, ctx) => {
    return res(ctx.json(TripsData));
  }),
];
