import React from "react"
import {
  Center, Text, Box
} from "native-base"

import NavButtons from "../components/NavButtons"

export default function Page1() {
    return (
        <Box bg="primary.500" h="100%">
            <Center>
            <Text fontSize="3xl" bold underline italic>Hello, Page 2!</Text>
            </Center>
            <NavButtons />
        </Box>        
    )
}
