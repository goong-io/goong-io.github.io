const test = require('tape');
const redirect = require('../docs/util/style-spec-redirect.js');

test(`style-spec-redirect`, (t) => {
    t.equal(
        redirect({
            hash: '#light-anchor'
        }),
        '/docs/style-spec/light/#anchor'
    );

    t.equal(
        redirect({
            hash: '#root-version'
        }),
        '/docs/style-spec/root/#version'
    );

    t.equal(
        redirect({
            hash: '#sources-vector'
        }),
        '/docs/style-spec/sources/#vector'
    );

    t.equal(
        redirect({
            hash: '#sources-vector-url'
        }),
        '/docs/style-spec/sources/#vector-url'
    );

    t.equal(
        redirect({
            hash: '#sources-raster-dem-url'
        }),
        '/docs/style-spec/sources/#raster-dem-url'
    );

    t.equal(
        redirect({
            hash: '#sprite'
        }),
        '/docs/style-spec/sprite/'
    );

    t.equal(
        redirect({
            hash: '#glyphs'
        }),
        '/docs/style-spec/glyphs/'
    );

    t.equal(
        redirect({
            hash: '#transition-duration'
        }),
        '/docs/style-spec/transition/#duration'
    );

    t.equal(
        redirect({
            hash: '#layer-id'
        }),
        '/docs/style-spec/layers/#id'
    );
    t.equal(
        redirect({
            hash: '#layers-background'
        }),
        '/docs/style-spec/layers/#background'
    );
    t.equal(
        redirect({
            hash: '#layout-background-visibility'
        }),
        '/docs/style-spec/layers/#layout-background-visibility'
    );

    t.equal(
        redirect({
            hash: '#types-color'
        }),
        '/docs/style-spec/types/#color'
    );

    t.equal(
        redirect({
            hash: '#data-expressions'
        }),
        '/docs/style-spec/expressions/#data-expressions'
    );

    t.equal(
        redirect({
            hash: '#expressions-types-array'
        }),
        '/docs/style-spec/expressions/#types-array'
    );

    t.equal(
        redirect({
            hash: '#other-function'
        }),
        '/docs/style-spec/other/#function'
    );

    t.equal(
        redirect({
            hash: '#other-filter'
        }),
        '/docs/style-spec/other/#other-filter'
    );

    t.equal(
        redirect({
            hash: '#paint-fill-fill-color'
        }),
        '/docs/style-spec/layers/#paint-fill-fill-color'
    );

    t.equal(
        redirect({
            hash: '#hello-world'
        }),
        undefined
    );
    t.end();
});
