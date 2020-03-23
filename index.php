<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
        <link rel="stylesheet" type="text/css" href="css/custom.css">
        <title>Employee Email Signature Generator</title>
    </head>
    <body>
        <header>
            <div class="header-content card">
                <h1>Employee Email Signature Generator</h1>
                <p class="desc">Please fill in your information in the form on the left and click "Create Signature" to display the URL to share and the source HTML code to copy to your email client.</p>
            </div>
        </header>
            <div class="container">
                <form id="input-form" class="form card" action="https://nickblack.io/email-signature-generator/" method="GET">
                    <input name="nameInput" id="nameInput" type="text" value="" placeholder="Full Name"></input><br />
                    <input name="titleInput" id="titleInput" type="text" value="" placeholder="Job title"></input><br />
                    <input name="emailInput" id="emailInput" type="email" value="" placeholder="Email Address"></input><br />
                    <input name="officePhoneInput" id="officePhoneInput" type="text" value="" placeholder="Office Number (XXX.XXX.XXXX)"></input>
                    <input name="mobilePhoneInput" id="mobilePhoneInput" type="text" value="" placeholder="Mobile Number (XXX.XXX.XXXX)"></input>
                    <button type="submit" id="submit" class="btn">Create Signature</button>
                </form>

                <div class="signature card">
                    <div class="email-signature-code">
                        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate!important; table-layout: fixed; text-size-adjust: none !important; -ms-text-size-adjust: none !important; -webkit-text-size-adjust: none !important;" width="450">
                            <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet">
                            <tbody>
                                <tr>
                                    <td align="left" valign="top" width="60">
                                        <a href="#" target="_blank" style="text-decoration: none;"><img src="https://nickblack.io/email-signature-generator/img/placeholder-logo.jpg" width="56" height="56" alt="Company Logo" nosend="1"/></a>
                                        <a href="#" target="_blank"><img src="https://nickblack.io/email-signature-generator/img/facebook-icon.jpg" width="15" height="15" alt="Facebook" nosend="1"/></a>
                                        <a href="#" target="_blank"><img src="https://nickblack.io/email-signature-generator/img/twitter-icon.jpg" width="15" height="15" alt="Twitter" nosend="1"/></a>
                                        <a href="#" target="_blank"><img src="https://nickblack.io/email-signature-generator/img/instagram-icon.jpg" width="15" height="15" alt="Instagram" nosend="1"/></a>
                                    </td>
                                    <td align="left" valign="top" nowrap="nowrap" width="6" style="padding:0px;border-left: 3px solid #013750;">
                                      <img src="https://nickblack.io/email-signature-generator/img/spacer.gif" width="6" nosend="1"/>
                                    </td>
                                    <td align="left" valign="top" nowrap="nowrap" width="356" style="padding: 0px 0px 0px 1px;">
                                        <p style="padding:0px !important;text-decoration:none !important; text-decoration:none;font-family: 'Lato', sans-serif;font-size: 13px; line-height: 16px; color: #013750;"><span id="textName" style="font-weight: bold; display: inline;text-decoration:none !important; text-decoration:none;" class="txt signature_name-target sig-hide">Full Name</span>
                                            <span class="email-sep break" style="display: inline;"><br></span>
                                            <span id="textTitle" class="link email signature_email-target sig-hide" style="font-family: 'Lato', sans-serif;color: #013750; text-decoration:none !important; text-decoration:none; display: inline;font-size: 13px;line-height: 16px;">Job Title</span>
                                            <span class="email-sep break" style="display: inline;"><br></span>
                                            <a href="" id="textEmail" class="link email signature_email-target sig-hide" style="font-family: 'Lato', sans-serif;color: #013750; text-decoration: none; display: inline;font-size: 13px;line-height: 16px;">Email Address</a><br>
                                            <span class="txt signature_officephone-target sig-hide" style="font-family: 'Lato', sans-serif;color: #013750; text-decoration:none !important; text-decoration:none; display: inline;font-size: 10px;line-height: 14px;">Office: <a href="" id="textOfficePhone" style="font-family: 'Lato', sans-serif;color: #013750; text-decoration:none !important; text-decoration:none; display: inline;font-size:11px;line-height:12px;">XXX.XXX.XXX</a></span><span> / </span>
                                            <span class="txt signature_mobilephone-target sig-hide" style="font-family: 'Lato', sans-serif;color: #013750; text-decoration:none !important; text-decoration:none; display: inline;font-size: 10px;line-height: 14px;margin-bottom:10px;">Mobile: <a href="" id="textMobilePhone" style="font-family: 'Lato', sans-serif;color: #013750; text-decoration:none !important; text-decoration:none; display: inline;font-size: 11px;line-height: 12px;">XXX.XXX.XXX</a></span><br>
                                            <a href="#" target="_blank" style="color: #013750;text-decoration:none !important; text-decoration:none;"><span style="font-weight: bold; display: inline;font-family: 'Lato', sans-serif;text-decoration:none !important; text-decoration:none;" class="txt signature_companyname-target sig-hide">www.mywebsite.com</span></a>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Highlight/Select the email signature above and copy/paste to your email client.</p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="content">
                <h4 class="text-header">Bookmark or share this link to edit/use signature in the future</h4>
                <div id="share-url" class="results-card">
                    <p></p>
                </div>

                <h4 class="text-header">If your email client requires the raw HTML code for the signature then copy/paste the code below. If not, highlight/select and copy/paste the email signature in the box at the top.</h4>
                <div class="results-card">
                    <div id="sig-code"></div>
                </div>
                <a id="downloadLink">Download as .htm File</a>
            </div>
        </div>

        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/download.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
    </body>
</html>
