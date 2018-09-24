import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">      
        <h1 className="App-title">My Travels</h1>
        <Travel
          destination="Dublin"
          country="Ireland"
          distance="959km"
          image="https://lh3.googleusercontent.com/c-I8h9iFCbvF8KCIIEzcav2iT5Brvaq-MY4BtSV_Ixx57ZmjwAiK0wEf3JKfUHNOZd83MKNYQvnRjayVqXb3W2e3bngtaB-jvlSKrlrBa9w8ewpdTliCyjxWrS3RiOgPuIsK-ty0K6-1cfEFGZmZfoeXp191JeL3AkpyAtuj5QdVGly8EkWftmQBCUTXRyYoms-G551ehnSzOyvBH5skf9U_cLAi9kuih_fbBbvg9Bi5hmAqGD_cFKxHQXX2nw_eTVjBh7lzBKLiTio4-DsMSgMysIeW9m0_kq7kLjNXaSJinF6FAc-S6krTFyurtU3mVcG1LLAe5aR_l8J3YrS8y89SBw8NzXsyU3818itLq3o4wifqq9FqfsYRNCg-XPNT3JSGSYXvun8VaDQTYmhb-B9zE8qof96PrRBA25M0esyWVLVnZ6FXpR_HKoWPXohkI8g3x_BPvjypoojJFq4XmA4kUA1LxnPnb29gg0vv5AcqbLpXlGCa_mYUZuS7pWZ7Q9PgWM9HO0K3LEneHkZtO3LWZscf3VjPMEi8MIouI3uzzetmJWcmTa2I23tuOp-osMdS0bRgP45pSxgXiHixiQQFeZSefhvFSqpFcqYzJ5-Yf64ypMj3pUWAY5aHkXHO=w713-h950-no"
        />
        <Travel
          destination="Gerardmer"
          country="France"
          distance="278km"
          image="https://lh3.googleusercontent.com/QOM_6rf0f8bQ1xb4wYpZSrlMrccABJLfxlJkiHSLeMQGcZQ7cKIqmpFKmabXLJJU6jkECZZ5-Y7a8FCBYIo6uvC7PH9OXqR6nAM2426dDCcoXKI3rT_7SpUf9xS8CbptYFdS6FI5xOkGPLUgJwJONFnS97w8x_3pnFpnixrrH9_J_Z9CMN4Unb0vn3LhZ4tp7-Mpfn3PMszmlVXqujxy3m3R2x0H_LXqlDoFDN266l03zFAIHwaAXjocvYQQCLsKV0949b3zFA2D09nbUAHP-cESKrFBNK-pyHzjRi8fMIl12yyXePf3tBQPk7Ihc_JL8PKd4Sm7tV78HlkIOZkzaQ3wPTf4eAgSgTo70GcxlhxxkHqyLgRBHefJEETwnWWpn_nF63X98y-goC7Y97AEUb1JeRhBCN6R3FZZ8XDXlrR78LXuFbJGOnPCNkTd_4BdSzKdrBhEhi48nkwNMuX2HP7tQRwG8PvNb9iVrx0ncXQWpaHFnpUWs5VoG8vRjAaD9N9dpaHJWBrm2qin0JdbC_LAA02EJqaTesQ7g-09okONMR-ETyPNVSjv-YtJr9xS0WaM5T5tgMmiLiw8Bl1I7LszNH_cj4nCRRJpOXdMVOczfBtf57xudmaQRRr2lNY=w1431-h950-no"
        />
      </div>
    );
  }
}

export default App;