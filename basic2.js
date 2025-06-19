import pg from 'pg'
import mmm, { mes, mes2, show, mes3 } from './my_mod1.js'

const { Client } = pg
const client = new Client({
  user: 'user1',
  host: 'localhost',
  database: 'mydb',
  password: 'user1',
  port: 5432,
})
await client.connect()

const res = await client.query('select * from aaa')
console.log(res) // Hello world!
await client.end()

console.log(mmm)
console.log(mes)
console.log(mes2)
console.log(show())
console.log(show)
console.log(mes3)