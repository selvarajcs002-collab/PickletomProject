import { scale, verticalScale } from '../utils/responsive';

export const Spacing = {
    xs: scale(4),
    sm: scale(8),
    md: scale(16),
    lg: scale(24),
    xl: scale(32),
    xxl: scale(48),
};

export const VerticalSpacing = {
    xs: verticalScale(4),
    sm: verticalScale(8),
    md: verticalScale(16),
    lg: verticalScale(24),
    xl: verticalScale(32),
    xxl: verticalScale(48),
};

export const Layout = {
    borderRadius: scale(16),
    cardRadius: scale(24),
    headerHeight: verticalScale(60),
    paddingHorizontal: scale(20),
};
