import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { Flex, useToast } from "@chakra-ui/react";
import axios from "axios";
import type { NextPage } from "next";
import Trip from "../components/trip";
import { TTrip } from "../model/trips";

const Home: NextPage = () => {
  const toast = useToast();

  const [trips, setTrips] = useState<TTrip[]>([]);
  const loadData = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/trips");
      setTrips(data.trips);
    } catch (err) {
      toast({
        title: "Failed to fetch the data.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.error(err);
    }
  }, [toast]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div>
      <Head>
        <title>CHOOOSE | Trips</title>
        <meta name="description" content="Trips browser" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        height={["unset", null, null, "100vh"]}
        justifyContent="center"
        alignItems="center"
        bg="gray.50"
      >
        <Flex as="main" gap={8} wrap="wrap" justifyContent="center">
          {trips.map((trip) => (
            <Trip key={trip.id} {...trip} />
          ))}
        </Flex>
      </Flex>
    </div>
  );
};

export default Home;
