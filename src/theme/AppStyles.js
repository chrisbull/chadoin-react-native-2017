import { StyleSheet, Platform } from 'react-native'
import Fonts from './Fonts'
import Colors from './Colors'
import Metrics from './Metrics'
import Borders from './Borders'

export const UnderlayColor = 'rgba(0,0,0,0.1)'
export const TintColor = Colors.purple
export const TextColor = Colors.baseColor

export default {
  // All Font Sizes and Variations
  ...Fonts.style,

  navigationHeader: {
    backgroundColor: 'white',
  },

  mainContainer: {
    flex: 1,
    backgroundColor: Colors.base0,
    position: 'relative',
  },

  scrollContainer: {
    flex: 1,
  },

  scrollViewContentContainer: {
    flex: 1,
  },

  contentContainer: {
    flex: 1,
    padding: Metrics.spacing.large,
  },

  centerContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  centerHorizontalContainer: {
    flex: 1,
    alignItems: 'center',
  },

  centerVerticalContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  centerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },

  blurContainer: {
    ...Platform.select({
      ios: {
        flex: 1,
      },
    }),
  },

  // Tables

  tableContainer: {
    flex: 1,
  },

  tableRow: {
    paddingHorizontal: Metrics.spacing.regular,
    paddingVertical: Metrics.spacing.small,
    minHeight: Metrics.rowMinHeight,
    justifyContent: 'center',
  },

  tableRowTitle: {
    ...Fonts.style.tableLabel,
  },

  tableSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Borders.borderColor,
    ...Platform.select({
      ios: {
        marginLeft: Metrics.spacing.regular,
      },
    }),
  },

  tableGroup: {
    ...Borders.defaultStyle,
    marginHorizontal: Metrics.marginHorizontal,
    marginVertical: Metrics.marginVertical,
    overflow: 'hidden',
  },

  tableGroupRow: {
    ...Borders.defaultStyle,
    paddingHorizontal: Metrics.spacing.regular,
    paddingVertical: Metrics.spacing.small,
  },

  // Messages

  messageRow: {
    paddingHorizontal: Metrics.spacing.regular,
    paddingVertical: Metrics.spacing.small,
  },

  messageRowText: {
    ...Fonts.style.body,
  },

  messageInputContainer: {
    backgroundColor: 'white',
    paddingHorizontal: Metrics.spacing.regular,
    paddingVertical: Metrics.spacing.small,
  },

  messageTextInputContainer: {},

  messageTextInput: {
    ...Fonts.style.body,
  },
}
