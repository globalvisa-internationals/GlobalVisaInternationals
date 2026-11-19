// Registry used by the dynamic route. Only server code imports this, so none of it reaches the browser.
import canada from './canada';
import australia from './australia';
import europe from './europe';
import newZealand from './new-zealand';
import singapore from './singapore';
import uk from './uk';
import usa from './usa';

export { COUNTRIES } from './countries';

const ALL = { canada, australia, europe, 'new-zealand': newZealand, singapore, uk, usa };

export const getCountry = (slug) => ALL[slug] ?? null;
