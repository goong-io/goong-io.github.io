/*---
title: User interaction handlers
description: Use handlers to add different kinds of interactivity to the map such as mouse interactivity, touch interactions, and other gestures.
contentType: API
order: 6
layout: page
language:
- JavaScript
products:
- Documentation
---*/

import React from 'react';
import PageWrapper from '../../components/javascript/page-wrapper.js';

export default class Page extends React.Component {
    render() {
        return <PageWrapper {...this.props} />;
    }
}
