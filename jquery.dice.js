/**
 * jQuery Dice
 *
 * jQuery Plugin by Christian Hanne (www.christianhanne.de), 2012
 *
 * This is a pretty simple plugin that turns any container into a dice game.
 *
 * These settings may be changed.
 *
 * numPlayers: (Default: 1)
 *   This defines the number of players for this game of dice.
 *   Each player will roll the dices, the results will be compared.
 *   This number has to be higher than 0 (zero).
 '
 * numDices: (Default: 1)
 *   The number of dices each player uses.
 *   This number has to be higher than 0 (zero).
 *
 * maxSpots: (Default: 6)
 *   The maximal number of spots a dice can show.
 *   This number has to be higher than 0 (zero).
 *
 * trickReaction: (Default: 'reroll')
 *   How should the game react if two players have the same result.
 *   By default these players will have to reroll their dices.
 *   Possible values: reroll, ignore.
 *
 * rollDice: function()
 *   Returns a random value for a dice. You may use a more sophisticated function for this if you like.
 */
(function($) {
  $.fn.dice = function(options) {
    var settings = $.extend({
      'numPlayers'    : 1,
      'numDices'      : 1,
      'maxSpots'      : 6,
      'trickReaction' : 'reroll',
      'rollDice'      :  function() {
        return parseInt(Math.random() * settings.maxSpots);
      }
    }, options);

    var rollDices = function(dice) {
      if (!dice.hasClass('jquery-dice-click')) {
         return;
       }

      var maxResult = 0;
      $('.jquery-dice-player', dice).not('.processed').each(function() {
        var playerResult = 0;

        $('.jquery-dice-player-dices-dice', this).not('.processed').each(function() {
          var diceResult = settings.rollDice();
          $(this).addClass('processed').html(diceResult);

          playerResult+= diceResult;
        });

        $(this).addClass('jquery-dice-player-result-' + playerResult);
        $('.jquery-dice-player-result', this).html(playerResult);

        $(this).addClass('processed');

        if (playerResult > maxResult) {
          maxResult = playerResult;
        }
      });

      // Process results of this game.
      processResult(dice, maxResult);
    };

    var processResult = function(dice, result) {
      if (settings.trickReaction == 'reroll' && $('.jquery-dice-player-result-' + result, dice).size() > 1) {
        $('.jquery-dice-player-result-' + result, dice).removeClass('processed');
        $('.jquery-dice-player-result-' + result, dice).removeClass('.jquery-dice-player-result-' + result);
        $('.jquery-dice-player-result-' + result + ' .jquery-dice-player-dices-dice', dice).removeClass('processed');

        rollDices(dice);
      }
      else {
        $('.jquery-dice-player-result-' + result, dice).addClass('jquery-dice-winner');

        // Remove click class.
        dice.removeClass('jquery-dice-click');
      }
    };

    return this.each(function() {
      // Add a class to mark this container as a dice game.
      $(this).addClass('jquery-dice jquery-dice-click');

      // Add container for each player.
      for (var i = 0; i < settings.numPlayers; i++) {
        var $player = $('<div/>').addClass('jquery-dice-player jquery-dice-player-' + i);
        $('<div/>').addClass('jquery-dice-player-name').html('Player ' + (i + 1)).appendTo($player);
        $('<span/>').addClass('jquery-dice-player-result').appendTo($('.jquery-dice-player-name', $player));

        $('<div/>').addClass('jquery-dice-player-dices').appendTo($player);

        for (var j = 0; j < settings.numDices; j++) {
          $('<div/>').addClass('jquery-dice-player-dices-dice jquery-dice-player-dices-dice-' + j)
            .appendTo($('.jquery-dice-player-dices', $player));
        }

        $player.appendTo($(this));
      }

      $(this).click(function() {
        rollDices($(this));
      });
    });
  };
})(jQuery);