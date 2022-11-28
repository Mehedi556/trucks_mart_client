import React from 'react';

const DeleteModal = ({header , body , closeDeleteModal , deleteConfirmMessage , modal}) => {
    return (
        <div>
{/* Put this part before </body> tag */}
<input type="checkbox" id="delete-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{header}</h3>
    <p className="py-4">{body}</p>
    

<div className='flex justify-center gap-3'>
<div className="modal-action">
      <label onClick={() => deleteConfirmMessage(modal)} htmlFor="delete-modal" className="btn bg-red-700 border-0">DELETE</label>
    </div>
    <div className="modal-action">
      <label onClick={closeDeleteModal} className="btn border-0">DISMISS</label>
    </div>
</div>

  </div>
</div>
        </div>
    );
};

export default DeleteModal;