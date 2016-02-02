// Compiled by ClojureScript 0.0-3297 {}
goog.provide('nutrition_calculator.core');
goog.require('cljs.core');
goog.require('nutrition_calculator.components.nutrition_calculator');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console. In less than a second. Beauty.");
nutrition_calculator.core.on_js_reload = (function nutrition_calculator$core$on_js_reload(){
return null;
});
nutrition_calculator.core.main_ui = (function nutrition_calculator$core$main_ui(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),nutrition_calculator.components.nutrition_calculator.component.call(null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nutrition_calculator.core.main_ui], null),document.getElementById("app"));
