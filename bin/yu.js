#!/usr/bin/env node
const program = require('commander');
const loading = require('./loading');
const cmdp = require('./cmdp');
const pkg = require('../package.json');

// .command('new <name>')
//     .alias('n')
//     .description('build new vue|react|webpack project.')
//     .option('-t, --type [value]', /^(vue|react|webpack)$/i, 'vue')
//     .action((name, options) => {
//         console.log('building...'.green);
//         loading.start();
//         switch (options.type) {
//             case 'vue':
//                 childProcess.exec(
//                     'git clone https://github.com/yurencloud/yu.vue.git && ' +
//                     'rm -rf yu.vue/.git && ' +
//                     'mv yu.vue ' + name,
//                     '',
//                     () => {
//                         loading.end();
//                         console.log(colors.green('%s %s project ' + 'built successfully！'), name, options.type);
//                     }
//                 );
//                 break;


// 命令版本
program
    .version(pkg.version, '-v, --version');

program.option('-c, --create','save your command prompt to web')
    .option('-m, --comment','comment your command prompt')

// 注册
program
    .command('register <username> <password>')
    .alias('r')
    .description('register by username and password')
    .action((username,password)=> {
        loading.start();
        cmdp.Register(username, password)
        loading.end();
    });

// 登录
program
    .command('login <username> <password>')
    .alias('l')
    .description('login by username and password')
    .action((username,password)=> {
        loading.start();
        cmdp.Login(username, password)
        loading.end();
    });

// 重置密码
program
    .command('reset <password>')
    .description('reset password')
    .action((password)=> {
        loading.start();
        cmdp.ResetPassword(password)
        loading.end();
    });

// 删除记录
program
    .command('delete <id>')
    .alias('d')
    .description('delete record by id')
    .action((id)=> {
        loading.start();
        cmdp.Delete(id)
        loading.end();
    });

// 搜索
program
    .command('search <keyword>')
    .alias('s')
    .description('search command/tips/comment/code by keyword')
    .action((keyword) => {
        loading.start();
        cmdp.Search(keyword)
        loading.end();
    });



// 执行命令
program.parse(process.argv);
