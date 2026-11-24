import { Button } from "./Button";
import { Input } from "./Input";
import { Box } from "./Box";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Input />
      <div>
        <Button text="Cancel" type="submit" />
        <Button text="Submit" />
        <Button text="Ok" />
        <Button text="Go back" />
        <Button text="Click" />
      </div>
      <Box name="Username" age={30} isAdmin={true} />
    </div>
  );
}

export default App;
