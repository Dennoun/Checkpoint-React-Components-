import './App.css';
import React from 'react';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
// import styles from './style.css';



function App() {
  return (
    <>
      <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
      
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    
    </>

    
    
  );
}

export default App;
