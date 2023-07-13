DROP DATABASE IF EXISTS quizdb;

CREATE DATABASE quizdb;

\c quizdb;

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
    question_id serial PRIMARY KEY,
    question varchar,
    answer varchar
);

INSERT INTO questions (question, answer) VALUES('What is DOM?', 'The DOM is the Document Object Model. It was designed as a way for Javascript to interact with the HTML.');
INSERT INTO questions (question, answer) VALUES('What are higher order functions?', 'Higher order functions are functions tha either take in another functions as a paramenter or return a function');
INSERT INTO questions (question, answer) VALUES('What is recursion?', 'Recursion is a method of a function calling itself inside the function.');
INSERT INTO questions (question, answer) VALUES('What is a unit test?', 'A method of testing a small peice of code. For example, using VITEST to test if the value of function matches its expected value.');
INSERT INTO questions (question, answer) VALUES('What is the difference between == and ===?', '== does type conversion and === does not do type conversion');
INSERT INTO questions (question, answer) VALUES('What is a closure in JS?', 'A method of putting a child function in a parent function to have access to parents scope.');
INSERT INTO questions (question, answer) VALUES('What is node?', 'Node is a runtime enviroment that allows us to read and run JavaScript code.');
INSERT INTO questions (question, answer) VALUES('What is a AJAX?', 'Asynchronous Javascript and XML. It allows web servers to be updated asynchronously by each other with the server behind the scenes.');
INSERT INTO questions (question, answer) VALUES('What is RESTful?', 'Representation State Transfer Protocols. Get One, Get Many, Create One, Update One, and Delete One.');