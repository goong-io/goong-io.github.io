import redirect from '../api-ref-redirect';

it(`api-ref-redirect`, () => {
    expect(
        redirect({
            hash: '#poptarts'
        })
    ).toEqual(undefined);

    expect(
        redirect({
            hash: '#map'
        })
    ).toEqual('/docs/javascript/map/#map');

    expect(
        redirect({
            hash: '#map#scrollzoom'
        })
    ).toEqual('/docs/javascript/map/#map#scrollzoom');

    expect(
        redirect({
            hash: '#map.event:mouseover'
        })
    ).toEqual('/docs/javascript/map/#map.event:mouseover');

    expect(
        redirect({
            hash: '#lnglat'
        })
    ).toEqual('/docs/javascript/geography/#lnglat');

    expect(
        redirect({
            hash: '#icontrol'
        })
    ).toEqual('/docs/javascript/markers/#icontrol');

    expect(
        redirect({
            hash: '#icontrol#getdefaultposition'
        })
    ).toEqual('/docs/javascript/markers/#icontrol#getdefaultposition');

    expect(
        redirect({
            hash: '#touchpitchhandler#isenabled'
        })
    ).toEqual('/docs/javascript/handlers/#touchpitchhandler#isenabled');

    expect(
        redirect({
            hash: '#canvassource#getcanvas'
        })
    ).toEqual('/docs/javascript/sources/#canvassource#getcanvas');

    expect(
        redirect({
            hash: '#mapwheelevent'
        })
    ).toEqual('/docs/javascript/events/#mapwheelevent');

    expect(
        redirect({
            hash: '#mapwheelevent#type'
        })
    ).toEqual('/docs/javascript/events/#mapwheelevent#type');

    expect(
        redirect({
            hash: '#clearprewarmedresources'
        })
    ).toEqual('/docs/javascript/properties/#clearprewarmedresources');
});
