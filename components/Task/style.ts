import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  initialElements: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  square: {
    width: 28,
    height: 28,
    backgroundColor: "#55BCF666",
    borderRadius: 5,
  },
  trash: {
    width: 24,
    height: 24,
    borderColor: "#55BCF666",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  completedTask: {
    width: 28,
    height: 28,
    backgroundColor: "#55BCF666",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
