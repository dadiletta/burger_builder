import React, {Fragment} from 'react';
import styled from 'styled-components'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const StyledMain = styled.main `
    margin-top: 72px;
`

const layout = (props) => (
    <Fragment>
        <Toolbar/>
        <SideDrawer/>
        <StyledMain>
             { props.children }
        </StyledMain>

    </Fragment>   
);

export default layout;