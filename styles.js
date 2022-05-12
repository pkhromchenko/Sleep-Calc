import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  instOneTxt: {
    fontSize: 26,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textAlign: "center",
    bottom: "10%",
  },
  instTwoTxt: {
    fontSize: 26,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: "white",
    top: "12%",
  },
  selectedTime: {
    fontSize: 26,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textAlign: "center",
    fontWeight: "bold",
    bottom: "6%",
  },
  buttonOne: {
    alignItems: "center",
    backgroundColor: "#119AD4",
    padding: 10,
    textTransform: "lowercase",
    paddingLeft: 88,
    paddingRight: 88,
    borderRadius: 7.5,
    bottom: "0%",
  },
  buttonOneTxt: {
    color: "white",
    fontSize: 18,
  },
  buttonTwo: {
    alignItems: "center",
    backgroundColor: "#0F0F0F",
    padding: 10,
    textTransform: "lowercase",
    paddingLeft: 37,
    paddingRight: 37,
    borderRadius: 7.5,
    top: "2%",
  },
  buttonTwoTxt: {
    color: "white",
    fontSize: 18,
  },
  buttonThree: {
    alignItems: "center",
    backgroundColor: "#D7DA3D",
    padding: 10,
    textTransform: "lowercase",
    borderRadius: 7.5,
    paddingLeft: 44,
    paddingRight: 44,
    top: "17%",
  },
  buttonThreeTxt: {
    fontSize: 18,
  },
  timeText: {
    fontSize: 32,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    position: "absolute",
    top: "11%",
  },
  dateText: {
    fontSize: 22,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    position: "absolute",
    top: "6%",
  },
  break: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    alignSelf: "auto",
    width: "75%",
    justifyContent: "center",
    bottom: "11%",
  },
  breakTwo: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    alignSelf: "auto",
    width: "75%",
    justifyContent: "center",
    top: "10%",
  },
  navContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 0,
  },
  navBar: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "#36454F",
    width: "100%",
    justifyContent: "space-evenly",
    bottom: 0,
  },
  iconBehave: {
    padding: 14,
  },
  "*": {
    fontFamily: "Roboto",
  },
});
