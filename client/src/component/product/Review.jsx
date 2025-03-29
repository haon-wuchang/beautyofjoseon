import React from 'react';
import Modal from 'react-modal';
import CreateReview from '../../component/product/CreateReview.jsx';

export default function Review({ reviews, showReview, setShowReview, isModalOpen, setIsModalOpen, modalStyle }) {
  return (
    <div className='product-detail-review'>
      <div className='review-top'>
        <p className='f14 w600'>Review</p>
        <div>
          <button className='w-btn3' onClick={() => setIsModalOpen(true)}>write</button>
        </div>
      </div>
      <table className='table'>
        <colgroup>
          <col style={{ width: "5%" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "10%" }} />
        </colgroup>
        <tbody>
          {reviews && reviews.length > 0 ? (
            reviews.map((review, index) => (
              <React.Fragment key={review.rid}>
                <tr onClick={() => setShowReview(showReview === index ? null : index)}>
                  <td>{index + 1}</td>
                  <td>{review.subject}</td>
                  <td>{review.id}</td>
                  <td>{review.rdate}</td>
                  <td>{review.view_count || 0}</td>
                </tr>
                {showReview === index && (
                  <tr>
                    <td colSpan={5} className="review-content">
                      <p>{review.text}</p>
                      {review.review_image?.map((img, idx) => (
                        <img key={idx} src={`http://localhost:9000/upload_review_photos/${img}`} alt="review" />
                      ))}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center', padding: '20px' }}>
                리뷰가 없습니다. 리뷰를 작성해주세요
              </td>
            </tr>
          )}

          {isModalOpen && (
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} style={modalStyle}>
              <CreateReview closeModal={() => setIsModalOpen(false)} />
            </Modal>
          )}
        </tbody>
      </table>
    </div>
  );
}
