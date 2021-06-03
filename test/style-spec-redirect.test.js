const test = require('tape');
const redirect = require('../docs/util/style-spec-redirect.js');

test(`style-spec-redirect`, (t) => {
    t.equal(
        redirect({
            hash: '#light-anchor'
        }),
        '/style-spec/light/#anchor'
    );

    t.equal(
        redirect({
            hash: '#root-version'
        }),
        '/style-spec/root/#version'
    );

    t.equal(
        redirect({
            hash: '#sources-vector'
        }),
        '/style-spec/sources/#vector'
    );

    t.equal(
        redirect({
            hash: '#sources-vector-url'
        }),
        '/style-spec/sources/#vector-url'
    );

    t.equal(
        redirect({
            hash: '#sources-raster-dem-url'
        }),
        '/style-spec/sources/#raster-dem-url'
    );

    t.equal(
        redirect({
            hash: '#sprite'
        }),
        '/style-spec/sprite/'
    );

    t.equal(
        redirect({
            hash: '#glyphs'
        }),
        '/style-spec/glyphs/'
    );

    t.equal(
        redirect({
            hash: '#transition-duration'
        }),
        '/style-spec/transition/#duration'
    );

    t.equal(
        redirect({
            hash: '#layer-id'
        }),
        '/style-spec/layers/#id'
    );
    t.equal(
        redirect({
            hash: '#layers-background'
        }),
        '/style-spec/layers/#background'
    );
    t.equal(
        redirect({
            hash: '#layout-background-visibility'
        }),
        '/style-spec/layers/#layout-background-visibility'
    );

    t.equal(
        redirect({
            hash: '#types-color'
        }),
        '/style-spec/types/#color'
    );

    t.equal(
        redirect({
            hash: '#data-expressions'
        }),
        '/style-spec/expressions/#data-expressions'
    );

    t.equal(
        redirect({
            hash: '#expressions-types-array'
        }),
        '/style-spec/expressions/#types-array'
    );

    t.equal(
        redirect({
            hash: '#other-function'
        }),
        '/style-spec/other/#function'
    );

    t.equal(
        redirect({
            hash: '#other-filter'
        }),
        '/style-spec/other/#other-filter'
    );

    t.equal(
        redirect({
            hash: '#paint-fill-fill-color'
        }),
        '/style-spec/layers/#paint-fill-fill-color'
    );

    t.equal(
        redirect({
            hash: '#hello-world'
        }),
        undefined
    );
    t.end();
});
