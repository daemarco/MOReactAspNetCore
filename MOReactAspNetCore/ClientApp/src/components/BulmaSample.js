import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";

export class BulmaSample extends Component {

    render() {
        return (
            <div>
                <h1>Hello Hello bulma sample!</h1>
                <Button
                    renderAs="a"
                    href="https://alligator.io"
                    color="danger"
                    size="large"
                    rounded
                    outlined
                >
                    Wowza, it's a link!
</Button>

            </div>);
    }

}