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
    ).toEqual('/docs/api/map/#map');

    expect(
        redirect({
            hash: '#map#scrollzoom'
        })
    ).toEqual('/docs/api/map/#map#scrollzoom');

    expect(
        redirect({
            hash: '#map.event:mouseover'
        })
    ).toEqual('/docs/api/map/#map.event:mouseover');

    expect(
        redirect({
            hash: '#lnglat'
        })
    ).toEqual('/docs/api/geography/#lnglat');

    expect(
        redirect({
            hash: '#icontrol'
        })
    ).toEqual('/docs/api/markers/#icontrol');

    expect(
        redirect({
            hash: '#icontrol#getdefaultposition'
        })
    ).toEqual('/docs/api/markers/#icontrol#getdefaultposition');

    expect(
        redirect({
            hash: '#touchpitchhandler#isenabled'
        })
    ).toEqual('/docs/api/handlers/#touchpitchhandler#isenabled');

    expect(
        redirect({
            hash: '#canvassource#getcanvas'
        })
    ).toEqual('/docs/api/sources/#canvassource#getcanvas');

    expect(
        redirect({
            hash: '#mapwheelevent'
        })
    ).toEqual('/docs/api/events/#mapwheelevent');

    expect(
        redirect({
            hash: '#mapwheelevent#type'
        })
    ).toEqual('/docs/api/events/#mapwheelevent#type');

    expect(
        redirect({
            hash: '#clearprewarmedresources'
        })
    ).toEqual('/docs/api/properties/#clearprewarmedresources');
});
