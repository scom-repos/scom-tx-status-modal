import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;
import Assets from './assets';

export default Styles.style({
  textAlign: 'center',
  $nest: {
    'i-label > *': {
      fontSize: '.875rem'
    },
    '.modal': {
      minWidth: '25%',
      maxWidth: '100%',
      width: 455,
      background: Theme.background.modal,
      borderRadius: 12
    },
    '.i-modal-close svg': {
      fill: '#F05E61'
    },
    '.i-modal_content': {
      padding: '0 2.563rem 1.5rem'
    },
    '.i-modal_header': {
      borderBottom: 'none !important'
    },
    '.waiting-txt > *': {
      color: '#F6C958',
      fontSize: '1.125rem'
    },
    '.confirm-txt > *': {
      color: '#C2C3CB'
    },
    '.red-link *': {
      color: '#FD4A4C',
      textDecoration: 'none'
    },
    '.mb-1': {
      marginBottom: '1rem'
    },
    'i-button': {
      padding: '1rem 2rem',
      textAlign: 'center'
    },
    '.btn-os': {
      background: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
      fontFamily: 'Raleway Bold',
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#fff'
      // color: Theme.colors.primary.contrastText
    }
  }
})

Styles.fontFace({
  fontFamily: "Raleway Regular",
  src: `url("${Assets.fullPath('fonts/raleway/Raleway-Regular.ttf')}") format("truetype")`,
  fontWeight: 'nomal',
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Raleway Bold",
  src: `url("${Assets.fullPath('fonts/raleway/Raleway-Bold.ttf')}") format("truetype")`,
  fontWeight: 'bold',
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Raleway Light",
  src: `url("${Assets.fullPath('fonts/raleway/Raleway-Light.ttf')}") format("truetype")`,
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Raleway Medium",
  src: `url("${Assets.fullPath('fonts/raleway/Raleway-Medium.ttf')}") format("truetype")`,
  fontStyle: 'normal'
})

Styles.fontFace({
  fontFamily: "Raleway SemiBold",
  src: `url("${Assets.fullPath('fonts/raleway/Raleway-SemiBold.ttf')}") format("truetype")`,
  fontStyle: 'normal'
})