#!/bin/sh

# migrate
npm run typeorm:run

# start
node dist/main.js

echo 'api started'
