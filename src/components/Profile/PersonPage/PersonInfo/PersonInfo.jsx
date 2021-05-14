import React from 'react';

// Значит можно сделать разные страницы и с помощью маршрутизации добиться перехода между этими страницами,
// Нажимая на фотографии в диалогах, чтобы на этой странице была другая аватарка
// Другие посты и так далее

import styled from 'styled-components'

const ProfileAvaInfo = styled.div`
    position: relative;
  
    padding: 50px 230px;
`;

const Ava = styled.img`
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%);

    border-radius: 50%;
  
    width: 150px;
    height: 150px;
`;

const PersonInfo = (props) => {
    return (
        <ProfileAvaInfo>

            <Ava src="https://im0-tub-ru.yandex.net/i?id=954d3b7688aa8a67a5b0c8e1eecf7730&n=13" alt="" />

           
                
                <div >
                    <strong>Danila</strong>
                </div>

                <div >
                    <div>Date of birthday:</div>
                    <div>City:</div>
                    <div>Edication:</div>
                    <div>WebSite:</div>
                </div>


        </ProfileAvaInfo>
    );
};

export default PersonInfo;