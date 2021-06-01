import Redirect from '../components/redirect';
import { prefixUrl } from '@mapbox/batfish/modules/prefix-url';

export default Redirect(() => prefixUrl(`/javascript/${window.location.hash}`));
