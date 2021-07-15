import React from 'react';
import OverviewHeader from '@mapbox/dr-ui/overview-header';

export default class Help extends React.PureComponent {
    render() {
        return (
            <OverviewHeader
                title="Goong Helps"
                description="Find Goong-related terms and their definitions."
                theme="bg-blue"
                lightText={true}
            />
        );
    }
}
