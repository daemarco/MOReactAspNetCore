import React, { Component } from 'react';
import { Breadcrumb } from "react-bulma-components/full";

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Breadcrumb
        hrefAttr="href"
        separator="bullet"
        align="right"
        items={[
          {
            name: 'Home',
            url: '/',
            active: true,
          },
          {
            name: 'Counter',
            url: '/counter',
          },
          {
            name: 'Bulma Sample',
            url: '/bulmasample',
          },
          {
            name: 'Fetch Data',
            url: '/fetchdata',
          }
        ]}
      />
    );
  }
}
