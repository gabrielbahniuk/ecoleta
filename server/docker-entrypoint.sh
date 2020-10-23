#!/bin/sh

npm install && npm run knex:migrate && npm run knex:seed && npm run dev
