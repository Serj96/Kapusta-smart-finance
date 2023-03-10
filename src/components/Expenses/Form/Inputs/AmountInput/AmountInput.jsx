import React from 'react';

import { useFormContext } from 'react-hook-form';
import { FaCalculator } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import {
  ErrorMessage,
  ErrorPositionWrapper,
} from '../DescriptionInput/DescriptionInput.styled';

import { AmounInput, AmountWrapper, IconBtn } from './AmountInput.styled';

const AmountInput = () => {
  const isTabScreen = useMediaQuery({ query: '(min-width: 768px)' });
  let placeholder = '00.00 UAH';

  if (isTabScreen) placeholder = '0,00';

  const {
    register,
    // eslint-disable-next-line
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  // const ref = useRef(null);

  // useEffect(() => {
  //   if (ref && ref.current) {
  //     console.log(ref.current);
  //   }
  // }, []);

  return (
    <>
      {/* <input type="text " placeholder="input" ref={ref} /> */}
      <ErrorPositionWrapper>
        <AmountWrapper>
          <AmounInput
            {...register('amount')}
            type="text"
            placeholder={placeholder}
            // innerRef={ref}
          />
          <IconBtn type="button">
            <FaCalculator size={'20px'} color={'#52555F'} />
          </IconBtn>
          {errors?.amount && (
            <ErrorMessage>
              {'This field is required and must be a number'}
            </ErrorMessage>
          )}
        </AmountWrapper>
      </ErrorPositionWrapper>
    </>
  );
};

export default AmountInput;
