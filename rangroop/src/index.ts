// रंगरूप - Hindi CSS-in-JS Library
export * from './shaili';  // styled components (शैली = style)
export * from './roop';    // style function (रूप = form/appearance)
export * from './rang';    // colors and themes (रंग = color)
export * from './vikalp';  // variants (विकल्प = options)
export * from './types';

// Re-export commonly used functions with Hindi names
export {
  globalStyle as vishwaShailI,  // विश्वशैली = global style
  createVar as banayeVar,       // बनाये = create
  assignVars as lagayeVars,     // लगाये = assign
  keyframes as gatiFrames       // गति = motion
} from '@vanilla-extract/css';
