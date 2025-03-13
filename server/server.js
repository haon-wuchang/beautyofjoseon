import express from 'express';
import cors from 'cors';
import path from 'path';
<<<<<<< HEAD
import productRouter from './router/productRouter.js';
import mainRouter from './router/mainRouter.js';
=======
import productRouter from './router/productRouter.js'
import LoginRouter from './router/LoginRouter.js';
import productRouter from './router/productRouter.js';
import mypageRouter from './router/mypageRouter.js';
>>>>>>> 8cd6f19619b7abe5c3986224ac8e0d4f70c56ab4



/* 서버 생성 및 포트 정의 */
const server = express();
const port = 9000;

/* 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded()); 
server.use(cors());
// server.use('/upload_files', express.static(path.join("upload_files")));


<<<<<<< HEAD

// 서버의 요청처리를 위한 미들웨어 정의 //
server.use('/product', productRouter);
server.use('/main', mainRouter);
=======
/* 서버의 요청처리를 위한 미들웨어 정의 */
server.use('/product', productRouter)
server.use('/product', productRouter);
server.use('/login',LoginRouter);
server.use('/mypage',mypageRouter);
>>>>>>> 8cd6f19619b7abe5c3986224ac8e0d4f70c56ab4




server.listen(port,()=>{
    console.log('서버실행중');
    
});