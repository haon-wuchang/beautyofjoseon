import axios from 'axios';

export const naverLoginCallback = async(req, res) =>{
  const { code, state } = req.body; // ✅ body에서 가져오기
  console.log('컨트롤러 확인', req.body);
  
  try {
    const tokenRes = await axios.post('https://nid.naver.com/oauth2.0/token', null,{
                                        params: {
                                          grant_type: 'authorization_code',
                                          client_id: 'Aot8PsS2gfh4PzSET5k5',
                                          client_secret: 'P14D84tYvl',
                                          code,
                                          state,
                                        },
                                      });
    // console.log('[NAVER] 토큰 요청 응답:', tokenRes.data);
    const { access_token } = tokenRes.data;

    const userInfoRes = await axios.get('https://openapi.naver.com/v1/nid/me', {
                                          headers: {
                                            Authorization: `Bearer ${access_token}`,
                                          },
                                        });
    const userData = userInfoRes.data.response;  
    res.json(userData);

  } catch (error) {
    console.error('네이버 로그인 실패:', error);
    res.status(500).json({ error: '네이버 로그인 실패' });
  }
  // const result = await repository.naverLoginCallback(req.body);
  // res.json(result);
  // res.end();
};