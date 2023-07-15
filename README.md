Ao adicionar o seguinte volume: - ./home/node/app estou recebendo o seguinte erro

> nginx_with_nodejs@1.0.0 start
> node src/server.js

node:internal/errors:496
    ErrorCaptureStackTrace(err);
    ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'mysql2' imported from /home/node/app/src/server.js
    at new NodeError (node:internal/errors:405:5)
    at packageResolve (node:internal/modules/esm/resolve:781:9)
    at moduleResolve (node:internal/modules/esm/resolve:830:20)
    at defaultResolve (node:internal/modules/esm/resolve:1035:11)
    at DefaultModuleLoader.resolve (node:internal/modules/esm/loader:251:12)
    at DefaultModuleLoader.getModuleJob (node:internal/modules/esm/loader:140:32)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:76:33)
    at link (node:internal/modules/esm/module_job:75:36) {
  code: 'ERR_MODULE_NOT_FOUND'
}

Node.js v20.4.0

removendo ele do código, funciona normalmente
