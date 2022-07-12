import { View, TouchableOpacity, Text, Touchable } from "react-native";
import * as icons from "@expo/vector-icons";

export function MoreOptions(props) {
  const { icon, title, showArrow,action } = props;

  return (
    <View style={{ flex: 1,flexDirection: "row"}}>

    <View style={{ flex: 1,flexDirection: "row", marginVertical: 10 }}>
      <TouchableOpacity onPress={action}>
        <icons.Feather style={{ marginHorizontal: 20}} name={icon} size={25} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={action}>
        <Text style={{ color: "#fff",fontSize: 18, marginRight: 20}}>{title}</Text>
        </TouchableOpacity>
    </View>
    <View style={{marginRight: 40, marginVertical: 10}} >
    <TouchableOpacity>
        {showArrow ? (
          <icons.Feather name="arrow-right" size={25} color="gray" />
        ) : null}
      </TouchableOpacity>
    </View>

    </View>
  );
}
