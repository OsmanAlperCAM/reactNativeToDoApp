import React from "react";

import {
  View,
  TextInput,
  Text,
  TouchableHighlight,
} from "react-native";
import styles from "./SaveCard.style";

const SaveCard = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={props.onChanceText}
        value={props.inputValue}
      />
      <TouchableHighlight onPress={props.onPress} style={styles.button}>
        <View>
          <Text style={styles.buttonText}>{props.buttonText}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
export default SaveCard;
