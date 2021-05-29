import { version } from '../../goong-js/package.json';
import { prefixUrl } from '@mapbox/batfish/modules/prefix-url';

function url(ext, options) {
    if (options && options.local && process.env.DEPLOY_ENV === 'local') {
        return prefixUrl(`/dist/goong-js.${ext}`);
    } else {
        return `https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@${version}/dist/goong-js.${ext}`;
    }
}

function js(options) {
    return url('js', options);
}

function css(options) {
    return url('css', options);
}

export default { js, css };
