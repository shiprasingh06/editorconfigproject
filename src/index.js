import './index.css';
import numeral from 'numeral';
/* eslint-disable no-console */

const courseValue=numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would like to play ${courseValue} for this awesome course`);
