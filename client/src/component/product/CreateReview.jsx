import React from 'react';

export default function CreateReview() {
    
    
    const innerModalSt = {
        width: '100%',
        height: '100%',
        border: '1px solid black',
        textAlign: 'center',
        margin: '0 auto',
        overflowY: 'hidden'
      };
    
    return (
                <div style={innerModalSt}>
                    <div>
                        <div>제목</div>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <div>내용</div>
                        <input type="text" />
                        
                    </div>
                    <div>
                        사진 추가
                    </div>
                    <button>리뷰등록</button>
                </div>

    );

}