import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const baseWidth = 390;
const baseHeight = 844;

export const scale = (size: number) =>
    (width / baseWidth) * size;

export const verticalScale = (size: number) =>
    (height / baseHeight) * size;

export const normalize = (size: number) =>
    Math.round(PixelRatio.roundToNearestPixel(scale(size)));