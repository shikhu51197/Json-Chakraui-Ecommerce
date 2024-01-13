import React, { useEffect, useState } from "react";
import s1img from "../assests/e30b0acc8d68f9cf68264bd0e5a3043a.png";
import s3img from "../assests/Rectangle 126.png";
import s4img from "../assests/Union.png";
import s5img from "../assests/north-star-24.png";
import s6img from "../assests/north-star-24.png";
import {
  Box,
  Image,
  Flex,
  Heading,
  Input,
  Tabs,
  Text,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux"
import { loginfunc, signupfunc } from "../redux/action";
import { toast, ToastContainer } from "react-toastify";
import {Link} from 'react-router-dom'

const ForgotPassword = () => {

  const [isLinkSent, setIsLinkSent] = useState(false);
  const [showresetpass, setShowresetpass] = useState(false);
  const [showF, setFShow] = useState(true);
  const handleGetLink = () => {
    console.log("Get the link clicked!");
    setTimeout(() => {
      setIsLinkSent(true);
    }, 2000);
  };

  const handleResendLink = () => {
    console.log("Resend link clicked!");
    setShowresetpass(true);
    setFShow(false);
  };
  return (
    <div>
      {showF ? (
        <>
          <Box
            style={{
              width: "408px",
              height: "115px",
              flexShrink: 0,
              color: "#1F1F1F",
              fontFamily: "Jost",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
            }}
            ml="-25px"
          >
            <Image src={s3img} alt="" style={{ width: "100%" }} />
            <Box
              width="22.5px"
              fill="#1F1F1F"
              height="22.5px"
              flexShrink={0}
              position="absolute"
              top="65%"
              left="50%"
            >
              <Image src={s4img} alt="" />
            </Box>
            <Heading
              position="absolute"
              top="90%"
              left="15%"
              style={{
                color: "#1F1F1F",
                fontFamily: "Jost",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              Forgot password
            </Heading>
          </Box>
          <Box position="absolute" top="150%" left="10%">
            {!isLinkSent ? (
              <div>
                <Flex>
                  <Input
                    variant="flushed"
                    placeholder="Enter address"
                    style={{
                      color: "#1F1F1F",
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "24px",
                      marginTop: "10px",
                    }}
                  />
                </Flex>
                <Text
                  style={{
                    color: "#ACB5BD",
                    fontFamily: "Roboto",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "24px",
                    marginTop: "5px",
                  }}
                  left="8%"
                >
                  Please enter your login email address to receive your password
                  reset link.
                </Text>
                <Button
                  width="235px"
                  padding="28px 40px"
                  justifyContent="center"
                  alignItems="center"
                  gap="10px"
                  borderRadius="55px"
                  border="0.5px solid #1F1F1F"
                  position="absolute"
                  top="270%"
                  left="20%"
                  bg="white"
                  onClick={handleGetLink}
                >
                  Get the link
                </Button>
              </div>
            ) : (
              <div>
                <Input
                  variant="flushed"
                  placeholder="Enter address"
                  style={{
                    color: "#1F1F1F",
                    fontFamily: "Roboto",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "24px",
                    marginTop: "10px",
                  }}
                />
                <Text color="#00A99D"  >
                  Your password reset link has been sent to your email address.
                  Check your email and click on the link to reset your password.
                </Text>
                <Text
                  color="#ACB5BD"
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px"
                  marginTop="10px"
                  position="absolute"
                  top="190%"
                  left="15%"
                >
                  Didn’t get the password reset link?
                </Text>
                <Button
                  width="235px"
                  padding="28px 40px"
                  justifyContent="center"
                  alignItems="center"
                  gap="10px"
                  borderRadius="55px"
                  border="0.5px solid #1F1F1F"
                  position="absolute"
                  top="240%"
                  left="15%"
                  bg="white"
                  onClick={handleResendLink}
                >
                  Resend link
                </Button>
              </div>
            )}
          </Box>
        </>
      ) : null}
      {showresetpass ? <ResetPassword /> : null}
    </div>
  );
};

const ResetPassword = () => {
  const [isResetSuccessful, setIsResetSuccessful] = useState(false);
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  const [show, setShow] = useState(true);
  const handleResetPassword = () => {
    console.log("Reset password clicked!");

    setTimeout(() => {
      setIsResetSuccessful(true);
      setIsSignInVisible(true);
    }, 2000);
  };

const signinshow=()=> {
  setShow(true)
  setIsSignInVisible(true)
}




  return (
    <div>
      <Box
        style={{
          width: "408px",
          height: "115px",
          flexShrink: 0,
          color: "#1F1F1F",
          fontFamily: "Jost",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}
        ml="-25px"
      >
        <Image src={s3img} alt="" style={{ width: "100%" }} />
        <Box
          width="22.5px"
          fill="#1F1F1F"
          height="22.5px"
          flexShrink={0}
          position="absolute"
          top="65%"
          left="50%"
        >
          <Image src={s4img} alt="" />
        </Box>
        <Heading
          position="absolute"
          top="90%"
          left="18%"
          style={{
            color: "#1F1F1F",
            fontFamily: "Jost",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          Reset Password
        </Heading>
      </Box>
      <Box position="absolute" top="150%" left="20%">
        <Box>
          <Input
            variant="flushed"
            placeholder="Enter new password"
            style={{
              color: "#1F1F1F",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24px",
              marginTop: "-15px",
            }}
          />
        </Box>

        <Box>
          <Input
            variant="flushed"
            placeholder="Re-Enter new password"
            style={{
              color: "#1F1F1F",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24px",
              marginTop: "10px",
            }}
          />
        </Box>
      </Box>

      {isResetSuccessful ? (
        <>
          <Button
            width="235px"
            padding="28px 40px"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            borderRadius="55px"
            border="0.5px solid #1F1F1F"
            position="absolute"
            top="300%"
            left="20%"
            bg="white"
            onClick={signinshow}

          >
            Sign In
          </Button>
          <Text
            style={{ marginTop: "10px", textAlign: "center", color: "green" }}
            position="absolute"
                  top="200%"
                  left="15%"
          >
            Your password has been reset successfully!
          </Text>
        </>
      ) : (
        <Button
          width="235px"
          padding="28px 40px"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          borderRadius="55px"
          border="0.5px solid #1F1F1F"
          position="absolute"
          top="300%"
          left="20%"
          bg="white"
          onClick={handleResetPassword}
        >
          Reset My Password
        </Button>
      )}
    </div>
  );
};
const Authentication = () => {
  const [email , setEmail]  =  useState("")
  const [password , setPassword]  =  useState("")
  const [loginemail , setLoginEmail]  =  useState("")
  const [loginpassword , setLoginPassword]  =  useState("")
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [show, setShow] = useState(true);

 const data  = useSelector((state => state))

  const dispatch = useDispatch()



  const handleSubmit = () =>{
    if (!email || !password) {
      toast.error("Please provide both Email and Password,.");
      return;
    }
    const lowercasedEmail = email.toLowerCase();
       dispatch(signupfunc({email:lowercasedEmail , password:password}))

       setEmail("")
       setPassword("")
  }

  const handleLogin = async () => {
    if (!loginemail || !loginpassword) {
      toast.error("Please provide a valid email and password");
      return;
    }
    const lowercasedEmail = loginemail.toLowerCase();
    try {
      const response = await fetch(`https://jsonsnabbtech.onrender.com/user?email=${lowercasedEmail}&password=${loginpassword}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const userData = await response.json();
  
        if (userData.length > 0) {
          // User exists, you can handle the login logic here
          console.log('Login successful!');
         toast.success("Login successful!");
        } else {
          // User not found
          console.error('User not found');
          toast.error('Please enter valid email and password');
        }
      } else {
        // Handle failed request
        console.error('Login failed');
        toast.error('Please enter valid email and password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error(error);
    }

    setLoginEmail("")
    setLoginPassword("")
  };
  

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
    setShow(false);
  };

  return (
    <div>
      <Flex
        position="relative"
        direction={{ base: "column", md: "row" }}
        //   width="1440px"
        w="100%"
        // height="1024px"
      >
        <Box
          //   width="950.671px"
          // height="1043.17px"
          //   h="100vh"
          flexShrink={0}
          // border="2px solid black"
          w={{ base: "100%", sm: "100%", md: "100%", lg: "70%" }}
        >
          <Box
            position="absolute"
            top={{ base: "2%", md: "5%", lg: "5%" }}
            left={{ base: "40%", md: "30%", lg: "18%" }}
            transform="translate(-50%, -50%)"
            textAlign={{ base: "center", md: "center", lg: "center" }}
            // width="450px"
            // height="61px"
            margin="auto"
          >
          <Link to="/home">
            <Heading
              color="#F5F1ED"
              style={{
                fontFamily: "KyivType Sans",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "135.2%",
              }}
              fontSize={{ base: "20px", md: "30px", lg: "45px" }}
            >
              Welcome to PANDA
            </Heading></Link>
          </Box>
          <Image src={s1img} alt="" maxW="100%" height="900px" />
        </Box>
        <Box
          // width="953.418px"

          w="30%"
          h="100vh"
          //   height="1054.384px"
          flexShrink={0}
        >
          <Box
            p="15"
            width="415px"
            ml="20px"
            height="900px"
            // h="100vh"
            flex-shrink="0"
            // border="2px solid black"
          >
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab
                  _selected={{
                    borderBottom: "3px solid #A95454",
                  }}
                >
                  Join PANDA
                </Tab>
                <Text
                  color="#ACB5BD"
                  font-family="Jost"
                  font-size="16px"
                  font-style="normal"
                  font-weight="400"
                  line-height="20px"
                >
                  or
                </Text>
                <Tab
                  _selected={{
                    borderBottom: "3px solid #A95454",
                  }}
                >
                  Sign in
                </Tab>
              </TabList>
              <TabPanels>
             <TabPanel>
                  <Box
                    style={{
                      width: "408px",
                      height: "115px",
                      flexShrink: 0,
                      color: "#1F1F1F",
                      fontFamily: "Jost",
                      fontSize: "32px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                    }}
                    ml="-25px"
                  >
                    <Image src={s3img} alt="" style={{ width: "100%" }} />
                    <Box
                      width="22.5px"
                      fill="#1F1F1F"
                      height="22.5px"
                      flexShrink={0}
                      position="absolute"
                      top="65%"
                      left="50%"
                    >
                      <Image src={s4img} alt="" />
                    </Box>
                    <Heading
                      position="absolute"
                      top="90%"
                      left="12%"
                      style={{
                        color: "#1F1F1F",
                        fontFamily: "Jost",
                        fontSize: "30px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                      }}
                    >
                      Create your free account
                    </Heading>
                    <Text
                      position="absolute"
                      top="110%"
                      left="16%"
                      style={{
                        fontFamily: "Jost",
                        fontSize: "25px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                      }}
                    >
                      <span style={{ color: "#000000" }}>Takes less than </span>
                      <span style={{ color: "#A95454" }}> 5 minutes...</span>
                    </Text>
                  </Box>

                  <Text
                    style={{
                      color: "#E0B51D",
                      fontFamily: "Jost",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                    position="absolute"
                    top="150%"
                    left="15%"
                  >
                    klincik7@gmail.com
                  </Text>
                  <Text
                    color="#ACB5BD"
                    position="absolute"
                    top="160%"
                    fontSize="10px"
                    left="15%"
                  >
                    This email address already exists. Sign in
                  </Text>

                  <Box position="absolute" top="200%" left="15%">
                    <Flex>
                      <Input
                        variant="flushed"
                        placeholder="Enter Email Address"
                        style={{
                          color: "#1F1F1F",
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "24px",
                          marginRight: "10px",
                          marginTop: "-45px",
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Text
                        style={{
                          color: "#1F1F1F",
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "24px",
                          textDecorationLine: "underline",
                          marginLeft: "30px",
                          marginTop: "-45px",
                        }}
                      >
                        Show
                      </Text>
                    </Flex>
                    <Flex>
                      <Input
                        variant="flushed"
                        placeholder="Enter Password"
                        style={{
                          color: "#1F1F1F",
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "24px",
                          marginRight: "10px",
                          marginTop: "-1px",
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Text
                        style={{
                          color: "#1F1F1F",
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "24px",
                          marginTop: "-1px",
                          marginLeft: "30px",
                          textDecorationLine: "underline",
                        }}
                      >
                        Show
                      </Text>
                    </Flex>
                  </Box>

                  <Box position="absolute" top="270%" left="15%">
                    <Flex>
                      <Image src={s5img} alt="" marginRight="20px" />
                      <Text>I’m an Expert</Text>
                    </Flex>
                    <Flex marginTop="10px">
                      <Image src={s6img} alt="" marginRight="20px" />
                      <Text>I’m an Organization in Africa</Text>
                    </Flex>{" "}
                  </Box>
                  <Box position="absolute" top="300%">
                    <Button
                      width="235px"
                      padding="28px 40px"
                      justify-content="center"
                      align-items="center"
                      gap="10px"
                      borderRadius="55px"
                      border="0.5px solid #1F1F1F"
                      marginTop="70px"
                      bg="white"
                      onClick = {handleSubmit}
                    >
                      Join PANDA
                    </Button>
                    <Text marginTop="60px" color="#ACB5BD">
                      By clicking on "Create an account", you agree to our terms
                      of use and privacy policy.
                    </Text>
                  </Box>
                </TabPanel> 
                

                {show ? (
                  <TabPanel>
                    <Box
                      style={{
                        width: "408px",
                        height: "115px",
                        flexShrink: 0,
                        color: "#1F1F1F",
                        fontFamily: "Jost",
                        fontSize: "32px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                      }}
                      ml="-25px"
                    >
                      <Image src={s3img} alt="" style={{ width: "100%" }} />
                      <Box
                        width="22.5px"
                        fill="#1F1F1F"
                        height="22.5px"
                        flexShrink={0}
                        position="absolute"
                        top="65%"
                        left="50%"
                      >
                        <Image src={s4img} alt="" />
                      </Box>
                      <Heading
                        position="absolute"
                        top="90%"
                        left="35%"
                        style={{
                          color: "#1F1F1F",
                          fontFamily: "Jost",
                          fontSize: "40px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "normal",
                        }}
                      >
                        Sign In
                      </Heading>
                    </Box>
                    <Box position="absolute" top="150%" left="15%">
                      <Flex>
                        <Input
                          variant="flushed"
                          placeholder="Enter Email Address"
                          style={{
                            color: "#1F1F1F",
                            fontFamily: "Roboto",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "24px",
                            marginRight: "10px",
                            marginTop: "-15px",
                          
                          }}
                          value={loginemail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                        />
                      </Flex>
                      <Text
                        style={{
                          color: "#ACB5BD",
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "24px",
                          marginTop: "5px",
                          marginLeft: "-100px",
                        }}
                        left="8%"
                      >
                        This email address is invalid.
                      </Text>
                      <Flex>
                        <Input
                          variant="flushed"
                          placeholder="Enter Password"
                          style={{
                            color: "#1F1F1F",
                            fontFamily: "Roboto",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "24px",
                            marginRight: "10px",
                            marginTop: "10px",
                          }}
                          value={loginpassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        <Text
                          style={{
                            color: "#1F1F1F",
                            fontFamily: "Roboto",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "24px",
                            textDecorationLine: "underline",
                            marginLeft: "50px",
                            marginTop: "20px",
                          }}
                        >
                          Show
                        </Text>
                      </Flex>
                      <Text
                        style={{
                          color: "#ACB5BD",
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "24px",
                          marginTop: "5px",
                          marginLeft: "-70px",
                        }}
                        left="8%"
                      >
                        Wrong password, please try again.
                      </Text>
                    </Box>
                    <Text
                      style={{
                        color: "#1F1F1F",
                        fontFamily: "Roboto",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "24px",
                        textDecorationLine: "underline",
                        marginLeft: "30px",
                      }}
                      position="absolute"
                      top="220%"
                      left="8%"
                      onClick={handleForgotPasswordClick}
                    >
                      Forgot password?
                    </Text>
                    <Button
                      width="235px"
                      padding="28px 40px"
                      justify-content="center"
                      align-items="center"
                      gap="10px"
                      borderRadius="55px"
                      border="0.5px solid #1F1F1F"
                      position="absolute"
                      top="270%"
                      left="20%"
                      bg="white"
                      onClick={handleLogin}
                    >
                      Sign In{" "}
                    </Button>
                  </TabPanel>
                ) : null}

                {showForgotPassword ? 
                <TabPanel> <ForgotPassword /></TabPanel>
               
                 : null}
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Flex>
      <ToastContainer/>
    </div>
  );
};

export default Authentication;
