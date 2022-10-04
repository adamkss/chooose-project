// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import TripsJSON from "../../data/trips.json";
import { TTrip } from "../../model/trips";

type Data = {
  trips: TTrip[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(TripsJSON);
}
