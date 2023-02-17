import { Box, Heading ,Text} from "@chakra-ui/react";


function Header() {
    return (
     <Box textAlign={"center"} pt="90px" color={"white"} bg="#6B46C1" pb={"250px"}>
        <Heading>Simple Pricing for your business</Heading>
        <Text pt={"10px"} >
            Plans that you are carefully crafted to your business.
        </Text>
     </Box>
    )
  }
  
  export default Header