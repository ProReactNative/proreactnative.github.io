// Compiled by ClojureScript 0.0-3297 {}
goog.provide('nutrition_calculator.dev');
goog.require('cljs.core');
goog.require('nutrition_calculator.core');
goog.require('nutrition_calculator.session');
goog.require('nutrition_calculator.actions');
nutrition_calculator.dev.dummy_app_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.PersistentArrayMap(null, 5, [(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"Hypertension"], null),(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"name","name",1843675177),"Diabetes"], null),(6),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"name","name",1843675177),"Asthma"], null),(7),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"name","name",1843675177),"Trina-itis"], null),(8),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(8),new cljs.core.Keyword(null,"name","name",1843675177),"Osteoperosis"], null)], null)], null);
nutrition_calculator.dev.init_dev_data = (function nutrition_calculator$dev$init_dev_data(){
return cljs.core.swap_BANG_.call(null,nutrition_calculator.session.app_state,(function (p1__6648_SHARP_){
return cljs.core.merge.call(null,p1__6648_SHARP_,nutrition_calculator.dev.dummy_app_state);
}));
});
nutrition_calculator.dev.init_dev_data.call(null);
