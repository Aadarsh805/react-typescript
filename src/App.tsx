import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      {/* <Greet name="Aadarsh" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}

      {/* <Status status="loading" /> */}

      {/* <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Decaprio</Heading>
      </Oscar>
      <Greet name="Aadarsh"  isLoggedIn={true} /> */}
      {/* 
      <Button
        handleClick={(event, id) => console.log("button clicked", event, id)}
      />
      <Input value="" handleChange={(event) => console.log(event)} /> */}

      {/* <Container styles={{ border: "1px solid red", padding: "1rem" }} /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
