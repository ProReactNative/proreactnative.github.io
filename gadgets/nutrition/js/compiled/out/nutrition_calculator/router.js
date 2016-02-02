// Compiled by ClojureScript 0.0-3297 {}
goog.provide('nutrition_calculator.router');
goog.require('cljs.core');
goog.require('nutrition_calculator.session');
goog.require('nutrition_calculator.components.nutrition_calculator');
nutrition_calculator.router.current_screen = (function nutrition_calculator$router$current_screen(){
var nav_state = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nutrition_calculator.session.app_state));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672),nav_state)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nutrition_calculator.components.nutrition_calculator.component], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Unknown nav state"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"State was: ",nav_state], null)], null);

}
});
