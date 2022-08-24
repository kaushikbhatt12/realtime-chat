import React, { useEffect } from 'react' //rafce+enter
import { Container,Box,Text} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login';
import SignUp from '../components/Authentication/SignUp';
import { useHistory } from 'react-router-dom';

const Homepage = () => {
  const history =useHistory();

    useEffect(() => {
      const user=JSON.parse(localStorage.getItem("userInfo"));
      if(user){
        history.push('/chats');
      }
     }, [history]);


  return (
      <Container maxW='480' centerContent>
        <Box
        display="flex"
        p={2.5}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        justifyContent="center"
        >
          <Text fontSize="4xl" fontFamily='Work sans' color='black' >
            RealChat
          </Text>
        </Box>
        <Box bg={"white"} w="100%" p={4} borderRadius="lg" borderWidth={"1px"} color="black" >
          <Tabs variant='enclosed'>
  <TabList mb={"1em"}>
    <Tab width={"50%"} >Login</Tab>
    <Tab width={"50%"} >Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <SignUp/>
    </TabPanel>
  </TabPanels>
</Tabs>
        </Box>
      </Container>
  )
};

export default Homepage