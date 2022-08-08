const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const coEmail = process.env.COMPANY_EMAIL_ADDRESS;
const authKey = process.env.COMPANY_EMAIL_AUTH_KEY;
const password = process.env.COMPANY_EMAIL_PASSWORD;

app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as template engine
app.set('view engine', 'ejs');

async function contactSubmission(emailFrom, name, phone, address, message) {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: coEmail, // generated ethereal user
            pass: authKey, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    transporter.verify( (error, success) => {
        if (error) {
            console.log(error)
        } else if (success) {
            console.log(success)
        }
    });

    // send mail with defined transport object
    let emailData = await transporter.sendMail({
        from: emailFrom, 
        to: coEmail, 
        subject: "Quote Request", // Subject line
        text: ("Name:\t" + name + "\n" + "Email\t" + emailFrom + "\n"
            + "Phone:\t" + phone + "\n" +  "Address:\t" + address + "\n" 
            +  "Message:\t" + message)
    });

    return;
}


app.get('/', (req, res) => {
    res.render('index')
});

app.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        contactSubmission(data.email, data.name, data.phone, data.address, data.message);
        res.render('sent');
    } catch(err) {
        console.log(err);
        res.render('error');
    }
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
