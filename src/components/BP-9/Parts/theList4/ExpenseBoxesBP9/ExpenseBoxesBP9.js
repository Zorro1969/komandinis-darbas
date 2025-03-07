import React from 'react';
import {BsTrash} from 'react-icons/bs';
import {BiEdit} from 'react-icons/bi';

export default function ExpenseBoxesBP9() {
  return (
    <div className='BP9-expensesContainer'>
              <div className='mb-28px'>
                    <h3 className='d-flex justify-content-between'>
                      <span className='fs-20'>Transportas</span> 
                      <span className='fs-22 pe-2'>150 eur</span></h3>
                      <div className='bar'>
                        <div className='blueBar'> </div>
                      </div>
              </div>
              {/* Buttons */}
              <div className='BP9List-btnContainer'>
                  <div className='BP9list-btn BP9list-btnBlue'>
                      <div className='icon-size'> <BiEdit /></div>
                  </div>
                  <div className='BP9list-btn BP9list-btnRed'>
                      <div className='icon-size'> <BsTrash /></div>
                </div>
              </div>
          </div>
  )
}
