import React, {useState } from 'react';
import { 
    ChakraBaseProvider, 
    theme,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Button,
    Container,
    Box
 } from '@chakra-ui/react';


  async function notifyPost(notificationText = "Thank you for enabling notifications!") {
    if(!("Notification" in window)) {
        alert ("Browser does not support notifications");
    } else if (Notification.permission === "granted"){
      const notification = new Notification(notificationText);
    } else if (Notification.permission !== "denied") {
      await Notification.requestPermission().then( (permission) => {
      if (permission === "granted"){
        const notification = new Notification(notificationText);
      }
      });
    }
  }

export default function Notify() {
    const [userResponded, setUserResponded] = useState(false);

    async function enableNotifsAndClose() {
        await notifyPost().then(() => {
            setUserResponded(true);
        });
    
    }
    function disableNotifsAndClose() {
        setUserResponded(true);
    }

  return (!(userResponded) && !(Notification.permission === "granted")) ? (
    <ChakraBaseProvider theme={theme}>
        <Container>
            <Alert status='success'>
                <AlertIcon />
                <Box>
                    <AlertTitle>Notifications</AlertTitle>
                    <AlertDescription>
                        Souhaitez-vous activer la notification ?
                    </AlertDescription>
                </Box>
                <Button colorScheme='teal' size='sm' onClick={enableNotifsAndClose}>
                    Oui !
                </Button>
                <Button colorScheme='gray' size='sm' onClick={disableNotifsAndClose}>
                    Non merci !
                </Button>
            </Alert>
        </Container>
    </ChakraBaseProvider>
  ) : (Notification.permission === "granted") ? (
        <ChakraBaseProvider theme={theme}>
            <Button colorScheme='gray' size='sm' onClick={() => notifyPost("...Viens de publier dans son compte") } > Click Notify </Button>
        </ChakraBaseProvider>
        
  ) :
    <>
      <h1> Vous avez desactiver les Notifications.</h1>
      console.log({Notification.permission});
    </>
}

