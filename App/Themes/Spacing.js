import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')
const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  screenWidth,
  screenHeight,
  cardRadius: 5
}

export default metrics