import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({ navigation }) {
    
    const [tasks, setTasks] = React.useState([
		'Do laundry',
		'Go to gym',
		'Walk dog'
	]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  
    return (
    <MainLayout>
        <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <Button title="Go to About" onPress={() => navigation.navigate('About')} />
        </SafeAreaView>
      </MainLayout>
      
    );
}