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
    ).toEqual('/javascript/map/#map');

    expect(
        redirect({
            hash: '#map#scrollzoom'
        })
    ).toEqual('/javascript/map/#map#scrollzoom');

    expect(
        redirect({
            hash: '#map.event:mouseover'
        })
    ).toEqual('/javascript/map/#map.event:mouseover');

    expect(
        redirect({
            hash: '#lnglat'
        })
    ).toEqual('/javascript/geography/#lnglat');

    expect(
        redirect({
            hash: '#icontrol'
        })
    ).toEqual('/javascript/markers/#icontrol');

    expect(
        redirect({
            hash: '#icontrol#getdefaultposition'
        })
    ).toEqual('/javascript/markers/#icontrol#getdefaultposition');

    // expect(
    //     redirect({
    //         hash: '#touchpitchhandler#isenabled'
    //     })
    // ).toEqual('/javascript/handlers/#touchpitchhandler#isenabled');

    expect(
        redirect({
            hash: '#canvassource#getcanvas'
        })
    ).toEqual('/javascript/sources/#canvassource#getcanvas');

    expect(
        redirect({
            hash: '#mapwheelevent'
        })
    ).toEqual('/javascript/events/#mapwheelevent');

    expect(
        redirect({
            hash: '#mapwheelevent#type'
        })
    ).toEqual('/javascript/events/#mapwheelevent#type');

    // expect(
    //     redirect({
    //         hash: '#clearprewarmedresources'
    //     })
    // ).toEqual('/javascript/properties/#clearprewarmedresources');
});
