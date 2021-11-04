import React from "react";

import { View, Text, TouchableHighlight } from "react-native";
import styles from "./TaskCard.style";

const TaskCard = (props) => {
  return (
    <TouchableHighlight
      style={
        props.isDisable === false ? styles.container : styles.disableContainer
      }
      onPress={props.onTaskPress}
      onLongPress={props.onTaskLongPress}
    >
      <Text
        style={props.isDisable === false ? styles.text : styles.taskDisable}
      >
        {props.taskName}
      </Text>
    </TouchableHighlight>
  );
};

export default TaskCard;
