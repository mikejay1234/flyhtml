define(["backbone","model/TopicModel","text!template/topicCreate.html","markdown","util"],function(e,t,n,r,i){var s=e.View.extend({el:$("#main"),events:{"click .js-preview":"preview","click .js-write":"write","submit form":"create"},initialize:function(){this.model=new t,this.render()},render:function(){this.$el.html(n),this.$content=this.$(".js-content"),this.$title=this.$(".js-title"),this.$submit=this.$("[type=submit]"),this.$title.keyup(_.bind(this.setTitle,this))},preview:function(){this.$(".js-preview-content").show().html(r.toHTML(this.$content.val())),this.$content.hide(),this.select(".js-preview")},write:function(){this.$content.show(),this.$(".js-preview-content").hide(),this.select(".js-write")},select:function(e){this.$(".nav .active").removeClass("active"),this.$(e).addClass("active")},trim:function(e){return $.trim(e.val())},setTitle:function(){var e=this.model.set({title:this.trim(this.$title)},{validate:!0});e?this.$submit.removeAttr("disabled"):this.$submit.attr("disabled","disabled")},create:function(t){t.preventDefault(),this.model.save({body:r.toHTML(this.$content.val())}).done(function(t){i.alert.done("Your topic has been create!"),e.history.navigate("/topics/"+t.id,!0)})}});return s});