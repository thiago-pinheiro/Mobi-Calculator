import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::after,
*::before {
box-sizing: border-box;  
}
* {
    padding: 0;
    margin: 0;
    font-family:'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    background-color: #009A8A;
  }
  
  
  .App {
    display:flex;
    justify-content: center;
    align-content: center;
    margin-top: 80px;
    
  }
  
  .general-container {
    background-color: ${({ theme }) => theme.background};
    border-radius: 8px;
  
  }
  
  .container {
    display: grid;  
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows:repeat(6, 1fr);
    background-color: ${({ theme }) => theme.background};
    border-radius: 16px 16px 8px 8px;
    padding: 4px;
    width: 280px;
    height: 360px;
    margin-top: 15px;
  }
  
  .item {
    margin: 5px 5px;
    font-size: 24px;
    cursor:pointer;
    border: none;
    border-radius: 32px; 
  }
  
  .item:hover{
    opacity: 0.7;
  }
  
  .item:active{
    background-color: white;
    opacity: 0.3;
    color:darkgray
  }
  
  .textEquation, .textResult{
    background-color: #EBEBEB;
    border: none;
    height: 30px;
    margin-left: 4px;
    border-radius: 8px;
    text-align: right;
    color: #424242;
    letter-spacing: 2px;
  }
  
  .textEquation{
    font-size: 20px;
    width: 280px;
  }
  
  .textResult {
    height: 48px;
    font-size: 48px;
    width: 270px;
  }
  
  .displayEquation{
    font-size: 20px;
    margin-top: 30px;
    background-color: #EBEBEB;
  }
  
  .displayResult{
    background-color: #EBEBEB;
    margin-top: 2px;
  }
  
  .logo {
    background-image:url("./Img/Vector.png") ;
    background-repeat: no-repeat;
    background-color: #ffff;
    background-position: center;
    background-size: 30px;
    
    margin-left: 5px;
    font-size: 24px;
    cursor:pointer;
    border: none;
    border-radius: 32px; 
  }
  
  .share {
    font-size: 20px;
  }
  
  .delete, .backspace{
    color: #4443BC;
  }
  
  .operations {
    color: #009A8A;
  }
  
  .equal {
    background-color: #009A8A;
    color:#ffff;
  }
  
  .number, .operations, .delete,
  .backspace, .zero {
    background-color: #E0E0E0;
  }
  
  .number, .zero {
    color: #424242;
  }
  
  .zero {
    grid-column:1 / 3 ;
  }
  
  .number, .operations, .equal, 
  .logo, .backspace, .delete {
    width: 58px;
    height: 58px;
  }
  
  .logo, .delete, .backspace,
  .share {
    margin-top: 15px;
  }
`;

