// Compiled by ClojureScript 0.0-3297 {}
goog.provide('nutrition_calculator.session');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof nutrition_calculator.session.app_state !== 'undefined'){
} else {
nutrition_calculator.session.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof nutrition_calculator.session.user_input !== 'undefined'){
} else {
nutrition_calculator.session.user_input = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"beginner-mode","beginner-mode",-245481625),true], null));
}
