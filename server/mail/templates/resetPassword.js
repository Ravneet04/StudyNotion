exports.passwordReset = (email, resetLink) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Password Reset Request</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }

            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }

            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }

            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }

            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }

            .button {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }

        </style>
    </head>
    
    <body>
        <div class="container">
            <a href="https://studynotion-edtech-project.vercel.app">
                <img class="logo" src="https://i.ibb.co/m59ZmTC1/rzp-logo.png" alt="StudyNotion Logo">
            </a>
            <div class="message">Password Reset Request</div>
            <div class="body">
                <p>Hello,</p>
                <p>We received a request to reset your password for the email <span class="highlight">${email}</span>.</p>
                <p>Click the button below to reset your password:</p>
                <a href="${resetLink}" class="button">Reset Password</a>
                <p>If you did not request this, you can ignore this email. Your password will remain unchanged.</p>
            </div>
            <div class="support">
                If you have any questions or need further assistance, please contact us at 
                <a href="mailto:info@studynotion.com">info@studynotion.com</a>. We’re here to help!
            </div>
        </div>
    </body>
    
    </html>`;
};
