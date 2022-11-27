import { dom, library } from '@fortawesome/fontawesome-svg-core';
// Brand Icons
import {
    faBehance,
    faCss3,
    faGithubAlt,
    faGoogle,
    faJs,
    faLinkedinIn,
    faPhp,
    faShopify,
    faWordpress,
} from '@fortawesome/free-brands-svg-icons';
// Regular Icons
// import {} from '@fortawesome/free-regular-svg-icons';
// Solid Icons
import {
    faAngleUp,
    faBars,
    faDatabase,
    faEllipsisH,
    faEnvelope,
    faFrown,
    faGrin,
    faMeh,
    faPhone,
    faShoppingCart,
    faThumbsDown,
    faThumbsUp,
    faUserSecret,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faAngleUp,
    faBars,
    faBehance,
    faCss3,
    faDatabase,
    faEllipsisH,
    faEnvelope,
    faFrown,
    faGithubAlt,
    faGoogle,
    faGrin,
    faJs,
    faLinkedinIn,
    faMeh,
    faPhone,
    faPhp,
    faShopify,
    faShoppingCart,
    faThumbsDown,
    faThumbsUp,
    faUserSecret,
    faWordpress
);

// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch();
