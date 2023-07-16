import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from  'dotenv';
import { resolveBaseUrl } from 'vite';

const { Pool } = pg

dotenv.config();
const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
})

const app = express()

//Will need to fiddle with origin since it is not secure
app.use(cors({
    origin: 'https://flash-cards.onrender.com/questions'
}))

app.use(express.json());

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
        console.log(req.body)
        //add some error handling for if empty?
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