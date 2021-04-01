const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//ES6
const sendMail =(id,user)=>{
    let msg = {
        to: 'kvijay6@uic.edu',
        from: process.env.FROM_EMAIL, // Use the email address or domain you verified above
        subject: 'Service Request  is completed',
        text: 'Hi Kaushik, This is automated mail to notify that the Service Request (Id -'+id+' ) is marked as complete by '+user,
    };
	sgMail
    .send(msg)
    .then(() => {}, error => {
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
	}
});
}
module.exports = sendMail
