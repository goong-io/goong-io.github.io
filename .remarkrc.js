// const rc = require('@mapbox/remark-config-docs');
// const topicsOrder = require('./docs/data/topics.json');

// const config = {
//     siteBasePath: '/',
//     pages: 'docs/pages/',
//     constants: 'docs/constants.json',
//     ignoreLinks: 'conf/ignore-links.json',
//     topicOptions: topicsOrder
// };

// exports.plugins = [...rc.plugins(config)];

const config = [
    ['remark-lint-heading-increment', [2]],
    ['remark-frontmatter', ['yaml']]
];

exports.plugins = [...config];
