import React from "react";
import ComingSoon from "react-coming-soon";

function App() {
  return (
    <div className='App'>
      <ComingSoon
        title='Launching Soon'
        subtitle="when I'm done being lazy!"
        bgColor='#ffffff'
        textColor='#212121'
        illustration='git'
      />
    </div>
  );
}

export default App;
