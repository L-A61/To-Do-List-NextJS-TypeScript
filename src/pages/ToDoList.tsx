// Importation de useState et Kitchn dans le composant.
import React, { useState } from 'react';
import { Button } from "kitchn";
import { Input } from "kitchn";
import { Container } from "kitchn";

const ToDoList: React.FC = () => {
    // Initialisation de l'état tasks comme tableau string
    const [tasks, setTasks] = useState<string[]>([]);

    // Initialisation de l'état newTask vide au lancement
    const [newTask, setNewTask] = useState("");

    // Change la valeur de newTask au changement de la valeur input
    function inputUpdate(event: any) {
        setNewTask(event.target.value);
    }

    // Fonction qui ajoute une tâche
    function tdAdd() {

        // Si la valeur qu'on essaie de rentrer n'est pas vide, on l'ajoute au tableau tasks puis l'input devient vide
        if (newTask.trim() !== "") {
            setTasks(task => [...task, newTask]);
            setNewTask("");
        }
    }

    // Fonction qui efface une tâche
    function tdDelete(index: number) {

        // On filtre l'index selectionné hors de la liste tasks. Puis on met à jours la constante updateTasks
        const updateTasks = tasks.filter((_, _index) => _index !== index);
        setTasks(updateTasks);
    }

    // Fonction qui efface toutes les tâches du tableau si le tableau n'est pas vide et si la constante confirmDelete est true
    const tdDeleteAll = () => {
        if (tasks.length > 0) {
            const confirmDelete = confirm("Vous êtes sur le point d'effacer toutes les tâches, êtes-vous certain?")
            if (confirmDelete) {
                setTasks([]);
            }
        }
        
        
    };

    return (
        <section>
            <Container marginLeft={'25%'} marginRight={'25%'} gap={50} paddingBottom={'10px'} w={'50%'}>
                <section>
                    <Container row direction={['column', 'row', 'row']} bg={"darker"} bw={'5px'} br={'20px'} bc={"grey"}>
                        <Container align="center" justify={"center"} w={'90%'} m={'10px'}>
                            <Input placeholder="Ajoutez une tâche..." value={newTask} onChange={inputUpdate} />
                        </Container>

                        <Container align="center" justify={"center"} m={'10px'}>
                            <Button size={"normal"} onClick={tdAdd}>Ajouter</Button>
                        </Container>
                    </Container>
                </section>
            </Container>

            <ol>
                {tasks.map((task, index) => (
                    <Container marginLeft={'25%'} marginRight={'25%'} gap={50} justify={'center'} paddingBottom={'10px'}>
                        <li key={index}>
                            <Container row direction={['column', 'row', 'row']} justify={'space-between'} bg={"darker"} bw={'5px'} br={'20px'} bc={"grey"}>
                                <Container align="center" justify={"center"} m={'10px'}>
                                    <span>{task}</span>
                                </Container>

                                <Container align="center" justify={"center"} m={'10px'}>
                                    <Button type={"danger"} onClick={() => tdDelete(index)}>Effacer</Button>
                                </Container>
                            </Container>
                        </li>
                    </Container>
                ))}
            </ol>

            <Container marginLeft={'25%'} marginRight={'25%'} gap={50} justify={'center'} paddingBottom={'10px'}>
                <Button type={"danger"} onClick={tdDeleteAll}>Effacer Tout</Button>
            </Container>
        </section>
    );
}

export default ToDoList;
