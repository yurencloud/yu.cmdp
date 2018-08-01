const rp = require('request-promise');
const colors = require('colors');
const pkg = require('../package.json');
const URL = pkg.cmdpserver;

const SUCCESS = "0000";

function Create(cmd, comment) {
    //post URL+"/cmdp/create"  Cmd="+cmd+"&Comment="+comment
    //req.Header.Set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
    //token, _ := ReadToken()//从文件取出数据
    //req.Header.Set("Authorization", "Bearer "+string(token))
    // 返回 {Status，Message, Data}

    const options = {
        method: 'POST',
        uri: URL+"/cmdp/create",
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTkyODMxNzAsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJtYWNrd2FuZyJ9.X0GzL7aPLNHojacnE5hYRyxlFw_pOTc9EutVX5YyflQ'
        },
        body: {cmd, comment},
        json: true
    };

    rp(options)
        .then(function (rep) {
            if (rep.Status === SUCCESS) {
                console.log(rep.Message.green);
            } else {
                console.log(rep.Message.red);
            }
        })
        .catch(function (err) {
            console.log(err.red);
        });
}

function Search(keyword) {
    const options = {
        method: 'POST',
        uri: URL+"/cmdp/search",
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTkyODMxNzAsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJtYWNrd2FuZyJ9.X0GzL7aPLNHojacnE5hYRyxlFw_pOTc9EutVX5YyflQ'
        },
        body: {keyword},
        json: true
    };

    rp(options)
        .then(function (rep) {
            if (rep.Status === SUCCESS) {
                rep.Data.forEach(function (item) {
                    console.log(item)
                    console.log(item.Cmd.green, '    ', item.Comment.blue, '    Id:', item.Id.toString().red);
                })
                console.log('results: ', rep.Data.length.toString().green);
            } else {
                console.log(rep.Message.red);
            }
        })
        .catch(function (err) {
            console.log(err.red);
        });
}

function Delete(id) {
    // req, err := http.NewRequest("GET", URL+"/cmdp/delete/"+strconv.Itoa(id), nil)
    const res = {
        Status: "0000",
        Message: "success",
    }
    if (res.Status === SUCCESS) {
        console.log(res.Message.green);
    } else {
        console.log(res.Message.red);
    }
}

function Register(username, password) {
    // req, err := http.NewRequest("POST", URL+"/user/register", strings.NewReader("Username="+username+"&Password="+password))
    const res = {
        Status: "0000",
        Message: "success",
    }
    if (res.Status === SUCCESS) {
        console.log(res.Message.green);
    } else {
        console.log(res.Message.red);
    }
}

function Login(username, password) {
    // req, err := http.NewRequest("POST", URL+"/user/login", strings.NewReader("Username="+username+"&Password="+password))
    const res = {
        Status: "0000",
        Message: "success",
    }
    if (res.Status === SUCCESS) {
        console.log(res.Message.green);
    } else {
        console.log(res.Message.red);
    }
}

function ResetPassword(password) {
    // req, err := http.NewRequest("POST", URL+"/user/reset", strings.NewReader("password="+password))
    const res = {
        Status: "0000",
        Message: "success",
    }
    if (res.Status === SUCCESS) {
        console.log(res.Message.green);
    } else {
        console.log(res.Message.red);
    }
}

function CreateToken(token) {

}

/**
 * @return {string}
 */
function ReadToken() {
    return "xxxxxxxxxxxxxxxxxxxxxxxxxxx";
}

function Get() {

}

function Post() {

}

module.exports = {
    Create,
    Search,
    Delete,
    Register,
    Login,
    ResetPassword,
    CreateToken,
    ReadToken,
}
