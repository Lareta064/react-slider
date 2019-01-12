import React, { Component } from 'react';
//-import './App.css';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
	color:#fff;
	font-size: 40px;
	font-weight: 700;
	line-height: 50px;
	span {
		display: block;
		font-size: 24px;
		line-height: 30px;
	}
`
const LightText = styled.div`
	color:#fff;
	font-size: 18px;
	font-weight: 300;
	line-height: 28px;
	padding-top:54px;
	margin-bottom: 32px;
`
const CallButton = styled.button`
	width: 247px;
	height:67px;
	background-color: #ffa14b;
	border-radius: 30px;
	transition:.5s;
	color: #fff;
	font-size: 18px;
	font-weight:400;

	&:hover{
		opacity:.6;
	}
`
class Main extends React.Component {

	render(){
		return(
			<Row>
				<Col lg={5}>
					<Repair>
						Качественный ремонт
						<span> iphone за 35 минут и гарантия 1 год</span>
					</Repair>
					<LightText>
						Оставьте заявку на бесплатную диагностику без очереди
						и получите защитное стекло , стоимостью 1000 рублей,
						с установкой в подарок!
					</LightText>
					<CallButton>Отправить заявку!</CallButton>

				</Col>
				<Col lg={6}>

				</Col>

			</Row>

			)

	}
}
export default Main