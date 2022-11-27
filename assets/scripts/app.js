/* eslint-disable no-unused-vars */

import { Carousel, Collapse } from 'bootstrap';

import { App } from './classes/app';
import { Scrolling } from './classes/scrolling';
import { Viewport } from './classes/viewport';

const app = new App();
app.bindDomLoaded();

const scrolling = new Scrolling();
scrolling.bindDomLoaded();

const viewport = new Viewport();
viewport.bindDomLoaded();
