jQuery Dice
=========

This is a pretty simple plugin that turns any container into a customizable dice game.


Usage Example:
---

```javascript
$('#container').dice();
```

Options:
---

These settings may be changed:

<table>
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>numPlayers</td>
    <td>1</td>
    <td>This defines the number of players for this game of dice. Each player will roll the dices, the results will be compared. This number has to be higher than 0 (zero).</td>
  </tr>
  <tr>
    <td>numDices</td>
    <td>1</td>
    <td>The number of dices each player uses. This number has to be higher than 0 (zero).</td>
  </tr>
  <tr>
    <td>maxSpots</td>
    <td>6</td>
    <td>The maximal number of spots a dice can show. This number has to be higher than 0 (zero).</td>
  </tr>
  <tr>
    <td>trickReaction</td>
    <td>reroll</td>
    <td> How should the game react if two players have the same result. By default these players will have to reroll their dices. Possible values: reroll, ignore.</td>
  </tr>
  <tr>
    <td>rollDice</td>
    <td>return parseInt(Math.random() * settings.maxSpots, 10)</td>
    <td>Returns a random value for a dice. You may use a more sophisticated function for this if you like.</td>
  </tr>
</table>