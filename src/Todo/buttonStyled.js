import Button from '@atlaskit/button'
import styled from 'styled-components'

export const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;

    &:hover {
        .checkIcon, .redoIcon {
            display: inline-block;
            color: green;
        }
        .checkIcon {
            margin-right: 10px;
        }

        .redoIcon {
            margin-left: 10px;
        }
    }

    .checkIcon, .redoIcon {
        display: none;

        &:hover {
            background-color: #e2e2e2;
            border-radius: 4px;
        }
    }
`;
