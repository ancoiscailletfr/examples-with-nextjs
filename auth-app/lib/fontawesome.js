import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCaretDown, faCaretUp, faLock, faShare, faSpinner, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faGoogle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(faEnvelope, faLock, faUnlock, faCaretDown, faCaretUp, faUser, faSpinner, faGoogle, faTwitter, faGithub,
  faFacebook, faLinkedin, faShare)
