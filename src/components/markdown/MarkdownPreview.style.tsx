import { Default } from './themes/default';
import { Coy } from './themes/coy';
import { Dark } from './themes/dark';
import { Funky } from './themes/funky';
import { Okaidia } from './themes/okaidia';
import { Solarizedlight } from './themes/solarizedlight';
import { Tomorrownight } from './themes/tomorrownight';
import { Twilight } from './themes/twilight';

export type PrismThemes =
  | 'default'
  | 'dark'
  | 'funky'
  | 'okaidia'
  | 'twilight'
  | 'coy'
  | 'solarizedlight'
  | 'tomorrownight';

export const themes = {
  default: Default,
  dark: Dark,
  funky: Funky,
  okaidia: Okaidia,
  twilight: Twilight,
  coy: Coy,
  solarizedlight: Solarizedlight,
  tomorrownight: Tomorrownight,
};
