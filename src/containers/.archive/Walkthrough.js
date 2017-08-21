import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
// import Swiper from 'react-native-swiper'
import Swiper from 'react-native-deck-swiper'

import LoginActions from '../redux/LoginRedux'
import RoundedButton from '../components/RoundedButton'
import TextLink from '../components/TextLink'

import { ApplicationStyles, Colors, Fonts, Metrics } from '../theme'

const appStyles = ApplicationStyles

// var styles = StyleSheet.create({
//   slide: {
//     ...appStyles.centerVerticalContainer,
//   },
//   slide1: {
//     backgroundColor: Colors.primary,
//   },
//   slide2: {
//     backgroundColor: Colors.amber,
//   },
//   slide3: {
//     backgroundColor: Colors.blue,
//   },
//   slide4: {
//     backgroundColor: Colors.seafoam,
//   },
//   contentBox: {
//     marginHorizontal: Metrics.spacing.xlarge,
//   },
//   headerText: {
//     ...Fonts.style.h1,
//     ...Fonts.weight.bold,
//     color: Fonts.color.lightColor,
//     marginVertical: Metrics.spacing.regular,
//   },
//   messageText: {
//     ...Fonts.style.paragraph,
//     color: Fonts.color.darkColorDarkOpacity,
//   },
// })
//
// class Walkthrough extends Component {
//   render() {
//     return (
//       <Swiper loop={false}>
//         <View style={[styles.slide, styles.slide1]}>
//           <View style={styles.contentBox}>
//             <Text style={styles.headerText}>{`Hey! \nWha Cha Doin?`}</Text>
//             <Text style={styles.messageText}>
//                Welcome to ChaDoin! Your newest and best way to message your best
//                friends, plan events, instantly share photos, videos, and files, and so
//                much more - all in one single app!
//             </Text>
//           </View>
//         </View>
//         <View style={[styles.slide, styles.slide2]}>
//           <View style={styles.contentBox}>
//             <Text style={styles.headerText}>Plan Fun Activities!</Text>
//           </View>
//         </View>
//         <View style={[styles.slide, styles.slide3]}>
//           <View style={styles.contentBox}>
//             <Text
//               style={styles.headerText}
//             >{`Message Your \nBest Friends`}</Text>
//           </View>
//         </View>
//         <View style={[styles.slide, styles.slide4]}>
//           <View style={styles.contentBox}>
//             <Text style={styles.headerText}>
//               {`Instantly Share \nPhotos & Videos`}
//             </Text>
//             <RoundedButton
//               label="Continue"
//               onPress={() => {
//                 this.props.gotoLogin()
//               }}
//             />
//           </View>
//         </View>
//       </Swiper>
//     )
//   }
// }

const Card1 = () =>
  <View style={[styles.slide, styles.slide1]}>
    <View style={styles.cardContent}>
      <Text style={styles.cardHeaderText}>{`Hey! \nWha Cha Doin?`}</Text>
      <Text style={styles.cardText}>
        Welcome to ChaDoin! Your easiest and best way to message your best
        friends, plan events, instantly share photos, videos, and files, and so
        much more - all in one single app!
      </Text>
    </View>
  </View>

const Card2 = () =>
  <View style={[styles.slide, styles.slide2]}>
    <View style={styles.cardContent}>
      <Text style={styles.cardHeaderText}>Plan Fun Activities!</Text>
    </View>
  </View>

const Card3 = () =>
  <View style={[styles.slide, styles.slide3]}>
    <View style={styles.cardContent}>
      <Text style={styles.cardHeaderText}>{`Message Your \nBest Friends`}</Text>
    </View>
  </View>

const Card4 = () =>
  <View style={[styles.slide, styles.slide4]}>
    <View style={styles.cardContent}>
      <Text style={styles.cardHeaderText}>
        {`Instantly Share \nPhotos & Videos`}
      </Text>
    </View>
  </View>

const styles = StyleSheet.create({
  container: {
    ...appStyles.mainContainer,
  },

  slide: {
    ...appStyles.centerVerticalContainer,
    borderRadius: 4,
  },

  slide1: {
    backgroundColor: Colors.primary,
  },

  slide2: {
    backgroundColor: Colors.amber,
  },

  slide3: {
    backgroundColor: Colors.blue,
  },

  slide4: {
    backgroundColor: Colors.seafoam,
  },

  cardContent: {
    marginHorizontal: Metrics.spacing.xlarge,
  },

  cardHeaderText: {
    ...Fonts.style.h1,
    ...Fonts.weight.bold,
    color: Fonts.color.lightColor,
    marginVertical: Metrics.spacing.regular,
  },

  cardText: {
    ...Fonts.style.paragraph,
    color: Fonts.color.lightColorDarkOpacity,
  },

  card: {
    flex: 1,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 1,
  },

  getStartedContainer: {
    flex: 1,
    ...appStyles.centerVerticalContainer,
    ...appStyles.centerHorizontalContainer,
  },

  getStartedTitle: {
    ...appStyles.h2,
    ...Fonts.weight.bold,
    marginBottom: Metrics.spacing.large,
  },

  loginTextLinkContainer: {
    ...appStyles.centerTextContainer,
    marginTop: Metrics.spacing.xlarge,
  },
})

class Walkthrough extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          cards={[<Card1 />, <Card2 />, <Card3 />, <Card4 />]}
          renderCard={card => {
            return (
              <View style={styles.card}>
                {card}
              </View>
            )
          }}
          cardIndex={0}
          backgroundColor={Colors.transparent}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedTitle}>Let's Get Started!</Text>
            <RoundedButton
              primary
              label="Create An Account"
              onPress={() => {}}
            />
            <View style={styles.loginTextLinkContainer}>
              <Text style={appStyles.bodyLight}>Already have an account? </Text>
              <TextLink
                title="Login"
                onPress={() => {
                  this.props.gotoLogin()
                }}
              />
            </View>
          </View>
        </Swiper>
      </View>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  gotoLogin: () => dispatch(LoginActions.login()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Walkthrough)
