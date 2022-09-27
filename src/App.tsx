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
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/templateLiterals/Toast";
import CustomButton from "./components/html/Button";
import Text from "./polymorphic/Text";

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

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}

      {/* <RandomNumber value={10} isPositive /> */}

      {/* <Toast position="center-bottom" /> */}

      {/* <CustomButton variant='primary' onClick={() => {}}>Label</CustomButton> */}

      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
    </div>
  );
}

export default App;
