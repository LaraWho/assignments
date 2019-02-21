import React from 'react';
import Box from './Box.js'

const App = () => {
    const box = {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "center",
      margin: "20px"
    }
    return (
      <div style={box}>
          <Box backgroundColor="red" color="white" title="It's a Box!"/>

          <Box backgroundColor="orange" color="white" title="It's a Box!"/>

          <Box backgroundColor="green" color="white" title="It's a Box!"/>

          <Box backgroundColor="blue" color="white" title="It's a Box!"/>

          <Box backgroundColor="purple" color="white" title="It's a Box!"/>

          <Box backgroundColor="red" color="white" title="It's a Box!"/>

          <Box backgroundColor="blue" color="white" title="It's a Box!"/>

          <Box backgroundColor="orange" color="white" title="It's a Box!"/>

          <Box backgroundColor="purple" color="white" title="It's a Box!"/>

          <Box backgroundColor="green" color="white" title="It's a Box!"/>
      </div>
    );
  }

export default App;
