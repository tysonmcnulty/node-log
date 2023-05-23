# Node log

Example usage of `simple-node-logger`

## Installation

```shell
npm install
```

## Test Log levels

```
npm run test:levels
```

* Expected output:

  ```
  09:33:16.425 INFO  default (info)
  09:33:16.425 WARN  default (info)
  09:33:16.425 ERROR default (info)
  09:33:16.425 FATAL default (info)
  09:33:16.425 WARN  after setLevel: warn
  09:33:16.425 ERROR after setLevel: warn
  09:33:16.425 FATAL after setLevel: warn
  09:33:16.425 FATAL after setLevel: fatal
  09:33:16.425 INFO  after setLevel: info
  09:33:16.425 WARN  after setLevel: info
  09:33:16.425 ERROR after setLevel: info
  09:33:16.425 FATAL after setLevel: info
  ```

## Test process exit

```shell
npm run test:exit
```

* Expected output:

  ```
  message from console.log
  ```

* Notably, the test is *not* logging a message from `log.error`.
