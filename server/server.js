import express from 'express';
import cors from 'cors';
import LoginRouter from './router/LoginRouter.js';
import productRouter from './router/productRouter.js';
import mypageRouter from './router/mypageRouter.js';


const server = express();
const port = 9000;

/* 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded()); 
server.use(cors());
// server.use('/upload_files', express.static(path.join("upload_files")));



// 서버의 요청처리를 위한 미들웨어 정의 //
server.use('/product', productRouter);
server.use('/login',LoginRouter);
server.use('/mypage',mypageRouter);




server.listen(port,()=>{
    console.log('서버실행중');
    
});