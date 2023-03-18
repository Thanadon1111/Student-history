const express = require('express')
const data = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>CPE499</title>
        <link rel="stylesheet" href="style.css">  
    </head>
    <body>
        <table>
            <h1>ประวัติ นักศึกษา</h1>
            <img src="https://scontent.fbkk2-7.fna.fbcdn.net/v/t39.30808-6/305569624_3310619835841295_4127684235298344820_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGJ8v-xnu4nJCFiTdT-LJrh8gpL1pMKzlPyCkvWkwrOU9HrYUawy6PUngRyzABgoR4cFLoaACNh5VoLnRf-RMkC&_nc_ohc=6pnQ5-2wMC0AX8-myu5&_nc_ht=scontent.fbkk2-7.fna&oh=00_AfCpj1B7mZX0qcXwrteVLs-3R6S5m0xqBRAYOT2kqYtz1Q&oe=641A9CFD" width = "200px" alt="">
            <div class = "a1">
                <ul>
                    <li>Name-Username : นาย ธนดล จงรักษ์</li>
                    <li>Student ID    : 6302833</li>
                    <li>Gmail         : thanadon.j63@rsu.ac.th</li>
                </ul>
            </div>
        </table>
    </body>
    </html>
`

module.exports = data;