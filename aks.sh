#!/bin/sh
while :
do
    echo "Enter Commit msg:"  
    read commit_msg
    git status
    git add .
    git status
    git commit -m"$commit_msg"
    git push -u origin main
    clear
done