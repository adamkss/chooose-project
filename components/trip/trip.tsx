import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { TTrip } from "../../model/trips";
import StarRatings from "react-star-ratings";

const BORDER_RADIUS_PX = 24;
const Trip = ({
  name,
  imageSrc,
  numberOfCountriesCovered,
  numberOfDays,
  emissionsOffset,
  rating,
}: TTrip) => {
  const ratingStarsSize = useBreakpointValue({
    base: "10px",
    sm: "20px",
    md: "30px",
  });

  return (
    <Box
      as="article"
      borderRadius={BORDER_RADIUS_PX}
      backgroundColor="white"
      padding={2}
      boxShadow="xl"
      width={["100%", "500px"]}
    >
      <Box
        position="relative"
        borderRadius="inherit"
        height="100%"
        paddingTop={70}
      >
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          borderRadius="inherit"
          zIndex={1}
        >
          <Image
            src={imageSrc}
            layout="fill"
            objectFit="cover"
            alt="A picture of the trip for illustrational purposes"
            style={{
              borderRadius: `${BORDER_RADIUS_PX}px`,
              filter: "brightness(0.7) blur(0.6px)",
            }}
          />
        </Box>
        <Box position="relative" zIndex={2} paddingLeft={12} paddingRight={12}>
          <Flex direction="column" justify="center" align="center">
            <Text
              color="whiteAlpha.900"
              fontWeight="600"
              fontSize={32}
              textAlign="center"
            >
              {name}
            </Text>
            <Text
              color="whiteAlpha.900"
              fontWeight="600"
              fontSize={14}
              textAlign="center"
            >
              {numberOfCountriesCovered}&nbsp;
              {numberOfCountriesCovered > 1 ? "Countries" : "Country"},&nbsp;
              {numberOfDays}
              &nbsp;{numberOfDays > 1 ? "days" : "day"}
            </Text>
          </Flex>
          <Flex
            bg="#333D4C"
            p={4}
            borderRadius={8}
            justify="space-between"
            color="whiteAlpha.900"
            fontWeight={600}
            marginTop={4}
            fontSize={18}
          >
            <Text>Emissions offset:</Text>
            <Text>
              {emissionsOffset}&nbsp;CO<sub>2</sub>e
            </Text>
          </Flex>
          <Flex
            bg="white"
            p={6}
            borderRadius={8}
            borderBottomRadius={0}
            justify="space-between"
            color="gray.800"
            fontWeight={600}
            marginTop={12}
            fontSize={16}
          >
            <Text>Trip rating</Text>
            <Flex align="center" gap={1}>
              <StarRatings
                rating={rating}
                starRatedColor="#FFD100"
                numberOfStars={5}
                name="rating"
                starDimension={ratingStarsSize}
              />
              <Text>{rating}</Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Trip;
