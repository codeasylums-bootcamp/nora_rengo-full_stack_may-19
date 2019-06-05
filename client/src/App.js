import React from 'react';
import Myprofile from './profile/Myprofile'
import Myfeed from './profile/Myfeed/Myfeed'
import Whotofollow from './profile/Whotofollow/Whotofollow'
function App() {
  return (
    <div class="backgroundupdate">
    <div className="App">
      <Myprofile/>
      <Myfeed/>
      <Whotofollow/>
    </div>
    <div style={{marginBottom:'20px'}}>
    </div>
    </div>
  );
}

export default App;
