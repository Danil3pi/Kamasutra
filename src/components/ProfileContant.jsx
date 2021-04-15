import React from 'react';
import apps from './ProfileContant.module.css';
//import './ProfileContant.module.css';

const ProfileContant = () => {
    return (
        <div className="contant">
            <div className="contant_header"></div>

            <main className="contant_main">

                <div className="profile_contant">
                    <div className="ava">
                        <img className="photo_ava" src="https://im0-tub-ru.yandex.net/i?id=954d3b7688aa8a67a5b0c8e1eecf7730&n=13" alt="" />
                    </div>
                    <div className="profile_information">
                        <div className="name">
                            <strong>Danila</strong>
                        </div>
                        <div className="persone_info">
                            <div>Date of birthday:</div>
                            <div>City:</div>
                            <div>Edication:</div>
                            <div>WebSite:</div>
                        </div>
                    </div>
                </div>

                <div className="add_post">
                    My posts
                <form className="form_for_post">
                        <input className="input_post"></input>
                        <button className="post_button">Post</button>
                    </form>
                </div>

                <div className={apps.application}>
                    <div className={apps.item__application}>1</div>
                    <div className={apps.item__application}>2</div>
                    <div className={apps.item__application}>3</div>
                    <div className={apps.item__application}>4</div>
                    <div className={apps.item__application}>5</div>
                    <div className={apps.item__application}>6</div>
                    <div className={apps.item__application}>7</div>
                    <div className={apps.item__application}>8</div>
                    <div className={apps.item__application}>9</div>
                </div>

            </main>

        </div>
    );
};

export default ProfileContant;