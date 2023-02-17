import { Box, Button, Flex, Heading,HStack,Icon,Text } from "@chakra-ui/react"
import checkMarkIcon from "./icons/checkmarkicons"

function pricing() {
    return (
     <Box maxW={"950px"} bg="white" mt={"-150px"} overflow="hidden" mx={{base:"20px", lg: "auto"}} borderRadius="16px" 
       boxShadow={"0px 20px 25px -5px rgba(0,0,0,0.1), 0px,10px,10px,-5px rgba(0,0,0,0.04);"}  >
        <Flex direction={{base:"column",md:"column",lg:"row"}}>
        <Box textAlign={"center"} p="40px" bg="#cbb8ee">
            <Text fontWeight={"bold"} fontSize="24px" >Premium PRO</Text>
         <Heading>350$</Heading>
         <Text>Buid just once</Text>
         <Button mt={"20px"} w="300px" color={"white"} bg={"#805AD5"}>Get Started</Button>
        </Box>
        <Box pt={"50px"} pl="25px" pr="10px" >
            <Text mb="15px">
                Access these features when you get this pricing package for your business.
            </Text>
            <HStack mb="15px">
                <Icon as={checkMarkIcon}></Icon>
                <Text>
                    International calling and messaging APIs
                </Text>
            </HStack>
            
            <HStack mb="15px">
            <Icon as={checkMarkIcon}></Icon>
                <Text>
                    International calling and messaging APIs
                </Text>
            </HStack>
            <HStack mb="15px">
            <Icon as={checkMarkIcon}></Icon>
                <Text>
                    International calling and messaging APIs
                </Text>
            </HStack>
            <HStack mb="15px">
            <Icon as={checkMarkIcon}></Icon>
                <Text>
                    International calling and messaging APIs
                </Text>
            </HStack>
        </Box>
        </Flex>
     </Box>
    )
  }
  
  export default pricing