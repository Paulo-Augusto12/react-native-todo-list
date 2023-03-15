import {StyleSheet} from 'react-native'



export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E8EAED",
      paddingTop: 94,
      paddingHorizontal: 20,
    },
    header: {
      display: "flex",
      flexDirection: "column",
      gap: 35,
    },
    title: {
      fontSize: 24,
      fontWeight: "700",
      color: "#1A1A1A",
    },
    tasksContainer: {
      height: 700,
      marginTop: 30,
      display: "flex",
      flexDirection: "column",
      gap: 20,
    },
    writeTaskWrapper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: "#FFFFFF",
      borderRadius: 60,
      width: 250,
      borderColor: "#C0C0C0",
      borderWidth: 2,
    },
    addTaskWrapper: {
      width: 60,
      height: 60,
      backgroundColor: "#FFFFFF",
      justifyContent: "center",
      alignItems: "center",
  
      borderRadius: 60,
      borderColor: "#C0C0C0",
      borderWidth: 2,
    },
    plusIcon: {
      color: "#C0C0C0",
      fontSize: 32,
    },
  });