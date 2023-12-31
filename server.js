import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from  'dotenv';

const { Pool } = pg

dotenv.config();
const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
})

const app = express()


app.use(cors({
    origin: ['https://react-full-stack-mvp-production.up.railway.app/', 'http://localhost:8000/', 'http://localhost:5175', 'https://react-mvp-buuv.onrender.com' ]
}))

app.use(express.json());
app.use(express.static('./dist'))

app
    .get('/questions', async (req, res) => {
        try{
            let result = await pool.query('SELECT * FROM questions')
            res.send(result.rows)

        } catch (err) {
            console.log(err.message)
            res.status(404).send('Interal Server Error')
        }
    })
    .get('/questions/:id', async (req, res) => {
        try{
            let {id} = req.params
            let result = await pool.query('SELECT * from questions WHERE question_id = $1', [id])
            res.send(result.rows)
        }
        catch(err){
            console.log(err.message)
            res.status(404).send('Interal Server Error')
        }
    })
    .post('/questions', async (req, res) => {
        let {question, answer} = req.body
        try{
            let result = await pool.query('INSERT INTO questions (question, answer) VALUES ($1, $2) RETURNING *', [question, answer])
            res.send(result.rows)
        }
        catch(err){
            console.log(err.message)
            res.status(404).send('Interal Server Error')
        }
    })
    .delete('/questions/:id', async (req, res) => {
        let {id} = req.params
        try{
            let result = await pool.query('DELETE FROM questions WHERE question_id = $1 returning *', [id])
            res.send(result.rows)
        }
        catch(err){
             console.log(err.message)
             res.status(404).send('Internal Server Error')
        }
    })
    .put('/questions/:id', async (req, res) => {
        try{
            let {id} = req.params
            let {question, answer} = req.body
            let result = await pool.query('SELECT * from questions WHERE question_id = $1', [id])
            let currentQuestion = result.rows[0]
            const updateQuestion = {
                answer: answer || currentQuestion.answer,
                question: question || currentQuestion.question
            }
            let updatedResult = await pool.query('UPDATE questions SET answer = $1, question = $2 WHERE question_id = $3 RETURNING *', [updateQuestion.answer, updateQuestion.question, id])
            res.send(updatedResult.rows)

        } catch (err){
            console.log(err.message)
            res.status(404).send('Internal Server Error')
        }
    })

app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})