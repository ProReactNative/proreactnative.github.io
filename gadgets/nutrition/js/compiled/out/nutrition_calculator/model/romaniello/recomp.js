// Compiled by ClojureScript 0.0-3297 {}
goog.provide('nutrition_calculator.model.romaniello.recomp');
goog.require('cljs.core');
goog.require('nutrition_calculator.helpers.math');
goog.require('nutrition_calculator.model.romaniello.common');
nutrition_calculator.model.romaniello.recomp.round_all_numbers = (function nutrition_calculator$model$romaniello$recomp$round_all_numbers(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5061__auto__ = (function nutrition_calculator$model$romaniello$recomp$round_all_numbers_$_iter__6618(s__6619){
return (new cljs.core.LazySeq(null,(function (){
var s__6619__$1 = s__6619;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6619__$1);
if(temp__4425__auto__){
var s__6619__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6619__$2)){
var c__5059__auto__ = cljs.core.chunk_first.call(null,s__6619__$2);
var size__5060__auto__ = cljs.core.count.call(null,c__5059__auto__);
var b__6621 = cljs.core.chunk_buffer.call(null,size__5060__auto__);
if((function (){var i__6620 = (0);
while(true){
if((i__6620 < size__5060__auto__)){
var vec__6624 = cljs.core._nth.call(null,c__5059__auto__,i__6620);
var k = cljs.core.nth.call(null,vec__6624,(0),null);
var v = cljs.core.nth.call(null,vec__6624,(1),null);
cljs.core.chunk_append.call(null,b__6621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nutrition_calculator.helpers.math.round.call(null,v)], null));

var G__6626 = (i__6620 + (1));
i__6620 = G__6626;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6621),nutrition_calculator$model$romaniello$recomp$round_all_numbers_$_iter__6618.call(null,cljs.core.chunk_rest.call(null,s__6619__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6621),null);
}
} else {
var vec__6625 = cljs.core.first.call(null,s__6619__$2);
var k = cljs.core.nth.call(null,vec__6625,(0),null);
var v = cljs.core.nth.call(null,vec__6625,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nutrition_calculator.helpers.math.round.call(null,v)], null),nutrition_calculator$model$romaniello$recomp$round_all_numbers_$_iter__6618.call(null,cljs.core.rest.call(null,s__6619__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5061__auto__.call(null,m);
})());
});
nutrition_calculator.model.romaniello.recomp.calorie_goals = (function nutrition_calculator$model$romaniello$recomp$calorie_goals(vitals){
var maintenance = nutrition_calculator.model.romaniello.common.maintenance_calories.call(null,vitals);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"workout","workout",280057936),(maintenance - (100)),new cljs.core.Keyword(null,"rest","rest",-1241696419),(maintenance - (500))], null);
});
nutrition_calculator.model.romaniello.recomp.calc_diet = (function nutrition_calculator$model$romaniello$recomp$calc_diet(calories,current_lbm,goal_lbm,protein_coeff,carb_coeff){
if(((goal_lbm <= (0))) || ((current_lbm <= (0))) || ((calories <= (0)))){
return null;
} else {
var protein_grams = (protein_coeff * goal_lbm);
var carb_grams = (carb_coeff * current_lbm);
var protein_cals = ((4) * protein_grams);
var carb_cals = ((4) * carb_grams);
var fat_cals = (calories - (protein_cals + carb_cals));
var fat_grams = (fat_cals / (9));
return nutrition_calculator.model.romaniello.recomp.round_all_numbers.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"calories","calories",-363399197),calories,new cljs.core.Keyword(null,"protein","protein",184296952),protein_grams,new cljs.core.Keyword(null,"carbs","carbs",-1219608131),carb_grams,new cljs.core.Keyword(null,"fat","fat",-756798484),fat_grams], null));
}
});
nutrition_calculator.model.romaniello.recomp.rest_diet = (function nutrition_calculator$model$romaniello$recomp$rest_diet(calories,current_lbm,goal_lbm){
return nutrition_calculator.model.romaniello.recomp.calc_diet.call(null,calories,current_lbm,goal_lbm,1.35,0.5);
});
nutrition_calculator.model.romaniello.recomp.workout_diet = (function nutrition_calculator$model$romaniello$recomp$workout_diet(calories,current_lbm,goal_lbm){
return nutrition_calculator.model.romaniello.recomp.calc_diet.call(null,calories,current_lbm,goal_lbm,1.5,1.0);
});
nutrition_calculator.model.romaniello.recomp.total_diet = (function nutrition_calculator$model$romaniello$recomp$total_diet(vitals,goal_lbm){
var map__6628 = nutrition_calculator.model.romaniello.recomp.calorie_goals.call(null,vitals);
var map__6628__$1 = ((cljs.core.seq_QMARK_.call(null,map__6628))?cljs.core.apply.call(null,cljs.core.hash_map,map__6628):map__6628);
var workout_calories = cljs.core.get.call(null,map__6628__$1,new cljs.core.Keyword(null,"workout","workout",280057936));
var rest_calories = cljs.core.get.call(null,map__6628__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
var current_lbm = nutrition_calculator.model.romaniello.common.lbm.call(null,vitals);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rest","rest",-1241696419),nutrition_calculator.model.romaniello.recomp.rest_diet.call(null,rest_calories,current_lbm,goal_lbm),new cljs.core.Keyword(null,"workout","workout",280057936),nutrition_calculator.model.romaniello.recomp.workout_diet.call(null,workout_calories,current_lbm,goal_lbm)], null);
});
