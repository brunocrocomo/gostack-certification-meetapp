import styled from 'styled-components';

export const Wrapper = styled.div`
    overflow: auto;
    height: 100%;
    background: linear-gradient(180deg, #22202c 0%, #402845 100%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 50px;

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button {
            margin: 5px 0 0;
            height: 50px;
            font-size: 18px;
        }
    }

    a {
        color: #fff;
        margin-top: 15px;
        font-size: 16px;
        font-weight: bold;
        opacity: 0.6;

        &:hover {
            opacity: 1;
        }
    }
`;
