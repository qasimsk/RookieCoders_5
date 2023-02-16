import React from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function SearchPage() {
    return (
        <MDBInputGroup style={{ marginTop: '100px', marginLeft: '35%' }}>
            <MDBInput label='Search' />
            <MDBBtn rippleColor='dark'>
                <MDBIcon icon='search' />
            </MDBBtn>
        </MDBInputGroup>

    );
}