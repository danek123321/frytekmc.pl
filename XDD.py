import smtplib

address = '	smtp.gmail.com'
port = 993
login = 'bot'
password = 'danek123321'
app_password = '2300 7036'

smtpObj = smtplib.SMTP_SSL(address, port)
print(type(smtpObj))

code, msg = smtpObj.ehlo()

if code == 250:
    # smtpObj.starttls() #tylko dla TLS (NIE-SSL)

    code_auth, msg_auth = smtpObj.login(login, password)
    if code_auth == 235:
        smtpObj.sendmail('botxd616@gmail.com',
                         'botxd616@gmail.com',
                         """Subject: XD\n
                         XD\n
                         """)
        smtpObj.quit()
        print("Finish")
    else:
        print(code_auth, msg_auth)

else:
    print(code, msg)
