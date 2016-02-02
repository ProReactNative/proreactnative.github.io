// Compiled by ClojureScript 0.0-3297 {}
goog.provide('nutrition_calculator.model.romaniello.common');
goog.require('cljs.core');
goog.require('nutrition_calculator.helpers.math');

/**
* @constructor
* @param {*} weight
* @param {*} bfp
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
nutrition_calculator.model.romaniello.common.Vitals = (function (weight,bfp,__meta,__extmap,__hash){
this.weight = weight;
this.bfp = bfp;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
nutrition_calculator.model.romaniello.common.Vitals.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4902__auto__,k__4903__auto__){
var self__ = this;
var this__4902__auto____$1 = this;
return cljs.core._lookup.call(null,this__4902__auto____$1,k__4903__auto__,null);
});

nutrition_calculator.model.romaniello.common.Vitals.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4904__auto__,k6601,else__4905__auto__){
var self__ = this;
var this__4904__auto____$1 = this;
var G__6603 = (((k6601 instanceof cljs.core.Keyword))?k6601.fqn:null);
switch (G__6603) {
case "weight":
return self__.weight;

break;
case "bfp":
return self__.bfp;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k6601,else__4905__auto__);

}
});

nutrition_calculator.model.romaniello.common.Vitals.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4916__auto__,writer__4917__auto__,opts__4918__auto__){
var self__ = this;
var this__4916__auto____$1 = this;
var pr_pair__4919__auto__ = ((function (this__4916__auto____$1){
return (function (keyval__4920__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4917__auto__,cljs.core.pr_writer,""," ","",opts__4918__auto__,keyval__4920__auto__);
});})(this__4916__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4917__auto__,pr_pair__4919__auto__,"#nutrition-calculator.model.romaniello.common.Vitals{",", ","}",opts__4918__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bfp","bfp",1482327408),self__.bfp],null))], null),self__.__extmap));
});

nutrition_calculator.model.romaniello.common.Vitals.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4900__auto__){
var self__ = this;
var this__4900__auto____$1 = this;
return self__.__meta;
});

nutrition_calculator.model.romaniello.common.Vitals.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4896__auto__){
var self__ = this;
var this__4896__auto____$1 = this;
return (new nutrition_calculator.model.romaniello.common.Vitals(self__.weight,self__.bfp,self__.__meta,self__.__extmap,self__.__hash));
});

nutrition_calculator.model.romaniello.common.Vitals.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4906__auto__){
var self__ = this;
var this__4906__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

nutrition_calculator.model.romaniello.common.Vitals.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4897__auto__){
var self__ = this;
var this__4897__auto____$1 = this;
var h__4723__auto__ = self__.__hash;
if(!((h__4723__auto__ == null))){
return h__4723__auto__;
} else {
var h__4723__auto____$1 = cljs.core.hash_imap.call(null,this__4897__auto____$1);
self__.__hash = h__4723__auto____$1;

return h__4723__auto____$1;
}
});

nutrition_calculator.model.romaniello.common.Vitals.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4898__auto__,other__4899__auto__){
var self__ = this;
var this__4898__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4295__auto__ = other__4899__auto__;
if(cljs.core.truth_(and__4295__auto__)){
var and__4295__auto____$1 = (this__4898__auto____$1.constructor === other__4899__auto__.constructor);
if(and__4295__auto____$1){
return cljs.core.equiv_map.call(null,this__4898__auto____$1,other__4899__auto__);
} else {
return and__4295__auto____$1;
}
} else {
return and__4295__auto__;
}
})())){
return true;
} else {
return false;
}
});

nutrition_calculator.model.romaniello.common.Vitals.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4911__auto__,k__4912__auto__){
var self__ = this;
var this__4911__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bfp","bfp",1482327408),null,new cljs.core.Keyword(null,"weight","weight",-1262796205),null], null), null),k__4912__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4911__auto____$1),self__.__meta),k__4912__auto__);
} else {
return (new nutrition_calculator.model.romaniello.common.Vitals(self__.weight,self__.bfp,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4912__auto__)),null));
}
});

nutrition_calculator.model.romaniello.common.Vitals.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4909__auto__,k__4910__auto__,G__6600){
var self__ = this;
var this__4909__auto____$1 = this;
var pred__6604 = cljs.core.keyword_identical_QMARK_;
var expr__6605 = k__4910__auto__;
if(cljs.core.truth_(pred__6604.call(null,new cljs.core.Keyword(null,"weight","weight",-1262796205),expr__6605))){
return (new nutrition_calculator.model.romaniello.common.Vitals(G__6600,self__.bfp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6604.call(null,new cljs.core.Keyword(null,"bfp","bfp",1482327408),expr__6605))){
return (new nutrition_calculator.model.romaniello.common.Vitals(self__.weight,G__6600,self__.__meta,self__.__extmap,null));
} else {
return (new nutrition_calculator.model.romaniello.common.Vitals(self__.weight,self__.bfp,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4910__auto__,G__6600),null));
}
}
});

nutrition_calculator.model.romaniello.common.Vitals.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4914__auto__){
var self__ = this;
var this__4914__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bfp","bfp",1482327408),self__.bfp],null))], null),self__.__extmap));
});

nutrition_calculator.model.romaniello.common.Vitals.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4901__auto__,G__6600){
var self__ = this;
var this__4901__auto____$1 = this;
return (new nutrition_calculator.model.romaniello.common.Vitals(self__.weight,self__.bfp,G__6600,self__.__extmap,self__.__hash));
});

nutrition_calculator.model.romaniello.common.Vitals.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4907__auto__,entry__4908__auto__){
var self__ = this;
var this__4907__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4908__auto__)){
return cljs.core._assoc.call(null,this__4907__auto____$1,cljs.core._nth.call(null,entry__4908__auto__,(0)),cljs.core._nth.call(null,entry__4908__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4907__auto____$1,entry__4908__auto__);
}
});

nutrition_calculator.model.romaniello.common.Vitals.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"bfp","bfp",-1172108361,null)], null);
});

nutrition_calculator.model.romaniello.common.Vitals.cljs$lang$type = true;

nutrition_calculator.model.romaniello.common.Vitals.cljs$lang$ctorPrSeq = (function (this__4936__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"nutrition-calculator.model.romaniello.common/Vitals");
});

nutrition_calculator.model.romaniello.common.Vitals.cljs$lang$ctorPrWriter = (function (this__4936__auto__,writer__4937__auto__){
return cljs.core._write.call(null,writer__4937__auto__,"nutrition-calculator.model.romaniello.common/Vitals");
});

nutrition_calculator.model.romaniello.common.__GT_Vitals = (function nutrition_calculator$model$romaniello$common$__GT_Vitals(weight,bfp){
return (new nutrition_calculator.model.romaniello.common.Vitals(weight,bfp,null,null,null));
});

nutrition_calculator.model.romaniello.common.map__GT_Vitals = (function nutrition_calculator$model$romaniello$common$map__GT_Vitals(G__6602){
return (new nutrition_calculator.model.romaniello.common.Vitals(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(G__6602),new cljs.core.Keyword(null,"bfp","bfp",1482327408).cljs$core$IFn$_invoke$arity$1(G__6602),null,cljs.core.dissoc.call(null,G__6602,new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"bfp","bfp",1482327408)),null));
});

nutrition_calculator.model.romaniello.common.lbm = (function nutrition_calculator$model$romaniello$common$lbm(vitals){

var weight = new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(vitals);
var bfp = new cljs.core.Keyword(null,"bfp","bfp",1482327408).cljs$core$IFn$_invoke$arity$1(vitals);
return (weight - (bfp * weight));
});
nutrition_calculator.model.romaniello.common.maintenance_calories_per_lbm = (function nutrition_calculator$model$romaniello$common$maintenance_calories_per_lbm(bfp){

if((bfp <= 0.12)){
return (17);
} else {
if((bfp <= 0.15)){
return (16);
} else {
if((bfp <= 0.19)){
return (15);
} else {
if((bfp <= 0.22)){
return (14);
} else {
if((bfp > 0.22)){
return (13);
} else {
return null;
}
}
}
}
}
});
nutrition_calculator.model.romaniello.common.maintenance_calories = (function nutrition_calculator$model$romaniello$common$maintenance_calories(vitals){
var lbm = nutrition_calculator.model.romaniello.common.lbm.call(null,vitals);
return nutrition_calculator.helpers.math.round.call(null,(nutrition_calculator.model.romaniello.common.maintenance_calories_per_lbm.call(null,new cljs.core.Keyword(null,"bfp","bfp",1482327408).cljs$core$IFn$_invoke$arity$1(vitals)) * lbm));
});
