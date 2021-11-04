import React from "react";

import { View, Text } from "react-native";
import styles from "./CounterCard.style";

const CounterCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Yapılacaklar</Text>
      </View>
      <Text style={styles.text}>{props.numberOfTask}</Text>
    </View>
  );
};

export default CounterCard;
