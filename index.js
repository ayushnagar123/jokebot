const SlackBot=require('slackbot')
const axios=require('axios')

const bot= new SlackBot({
	token:'xoxb-466127010882-470574206323-rpO9mKYMpRIaXwUEG5CnyWhy'
	name:'jokebot'
});

//start handeler
bot.on('start',{}=>{
	const params={
		icon_emohi:':smiley:'
	};

	bot.postMessageToChannel{
		'general',
		'Get Ready To Laugh With @Jokebot!',
		params
	};
});