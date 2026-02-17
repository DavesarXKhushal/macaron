// RangRoop - CSS-in-JS with Hindi Terms in English
export * from './shaili';    // styled components
export * from './roop';      // style function  
export * from './rang';      // colors and themes
export * from './variants';  // variants
export * from './types';

// Re-export commonly used functions with Hindi names
export {
  globalStyle as globalShaili,  // global style
  createVar as banaoVar,        // create variable
  assignVars as lagaoVars,      // assign variables
  keyframes as chalFrames       // animation frames
} from '@vanilla-extract/css';
