/*---------------------------------------------------------------------------*
 * 2018/03/27 kido0617
 * http://kido0617.github.io/
 * Ver.1.0
 * Public Domain
 * Please use freely, credit not necessary
 *---------------------------------------------------------------------------*/

/*:
 * @plugindesc Default state for enemy
 * @author kido0617
 * @help
 * If you put <defaultState:4> in enemy's Note field, 4th state is given by default.
 * For more than one states, <defaultState:4,5> separate state # with a comma.
 */

(function(){

  var _setup = Game_Enemy.prototype.setup;
  Game_Enemy.prototype.setup = function(enemyId, x, y) {
    _setup.call(this, enemyId, x, y);
    var meta = this.enemy().meta;
    if(!meta.defaultState) return;
    var states = meta.defaultState.split(",");
    for(var i = 0 ; i < states.length; i++){
      var id = parseInt(states[i].trim());
      this.addState(id);
      this.clearResult();
    }
  };

})();