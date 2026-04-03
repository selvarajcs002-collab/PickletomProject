import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

export const scale = (size: number) =>
    (width / guidelineBaseWidth) * size;

export const verticalScale = (size: number) =>
    (height / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.5) =>
    size + (scale(size) - size) * factor;

export const normalize = (size: number) =>
    Math.round(PixelRatio.roundToNearestPixel(moderateScale(size)));