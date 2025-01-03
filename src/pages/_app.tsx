import { KitchnProvider } from "kitchn";
import ToDoList from "./ToDoList";

import "kitchn/fonts.css";

const App = () => {
  return (
    <KitchnProvider>
      <ToDoList/>
    </KitchnProvider>
  );
};

export default App;
