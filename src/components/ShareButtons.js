import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions/appContainerActions";

class ShareButtons extends Component {
		
	share(socialNet) {
		const links = {
			vk: 'https://vk.com/share.php?url=https%3A%2F%2Faviasales.ru%2FShare',
			fb: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Faviasales.ru%2F&amp;src=sdkpreparse',
			tw: 'https://twitter.com/intent/tweet?text=Смотри%20что%20я%20нашел%20на%20Aviasales.ru&url=https%3A%2F%2Faviasales.ru%2F',
			ok: 'https://connect.ok.ru/offer?url=https%3A%2F%2aviasales.ru'
		};

		let shareWindow = window.open(links[socialNet],'Ленин велел делиться', 'width=600,height=400');

		if (this.props.isActionsPage) {
			 
			let shareChecker = setInterval(() => {   
			    if(shareWindow.closed) {  
			        clearInterval(shareChecker);  
			        this.props.updateUser(this.props.usrId, {shared: true});
			    }  
			}, 1000); 
		}
	}
	
	render() {
		return (
	        <div className="page__shares">
	            <button onClick={() => this.share('vk')} type="button" className="page__btn page__btn--vkontakte page__btn--share button button--vkontakte button--share"></button>
	            <button onClick={() => this.share('fb')} type="button" className="page__btn page__btn--facebook page__btn--share button button--facebook button--share"></button>
	            <button onClick={() => this.share('tw')} type="button" className="page__btn page__btn--twitter page__btn--share button button--twitter button--share"></button>
	            <button onClick={() => this.share('ok')} type="button" className="page__btn page__btn--odnoklassniki page__btn--share button button--odnoklassniki button--share"></button>
	        </div>            
		);
	}
}

const mapStateToProps = state => ({
	usrId: state.usr.id
});

export default connect(mapStateToProps, { updateUser })(ShareButtons);