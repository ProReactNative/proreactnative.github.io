// Compiled by ClojureScript 0.0-3297 {}
goog.provide('nutrition_calculator.navigation');
goog.require('cljs.core');
goog.require('nutrition_calculator.session');
nutrition_calculator.navigation.go = (function nutrition_calculator$navigation$go(s){
return cljs.core.swap_BANG_.call(null,nutrition_calculator.session.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),s);
});
nutrition_calculator.navigation.interview_step = (function nutrition_calculator$navigation$interview_step(cid){
return cljs.core.swap_BANG_.call(null,nutrition_calculator.session.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-interview-condition","current-interview-condition",-518914138),cid);
});
