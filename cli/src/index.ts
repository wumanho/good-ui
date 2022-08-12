import { handleAction, Options } from './createAction'
import { red } from 'kolorist'

const cli = require('cac')()

cli
  .command('create', 'create a module')
  .option('-t,--type,<type>', 'Choose a project type')
  .action((options: Options) => {
    handleAction(options)
  })

// 监听用户命令输入错误
cli.on('command:*', () => {
  console.log(red(`未注册的命令: ${cli.args.join(' ')}`))
  process.exit(1)
})

cli.help()
cli.parse()
