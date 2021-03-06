import React from 'react';
import styled from 'styled-components';
import "./dicstyle.css";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector, useDispatch } from 'react-redux';



const DicList = (props) => {
  const dic_list = useSelector(state => state.dictionary.list);

  return (
    <Parent>
      <ListStyle>
        {dic_list.map((list, index) => {
          return (
            <ItemStyle>
              <Item className='list_item'
                key={index}

                onClick={() => { props.history.push('/detail/' + index); }}>
                <TextContainer>
                  <h1 style={{
                    fontSize: '18px',
                    fontWeight: '500',
                    margin: '0px',
                    lineHeight: '0.8em',
                  }}>{list.text}</h1>
                  <ColletBtn
                    color={list.complited ? "#FFCE20" : "#F5F5F5"}
                  >
                  </ColletBtn>
                </TextContainer>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  margin: '12px 0px 0px 0px',
                }}

                >{list.disc}</p>
              </Item>

            </ItemStyle>
          );
        })
        }

      </ListStyle>
      <AddBtn onClick={() => { props.history.push('/dicadd') }} >
        <FontAwesomeIcon icon={faPlus} color="#fff" size="1x" />
      </AddBtn>
    </Parent>
  );
}

const Parent = styled.div`
height: 600px;
max-height: 60vh;
postiion : absolute;
`;

const ListStyle = styled.div`
display: flex;
flex-direction: column;
overflow-x: hidden;
overflow-y: auto;
height: 600px;
max-height: 60vh; // 여기부분때문에 망가짐 ..
postiion : relative;

-ms-overflow-style: none;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
}
`;

const ItemStyle = styled.div`
padding: 27px 20px;
background-color: #F5F5F5;
border-radius: 18px;
margin-bottom: 11px;
&:hover{
  cursor: pointer;
  }
`;

const Item = styled.div`

`;

const TextContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const ColletBtn = styled.div`
width: 10px;
height: 10px;
background-color: ${props => props.color};
border-radius: 50%;
`;

const AddBtn = styled.button`
border-style: none;
background-color: #3040C4;
height: 45px;
width: 45px;
border-radius: 12px;
&:hover{
  cursor: pointer;
  opacity: 0.8;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05),
  inset 0px 1px 0px rgba(255, 255, 255, 0.1);
transition: background-color 100ms ease-in, box-shadow 100ms ease-in;
  }
position: absolute;
bottom: 16px;
right : 16px;
`;




export default DicList;