"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { Button, Card, CardBody, Container, Flex, HStack, Input, Text } from "@chakra-ui/react";
import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Flex direction="column" minH="100vh" justify="space-between">
      <Flex direction="column" align="center" justify="center" flex="1">
        <Text fontSize="3xl" fontWeight="semibold">Good Morning!</Text>
      </Flex>

      <Card bg="blackAlpha.200" shadow="xl" border="1px" borderRadius="50" borderColor="gray.200" mx="6" mb="20">
        <CardBody display="flex" color="gray" alignItems="center" py="4" px="6" flex="1">
          <Button colorScheme="blackAlpha" variant="ghost" borderRadius="100"><AddIcon /></Button>
          <Input bg="white" border="none" focusBorderColor="transparent" placeholder="Ask your question here..." mx="4" py="6" />
          <Button colorScheme="blackAlpha" variant="solid"><ArrowForwardIcon /></Button>
        </CardBody>
      </Card>
    </Flex>
  );
}
