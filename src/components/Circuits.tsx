"use client";

import {
    Card,
    CardBody,
    Box,
    ListItem,
    UnorderedList,
    Heading,
    SimpleGrid,
    Link,
    Center,
  } from "@chakra-ui/react";
  import NextLink from "next/link";
  import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Circuits(props:
    { circuits: any }) {

const circuitList: JSX.Element[] = [];

  props.circuits.forEach((circuit: any): void => {
    circuitList.push(
      <Card key={circuit.id}>
        <CardBody>
          <Center>
            <Box>
              <Heading
                mb={3}
                fontSize={{ base: "24px", md: "26px", lg: "28px" }}
              >
                {circuit.circuitName}
              </Heading>
              <UnorderedList fontSize={16} px={1}>
                <ListItem>Country: {circuit.Location.country}</ListItem>
                <ListItem>Locality: {circuit.Location.locality}</ListItem>
                <ListItem pr={2}>
                  More Information:{" "}
                  <Link
                    href={circuit.url}
                    as={NextLink}
                    isExternal
                    color={"gray.300"}
                  >
                    Wikipedia
                    <ExternalLinkIcon ml={2} />
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </Center>
        </CardBody>
      </Card>
    );
  });

  return (
    <Box mx={[5, 20]} mb={20} mt="72px">
      <Box maxW={1200} m="auto">
        <Heading mb={10} fontSize={{ base: "24px", md: "30px", lg: "36px" }}>
          Circuits
        </Heading>
        <SimpleGrid spacingX={10} spacingY={[10, 20]} minChildWidth="300px">
          {circuitList}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
