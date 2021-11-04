import React, { useState,useEffect } from "react";
import { StyleSheet, Text, StatusBar, View, FlatList } from "react-native";
import TaskCard from "./components/TaskCard";
import SaveCard from "./components/SaveCard";
import CounterCard from "./components/CounterCard";
import { TaskModel } from "./model/taskModel.js";

export default function App() {
  const [text, setText] = useState("");
  const [idNumber, setIdNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const [taskList, setTaskList] = useState([]);

  const onSave = () => {
    setIdNumber(idNumber + 1);
    setText("");
    const task = new TaskModel(idNumber, text, false);
    setTaskList([...taskList, task]);
  };
  useEffect(() => {
    const newList = taskList.filter((element) => element.isDisable ===true);
    setCounter(taskList.length-newList.length);
  }, [taskList]);

  const onTaskPress = (item) => {
    const newList = taskList;
    const index = taskList.findIndex((element) => element.id === item.id);

    newList[index].isDisable = true;
    setTaskList([...newList]);
  };
  const onTaskLongPress = (item1) => {
    const newList = taskList.filter((element) => element.id !== item1.id);

    setTaskList([...newList]);
  };

  const renderTask = ({ item }) => {
    return (
      <TaskCard
        taskName={item.taskName}
        onTaskPress={() => onTaskPress(item)}
        isDisable={item.isDisable}
        onTaskLongPress={() => onTaskLongPress(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={taskList}
          ListHeaderComponent={() => (
            <CounterCard numberOfTask={counter} />
          )}
          renderItem={renderTask}
        />
      </View>
      <SaveCard
        buttonText="Kaydet"
        onPress={onSave}
        onChanceText={(text) => setText(text)}
        inputValue={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  flatListContainer: {
    flex: 5,
  },
});
