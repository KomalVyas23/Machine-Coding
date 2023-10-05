Problem statement:

On typing in search box, it should suggest terms.
user should be able to select some options.
should be performant/optimized enough.
it should avoid unnecessary calls - arr/db/api.
previously fetched data should persist.

Questions:
Scoping the problem

1.From where do I get the data? What is the source of data.
Ans. For now you can use an API or array. Use local data and emulate an API by introducing artificial delay(setTimeout).

2.Minimum number of characters after which suggestions should be shown?


Planning:
1)HTML -> Basic UI -> Input box -> Event Listener(AEL) 
2)get characters enetered in input box
3)search for suggestions using the character
4)show suggestions