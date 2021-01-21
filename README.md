## localhost

This feature is to start a local server using the Deno standard library and a shell script to run it

## dev environment

* bash
  * 5.0.18
* Deno
  * 1.6.0

## usage

1. Add an alias:
`alias localhost='/path/to/localhost.sh'`

2. Hit the following command your terminal.
```
> localhost 8080
HTTPwebserver running. Access it at: http://localhost:8080/
^C # ctrl + c
❯ localhost 50050
HTTPwebserver running. Access it at: http://localhost:50050/
```
3. access the shown URL+port with your web browser

Done!
