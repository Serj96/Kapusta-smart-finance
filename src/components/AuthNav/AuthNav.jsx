import {
  NavStyled,
  NameFirstLetter,
  Mail,
  ExitMobile,
  Decor,
  ExitTablet,
} from './AuthNav.styled';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'Redux/authOperaions';
import logoutSvg from '../../images/logout.svg';
import { ModalWindow } from 'components/ModalWindowNav/ModalWindowNav';
import {

  getSid,
  getUserMail
} from 'Redux/kapustaSlice';

export const AuthNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const token = useSelector(getSid);
  const userEmail = useSelector(getUserMail);
  const dispatch = useDispatch();

  // Відкрити модалку
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  // Закрити модалку
  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Логаут
  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    token && (
      <>
        <NavStyled>
          {/* тут буде перша буква імені юзера */}
          {userEmail !== null && <NameFirstLetter>
            {Object.values(userEmail[0].toUpperCase())}
          </NameFirstLetter>}

          {/* тут відображається мейл юзера */}
          {userEmail !== null && <Mail>{userEmail}</Mail>}

          {/* Свг виходу в мобілці */}
          <ExitMobile src={logoutSvg} alt="logout" onClick={handleModalOpen} />

          <Decor />

          {/* Кнопка виходу в таблетці */}
          <ExitTablet type="button" onClick={handleModalOpen}>
            Exit
          </ExitTablet>
        </NavStyled>

        {/* Модалка при виході */}
        {modalOpen && (
          <ModalWindow closeModal={handleModalClose} dispatch={handleClick}>
            Do you really want to leave?
          </ModalWindow>
        )}
      </>
    )
  );
};
