# tic_tac_toe

## UPDATE:  

This is a huge milestone for me. I finally got minimax to work. 
NEXT STEP: REFACTOR AND THEN ALPHA-BETA PRUNING!!!!

The goal is to implement a minimax algorithm which I know nothing about.  
  
So far my primitive algorithm does 3 things:  
1. go for an immediate win  
2. block an immediate win  
3. otherwise make a random move  
  
The next check (between step 2 and 3) is to look for forks (two in a row).  
However since the game tree is tiny, these heuristics are unnecessary.  
A brute force minimax solution using the two checks as base cases is possible.  

http://hills.ccsf.edu/~dwang6/cnit133/project/tic_tac_toe/index.html
