import { useDisclosure } from '@mantine/hooks';
import { Modal,   Tabs } from '@mantine/core';
import { FloatingIndicator } from '@mantine/core';
import InfoButton from './svg/info.svg';
import UsaFlag from './svg/Usa.svg';
import GreeceFlag from './svg/Greece.svg';
import linkedin from './svg/linkedin.svg'
import classes from "./Info.module.css"
import {useState, Link} from "react"
  
export default function Info() {
  const [opened, { open, close }] = useDisclosure(false);
  
  const [value, setValue] = useState('1');

  const date = new Date().getFullYear()
  console.log(date)
  
  
  
//   const setControlRef = (val) => (node) => {
//     setControlsRefs((prev) => ({ ...prev, [val]: node }));
//   };

  
//   function lightningΒug(bgColor) {
//    bgColor = '#03fc88'
    
//   };

  

 

  return (
    <>
      <Modal opened={opened} onClose={close} title="Info">
        
      <Tabs variant="none" value={value} onChange={setValue}>
      <Tabs.List  className={classes.list}>
        <Tabs.Tab value="1"  className={classes.tab}>
          <img src={UsaFlag} style={{width: "4em", height: "4em"}}/>
        </Tabs.Tab>
        <Tabs.Tab value="2"  className={classes.tab}>
        <img src={GreeceFlag} style={{width: "4em", height: "3em"}}/>
        </Tabs.Tab>
        <Tabs.Tab value="3"  className={classes.tab}>
        <img src={linkedin} style={{width: "6em", height: "4em"}}/>
        </Tabs.Tab>
{/* 
        <FloatingIndicator
          target={value ? controlsRefs[value] : null}
          parent={rootRef}
          className={classes.indicator}
        /> */}
      </Tabs.List>

      <Tabs.Panel value="1">
      <ul>
            <li>Make lists by clicking on Create List and submit the lists to save them.</li>
            <li>Lists are saved in the local storage so, in order to save them permantly, Sign Up and Login with your credentials.</li>
            <li>For testing, it's possible to access pre-defined lists by logging in as a default user. Just flip the switch in the Login and have fun!</li>
          </ul>
      </Tabs.Panel>
      <Tabs.Panel value="2">
      <ul>
         <li>Δημιουργήστε λίστες κάνοντας κλικ στο Create List και πατήστε Submit για να τις αποθηκεύσετε.</li>
          <li>Για τη μόνιμη αποθήκευση των λιστών, εγγραφείτε και συνδεθείτε με τα διαπιστευτήριά σας.</li>
           <li>Για δοκιμή, μπορείτε να αποκτήσετε πρόσβαση σε προκαθορισμένες λίστες. Απλώς ανοίξτε το διακόπτη στη σελίδα Login!</li>
            </ul>
      </Tabs.Panel>
      <Tabs.Panel value="3">
        
        
        <p>This webpage was developed in 2023 as a practice project. Login/Signup and UI updates made in 2025 </p>
        
        <br/>
        <a href= "https://www.linkedin.com/in/stauros-koulas-a708aa10a/">Click to view my Profile in LinkedIn</a>
        <br/>
        <br/>
        <p>©{date} Stauros Koulas. All Rights Reserved</p>
      </Tabs.Panel>
    </Tabs>
      </Modal>

      <img style={{
        
                height: "2em",
                width: "2em",
                marginTop: "2.6em",
                background: "#03fc88",
                borderRadius: "50%",
                
                    
              }}src={InfoButton} alt="Info" tooltip= "Click to show Info!" onClick={open}>
       
      </img>
    </>
  );
}