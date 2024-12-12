import ToDoList from "./ToDoList";
import { KitchnProvider } from "kitchn";

export default function Home() {
  return (
    <KitchnProvider>
      <ToDoList/>
    </KitchnProvider>
  );
}
