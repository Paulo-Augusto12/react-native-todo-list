import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    paddingTop: 94,
    paddingHorizontal: 20,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },

  editorContainer: {
    marginTop: 40,
    width: "100%",
    backgroundColor: "#dadce0",
    padding: 25,
    height: 700,
    borderRadius: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  saveButton: {
    backgroundColor: "#6599e2",
    borderRadius: 15,
    padding: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 60,
    width: "100%",
  },
  input: {
    padding: 12,
    backgroundColor: "#E8EAED",
    borderRadius: 15,

    alignItems: "center",
    fontSize: 15,
  },
  description: {
    padding: 12,
    backgroundColor: "#E8EAED",
    borderRadius: 15,
    maxHeight: 400,
  },

  editorItems: {
    width: "100%",
    display: "flex",
    gap: 32,
  },
});
