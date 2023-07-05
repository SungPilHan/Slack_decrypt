var sandboxedRenderer;(()=>{var Za={3551:(_,d,E)=>{"use strict";E.d(d,{Z:()=>Jt});var h=E(428),S=E.n(h),v=E(1128),F=E.n(v),b=E(4322),y=E.n(b),w=E(4897),x=E(8015),z=E(3535),W=E(35),G=E(6254),q=E(3528),$=E(737),O=E(1266),Y=E(4411),k=F()(S()),T=y()(w.Z),L=y()(x.Z),U=y()(z.Z),I=y()(W.Z),B=y()(G.Z),m=y()(q.Z),sn=y()($.Z),be=y()(O.Z),$e=y()(Y.Z);k.push([_.id,`/*

This is a smaller variant of the new Lato2, serving compressed woff2 files.

Currently: TS-Only
Clients needs to have Lato2 pref turned ON.

The payload is 50% smaller. However, woff2 is not yet well supported,
so we're still providing the woff as fallback.

*/
/* Light */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 300;
  src: url(`+T+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 400;
  src: url(`+L+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 700;
  src: url(`+U+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 900;
  src: url(`+I+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Light Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 300;
  src: url(`+B+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 400;
  src: url(`+m+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 700;
  src: url(`+sn+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 900;
  src: url(`+be+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
@font-face {
  font-family: 'Slack v2';
  src: url(`+$e+`) format('woff2');
  font-style: normal;
  font-weight: 400;
}
.c-icon {
  position: relative;
  display: inline-flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
}
.c-icon:before {
  font-family: 'Slack v2';
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  display: inline-block;
  vertical-align: middle;
}
.c-icon--inline {
  width: 20px;
  height: auto;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}
.c-icon--inline:before {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -0.5em;
  margin-left: -0.5em;
  width: 1em;
  height: 1em;
}
.c-icon--inline:after {
  content: '\\200B';
}
.c-icon--inherit {
  width: 1em;
}
.c-icon--inherit:before {
  font-size: inherit;
}
.c-icon--star-o:before {
  content: '\\E001';
}
.c-icon--unstar-o:before {
  content: '\\E002';
}
.c-icon--user:before {
  content: '\\E003';
}
.c-icon--comment-alt:before {
  content: '\\E004';
}
.c-icon--comment-o:before {
  content: '\\E005';
}
.c-icon--home:before {
  content: '\\E006';
}
.c-icon--info:before {
  content: '\\E007';
}
.c-icon--channel-info:before {
  content: '\\E008';
}
.c-icon--info-circle:before {
  content: '\\E008';
}
.c-icon--mentions:before {
  content: '\\E009';
}
.c-icon--gn-menu:before {
  content: '\\E00A';
}
.c-icon--search:before {
  content: '\\E010';
}
.c-icon--bolt:before {
  content: '\\E011';
}
.c-icon--mobile:before {
  content: '\\E012';
}
.c-icon--tablet:before {
  content: '\\E013';
}
.c-icon--laptop:before {
  content: '\\E014';
}
.c-icon--bell-o:before {
  content: '\\E015';
}
.c-icon--bell-slash:before {
  content: '\\E016';
}
.c-icon--team-directory:before {
  content: '\\E017';
}
.c-icon--cloud-upload:before {
  content: '\\E018';
}
.c-icon--cloud-download:before {
  content: '\\E019';
}
.c-icon--bolt-add:before {
  content: '\\E01A';
}
.c-icon--search-medium:before {
  content: '\\E01B';
}
.c-icon--cog-o:before {
  content: '\\E020';
}
.c-icon--cogs:before {
  content: '\\E021';
}
.c-icon--key:before {
  content: '\\E022';
}
.c-icon--calendar:before {
  content: '\\E023';
}
.c-icon--pencil:before {
  content: '\\E024';
}
.c-icon--lightbulb-o:before {
  content: '\\E025';
}
.c-icon--magic:before {
  content: '\\E026';
}
.c-icon--external-link:before {
  content: '\\E027';
}
.c-icon--external-link-square:before {
  content: '\\E028';
}
.c-icon--lock-o:before {
  content: '\\E029';
}
.c-icon--unlock:before {
  content: '\\E030';
}
.c-icon--folder:before {
  content: '\\E031';
}
.c-icon--folder-open:before {
  content: '\\E032';
}
.c-icon--archive:before {
  content: '\\E033';
}
.c-icon--inbox:before {
  content: '\\E034';
}
.c-icon--sitemap:before {
  content: '\\E035';
}
.c-icon--book:before {
  content: '\\E036';
}
.c-icon--envelope-o:before {
  content: '\\E037';
}
.c-icon--image:before {
  content: '\\E038';
}
.c-icon--building:before {
  content: '\\E039';
}
.c-icon--plug:before {
  content: '\\E040';
}
.c-icon--paper-plane:before {
  content: '\\E041';
}
.c-icon--credit-card:before {
  content: '\\E042';
}
.c-icon--life-ring:before {
  content: '\\E043';
}
.c-icon--thumb-tack:before {
  content: '\\E044';
}
.c-icon--trash:before {
  content: '\\E045';
}
.c-icon--print:before {
  content: '\\E046';
}
.c-icon--quote-o:before {
  content: '\\E047';
}
.c-icon--th-large:before {
  content: '\\E048';
}
.c-icon--eye:before {
  content: '\\E049';
}
.c-icon--eye-closed:before {
  content: '\\E050';
}
.c-icon--volume-off:before {
  content: '\\E051';
}
.c-icon--volume-down:before {
  content: '\\E052';
}
.c-icon--volume-medium:before {
  content: '\\E053';
}
.c-icon--volume-up:before {
  content: '\\E054';
}
.c-icon--volume-off-alt:before {
  content: '\\E055';
}
.c-icon--heart-o:before {
  content: '\\E056';
}
.c-icon--wrench:before {
  content: '\\E057';
}
.c-icon--file:before {
  content: '\\E058';
}
.c-icon--all-files:before {
  content: '\\E059';
}
.c-icon--img-left:before {
  content: '\\E05A';
}
.c-icon--img-center:before {
  content: '\\E05B';
}
.c-icon--img-right:before {
  content: '\\E05C';
}
.c-icon--img-fullbleed:before {
  content: '\\E05D';
}
.c-icon--img-fullwidth:before {
  content: '\\E05D';
}
.c-icon--your-files:before {
  content: '\\E060';
}
.c-icon--align-left:before {
  content: '\\E061';
}
.c-icon--align-center:before {
  content: '\\E062';
}
.c-icon--align-right:before {
  content: '\\E063';
}
.c-icon--align-justify:before {
  content: '\\E064';
}
.c-icon--paragraph:before {
  content: '\\E065';
}
.c-icon--code:before {
  content: '\\E066';
}
.c-icon--ellipsis:before {
  content: '\\E067';
}
.c-icon--ellipsis-baseline:before {
  content: '\\E068';
}
.c-icon--spinner:before {
  content: '\\E069';
}
.c-icon--spiral:before {
  content: '\\E070';
}
.c-icon--random:before {
  content: '\\E071';
}
.c-icon--repeat:before {
  content: '\\E072';
}
.c-icon--share-square-o:before {
  content: '\\E073';
}
.c-icon--link:before {
  content: '\\E074';
}
.c-icon--undo:before {
  content: '\\E075';
}
.c-icon--history:before {
  content: '\\E076';
}
.c-icon--hourglass-empty:before {
  content: '\\E077';
}
.c-icon--hourglass:before {
  content: '\\E078';
}
.c-icon--clock-o:before {
  content: '\\E079';
}
.c-icon--dashboard:before {
  content: '\\E080';
}
.c-icon--power-off:before {
  content: '\\E081';
}
.c-icon--sign-in:before {
  content: '\\E082';
}
.c-icon--sign-out:before {
  content: '\\E083';
}
.c-icon--jump:before {
  content: '\\E084';
}
.c-icon--globe:before {
  content: '\\E085';
}
.c-icon--filter:before {
  content: '\\E086';
}
.c-icon--microphone:before {
  content: '\\E087';
}
.c-icon--microphone-slash:before {
  content: '\\E088';
}
.c-icon--paperclip:before {
  content: '\\E089';
}
.c-icon--video-camera:before {
  content: '\\E090';
}
.c-icon--stop-video:before {
  content: '\\E091';
}
.c-icon--phone:before {
  content: '\\E092';
}
.c-icon--unarchive:before {
  content: '\\E093';
}
.c-icon--smile-o:before {
  content: '\\E094';
}
.c-icon--share-screen:before {
  content: '\\E095';
}
.c-icon--stop-screen-sharing:before {
  content: '\\E096';
}
.c-icon--stop-screen-sharing-alt:before {
  content: '\\E097';
}
.c-icon--feedback:before {
  content: '\\E098';
}
.c-icon--paper-plane-alt:before {
  content: '\\E099';
}
.c-icon--cloud-offline:before {
  content: '\\E0A0';
}
.c-icon--cloud-offline-small:before {
  content: '\\E0A1';
}
.c-icon--filters:before {
  content: '\\E0A2';
}
.c-icon--lock-large:before {
  content: '\\E0A3';
}
.c-icon--checkbox-empty:before {
  content: '\\E0A4';
}
.c-icon--input-file:before {
  content: '\\E0A5';
}
.c-icon--input-fullscreen:before {
  content: '\\E0A6';
}
.c-icon--input-img:before {
  content: '\\E0A7';
}
.c-icon--input-integration:before {
  content: '\\E0A8';
}
.c-icon--share:before {
  content: '\\E100';
}
.c-icon--save:before {
  content: '\\E101';
}
.c-icon--message-notification:before {
  content: '\\E102';
}
.c-icon--list:before {
  content: '\\E103';
}
.c-icon--channel:before {
  content: '\\E104';
}
.c-icon--share-other-alt:before {
  content: '\\E105';
}
.c-icon--broadcast:before {
  content: '\\E106';
}
.c-icon--all-files-alt:before {
  content: '\\E107';
}
.c-icon--search-files:before {
  content: '\\E108';
}
.c-icon--add-user:before {
  content: '\\E109';
}
.c-icon--switch-team:before {
  content: '\\E110';
}
.c-icon--create-snippet:before {
  content: '\\E111';
}
.c-icon--create-post:before {
  content: '\\E112';
}
.c-icon--upload:before {
  content: '\\E113';
}
.c-icon--download:before {
  content: '\\E114';
}
.c-icon--share-email:before {
  content: '\\E115';
}
.c-icon--import-email:before {
  content: '\\E116';
}
.c-icon--ellipsis-o:before {
  content: '\\E117';
}
.c-icon--add-reaction:before {
  content: '\\E118';
}
.c-icon--happy-smile:before {
  content: '\\E119';
}
.c-icon--quote-post:before {
  content: '\\E120';
}
.c-icon--camera:before {
  content: '\\E121';
}
.c-icon--phone-flat:before {
  content: '\\E122';
}
.c-icon--sparkles:before {
  content: '\\E123';
}
.c-icon--location-pin:before {
  content: '\\E124';
}
.c-icon--channel-pane-hash:before {
  content: '\\E125';
}
.c-icon--emoji-nature:before {
  content: '\\E126';
}
.c-icon--emoji-food:before {
  content: '\\E127';
}
.c-icon--emoji-celebration:before {
  content: '\\E128';
}
.c-icon--emoji-activities:before {
  content: '\\E129';
}
.c-icon--emoji-travel:before {
  content: '\\E130';
}
.c-icon--emoji-objects:before {
  content: '\\E131';
}
.c-icon--pause:before {
  content: '\\E132';
}
.c-icon--file-gdrive:before {
  content: '\\E133';
}
.c-icon--play:before {
  content: '\\E134';
}
.c-icon--stream:before {
  content: '\\E135';
}
.c-icon--field-text:before {
  content: '\\E136';
}
.c-icon--poo:before {
  content: '\\E137';
}
.c-icon--channel-list:before {
  content: '\\E138';
}
.c-icon--share-android:before {
  content: '\\E139';
}
.c-icon--highlight:before {
  content: '\\E140';
}
.c-icon--flag:before {
  content: '\\E141';
}
.c-icon--grabby-patty:before {
  content: '\\E142';
}
.c-icon--backspace:before {
  content: '\\E143';
}
.c-icon--share-forward:before {
  content: '\\E144';
}
.c-icon--side-panel:before {
  content: '\\E145';
}
.c-icon--search-small:before {
  content: '\\E146';
}
.c-icon--reload-small:before {
  content: '\\E147';
}
.c-icon--vertical-ellipsis:before {
  content: '\\E148';
}
.c-icon--disable:before {
  content: '\\E149';
}
.c-icon--bold-hash-small:before {
  content: '\\E150';
}
.c-icon--cart:before {
  content: '\\E151';
}
.c-icon--snooze-outline:before {
  content: '\\E152';
}
.c-icon--new-window:before {
  content: '\\E153';
}
.c-icon--h1:before {
  content: '\\E154';
}
.c-icon--h2:before {
  content: '\\E155';
}
.c-icon--h3:before {
  content: '\\E156';
}
.c-icon--bullet-list:before {
  content: '\\E157';
}
.c-icon--numbered-list:before {
  content: '\\E158';
}
.c-icon--text-format-menu:before {
  content: '\\E159';
}
.c-icon--check-list:before {
  content: '\\E15A';
}
.c-icon--code-block:before {
  content: '\\E15B';
}
.c-icon--codeblock:before {
  content: '\\E15B';
}
.c-icon--bold:before {
  content: '\\E160';
}
.c-icon--italic:before {
  content: '\\E161';
}
.c-icon--underline:before {
  content: '\\E162';
}
.c-icon--strikethrough:before {
  content: '\\E163';
}
.c-icon--tag:before {
  content: '\\E164';
}
.c-icon--org-shared-channel:before {
  content: '\\E165';
}
.c-icon--shared-channel:before {
  content: '\\E166';
}
.c-icon--external-channel:before {
  content: '\\E167';
}
.c-icon--external-channel-square:before {
  content: '\\E168';
}
.c-icon--external-channel-triangle:before {
  content: '\\E169';
}
.c-icon--small-reaction:before {
  content: '\\E170';
}
.c-icon--small-reply:before {
  content: '\\E171';
}
.c-icon--small-ellipsis:before {
  content: '\\E172';
}
.c-icon--small-star:before {
  content: '\\E173';
}
.c-icon--small-quote:before {
  content: '\\E174';
}
.c-icon--keyboard:before {
  content: '\\E175';
}
.c-icon--share-action:before {
  content: '\\E176';
}
.c-icon--handset:before {
  content: '\\E177';
}
.c-icon--bluetooth-sound:before {
  content: '\\E178';
}
.c-icon--bluetooth:before {
  content: '\\E179';
}
.c-icon--bot:before {
  content: '\\E180';
}
.c-icon--globe-plus:before {
  content: '\\E181';
}
.c-icon--user-groups:before {
  content: '\\E182';
}
.c-icon--rocket:before {
  content: '\\E183';
}
.c-icon--mobile-notification:before {
  content: '\\E184';
}
.c-icon--desktop-notification:before {
  content: '\\E185';
}
.c-icon--collab-screenshare-on:before {
  content: '\\E186';
}
.c-icon--collab-screenshare-off:before {
  content: '\\E187';
}
.c-icon--thumbs-up:before {
  content: '\\E188';
}
.c-icon--thumbs-down:before {
  content: '\\E189';
}
.c-icon--bug:before {
  content: '\\E190';
}
.c-icon--mark-unread:before {
  content: '\\E191';
}
.c-icon--compose-dm:before {
  content: '\\E192';
}
.c-icon--invoice:before {
  content: '\\E193';
}
.c-icon--expand:before {
  content: '\\E200';
}
.c-icon--reduce:before {
  content: '\\E201';
}
.c-icon--arrows-alt:before {
  content: '\\E202';
}
.c-icon--reduce-alt:before {
  content: '\\E203';
}
.c-icon--check-square-o:before {
  content: '\\E204';
}
.c-icon--check-circle-o:before {
  content: '\\E205';
}
.c-icon--check-circle-o-large:before {
  content: '\\E206';
}
.c-icon--question:before {
  content: '\\E207';
}
.c-icon--exclamation:before {
  content: '\\E208';
}
.c-icon--warning:before {
  content: '\\E209';
}
.c-icon--exclamation-circle:before {
  content: '\\E210';
}
.c-icon--question-circle:before {
  content: '\\E211';
}
.c-icon--plus-circle:before {
  content: '\\E212';
}
.c-icon--minus-circle:before {
  content: '\\E213';
}
.c-icon--times-circle:before {
  content: '\\E214';
}
.c-icon--arrow-circle-o-up:before {
  content: '\\E215';
}
.c-icon--arrow-circle-o-down:before {
  content: '\\E216';
}
.c-icon--arrow-circle-o-right:before {
  content: '\\E217';
}
.c-icon--arrow-circle-o-left:before {
  content: '\\E218';
}
.c-icon--chevron-circle-left:before {
  content: '\\E219';
}
.c-icon--chevron-circle-right:before {
  content: '\\E220';
}
.c-icon--chevron-circle-down:before {
  content: '\\E221';
}
.c-icon--chevron-circle-up:before {
  content: '\\E222';
}
.c-icon--plus-circle-small:before {
  content: '\\E223';
}
.c-icon--circle-small:before {
  content: '\\E224';
}
.c-icon--circle-large:before {
  content: '\\E225';
}
.c-icon--navigate:before {
  content: '\\E226';
}
.c-icon--times-circle-small:before {
  content: '\\E520';
}
.c-icon--plus-circle-medium:before {
  content: '\\E228';
}
.c-icon--times-circle-medium:before {
  content: '\\E229';
}
.c-icon--square-warning:before {
  content: '\\E230';
}
.c-icon--square-question:before {
  content: '\\E231';
}
.c-icon--plus-square-o:before {
  content: '\\E232';
}
.c-icon--minus-square-o:before {
  content: '\\E233';
}
.c-icon--square-times:before {
  content: '\\E234';
}
.c-icon--square-arrow-up:before {
  content: '\\E235';
}
.c-icon--square-arrow-down:before {
  content: '\\E236';
}
.c-icon--square-arrow-right:before {
  content: '\\E237';
}
.c-icon--square-arrow-left:before {
  content: '\\E238';
}
.c-icon--square-chevron-left:before {
  content: '\\E239';
}
.c-icon--square-chevron-right:before {
  content: '\\E240';
}
.c-icon--square-chevron-down:before {
  content: '\\E241';
}
.c-icon--square-chevron-up:before {
  content: '\\E242';
}
.c-icon--chevron-right:before {
  content: '\\E250';
}
.c-icon--chevron-left:before {
  content: '\\E251';
}
.c-icon--chevron-down:before {
  content: '\\E252';
}
.c-icon--chevron-up:before {
  content: '\\E253';
}
.c-icon--chevron-medium-right:before {
  content: '\\E254';
}
.c-icon--chevron-medium-left:before {
  content: '\\E255';
}
.c-icon--chevron-medium-down:before {
  content: '\\E256';
}
.c-icon--chevron-medium-up:before {
  content: '\\E257';
}
.c-icon--chevron-large-right:before {
  content: '\\E258';
}
.c-icon--chevron-large-left:before {
  content: '\\E259';
}
.c-icon--chevron-large-up:before {
  content: '\\E260';
}
.c-icon--chevron-large-down:before {
  content: '\\E261';
}
.c-icon--arrow-large-right:before {
  content: '\\E262';
}
.c-icon--arrow-large-left:before {
  content: '\\E263';
}
.c-icon--arrow-large-up:before {
  content: '\\E264';
}
.c-icon--arrow-large-down:before {
  content: '\\E265';
}
.c-icon--caret-outline-left:before {
  content: '\\E266';
}
.c-icon--caret-outline-right:before {
  content: '\\E267';
}
.c-icon--caret-outline-up:before {
  content: '\\E268';
}
.c-icon--caret-outline-down:before {
  content: '\\E269';
}
.c-icon--caret-up:before {
  content: '\\E270';
}
.c-icon--caret-down:before {
  content: '\\E271';
}
.c-icon--caret-right:before {
  content: '\\E272';
}
.c-icon--caret-left:before {
  content: '\\E273';
}
.c-icon--angle-arrow-down-left:before {
  content: '\\E274';
}
.c-icon--angle-arrow-down-right:before {
  content: '\\E275';
}
.c-icon--angle-arrow-up-right:before {
  content: '\\E276';
}
.c-icon--angle-arrow-up-left:before {
  content: '\\E277';
}
.c-icon--times:before {
  content: '\\E278';
}
.c-icon--plus:before {
  content: '\\E279';
}
.c-icon--minus:before {
  content: '\\E280';
}
.c-icon--plus-small:before {
  content: '\\E281';
}
.c-icon--minus-small:before {
  content: '\\E282';
}
.c-icon--exclamation-small:before {
  content: '\\E283';
}
.c-icon--question-small:before {
  content: '\\E284';
}
.c-icon--check-small:before {
  content: '\\E285';
}
.c-icon--arrow-right:before {
  content: '\\E286';
}
.c-icon--arrow-left:before {
  content: '\\E287';
}
.c-icon--arrow-up:before {
  content: '\\E288';
}
.c-icon--arrow-down:before {
  content: '\\E289';
}
.c-icon--arrow-right-medium:before {
  content: '\\E290';
}
.c-icon--arrow-left-medium:before {
  content: '\\E291';
}
.c-icon--arrow-up-medium:before {
  content: '\\E292';
}
.c-icon--arrow-down-medium:before {
  content: '\\E293';
}
.c-icon--times-small:before {
  content: '\\E294';
}
.c-icon--sync:before {
  content: '\\E295';
}
.c-icon--replies:before {
  content: '\\E296';
}
.c-icon--angle-arrow-down-right-alt:before {
  content: '\\E297';
}
.c-icon--angle-arrow-up-right-alt:before {
  content: '\\E298';
}
.c-icon--angle-arrow-up-left-alt:before {
  content: '\\E299';
}
.c-icon--angle-arrow-down-left-alt:before {
  content: '\\E300';
}
.c-icon--check-small-bold:before {
  content: '\\E301';
}
.c-icon--enter:before {
  content: '\\E302';
}
.c-icon--expand-vertical:before {
  content: '\\E303';
}
.c-icon--collapse-vertical:before {
  content: '\\E304';
}
.c-icon--android-upload:before {
  content: '\\E305';
}
.c-icon--plus-thick:before {
  content: '\\E306';
}
.c-icon--arrow-ne-large:before {
  content: '\\E307';
}
.c-icon--arrow-nw-large:before {
  content: '\\E308';
}
.c-icon--arrow-sw-large:before {
  content: '\\E309';
}
.c-icon--arrow-se-large:before {
  content: '\\E310';
}
.c-icon--arrow-ne-medium:before {
  content: '\\E311';
}
.c-icon--arrow-nw-medium:before {
  content: '\\E312';
}
.c-icon--arrow-sw-medium:before {
  content: '\\E313';
}
.c-icon--arrow-se-medium:before {
  content: '\\E314';
}
.c-icon--arrow-ne-small:before {
  content: '\\E315';
}
.c-icon--arrow-nw-small:before {
  content: '\\E316';
}
.c-icon--arrow-sw-small:before {
  content: '\\E317';
}
.c-icon--arrow-se-small:before {
  content: '\\E318';
}
.c-icon--check-large-bold:before {
  content: '\\E319';
}
.c-icon--check-large:before {
  content: '\\E320';
}
.c-icon--times-medium:before {
  content: '\\E321';
}
.c-icon--real-checkbox-empty:before {
  content: '\\E322';
}
.c-icon--real-checkbox-checked:before {
  content: '\\E323';
}
.c-icon--real-checkbox-checked-o:before {
  content: '\\E324';
}
.c-icon--circle-checkbox-empty:before {
  content: '\\E325';
}
.c-icon--circle-checkbox-checked:before {
  content: '\\E326';
}
.c-icon--circle-checkbox-checked-o:before {
  content: '\\E327';
}
.c-icon--times-large:before {
  content: '\\E328';
}
.c-icon--file-generic:before {
  content: '\\E400';
}
.c-icon--file-generic-small:before {
  content: '\\E401';
}
.c-icon--file-spaces:before {
  content: '\\E402';
}
.c-icon--file-spaces-small:before {
  content: '\\E403';
}
.c-icon--file-image:before {
  content: '\\E404';
}
.c-icon--file-image-small:before {
  content: '\\E405';
}
.c-icon--file-pdf:before {
  content: '\\E406';
}
.c-icon--file-pdf-small:before {
  content: '\\E407';
}
.c-icon--file-audio:before {
  content: '\\E408';
}
.c-icon--file-audio-small:before {
  content: '\\E409';
}
.c-icon--file-video:before {
  content: '\\E410';
}
.c-icon--file-video-small:before {
  content: '\\E411';
}
.c-icon--file-presentation:before {
  content: '\\E412';
}
.c-icon--file-presentation-small:before {
  content: '\\E413';
}
.c-icon--file-email:before {
  content: '\\E414';
}
.c-icon--file-email-small:before {
  content: '\\E415';
}
.c-icon--file-vector:before {
  content: '\\E416';
}
.c-icon--file-vector-small:before {
  content: '\\E417';
}
.c-icon--file-spreadsheet:before {
  content: '\\E418';
}
.c-icon--file-spreadsheet-small:before {
  content: '\\E419';
}
.c-icon--file-media-archive:before {
  content: '\\E420';
}
.c-icon--file-media-archive-small:before {
  content: '\\E421';
}
.c-icon--file-archive:before {
  content: '\\E422';
}
.c-icon--file-archive-small:before {
  content: '\\E423';
}
.c-icon--file-executable:before {
  content: '\\E424';
}
.c-icon--file-executable-small:before {
  content: '\\E425';
}
.c-icon--file-disk-image:before {
  content: '\\E426';
}
.c-icon--file-disk-image-small:before {
  content: '\\E427';
}
.c-icon--file-cad:before {
  content: '\\E428';
}
.c-icon--file-cad-small:before {
  content: '\\E429';
}
.c-icon--file-3d-graphic:before {
  content: '\\E430';
}
.c-icon--file-3d-graphic-small:before {
  content: '\\E431';
}
.c-icon--file-database:before {
  content: '\\E432';
}
.c-icon--file-database-small:before {
  content: '\\E433';
}
.c-icon--file-binary:before {
  content: '\\E434';
}
.c-icon--file-binary-small:before {
  content: '\\E435';
}
.c-icon--file-markdown:before {
  content: '\\E436';
}
.c-icon--file-markdown-small:before {
  content: '\\E437';
}
.c-icon--file-text-post:before {
  content: '\\E438';
}
.c-icon--file-text-post-small:before {
  content: '\\E439';
}
.c-icon--file-html:before {
  content: '\\E440';
}
.c-icon--file-html-small:before {
  content: '\\E441';
}
.c-icon--file-code:before {
  content: '\\E442';
}
.c-icon--file-code-small:before {
  content: '\\E443';
}
.c-icon--file-css:before {
  content: '\\E444';
}
.c-icon--file-css-small:before {
  content: '\\E445';
}
.c-icon--file-php:before {
  content: '\\E446';
}
.c-icon--file-php-small:before {
  content: '\\E447';
}
.c-icon--file-snippet:before {
  content: '\\E448';
}
.c-icon--file-snippet-small:before {
  content: '\\E449';
}
.c-icon--file-word:before {
  content: '\\E450';
}
.c-icon--file-word-small:before {
  content: '\\E451';
}
.c-icon--file-excel:before {
  content: '\\E452';
}
.c-icon--file-excel-small:before {
  content: '\\E453';
}
.c-icon--file-powerpoint:before {
  content: '\\E454';
}
.c-icon--file-powerpoint-small:before {
  content: '\\E455';
}
.c-icon--file-illustrator:before {
  content: '\\E456';
}
.c-icon--file-illustrator-small:before {
  content: '\\E457';
}
.c-icon--file-photoshop:before {
  content: '\\E458';
}
.c-icon--file-photoshop-small:before {
  content: '\\E459';
}
.c-icon--file-indesign:before {
  content: '\\E460';
}
.c-icon--file-indesign-small:before {
  content: '\\E461';
}
.c-icon--file-adobe-flash:before {
  content: '\\E462';
}
.c-icon--file-adobe-flash-small:before {
  content: '\\E463';
}
.c-icon--file-adobe-swf:before {
  content: '\\E464';
}
.c-icon--file-adobe-swf-small:before {
  content: '\\E465';
}
.c-icon--file-iphone-app:before {
  content: '\\E466';
}
.c-icon--file-iphone-app-small:before {
  content: '\\E467';
}
.c-icon--file-android-app:before {
  content: '\\E468';
}
.c-icon--file-android-app-small:before {
  content: '\\E469';
}
.c-icon--file-dropbox:before {
  content: '\\E470';
}
.c-icon--file-dropbox-small:before {
  content: '\\E471';
}
.c-icon--file-google:before {
  content: '\\E472';
}
.c-icon--file-google-document:before {
  content: '\\E472';
}
.c-icon--file-google-form:before {
  content: '\\E472';
}
.c-icon--file-google-presentation:before {
  content: '\\E472';
}
.c-icon--file-google-spreadsheet:before {
  content: '\\E472';
}
.c-icon--file-google-document-small:before {
  content: '\\E473';
}
.c-icon--file-google-form-small:before {
  content: '\\E473';
}
.c-icon--file-google-presentation-small:before {
  content: '\\E473';
}
.c-icon--file-google-small:before {
  content: '\\E473';
}
.c-icon--file-google-spreadsheet-small:before {
  content: '\\E473';
}
.c-icon--file-qtz:before {
  content: '\\E474';
}
.c-icon--file-qtz-small:before {
  content: '\\E475';
}
.c-icon--file-sketch:before {
  content: '\\E476';
}
.c-icon--file-sketch-small:before {
  content: '\\E477';
}
.c-icon--calls:before {
  content: '\\E478';
}
.c-icon--calls-small:before {
  content: '\\E479';
}
.c-icon--calls-ended:before {
  content: '\\E480';
}
.c-icon--calls-ended-small:before {
  content: '\\E481';
}
.c-icon--file-figma:before {
  content: '\\E482';
}
.c-icon--file-figma-small:before {
  content: '\\E483';
}
.c-icon--file-generic-tiny:before {
  content: '\\E4A0';
}
.c-icon--file-spaces-tiny:before {
  content: '\\E4AA';
}
.c-icon--file-image-tiny:before {
  content: '\\E4AB';
}
.c-icon--file-pdf-tiny:before {
  content: '\\E4AC';
}
.c-icon--file-audio-tiny:before {
  content: '\\E4AD';
}
.c-icon--file-video-tiny:before {
  content: '\\E4AE';
}
.c-icon--file-presentation-tiny:before {
  content: '\\E4AF';
}
.c-icon--file-email-tiny:before {
  content: '\\E4BA';
}
.c-icon--file-vector-tiny:before {
  content: '\\E4BB';
}
.c-icon--file-spreadsheet-tiny:before {
  content: '\\E4BC';
}
.c-icon--file-media-archive-tiny:before {
  content: '\\E4BD';
}
.c-icon--file-archive-tiny:before {
  content: '\\E4BE';
}
.c-icon--file-executable-tiny:before {
  content: '\\E4BF';
}
.c-icon--file-disk-image-tiny:before {
  content: '\\E4CA';
}
.c-icon--file-cad-tiny:before {
  content: '\\E4CB';
}
.c-icon--file-3d-graphic-tiny:before {
  content: '\\E4CC';
}
.c-icon--file-database-tiny:before {
  content: '\\E4CD';
}
.c-icon--file-binary-tiny:before {
  content: '\\E4CE';
}
.c-icon--file-markdown-tiny:before {
  content: '\\E4CF';
}
.c-icon--file-text-post-tiny:before {
  content: '\\E4DA';
}
.c-icon--file-html-tiny:before {
  content: '\\E4DB';
}
.c-icon--file-code-tiny:before {
  content: '\\E4DC';
}
.c-icon--file-css-tiny:before {
  content: '\\E4DD';
}
.c-icon--file-php-tiny:before {
  content: '\\E4DE';
}
.c-icon--file-snippet-tiny:before {
  content: '\\E4DF';
}
.c-icon--file-word-tiny:before {
  content: '\\E4EA';
}
.c-icon--file-excel-tiny:before {
  content: '\\E4EB';
}
.c-icon--file-powerpoint-tiny:before {
  content: '\\E4EC';
}
.c-icon--file-illustrator-tiny:before {
  content: '\\E4ED';
}
.c-icon--file-photoshop-tiny:before {
  content: '\\E4EE';
}
.c-icon--file-indesign-tiny:before {
  content: '\\E4EF';
}
.c-icon--file-adobe-flash-tiny:before {
  content: '\\E4F0';
}
.c-icon--file-adobe-swf-tiny:before {
  content: '\\E4F1';
}
.c-icon--file-iphone-app-tiny:before {
  content: '\\E4F2';
}
.c-icon--file-android-app-tiny:before {
  content: '\\E4F3';
}
.c-icon--file-dropbox-tiny:before {
  content: '\\E4F4';
}
.c-icon--file-google-document-tiny:before {
  content: '\\E4F5';
}
.c-icon--file-google-form-tiny:before {
  content: '\\E4F5';
}
.c-icon--file-google-presentation-tiny:before {
  content: '\\E4F5';
}
.c-icon--file-google-spreadsheet-tiny:before {
  content: '\\E4F5';
}
.c-icon--file-google-tiny:before {
  content: '\\E4F5';
}
.c-icon--file-qtz-tiny:before {
  content: '\\E4F6';
}
.c-icon--file-sketch-tiny:before {
  content: '\\E4F7';
}
.c-icon--file-figma-tiny:before {
  content: '\\E4F8';
}
.c-icon--star:before {
  content: '\\E500';
}
.c-icon--unstar:before {
  content: '\\E501';
}
.c-icon--bell:before {
  content: '\\E502';
}
.c-icon--lock:before {
  content: '\\E503';
}
.c-icon--external-link-small:before {
  content: '\\E504';
}
.c-icon--external-link-large:before {
  content: '\\E505';
}
.c-icon--presence-online:before {
  content: '\\E506';
}
.c-icon--presence-offline:before {
  content: '\\E507';
}
.c-icon--presence-dnd:before {
  content: '\\E508';
}
.c-icon--presence-external-online:before {
  content: '\\E509';
}
.c-icon--presence-ra-online:before {
  content: '\\E509';
}
.c-icon--restricted-user:before {
  content: '\\E509';
}
.c-icon--presence-external-offline:before {
  content: '\\E510';
}
.c-icon--presence-ra-offline:before {
  content: '\\E510';
}
.c-icon--presence-external-dnd:before {
  content: '\\E511';
}
.c-icon--presence-ra-dnd:before {
  content: '\\E511';
}
.c-icon--presence-ura-online:before {
  content: '\\E512';
}
.c-icon--single-channel-guest:before {
  content: '\\E512';
}
.c-icon--presence-ura-offline:before {
  content: '\\E513';
}
.c-icon--presence-ura-dnd:before {
  content: '\\E514';
}
.c-icon--heart:before {
  content: '\\E515';
}
.c-icon--quote:before {
  content: '\\E516';
}
.c-icon--cog:before {
  content: '\\E517';
}
.c-icon--comment:before {
  content: '\\E518';
}
.c-icon--minus-circle-small:before {
  content: '\\E519';
}
.c-icon--times-circle-small:before {
  content: '\\E520';
}
.c-icon--times-circle-small-filled:before {
  content: '\\E520';
}
.c-icon--multiparty-dm-2:before {
  content: '\\E521';
}
.c-icon--multiparty-dm-3:before {
  content: '\\E522';
}
.c-icon--multiparty-dm-4:before {
  content: '\\E523';
}
.c-icon--multiparty-dm-5:before {
  content: '\\E524';
}
.c-icon--multiparty-dm-6:before {
  content: '\\E525';
}
.c-icon--multiparty-dm-7:before {
  content: '\\E526';
}
.c-icon--multiparty-dm-8:before {
  content: '\\E527';
}
.c-icon--multiparty-dm-9:before {
  content: '\\E528';
}
.c-icon--poo-filled:before {
  content: '\\E529';
}
.c-icon--circle-fill:before {
  content: '\\E530';
}
.c-icon--flag-filled:before {
  content: '\\E531';
}
.c-icon--refresh-small:before {
  content: '\\E532';
}
.c-icon--snooze-filled:before {
  content: '\\E533';
}
.c-icon--archived-channel:before {
  content: '\\E534';
}
.c-icon--presence-dnd-offline:before {
  content: '\\E535';
}
.c-icon--presence-external-dnd-offline:before {
  content: '\\E536';
}
.c-icon--presence-ra-dnd-offline:before {
  content: '\\E536';
}
.c-icon--presence-ura-dnd-offline:before {
  content: '\\E537';
}
.c-icon--presence-mobile-dnd:before {
  content: '\\E538';
}
.c-icon--play-filled:before {
  content: '\\E539';
}
.c-icon--broadcast-filled:before {
  content: '\\E540';
}
.c-icon--small-star-filled:before {
  content: '\\E541';
}
.c-icon--small-comment-filled:before {
  content: '\\E542';
}
.c-icon--paperplane-filled:before {
  content: '\\E543';
}
.c-icon--filebg-large-filled:before {
  content: '\\E544';
}
.c-icon--filebg-small-filled:before {
  content: '\\E545';
}
.c-icon--highlight-filled:before {
  content: '\\E546';
}
.c-icon--pin-filled:before {
  content: '\\E547';
}
.c-icon--thumb-tack-filled:before {
  content: '\\E547';
}
.c-icon--close-filled:before {
  content: '\\E548';
}
.c-icon--share-filled:before {
  content: '\\E549';
}
.c-icon--pencil-filled:before {
  content: '\\E550';
}
.c-icon--side-panel-filled:before {
  content: '\\E551';
}
.c-icon--add-reaction-filled:before {
  content: '\\E552';
}
.c-icon--mentions-filled:before {
  content: '\\E553';
}
.c-icon--small-reply-filled:before {
  content: '\\E554';
}
.c-icon--user-filled:before {
  content: '\\E555';
}
.c-icon--microphone-on:before {
  content: '\\E556';
}
.c-icon--camera-on:before {
  content: '\\E557';
}
.c-icon--screenshare-on:before {
  content: '\\E558';
}
.c-icon--shared-channels:before {
  content: '\\E559';
}
.c-icon--heart-large-filled:before {
  content: '\\E560';
}
.c-icon--thumbs-up-filled:before {
  content: '\\E561';
}
.c-icon--thumbs-down-filled:before {
  content: '\\E562';
}
.c-icon--slow-network:before {
  content: '\\E563';
}
.c-icon--sparkles-filled:before {
  content: '\\E564';
}
.c-icon--small-warning-filled:before {
  content: '\\E565';
}
.c-icon--deactivated-user:before {
  content: '\\E566';
}
.c-icon--lock-small:before {
  content: '\\E567';
}
.c-icon--sc-baseline:before {
  content: '\\E568';
}
.c-icon--shared-channels-baseline:before {
  content: '\\E568';
}
.c-icon--sc-pending:before {
  content: '\\E569';
}
.c-icon--shared-channels-pending:before {
  content: '\\E569';
}
.c-icon--sc-baseline-pending:before {
  content: '\\E570';
}
.c-icon--shared-channels-baseline-pending:before {
  content: '\\E570';
}
.c-icon--cloud-offline-filled:before {
  content: '\\E571';
}
.c-icon--cloud-offline-small-filled:before {
  content: '\\E572';
}
.c-icon--lock-large-filled:before {
  content: '\\E573';
}
.c-icon--input-file-active:before {
  content: '\\E574';
}
.c-icon--input-img-active:before {
  content: '\\E575';
}
.c-icon--input-integration-active:before {
  content: '\\E576';
}
.c-icon--checkbox-full:before {
  content: '\\E577';
}
.c-icon--add-reaction-bg:before {
  content: '\\E578';
}
.c-icon--small-reaction-bg:before {
  content: '\\E579';
}
.c-icon--info-circle-filled:before {
  content: '\\E580';
}
.c-icon--exclamation-circle-filled:before {
  content: '\\E581';
}
.c-icon--missing-emoji:before {
  content: '\\E582';
}
.c-icon--warning-filled:before {
  content: '\\E583';
}
.c-icon--eye-filled:before {
  content: '\\E584';
}
.c-icon--circle-minus-filled:before {
  content: '\\E585';
}
.c-icon--slack:before {
  content: '\\E800';
}
.c-icon--slack-pillow:before {
  content: '\\E801';
}
.c-icon--apple:before {
  content: '\\E802';
}
.c-icon--android:before {
  content: '\\E803';
}
.c-icon--twitter:before {
  content: '\\E804';
}
.c-icon--github:before {
  content: '\\E805';
}
.c-icon--dropbox:before {
  content: '\\E806';
}
.c-icon--google:before {
  content: '\\E807';
}
.c-icon--windows:before {
  content: '\\E808';
}
.c-icon--youtube:before {
  content: '\\E809';
}
.c-icon--google-drive:before {
  content: '\\E810';
}
.c-icon--skype:before {
  content: '\\E811';
}
.c-icon--rss:before {
  content: '\\E812';
}
.c-icon--facebook:before {
  content: '\\E813';
}
.c-icon--asana:before {
  content: '\\E814';
}
.c-icon--linkedin:before {
  content: '\\E815';
}
.c-icon--tumblr:before {
  content: '\\E816';
}
.c-icon--instagram:before {
  content: '\\E817';
}
.c-icon--google-plus:before {
  content: '\\E818';
}
.c-icon--soundcloud:before {
  content: '\\E819';
}
.c-icon--flickr:before {
  content: '\\E820';
}
.c-icon--pinterest:before {
  content: '\\E821';
}
.c-icon--tripit:before {
  content: '\\E822';
}
.c-icon--hangouts:before {
  content: '\\E823';
}
.c-icon--viber:before {
  content: '\\E824';
}
.c-icon--line:before {
  content: '\\E825';
}
.c-icon--facebook-messenger:before {
  content: '\\E826';
}
.c-icon--1password:before {
  content: '\\E827';
}
.c-icon--box:before {
  content: '\\E828';
}
.c-icon--box-square:before {
  content: '\\E829';
}
.c-icon--google-play:before {
  content: '\\E830';
}
.c-icon--spotify:before {
  content: '\\E831';
}
.c-icon--siriusxm:before {
  content: '\\E832';
}
.c-icon--stitcher:before {
  content: '\\E833';
}
.c-icon--pocket-casts:before {
  content: '\\E834';
}
.c-icon--onedrive:before {
  content: '\\E835';
}
.c-icon--vogue:before {
  content: '\\E80A';
}
.c-icon--filetype {
  width: 50px;
}
.c-icon--filetype:before {
  content: '\\E400';
  color: #3aa3e3;
}
.c-icon--filetype:after {
  background-color: #3aa3e3;
}
.c-icon--filetype:before {
  font-size: 50px;
}
.c-icon--filetype-small {
  width: 40px;
}
.c-icon--filetype-small:before {
  content: '\\E401';
  color: #3aa3e3;
}
.c-icon--filetype-small:after {
  background-color: #3aa3e3;
}
.c-icon--filetype-small:before {
  font-size: 40px;
}
.c-icon--filetype-tiny {
  width: 20px;
}
.c-icon--filetype-tiny:before {
  content: '\\E4A0';
  color: #3aa3e3;
}
.c-icon--filetype-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--filetype-tiny:before {
  font-size: 20px;
}
.c-icon--file-spaces:before {
  content: '\\E402';
  color: #66c79e;
}
.c-icon--file-spaces:after {
  background-color: #66c79e;
}
.c-icon--file-spaces-small:before {
  content: '\\E403';
  color: #66c79e;
}
.c-icon--file-spaces-small:after {
  background-color: #66c79e;
}
.c-icon--file-spaces-tiny:before {
  content: '\\E4AA';
  color: #66c79e;
}
.c-icon--file-spaces-tiny:after {
  background-color: #66c79e;
}
.c-icon--file-image:before {
  content: '\\E404';
  color: #3aa3e3;
}
.c-icon--file-image:after {
  background-color: #3aa3e3;
}
.c-icon--file-image-small:before {
  content: '\\E405';
  color: #3aa3e3;
}
.c-icon--file-image-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-image-tiny:before {
  content: '\\E4AB';
  color: #3aa3e3;
}
.c-icon--file-image-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-pdf:before {
  content: '\\E406';
  color: #db4437;
}
.c-icon--file-pdf:after {
  background-color: #db4437;
}
.c-icon--file-pdf-small:before {
  content: '\\E407';
  color: #db4437;
}
.c-icon--file-pdf-small:after {
  background-color: #db4437;
}
.c-icon--file-pdf-tiny:before {
  content: '\\E4AC';
  color: #db4437;
}
.c-icon--file-pdf-tiny:after {
  background-color: #db4437;
}
.c-icon--file-audio:before {
  content: '\\E408';
  color: #3aa3e3;
}
.c-icon--file-audio:after {
  background-color: #3aa3e3;
}
.c-icon--file-audio-small:before {
  content: '\\E409';
  color: #3aa3e3;
}
.c-icon--file-audio-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-audio-tiny:before {
  content: '\\E4AD';
  color: #3aa3e3;
}
.c-icon--file-audio-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-video:before {
  content: '\\E410';
  color: #3aa3e3;
}
.c-icon--file-video:after {
  background-color: #3aa3e3;
}
.c-icon--file-video-small:before {
  content: '\\E411';
  color: #3aa3e3;
}
.c-icon--file-video-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-video-tiny:before {
  content: '\\E4AE';
  color: #3aa3e3;
}
.c-icon--file-video-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-presentation:before {
  content: '\\E412';
  color: #3aa3e3;
}
.c-icon--file-presentation:after {
  background-color: #3aa3e3;
}
.c-icon--file-presentation-small:before {
  content: '\\E413';
  color: #3aa3e3;
}
.c-icon--file-presentation-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-presentation-tiny:before {
  content: '\\E4AF';
  color: #3aa3e3;
}
.c-icon--file-presentation-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-email:before {
  content: '\\E414';
  color: #3aa3e3;
}
.c-icon--file-email:after {
  background-color: #3aa3e3;
}
.c-icon--file-email-small:before {
  content: '\\E415';
  color: #3aa3e3;
}
.c-icon--file-email-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-email-tiny:before {
  content: '\\E4BA';
  color: #3aa3e3;
}
.c-icon--file-email-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-vector:before {
  content: '\\E416';
  color: #3aa3e3;
}
.c-icon--file-vector:after {
  background-color: #3aa3e3;
}
.c-icon--file-vector-small:before {
  content: '\\E417';
  color: #3aa3e3;
}
.c-icon--file-vector-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-vector-tiny:before {
  content: '\\E4BB';
  color: #3aa3e3;
}
.c-icon--file-vector-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-spreadsheet:before {
  content: '\\E418';
  color: #3aa3e3;
}
.c-icon--file-spreadsheet:after {
  background-color: #3aa3e3;
}
.c-icon--file-spreadsheet-small:before {
  content: '\\E419';
  color: #3aa3e3;
}
.c-icon--file-spreadsheet-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-spreadsheet-tiny:before {
  content: '\\E4BC';
  color: #3aa3e3;
}
.c-icon--file-spreadsheet-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-media-archive:before {
  content: '\\E420';
  color: #3aa3e3;
}
.c-icon--file-media-archive:after {
  background-color: #3aa3e3;
}
.c-icon--file-media-archive-small:before {
  content: '\\E421';
  color: #3aa3e3;
}
.c-icon--file-media-archive-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-media-archive-tiny:before {
  content: '\\E4BD';
  color: #3aa3e3;
}
.c-icon--file-media-archive-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-archive:before {
  content: '\\E422';
  color: #3aa3e3;
}
.c-icon--file-archive:after {
  background-color: #3aa3e3;
}
.c-icon--file-archive-small:before {
  content: '\\E423';
  color: #3aa3e3;
}
.c-icon--file-archive-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-archive-tiny:before {
  content: '\\E4BE';
  color: #3aa3e3;
}
.c-icon--file-archive-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-executable:before {
  content: '\\E424';
  color: #3aa3e3;
}
.c-icon--file-executable:after {
  background-color: #3aa3e3;
}
.c-icon--file-executable-small:before {
  content: '\\E425';
  color: #3aa3e3;
}
.c-icon--file-executable-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-executable-tiny:before {
  content: '\\E4BF';
  color: #3aa3e3;
}
.c-icon--file-executable-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-disk-image:before {
  content: '\\E426';
  color: #3aa3e3;
}
.c-icon--file-disk-image:after {
  background-color: #3aa3e3;
}
.c-icon--file-disk-image-small:before {
  content: '\\E427';
  color: #3aa3e3;
}
.c-icon--file-disk-image-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-disk-image-tiny:before {
  content: '\\E4CA';
  color: #3aa3e3;
}
.c-icon--file-disk-image-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-cad:before {
  content: '\\E428';
  color: #3aa3e3;
}
.c-icon--file-cad:after {
  background-color: #3aa3e3;
}
.c-icon--file-cad-small:before {
  content: '\\E429';
  color: #3aa3e3;
}
.c-icon--file-cad-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-cad-tiny:before {
  content: '\\E4CB';
  color: #3aa3e3;
}
.c-icon--file-cad-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-3d-graphic:before {
  content: '\\E430';
  color: #3aa3e3;
}
.c-icon--file-3d-graphic:after {
  background-color: #3aa3e3;
}
.c-icon--file-3d-graphic-small:before {
  content: '\\E431';
  color: #3aa3e3;
}
.c-icon--file-3d-graphic-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-3d-graphic-tiny:before {
  content: '\\E4CC';
  color: #3aa3e3;
}
.c-icon--file-3d-graphic-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-database:before {
  content: '\\E432';
  color: #3aa3e3;
}
.c-icon--file-database:after {
  background-color: #3aa3e3;
}
.c-icon--file-database-small:before {
  content: '\\E433';
  color: #3aa3e3;
}
.c-icon--file-database-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-database-tiny:before {
  content: '\\E4CD';
  color: #3aa3e3;
}
.c-icon--file-database-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-binary:before {
  content: '\\E434';
  color: #3aa3e3;
}
.c-icon--file-binary:after {
  background-color: #3aa3e3;
}
.c-icon--file-binary-small:before {
  content: '\\E435';
  color: #3aa3e3;
}
.c-icon--file-binary-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-binary-tiny:before {
  content: '\\E4CE';
  color: #3aa3e3;
}
.c-icon--file-binary-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-markdown:before {
  content: '\\E436';
  color: #3aa3e3;
}
.c-icon--file-markdown:after {
  background-color: #3aa3e3;
}
.c-icon--file-markdown-small:before {
  content: '\\E437';
  color: #3aa3e3;
}
.c-icon--file-markdown-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-markdown-tiny:before {
  content: '\\E4CF';
  color: #3aa3e3;
}
.c-icon--file-markdown-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-text-post:before {
  content: '\\E438';
  color: #66c79e;
}
.c-icon--file-text-post:after {
  background-color: #66c79e;
}
.c-icon--file-text-post-small:before {
  content: '\\E439';
  color: #66c79e;
}
.c-icon--file-text-post-small:after {
  background-color: #66c79e;
}
.c-icon--file-text-post-tiny:before {
  content: '\\E4DA';
  color: #66c79e;
}
.c-icon--file-text-post-tiny:after {
  background-color: #66c79e;
}
.c-icon--file-html:before {
  content: '\\E440';
  color: #3aa3e3;
}
.c-icon--file-html:after {
  background-color: #3aa3e3;
}
.c-icon--file-html-small:before {
  content: '\\E441';
  color: #3aa3e3;
}
.c-icon--file-html-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-html-tiny:before {
  content: '\\E4DB';
  color: #3aa3e3;
}
.c-icon--file-html-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-code:before {
  content: '\\E442';
  color: #3aa3e3;
}
.c-icon--file-code:after {
  background-color: #3aa3e3;
}
.c-icon--file-code-small:before {
  content: '\\E443';
  color: #3aa3e3;
}
.c-icon--file-code-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-code-tiny:before {
  content: '\\E4DC';
  color: #3aa3e3;
}
.c-icon--file-code-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-css:before {
  content: '\\E444';
  color: #3aa3e3;
}
.c-icon--file-css:after {
  background-color: #3aa3e3;
}
.c-icon--file-css-small:before {
  content: '\\E445';
  color: #3aa3e3;
}
.c-icon--file-css-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-css-tiny:before {
  content: '\\E4DD';
  color: #3aa3e3;
}
.c-icon--file-css-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-php:before {
  content: '\\E446';
  color: #3aa3e3;
}
.c-icon--file-php:after {
  background-color: #3aa3e3;
}
.c-icon--file-php-small:before {
  content: '\\E447';
  color: #3aa3e3;
}
.c-icon--file-php-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-php-tiny:before {
  content: '\\E4DE';
  color: #3aa3e3;
}
.c-icon--file-php-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-snippet:before {
  content: '\\E448';
  color: #4d394b;
}
.c-icon--file-snippet:after {
  background-color: #4d394b;
}
.c-icon--file-snippet-small:before {
  content: '\\E449';
  color: #4d394b;
}
.c-icon--file-snippet-small:after {
  background-color: #4d394b;
}
.c-icon--file-snippet-tiny:before {
  content: '\\E4DF';
  color: #4d394b;
}
.c-icon--file-snippet-tiny:after {
  background-color: #4d394b;
}
.c-icon--file-word:before {
  content: '\\E450';
  color: #2c4098;
}
.c-icon--file-word:after {
  background-color: #2c4098;
}
.c-icon--file-word-small:before {
  content: '\\E451';
  color: #2c4098;
}
.c-icon--file-word-small:after {
  background-color: #2c4098;
}
.c-icon--file-word-tiny:before {
  content: '\\E4EA';
  color: #2c4098;
}
.c-icon--file-word-tiny:after {
  background-color: #2c4098;
}
.c-icon--file-excel:before {
  content: '\\E452';
  color: #377437;
}
.c-icon--file-excel:after {
  background-color: #377437;
}
.c-icon--file-excel-small:before {
  content: '\\E453';
  color: #377437;
}
.c-icon--file-excel-small:after {
  background-color: #377437;
}
.c-icon--file-excel-tiny:before {
  content: '\\E4EB';
  color: #377437;
}
.c-icon--file-excel-tiny:after {
  background-color: #377437;
}
.c-icon--file-powerpoint:before {
  content: '\\E454';
  color: #e05a30;
}
.c-icon--file-powerpoint:after {
  background-color: #e05a30;
}
.c-icon--file-powerpoint-small:before {
  content: '\\E455';
  color: #e05a30;
}
.c-icon--file-powerpoint-small:after {
  background-color: #e05a30;
}
.c-icon--file-powerpoint-tiny:before {
  content: '\\E4EC';
  color: #e05a30;
}
.c-icon--file-powerpoint-tiny:after {
  background-color: #e05a30;
}
.c-icon--file-illustrator:before {
  content: '\\E456';
  color: #f4993c;
}
.c-icon--file-illustrator:after {
  background-color: #f4993c;
}
.c-icon--file-illustrator-small:before {
  content: '\\E457';
  color: #f4993c;
}
.c-icon--file-illustrator-small:after {
  background-color: #f4993c;
}
.c-icon--file-illustrator-tiny:before {
  content: '\\E4ED';
  color: #f4993c;
}
.c-icon--file-illustrator-tiny:after {
  background-color: #f4993c;
}
.c-icon--file-photoshop:before {
  content: '\\E458';
  color: #56b6de;
}
.c-icon--file-photoshop:after {
  background-color: #56b6de;
}
.c-icon--file-photoshop-small:before {
  content: '\\E459';
  color: #56b6de;
}
.c-icon--file-photoshop-small:after {
  background-color: #56b6de;
}
.c-icon--file-photoshop-tiny:before {
  content: '\\E4EE';
  color: #56b6de;
}
.c-icon--file-photoshop-tiny:after {
  background-color: #56b6de;
}
.c-icon--file-indesign:before {
  content: '\\E460';
  color: #eb81ab;
}
.c-icon--file-indesign:after {
  background-color: #eb81ab;
}
.c-icon--file-indesign-small:before {
  content: '\\E461';
  color: #eb81ab;
}
.c-icon--file-indesign-small:after {
  background-color: #eb81ab;
}
.c-icon--file-indesign-tiny:before {
  content: '\\E4EF';
  color: #eb81ab;
}
.c-icon--file-indesign-tiny:after {
  background-color: #eb81ab;
}
.c-icon--file-adobe-flash:before {
  content: '\\E462';
  color: #a72428;
}
.c-icon--file-adobe-flash:after {
  background-color: #a72428;
}
.c-icon--file-adobe-flash-small:before {
  content: '\\E463';
  color: #a72428;
}
.c-icon--file-adobe-flash-small:after {
  background-color: #a72428;
}
.c-icon--file-adobe-flash-tiny:before {
  content: '\\E4F0';
  color: #a72428;
}
.c-icon--file-adobe-flash-tiny:after {
  background-color: #a72428;
}
.c-icon--file-adobe-swf:before {
  content: '\\E464';
  color: #a72428;
}
.c-icon--file-adobe-swf:after {
  background-color: #a72428;
}
.c-icon--file-adobe-swf-small:before {
  content: '\\E465';
  color: #a72428;
}
.c-icon--file-adobe-swf-small:after {
  background-color: #a72428;
}
.c-icon--file-adobe-swf-tiny:before {
  content: '\\E4F1';
  color: #a72428;
}
.c-icon--file-adobe-swf-tiny:after {
  background-color: #a72428;
}
.c-icon--file-iphone-app:before {
  content: '\\E466';
  color: #9ea0a7;
}
.c-icon--file-iphone-app:after {
  background-color: #9ea0a7;
}
.c-icon--file-iphone-app-small:before {
  content: '\\E467';
  color: #9ea0a7;
}
.c-icon--file-iphone-app-small:after {
  background-color: #9ea0a7;
}
.c-icon--file-iphone-app-tiny:before {
  content: '\\E4F2';
  color: #9ea0a7;
}
.c-icon--file-iphone-app-tiny:after {
  background-color: #9ea0a7;
}
.c-icon--file-android-app:before {
  content: '\\E468';
  color: #a4ca3a;
}
.c-icon--file-android-app:after {
  background-color: #a4ca3a;
}
.c-icon--file-android-app-small:before {
  content: '\\E469';
  color: #a4ca3a;
}
.c-icon--file-android-app-small:after {
  background-color: #a4ca3a;
}
.c-icon--file-android-app-tiny:before {
  content: '\\E4F3';
  color: #a4ca3a;
}
.c-icon--file-android-app-tiny:after {
  background-color: #a4ca3a;
}
.c-icon--file-dropbox:before {
  content: '\\E470';
  color: #007ee5;
}
.c-icon--file-dropbox:after {
  background-color: #007ee5;
}
.c-icon--file-dropbox-small:before {
  content: '\\E471';
  color: #007ee5;
}
.c-icon--file-dropbox-small:after {
  background-color: #007ee5;
}
.c-icon--file-dropbox-tiny:before {
  content: '\\E4F4';
  color: #007ee5;
}
.c-icon--file-dropbox-tiny:after {
  background-color: #007ee5;
}
.c-icon--file-google-presentation:before {
  content: '\\E472';
  color: #f4b400;
}
.c-icon--file-google-presentation:after {
  background-color: #f4b400;
}
.c-icon--file-google-presentation-small:before {
  content: '\\E473';
  color: #f4b400;
}
.c-icon--file-google-presentation-small:after {
  background-color: #f4b400;
}
.c-icon--file-google-presentation-tiny:before {
  content: '\\E4F5';
  color: #f4b400;
}
.c-icon--file-google-presentation-tiny:after {
  background-color: #f4b400;
}
.c-icon--file-google-spreadsheet:before {
  content: '\\E472';
  color: #0f9d58;
}
.c-icon--file-google-spreadsheet:after {
  background-color: #0f9d58;
}
.c-icon--file-google-spreadsheet-small:before {
  content: '\\E473';
  color: #0f9d58;
}
.c-icon--file-google-spreadsheet-small:after {
  background-color: #0f9d58;
}
.c-icon--file-google-spreadsheet-tiny:before {
  content: '\\E4F5';
  color: #0f9d58;
}
.c-icon--file-google-spreadsheet-tiny:after {
  background-color: #0f9d58;
}
.c-icon--file-google-document:before {
  content: '\\E472';
  color: #4285f4;
}
.c-icon--file-google-document:after {
  background-color: #4285f4;
}
.c-icon--file-google-document-small:before {
  content: '\\E473';
  color: #4285f4;
}
.c-icon--file-google-document-small:after {
  background-color: #4285f4;
}
.c-icon--file-google-document-tiny:before {
  content: '\\E4F5';
  color: #4285f4;
}
.c-icon--file-google-document-tiny:after {
  background-color: #4285f4;
}
.c-icon--file-google-form:before {
  content: '\\E472';
  color: #db4437;
}
.c-icon--file-google-form:after {
  background-color: #db4437;
}
.c-icon--file-google-form-small:before {
  content: '\\E473';
  color: #db4437;
}
.c-icon--file-google-form-small:after {
  background-color: #db4437;
}
.c-icon--file-google-form-tiny:before {
  content: '\\E4F5';
  color: #db4437;
}
.c-icon--file-google-form-tiny:after {
  background-color: #db4437;
}
.c-icon--file-qtz:before {
  content: '\\E474';
  color: #3aa3e3;
}
.c-icon--file-qtz:after {
  background-color: #3aa3e3;
}
.c-icon--file-qtz-small:before {
  content: '\\E475';
  color: #3aa3e3;
}
.c-icon--file-qtz-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-qtz-tiny:before {
  content: '\\E4F6';
  color: #3aa3e3;
}
.c-icon--file-qtz-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-sketch:before {
  content: '\\E476';
  color: #f4993c;
}
.c-icon--file-sketch:after {
  background-color: #f4993c;
}
.c-icon--file-sketch-small:before {
  content: '\\E477';
  color: #f4993c;
}
.c-icon--file-sketch-small:after {
  background-color: #f4993c;
}
.c-icon--file-sketch-tiny:before {
  content: '\\E4F7';
  color: #f4993c;
}
.c-icon--file-sketch-tiny:after {
  background-color: #f4993c;
}
.c-icon--file-figma-tiny:before {
  content: '\\E4F8';
  color: #1d1c1d;
}
.c-icon--file-figma-tiny:after {
  background-color: #1d1c1d;
}
/*
 * PLASTIC
 * Fonts
 * Site-wide fonts and helpers
 */
@font-face {
  font-family: 'appleLogo';
  src: local('Lucida Grande');
  unicode-range: U+F8FF;
}
/* Double-quotes are required to get Helvetica Neue to load properly */
/*
 * Explanation of font-family choice / sequence ...
 * consolas is a MSFT font included with Windows XP and is designed for legibility,
 * ClearType-friendly etc. https://en.wikipedia.org/wiki/Consolas
 * \`courier\` is next as it looks nice on the Mac, which won't have Consolas.
 * there is \`Menlo\` on the Mac, but it's quite tall and long compared to courier.
 * as a fallback, \`monospace\` is the generic family we want to render snippets with.
 */
/*
 * PLASTIC
 * Utilities
 * Mixins for common styles.
 *
 * To be used in other stylesheets in the form:
 * .selector {
 *     .name_of_mixin;
 * }
 *
 * plastic_helpers.source.less defines helper classes for these mixins, to be used as inline classes in markup:
 * <div class="name_of_helper"></div>
 *
 */
/* Font Size Mixin
 * For example:
 * 	.font_size(16px);		// 16 is in px unit and will output in rem unit: \`font-size: 1rem;\`
*/
/* Line Height Mixin
 * For example:
 * 	.line_height(24px);	// 24 is in px unit and will output in rem unit: \`line-height: 1.5rem;\`
*/
.tiny {
  font-size: 0.7rem;
}
.small {
  font-size: 0.9rem;
}
.SettingsEditor {
  background: white;
  font-family: Slack-Lato, Lucida Grande, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
}
.SettingsEditor header {
  position: fixed;
  background-color: #f8f8f8;
  padding: 8px;
  border-bottom: 1px solid #e2e2e2;
  text-align: center;
  width: 100%;
}
.SettingsEditor button {
  background: #007a5a;
  color: #fff;
  line-height: 1.2rem;
  font-weight: 900;
  cursor: pointer;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.25rem;
  box-shadow: none;
  padding: 8px 14px 9px;
  font-size: 15px;
  font-family: NotoSansJP, Slack-Lato, appleLogo, sans-serif;
  width: 150px;
  margin-right: 20px;
  transition: background-color 0.5s;
}
.SettingsEditor button:focus,
.SettingsEditor button:hover {
  box-shadow: inset 0 -2px rgba(0, 0, 0, 0.25);
  outline: none;
}
.SettingsEditor button:active {
  background-color: #9ecebb;
}
.SettingsEditor table#settings {
  display: inline-block;
  margin: 53px 0 0 0;
  height: 100%;
  width: 100%;
  overflow: scroll;
  border-collapse: collapse;
}
.SettingsEditor table#settings thead tr {
  position: sticky;
  top: 0;
  background-color: #f8f8f8;
}
.SettingsEditor table#settings tr.settings-row {
  white-space: nowrap;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
}
.SettingsEditor table#settings tr.settings-row td label.computed-value {
  display: block;
  max-width: 300px;
  overflow: scroll;
}
.SettingsEditor table#settings tr.settings-row td input {
  flex-grow: 1;
  font-family: Consolas, Monaco, 'Lucida Console', monospace;
}
.SettingsEditor table#settings tr.settings-row td input,
.SettingsEditor table#settings tr.settings-row td select {
  background-color: transparent;
  border: 1px solid #ddd;
}
.SettingsEditor table#settings tr.settings-row td:first-child {
  padding-left: 5px;
}
.SettingsEditor table#settings tr.settings-row:first-child {
  border-top: none;
}
.SettingsEditor table#settings tr.settings-row:last-child {
  border-bottom: none;
}
.SettingsEditor table#settings #feature-flags {
  width: 100%;
}
.SettingsEditor table#settings td.highlight {
  background: #fcf4da;
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/settings-editor.less","webpack://./src/resources/lato.less","webpack://./src/resources/slack-icons-font.less","webpack://./src/resources/plastic/plastic_typography.less","webpack://./src/resources/plastic/plastic_utilities.less"],names:[],mappings:"AAAA;;;;;;;;;;CAUC;AACD,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,YAAY;ACGZ;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,SAAS;ACGT;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,mBAAmB;ACGnB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,gBAAgB;ACGhB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AElEA;EAEE,uBAAA;EACA,4DAAA;EACA,kBAAA;EACA,gBAAA;AFmEF;AEvDA;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AFyDF;AExDE;EAfA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;AF0EF;AExDA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;AF0DF;AEzDE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;AF2DJ;AEzDE;EAEE,gBAAA;AF0DJ;AEnDA;EACE,UAAA;AFqDF;AEpDE;EACE,kBAAA;AFsDJ;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEknBA;EAEE,WAAA;AFjnBF;AEsmBE;EACE,gBAAA;EACA,cAAA;AFpmBJ;AEsmBE;EACE,yBAAA;AFpmBJ;AE4mBE;EACE,eAAA;AF1mBJ;AE8mBA;EAEE,WAAA;AF7mBF;AEylBE;EACE,gBAAA;EACA,cAAA;AFvlBJ;AEylBE;EACE,yBAAA;AFvlBJ;AEwmBE;EACE,eAAA;AFtmBJ;AE0mBA;EAEE,WAAA;AFzmBF;AE4kBE;EACE,gBAAA;EACA,cAAA;AF1kBJ;AE4kBE;EACE,yBAAA;AF1kBJ;AEomBE;EACE,eAAA;AFlmBJ;AEkkBE;EACE,gBAAA;EACA,cAAA;AFhkBJ;AEkkBE;EACE,yBAAA;AFhkBJ;AE2jBE;EACE,gBAAA;EACA,cAAA;AFzjBJ;AE2jBE;EACE,yBAAA;AFzjBJ;AEojBE;EACE,gBAAA;EACA,cAAA;AFljBJ;AEojBE;EACE,yBAAA;AFljBJ;AE6iBE;EACE,gBAAA;EACA,cAAA;AF3iBJ;AE6iBE;EACE,yBAAA;AF3iBJ;AEsiBE;EACE,gBAAA;EACA,cAAA;AFpiBJ;AEsiBE;EACE,yBAAA;AFpiBJ;AE+hBE;EACE,gBAAA;EACA,cAAA;AF7hBJ;AE+hBE;EACE,yBAAA;AF7hBJ;AEwhBE;EACE,gBAAA;EACA,cAAA;AFthBJ;AEwhBE;EACE,yBAAA;AFthBJ;AEihBE;EACE,gBAAA;EACA,cAAA;AF/gBJ;AEihBE;EACE,yBAAA;AF/gBJ;AE0gBE;EACE,gBAAA;EACA,cAAA;AFxgBJ;AE0gBE;EACE,yBAAA;AFxgBJ;AEmgBE;EACE,gBAAA;EACA,cAAA;AFjgBJ;AEmgBE;EACE,yBAAA;AFjgBJ;AE4fE;EACE,gBAAA;EACA,cAAA;AF1fJ;AE4fE;EACE,yBAAA;AF1fJ;AEqfE;EACE,gBAAA;EACA,cAAA;AFnfJ;AEqfE;EACE,yBAAA;AFnfJ;AE8eE;EACE,gBAAA;EACA,cAAA;AF5eJ;AE8eE;EACE,yBAAA;AF5eJ;AEueE;EACE,gBAAA;EACA,cAAA;AFreJ;AEueE;EACE,yBAAA;AFreJ;AEgeE;EACE,gBAAA;EACA,cAAA;AF9dJ;AEgeE;EACE,yBAAA;AF9dJ;AEydE;EACE,gBAAA;EACA,cAAA;AFvdJ;AEydE;EACE,yBAAA;AFvdJ;AEkdE;EACE,gBAAA;EACA,cAAA;AFhdJ;AEkdE;EACE,yBAAA;AFhdJ;AE2cE;EACE,gBAAA;EACA,cAAA;AFzcJ;AE2cE;EACE,yBAAA;AFzcJ;AEocE;EACE,gBAAA;EACA,cAAA;AFlcJ;AEocE;EACE,yBAAA;AFlcJ;AE6bE;EACE,gBAAA;EACA,cAAA;AF3bJ;AE6bE;EACE,yBAAA;AF3bJ;AEsbE;EACE,gBAAA;EACA,cAAA;AFpbJ;AEsbE;EACE,yBAAA;AFpbJ;AE+aE;EACE,gBAAA;EACA,cAAA;AF7aJ;AE+aE;EACE,yBAAA;AF7aJ;AEwaE;EACE,gBAAA;EACA,cAAA;AFtaJ;AEwaE;EACE,yBAAA;AFtaJ;AEiaE;EACE,gBAAA;EACA,cAAA;AF/ZJ;AEiaE;EACE,yBAAA;AF/ZJ;AE0ZE;EACE,gBAAA;EACA,cAAA;AFxZJ;AE0ZE;EACE,yBAAA;AFxZJ;AEmZE;EACE,gBAAA;EACA,cAAA;AFjZJ;AEmZE;EACE,yBAAA;AFjZJ;AE4YE;EACE,gBAAA;EACA,cAAA;AF1YJ;AE4YE;EACE,yBAAA;AF1YJ;AEqYE;EACE,gBAAA;EACA,cAAA;AFnYJ;AEqYE;EACE,yBAAA;AFnYJ;AE8XE;EACE,gBAAA;EACA,cAAA;AF5XJ;AE8XE;EACE,yBAAA;AF5XJ;AEuXE;EACE,gBAAA;EACA,cAAA;AFrXJ;AEuXE;EACE,yBAAA;AFrXJ;AEgXE;EACE,gBAAA;EACA,cAAA;AF9WJ;AEgXE;EACE,yBAAA;AF9WJ;AEyWE;EACE,gBAAA;EACA,cAAA;AFvWJ;AEyWE;EACE,yBAAA;AFvWJ;AEkWE;EACE,gBAAA;EACA,cAAA;AFhWJ;AEkWE;EACE,yBAAA;AFhWJ;AE2VE;EACE,gBAAA;EACA,cAAA;AFzVJ;AE2VE;EACE,yBAAA;AFzVJ;AEoVE;EACE,gBAAA;EACA,cAAA;AFlVJ;AEoVE;EACE,yBAAA;AFlVJ;AE6UE;EACE,gBAAA;EACA,cAAA;AF3UJ;AE6UE;EACE,yBAAA;AF3UJ;AEsUE;EACE,gBAAA;EACA,cAAA;AFpUJ;AEsUE;EACE,yBAAA;AFpUJ;AE+TE;EACE,gBAAA;EACA,cAAA;AF7TJ;AE+TE;EACE,yBAAA;AF7TJ;AEwTE;EACE,gBAAA;EACA,cAAA;AFtTJ;AEwTE;EACE,yBAAA;AFtTJ;AEiTE;EACE,gBAAA;EACA,cAAA;AF/SJ;AEiTE;EACE,yBAAA;AF/SJ;AE0SE;EACE,gBAAA;EACA,cAAA;AFxSJ;AE0SE;EACE,yBAAA;AFxSJ;AEmSE;EACE,gBAAA;EACA,cAAA;AFjSJ;AEmSE;EACE,yBAAA;AFjSJ;AE4RE;EACE,gBAAA;EACA,cAAA;AF1RJ;AE4RE;EACE,yBAAA;AF1RJ;AEqRE;EACE,gBAAA;EACA,cAAA;AFnRJ;AEqRE;EACE,yBAAA;AFnRJ;AE8QE;EACE,gBAAA;EACA,cAAA;AF5QJ;AE8QE;EACE,yBAAA;AF5QJ;AEuQE;EACE,gBAAA;EACA,cAAA;AFrQJ;AEuQE;EACE,yBAAA;AFrQJ;AEgQE;EACE,gBAAA;EACA,cAAA;AF9PJ;AEgQE;EACE,yBAAA;AF9PJ;AEyPE;EACE,gBAAA;EACA,cAAA;AFvPJ;AEyPE;EACE,yBAAA;AFvPJ;AEkPE;EACE,gBAAA;EACA,cAAA;AFhPJ;AEkPE;EACE,yBAAA;AFhPJ;AE2OE;EACE,gBAAA;EACA,cAAA;AFzOJ;AE2OE;EACE,yBAAA;AFzOJ;AEoOE;EACE,gBAAA;EACA,cAAA;AFlOJ;AEoOE;EACE,yBAAA;AFlOJ;AE6NE;EACE,gBAAA;EACA,cAAA;AF3NJ;AE6NE;EACE,yBAAA;AF3NJ;AEsNE;EACE,gBAAA;EACA,cAAA;AFpNJ;AEsNE;EACE,yBAAA;AFpNJ;AE+ME;EACE,gBAAA;EACA,cAAA;AF7MJ;AE+ME;EACE,yBAAA;AF7MJ;AEwME;EACE,gBAAA;EACA,cAAA;AFtMJ;AEwME;EACE,yBAAA;AFtMJ;AEiME;EACE,gBAAA;EACA,cAAA;AF/LJ;AEiME;EACE,yBAAA;AF/LJ;AE0LE;EACE,gBAAA;EACA,cAAA;AFxLJ;AE0LE;EACE,yBAAA;AFxLJ;AEmLE;EACE,gBAAA;EACA,cAAA;AFjLJ;AEmLE;EACE,yBAAA;AFjLJ;AE4KE;EACE,gBAAA;EACA,cAAA;AF1KJ;AE4KE;EACE,yBAAA;AF1KJ;AEqKE;EACE,gBAAA;EACA,cAAA;AFnKJ;AEqKE;EACE,yBAAA;AFnKJ;AE8JE;EACE,gBAAA;EACA,cAAA;AF5JJ;AE8JE;EACE,yBAAA;AF5JJ;AEuJE;EACE,gBAAA;EACA,cAAA;AFrJJ;AEuJE;EACE,yBAAA;AFrJJ;AEgJE;EACE,gBAAA;EACA,cAAA;AF9IJ;AEgJE;EACE,yBAAA;AF9IJ;AEyIE;EACE,gBAAA;EACA,cAAA;AFvIJ;AEyIE;EACE,yBAAA;AFvIJ;AEkIE;EACE,gBAAA;EACA,cAAA;AFhIJ;AEkIE;EACE,yBAAA;AFhIJ;AE2HE;EACE,gBAAA;EACA,cAAA;AFzHJ;AE2HE;EACE,yBAAA;AFzHJ;AEoHE;EACE,gBAAA;EACA,cAAA;AFlHJ;AEoHE;EACE,yBAAA;AFlHJ;AE6GE;EACE,gBAAA;EACA,cAAA;AF3GJ;AE6GE;EACE,yBAAA;AF3GJ;AEsGE;EACE,gBAAA;EACA,cAAA;AFpGJ;AEsGE;EACE,yBAAA;AFpGJ;AE+FE;EACE,gBAAA;EACA,cAAA;AF7FJ;AE+FE;EACE,yBAAA;AF7FJ;AEwFE;EACE,gBAAA;EACA,cAAA;AFtFJ;AEwFE;EACE,yBAAA;AFtFJ;AEiFE;EACE,gBAAA;EACA,cAAA;AF/EJ;AEiFE;EACE,yBAAA;AF/EJ;AE0EE;EACE,gBAAA;EACA,cAAA;AFxEJ;AE0EE;EACE,yBAAA;AFxEJ;AEmEE;EACE,gBAAA;EACA,cAAA;AFjEJ;AEmEE;EACE,yBAAA;AFjEJ;AE4DE;EACE,gBAAA;EACA,cAAA;AF1DJ;AE4DE;EACE,yBAAA;AF1DJ;AEqDE;EACE,gBAAA;EACA,cAAA;AFnDJ;AEqDE;EACE,yBAAA;AFnDJ;AE8CE;EACE,gBAAA;EACA,cAAA;AF5CJ;AE8CE;EACE,yBAAA;AF5CJ;AEuCE;EACE,gBAAA;EACA,cAAA;AFrCJ;AEuCE;EACE,yBAAA;AFrCJ;AEgCE;EACE,gBAAA;EACA,cAAA;AF9BJ;AEgCE;EACE,yBAAA;AF9BJ;AEyBE;EACE,gBAAA;EACA,cAAA;AFvBJ;AEyBE;EACE,yBAAA;AFvBJ;AEkBE;EACE,gBAAA;EACA,cAAA;AFhBJ;AEkBE;EACE,yBAAA;AFhBJ;AEWE;EACE,gBAAA;EACA,cAAA;AFTJ;AEWE;EACE,yBAAA;AFTJ;AEIE;EACE,gBAAA;EACA,cAAA;AFFJ;AEIE;EACE,yBAAA;AFFJ;AEHE;EACE,gBAAA;EACA,cAAA;AFKJ;AEHE;EACE,yBAAA;AFKJ;AEVE;EACE,gBAAA;EACA,cAAA;AFYJ;AEVE;EACE,yBAAA;AFYJ;AEjBE;EACE,gBAAA;EACA,cAAA;AFmBJ;AEjBE;EACE,yBAAA;AFmBJ;AExBE;EACE,gBAAA;EACA,cAAA;AF0BJ;AExBE;EACE,yBAAA;AF0BJ;AE/BE;EACE,gBAAA;EACA,cAAA;AFiCJ;AE/BE;EACE,yBAAA;AFiCJ;AEtCE;EACE,gBAAA;EACA,cAAA;AFwCJ;AEtCE;EACE,yBAAA;AFwCJ;AE7CE;EACE,gBAAA;EACA,cAAA;AF+CJ;AE7CE;EACE,yBAAA;AF+CJ;AEpDE;EACE,gBAAA;EACA,cAAA;AFsDJ;AEpDE;EACE,yBAAA;AFsDJ;AE3DE;EACE,gBAAA;EACA,cAAA;AF6DJ;AE3DE;EACE,yBAAA;AF6DJ;AElEE;EACE,gBAAA;EACA,cAAA;AFoEJ;AElEE;EACE,yBAAA;AFoEJ;AEzEE;EACE,gBAAA;EACA,cAAA;AF2EJ;AEzEE;EACE,yBAAA;AF2EJ;AEhFE;EACE,gBAAA;EACA,cAAA;AFkFJ;AEhFE;EACE,yBAAA;AFkFJ;AEvFE;EACE,gBAAA;EACA,cAAA;AFyFJ;AEvFE;EACE,yBAAA;AFyFJ;AE9FE;EACE,gBAAA;EACA,cAAA;AFgGJ;AE9FE;EACE,yBAAA;AFgGJ;AErGE;EACE,gBAAA;EACA,cAAA;AFuGJ;AErGE;EACE,yBAAA;AFuGJ;AE5GE;EACE,gBAAA;EACA,cAAA;AF8GJ;AE5GE;EACE,yBAAA;AF8GJ;AEnHE;EACE,gBAAA;EACA,cAAA;AFqHJ;AEnHE;EACE,yBAAA;AFqHJ;AE1HE;EACE,gBAAA;EACA,cAAA;AF4HJ;AE1HE;EACE,yBAAA;AF4HJ;AEjIE;EACE,gBAAA;EACA,cAAA;AFmIJ;AEjIE;EACE,yBAAA;AFmIJ;AExIE;EACE,gBAAA;EACA,cAAA;AF0IJ;AExIE;EACE,yBAAA;AF0IJ;AE/IE;EACE,gBAAA;EACA,cAAA;AFiJJ;AE/IE;EACE,yBAAA;AFiJJ;AEtJE;EACE,gBAAA;EACA,cAAA;AFwJJ;AEtJE;EACE,yBAAA;AFwJJ;AE7JE;EACE,gBAAA;EACA,cAAA;AF+JJ;AE7JE;EACE,yBAAA;AF+JJ;AEpKE;EACE,gBAAA;EACA,cAAA;AFsKJ;AEpKE;EACE,yBAAA;AFsKJ;AE3KE;EACE,gBAAA;EACA,cAAA;AF6KJ;AE3KE;EACE,yBAAA;AF6KJ;AElLE;EACE,gBAAA;EACA,cAAA;AFoLJ;AElLE;EACE,yBAAA;AFoLJ;AEzLE;EACE,gBAAA;EACA,cAAA;AF2LJ;AEzLE;EACE,yBAAA;AF2LJ;AEhME;EACE,gBAAA;EACA,cAAA;AFkMJ;AEhME;EACE,yBAAA;AFkMJ;AEvME;EACE,gBAAA;EACA,cAAA;AFyMJ;AEvME;EACE,yBAAA;AFyMJ;AE9ME;EACE,gBAAA;EACA,cAAA;AFgNJ;AE9ME;EACE,yBAAA;AFgNJ;AErNE;EACE,gBAAA;EACA,cAAA;AFuNJ;AErNE;EACE,yBAAA;AFuNJ;AE5NE;EACE,gBAAA;EACA,cAAA;AF8NJ;AE5NE;EACE,yBAAA;AF8NJ;AEnOE;EACE,gBAAA;EACA,cAAA;AFqOJ;AEnOE;EACE,yBAAA;AFqOJ;AE1OE;EACE,gBAAA;EACA,cAAA;AF4OJ;AE1OE;EACE,yBAAA;AF4OJ;AEjPE;EACE,gBAAA;EACA,cAAA;AFmPJ;AEjPE;EACE,yBAAA;AFmPJ;AExPE;EACE,gBAAA;EACA,cAAA;AF0PJ;AExPE;EACE,yBAAA;AF0PJ;AE/PE;EACE,gBAAA;EACA,cAAA;AFiQJ;AE/PE;EACE,yBAAA;AFiQJ;AEtQE;EACE,gBAAA;EACA,cAAA;AFwQJ;AEtQE;EACE,yBAAA;AFwQJ;AE7QE;EACE,gBAAA;EACA,cAAA;AF+QJ;AE7QE;EACE,yBAAA;AF+QJ;AEpRE;EACE,gBAAA;EACA,cAAA;AFsRJ;AEpRE;EACE,yBAAA;AFsRJ;AE3RE;EACE,gBAAA;EACA,cAAA;AF6RJ;AE3RE;EACE,yBAAA;AF6RJ;AACA;;;;EAIE;AG/xFD;EAEQ,wBAAA;EACc,2BAAA;EACE,qBAAA;AHgyFzB;AACA,sEAAsE;AACtE;;;;;;;EAOE;AACF;;;;;;;;;;;;;EAaE;AACF;;;CAGC;AACD;;;CAGC;AI9uFE;EAAU,iBAAA;AJivFb;AIhvFkB;EAAW,iBAAA;AJmvF7B;AAr0FA;EACE,iBAAA;EACA,kDAAA;EAEA,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,aAAA;AAs0FF;AA70FA;EAUI,eAAA;EACA,yBAAA;EACA,YAAA;EACA,gCAAA;EACA,kBAAA;EACA,WAAA;AAs0FJ;AAr1FA;EAmBI,mBAAA;EACA,WAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,yCAAA;EACA,YAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,0DAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;AAq0FJ;AAt2FA;;EAsCI,4CAAA;EACA,aAAA;AAo0FJ;AA32FA;EA2CI,yBAAA;AAm0FJ;AA92FA;EA+CI,qBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,yBAAA;AAk0FJ;AAt3FA;EAuDM,gBAAA;EACA,MAAA;EACA,yBAAA;AAk0FN;AA33FA;EA6DM,mBAAA;EACA,6BAAA;EACA,gCAAA;AAi0FN;AAh4FA;EAkEU,cAAA;EACA,gBAAA;EACA,gBAAA;AAi0FV;AAr4FA;EAuEU,YAAA;EACA,0DAAA;AAi0FV;AAz4FA;;EA4EU,6BAAA;EACA,sBAAA;AAi0FV;AA/zFQ;EACE,iBAAA;AAi0FV;AAj5FA;EAsFM,gBAAA;AA8zFN;AAp5FA;EA0FM,mBAAA;AA6zFN;AAv5FA;EA8FM,WAAA;AA4zFN;AA15FA;EAkGM,mBAAA;AA2zFN",sourcesContent:[`@import '../../resources/lato.less';
@import '../../resources/slack-icons-font.less';
@import '../../resources/plastic/plastic_colors.less';
@import '../../resources/plastic/plastic_typography.less';
@import '../../resources/plastic/plastic_utilities.less';

@settings-font-family: Slack-Lato, Lucida Grande, sans-serif;

.SettingsEditor {
  background: white;
  font-family: @settings-font-family;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;

  header {
    position: fixed;
    background-color: @sk_off_white_hex;
    padding: 8px;
    border-bottom: 1px solid #e2e2e2;
    text-align: center;
    width: 100%;
  }

  button {
    background: @sk_seafoam_green;
    color: #fff;
    line-height: 1.2rem;
    font-weight: 900;
    cursor: pointer;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 0.25rem;
    box-shadow: none;
    padding: 8px 14px 9px;
    font-size: 15px;
    font-family: NotoSansJP, Slack-Lato, appleLogo, sans-serif;
    width: 150px;
    margin-right: 20px;
    transition: background-color 0.5s;
  }

  button:focus,
  button:hover {
    box-shadow: inset 0 -2px rgba(0, 0, 0, 0.25);
    outline: none;
  }

  button:active {
    background-color: rgb(158, 206, 187);
  }

  table#settings {
    display: inline-block;
    margin: 53px 0 0 0;
    height: 100%;
    width: 100%;
    overflow: scroll;
    border-collapse: collapse;

    thead tr {
      position: sticky;
      top: 0;
      background-color: @sk_off_white_hex;
    }

    tr.settings-row {
      white-space: nowrap;
      border-top: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
      td {
        label.computed-value {
          display: block;
          max-width: 300px;
          overflow: scroll;
        }
        input {
          flex-grow: 1;
          font-family: Consolas, Monaco, 'Lucida Console', monospace;
        }
        input,
        select {
          background-color: transparent;
          border: 1px solid @sk_soft_grey_hex;
        }
        &:first-child {
          padding-left: 5px;
        }
      }
    }

    tr.settings-row:first-child {
      border-top: none;
    }

    tr.settings-row:last-child {
      border-bottom: none;
    }

    #feature-flags {
      width: 100%;
    }

    td.highlight {
      background: @sk_mention_yellow;
    }
  }
}
`,`/*

This is a smaller variant of the new Lato2, serving compressed woff2 files.

Currently: TS-Only
Clients needs to have Lato2 pref turned ON.

The payload is 50% smaller. However, woff2 is not yet well supported,
so we're still providing the woff as fallback.

*/

/* Light */

@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 300;
  src: url(./fonts/woff2/lato-light.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 400;
  src: url(./fonts/woff2/lato-regular.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 700;
  src: url(./fonts/woff2/lato-bold.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 900;
  src: url(./fonts/woff2/lato-black.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Light Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 300;
  src: url(./fonts/woff2/lato-italic-light.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 400;
  src: url(./fonts/woff2/lato-italic.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 700;
  src: url(./fonts/woff2/lato-italic-bold.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 900;
  src: url(./fonts/woff2/lato-italic-black.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
`,`// This file is an adapted version of Slack Icons v2,
// stripped down for desktop needs. This surgery was necessary
// so that we can use the new Slack icons without carrying around
// all of Slack Kit.
@import 'plastic/plastic_utilities.less';

@c-icon_default_size: 20px;

@font-face {
  // This is the new icon font with square boxes for better default alignment
  font-family: 'Slack v2';
  src: url(./fonts/slack-icons-v2.woff2) format('woff2');
  font-style: normal;
  font-weight: 400;
}

.t-icon(@size: 20px) {
  font-family: 'Slack v2';
  font-size: @size;
  font-style: normal;
  font-weight: normal;
  display: inline-block;
  vertical-align: middle;
}

.c-icon {
  position: relative;
  display: inline-flex;
  width: @c-icon_default_size;
  height: @c-icon_default_size;
  align-items: center;
  justify-content: center;
  &:before {
    .t-icon(@c-icon_default_size);
  }
}

// -------------------------------------------------------
// Inline with Text Variation
// -------------------------------------------------------
.c-icon--inline {
  width: @c-icon_default_size;
  height: auto;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.5em;
    margin-left: -0.5em;
    width: 1em;
    height: 1em;
  }
  &:after {
    // Zero-width space
    content: '\\200B';
  }
}

// -------------------------------------------------------
// Inherit Font Size Variation
// -------------------------------------------------------
.c-icon--inherit {
  width: 1em;
  &:before {
    font-size: inherit;
  }
}

// -------------------------------------------------------
// Animated Variations
//
// DISABLED since we currently don't need them. Uncomment
// when you do!
//
// -------------------------------------------------------
// // Spin
// .t-keyframes(@instance_name; @global_name) when (@global_name = spin) {
//   @keyframes @instance_name {
//       0% {
//           transform: rotate(0deg);
//       }
//       100% {
//           transform: rotate(360deg);
//       }
//   }
// }

// // Fade
// .t-keyframes(@instance_name; @global_name) when (@global_name = fade) {
//   @keyframes @instance_name {
//       from { opacity: 0; }
//       to { opacity: 1; }
//   }
// }

// .c-icon--spin:before {
//   .t-keyframes(c-icon--spin, spin);
//   .t-animation(c-icon--spin);
// }

// -------------------------------------------------------
// Character definitions
// -------------------------------------------------------
@icon-star-o: '\\E001';
@icon-unstar-o: '\\E002';
@icon-user: '\\E003';
@icon-comment-alt: '\\E004';
@icon-comment-o: '\\E005';
@icon-home: '\\E006';
@icon-info: '\\E007';
@icon-channel-info: '\\E008';
@icon-info-circle: '\\E008';
@icon-mentions: '\\E009';
@icon-gn-menu: '\\E00A';
@icon-search: '\\E010';
@icon-bolt: '\\E011';
@icon-mobile: '\\E012';
@icon-tablet: '\\E013';
@icon-laptop: '\\E014';
@icon-bell-o: '\\E015';
@icon-bell-slash: '\\E016';
@icon-team-directory: '\\E017';
@icon-cloud-upload: '\\E018';
@icon-cloud-download: '\\E019';
@icon-bolt-add: '\\E01A';
@icon-search-medium: '\\E01B';
@icon-cog-o: '\\E020';
@icon-cogs: '\\E021';
@icon-key: '\\E022';
@icon-calendar: '\\E023';
@icon-pencil: '\\E024';
@icon-lightbulb-o: '\\E025';
@icon-magic: '\\E026';
@icon-external-link: '\\E027';
@icon-external-link-square: '\\E028';
@icon-lock-o: '\\E029';
@icon-unlock: '\\E030';
@icon-folder: '\\E031';
@icon-folder-open: '\\E032';
@icon-archive: '\\E033';
@icon-inbox: '\\E034';
@icon-sitemap: '\\E035';
@icon-book: '\\E036';
@icon-envelope-o: '\\E037';
@icon-image: '\\E038';
@icon-building: '\\E039';
@icon-plug: '\\E040';
@icon-paper-plane: '\\E041';
@icon-credit-card: '\\E042';
@icon-life-ring: '\\E043';
@icon-thumb-tack: '\\E044';
@icon-trash: '\\E045';
@icon-print: '\\E046';
@icon-quote-o: '\\E047';
@icon-th-large: '\\E048';
@icon-eye: '\\E049';
@icon-eye-closed: '\\E050';
@icon-volume-off: '\\E051';
@icon-volume-down: '\\E052';
@icon-volume-medium: '\\E053';
@icon-volume-up: '\\E054';
@icon-volume-off-alt: '\\E055';
@icon-heart-o: '\\E056';
@icon-wrench: '\\E057';
@icon-file: '\\E058';
@icon-all-files: '\\E059';
@icon-img-left: '\\E05A';
@icon-img-center: '\\E05B';
@icon-img-right: '\\E05C';
@icon-img-fullbleed: '\\E05D';
@icon-img-fullwidth: '\\E05D';
@icon-your-files: '\\E060';
@icon-align-left: '\\E061';
@icon-align-center: '\\E062';
@icon-align-right: '\\E063';
@icon-align-justify: '\\E064';
@icon-paragraph: '\\E065';
@icon-code: '\\E066';
@icon-ellipsis: '\\E067';
@icon-ellipsis-baseline: '\\E068';
@icon-spinner: '\\E069';
@icon-spiral: '\\E070';
@icon-random: '\\E071';
@icon-repeat: '\\E072';
@icon-share-square-o: '\\E073';
@icon-link: '\\E074';
@icon-undo: '\\E075';
@icon-history: '\\E076';
@icon-hourglass-empty: '\\E077';
@icon-hourglass: '\\E078';
@icon-clock-o: '\\E079';
@icon-dashboard: '\\E080';
@icon-power-off: '\\E081';
@icon-sign-in: '\\E082';
@icon-sign-out: '\\E083';
@icon-jump: '\\E084';
@icon-globe: '\\E085';
@icon-filter: '\\E086';
@icon-microphone: '\\E087';
@icon-microphone-slash: '\\E088';
@icon-paperclip: '\\E089';
@icon-video-camera: '\\E090';
@icon-stop-video: '\\E091';
@icon-phone: '\\E092';
@icon-unarchive: '\\E093';
@icon-smile-o: '\\E094';
@icon-share-screen: '\\E095';
@icon-stop-screen-sharing: '\\E096';
@icon-stop-screen-sharing-alt: '\\E097';
@icon-feedback: '\\E098';
@icon-paper-plane-alt: '\\E099';
@icon-cloud-offline: '\\E0A0';
@icon-cloud-offline-small: '\\E0A1';
@icon-filters: '\\E0A2';
@icon-lock-large: '\\E0A3';
@icon-checkbox-empty: '\\E0A4';
@icon-input-file: '\\E0A5';
@icon-input-fullscreen: '\\E0A6';
@icon-input-img: '\\E0A7';
@icon-input-integration: '\\E0A8';
@icon-share: '\\E100';
@icon-save: '\\E101';
@icon-message-notification: '\\E102';
@icon-list: '\\E103';
@icon-channel: '\\E104';
@icon-share-other-alt: '\\E105';
@icon-broadcast: '\\E106';
@icon-all-files-alt: '\\E107';
@icon-search-files: '\\E108';
@icon-add-user: '\\E109';
@icon-switch-team: '\\E110';
@icon-create-snippet: '\\E111';
@icon-create-post: '\\E112';
@icon-upload: '\\E113';
@icon-download: '\\E114';
@icon-share-email: '\\E115';
@icon-import-email: '\\E116';
@icon-ellipsis-o: '\\E117';
@icon-add-reaction: '\\E118';
@icon-happy-smile: '\\E119';
@icon-quote-post: '\\E120';
@icon-camera: '\\E121';
@icon-phone-flat: '\\E122';
@icon-sparkles: '\\E123';
@icon-location-pin: '\\E124';
@icon-channel-pane-hash: '\\E125';
@icon-emoji-nature: '\\E126';
@icon-emoji-food: '\\E127';
@icon-emoji-celebration: '\\E128';
@icon-emoji-activities: '\\E129';
@icon-emoji-travel: '\\E130';
@icon-emoji-objects: '\\E131';
@icon-pause: '\\E132';
@icon-file-gdrive: '\\E133';
@icon-play: '\\E134';
@icon-stream: '\\E135';
@icon-field-text: '\\E136';
@icon-poo: '\\E137';
@icon-channel-list: '\\E138';
@icon-share-android: '\\E139';
@icon-highlight: '\\E140';
@icon-flag: '\\E141';
@icon-grabby-patty: '\\E142';
@icon-backspace: '\\E143';
@icon-share-forward: '\\E144';
@icon-side-panel: '\\E145';
@icon-search-small: '\\E146';
@icon-reload-small: '\\E147';
@icon-vertical-ellipsis: '\\E148';
@icon-disable: '\\E149';
@icon-bold-hash-small: '\\E150';
@icon-cart: '\\E151';
@icon-snooze-outline: '\\E152';
@icon-new-window: '\\E153';
@icon-h1: '\\E154';
@icon-h2: '\\E155';
@icon-h3: '\\E156';
@icon-bullet-list: '\\E157';
@icon-numbered-list: '\\E158';
@icon-text-format-menu: '\\E159';
@icon-check-list: '\\E15A';
@icon-code-block: '\\E15B';
@icon-codeblock: '\\E15B';
@icon-bold: '\\E160';
@icon-italic: '\\E161';
@icon-underline: '\\E162';
@icon-strikethrough: '\\E163';
@icon-tag: '\\E164';
@icon-org-shared-channel: '\\E165';
@icon-shared-channel: '\\E166';
@icon-external-channel: '\\E167';
@icon-external-channel-square: '\\E168';
@icon-external-channel-triangle: '\\E169';
@icon-small-reaction: '\\E170';
@icon-small-reply: '\\E171';
@icon-small-ellipsis: '\\E172';
@icon-small-star: '\\E173';
@icon-small-quote: '\\E174';
@icon-keyboard: '\\E175';
@icon-share-action: '\\E176';
@icon-handset: '\\E177';
@icon-bluetooth-sound: '\\E178';
@icon-bluetooth: '\\E179';
@icon-bot: '\\E180';
@icon-globe-plus: '\\E181';
@icon-user-groups: '\\E182';
@icon-rocket: '\\E183';
@icon-mobile-notification: '\\E184';
@icon-desktop-notification: '\\E185';
@icon-collab-screenshare-on: '\\E186';
@icon-collab-screenshare-off: '\\E187';
@icon-thumbs-up: '\\E188';
@icon-thumbs-down: '\\E189';
@icon-bug: '\\E190';
@icon-mark-unread: '\\E191';
@icon-compose-dm: '\\E192';
@icon-invoice: '\\E193';
@icon-expand: '\\E200';
@icon-reduce: '\\E201';
@icon-arrows-alt: '\\E202';
@icon-reduce-alt: '\\E203';
@icon-check-square-o: '\\E204';
@icon-check-circle-o: '\\E205';
@icon-check-circle-o-large: '\\E206';
@icon-question: '\\E207';
@icon-exclamation: '\\E208';
@icon-warning: '\\E209';
@icon-exclamation-circle: '\\E210';
@icon-question-circle: '\\E211';
@icon-plus-circle: '\\E212';
@icon-minus-circle: '\\E213';
@icon-times-circle: '\\E214';
@icon-arrow-circle-o-up: '\\E215';
@icon-arrow-circle-o-down: '\\E216';
@icon-arrow-circle-o-right: '\\E217';
@icon-arrow-circle-o-left: '\\E218';
@icon-chevron-circle-left: '\\E219';
@icon-chevron-circle-right: '\\E220';
@icon-chevron-circle-down: '\\E221';
@icon-chevron-circle-up: '\\E222';
@icon-plus-circle-small: '\\E223';
@icon-circle-small: '\\E224';
@icon-circle-large: '\\E225';
@icon-navigate: '\\E226';
@icon-times-circle-small: '\\E227';
@icon-plus-circle-medium: '\\E228';
@icon-times-circle-medium: '\\E229';
@icon-square-warning: '\\E230';
@icon-square-question: '\\E231';
@icon-plus-square-o: '\\E232';
@icon-minus-square-o: '\\E233';
@icon-square-times: '\\E234';
@icon-square-arrow-up: '\\E235';
@icon-square-arrow-down: '\\E236';
@icon-square-arrow-right: '\\E237';
@icon-square-arrow-left: '\\E238';
@icon-square-chevron-left: '\\E239';
@icon-square-chevron-right: '\\E240';
@icon-square-chevron-down: '\\E241';
@icon-square-chevron-up: '\\E242';
@icon-chevron-right: '\\E250';
@icon-chevron-left: '\\E251';
@icon-chevron-down: '\\E252';
@icon-chevron-up: '\\E253';
@icon-chevron-medium-right: '\\E254';
@icon-chevron-medium-left: '\\E255';
@icon-chevron-medium-down: '\\E256';
@icon-chevron-medium-up: '\\E257';
@icon-chevron-large-right: '\\E258';
@icon-chevron-large-left: '\\E259';
@icon-chevron-large-up: '\\E260';
@icon-chevron-large-down: '\\E261';
@icon-arrow-large-right: '\\E262';
@icon-arrow-large-left: '\\E263';
@icon-arrow-large-up: '\\E264';
@icon-arrow-large-down: '\\E265';
@icon-caret-outline-left: '\\E266';
@icon-caret-outline-right: '\\E267';
@icon-caret-outline-up: '\\E268';
@icon-caret-outline-down: '\\E269';
@icon-caret-up: '\\E270';
@icon-caret-down: '\\E271';
@icon-caret-right: '\\E272';
@icon-caret-left: '\\E273';
@icon-angle-arrow-down-left: '\\E274';
@icon-angle-arrow-down-right: '\\E275';
@icon-angle-arrow-up-right: '\\E276';
@icon-angle-arrow-up-left: '\\E277';
@icon-times: '\\E278';
@icon-plus: '\\E279';
@icon-minus: '\\E280';
@icon-plus-small: '\\E281';
@icon-minus-small: '\\E282';
@icon-exclamation-small: '\\E283';
@icon-question-small: '\\E284';
@icon-check-small: '\\E285';
@icon-arrow-right: '\\E286';
@icon-arrow-left: '\\E287';
@icon-arrow-up: '\\E288';
@icon-arrow-down: '\\E289';
@icon-arrow-right-medium: '\\E290';
@icon-arrow-left-medium: '\\E291';
@icon-arrow-up-medium: '\\E292';
@icon-arrow-down-medium: '\\E293';
@icon-times-small: '\\E294';
@icon-sync: '\\E295';
@icon-replies: '\\E296';
@icon-angle-arrow-down-right-alt: '\\E297';
@icon-angle-arrow-up-right-alt: '\\E298';
@icon-angle-arrow-up-left-alt: '\\E299';
@icon-angle-arrow-down-left-alt: '\\E300';
@icon-check-small-bold: '\\E301';
@icon-enter: '\\E302';
@icon-expand-vertical: '\\E303';
@icon-collapse-vertical: '\\E304';
@icon-android-upload: '\\E305';
@icon-plus-thick: '\\E306';
@icon-arrow-ne-large: '\\E307';
@icon-arrow-nw-large: '\\E308';
@icon-arrow-sw-large: '\\E309';
@icon-arrow-se-large: '\\E310';
@icon-arrow-ne-medium: '\\E311';
@icon-arrow-nw-medium: '\\E312';
@icon-arrow-sw-medium: '\\E313';
@icon-arrow-se-medium: '\\E314';
@icon-arrow-ne-small: '\\E315';
@icon-arrow-nw-small: '\\E316';
@icon-arrow-sw-small: '\\E317';
@icon-arrow-se-small: '\\E318';
@icon-check-large-bold: '\\E319';
@icon-check-large: '\\E320';
@icon-times-medium: '\\E321';
@icon-real-checkbox-empty: '\\E322';
@icon-real-checkbox-checked: '\\E323';
@icon-real-checkbox-checked-o: '\\E324';
@icon-circle-checkbox-empty: '\\E325';
@icon-circle-checkbox-checked: '\\E326';
@icon-circle-checkbox-checked-o: '\\E327';
@icon-times-large: '\\E328';
@icon-file-generic: '\\E400';
@icon-file-generic-small: '\\E401';
@icon-file-spaces: '\\E402';
@icon-file-spaces-small: '\\E403';
@icon-file-image: '\\E404';
@icon-file-image-small: '\\E405';
@icon-file-pdf: '\\E406';
@icon-file-pdf-small: '\\E407';
@icon-file-audio: '\\E408';
@icon-file-audio-small: '\\E409';
@icon-file-video: '\\E410';
@icon-file-video-small: '\\E411';
@icon-file-presentation: '\\E412';
@icon-file-presentation-small: '\\E413';
@icon-file-email: '\\E414';
@icon-file-email-small: '\\E415';
@icon-file-vector: '\\E416';
@icon-file-vector-small: '\\E417';
@icon-file-spreadsheet: '\\E418';
@icon-file-spreadsheet-small: '\\E419';
@icon-file-media-archive: '\\E420';
@icon-file-media-archive-small: '\\E421';
@icon-file-archive: '\\E422';
@icon-file-archive-small: '\\E423';
@icon-file-executable: '\\E424';
@icon-file-executable-small: '\\E425';
@icon-file-disk-image: '\\E426';
@icon-file-disk-image-small: '\\E427';
@icon-file-cad: '\\E428';
@icon-file-cad-small: '\\E429';
@icon-file-3d-graphic: '\\E430';
@icon-file-3d-graphic-small: '\\E431';
@icon-file-database: '\\E432';
@icon-file-database-small: '\\E433';
@icon-file-binary: '\\E434';
@icon-file-binary-small: '\\E435';
@icon-file-markdown: '\\E436';
@icon-file-markdown-small: '\\E437';
@icon-file-text-post: '\\E438';
@icon-file-text-post-small: '\\E439';
@icon-file-html: '\\E440';
@icon-file-html-small: '\\E441';
@icon-file-code: '\\E442';
@icon-file-code-small: '\\E443';
@icon-file-css: '\\E444';
@icon-file-css-small: '\\E445';
@icon-file-php: '\\E446';
@icon-file-php-small: '\\E447';
@icon-file-snippet: '\\E448';
@icon-file-snippet-small: '\\E449';
@icon-file-word: '\\E450';
@icon-file-word-small: '\\E451';
@icon-file-excel: '\\E452';
@icon-file-excel-small: '\\E453';
@icon-file-powerpoint: '\\E454';
@icon-file-powerpoint-small: '\\E455';
@icon-file-illustrator: '\\E456';
@icon-file-illustrator-small: '\\E457';
@icon-file-photoshop: '\\E458';
@icon-file-photoshop-small: '\\E459';
@icon-file-indesign: '\\E460';
@icon-file-indesign-small: '\\E461';
@icon-file-adobe-flash: '\\E462';
@icon-file-adobe-flash-small: '\\E463';
@icon-file-adobe-swf: '\\E464';
@icon-file-adobe-swf-small: '\\E465';
@icon-file-iphone-app: '\\E466';
@icon-file-iphone-app-small: '\\E467';
@icon-file-android-app: '\\E468';
@icon-file-android-app-small: '\\E469';
@icon-file-dropbox: '\\E470';
@icon-file-dropbox-small: '\\E471';
@icon-file-google: '\\E472';
@icon-file-google-document: '\\E472';
@icon-file-google-form: '\\E472';
@icon-file-google-presentation: '\\E472';
@icon-file-google-spreadsheet: '\\E472';
@icon-file-google-document-small: '\\E473';
@icon-file-google-form-small: '\\E473';
@icon-file-google-presentation-small: '\\E473';
@icon-file-google-small: '\\E473';
@icon-file-google-spreadsheet-small: '\\E473';
@icon-file-qtz: '\\E474';
@icon-file-qtz-small: '\\E475';
@icon-file-sketch: '\\E476';
@icon-file-sketch-small: '\\E477';
@icon-calls: '\\E478';
@icon-calls-small: '\\E479';
@icon-calls-ended: '\\E480';
@icon-calls-ended-small: '\\E481';
@icon-file-figma: '\\E482';
@icon-file-figma-small: '\\E483';
@icon-file-generic-tiny: '\\E4A0';
@icon-file-spaces-tiny: '\\E4AA';
@icon-file-image-tiny: '\\E4AB';
@icon-file-pdf-tiny: '\\E4AC';
@icon-file-audio-tiny: '\\E4AD';
@icon-file-video-tiny: '\\E4AE';
@icon-file-presentation-tiny: '\\E4AF';
@icon-file-email-tiny: '\\E4BA';
@icon-file-vector-tiny: '\\E4BB';
@icon-file-spreadsheet-tiny: '\\E4BC';
@icon-file-media-archive-tiny: '\\E4BD';
@icon-file-archive-tiny: '\\E4BE';
@icon-file-executable-tiny: '\\E4BF';
@icon-file-disk-image-tiny: '\\E4CA';
@icon-file-cad-tiny: '\\E4CB';
@icon-file-3d-graphic-tiny: '\\E4CC';
@icon-file-database-tiny: '\\E4CD';
@icon-file-binary-tiny: '\\E4CE';
@icon-file-markdown-tiny: '\\E4CF';
@icon-file-text-post-tiny: '\\E4DA';
@icon-file-html-tiny: '\\E4DB';
@icon-file-code-tiny: '\\E4DC';
@icon-file-css-tiny: '\\E4DD';
@icon-file-php-tiny: '\\E4DE';
@icon-file-snippet-tiny: '\\E4DF';
@icon-file-word-tiny: '\\E4EA';
@icon-file-excel-tiny: '\\E4EB';
@icon-file-powerpoint-tiny: '\\E4EC';
@icon-file-illustrator-tiny: '\\E4ED';
@icon-file-photoshop-tiny: '\\E4EE';
@icon-file-indesign-tiny: '\\E4EF';
@icon-file-adobe-flash-tiny: '\\E4F0';
@icon-file-adobe-swf-tiny: '\\E4F1';
@icon-file-iphone-app-tiny: '\\E4F2';
@icon-file-android-app-tiny: '\\E4F3';
@icon-file-dropbox-tiny: '\\E4F4';
@icon-file-google-document-tiny: '\\E4F5';
@icon-file-google-form-tiny: '\\E4F5';
@icon-file-google-presentation-tiny: '\\E4F5';
@icon-file-google-spreadsheet-tiny: '\\E4F5';
@icon-file-google-tiny: '\\E4F5';
@icon-file-qtz-tiny: '\\E4F6';
@icon-file-sketch-tiny: '\\E4F7';
@icon-file-figma-tiny: '\\E4F8';
@icon-star: '\\E500';
@icon-unstar: '\\E501';
@icon-bell: '\\E502';
@icon-lock: '\\E503';
@icon-external-link-small: '\\E504';
@icon-external-link-large: '\\E505';
@icon-presence-online: '\\E506';
@icon-presence-offline: '\\E507';
@icon-presence-dnd: '\\E508';
@icon-presence-external-online: '\\E509';
@icon-presence-ra-online: '\\E509';
@icon-restricted-user: '\\E509';
@icon-presence-external-offline: '\\E510';
@icon-presence-ra-offline: '\\E510';
@icon-presence-external-dnd: '\\E511';
@icon-presence-ra-dnd: '\\E511';
@icon-presence-ura-online: '\\E512';
@icon-single-channel-guest: '\\E512';
@icon-presence-ura-offline: '\\E513';
@icon-presence-ura-dnd: '\\E514';
@icon-heart: '\\E515';
@icon-quote: '\\E516';
@icon-cog: '\\E517';
@icon-comment: '\\E518';
@icon-minus-circle-small: '\\E519';
@icon-times-circle-small: '\\E520';
@icon-times-circle-small-filled: '\\E520';
@icon-multiparty-dm-2: '\\E521';
@icon-multiparty-dm-3: '\\E522';
@icon-multiparty-dm-4: '\\E523';
@icon-multiparty-dm-5: '\\E524';
@icon-multiparty-dm-6: '\\E525';
@icon-multiparty-dm-7: '\\E526';
@icon-multiparty-dm-8: '\\E527';
@icon-multiparty-dm-9: '\\E528';
@icon-poo-filled: '\\E529';
@icon-circle-fill: '\\E530';
@icon-flag-filled: '\\E531';
@icon-refresh-small: '\\E532';
@icon-snooze-filled: '\\E533';
@icon-archived-channel: '\\E534';
@icon-presence-dnd-offline: '\\E535';
@icon-presence-external-dnd-offline: '\\E536';
@icon-presence-ra-dnd-offline: '\\E536';
@icon-presence-ura-dnd-offline: '\\E537';
@icon-presence-mobile-dnd: '\\E538';
@icon-play-filled: '\\E539';
@icon-broadcast-filled: '\\E540';
@icon-small-star-filled: '\\E541';
@icon-small-comment-filled: '\\E542';
@icon-paperplane-filled: '\\E543';
@icon-filebg-large-filled: '\\E544';
@icon-filebg-small-filled: '\\E545';
@icon-highlight-filled: '\\E546';
@icon-pin-filled: '\\E547';
@icon-thumb-tack-filled: '\\E547';
@icon-close-filled: '\\E548';
@icon-share-filled: '\\E549';
@icon-pencil-filled: '\\E550';
@icon-side-panel-filled: '\\E551';
@icon-add-reaction-filled: '\\E552';
@icon-mentions-filled: '\\E553';
@icon-small-reply-filled: '\\E554';
@icon-user-filled: '\\E555';
@icon-microphone-on: '\\E556';
@icon-camera-on: '\\E557';
@icon-screenshare-on: '\\E558';
@icon-shared-channels: '\\E559';
@icon-heart-large-filled: '\\E560';
@icon-thumbs-up-filled: '\\E561';
@icon-thumbs-down-filled: '\\E562';
@icon-slow-network: '\\E563';
@icon-sparkles-filled: '\\E564';
@icon-small-warning-filled: '\\E565';
@icon-deactivated-user: '\\E566';
@icon-lock-small: '\\E567';
@icon-sc-baseline: '\\E568';
@icon-shared-channels-baseline: '\\E568';
@icon-sc-pending: '\\E569';
@icon-shared-channels-pending: '\\E569';
@icon-sc-baseline-pending: '\\E570';
@icon-shared-channels-baseline-pending: '\\E570';
@icon-cloud-offline-filled: '\\E571';
@icon-cloud-offline-small-filled: '\\E572';
@icon-lock-large-filled: '\\E573';
@icon-input-file-active: '\\E574';
@icon-input-img-active: '\\E575';
@icon-input-integration-active: '\\E576';
@icon-checkbox-full: '\\E577';
@icon-add-reaction-bg: '\\E578';
@icon-small-reaction-bg: '\\E579';
@icon-info-circle-filled: '\\E580';
@icon-exclamation-circle-filled: '\\E581';
@icon-missing-emoji: '\\E582';
@icon-warning-filled: '\\E583';
@icon-eye-filled: '\\E584';
@icon-circle-minus-filled: '\\E585';
@icon-slack: '\\E800';
@icon-slack-pillow: '\\E801';
@icon-apple: '\\E802';
@icon-android: '\\E803';
@icon-twitter: '\\E804';
@icon-github: '\\E805';
@icon-dropbox: '\\E806';
@icon-google: '\\E807';
@icon-windows: '\\E808';
@icon-youtube: '\\E809';
@icon-google-drive: '\\E810';
@icon-skype: '\\E811';
@icon-rss: '\\E812';
@icon-facebook: '\\E813';
@icon-asana: '\\E814';
@icon-linkedin: '\\E815';
@icon-tumblr: '\\E816';
@icon-instagram: '\\E817';
@icon-google-plus: '\\E818';
@icon-soundcloud: '\\E819';
@icon-flickr: '\\E820';
@icon-pinterest: '\\E821';
@icon-tripit: '\\E822';
@icon-hangouts: '\\E823';
@icon-viber: '\\E824';
@icon-line: '\\E825';
@icon-facebook-messenger: '\\E826';
@icon-1password: '\\E827';
@icon-box: '\\E828';
@icon-box-square: '\\E829';
@icon-google-play: '\\E830';
@icon-spotify: '\\E831';
@icon-siriusxm: '\\E832';
@icon-stitcher: '\\E833';
@icon-pocket-casts: '\\E834';
@icon-onedrive: '\\E835';
@icon-vogue: '\\E80A';

.c-icon--star-o:before {
  content: @icon-star-o;
}
.c-icon--unstar-o:before {
  content: @icon-unstar-o;
}
.c-icon--user:before {
  content: @icon-user;
}
.c-icon--comment-alt:before {
  content: @icon-comment-alt;
}
.c-icon--comment-o:before {
  content: @icon-comment-o;
}
.c-icon--home:before {
  content: @icon-home;
}
.c-icon--info:before {
  content: @icon-info;
}
.c-icon--channel-info:before {
  content: @icon-channel-info;
}
.c-icon--info-circle:before {
  content: @icon-info-circle;
}
.c-icon--mentions:before {
  content: @icon-mentions;
}
.c-icon--gn-menu:before {
  content: @icon-gn-menu;
}
.c-icon--search:before {
  content: @icon-search;
}
.c-icon--bolt:before {
  content: @icon-bolt;
}
.c-icon--mobile:before {
  content: @icon-mobile;
}
.c-icon--tablet:before {
  content: @icon-tablet;
}
.c-icon--laptop:before {
  content: @icon-laptop;
}
.c-icon--bell-o:before {
  content: @icon-bell-o;
}
.c-icon--bell-slash:before {
  content: @icon-bell-slash;
}
.c-icon--team-directory:before {
  content: @icon-team-directory;
}
.c-icon--cloud-upload:before {
  content: @icon-cloud-upload;
}
.c-icon--cloud-download:before {
  content: @icon-cloud-download;
}
.c-icon--bolt-add:before {
  content: @icon-bolt-add;
}
.c-icon--search-medium:before {
  content: @icon-search-medium;
}
.c-icon--cog-o:before {
  content: @icon-cog-o;
}
.c-icon--cogs:before {
  content: @icon-cogs;
}
.c-icon--key:before {
  content: @icon-key;
}
.c-icon--calendar:before {
  content: @icon-calendar;
}
.c-icon--pencil:before {
  content: @icon-pencil;
}
.c-icon--lightbulb-o:before {
  content: @icon-lightbulb-o;
}
.c-icon--magic:before {
  content: @icon-magic;
}
.c-icon--external-link:before {
  content: @icon-external-link;
}
.c-icon--external-link-square:before {
  content: @icon-external-link-square;
}
.c-icon--lock-o:before {
  content: @icon-lock-o;
}
.c-icon--unlock:before {
  content: @icon-unlock;
}
.c-icon--folder:before {
  content: @icon-folder;
}
.c-icon--folder-open:before {
  content: @icon-folder-open;
}
.c-icon--archive:before {
  content: @icon-archive;
}
.c-icon--inbox:before {
  content: @icon-inbox;
}
.c-icon--sitemap:before {
  content: @icon-sitemap;
}
.c-icon--book:before {
  content: @icon-book;
}
.c-icon--envelope-o:before {
  content: @icon-envelope-o;
}
.c-icon--image:before {
  content: @icon-image;
}
.c-icon--building:before {
  content: @icon-building;
}
.c-icon--plug:before {
  content: @icon-plug;
}
.c-icon--paper-plane:before {
  content: @icon-paper-plane;
}
.c-icon--credit-card:before {
  content: @icon-credit-card;
}
.c-icon--life-ring:before {
  content: @icon-life-ring;
}
.c-icon--thumb-tack:before {
  content: @icon-thumb-tack;
}
.c-icon--trash:before {
  content: @icon-trash;
}
.c-icon--print:before {
  content: @icon-print;
}
.c-icon--quote-o:before {
  content: @icon-quote-o;
}
.c-icon--th-large:before {
  content: @icon-th-large;
}
.c-icon--eye:before {
  content: @icon-eye;
}
.c-icon--eye-closed:before {
  content: @icon-eye-closed;
}
.c-icon--volume-off:before {
  content: @icon-volume-off;
}
.c-icon--volume-down:before {
  content: @icon-volume-down;
}
.c-icon--volume-medium:before {
  content: @icon-volume-medium;
}
.c-icon--volume-up:before {
  content: @icon-volume-up;
}
.c-icon--volume-off-alt:before {
  content: @icon-volume-off-alt;
}
.c-icon--heart-o:before {
  content: @icon-heart-o;
}
.c-icon--wrench:before {
  content: @icon-wrench;
}
.c-icon--file:before {
  content: @icon-file;
}
.c-icon--all-files:before {
  content: @icon-all-files;
}
.c-icon--img-left:before {
  content: @icon-img-left;
}
.c-icon--img-center:before {
  content: @icon-img-center;
}
.c-icon--img-right:before {
  content: @icon-img-right;
}
.c-icon--img-fullbleed:before {
  content: @icon-img-fullbleed;
}
.c-icon--img-fullwidth:before {
  content: @icon-img-fullwidth;
}
.c-icon--your-files:before {
  content: @icon-your-files;
}
.c-icon--align-left:before {
  content: @icon-align-left;
}
.c-icon--align-center:before {
  content: @icon-align-center;
}
.c-icon--align-right:before {
  content: @icon-align-right;
}
.c-icon--align-justify:before {
  content: @icon-align-justify;
}
.c-icon--paragraph:before {
  content: @icon-paragraph;
}
.c-icon--code:before {
  content: @icon-code;
}
.c-icon--ellipsis:before {
  content: @icon-ellipsis;
}
.c-icon--ellipsis-baseline:before {
  content: @icon-ellipsis-baseline;
}
.c-icon--spinner:before {
  content: @icon-spinner;
}
.c-icon--spiral:before {
  content: @icon-spiral;
}
.c-icon--random:before {
  content: @icon-random;
}
.c-icon--repeat:before {
  content: @icon-repeat;
}
.c-icon--share-square-o:before {
  content: @icon-share-square-o;
}
.c-icon--link:before {
  content: @icon-link;
}
.c-icon--undo:before {
  content: @icon-undo;
}
.c-icon--history:before {
  content: @icon-history;
}
.c-icon--hourglass-empty:before {
  content: @icon-hourglass-empty;
}
.c-icon--hourglass:before {
  content: @icon-hourglass;
}
.c-icon--clock-o:before {
  content: @icon-clock-o;
}
.c-icon--dashboard:before {
  content: @icon-dashboard;
}
.c-icon--power-off:before {
  content: @icon-power-off;
}
.c-icon--sign-in:before {
  content: @icon-sign-in;
}
.c-icon--sign-out:before {
  content: @icon-sign-out;
}
.c-icon--jump:before {
  content: @icon-jump;
}
.c-icon--globe:before {
  content: @icon-globe;
}
.c-icon--filter:before {
  content: @icon-filter;
}
.c-icon--microphone:before {
  content: @icon-microphone;
}
.c-icon--microphone-slash:before {
  content: @icon-microphone-slash;
}
.c-icon--paperclip:before {
  content: @icon-paperclip;
}
.c-icon--video-camera:before {
  content: @icon-video-camera;
}
.c-icon--stop-video:before {
  content: @icon-stop-video;
}
.c-icon--phone:before {
  content: @icon-phone;
}
.c-icon--unarchive:before {
  content: @icon-unarchive;
}
.c-icon--smile-o:before {
  content: @icon-smile-o;
}
.c-icon--share-screen:before {
  content: @icon-share-screen;
}
.c-icon--stop-screen-sharing:before {
  content: @icon-stop-screen-sharing;
}
.c-icon--stop-screen-sharing-alt:before {
  content: @icon-stop-screen-sharing-alt;
}
.c-icon--feedback:before {
  content: @icon-feedback;
}
.c-icon--paper-plane-alt:before {
  content: @icon-paper-plane-alt;
}
.c-icon--cloud-offline:before {
  content: @icon-cloud-offline;
}
.c-icon--cloud-offline-small:before {
  content: @icon-cloud-offline-small;
}
.c-icon--filters:before {
  content: @icon-filters;
}
.c-icon--lock-large:before {
  content: @icon-lock-large;
}
.c-icon--checkbox-empty:before {
  content: @icon-checkbox-empty;
}
.c-icon--input-file:before {
  content: @icon-input-file;
}
.c-icon--input-fullscreen:before {
  content: @icon-input-fullscreen;
}
.c-icon--input-img:before {
  content: @icon-input-img;
}
.c-icon--input-integration:before {
  content: @icon-input-integration;
}
.c-icon--share:before {
  content: @icon-share;
}
.c-icon--save:before {
  content: @icon-save;
}
.c-icon--message-notification:before {
  content: @icon-message-notification;
}
.c-icon--list:before {
  content: @icon-list;
}
.c-icon--channel:before {
  content: @icon-channel;
}
.c-icon--share-other-alt:before {
  content: @icon-share-other-alt;
}
.c-icon--broadcast:before {
  content: @icon-broadcast;
}
.c-icon--all-files-alt:before {
  content: @icon-all-files-alt;
}
.c-icon--search-files:before {
  content: @icon-search-files;
}
.c-icon--add-user:before {
  content: @icon-add-user;
}
.c-icon--switch-team:before {
  content: @icon-switch-team;
}
.c-icon--create-snippet:before {
  content: @icon-create-snippet;
}
.c-icon--create-post:before {
  content: @icon-create-post;
}
.c-icon--upload:before {
  content: @icon-upload;
}
.c-icon--download:before {
  content: @icon-download;
}
.c-icon--share-email:before {
  content: @icon-share-email;
}
.c-icon--import-email:before {
  content: @icon-import-email;
}
.c-icon--ellipsis-o:before {
  content: @icon-ellipsis-o;
}
.c-icon--add-reaction:before {
  content: @icon-add-reaction;
}
.c-icon--happy-smile:before {
  content: @icon-happy-smile;
}
.c-icon--quote-post:before {
  content: @icon-quote-post;
}
.c-icon--camera:before {
  content: @icon-camera;
}
.c-icon--phone-flat:before {
  content: @icon-phone-flat;
}
.c-icon--sparkles:before {
  content: @icon-sparkles;
}
.c-icon--location-pin:before {
  content: @icon-location-pin;
}
.c-icon--channel-pane-hash:before {
  content: @icon-channel-pane-hash;
}
.c-icon--emoji-nature:before {
  content: @icon-emoji-nature;
}
.c-icon--emoji-food:before {
  content: @icon-emoji-food;
}
.c-icon--emoji-celebration:before {
  content: @icon-emoji-celebration;
}
.c-icon--emoji-activities:before {
  content: @icon-emoji-activities;
}
.c-icon--emoji-travel:before {
  content: @icon-emoji-travel;
}
.c-icon--emoji-objects:before {
  content: @icon-emoji-objects;
}
.c-icon--pause:before {
  content: @icon-pause;
}
.c-icon--file-gdrive:before {
  content: @icon-file-gdrive;
}
.c-icon--play:before {
  content: @icon-play;
}
.c-icon--stream:before {
  content: @icon-stream;
}
.c-icon--field-text:before {
  content: @icon-field-text;
}
.c-icon--poo:before {
  content: @icon-poo;
}
.c-icon--channel-list:before {
  content: @icon-channel-list;
}
.c-icon--share-android:before {
  content: @icon-share-android;
}
.c-icon--highlight:before {
  content: @icon-highlight;
}
.c-icon--flag:before {
  content: @icon-flag;
}
.c-icon--grabby-patty:before {
  content: @icon-grabby-patty;
}
.c-icon--backspace:before {
  content: @icon-backspace;
}
.c-icon--share-forward:before {
  content: @icon-share-forward;
}
.c-icon--side-panel:before {
  content: @icon-side-panel;
}
.c-icon--search-small:before {
  content: @icon-search-small;
}
.c-icon--reload-small:before {
  content: @icon-reload-small;
}
.c-icon--vertical-ellipsis:before {
  content: @icon-vertical-ellipsis;
}
.c-icon--disable:before {
  content: @icon-disable;
}
.c-icon--bold-hash-small:before {
  content: @icon-bold-hash-small;
}
.c-icon--cart:before {
  content: @icon-cart;
}
.c-icon--snooze-outline:before {
  content: @icon-snooze-outline;
}
.c-icon--new-window:before {
  content: @icon-new-window;
}
.c-icon--h1:before {
  content: @icon-h1;
}
.c-icon--h2:before {
  content: @icon-h2;
}
.c-icon--h3:before {
  content: @icon-h3;
}
.c-icon--bullet-list:before {
  content: @icon-bullet-list;
}
.c-icon--numbered-list:before {
  content: @icon-numbered-list;
}
.c-icon--text-format-menu:before {
  content: @icon-text-format-menu;
}
.c-icon--check-list:before {
  content: @icon-check-list;
}
.c-icon--code-block:before {
  content: @icon-code-block;
}
.c-icon--codeblock:before {
  content: @icon-codeblock;
}
.c-icon--bold:before {
  content: @icon-bold;
}
.c-icon--italic:before {
  content: @icon-italic;
}
.c-icon--underline:before {
  content: @icon-underline;
}
.c-icon--strikethrough:before {
  content: @icon-strikethrough;
}
.c-icon--tag:before {
  content: @icon-tag;
}
.c-icon--org-shared-channel:before {
  content: @icon-org-shared-channel;
}
.c-icon--shared-channel:before {
  content: @icon-shared-channel;
}
.c-icon--external-channel:before {
  content: @icon-external-channel;
}
.c-icon--external-channel-square:before {
  content: @icon-external-channel-square;
}
.c-icon--external-channel-triangle:before {
  content: @icon-external-channel-triangle;
}
.c-icon--small-reaction:before {
  content: @icon-small-reaction;
}
.c-icon--small-reply:before {
  content: @icon-small-reply;
}
.c-icon--small-ellipsis:before {
  content: @icon-small-ellipsis;
}
.c-icon--small-star:before {
  content: @icon-small-star;
}
.c-icon--small-quote:before {
  content: @icon-small-quote;
}
.c-icon--keyboard:before {
  content: @icon-keyboard;
}
.c-icon--share-action:before {
  content: @icon-share-action;
}
.c-icon--handset:before {
  content: @icon-handset;
}
.c-icon--bluetooth-sound:before {
  content: @icon-bluetooth-sound;
}
.c-icon--bluetooth:before {
  content: @icon-bluetooth;
}
.c-icon--bot:before {
  content: @icon-bot;
}
.c-icon--globe-plus:before {
  content: @icon-globe-plus;
}
.c-icon--user-groups:before {
  content: @icon-user-groups;
}
.c-icon--rocket:before {
  content: @icon-rocket;
}
.c-icon--mobile-notification:before {
  content: @icon-mobile-notification;
}
.c-icon--desktop-notification:before {
  content: @icon-desktop-notification;
}
.c-icon--collab-screenshare-on:before {
  content: @icon-collab-screenshare-on;
}
.c-icon--collab-screenshare-off:before {
  content: @icon-collab-screenshare-off;
}
.c-icon--thumbs-up:before {
  content: @icon-thumbs-up;
}
.c-icon--thumbs-down:before {
  content: @icon-thumbs-down;
}
.c-icon--bug:before {
  content: @icon-bug;
}
.c-icon--mark-unread:before {
  content: @icon-mark-unread;
}
.c-icon--compose-dm:before {
  content: @icon-compose-dm;
}
.c-icon--invoice:before {
  content: @icon-invoice;
}
.c-icon--expand:before {
  content: @icon-expand;
}
.c-icon--reduce:before {
  content: @icon-reduce;
}
.c-icon--arrows-alt:before {
  content: @icon-arrows-alt;
}
.c-icon--reduce-alt:before {
  content: @icon-reduce-alt;
}
.c-icon--check-square-o:before {
  content: @icon-check-square-o;
}
.c-icon--check-circle-o:before {
  content: @icon-check-circle-o;
}
.c-icon--check-circle-o-large:before {
  content: @icon-check-circle-o-large;
}
.c-icon--question:before {
  content: @icon-question;
}
.c-icon--exclamation:before {
  content: @icon-exclamation;
}
.c-icon--warning:before {
  content: @icon-warning;
}
.c-icon--exclamation-circle:before {
  content: @icon-exclamation-circle;
}
.c-icon--question-circle:before {
  content: @icon-question-circle;
}
.c-icon--plus-circle:before {
  content: @icon-plus-circle;
}
.c-icon--minus-circle:before {
  content: @icon-minus-circle;
}
.c-icon--times-circle:before {
  content: @icon-times-circle;
}
.c-icon--arrow-circle-o-up:before {
  content: @icon-arrow-circle-o-up;
}
.c-icon--arrow-circle-o-down:before {
  content: @icon-arrow-circle-o-down;
}
.c-icon--arrow-circle-o-right:before {
  content: @icon-arrow-circle-o-right;
}
.c-icon--arrow-circle-o-left:before {
  content: @icon-arrow-circle-o-left;
}
.c-icon--chevron-circle-left:before {
  content: @icon-chevron-circle-left;
}
.c-icon--chevron-circle-right:before {
  content: @icon-chevron-circle-right;
}
.c-icon--chevron-circle-down:before {
  content: @icon-chevron-circle-down;
}
.c-icon--chevron-circle-up:before {
  content: @icon-chevron-circle-up;
}
.c-icon--plus-circle-small:before {
  content: @icon-plus-circle-small;
}
.c-icon--circle-small:before {
  content: @icon-circle-small;
}
.c-icon--circle-large:before {
  content: @icon-circle-large;
}
.c-icon--navigate:before {
  content: @icon-navigate;
}
.c-icon--times-circle-small:before {
  content: @icon-times-circle-small;
}
.c-icon--plus-circle-medium:before {
  content: @icon-plus-circle-medium;
}
.c-icon--times-circle-medium:before {
  content: @icon-times-circle-medium;
}
.c-icon--square-warning:before {
  content: @icon-square-warning;
}
.c-icon--square-question:before {
  content: @icon-square-question;
}
.c-icon--plus-square-o:before {
  content: @icon-plus-square-o;
}
.c-icon--minus-square-o:before {
  content: @icon-minus-square-o;
}
.c-icon--square-times:before {
  content: @icon-square-times;
}
.c-icon--square-arrow-up:before {
  content: @icon-square-arrow-up;
}
.c-icon--square-arrow-down:before {
  content: @icon-square-arrow-down;
}
.c-icon--square-arrow-right:before {
  content: @icon-square-arrow-right;
}
.c-icon--square-arrow-left:before {
  content: @icon-square-arrow-left;
}
.c-icon--square-chevron-left:before {
  content: @icon-square-chevron-left;
}
.c-icon--square-chevron-right:before {
  content: @icon-square-chevron-right;
}
.c-icon--square-chevron-down:before {
  content: @icon-square-chevron-down;
}
.c-icon--square-chevron-up:before {
  content: @icon-square-chevron-up;
}
.c-icon--chevron-right:before {
  content: @icon-chevron-right;
}
.c-icon--chevron-left:before {
  content: @icon-chevron-left;
}
.c-icon--chevron-down:before {
  content: @icon-chevron-down;
}
.c-icon--chevron-up:before {
  content: @icon-chevron-up;
}
.c-icon--chevron-medium-right:before {
  content: @icon-chevron-medium-right;
}
.c-icon--chevron-medium-left:before {
  content: @icon-chevron-medium-left;
}
.c-icon--chevron-medium-down:before {
  content: @icon-chevron-medium-down;
}
.c-icon--chevron-medium-up:before {
  content: @icon-chevron-medium-up;
}
.c-icon--chevron-large-right:before {
  content: @icon-chevron-large-right;
}
.c-icon--chevron-large-left:before {
  content: @icon-chevron-large-left;
}
.c-icon--chevron-large-up:before {
  content: @icon-chevron-large-up;
}
.c-icon--chevron-large-down:before {
  content: @icon-chevron-large-down;
}
.c-icon--arrow-large-right:before {
  content: @icon-arrow-large-right;
}
.c-icon--arrow-large-left:before {
  content: @icon-arrow-large-left;
}
.c-icon--arrow-large-up:before {
  content: @icon-arrow-large-up;
}
.c-icon--arrow-large-down:before {
  content: @icon-arrow-large-down;
}
.c-icon--caret-outline-left:before {
  content: @icon-caret-outline-left;
}
.c-icon--caret-outline-right:before {
  content: @icon-caret-outline-right;
}
.c-icon--caret-outline-up:before {
  content: @icon-caret-outline-up;
}
.c-icon--caret-outline-down:before {
  content: @icon-caret-outline-down;
}
.c-icon--caret-up:before {
  content: @icon-caret-up;
}
.c-icon--caret-down:before {
  content: @icon-caret-down;
}
.c-icon--caret-right:before {
  content: @icon-caret-right;
}
.c-icon--caret-left:before {
  content: @icon-caret-left;
}
.c-icon--angle-arrow-down-left:before {
  content: @icon-angle-arrow-down-left;
}
.c-icon--angle-arrow-down-right:before {
  content: @icon-angle-arrow-down-right;
}
.c-icon--angle-arrow-up-right:before {
  content: @icon-angle-arrow-up-right;
}
.c-icon--angle-arrow-up-left:before {
  content: @icon-angle-arrow-up-left;
}
.c-icon--times:before {
  content: @icon-times;
}
.c-icon--plus:before {
  content: @icon-plus;
}
.c-icon--minus:before {
  content: @icon-minus;
}
.c-icon--plus-small:before {
  content: @icon-plus-small;
}
.c-icon--minus-small:before {
  content: @icon-minus-small;
}
.c-icon--exclamation-small:before {
  content: @icon-exclamation-small;
}
.c-icon--question-small:before {
  content: @icon-question-small;
}
.c-icon--check-small:before {
  content: @icon-check-small;
}
.c-icon--arrow-right:before {
  content: @icon-arrow-right;
}
.c-icon--arrow-left:before {
  content: @icon-arrow-left;
}
.c-icon--arrow-up:before {
  content: @icon-arrow-up;
}
.c-icon--arrow-down:before {
  content: @icon-arrow-down;
}
.c-icon--arrow-right-medium:before {
  content: @icon-arrow-right-medium;
}
.c-icon--arrow-left-medium:before {
  content: @icon-arrow-left-medium;
}
.c-icon--arrow-up-medium:before {
  content: @icon-arrow-up-medium;
}
.c-icon--arrow-down-medium:before {
  content: @icon-arrow-down-medium;
}
.c-icon--times-small:before {
  content: @icon-times-small;
}
.c-icon--sync:before {
  content: @icon-sync;
}
.c-icon--replies:before {
  content: @icon-replies;
}
.c-icon--angle-arrow-down-right-alt:before {
  content: @icon-angle-arrow-down-right-alt;
}
.c-icon--angle-arrow-up-right-alt:before {
  content: @icon-angle-arrow-up-right-alt;
}
.c-icon--angle-arrow-up-left-alt:before {
  content: @icon-angle-arrow-up-left-alt;
}
.c-icon--angle-arrow-down-left-alt:before {
  content: @icon-angle-arrow-down-left-alt;
}
.c-icon--check-small-bold:before {
  content: @icon-check-small-bold;
}
.c-icon--enter:before {
  content: @icon-enter;
}
.c-icon--expand-vertical:before {
  content: @icon-expand-vertical;
}
.c-icon--collapse-vertical:before {
  content: @icon-collapse-vertical;
}
.c-icon--android-upload:before {
  content: @icon-android-upload;
}
.c-icon--plus-thick:before {
  content: @icon-plus-thick;
}
.c-icon--arrow-ne-large:before {
  content: @icon-arrow-ne-large;
}
.c-icon--arrow-nw-large:before {
  content: @icon-arrow-nw-large;
}
.c-icon--arrow-sw-large:before {
  content: @icon-arrow-sw-large;
}
.c-icon--arrow-se-large:before {
  content: @icon-arrow-se-large;
}
.c-icon--arrow-ne-medium:before {
  content: @icon-arrow-ne-medium;
}
.c-icon--arrow-nw-medium:before {
  content: @icon-arrow-nw-medium;
}
.c-icon--arrow-sw-medium:before {
  content: @icon-arrow-sw-medium;
}
.c-icon--arrow-se-medium:before {
  content: @icon-arrow-se-medium;
}
.c-icon--arrow-ne-small:before {
  content: @icon-arrow-ne-small;
}
.c-icon--arrow-nw-small:before {
  content: @icon-arrow-nw-small;
}
.c-icon--arrow-sw-small:before {
  content: @icon-arrow-sw-small;
}
.c-icon--arrow-se-small:before {
  content: @icon-arrow-se-small;
}
.c-icon--check-large-bold:before {
  content: @icon-check-large-bold;
}
.c-icon--check-large:before {
  content: @icon-check-large;
}
.c-icon--times-medium:before {
  content: @icon-times-medium;
}
.c-icon--real-checkbox-empty:before {
  content: @icon-real-checkbox-empty;
}
.c-icon--real-checkbox-checked:before {
  content: @icon-real-checkbox-checked;
}
.c-icon--real-checkbox-checked-o:before {
  content: @icon-real-checkbox-checked-o;
}
.c-icon--circle-checkbox-empty:before {
  content: @icon-circle-checkbox-empty;
}
.c-icon--circle-checkbox-checked:before {
  content: @icon-circle-checkbox-checked;
}
.c-icon--circle-checkbox-checked-o:before {
  content: @icon-circle-checkbox-checked-o;
}
.c-icon--times-large:before {
  content: @icon-times-large;
}
.c-icon--file-generic:before {
  content: @icon-file-generic;
}
.c-icon--file-generic-small:before {
  content: @icon-file-generic-small;
}
.c-icon--file-spaces:before {
  content: @icon-file-spaces;
}
.c-icon--file-spaces-small:before {
  content: @icon-file-spaces-small;
}
.c-icon--file-image:before {
  content: @icon-file-image;
}
.c-icon--file-image-small:before {
  content: @icon-file-image-small;
}
.c-icon--file-pdf:before {
  content: @icon-file-pdf;
}
.c-icon--file-pdf-small:before {
  content: @icon-file-pdf-small;
}
.c-icon--file-audio:before {
  content: @icon-file-audio;
}
.c-icon--file-audio-small:before {
  content: @icon-file-audio-small;
}
.c-icon--file-video:before {
  content: @icon-file-video;
}
.c-icon--file-video-small:before {
  content: @icon-file-video-small;
}
.c-icon--file-presentation:before {
  content: @icon-file-presentation;
}
.c-icon--file-presentation-small:before {
  content: @icon-file-presentation-small;
}
.c-icon--file-email:before {
  content: @icon-file-email;
}
.c-icon--file-email-small:before {
  content: @icon-file-email-small;
}
.c-icon--file-vector:before {
  content: @icon-file-vector;
}
.c-icon--file-vector-small:before {
  content: @icon-file-vector-small;
}
.c-icon--file-spreadsheet:before {
  content: @icon-file-spreadsheet;
}
.c-icon--file-spreadsheet-small:before {
  content: @icon-file-spreadsheet-small;
}
.c-icon--file-media-archive:before {
  content: @icon-file-media-archive;
}
.c-icon--file-media-archive-small:before {
  content: @icon-file-media-archive-small;
}
.c-icon--file-archive:before {
  content: @icon-file-archive;
}
.c-icon--file-archive-small:before {
  content: @icon-file-archive-small;
}
.c-icon--file-executable:before {
  content: @icon-file-executable;
}
.c-icon--file-executable-small:before {
  content: @icon-file-executable-small;
}
.c-icon--file-disk-image:before {
  content: @icon-file-disk-image;
}
.c-icon--file-disk-image-small:before {
  content: @icon-file-disk-image-small;
}
.c-icon--file-cad:before {
  content: @icon-file-cad;
}
.c-icon--file-cad-small:before {
  content: @icon-file-cad-small;
}
.c-icon--file-3d-graphic:before {
  content: @icon-file-3d-graphic;
}
.c-icon--file-3d-graphic-small:before {
  content: @icon-file-3d-graphic-small;
}
.c-icon--file-database:before {
  content: @icon-file-database;
}
.c-icon--file-database-small:before {
  content: @icon-file-database-small;
}
.c-icon--file-binary:before {
  content: @icon-file-binary;
}
.c-icon--file-binary-small:before {
  content: @icon-file-binary-small;
}
.c-icon--file-markdown:before {
  content: @icon-file-markdown;
}
.c-icon--file-markdown-small:before {
  content: @icon-file-markdown-small;
}
.c-icon--file-text-post:before {
  content: @icon-file-text-post;
}
.c-icon--file-text-post-small:before {
  content: @icon-file-text-post-small;
}
.c-icon--file-html:before {
  content: @icon-file-html;
}
.c-icon--file-html-small:before {
  content: @icon-file-html-small;
}
.c-icon--file-code:before {
  content: @icon-file-code;
}
.c-icon--file-code-small:before {
  content: @icon-file-code-small;
}
.c-icon--file-css:before {
  content: @icon-file-css;
}
.c-icon--file-css-small:before {
  content: @icon-file-css-small;
}
.c-icon--file-php:before {
  content: @icon-file-php;
}
.c-icon--file-php-small:before {
  content: @icon-file-php-small;
}
.c-icon--file-snippet:before {
  content: @icon-file-snippet;
}
.c-icon--file-snippet-small:before {
  content: @icon-file-snippet-small;
}
.c-icon--file-word:before {
  content: @icon-file-word;
}
.c-icon--file-word-small:before {
  content: @icon-file-word-small;
}
.c-icon--file-excel:before {
  content: @icon-file-excel;
}
.c-icon--file-excel-small:before {
  content: @icon-file-excel-small;
}
.c-icon--file-powerpoint:before {
  content: @icon-file-powerpoint;
}
.c-icon--file-powerpoint-small:before {
  content: @icon-file-powerpoint-small;
}
.c-icon--file-illustrator:before {
  content: @icon-file-illustrator;
}
.c-icon--file-illustrator-small:before {
  content: @icon-file-illustrator-small;
}
.c-icon--file-photoshop:before {
  content: @icon-file-photoshop;
}
.c-icon--file-photoshop-small:before {
  content: @icon-file-photoshop-small;
}
.c-icon--file-indesign:before {
  content: @icon-file-indesign;
}
.c-icon--file-indesign-small:before {
  content: @icon-file-indesign-small;
}
.c-icon--file-adobe-flash:before {
  content: @icon-file-adobe-flash;
}
.c-icon--file-adobe-flash-small:before {
  content: @icon-file-adobe-flash-small;
}
.c-icon--file-adobe-swf:before {
  content: @icon-file-adobe-swf;
}
.c-icon--file-adobe-swf-small:before {
  content: @icon-file-adobe-swf-small;
}
.c-icon--file-iphone-app:before {
  content: @icon-file-iphone-app;
}
.c-icon--file-iphone-app-small:before {
  content: @icon-file-iphone-app-small;
}
.c-icon--file-android-app:before {
  content: @icon-file-android-app;
}
.c-icon--file-android-app-small:before {
  content: @icon-file-android-app-small;
}
.c-icon--file-dropbox:before {
  content: @icon-file-dropbox;
}
.c-icon--file-dropbox-small:before {
  content: @icon-file-dropbox-small;
}
.c-icon--file-google:before {
  content: @icon-file-google;
}
.c-icon--file-google-document:before {
  content: @icon-file-google-document;
}
.c-icon--file-google-form:before {
  content: @icon-file-google-form;
}
.c-icon--file-google-presentation:before {
  content: @icon-file-google-presentation;
}
.c-icon--file-google-spreadsheet:before {
  content: @icon-file-google-spreadsheet;
}
.c-icon--file-google-document-small:before {
  content: @icon-file-google-document-small;
}
.c-icon--file-google-form-small:before {
  content: @icon-file-google-form-small;
}
.c-icon--file-google-presentation-small:before {
  content: @icon-file-google-presentation-small;
}
.c-icon--file-google-small:before {
  content: @icon-file-google-small;
}
.c-icon--file-google-spreadsheet-small:before {
  content: @icon-file-google-spreadsheet-small;
}
.c-icon--file-qtz:before {
  content: @icon-file-qtz;
}
.c-icon--file-qtz-small:before {
  content: @icon-file-qtz-small;
}
.c-icon--file-sketch:before {
  content: @icon-file-sketch;
}
.c-icon--file-sketch-small:before {
  content: @icon-file-sketch-small;
}
.c-icon--calls:before {
  content: @icon-calls;
}
.c-icon--calls-small:before {
  content: @icon-calls-small;
}
.c-icon--calls-ended:before {
  content: @icon-calls-ended;
}
.c-icon--calls-ended-small:before {
  content: @icon-calls-ended-small;
}
.c-icon--file-figma:before {
  content: @icon-file-figma;
}
.c-icon--file-figma-small:before {
  content: @icon-file-figma-small;
}
.c-icon--file-generic-tiny:before {
  content: @icon-file-generic-tiny;
}
.c-icon--file-spaces-tiny:before {
  content: @icon-file-spaces-tiny;
}
.c-icon--file-image-tiny:before {
  content: @icon-file-image-tiny;
}
.c-icon--file-pdf-tiny:before {
  content: @icon-file-pdf-tiny;
}
.c-icon--file-audio-tiny:before {
  content: @icon-file-audio-tiny;
}
.c-icon--file-video-tiny:before {
  content: @icon-file-video-tiny;
}
.c-icon--file-presentation-tiny:before {
  content: @icon-file-presentation-tiny;
}
.c-icon--file-email-tiny:before {
  content: @icon-file-email-tiny;
}
.c-icon--file-vector-tiny:before {
  content: @icon-file-vector-tiny;
}
.c-icon--file-spreadsheet-tiny:before {
  content: @icon-file-spreadsheet-tiny;
}
.c-icon--file-media-archive-tiny:before {
  content: @icon-file-media-archive-tiny;
}
.c-icon--file-archive-tiny:before {
  content: @icon-file-archive-tiny;
}
.c-icon--file-executable-tiny:before {
  content: @icon-file-executable-tiny;
}
.c-icon--file-disk-image-tiny:before {
  content: @icon-file-disk-image-tiny;
}
.c-icon--file-cad-tiny:before {
  content: @icon-file-cad-tiny;
}
.c-icon--file-3d-graphic-tiny:before {
  content: @icon-file-3d-graphic-tiny;
}
.c-icon--file-database-tiny:before {
  content: @icon-file-database-tiny;
}
.c-icon--file-binary-tiny:before {
  content: @icon-file-binary-tiny;
}
.c-icon--file-markdown-tiny:before {
  content: @icon-file-markdown-tiny;
}
.c-icon--file-text-post-tiny:before {
  content: @icon-file-text-post-tiny;
}
.c-icon--file-html-tiny:before {
  content: @icon-file-html-tiny;
}
.c-icon--file-code-tiny:before {
  content: @icon-file-code-tiny;
}
.c-icon--file-css-tiny:before {
  content: @icon-file-css-tiny;
}
.c-icon--file-php-tiny:before {
  content: @icon-file-php-tiny;
}
.c-icon--file-snippet-tiny:before {
  content: @icon-file-snippet-tiny;
}
.c-icon--file-word-tiny:before {
  content: @icon-file-word-tiny;
}
.c-icon--file-excel-tiny:before {
  content: @icon-file-excel-tiny;
}
.c-icon--file-powerpoint-tiny:before {
  content: @icon-file-powerpoint-tiny;
}
.c-icon--file-illustrator-tiny:before {
  content: @icon-file-illustrator-tiny;
}
.c-icon--file-photoshop-tiny:before {
  content: @icon-file-photoshop-tiny;
}
.c-icon--file-indesign-tiny:before {
  content: @icon-file-indesign-tiny;
}
.c-icon--file-adobe-flash-tiny:before {
  content: @icon-file-adobe-flash-tiny;
}
.c-icon--file-adobe-swf-tiny:before {
  content: @icon-file-adobe-swf-tiny;
}
.c-icon--file-iphone-app-tiny:before {
  content: @icon-file-iphone-app-tiny;
}
.c-icon--file-android-app-tiny:before {
  content: @icon-file-android-app-tiny;
}
.c-icon--file-dropbox-tiny:before {
  content: @icon-file-dropbox-tiny;
}
.c-icon--file-google-document-tiny:before {
  content: @icon-file-google-document-tiny;
}
.c-icon--file-google-form-tiny:before {
  content: @icon-file-google-form-tiny;
}
.c-icon--file-google-presentation-tiny:before {
  content: @icon-file-google-presentation-tiny;
}
.c-icon--file-google-spreadsheet-tiny:before {
  content: @icon-file-google-spreadsheet-tiny;
}
.c-icon--file-google-tiny:before {
  content: @icon-file-google-tiny;
}
.c-icon--file-qtz-tiny:before {
  content: @icon-file-qtz-tiny;
}
.c-icon--file-sketch-tiny:before {
  content: @icon-file-sketch-tiny;
}
.c-icon--file-figma-tiny:before {
  content: @icon-file-figma-tiny;
}
.c-icon--star:before {
  content: @icon-star;
}
.c-icon--unstar:before {
  content: @icon-unstar;
}
.c-icon--bell:before {
  content: @icon-bell;
}
.c-icon--lock:before {
  content: @icon-lock;
}
.c-icon--external-link-small:before {
  content: @icon-external-link-small;
}
.c-icon--external-link-large:before {
  content: @icon-external-link-large;
}
.c-icon--presence-online:before {
  content: @icon-presence-online;
}
.c-icon--presence-offline:before {
  content: @icon-presence-offline;
}
.c-icon--presence-dnd:before {
  content: @icon-presence-dnd;
}
.c-icon--presence-external-online:before {
  content: @icon-presence-external-online;
}
.c-icon--presence-ra-online:before {
  content: @icon-presence-ra-online;
}
.c-icon--restricted-user:before {
  content: @icon-restricted-user;
}
.c-icon--presence-external-offline:before {
  content: @icon-presence-external-offline;
}
.c-icon--presence-ra-offline:before {
  content: @icon-presence-ra-offline;
}
.c-icon--presence-external-dnd:before {
  content: @icon-presence-external-dnd;
}
.c-icon--presence-ra-dnd:before {
  content: @icon-presence-ra-dnd;
}
.c-icon--presence-ura-online:before {
  content: @icon-presence-ura-online;
}
.c-icon--single-channel-guest:before {
  content: @icon-single-channel-guest;
}
.c-icon--presence-ura-offline:before {
  content: @icon-presence-ura-offline;
}
.c-icon--presence-ura-dnd:before {
  content: @icon-presence-ura-dnd;
}
.c-icon--heart:before {
  content: @icon-heart;
}
.c-icon--quote:before {
  content: @icon-quote;
}
.c-icon--cog:before {
  content: @icon-cog;
}
.c-icon--comment:before {
  content: @icon-comment;
}
.c-icon--minus-circle-small:before {
  content: @icon-minus-circle-small;
}
.c-icon--times-circle-small:before {
  content: @icon-times-circle-small;
}
.c-icon--times-circle-small-filled:before {
  content: @icon-times-circle-small-filled;
}
.c-icon--multiparty-dm-2:before {
  content: @icon-multiparty-dm-2;
}
.c-icon--multiparty-dm-3:before {
  content: @icon-multiparty-dm-3;
}
.c-icon--multiparty-dm-4:before {
  content: @icon-multiparty-dm-4;
}
.c-icon--multiparty-dm-5:before {
  content: @icon-multiparty-dm-5;
}
.c-icon--multiparty-dm-6:before {
  content: @icon-multiparty-dm-6;
}
.c-icon--multiparty-dm-7:before {
  content: @icon-multiparty-dm-7;
}
.c-icon--multiparty-dm-8:before {
  content: @icon-multiparty-dm-8;
}
.c-icon--multiparty-dm-9:before {
  content: @icon-multiparty-dm-9;
}
.c-icon--poo-filled:before {
  content: @icon-poo-filled;
}
.c-icon--circle-fill:before {
  content: @icon-circle-fill;
}
.c-icon--flag-filled:before {
  content: @icon-flag-filled;
}
.c-icon--refresh-small:before {
  content: @icon-refresh-small;
}
.c-icon--snooze-filled:before {
  content: @icon-snooze-filled;
}
.c-icon--archived-channel:before {
  content: @icon-archived-channel;
}
.c-icon--presence-dnd-offline:before {
  content: @icon-presence-dnd-offline;
}
.c-icon--presence-external-dnd-offline:before {
  content: @icon-presence-external-dnd-offline;
}
.c-icon--presence-ra-dnd-offline:before {
  content: @icon-presence-ra-dnd-offline;
}
.c-icon--presence-ura-dnd-offline:before {
  content: @icon-presence-ura-dnd-offline;
}
.c-icon--presence-mobile-dnd:before {
  content: @icon-presence-mobile-dnd;
}
.c-icon--play-filled:before {
  content: @icon-play-filled;
}
.c-icon--broadcast-filled:before {
  content: @icon-broadcast-filled;
}
.c-icon--small-star-filled:before {
  content: @icon-small-star-filled;
}
.c-icon--small-comment-filled:before {
  content: @icon-small-comment-filled;
}
.c-icon--paperplane-filled:before {
  content: @icon-paperplane-filled;
}
.c-icon--filebg-large-filled:before {
  content: @icon-filebg-large-filled;
}
.c-icon--filebg-small-filled:before {
  content: @icon-filebg-small-filled;
}
.c-icon--highlight-filled:before {
  content: @icon-highlight-filled;
}
.c-icon--pin-filled:before {
  content: @icon-pin-filled;
}
.c-icon--thumb-tack-filled:before {
  content: @icon-thumb-tack-filled;
}
.c-icon--close-filled:before {
  content: @icon-close-filled;
}
.c-icon--share-filled:before {
  content: @icon-share-filled;
}
.c-icon--pencil-filled:before {
  content: @icon-pencil-filled;
}
.c-icon--side-panel-filled:before {
  content: @icon-side-panel-filled;
}
.c-icon--add-reaction-filled:before {
  content: @icon-add-reaction-filled;
}
.c-icon--mentions-filled:before {
  content: @icon-mentions-filled;
}
.c-icon--small-reply-filled:before {
  content: @icon-small-reply-filled;
}
.c-icon--user-filled:before {
  content: @icon-user-filled;
}
.c-icon--microphone-on:before {
  content: @icon-microphone-on;
}
.c-icon--camera-on:before {
  content: @icon-camera-on;
}
.c-icon--screenshare-on:before {
  content: @icon-screenshare-on;
}
.c-icon--shared-channels:before {
  content: @icon-shared-channels;
}
.c-icon--heart-large-filled:before {
  content: @icon-heart-large-filled;
}
.c-icon--thumbs-up-filled:before {
  content: @icon-thumbs-up-filled;
}
.c-icon--thumbs-down-filled:before {
  content: @icon-thumbs-down-filled;
}
.c-icon--slow-network:before {
  content: @icon-slow-network;
}
.c-icon--sparkles-filled:before {
  content: @icon-sparkles-filled;
}
.c-icon--small-warning-filled:before {
  content: @icon-small-warning-filled;
}
.c-icon--deactivated-user:before {
  content: @icon-deactivated-user;
}
.c-icon--lock-small:before {
  content: @icon-lock-small;
}
.c-icon--sc-baseline:before {
  content: @icon-sc-baseline;
}
.c-icon--shared-channels-baseline:before {
  content: @icon-shared-channels-baseline;
}
.c-icon--sc-pending:before {
  content: @icon-sc-pending;
}
.c-icon--shared-channels-pending:before {
  content: @icon-shared-channels-pending;
}
.c-icon--sc-baseline-pending:before {
  content: @icon-sc-baseline-pending;
}
.c-icon--shared-channels-baseline-pending:before {
  content: @icon-shared-channels-baseline-pending;
}
.c-icon--cloud-offline-filled:before {
  content: @icon-cloud-offline-filled;
}
.c-icon--cloud-offline-small-filled:before {
  content: @icon-cloud-offline-small-filled;
}
.c-icon--lock-large-filled:before {
  content: @icon-lock-large-filled;
}
.c-icon--input-file-active:before {
  content: @icon-input-file-active;
}
.c-icon--input-img-active:before {
  content: @icon-input-img-active;
}
.c-icon--input-integration-active:before {
  content: @icon-input-integration-active;
}
.c-icon--checkbox-full:before {
  content: @icon-checkbox-full;
}
.c-icon--add-reaction-bg:before {
  content: @icon-add-reaction-bg;
}
.c-icon--small-reaction-bg:before {
  content: @icon-small-reaction-bg;
}
.c-icon--info-circle-filled:before {
  content: @icon-info-circle-filled;
}
.c-icon--exclamation-circle-filled:before {
  content: @icon-exclamation-circle-filled;
}
.c-icon--missing-emoji:before {
  content: @icon-missing-emoji;
}
.c-icon--warning-filled:before {
  content: @icon-warning-filled;
}
.c-icon--eye-filled:before {
  content: @icon-eye-filled;
}
.c-icon--circle-minus-filled:before {
  content: @icon-circle-minus-filled;
}
.c-icon--slack:before {
  content: @icon-slack;
}
.c-icon--slack-pillow:before {
  content: @icon-slack-pillow;
}
.c-icon--apple:before {
  content: @icon-apple;
}
.c-icon--android:before {
  content: @icon-android;
}
.c-icon--twitter:before {
  content: @icon-twitter;
}
.c-icon--github:before {
  content: @icon-github;
}
.c-icon--dropbox:before {
  content: @icon-dropbox;
}
.c-icon--google:before {
  content: @icon-google;
}
.c-icon--windows:before {
  content: @icon-windows;
}
.c-icon--youtube:before {
  content: @icon-youtube;
}
.c-icon--google-drive:before {
  content: @icon-google-drive;
}
.c-icon--skype:before {
  content: @icon-skype;
}
.c-icon--rss:before {
  content: @icon-rss;
}
.c-icon--facebook:before {
  content: @icon-facebook;
}
.c-icon--asana:before {
  content: @icon-asana;
}
.c-icon--linkedin:before {
  content: @icon-linkedin;
}
.c-icon--tumblr:before {
  content: @icon-tumblr;
}
.c-icon--instagram:before {
  content: @icon-instagram;
}
.c-icon--google-plus:before {
  content: @icon-google-plus;
}
.c-icon--soundcloud:before {
  content: @icon-soundcloud;
}
.c-icon--flickr:before {
  content: @icon-flickr;
}
.c-icon--pinterest:before {
  content: @icon-pinterest;
}
.c-icon--tripit:before {
  content: @icon-tripit;
}
.c-icon--hangouts:before {
  content: @icon-hangouts;
}
.c-icon--viber:before {
  content: @icon-viber;
}
.c-icon--line:before {
  content: @icon-line;
}
.c-icon--facebook-messenger:before {
  content: @icon-facebook-messenger;
}
.c-icon--1password:before {
  content: @icon-1password;
}
.c-icon--box:before {
  content: @icon-box;
}
.c-icon--box-square:before {
  content: @icon-box-square;
}
.c-icon--google-play:before {
  content: @icon-google-play;
}
.c-icon--spotify:before {
  content: @icon-spotify;
}
.c-icon--siriusxm:before {
  content: @icon-siriusxm;
}
.c-icon--stitcher:before {
  content: @icon-stitcher;
}
.c-icon--pocket-casts:before {
  content: @icon-pocket-casts;
}
.c-icon--onedrive:before {
  content: @icon-onedrive;
}
.c-icon--vogue:before {
  content: @icon-vogue;
}

// -------------------------------------------------------
// Filetypes
// -------------------------------------------------------
@file-generic-blue: #3aa3e3; // @note clear_blue in legacy
@file-spaces-green: #66c79e;
@file-gdrive-red: #db4437;
@file-gdrive-blue: #4285f4;
@file-gdrive-yellow: #f4b400;
@file-gdrive-green: #0f9d58;
@file-snippet-violet: #4d394b; // @note burnt_violet in legacy
@file-ms-word-blue: #2c4098;
@file-ms-excel-green: #377437;
@file-ms-powerpoint-orange: #e05a30;
@file-adobe-ai-orange: #f4993c;
@file-adobe-ps-blue: #56b6de;
@file-adobe-in-pink: #eb81ab;
@file-adobe-flash-red: #a72428;
@file-apple-gray: #9ea0a7;
@file-android-green: #a4ca3a;
@file-dropbox-blue: #007ee5;
@file-figma-black: @sk_black; // @todo [alfred] ask Hubert about this
// Helper mixin (local: DO NOT import and use outside this file!)
._file_icon(@content, @color) {
  // The icon itself
  &:before {
    content: @content;
    color: @color;
  } // For file hover action icons (download, external, view)
  &:after {
    background-color: @color;
  }
}

.c-icon--filetype {
  @file_icon_size: 50px;
  width: @file_icon_size;
  ._file_icon(@icon-file-generic, @file-generic-blue);
  &:before {
    font-size: @file_icon_size;
  }
}

.c-icon--filetype-small {
  @file_icon_size: 40px;
  width: @file_icon_size;
  ._file_icon(@icon-file-generic-small, @file-generic-blue);
  &:before {
    font-size: @file_icon_size;
  }
}

.c-icon--filetype-tiny {
  @file_icon_size: 20px;
  width: @file_icon_size;
  ._file_icon(@icon-file-generic-tiny, @file-generic-blue);
  &:before {
    font-size: @file_icon_size;
  }
}

.c-icon--file-spaces {
  ._file_icon(@icon-file-spaces, @file-spaces-green);
}

.c-icon--file-spaces-small {
  ._file_icon(@icon-file-spaces-small, @file-spaces-green);
}

.c-icon--file-spaces-tiny {
  ._file_icon(@icon-file-spaces-tiny, @file-spaces-green);
}

.c-icon--file-image {
  ._file_icon(@icon-file-image, @file-generic-blue);
}

.c-icon--file-image-small {
  ._file_icon(@icon-file-image-small, @file-generic-blue);
}

.c-icon--file-image-tiny {
  ._file_icon(@icon-file-image-tiny, @file-generic-blue);
}

.c-icon--file-pdf {
  ._file_icon(@icon-file-pdf, @file-gdrive-red);
}

.c-icon--file-pdf-small {
  ._file_icon(@icon-file-pdf-small, @file-gdrive-red);
}

.c-icon--file-pdf-tiny {
  ._file_icon(@icon-file-pdf-tiny, @file-gdrive-red);
}

.c-icon--file-audio {
  ._file_icon(@icon-file-audio, @file-generic-blue);
}

.c-icon--file-audio-small {
  ._file_icon(@icon-file-audio-small, @file-generic-blue);
}

.c-icon--file-audio-tiny {
  ._file_icon(@icon-file-audio-tiny, @file-generic-blue);
}

.c-icon--file-video {
  ._file_icon(@icon-file-video, @file-generic-blue);
}

.c-icon--file-video-small {
  ._file_icon(@icon-file-video-small, @file-generic-blue);
}

.c-icon--file-video-tiny {
  ._file_icon(@icon-file-video-tiny, @file-generic-blue);
}

.c-icon--file-presentation {
  ._file_icon(@icon-file-presentation, @file-generic-blue);
}

.c-icon--file-presentation-small {
  ._file_icon(@icon-file-presentation-small, @file-generic-blue);
}

.c-icon--file-presentation-tiny {
  ._file_icon(@icon-file-presentation-tiny, @file-generic-blue);
}

.c-icon--file-email {
  ._file_icon(@icon-file-email, @file-generic-blue);
}

.c-icon--file-email-small {
  ._file_icon(@icon-file-email-small, @file-generic-blue);
}

.c-icon--file-email-tiny {
  ._file_icon(@icon-file-email-tiny, @file-generic-blue);
}

.c-icon--file-vector {
  ._file_icon(@icon-file-vector, @file-generic-blue);
}

.c-icon--file-vector-small {
  ._file_icon(@icon-file-vector-small, @file-generic-blue);
}

.c-icon--file-vector-tiny {
  ._file_icon(@icon-file-vector-tiny, @file-generic-blue);
}

.c-icon--file-spreadsheet {
  ._file_icon(@icon-file-spreadsheet, @file-generic-blue);
}

.c-icon--file-spreadsheet-small {
  ._file_icon(@icon-file-spreadsheet-small, @file-generic-blue);
}

.c-icon--file-spreadsheet-tiny {
  ._file_icon(@icon-file-spreadsheet-tiny, @file-generic-blue);
}

.c-icon--file-media-archive {
  ._file_icon(@icon-file-media-archive, @file-generic-blue);
}

.c-icon--file-media-archive-small {
  ._file_icon(@icon-file-media-archive-small, @file-generic-blue);
}

.c-icon--file-media-archive-tiny {
  ._file_icon(@icon-file-media-archive-tiny, @file-generic-blue);
}

.c-icon--file-archive {
  ._file_icon(@icon-file-archive, @file-generic-blue);
}

.c-icon--file-archive-small {
  ._file_icon(@icon-file-archive-small, @file-generic-blue);
}

.c-icon--file-archive-tiny {
  ._file_icon(@icon-file-archive-tiny, @file-generic-blue);
}

.c-icon--file-executable {
  ._file_icon(@icon-file-executable, @file-generic-blue);
}

.c-icon--file-executable-small {
  ._file_icon(@icon-file-executable-small, @file-generic-blue);
}

.c-icon--file-executable-tiny {
  ._file_icon(@icon-file-executable-tiny, @file-generic-blue);
}

.c-icon--file-disk-image {
  ._file_icon(@icon-file-disk-image, @file-generic-blue);
}

.c-icon--file-disk-image-small {
  ._file_icon(@icon-file-disk-image-small, @file-generic-blue);
}

.c-icon--file-disk-image-tiny {
  ._file_icon(@icon-file-disk-image-tiny, @file-generic-blue);
}

.c-icon--file-cad {
  ._file_icon(@icon-file-cad, @file-generic-blue);
}

.c-icon--file-cad-small {
  ._file_icon(@icon-file-cad-small, @file-generic-blue);
}

.c-icon--file-cad-tiny {
  ._file_icon(@icon-file-cad-tiny, @file-generic-blue);
}

.c-icon--file-3d-graphic {
  ._file_icon(@icon-file-3d-graphic, @file-generic-blue);
}

.c-icon--file-3d-graphic-small {
  ._file_icon(@icon-file-3d-graphic-small, @file-generic-blue);
}

.c-icon--file-3d-graphic-tiny {
  ._file_icon(@icon-file-3d-graphic-tiny, @file-generic-blue);
}

.c-icon--file-database {
  ._file_icon(@icon-file-database, @file-generic-blue);
}

.c-icon--file-database-small {
  ._file_icon(@icon-file-database-small, @file-generic-blue);
}

.c-icon--file-database-tiny {
  ._file_icon(@icon-file-database-tiny, @file-generic-blue);
}

.c-icon--file-binary {
  ._file_icon(@icon-file-binary, @file-generic-blue);
}

.c-icon--file-binary-small {
  ._file_icon(@icon-file-binary-small, @file-generic-blue);
}

.c-icon--file-binary-tiny {
  ._file_icon(@icon-file-binary-tiny, @file-generic-blue);
}

.c-icon--file-markdown {
  ._file_icon(@icon-file-markdown, @file-generic-blue);
}

.c-icon--file-markdown-small {
  ._file_icon(@icon-file-markdown-small, @file-generic-blue);
}

.c-icon--file-markdown-tiny {
  ._file_icon(@icon-file-markdown-tiny, @file-generic-blue);
}

.c-icon--file-text-post {
  ._file_icon(@icon-file-text-post, @file-spaces-green);
}

.c-icon--file-text-post-small {
  ._file_icon(@icon-file-text-post-small, @file-spaces-green);
}

.c-icon--file-text-post-tiny {
  ._file_icon(@icon-file-text-post-tiny, @file-spaces-green);
}

.c-icon--file-html {
  ._file_icon(@icon-file-html, @file-generic-blue);
}

.c-icon--file-html-small {
  ._file_icon(@icon-file-html-small, @file-generic-blue);
}

.c-icon--file-html-tiny {
  ._file_icon(@icon-file-html-tiny, @file-generic-blue);
}

.c-icon--file-code {
  ._file_icon(@icon-file-code, @file-generic-blue);
}

.c-icon--file-code-small {
  ._file_icon(@icon-file-code-small, @file-generic-blue);
}

.c-icon--file-code-tiny {
  ._file_icon(@icon-file-code-tiny, @file-generic-blue);
}

.c-icon--file-css {
  ._file_icon(@icon-file-css, @file-generic-blue);
}

.c-icon--file-css-small {
  ._file_icon(@icon-file-css-small, @file-generic-blue);
}

.c-icon--file-css-tiny {
  ._file_icon(@icon-file-css-tiny, @file-generic-blue);
}

.c-icon--file-php {
  ._file_icon(@icon-file-php, @file-generic-blue);
}

.c-icon--file-php-small {
  ._file_icon(@icon-file-php-small, @file-generic-blue);
}

.c-icon--file-php-tiny {
  ._file_icon(@icon-file-php-tiny, @file-generic-blue);
}

.c-icon--file-snippet {
  ._file_icon(@icon-file-snippet, @file-snippet-violet);
}

.c-icon--file-snippet-small {
  ._file_icon(@icon-file-snippet-small, @file-snippet-violet);
}

.c-icon--file-snippet-tiny {
  ._file_icon(@icon-file-snippet-tiny, @file-snippet-violet);
}

.c-icon--file-word {
  ._file_icon(@icon-file-word, @file-ms-word-blue);
}

.c-icon--file-word-small {
  ._file_icon(@icon-file-word-small, @file-ms-word-blue);
}

.c-icon--file-word-tiny {
  ._file_icon(@icon-file-word-tiny, @file-ms-word-blue);
}

.c-icon--file-excel {
  ._file_icon(@icon-file-excel, @file-ms-excel-green);
}

.c-icon--file-excel-small {
  ._file_icon(@icon-file-excel-small, @file-ms-excel-green);
}

.c-icon--file-excel-tiny {
  ._file_icon(@icon-file-excel-tiny, @file-ms-excel-green);
}

.c-icon--file-powerpoint {
  ._file_icon(@icon-file-powerpoint, @file-ms-powerpoint-orange);
}

.c-icon--file-powerpoint-small {
  ._file_icon(@icon-file-powerpoint-small, @file-ms-powerpoint-orange);
}

.c-icon--file-powerpoint-tiny {
  ._file_icon(@icon-file-powerpoint-tiny, @file-ms-powerpoint-orange);
}

.c-icon--file-illustrator {
  ._file_icon(@icon-file-illustrator, @file-adobe-ai-orange);
}

.c-icon--file-illustrator-small {
  ._file_icon(@icon-file-illustrator-small, @file-adobe-ai-orange);
}

.c-icon--file-illustrator-tiny {
  ._file_icon(@icon-file-illustrator-tiny, @file-adobe-ai-orange);
}

.c-icon--file-photoshop {
  ._file_icon(@icon-file-photoshop, @file-adobe-ps-blue);
}

.c-icon--file-photoshop-small {
  ._file_icon(@icon-file-photoshop-small, @file-adobe-ps-blue);
}

.c-icon--file-photoshop-tiny {
  ._file_icon(@icon-file-photoshop-tiny, @file-adobe-ps-blue);
}

.c-icon--file-indesign {
  ._file_icon(@icon-file-indesign, @file-adobe-in-pink);
}

.c-icon--file-indesign-small {
  ._file_icon(@icon-file-indesign-small, @file-adobe-in-pink);
}

.c-icon--file-indesign-tiny {
  ._file_icon(@icon-file-indesign-tiny, @file-adobe-in-pink);
}

.c-icon--file-adobe-flash {
  ._file_icon(@icon-file-adobe-flash, @file-adobe-flash-red);
}

.c-icon--file-adobe-flash-small {
  ._file_icon(@icon-file-adobe-flash-small, @file-adobe-flash-red);
}

.c-icon--file-adobe-flash-tiny {
  ._file_icon(@icon-file-adobe-flash-tiny, @file-adobe-flash-red);
}

.c-icon--file-adobe-swf {
  ._file_icon(@icon-file-adobe-swf, @file-adobe-flash-red);
}

.c-icon--file-adobe-swf-small {
  ._file_icon(@icon-file-adobe-swf-small, @file-adobe-flash-red);
}

.c-icon--file-adobe-swf-tiny {
  ._file_icon(@icon-file-adobe-swf-tiny, @file-adobe-flash-red);
}

.c-icon--file-iphone-app {
  ._file_icon(@icon-file-iphone-app, @file-apple-gray);
}

.c-icon--file-iphone-app-small {
  ._file_icon(@icon-file-iphone-app-small, @file-apple-gray);
}

.c-icon--file-iphone-app-tiny {
  ._file_icon(@icon-file-iphone-app-tiny, @file-apple-gray);
}

.c-icon--file-android-app {
  ._file_icon(@icon-file-android-app, @file-android-green);
}

.c-icon--file-android-app-small {
  ._file_icon(@icon-file-android-app-small, @file-android-green);
}

.c-icon--file-android-app-tiny {
  ._file_icon(@icon-file-android-app-tiny, @file-android-green);
}

.c-icon--file-dropbox {
  ._file_icon(@icon-file-dropbox, @file-dropbox-blue);
}

.c-icon--file-dropbox-small {
  ._file_icon(@icon-file-dropbox-small, @file-dropbox-blue);
}

.c-icon--file-dropbox-tiny {
  ._file_icon(@icon-file-dropbox-tiny, @file-dropbox-blue);
}

.c-icon--file-google-presentation {
  ._file_icon(@icon-file-google-presentation, @file-gdrive-yellow);
}

.c-icon--file-google-presentation-small {
  ._file_icon(@icon-file-google-presentation-small, @file-gdrive-yellow);
}

.c-icon--file-google-presentation-tiny {
  ._file_icon(@icon-file-google-presentation-tiny, @file-gdrive-yellow);
}

.c-icon--file-google-spreadsheet {
  ._file_icon(@icon-file-google-spreadsheet, @file-gdrive-green);
}

.c-icon--file-google-spreadsheet-small {
  ._file_icon(@icon-file-google-spreadsheet-small, @file-gdrive-green);
}

.c-icon--file-google-spreadsheet-tiny {
  ._file_icon(@icon-file-google-spreadsheet-tiny, @file-gdrive-green);
}

.c-icon--file-google-document {
  ._file_icon(@icon-file-google-document, @file-gdrive-blue);
}

.c-icon--file-google-document-small {
  ._file_icon(@icon-file-google-document-small, @file-gdrive-blue);
}

.c-icon--file-google-document-tiny {
  ._file_icon(@icon-file-google-document-tiny, @file-gdrive-blue);
}

.c-icon--file-google-form {
  ._file_icon(@icon-file-google-form, @file-gdrive-red);
}

.c-icon--file-google-form-small {
  ._file_icon(@icon-file-google-form-small, @file-gdrive-red);
}

.c-icon--file-google-form-tiny {
  ._file_icon(@icon-file-google-form-tiny, @file-gdrive-red);
}

.c-icon--file-qtz {
  ._file_icon(@icon-file-qtz, @file-generic-blue);
}

.c-icon--file-qtz-small {
  ._file_icon(@icon-file-qtz-small, @file-generic-blue);
}

.c-icon--file-qtz-tiny {
  ._file_icon(@icon-file-qtz-tiny, @file-generic-blue);
}

.c-icon--file-sketch {
  ._file_icon(@icon-file-sketch, @file-adobe-ai-orange);
}

.c-icon--file-sketch-small {
  ._file_icon(@icon-file-sketch-small, @file-adobe-ai-orange);
}

.c-icon--file-sketch-tiny {
  ._file_icon(@icon-file-sketch-tiny, @file-adobe-ai-orange);
}

.c-icon--file-figma-tiny {
  ._file_icon(@icon-file-figma-tiny, @file-figma-black);
}
`,`/*\r
 * PLASTIC\r
 * Fonts\r
 * Site-wide fonts and helpers\r
 */\r
\r
@font-face {\r
  font-family: 'appleLogo';\r
  src: local('Lucida Grande');\r
  unicode-range: U+F8FF;\r
}\r
\r
/* Double-quotes are required to get Helvetica Neue to load properly */\r
@lato: 'Slack-Lato', 'appleLogo', sans-serif;\r
@helvetica: 'Helvetica Neue', Helvetica, 'Segoe UI', Tahoma, Arial, sans-serif;\r
\r
/*\r
 * Explanation of font-family choice / sequence ...\r
 * consolas is a MSFT font included with Windows XP and is designed for legibility,\r
 * ClearType-friendly etc. https://en.wikipedia.org/wiki/Consolas\r
 * \`courier\` is next as it looks nice on the Mac, which won't have Consolas.\r
 * there is \`Menlo\` on the Mac, but it's quite tall and long compared to courier.\r
 * as a fallback, \`monospace\` is the generic family we want to render snippets with.\r
 */\r
@monospace: Consolas, monaco, courier, monospace !important;\r
`,`/*\r
 * PLASTIC\r
 * Utilities\r
 * Mixins for common styles.\r
 *\r
 * To be used in other stylesheets in the form:\r
 * .selector {\r
 *     .name_of_mixin;\r
 * }\r
 *\r
 * plastic_helpers.source.less defines helper classes for these mixins, to be used as inline classes in markup:\r
 * <div class="name_of_helper"></div>\r
 *\r
 */\r
\r
@import './plastic_typography.less';\r
@import './plastic_colors.less';\r
\r
// Fonts\r
.helvetica() {\r
  font-family: @helvetica;\r
}\r
.lato() {\r
  font-family: @lato;\r
  font-weight: 400;\r
  -webkit-font-smoothing: antialiased;\r
}\r
.lato_black() {\r
  font-family: @lato;\r
  font-weight: 900;\r
}\r
.lato_bold() {\r
  font-family: @lato;\r
  font-weight: 700;\r
}\r
.lato_regular() {\r
  font-family: @lato;\r
  font-weight: 500;\r
}\r
.lato_light() {\r
  font-family: @lato;\r
  font-weight: 300;\r
}\r
.monospace() {\r
  font-family: @monospace;\r
  -webkit-font-variant-ligatures: none;\r
  font-variant-ligatures: none;\r
}\r
\r
// Unit conversion\r
.px_to_rem(@property, @px_value) when (ispixel(@px_value)) {\r
  @{property}: unit(@px_value / 16, rem);\r
}\r
\r
/* Font Size Mixin\r
 * For example:\r
 * 	.font_size(16px);		// 16 is in px unit and will output in rem unit: \`font-size: 1rem;\`\r
*/\r
.font_size(@px_value) when (ispixel(@px_value)) {\r
  .px_to_rem(font-size, @px_value);\r
}\r
\r
/* Line Height Mixin\r
 * For example:\r
 * 	.line_height(24px);	// 24 is in px unit and will output in rem unit: \`line-height: 1.5rem;\`\r
*/\r
.line_height(@px_value) when (ispixel(@px_value)) {\r
  .px_to_rem(line-height, @px_value);\r
}\r
\r
// Font Styles\r
.normal() {\r
  font-weight: normal;\r
}\r
.black() {\r
  font-weight: 900;\r
}\r
.bold() {\r
  font-weight: 700;\r
}\r
.medium() {\r
  font-weight: 500;\r
}\r
.light() {\r
  font-weight: 300;\r
}\r
.italic() {\r
  font-style: italic;\r
}\r
.underline() {\r
  text-decoration: underline;\r
}\r
.no_underline() {\r
  text-decoration: none;\r
}\r
.tiny {\r
  font-size: 0.7rem;\r
}\r
.small {\r
  font-size: 0.9rem;\r
}\r
`],sourceRoot:""}]);const Jt=k},4411:(_,d,E)=>{"use strict";E.d(d,{Z:()=>h});const h=E.p+"slack-icons-v25aaab12924ee1742103112e4bfa21b70.woff2"},35:(_,d,E)=>{"use strict";E.d(d,{Z:()=>h});const h=E.p+"lato-blackd3e44e6115ad32c371760205d27375ed.woff2"},3535:(_,d,E)=>{"use strict";E.d(d,{Z:()=>h});const h=E.p+"lato-bold31816c24a18fbc659282368ab2ac9478.woff2"},1266:(_,d,E)=>{"use strict";E.d(d,{Z:()=>h});const h=E.p+"lato-italic-black62bc5da14d9c6ff41e5f0f456d314808.woff2"},737:(_,d,E)=>{"use strict";E.d(d,{Z:()=>h});const h=E.p+"lato-italic-bold365ea5a303e2259ca5ab8247820f087b.woff2"},6254:(_,d,E)=>{"use strict";E.d(d,{Z:()=>h});const h=E.p+"lato-italic-light074c7fc38126bb94664d75a61d77b746.woff2"},3528:(_,d,E)=>{"use strict";E.d(d,{Z:()=>h});const h=E.p+"lato-italic4484c4211566a05bd71b1f4758adde46.woff2"},4897:(_,d,E)=>{"use strict";E.d(d,{Z:()=>h});const h=E.p+"lato-light2815bd9ba07f2cbe781a3ee1ed79f863.woff2"},8015:(_,d,E)=>{"use strict";E.d(d,{Z:()=>h});const h=E.p+"lato-regularf1aa7a0753149183efa2f47ac56de822.woff2"},9685:(_,d,E)=>{"use strict";E.d(d,{c:()=>S,n:()=>v});var h=!0;function S(){return h}function v(){return typeof __SENTRY_BROWSER_BUNDLE__!="undefined"&&!!__SENTRY_BROWSER_BUNDLE__}},5897:(_,d,E)=>{"use strict";E.d(d,{R:()=>v});var h=E(5409),S={};function v(){return(0,h.KV)()?global:typeof window!="undefined"?window:typeof self!="undefined"?self:S}},5409:(_,d,E)=>{"use strict";E.d(d,{KV:()=>S,l$:()=>v});var h=E(9685);_=E.hmd(_);function S(){return!(0,h.n)()&&Object.prototype.toString.call(typeof process!="undefined"?process:0)==="[object process]"}function v(b,y){return b.require(y)}function F(b){var y;try{y=v(_,b)}catch{}try{var w=v(_,"process").cwd;y=v(_,w()+"/node_modules/"+b)}catch{}return y}},3264:(_,d,E)=>{"use strict";E.d(d,{yW:()=>x,ph:()=>z});var h=E(5897),S=E(5409);_=E.hmd(_);var v={nowSeconds:function(){return Date.now()/1e3}};function F(){var O=(0,h.R)().performance;if(!(!O||!O.now)){var Y=Date.now()-O.now();return{now:function(){return O.now()},timeOrigin:Y}}}function b(){try{var O=(0,S.l$)(_,"perf_hooks");return O.performance}catch{return}}var y=(0,S.KV)()?b():F(),w=y===void 0?v:{nowSeconds:function(){return(y.timeOrigin+y.now())/1e3}},x=v.nowSeconds.bind(v),z=w.nowSeconds.bind(w),W=null,G=y!==void 0,q,$=function(){var O=(0,h.R)().performance;if(!O||!O.now){q="none";return}var Y=3600*1e3,k=O.now(),T=Date.now(),L=O.timeOrigin?Math.abs(O.timeOrigin+k-T):Y,U=L<Y,I=O.timing&&O.timing.navigationStart,B=typeof I=="number",m=B?Math.abs(I+k-T):Y,sn=m<Y;return U||sn?L<=m?(q="timeOrigin",O.timeOrigin):(q="navigationStart",I):(q="dateNow",T)}()},1128:_=>{"use strict";_.exports=function(d){var E=[];return E.toString=function(){return this.map(function(S){var v=d(S);return S[2]?"@media ".concat(S[2]," {").concat(v,"}"):v}).join("")},E.i=function(h,S,v){typeof h=="string"&&(h=[[null,h,""]]);var F={};if(v)for(var b=0;b<this.length;b++){var y=this[b][0];y!=null&&(F[y]=!0)}for(var w=0;w<h.length;w++){var x=[].concat(h[w]);v&&F[x[0]]||(S&&(x[2]?x[2]="".concat(S," and ").concat(x[2]):x[2]=S),E.push(x))}},E}},428:_=>{"use strict";function d(b,y){return F(b)||v(b,y)||h(b,y)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(b,y){if(b){if(typeof b=="string")return S(b,y);var w=Object.prototype.toString.call(b).slice(8,-1);if(w==="Object"&&b.constructor&&(w=b.constructor.name),w==="Map"||w==="Set")return Array.from(b);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return S(b,y)}}function S(b,y){(y==null||y>b.length)&&(y=b.length);for(var w=0,x=new Array(y);w<y;w++)x[w]=b[w];return x}function v(b,y){var w=b&&(typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"]);if(w!=null){var x=[],z=!0,W=!1,G,q;try{for(w=w.call(b);!(z=(G=w.next()).done)&&(x.push(G.value),!(y&&x.length===y));z=!0);}catch($){W=!0,q=$}finally{try{!z&&w.return!=null&&w.return()}finally{if(W)throw q}}return x}}function F(b){if(Array.isArray(b))return b}_.exports=function(y){var w=d(y,4),x=w[1],z=w[3];if(typeof btoa=="function"){var W=btoa(unescape(encodeURIComponent(JSON.stringify(z)))),G="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(W),q="/*# ".concat(G," */"),$=z.sources.map(function(O){return"/*# sourceURL=".concat(z.sourceRoot||"").concat(O," */")});return[x].concat($).concat([q]).join(`
`)}return[x].join(`
`)}},4322:_=>{"use strict";_.exports=function(d,E){return E||(E={}),d=d&&d.__esModule?d.default:d,typeof d!="string"?d:(/^['"].*['"]$/.test(d)&&(d=d.slice(1,-1)),E.hash&&(d+=E.hash),/["'() \t\n]/.test(d)||E.needQuotes?'"'.concat(d.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):d)}},4845:_=>{"use strict";var d=function(T){return E(T)&&!h(T)};function E(k){return!!k&&typeof k=="object"}function h(k){var T=Object.prototype.toString.call(k);return T==="[object RegExp]"||T==="[object Date]"||F(k)}var S=typeof Symbol=="function"&&Symbol.for,v=S?Symbol.for("react.element"):60103;function F(k){return k.$$typeof===v}function b(k){return Array.isArray(k)?[]:{}}function y(k,T){return T.clone!==!1&&T.isMergeableObject(k)?O(b(k),k,T):k}function w(k,T,L){return k.concat(T).map(function(U){return y(U,L)})}function x(k,T){if(!T.customMerge)return O;var L=T.customMerge(k);return typeof L=="function"?L:O}function z(k){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(k).filter(function(T){return k.propertyIsEnumerable(T)}):[]}function W(k){return Object.keys(k).concat(z(k))}function G(k,T){try{return T in k}catch{return!1}}function q(k,T){return G(k,T)&&!(Object.hasOwnProperty.call(k,T)&&Object.propertyIsEnumerable.call(k,T))}function $(k,T,L){var U={};return L.isMergeableObject(k)&&W(k).forEach(function(I){U[I]=y(k[I],L)}),W(T).forEach(function(I){q(k,I)||(G(k,I)&&L.isMergeableObject(T[I])?U[I]=x(I,L)(k[I],T[I],L):U[I]=y(T[I],L))}),U}function O(k,T,L){L=L||{},L.arrayMerge=L.arrayMerge||w,L.isMergeableObject=L.isMergeableObject||d,L.cloneUnlessOtherwiseSpecified=y;var U=Array.isArray(T),I=Array.isArray(k),B=U===I;return B?U?L.arrayMerge(k,T,L):$(k,T,L):y(T,L)}O.all=function(T,L){if(!Array.isArray(T))throw new Error("first argument should be an array");return T.reduce(function(U,I){return O(U,I,L)},{})};var Y=O;_.exports=Y},449:(_,d,E)=>{"use strict";var h=E(6722),S={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},v={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},F={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},b={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},y={};y[h.ForwardRef]=F,y[h.Memo]=b;function w(Y){return h.isMemo(Y)?b:y[Y.$$typeof]||S}var x=Object.defineProperty,z=Object.getOwnPropertyNames,W=Object.getOwnPropertySymbols,G=Object.getOwnPropertyDescriptor,q=Object.getPrototypeOf,$=Object.prototype;function O(Y,k,T){if(typeof k!="string"){if($){var L=q(k);L&&L!==$&&O(Y,L,T)}var U=z(k);W&&(U=U.concat(W(k)));for(var I=w(Y),B=w(k),m=0;m<U.length;++m){var sn=U[m];if(!v[sn]&&!(T&&T[sn])&&!(B&&B[sn])&&!(I&&I[sn])){var be=G(k,sn);try{x(Y,sn,be)}catch{}}}}return Y}_.exports=O},5140:(_,d)=>{"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=typeof Symbol=="function"&&Symbol.for,h=E?Symbol.for("react.element"):60103,S=E?Symbol.for("react.portal"):60106,v=E?Symbol.for("react.fragment"):60107,F=E?Symbol.for("react.strict_mode"):60108,b=E?Symbol.for("react.profiler"):60114,y=E?Symbol.for("react.provider"):60109,w=E?Symbol.for("react.context"):60110,x=E?Symbol.for("react.async_mode"):60111,z=E?Symbol.for("react.concurrent_mode"):60111,W=E?Symbol.for("react.forward_ref"):60112,G=E?Symbol.for("react.suspense"):60113,q=E?Symbol.for("react.suspense_list"):60120,$=E?Symbol.for("react.memo"):60115,O=E?Symbol.for("react.lazy"):60116,Y=E?Symbol.for("react.block"):60121,k=E?Symbol.for("react.fundamental"):60117,T=E?Symbol.for("react.responder"):60118,L=E?Symbol.for("react.scope"):60119;function U(B){if(typeof B=="object"&&B!==null){var m=B.$$typeof;switch(m){case h:switch(B=B.type,B){case x:case z:case v:case b:case F:case G:return B;default:switch(B=B&&B.$$typeof,B){case w:case W:case O:case $:case y:return B;default:return m}}case S:return m}}}function I(B){return U(B)===z}d.AsyncMode=x,d.ConcurrentMode=z,d.ContextConsumer=w,d.ContextProvider=y,d.Element=h,d.ForwardRef=W,d.Fragment=v,d.Lazy=O,d.Memo=$,d.Portal=S,d.Profiler=b,d.StrictMode=F,d.Suspense=G,d.isAsyncMode=function(B){return I(B)||U(B)===x},d.isConcurrentMode=I,d.isContextConsumer=function(B){return U(B)===w},d.isContextProvider=function(B){return U(B)===y},d.isElement=function(B){return typeof B=="object"&&B!==null&&B.$$typeof===h},d.isForwardRef=function(B){return U(B)===W},d.isFragment=function(B){return U(B)===v},d.isLazy=function(B){return U(B)===O},d.isMemo=function(B){return U(B)===$},d.isPortal=function(B){return U(B)===S},d.isProfiler=function(B){return U(B)===b},d.isStrictMode=function(B){return U(B)===F},d.isSuspense=function(B){return U(B)===G},d.isValidElementType=function(B){return typeof B=="string"||typeof B=="function"||B===v||B===z||B===b||B===F||B===G||B===q||typeof B=="object"&&B!==null&&(B.$$typeof===O||B.$$typeof===$||B.$$typeof===y||B.$$typeof===w||B.$$typeof===W||B.$$typeof===k||B.$$typeof===T||B.$$typeof===L||B.$$typeof===Y)},d.typeOf=U},6722:(_,d,E)=>{"use strict";_.exports=E(5140)},8566:(_,d,E)=>{"use strict";var h=E(5232);function S(){}function v(){}v.resetWarningCache=S,_.exports=function(){function F(w,x,z,W,G,q){if(q!==h){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}}F.isRequired=F;function b(){return F}var y={array:F,bool:F,func:F,number:F,object:F,string:F,symbol:F,any:F,arrayOf:b,element:F,elementType:F,instanceOf:b,node:F,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:v,resetWarningCache:S};return y.PropTypes=y,y}},7396:(_,d,E)=>{if(!1)var h,S;else _.exports=E(8566)()},5232:_=>{"use strict";var d="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";_.exports=d},4994:(_,d)=>{"use strict";var E;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=typeof Symbol=="function"&&Symbol.for,S=h?Symbol.for("react.element"):60103,v=h?Symbol.for("react.portal"):60106,F=h?Symbol.for("react.fragment"):60107,b=h?Symbol.for("react.strict_mode"):60108,y=h?Symbol.for("react.profiler"):60114,w=h?Symbol.for("react.provider"):60109,x=h?Symbol.for("react.context"):60110,z=h?Symbol.for("react.async_mode"):60111,W=h?Symbol.for("react.concurrent_mode"):60111,G=h?Symbol.for("react.forward_ref"):60112,q=h?Symbol.for("react.suspense"):60113,$=h?Symbol.for("react.suspense_list"):60120,O=h?Symbol.for("react.memo"):60115,Y=h?Symbol.for("react.lazy"):60116,k=h?Symbol.for("react.block"):60121,T=h?Symbol.for("react.fundamental"):60117,L=h?Symbol.for("react.responder"):60118,U=h?Symbol.for("react.scope"):60119;function I(m){if(typeof m=="object"&&m!==null){var sn=m.$$typeof;switch(sn){case S:switch(m=m.type,m){case z:case W:case F:case y:case b:case q:return m;default:switch(m=m&&m.$$typeof,m){case x:case G:case Y:case O:case w:return m;default:return sn}}case v:return sn}}}function B(m){return I(m)===W}E=z,E=W,E=x,E=w,E=S,E=G,E=F,E=Y,E=O,E=v,E=y,E=b,E=q,E=function(m){return B(m)||I(m)===z},E=B,E=function(m){return I(m)===x},E=function(m){return I(m)===w},E=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===S},E=function(m){return I(m)===G},E=function(m){return I(m)===F},E=function(m){return I(m)===Y},E=function(m){return I(m)===O},E=function(m){return I(m)===v},E=function(m){return I(m)===y},E=function(m){return I(m)===b},E=function(m){return I(m)===q},E=function(m){return typeof m=="string"||typeof m=="function"||m===F||m===W||m===y||m===b||m===q||m===$||typeof m=="object"&&m!==null&&(m.$$typeof===Y||m.$$typeof===O||m.$$typeof===w||m.$$typeof===x||m.$$typeof===G||m.$$typeof===T||m.$$typeof===L||m.$$typeof===U||m.$$typeof===k)},E=I},6533:(_,d,E)=>{"use strict";E(4994)},3284:_=>{"use strict";var d=[];function E(v){for(var F=-1,b=0;b<d.length;b++)if(d[b].identifier===v){F=b;break}return F}function h(v,F){for(var b={},y=[],w=0;w<v.length;w++){var x=v[w],z=F.base?x[0]+F.base:x[0],W=b[z]||0,G="".concat(z," ").concat(W);b[z]=W+1;var q=E(G),$={css:x[1],media:x[2],sourceMap:x[3],supports:x[4],layer:x[5]};if(q!==-1)d[q].references++,d[q].updater($);else{var O=S($,F);F.byIndex=w,d.splice(w,0,{identifier:G,updater:O,references:1})}y.push(G)}return y}function S(v,F){var b=F.domAPI(F);b.update(v);var y=function(x){if(x){if(x.css===v.css&&x.media===v.media&&x.sourceMap===v.sourceMap&&x.supports===v.supports&&x.layer===v.layer)return;b.update(v=x)}else b.remove()};return y}_.exports=function(v,F){F=F||{},v=v||[];var b=h(v,F);return function(w){w=w||[];for(var x=0;x<b.length;x++){var z=b[x],W=E(z);d[W].references--}for(var G=h(w,F),q=0;q<b.length;q++){var $=b[q],O=E($);d[O].references===0&&(d[O].updater(),d.splice(O,1))}b=G}}},1836:_=>{"use strict";var d={};function E(S){if(typeof d[S]=="undefined"){var v=document.querySelector(S);if(window.HTMLIFrameElement&&v instanceof window.HTMLIFrameElement)try{v=v.contentDocument.head}catch{v=null}d[S]=v}return d[S]}function h(S,v){var F=E(S);if(!F)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");F.appendChild(v)}_.exports=h},1599:_=>{"use strict";function d(E){var h=document.createElement("style");return E.setAttributes(h,E.attributes),E.insert(h,E.options),h}_.exports=d},5313:(_,d,E)=>{"use strict";function h(S){var v=E.nc;v&&S.setAttribute("nonce",v)}_.exports=h},9909:_=>{"use strict";function d(S,v,F){var b="";F.supports&&(b+="@supports (".concat(F.supports,") {")),F.media&&(b+="@media ".concat(F.media," {"));var y=typeof F.layer!="undefined";y&&(b+="@layer".concat(F.layer.length>0?" ".concat(F.layer):""," {")),b+=F.css,y&&(b+="}"),F.media&&(b+="}"),F.supports&&(b+="}");var w=F.sourceMap;w&&typeof btoa!="undefined"&&(b+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(w))))," */")),v.styleTagTransform(b,S,v.options)}function E(S){if(S.parentNode===null)return!1;S.parentNode.removeChild(S)}function h(S){var v=S.insertStyleElement(S);return{update:function(b){d(v,S,b)},remove:function(){E(v)}}}_.exports=h},4923:_=>{"use strict";function d(E,h){if(h.styleSheet)h.styleSheet.cssText=E;else{for(;h.firstChild;)h.removeChild(h.firstChild);h.appendChild(document.createTextNode(E))}}_.exports=d},1174:(_,d,E)=>{_.exports=E(5033)(400)},5033:_=>{"use strict";_.exports=rendererVendor}},Sr={};function M(_){var d=Sr[_];if(d!==void 0)return d.exports;var E=Sr[_]={id:_,loaded:!1,exports:{}};return Za[_](E,E.exports,M),E.loaded=!0,E.exports}M.n=_=>{var d=_&&_.__esModule?()=>_.default:()=>_;return M.d(d,{a:d}),d},M.d=(_,d)=>{for(var E in d)M.o(d,E)&&!M.o(_,E)&&Object.defineProperty(_,E,{enumerable:!0,get:d[E]})},M.hmd=_=>(_=Object.create(_),_.children||(_.children=[]),Object.defineProperty(_,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+_.id)}}),_),M.o=(_,d)=>Object.prototype.hasOwnProperty.call(_,d),M.r=_=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},M.p="./";var xr={};(typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{}).SENTRY_RELEASE={id:"Slack@4.33.73"},(()=>{"use strict";M.r(xr);var _={};M.r(_),M.d(_,{FunctionToString:()=>Wc,InboundFilters:()=>Yc});var d={};M.r(d),M.d(d,{Breadcrumbs:()=>Ar,Dedupe:()=>wa,GlobalHandlers:()=>Tt,LinkedErrors:()=>va,TryCatch:()=>ya,UserAgent:()=>Ca});var E={};M.r(E),M.d(E,{EventToMain:()=>Ue,ScopeToMain:()=>Je});var h=M(3284),S=M.n(h),v=M(9909),F=M.n(v),b=M(1836),y=M.n(b),w=M(5313),x=M.n(w),z=M(1599),W=M.n(z),G=M(4923),q=M.n(G),$=M(3551),O={};O.styleTagTransform=q(),O.setAttributes=x(),O.insert=y().bind(null,"head"),O.domAPI=F(),O.insertStyleElement=W();var Y=S()($.Z,O);const k=$.Z&&$.Z.locals?$.Z.locals:void 0;function T(){this.__data__=[],this.size=0}const L=T;function U(n,e){return n===e||n!==n&&e!==e}const I=U;function B(n,e){for(var t=n.length;t--;)if(I(n[t][0],e))return t;return-1}const m=B;var sn=Array.prototype,be=sn.splice;function $e(n){var e=this.__data__,t=m(e,n);if(t<0)return!1;var o=e.length-1;return t==o?e.pop():be.call(e,t,1),--this.size,!0}const Jt=$e;function Qa(n){var e=this.__data__,t=m(e,n);return t<0?void 0:e[t][1]}const nl=Qa;function el(n){return m(this.__data__,n)>-1}const tl=el;function ol(n,e){var t=this.__data__,o=m(t,n);return o<0?(++this.size,t.push([n,e])):t[o][1]=e,this}const rl=ol;function Wn(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var o=n[e];this.set(o[0],o[1])}}Wn.prototype.clear=L,Wn.prototype.delete=Jt,Wn.prototype.get=nl,Wn.prototype.has=tl,Wn.prototype.set=rl;const Ke=Wn;function il(){this.__data__=new Ke,this.size=0}const cl=il;function al(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}const ll=al;function sl(n){return this.__data__.get(n)}const fl=sl;function Al(n){return this.__data__.has(n)}const ul=Al;var El=typeof global=="object"&&global&&global.Object===Object&&global;const Or=El;var dl=typeof self=="object"&&self&&self.Object===Object&&self,gl=Or||dl||Function("return this")();const vn=gl;var pl=vn.Symbol;const hn=pl;var Tr=Object.prototype,bl=Tr.hasOwnProperty,hl=Tr.toString,he=hn?hn.toStringTag:void 0;function _l(n){var e=bl.call(n,he),t=n[he];try{n[he]=void 0;var o=!0}catch{}var r=hl.call(n);return o&&(e?n[he]=t:delete n[he]),r}const ml=_l;var yl=Object.prototype,Bl=yl.toString;function vl(n){return Bl.call(n)}const Fl=vl;var Cl="[object Null]",wl="[object Undefined]",Pr=hn?hn.toStringTag:void 0;function kl(n){return n==null?n===void 0?wl:Cl:Pr&&Pr in Object(n)?ml(n):Fl(n)}const jn=kl;function Sl(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}const pn=Sl;var xl="[object AsyncFunction]",Ol="[object Function]",Tl="[object GeneratorFunction]",Pl="[object Proxy]";function Rl(n){if(!pn(n))return!1;var e=jn(n);return e==Ol||e==Tl||e==xl||e==Pl}const Ut=Rl;var Il=vn["__core-js_shared__"];const qt=Il;var Rr=function(){var n=/[^.]+$/.exec(qt&&qt.keys&&qt.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function Dl(n){return!!Rr&&Rr in n}const jl=Dl;var Ml=Function.prototype,Ll=Ml.toString;function Nl(n){if(n!=null){try{return Ll.call(n)}catch{}try{return n+""}catch{}}return""}const Mn=Nl;var Jl=/[\\^$.*+?()[\]{}|]/g,Ul=/^\[object .+?Constructor\]$/,ql=Function.prototype,Hl=Object.prototype,zl=ql.toString,Wl=Hl.hasOwnProperty,Gl=RegExp("^"+zl.call(Wl).replace(Jl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function $l(n){if(!pn(n)||jl(n))return!1;var e=Ut(n)?Gl:Ul;return e.test(Mn(n))}const Kl=$l;function Yl(n,e){return n==null?void 0:n[e]}const Vl=Yl;function Xl(n,e){var t=Vl(n,e);return Kl(t)?t:void 0}const Ln=Xl;var Zl=Ln(vn,"Map");const _e=Zl;var Ql=Ln(Object,"create");const me=Ql;function ns(){this.__data__=me?me(null):{},this.size=0}const es=ns;function ts(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}const os=ts;var rs="__lodash_hash_undefined__",is=Object.prototype,cs=is.hasOwnProperty;function as(n){var e=this.__data__;if(me){var t=e[n];return t===rs?void 0:t}return cs.call(e,n)?e[n]:void 0}const ls=as;var ss=Object.prototype,fs=ss.hasOwnProperty;function As(n){var e=this.__data__;return me?e[n]!==void 0:fs.call(e,n)}const us=As;var Es="__lodash_hash_undefined__";function ds(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=me&&e===void 0?Es:e,this}const gs=ds;function Gn(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var o=n[e];this.set(o[0],o[1])}}Gn.prototype.clear=es,Gn.prototype.delete=os,Gn.prototype.get=ls,Gn.prototype.has=us,Gn.prototype.set=gs;const Ir=Gn;function ps(){this.size=0,this.__data__={hash:new Ir,map:new(_e||Ke),string:new Ir}}const bs=ps;function hs(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}const _s=hs;function ms(n,e){var t=n.__data__;return _s(e)?t[typeof e=="string"?"string":"hash"]:t.map}const Ye=ms;function ys(n){var e=Ye(this,n).delete(n);return this.size-=e?1:0,e}const Bs=ys;function vs(n){return Ye(this,n).get(n)}const Fs=vs;function Cs(n){return Ye(this,n).has(n)}const ws=Cs;function ks(n,e){var t=Ye(this,n),o=t.size;return t.set(n,e),this.size+=t.size==o?0:1,this}const Ss=ks;function $n(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var o=n[e];this.set(o[0],o[1])}}$n.prototype.clear=bs,$n.prototype.delete=Bs,$n.prototype.get=Fs,$n.prototype.has=ws,$n.prototype.set=Ss;const Ve=$n;var xs=200;function Os(n,e){var t=this.__data__;if(t instanceof Ke){var o=t.__data__;if(!_e||o.length<xs-1)return o.push([n,e]),this.size=++t.size,this;t=this.__data__=new Ve(o)}return t.set(n,e),this.size=t.size,this}const Ts=Os;function Kn(n){var e=this.__data__=new Ke(n);this.size=e.size}Kn.prototype.clear=cl,Kn.prototype.delete=ll,Kn.prototype.get=fl,Kn.prototype.has=ul,Kn.prototype.set=Ts;const Yn=Kn;var Ps="__lodash_hash_undefined__";function Rs(n){return this.__data__.set(n,Ps),this}const Is=Rs;function Ds(n){return this.__data__.has(n)}const js=Ds;function Xe(n){var e=-1,t=n==null?0:n.length;for(this.__data__=new Ve;++e<t;)this.add(n[e])}Xe.prototype.add=Xe.prototype.push=Is,Xe.prototype.has=js;const Ht=Xe;function Ms(n,e){for(var t=-1,o=n==null?0:n.length;++t<o;)if(e(n[t],t,n))return!0;return!1}const Ls=Ms;function Ns(n,e){return n.has(e)}const zt=Ns;var Js=1,Us=2;function qs(n,e,t,o,r,i){var c=t&Js,a=n.length,s=e.length;if(a!=s&&!(c&&s>a))return!1;var l=i.get(n),f=i.get(e);if(l&&f)return l==e&&f==n;var A=-1,u=!0,g=t&Us?new Ht:void 0;for(i.set(n,e),i.set(e,n);++A<a;){var p=n[A],R=e[A];if(o)var D=c?o(R,p,A,e,n,i):o(p,R,A,n,e,i);if(D!==void 0){if(D)continue;u=!1;break}if(g){if(!Ls(e,function(j,H){if(!zt(g,H)&&(p===j||r(p,j,t,o,i)))return g.push(H)})){u=!1;break}}else if(!(p===R||r(p,R,t,o,i))){u=!1;break}}return i.delete(n),i.delete(e),u}const Dr=qs;var Hs=vn.Uint8Array;const Ze=Hs;function zs(n){var e=-1,t=Array(n.size);return n.forEach(function(o,r){t[++e]=[r,o]}),t}const Ws=zs;function Gs(n){var e=-1,t=Array(n.size);return n.forEach(function(o){t[++e]=o}),t}const Wt=Gs;var $s=1,Ks=2,Ys="[object Boolean]",Vs="[object Date]",Xs="[object Error]",Zs="[object Map]",Qs="[object Number]",nf="[object RegExp]",ef="[object Set]",tf="[object String]",of="[object Symbol]",rf="[object ArrayBuffer]",cf="[object DataView]",jr=hn?hn.prototype:void 0,Gt=jr?jr.valueOf:void 0;function af(n,e,t,o,r,i,c){switch(t){case cf:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case rf:return!(n.byteLength!=e.byteLength||!i(new Ze(n),new Ze(e)));case Ys:case Vs:case Qs:return I(+n,+e);case Xs:return n.name==e.name&&n.message==e.message;case nf:case tf:return n==e+"";case Zs:var a=Ws;case ef:var s=o&$s;if(a||(a=Wt),n.size!=e.size&&!s)return!1;var l=c.get(n);if(l)return l==e;o|=Ks,c.set(n,e);var f=Dr(a(n),a(e),o,r,i,c);return c.delete(n),f;case of:if(Gt)return Gt.call(n)==Gt.call(e)}return!1}const lf=af;function sf(n,e){for(var t=-1,o=e.length,r=n.length;++t<o;)n[r+t]=e[t];return n}const $t=sf;var ff=Array.isArray;const dn=ff;function Af(n,e,t){var o=e(n);return dn(n)?o:$t(o,t(n))}const Mr=Af;function uf(n,e){for(var t=-1,o=n==null?0:n.length,r=0,i=[];++t<o;){var c=n[t];e(c,t,n)&&(i[r++]=c)}return i}const Ef=uf;function df(){return[]}const Lr=df;var gf=Object.prototype,pf=gf.propertyIsEnumerable,Nr=Object.getOwnPropertySymbols,bf=Nr?function(n){return n==null?[]:(n=Object(n),Ef(Nr(n),function(e){return pf.call(n,e)}))}:Lr;const Kt=bf;function hf(n,e){for(var t=-1,o=Array(n);++t<n;)o[t]=e(t);return o}const _f=hf;function mf(n){return n!=null&&typeof n=="object"}const Fn=mf;var yf="[object Arguments]";function Bf(n){return Fn(n)&&jn(n)==yf}const Jr=Bf;var Ur=Object.prototype,vf=Ur.hasOwnProperty,Ff=Ur.propertyIsEnumerable,Cf=Jr(function(){return arguments}())?Jr:function(n){return Fn(n)&&vf.call(n,"callee")&&!Ff.call(n,"callee")};const Vn=Cf;function wf(){return!1}const kf=wf;var qr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Hr=qr&&typeof module=="object"&&module&&!module.nodeType&&module,Sf=Hr&&Hr.exports===qr,zr=Sf?vn.Buffer:void 0,xf=zr?zr.isBuffer:void 0,Of=xf||kf;const Xn=Of;var Tf=9007199254740991,Pf=/^(?:0|[1-9]\d*)$/;function Rf(n,e){var t=typeof n;return e=e==null?Tf:e,!!e&&(t=="number"||t!="symbol"&&Pf.test(n))&&n>-1&&n%1==0&&n<e}const Qe=Rf;var If=9007199254740991;function Df(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=If}const Yt=Df;var jf="[object Arguments]",Mf="[object Array]",Lf="[object Boolean]",Nf="[object Date]",Jf="[object Error]",Uf="[object Function]",qf="[object Map]",Hf="[object Number]",zf="[object Object]",Wf="[object RegExp]",Gf="[object Set]",$f="[object String]",Kf="[object WeakMap]",Yf="[object ArrayBuffer]",Vf="[object DataView]",Xf="[object Float32Array]",Zf="[object Float64Array]",Qf="[object Int8Array]",nA="[object Int16Array]",eA="[object Int32Array]",tA="[object Uint8Array]",oA="[object Uint8ClampedArray]",rA="[object Uint16Array]",iA="[object Uint32Array]",X={};X[Xf]=X[Zf]=X[Qf]=X[nA]=X[eA]=X[tA]=X[oA]=X[rA]=X[iA]=!0,X[jf]=X[Mf]=X[Yf]=X[Lf]=X[Vf]=X[Nf]=X[Jf]=X[Uf]=X[qf]=X[Hf]=X[zf]=X[Wf]=X[Gf]=X[$f]=X[Kf]=!1;function cA(n){return Fn(n)&&Yt(n.length)&&!!X[jn(n)]}const aA=cA;function lA(n){return function(e){return n(e)}}const nt=lA;var Wr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ye=Wr&&typeof module=="object"&&module&&!module.nodeType&&module,sA=ye&&ye.exports===Wr,Vt=sA&&Or.process,fA=function(){try{var n=ye&&ye.require&&ye.require("util").types;return n||Vt&&Vt.binding&&Vt.binding("util")}catch{}}();const Zn=fA;var Gr=Zn&&Zn.isTypedArray,AA=Gr?nt(Gr):aA;const et=AA;var uA=Object.prototype,EA=uA.hasOwnProperty;function dA(n,e){var t=dn(n),o=!t&&Vn(n),r=!t&&!o&&Xn(n),i=!t&&!o&&!r&&et(n),c=t||o||r||i,a=c?_f(n.length,String):[],s=a.length;for(var l in n)(e||EA.call(n,l))&&!(c&&(l=="length"||r&&(l=="offset"||l=="parent")||i&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Qe(l,s)))&&a.push(l);return a}const $r=dA;var gA=Object.prototype;function pA(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||gA;return n===t}const tt=pA;function bA(n,e){return function(t){return n(e(t))}}const Kr=bA;var hA=Kr(Object.keys,Object);const _A=hA;var mA=Object.prototype,yA=mA.hasOwnProperty;function BA(n){if(!tt(n))return _A(n);var e=[];for(var t in Object(n))yA.call(n,t)&&t!="constructor"&&e.push(t);return e}const Yr=BA;function vA(n){return n!=null&&Yt(n.length)&&!Ut(n)}const Qn=vA;function FA(n){return Qn(n)?$r(n):Yr(n)}const Be=FA;function CA(n){return Mr(n,Be,Kt)}const Xt=CA;var wA=1,kA=Object.prototype,SA=kA.hasOwnProperty;function xA(n,e,t,o,r,i){var c=t&wA,a=Xt(n),s=a.length,l=Xt(e),f=l.length;if(s!=f&&!c)return!1;for(var A=s;A--;){var u=a[A];if(!(c?u in e:SA.call(e,u)))return!1}var g=i.get(n),p=i.get(e);if(g&&p)return g==e&&p==n;var R=!0;i.set(n,e),i.set(e,n);for(var D=c;++A<s;){u=a[A];var j=n[u],H=e[u];if(o)var Q=c?o(H,j,u,e,n,i):o(j,H,u,n,e,i);if(!(Q===void 0?j===H||r(j,H,t,o,i):Q)){R=!1;break}D||(D=u=="constructor")}if(R&&!D){var rn=n.constructor,cn=e.constructor;rn!=cn&&"constructor"in n&&"constructor"in e&&!(typeof rn=="function"&&rn instanceof rn&&typeof cn=="function"&&cn instanceof cn)&&(R=!1)}return i.delete(n),i.delete(e),R}const OA=xA;var TA=Ln(vn,"DataView");const Zt=TA;var PA=Ln(vn,"Promise");const Qt=PA;var RA=Ln(vn,"Set");const ne=RA;var IA=Ln(vn,"WeakMap");const no=IA;var Vr="[object Map]",DA="[object Object]",Xr="[object Promise]",Zr="[object Set]",Qr="[object WeakMap]",ni="[object DataView]",jA=Mn(Zt),MA=Mn(_e),LA=Mn(Qt),NA=Mn(ne),JA=Mn(no),Nn=jn;(Zt&&Nn(new Zt(new ArrayBuffer(1)))!=ni||_e&&Nn(new _e)!=Vr||Qt&&Nn(Qt.resolve())!=Xr||ne&&Nn(new ne)!=Zr||no&&Nn(new no)!=Qr)&&(Nn=function(n){var e=jn(n),t=e==DA?n.constructor:void 0,o=t?Mn(t):"";if(o)switch(o){case jA:return ni;case MA:return Vr;case LA:return Xr;case NA:return Zr;case JA:return Qr}return e});const ee=Nn;var UA=1,ei="[object Arguments]",ti="[object Array]",ot="[object Object]",qA=Object.prototype,oi=qA.hasOwnProperty;function HA(n,e,t,o,r,i){var c=dn(n),a=dn(e),s=c?ti:ee(n),l=a?ti:ee(e);s=s==ei?ot:s,l=l==ei?ot:l;var f=s==ot,A=l==ot,u=s==l;if(u&&Xn(n)){if(!Xn(e))return!1;c=!0,f=!1}if(u&&!f)return i||(i=new Yn),c||et(n)?Dr(n,e,t,o,r,i):lf(n,e,s,t,o,r,i);if(!(t&UA)){var g=f&&oi.call(n,"__wrapped__"),p=A&&oi.call(e,"__wrapped__");if(g||p){var R=g?n.value():n,D=p?e.value():e;return i||(i=new Yn),r(R,D,t,o,i)}}return u?(i||(i=new Yn),OA(n,e,t,o,r,i)):!1}const zA=HA;function ri(n,e,t,o,r){return n===e?!0:n==null||e==null||!Fn(n)&&!Fn(e)?n!==n&&e!==e:zA(n,e,t,o,ri,r)}const eo=ri;var WA=1,GA=2;function $A(n,e,t,o){var r=t.length,i=r,c=!o;if(n==null)return!i;for(n=Object(n);r--;){var a=t[r];if(c&&a[2]?a[1]!==n[a[0]]:!(a[0]in n))return!1}for(;++r<i;){a=t[r];var s=a[0],l=n[s],f=a[1];if(c&&a[2]){if(l===void 0&&!(s in n))return!1}else{var A=new Yn;if(o)var u=o(l,f,s,n,e,A);if(!(u===void 0?eo(f,l,WA|GA,o,A):u))return!1}}return!0}const KA=$A;function YA(n){return n===n&&!pn(n)}const ii=YA;function VA(n){for(var e=Be(n),t=e.length;t--;){var o=e[t],r=n[o];e[t]=[o,r,ii(r)]}return e}const XA=VA;function ZA(n,e){return function(t){return t==null?!1:t[n]===e&&(e!==void 0||n in Object(t))}}const ci=ZA;function QA(n){var e=XA(n);return e.length==1&&e[0][2]?ci(e[0][0],e[0][1]):function(t){return t===n||KA(t,n,e)}}const nu=QA;var eu="[object Symbol]";function tu(n){return typeof n=="symbol"||Fn(n)&&jn(n)==eu}const rt=tu;var ou=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ru=/^\w*$/;function iu(n,e){if(dn(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||rt(n)?!0:ru.test(n)||!ou.test(n)||e!=null&&n in Object(e)}const to=iu;var cu="Expected a function";function oo(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(cu);var t=function(){var o=arguments,r=e?e.apply(this,o):o[0],i=t.cache;if(i.has(r))return i.get(r);var c=n.apply(this,o);return t.cache=i.set(r,c)||i,c};return t.cache=new(oo.Cache||Ve),t}oo.Cache=Ve;const au=oo;var lu=500;function su(n){var e=au(n,function(o){return t.size===lu&&t.clear(),o}),t=e.cache;return e}const fu=su;var Au=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,uu=/\\(\\)?/g,Eu=fu(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(Au,function(t,o,r,i){e.push(r?i.replace(uu,"$1"):o||t)}),e});const du=Eu;function gu(n,e){for(var t=-1,o=n==null?0:n.length,r=Array(o);++t<o;)r[t]=e(n[t],t,n);return r}const ai=gu;var pu=1/0,li=hn?hn.prototype:void 0,si=li?li.toString:void 0;function fi(n){if(typeof n=="string")return n;if(dn(n))return ai(n,fi)+"";if(rt(n))return si?si.call(n):"";var e=n+"";return e=="0"&&1/n==-pu?"-0":e}const bu=fi;function hu(n){return n==null?"":bu(n)}const _u=hu;function mu(n,e){return dn(n)?n:to(n,e)?[n]:du(_u(n))}const ro=mu;var yu=1/0;function Bu(n){if(typeof n=="string"||rt(n))return n;var e=n+"";return e=="0"&&1/n==-yu?"-0":e}const ve=Bu;function vu(n,e){e=ro(e,n);for(var t=0,o=e.length;n!=null&&t<o;)n=n[ve(e[t++])];return t&&t==o?n:void 0}const Ai=vu;function Fu(n,e,t){var o=n==null?void 0:Ai(n,e);return o===void 0?t:o}const te=Fu;function Cu(n,e){return n!=null&&e in Object(n)}const wu=Cu;function ku(n,e,t){e=ro(e,n);for(var o=-1,r=e.length,i=!1;++o<r;){var c=ve(e[o]);if(!(i=n!=null&&t(n,c)))break;n=n[c]}return i||++o!=r?i:(r=n==null?0:n.length,!!r&&Yt(r)&&Qe(c,r)&&(dn(n)||Vn(n)))}const ui=ku;function Su(n,e){return n!=null&&ui(n,e,wu)}const xu=Su;var Ou=1,Tu=2;function Pu(n,e){return to(n)&&ii(e)?ci(ve(n),e):function(t){var o=te(t,n);return o===void 0&&o===e?xu(t,n):eo(e,o,Ou|Tu)}}const Ru=Pu;function Iu(n){return n}const io=Iu;function Du(n){return function(e){return e==null?void 0:e[n]}}const ju=Du;function Mu(n){return function(e){return Ai(e,n)}}const Lu=Mu;function Nu(n){return to(n)?ju(ve(n)):Lu(n)}const Ju=Nu;function Uu(n){return typeof n=="function"?n:n==null?io:typeof n=="object"?dn(n)?Ru(n[0],n[1]):nu(n):Ju(n)}const Ei=Uu;function qu(n){return function(e,t,o){var r=Object(e);if(!Qn(e)){var i=Ei(t,3);e=Be(e),t=function(a){return i(r[a],a,r)}}var c=n(e,t,o);return c>-1?r[i?e[c]:c]:void 0}}const Hu=qu;function zu(n,e,t,o){for(var r=n.length,i=t+(o?1:-1);o?i--:++i<r;)if(e(n[i],i,n))return i;return-1}const di=zu;var Wu=/\s/;function Gu(n){for(var e=n.length;e--&&Wu.test(n.charAt(e)););return e}const $u=Gu;var Ku=/^\s+/;function Yu(n){return n&&n.slice(0,$u(n)+1).replace(Ku,"")}const Vu=Yu;var gi=0/0,Xu=/^[-+]0x[0-9a-f]+$/i,Zu=/^0b[01]+$/i,Qu=/^0o[0-7]+$/i,nE=parseInt;function eE(n){if(typeof n=="number")return n;if(rt(n))return gi;if(pn(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=pn(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=Vu(n);var t=Zu.test(n);return t||Qu.test(n)?nE(n.slice(2),t?2:8):Xu.test(n)?gi:+n}const tE=eE;var pi=1/0,oE=17976931348623157e292;function rE(n){if(!n)return n===0?n:0;if(n=tE(n),n===pi||n===-pi){var e=n<0?-1:1;return e*oE}return n===n?n:0}const iE=rE;function cE(n){var e=iE(n),t=e%1;return e===e?t?e-t:e:0}const bi=cE;var aE=Math.max;function lE(n,e,t){var o=n==null?0:n.length;if(!o)return-1;var r=t==null?0:bi(t);return r<0&&(r=aE(o+r,0)),di(n,Ei(e,3),r)}var sE=Hu(lE);const fE=sE;var AE=(n=>(n.BOX="box",n.DROPBOX="dropbox",n.GDRIVE="gdrive",n.ONEDRIVE="onedrive",n))(AE||{}),uE=(n=>(n.CALLS="calls",n.CALLS_MINI_PANEL="calls_mini_panel",n.CALLS_INCOMING_CALL="calls_incoming_call",n))(uE||{}),hi=(n=>(n.APP="app",n.AUTH="auth",n.POSTS="posts",n.REPORT_ISSUE="report_issue",n))(hi||{}),EE=(n=>(n.ABOUT_BOX="about-box",n.SETTINGS_EDITOR="settings-editor",n.BASIC_AUTH_VIEW="basic-auth-view",n.NET_LOG_WINDOW="net-log-window",n))(EE||{});function co(n){return dE(n,hi.APP)}function Xm(n){var e;return(e=co(n))==null?void 0:e.id}function Zm(n,e,t){return n[e].type===t}function Qm(n){var e;return((e=co(n))==null?void 0:e.state)===WebContentsLifeCycle.WEBAPP_LOADED}function dE(n,e){return fE(Object.values(n),t=>t.type===e)}const gE=n=>{const e={};return n.forEach((t,o)=>e[o]=t),e};var _i=hn?hn.isConcatSpreadable:void 0;function pE(n){return dn(n)||Vn(n)||!!(_i&&n&&n[_i])}const bE=pE;function mi(n,e,t,o,r){var i=-1,c=n.length;for(t||(t=bE),r||(r=[]);++i<c;){var a=n[i];e>0&&t(a)?e>1?mi(a,e-1,t,o,r):$t(r,a):o||(r[r.length]=a)}return r}const yi=mi;function hE(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}const _E=hE;var Bi=Math.max;function mE(n,e,t){return e=Bi(e===void 0?n.length-1:e,0),function(){for(var o=arguments,r=-1,i=Bi(o.length-e,0),c=Array(i);++r<i;)c[r]=o[e+r];r=-1;for(var a=Array(e+1);++r<e;)a[r]=o[r];return a[e]=t(c),_E(n,this,a)}}const yE=mE;function BE(n){return function(){return n}}const vE=BE;var FE=function(){try{var n=Ln(Object,"defineProperty");return n({},"",{}),n}catch{}}();const it=FE;var CE=it?function(n,e){return it(n,"toString",{configurable:!0,enumerable:!1,value:vE(e),writable:!0})}:io;const wE=CE;var kE=800,SE=16,xE=Date.now;function OE(n){var e=0,t=0;return function(){var o=xE(),r=SE-(o-t);if(t=o,r>0){if(++e>=kE)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}var TE=OE(wE);const PE=TE;function RE(n,e){return PE(yE(n,e,io),n+"")}const ao=RE;function IE(n){return n!==n}const DE=IE;function jE(n,e,t){for(var o=t-1,r=n.length;++o<r;)if(n[o]===e)return o;return-1}const ME=jE;function LE(n,e,t){return e===e?ME(n,e,t):di(n,DE,t)}const NE=LE;function JE(n,e){var t=n==null?0:n.length;return!!t&&NE(n,e,0)>-1}const vi=JE;function UE(n,e,t){for(var o=-1,r=n==null?0:n.length;++o<r;)if(t(e,n[o]))return!0;return!1}const Fi=UE;function qE(){}const Ci=qE;var HE=1/0,zE=ne&&1/Wt(new ne([,-0]))[1]==HE?function(n){return new ne(n)}:Ci;const WE=zE;var GE=200;function $E(n,e,t){var o=-1,r=vi,i=n.length,c=!0,a=[],s=a;if(t)c=!1,r=Fi;else if(i>=GE){var l=e?null:WE(n);if(l)return Wt(l);c=!1,r=zt,s=new Ht}else s=e?[]:a;n:for(;++o<i;){var f=n[o],A=e?e(f):f;if(f=t||f!==0?f:0,c&&A===A){for(var u=s.length;u--;)if(s[u]===A)continue n;e&&s.push(A),a.push(f)}else r(s,A,t)||(s!==a&&s.push(A),a.push(f))}return a}const KE=$E;function YE(n){return Fn(n)&&Qn(n)}const ct=YE;var VE=ao(function(n){return KE(yi(n,1,ct,!0))});const XE=VE;function ZE(n,e,t){e=="__proto__"&&it?it(n,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):n[e]=t}const lo=ZE;function QE(n,e,t){(t!==void 0&&!I(n[e],t)||t===void 0&&!(e in n))&&lo(n,e,t)}const so=QE;function nd(n){return function(e,t,o){for(var r=-1,i=Object(e),c=o(e),a=c.length;a--;){var s=c[n?a:++r];if(t(i[s],s,i)===!1)break}return e}}var ed=nd();const td=ed;var wi=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ki=wi&&typeof module=="object"&&module&&!module.nodeType&&module,od=ki&&ki.exports===wi,Si=od?vn.Buffer:void 0,xi=Si?Si.allocUnsafe:void 0;function rd(n,e){if(e)return n.slice();var t=n.length,o=xi?xi(t):new n.constructor(t);return n.copy(o),o}const Oi=rd;function id(n){var e=new n.constructor(n.byteLength);return new Ze(e).set(new Ze(n)),e}const fo=id;function cd(n,e){var t=e?fo(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.length)}const Ti=cd;function ad(n,e){var t=-1,o=n.length;for(e||(e=Array(o));++t<o;)e[t]=n[t];return e}const Pi=ad;var Ri=Object.create,ld=function(){function n(){}return function(e){if(!pn(e))return{};if(Ri)return Ri(e);n.prototype=e;var t=new n;return n.prototype=void 0,t}}();const sd=ld;var fd=Kr(Object.getPrototypeOf,Object);const Ao=fd;function Ad(n){return typeof n.constructor=="function"&&!tt(n)?sd(Ao(n)):{}}const Ii=Ad;var ud="[object Object]",Ed=Function.prototype,dd=Object.prototype,Di=Ed.toString,gd=dd.hasOwnProperty,pd=Di.call(Object);function bd(n){if(!Fn(n)||jn(n)!=ud)return!1;var e=Ao(n);if(e===null)return!0;var t=gd.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Di.call(t)==pd}const ji=bd;function hd(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}const uo=hd;var _d=Object.prototype,md=_d.hasOwnProperty;function yd(n,e,t){var o=n[e];(!(md.call(n,e)&&I(o,t))||t===void 0&&!(e in n))&&lo(n,e,t)}const Eo=yd;function Bd(n,e,t,o){var r=!t;t||(t={});for(var i=-1,c=e.length;++i<c;){var a=e[i],s=o?o(t[a],n[a],a,t,n):void 0;s===void 0&&(s=n[a]),r?lo(t,a,s):Eo(t,a,s)}return t}const Fe=Bd;function vd(n){var e=[];if(n!=null)for(var t in Object(n))e.push(t);return e}const Fd=vd;var Cd=Object.prototype,wd=Cd.hasOwnProperty;function kd(n){if(!pn(n))return Fd(n);var e=tt(n),t=[];for(var o in n)o=="constructor"&&(e||!wd.call(n,o))||t.push(o);return t}const Sd=kd;function xd(n){return Qn(n)?$r(n,!0):Sd(n)}const Ce=xd;function Od(n){return Fe(n,Ce(n))}const Td=Od;function Pd(n,e,t,o,r,i,c){var a=uo(n,t),s=uo(e,t),l=c.get(s);if(l){so(n,t,l);return}var f=i?i(a,s,t+"",n,e,c):void 0,A=f===void 0;if(A){var u=dn(s),g=!u&&Xn(s),p=!u&&!g&&et(s);f=s,u||g||p?dn(a)?f=a:ct(a)?f=Pi(a):g?(A=!1,f=Oi(s,!0)):p?(A=!1,f=Ti(s,!0)):f=[]:ji(s)||Vn(s)?(f=a,Vn(a)?f=Td(a):(!pn(a)||Ut(a))&&(f=Ii(s))):A=!1}A&&(c.set(s,f),r(f,s,o,i,c),c.delete(s)),so(n,t,f)}const Rd=Pd;function Mi(n,e,t,o,r){n!==e&&td(e,function(i,c){if(r||(r=new Yn),pn(i))Rd(n,e,c,t,Mi,o,r);else{var a=o?o(uo(n,c),i,c+"",n,e,r):void 0;a===void 0&&(a=i),so(n,c,a)}},Ce)}const Id=Mi;function Dd(n,e,t){if(!pn(t))return!1;var o=typeof e;return(o=="number"?Qn(t)&&Qe(e,t.length):o=="string"&&e in t)?I(t[e],n):!1}const jd=Dd;function Md(n){return ao(function(e,t){var o=-1,r=t.length,i=r>1?t[r-1]:void 0,c=r>2?t[2]:void 0;for(i=n.length>3&&typeof i=="function"?(r--,i):void 0,c&&jd(t[0],t[1],c)&&(i=r<3?void 0:i,r=1),e=Object(e);++o<r;){var a=t[o];a&&n(e,a,o,i)}return e})}var Ld=Md(function(n,e,t,o){Id(n,e,t,o)});const Nd=Ld;function Li(n){return qd(n)||Ud(n)||Jd()}function Jd(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Ud(n){if(Symbol.iterator in Object(n)||Object.prototype.toString.call(n)==="[object Arguments]")return Array.from(n)}function qd(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}function Ni(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,o)}return t}function go(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ni(t,!0).forEach(function(o){Hd(n,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ni(t).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(t,o))})}return n}function Hd(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Ji={registry:[],bootstrapped:!1},zd=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ji,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case REGISTER:return go({},e,{registry:[].concat(Li(e.registry),[t.key])});case REHYDRATE:var o=e.registry.indexOf(t.key),r=Li(e.registry);return r.splice(o,1),go({},e,{registry:r,bootstrapped:r.length===0});default:return e}};function oy(n,e,t){if(!1)var o,r;var i=t||!1,c=createStore(zd,Ji,e&&e.enhancer?e.enhancer:void 0),a=function(A){c.dispatch({type:REGISTER,key:A})},s=function(A,u,g){var p={type:REHYDRATE,payload:u,err:g,key:A};n.dispatch(p),c.dispatch(p),i&&l.getState().bootstrapped&&(i(),i=!1)},l=go({},c,{purge:function(){var A=[];return n.dispatch({type:PURGE,result:function(g){A.push(g)}}),Promise.all(A)},flush:function(){var A=[];return n.dispatch({type:FLUSH,result:function(g){A.push(g)}}),Promise.all(A)},pause:function(){n.dispatch({type:PAUSE})},persist:function(){n.dispatch({type:PERSIST,register:a,rehydrate:s})}});return e&&e.manualPersist||l.persist(),l}function ry(n=getDefaultSettings(),e){var t;switch(e.type){case SETTINGS.UPDATE_SETTINGS:const o=(t=e.meta)==null?void 0:t.layer;return we(n,e.payload,o);case SETTINGS.ZOOM_IN:return po(n,n.zoomLevel+1);case SETTINGS.ZOOM_OUT:return po(n,n.zoomLevel-1);case SETTINGS.RESET_ZOOM:return po(n,0);case SETTINGS.WHITELIST_PROTOCOL:return Wd(n,e.payload);case SETTINGS.ALLOWLIST_FILE_EXT:return we(n,{allowedFileExts:[e.payload]});case REHYDRATE:return Gd(n,e.payload);default:return n}}function po(n,e){return we(n,{zoomLevel:clamp(e,-3,5)})}function Wd(n,e){return HOSTNAME_SPECIFIC_PROTOCOLS.includes(e.protocol)&&e.hostname?we(n,{allowedHostnames:{[e.protocol]:[e.hostname]}}):we(n,{whitelistedUrlSchemes:[e.protocol]})}function Gd(n,e){return e?at(n,e==null?void 0:e.settings):n}const $d=(n,e)=>Array.isArray(n)&&Array.isArray(e)?XE(n,e):void 0,at=(...n)=>Nd({},...n,$d);function we(n,e,t=SettingsLayer.UserChoices){const o=at(getDefaultSettings(),n,{[t]:t===SettingsLayer.UserChoices?omit(e,Object.values(SettingsLayer)):e});return at(o.slackDefaults,o.itDefaults,o.userChoices,o.itPolicy,{slackDefaults:o.slackDefaults,itDefaults:o.itDefaults,userChoices:o.userChoices,itPolicy:o.itPolicy})}var Kd=Object.prototype,Yd=Kd.hasOwnProperty;function Vd(n,e){return n!=null&&Yd.call(n,e)}const Xd=Vd;function Zd(n,e){return n!=null&&ui(n,e,Xd)}const Qd=Zd;function ng(n,e){return n===e}function eg(n,e,t){if(e===null||t===null||e.length!==t.length)return!1;for(var o=e.length,r=0;r<o;r++)if(!n(e[r],t[r]))return!1;return!0}function tg(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ng,t=null,o=null;return function(){return eg(e,t,arguments)||(o=n.apply(null,arguments)),t=arguments,o}}function og(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every(function(o){return typeof o=="function"})){var t=e.map(function(o){return typeof o}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+t+"]"))}return e}function rg(n){for(var e=arguments.length,t=Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];return function(){for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];var a=0,s=i.pop(),l=og(i),f=n.apply(void 0,[function(){return a++,s.apply(null,arguments)}].concat(t)),A=n(function(){for(var u=[],g=l.length,p=0;p<g;p++)u.push(l[p].apply(null,arguments));return f.apply(null,u)});return A.resultFunc=s,A.dependencies=l,A.recomputations=function(){return a},A.resetRecomputations=function(){return a=0},A}}var bo=rg(tg);function iy(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:bo;if(typeof n!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof n));var t=Object.keys(n);return e(t.map(function(o){return n[o]}),function(){for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return r.reduce(function(c,a,s){return c[t[s]]=a,c},{})})}var ig=(n=>(n.ReactDevTools="react-devtools",n.EpicTrace="epic-trace",n))(ig||{}),bn=(n=>(n.ITPolicy="itPolicy",n.UserChoices="userChoices",n.ITDefaults="itDefaults",n.SlackDefaults="slackDefaults",n))(bn||{});function cg(n,e){for(const t of Object.values(bn))if(Qd(n[t],e))return t;return null}const ag=bo(n=>n,({zoomLevel:n,notificationZoomLevel:e})=>e&&e!==null?e:n),cy=bo(ag,n=>1+n*.2),lg=({settings:n})=>n.releaseChannelOverride||ReleaseChannel.PROD,ay=({environment:n,settings:e})=>{const t=process.env.SLACK_DEVELOPER_MENU;if(t==="false")return!1;const{isDevMode:o,devEnv:r,openDevToolsOnStart:i}=n,{isSignedIntoSlackOrg:c}=e;return o||!!r||i||c||!!t},sg=n=>!!n.win32.isAeroGlassEnabled&&!!n.isGpuCompositionAvailable,ly=({environment:n,settings:e})=>{const{notificationMethod:o}=e,r=o==="html",i=o&&o!=="html";{const c=isWindows10(n),a=sg(n);if(!c&&a&&!i||r&&a)return!0}return!1},sy=n=>{const e=n.settings.updaterEndpointVersion;return e!==void 0?e===2:!(process.env.SLACK_UPDATE_URL||lg(n)===ReleaseChannel.NIGHTLY)},fy=n=>{const e=n.notificationTimeout;return Number.isSafeInteger(e)&&e===Number.MAX_SAFE_INTEGER};var ke=(n=>(n.GENERAL="desktop_general",n.BROWSER="desktop_browser",n.RENDERER="desktop_renderer",n.MESSAGEBOX="desktop_messagebox",n.MENU="desktop_menu",n.EXTERNAL="desktop_external",n))(ke||{});const Ui={debug:"debug",info:"info",warn:"warn",error:"error",fatal:"error"},qi=(n,e)=>(...t)=>{const o=t.map(r=>typeof r=="object"?JSON.stringify(r,null,2):r).join(" ");e?console[n](`[${e}]	${o}`):console[n](o)},Hi=Object.entries(Ui).reduce((n,[e,t])=>(n[e]=qi(t),n),{}),Ay=(n,e)=>Object.entries(Ui).reduce((t,[o,r])=>(t[o]=qi(r,n),t),{});function fg(n,e){for(var t=-1,o=n==null?0:n.length;++t<o&&e(n[t],t,n)!==!1;);return n}const Ag=fg;function ug(n,e){return n&&Fe(e,Be(e),n)}const Eg=ug;function dg(n,e){return n&&Fe(e,Ce(e),n)}const gg=dg;function pg(n,e){return Fe(n,Kt(n),e)}const bg=pg;var hg=Object.getOwnPropertySymbols,_g=hg?function(n){for(var e=[];n;)$t(e,Kt(n)),n=Ao(n);return e}:Lr;const zi=_g;function mg(n,e){return Fe(n,zi(n),e)}const yg=mg;function Bg(n){return Mr(n,Ce,zi)}const vg=Bg;var Fg=Object.prototype,Cg=Fg.hasOwnProperty;function wg(n){var e=n.length,t=new n.constructor(e);return e&&typeof n[0]=="string"&&Cg.call(n,"index")&&(t.index=n.index,t.input=n.input),t}const kg=wg;function Sg(n,e){var t=e?fo(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.byteLength)}const xg=Sg;var Og=/\w*$/;function Tg(n){var e=new n.constructor(n.source,Og.exec(n));return e.lastIndex=n.lastIndex,e}const Pg=Tg;var Wi=hn?hn.prototype:void 0,Gi=Wi?Wi.valueOf:void 0;function Rg(n){return Gi?Object(Gi.call(n)):{}}const Ig=Rg;var Dg="[object Boolean]",jg="[object Date]",Mg="[object Map]",Lg="[object Number]",Ng="[object RegExp]",Jg="[object Set]",Ug="[object String]",qg="[object Symbol]",Hg="[object ArrayBuffer]",zg="[object DataView]",Wg="[object Float32Array]",Gg="[object Float64Array]",$g="[object Int8Array]",Kg="[object Int16Array]",Yg="[object Int32Array]",Vg="[object Uint8Array]",Xg="[object Uint8ClampedArray]",Zg="[object Uint16Array]",Qg="[object Uint32Array]";function np(n,e,t){var o=n.constructor;switch(e){case Hg:return fo(n);case Dg:case jg:return new o(+n);case zg:return xg(n,t);case Wg:case Gg:case $g:case Kg:case Yg:case Vg:case Xg:case Zg:case Qg:return Ti(n,t);case Mg:return new o;case Lg:case Ug:return new o(n);case Ng:return Pg(n);case Jg:return new o;case qg:return Ig(n)}}const ep=np;var tp="[object Map]";function op(n){return Fn(n)&&ee(n)==tp}const rp=op;var $i=Zn&&Zn.isMap,ip=$i?nt($i):rp;const cp=ip;var ap="[object Set]";function lp(n){return Fn(n)&&ee(n)==ap}const sp=lp;var Ki=Zn&&Zn.isSet,fp=Ki?nt(Ki):sp;const Ap=fp;var up=1,Ep=2,dp=4,Yi="[object Arguments]",gp="[object Array]",pp="[object Boolean]",bp="[object Date]",hp="[object Error]",Vi="[object Function]",_p="[object GeneratorFunction]",mp="[object Map]",yp="[object Number]",Xi="[object Object]",Bp="[object RegExp]",vp="[object Set]",Fp="[object String]",Cp="[object Symbol]",wp="[object WeakMap]",kp="[object ArrayBuffer]",Sp="[object DataView]",xp="[object Float32Array]",Op="[object Float64Array]",Tp="[object Int8Array]",Pp="[object Int16Array]",Rp="[object Int32Array]",Ip="[object Uint8Array]",Dp="[object Uint8ClampedArray]",jp="[object Uint16Array]",Mp="[object Uint32Array]",V={};V[Yi]=V[gp]=V[kp]=V[Sp]=V[pp]=V[bp]=V[xp]=V[Op]=V[Tp]=V[Pp]=V[Rp]=V[mp]=V[yp]=V[Xi]=V[Bp]=V[vp]=V[Fp]=V[Cp]=V[Ip]=V[Dp]=V[jp]=V[Mp]=!0,V[hp]=V[Vi]=V[wp]=!1;function lt(n,e,t,o,r,i){var c,a=e&up,s=e&Ep,l=e&dp;if(t&&(c=r?t(n,o,r,i):t(n)),c!==void 0)return c;if(!pn(n))return n;var f=dn(n);if(f){if(c=kg(n),!a)return Pi(n,c)}else{var A=ee(n),u=A==Vi||A==_p;if(Xn(n))return Oi(n,a);if(A==Xi||A==Yi||u&&!r){if(c=s||u?{}:Ii(n),!a)return s?yg(n,gg(c,n)):bg(n,Eg(c,n))}else{if(!V[A])return r?n:{};c=ep(n,A,a)}}i||(i=new Yn);var g=i.get(n);if(g)return g;i.set(n,c),Ap(n)?n.forEach(function(D){c.add(lt(D,e,t,D,n,i))}):cp(n)&&n.forEach(function(D,j){c.set(j,lt(D,e,t,j,n,i))});var p=l?s?vg:Xt:s?Ce:Be,R=f?void 0:p(n);return Ag(R||n,function(D,j){R&&(j=D,D=n[j]),Eo(c,j,lt(D,e,t,j,n,i))}),c}const Lp=lt;var Np=1,Jp=4;function Up(n){return Lp(n,Np|Jp)}const Zi=Up;var qp=200;function Hp(n,e,t,o){var r=-1,i=vi,c=!0,a=n.length,s=[],l=e.length;if(!a)return s;t&&(e=ai(e,nt(t))),o?(i=Fi,c=!1):e.length>=qp&&(i=zt,c=!1,e=new Ht(e));n:for(;++r<a;){var f=n[r],A=t==null?f:t(f);if(f=o||f!==0?f:0,c&&A===A){for(var u=l;u--;)if(e[u]===A)continue n;s.push(f)}else i(e,A,o)||s.push(f)}return s}const zp=Hp;var Wp=ao(function(n,e){return ct(n)?zp(n,yi(e,1,ct,!0)):[]});const ho=Wp;function Gp(n,e){return eo(n,e)}const Qi=Gp;var $p="[object Map]",Kp="[object Set]",Yp=Object.prototype,Vp=Yp.hasOwnProperty;function Xp(n){if(n==null)return!0;if(Qn(n)&&(dn(n)||typeof n=="string"||typeof n.splice=="function"||Xn(n)||et(n)||Vn(n)))return!n.length;var e=ee(n);if(e==$p||e==Kp)return!n.size;if(tt(n))return!Yr(n).length;for(var t in n)if(Vp.call(n,t))return!1;return!0}const nc=Xp;function Zp(n,e,t,o){if(!pn(n))return n;e=ro(e,n);for(var r=-1,i=e.length,c=i-1,a=n;a!=null&&++r<i;){var s=ve(e[r]),l=t;if(s==="__proto__"||s==="constructor"||s==="prototype")return n;if(r!=c){var f=a[s];l=o?o(f,s,a):void 0,l===void 0&&(l=pn(f)?f:Qe(e[r+1])?[]:{})}Eo(a,s,l),a=a[s]}return n}const Qp=Zp;function nb(n,e,t){return n==null?n:Qp(n,e,t)}const eb=nb;var C=M(1174),Jn,an,ec,oe=0,_o=[],tc=C.options.__b,oc=C.options.__r,rc=C.options.diffed,ic=C.options.__c,cc=C.options.unmount;function re(n,e){C.options.__h&&C.options.__h(an,n,oe||e),oe=0;var t=an.__H||(an.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function st(n){return oe=1,mo(fc,n)}function mo(n,e,t){var o=re(Jn++,2);return o.t=n,o.__c||(o.__=[t?t(e):fc(void 0,e),function(r){var i=o.t(o.__[0],r);o.__[0]!==i&&(o.__=[i,o.__[1]],o.__c.setState({}))}],o.__c=an),o.__}function ac(n,e){var t=re(Jn++,3);!C.options.__s&&Fo(t.__H,e)&&(t.__=n,t.__H=e,an.__H.__h.push(t))}function yo(n,e){var t=re(Jn++,4);!C.options.__s&&Fo(t.__H,e)&&(t.__=n,t.__H=e,an.__h.push(t))}function Se(n){return oe=5,ie(function(){return{current:n}},[])}function tb(n,e,t){oe=6,yo(function(){typeof n=="function"?n(e()):n&&(n.current=e())},t==null?t:t.concat(n))}function ie(n,e){var t=re(Jn++,7);return Fo(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function ob(n,e){return oe=8,ie(function(){return n},e)}function Bo(n){var e=an.context[n.__c],t=re(Jn++,9);return t.c=n,e?(t.__==null&&(t.__=!0,e.sub(an)),e.props.value):n.__}function lc(n,e){C.options.useDebugValue&&C.options.useDebugValue(e?e(n):n)}function uy(n){var e=re(Jn++,10),t=st();return e.__=n,an.componentDidCatch||(an.componentDidCatch=function(o){e.__&&e.__(o),t[1](o)}),[t[0],function(){t[1](void 0)}]}function rb(){_o.forEach(function(n){if(n.__P)try{n.__H.__h.forEach(ft),n.__H.__h.forEach(vo),n.__H.__h=[]}catch(e){n.__H.__h=[],C.options.__e(e,n.__v)}}),_o=[]}C.options.__b=function(n){an=null,tc&&tc(n)},C.options.__r=function(n){oc&&oc(n),Jn=0;var e=(an=n.__c).__H;e&&(e.__h.forEach(ft),e.__h.forEach(vo),e.__h=[])},C.options.diffed=function(n){rc&&rc(n);var e=n.__c;e&&e.__H&&e.__H.__h.length&&(_o.push(e)!==1&&ec===C.options.requestAnimationFrame||((ec=C.options.requestAnimationFrame)||function(t){var o,r=function(){clearTimeout(i),sc&&cancelAnimationFrame(o),setTimeout(t)},i=setTimeout(r,100);sc&&(o=requestAnimationFrame(r))})(rb)),an=void 0},C.options.__c=function(n,e){e.some(function(t){try{t.__h.forEach(ft),t.__h=t.__h.filter(function(o){return!o.__||vo(o)})}catch(o){e.some(function(r){r.__h&&(r.__h=[])}),e=[],C.options.__e(o,t.__v)}}),ic&&ic(n,e)},C.options.unmount=function(n){cc&&cc(n);var e=n.__c;if(e&&e.__H)try{e.__H.__.forEach(ft)}catch(t){C.options.__e(t,e.__v)}};var sc=typeof requestAnimationFrame=="function";function ft(n){var e=an;typeof n.__c=="function"&&n.__c(),an=e}function vo(n){var e=an;n.__c=n.__(),an=e}function Fo(n,e){return!n||n.length!==e.length||e.some(function(t,o){return t!==n[o]})}function fc(n,e){return typeof e=="function"?e(n):e}function Ac(n,e){for(var t in e)n[t]=e[t];return n}function Co(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var o in e)if(o!=="__source"&&n[o]!==e[o])return!0;return!1}function wo(n){this.props=n}function ib(n,e){function t(r){var i=this.props.ref,c=i==r.ref;return!c&&i&&(i.call?i(null):i.current=null),e?!e(this.props,r)||!c:Co(this.props,r)}function o(r){return this.shouldComponentUpdate=t,(0,C.createElement)(n,r)}return o.displayName="Memo("+(n.displayName||n.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}(wo.prototype=new C.Component).isPureReactComponent=!0,wo.prototype.shouldComponentUpdate=function(n,e){return Co(this.props,n)||Co(this.state,e)};var uc=C.options.__b;C.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),uc&&uc(n)};var cb=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ab(n){function e(t,o){var r=Ac({},t);return delete r.ref,n(r,(o=t.ref||o)&&(typeof o!="object"||"current"in o)?o:null)}return e.$$typeof=cb,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(n.displayName||n.name)+")",e}var Ec=function(n,e){return n==null?null:(0,C.toChildArray)((0,C.toChildArray)(n).map(e))},lb={map:Ec,forEach:Ec,count:function(n){return n?(0,C.toChildArray)(n).length:0},only:function(n){var e=(0,C.toChildArray)(n);if(e.length!==1)throw"Children.only";return e[0]},toArray:C.toChildArray},sb=C.options.__e;C.options.__e=function(n,e,t){if(n.then){for(var o,r=e;r=r.__;)if((o=r.__c)&&o.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),o.__c(n,e)}sb(n,e,t)};var dc=C.options.unmount;function At(){this.__u=0,this.t=null,this.__b=null}function gc(n){var e=n.__.__c;return e&&e.__e&&e.__e(n)}function fb(n){var e,t,o;function r(i){if(e||(e=n()).then(function(c){t=c.default||c},function(c){o=c}),o)throw o;if(!t)throw e;return(0,C.createElement)(t,i)}return r.displayName="Lazy",r.__f=!0,r}function xe(){this.u=null,this.o=null}C.options.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&n.__h===!0&&(n.type=null),dc&&dc(n)},(At.prototype=new C.Component).__c=function(n,e){var t=e.__c,o=this;o.t==null&&(o.t=[]),o.t.push(t);var r=gc(o.__v),i=!1,c=function(){i||(i=!0,t.__R=null,r?r(a):a())};t.__R=c;var a=function(){if(!--o.__u){if(o.state.__e){var l=o.state.__e;o.__v.__k[0]=function A(u,g,p){return u&&(u.__v=null,u.__k=u.__k&&u.__k.map(function(R){return A(R,g,p)}),u.__c&&u.__c.__P===g&&(u.__e&&p.insertBefore(u.__e,u.__d),u.__c.__e=!0,u.__c.__P=p)),u}(l,l.__c.__P,l.__c.__O)}var f;for(o.setState({__e:o.__b=null});f=o.t.pop();)f.forceUpdate()}},s=e.__h===!0;o.__u++||s||o.setState({__e:o.__b=o.__v.__k[0]}),n.then(c,c)},At.prototype.componentWillUnmount=function(){this.t=[]},At.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=function i(c,a,s){return c&&(c.__c&&c.__c.__H&&(c.__c.__H.__.forEach(function(l){typeof l.__c=="function"&&l.__c()}),c.__c.__H=null),(c=Ac({},c)).__c!=null&&(c.__c.__P===s&&(c.__c.__P=a),c.__c=null),c.__k=c.__k&&c.__k.map(function(l){return i(l,a,s)})),c}(this.__b,t,o.__O=o.__P)}this.__b=null}var r=e.__e&&(0,C.createElement)(C.Fragment,null,n.fallback);return r&&(r.__h=null),[(0,C.createElement)(C.Fragment,null,e.__e?null:n.children),r]};var pc=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};function Ab(n){return this.getChildContext=function(){return n.context},n.children}function ub(n){var e=this,t=n.i;e.componentWillUnmount=function(){(0,C.render)(null,e.l),e.l=null,e.i=null},e.i&&e.i!==t&&e.componentWillUnmount(),n.__v?(e.l||(e.i=t,e.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(o){this.childNodes.push(o),e.i.appendChild(o)},insertBefore:function(o,r){this.childNodes.push(o),e.i.appendChild(o)},removeChild:function(o){this.childNodes.splice(this.childNodes.indexOf(o)>>>1,1),e.i.removeChild(o)}}),(0,C.render)((0,C.createElement)(Ab,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount()}function Eb(n,e){return(0,C.createElement)(ub,{__v:n,i:e})}(xe.prototype=new C.Component).__e=function(n){var e=this,t=gc(e.__v),o=e.o.get(n);return o[0]++,function(r){var i=function(){e.props.revealOrder?(o.push(r),pc(e,n,o)):r()};t?t(i):i()}},xe.prototype.render=function(n){this.u=null,this.o=new Map;var e=(0,C.toChildArray)(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},xe.prototype.componentDidUpdate=xe.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(e,t){pc(n,t,e)})};var bc=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,db=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,gb=function(n){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(n)};function pb(n,e,t){return e.__k==null&&(e.textContent=""),(0,C.render)(n,e),typeof t=="function"&&t(),n?n.__c:null}function bb(n,e,t){return(0,C.hydrate)(n,e),typeof t=="function"&&t(),n?n.__c:null}C.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(C.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var hc=C.options.event;function hb(){}function _b(){return this.cancelBubble}function mb(){return this.defaultPrevented}C.options.event=function(n){return hc&&(n=hc(n)),n.persist=hb,n.isPropagationStopped=_b,n.isDefaultPrevented=mb,n.nativeEvent=n};var _c,mc={configurable:!0,get:function(){return this.class}},yc=C.options.vnode;C.options.vnode=function(n){var e=n.type,t=n.props,o=t;if(typeof e=="string"){for(var r in o={},t){var i=t[r];r==="value"&&"defaultValue"in t&&i==null||(r==="defaultValue"&&"value"in t&&t.value==null?r="value":r==="download"&&i===!0?i="":/ondoubleclick/i.test(r)?r="ondblclick":/^onchange(textarea|input)/i.test(r+e)&&!gb(t.type)?r="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(r)?r=r.toLowerCase():db.test(r)?r=r.replace(/[A-Z0-9]/,"-$&").toLowerCase():i===null&&(i=void 0),o[r]=i)}e=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=(0,C.toChildArray)(t.children).forEach(function(c){c.props.selected=o.value.indexOf(c.props.value)!=-1})),e=="select"&&o.defaultValue!=null&&(o.value=(0,C.toChildArray)(t.children).forEach(function(c){c.props.selected=o.multiple?o.defaultValue.indexOf(c.props.value)!=-1:o.defaultValue==c.props.value})),n.props=o}e&&t.class!=t.className&&(mc.enumerable="className"in t,t.className!=null&&(o.class=t.className),Object.defineProperty(o,"className",mc)),n.$$typeof=bc,yc&&yc(n)};var Bc=C.options.__r;C.options.__r=function(n){Bc&&Bc(n),_c=n.__c};var yb={ReactCurrentDispatcher:{current:{readContext:function(n){return _c.__n[n.__c].props.value}}}},Ey="17.0.2";function Bb(n){return C.createElement.bind(null,n)}function vc(n){return!!n&&n.$$typeof===bc}function vb(n){return vc(n)?C.cloneElement.apply(null,arguments):n}function Fc(n){return!!n.__k&&((0,C.render)(null,n),!0)}function Fb(n){return n&&(n.base||n.nodeType===1&&n)||null}var Cc=function(n,e){return n(e)},Cb=function(n,e){return n(e)},dy=C.Fragment;const wc={useState:st,useReducer:mo,useEffect:ac,useLayoutEffect:yo,useRef:Se,useImperativeHandle:tb,useMemo:ie,useCallback:ob,useContext:Bo,useDebugValue:lc,version:"17.0.2",Children:lb,render:pb,hydrate:bb,unmountComponentAtNode:Fc,createPortal:Eb,createElement:C.createElement,createContext:C.createContext,createFactory:Bb,cloneElement:vb,createRef:C.createRef,Fragment:C.Fragment,isValidElement:vc,findDOMNode:Fb,Component:C.Component,PureComponent:wo,memo:ib,forwardRef:ab,flushSync:Cb,unstable_batchedUpdates:Cc,StrictMode:C.Fragment,Suspense:At,SuspenseList:xe,lazy:fb,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:yb};var gy=M(7396),ut=wc.createContext(null);const py=null;function wb(n){n()}var kc=wb,kb=function(e){return kc=e},Sb=function(){return kc},Sc={notify:function(){}};function xb(){var n=Sb(),e=null,t=null;return{clear:function(){e=null,t=null},notify:function(){n(function(){for(var r=e;r;)r.callback(),r=r.next})},get:function(){for(var r=[],i=e;i;)r.push(i),i=i.next;return r},subscribe:function(r){var i=!0,c=t={callback:r,next:null,prev:t};return c.prev?c.prev.next=c:e=c,function(){!i||e===null||(i=!1,c.next?c.next.prev=c.prev:t=c.prev,c.prev?c.prev.next=c.next:e=c.next)}}}}var xc=function(){function n(t,o){this.store=t,this.parentSub=o,this.unsubscribe=null,this.listeners=Sc,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var e=n.prototype;return e.addNestedSub=function(o){return this.trySubscribe(),this.listeners.subscribe(o)},e.notifyNestedSubs=function(){this.listeners.notify()},e.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},e.isSubscribed=function(){return Boolean(this.unsubscribe)},e.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=xb())},e.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=Sc)},n}(),ko=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?yo:ac;function Ob(n){var e=n.store,t=n.context,o=n.children,r=ie(function(){var a=new xc(e);return a.onStateChange=a.notifyNestedSubs,{store:e,subscription:a}},[e]),i=ie(function(){return e.getState()},[e]);ko(function(){var a=r.subscription;return a.trySubscribe(),i!==e.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[r,i]);var c=t||ut;return wc.createElement(c.Provider,{value:r},o)}const Tb=Ob;var by=M(449),hy=M(6533),Pb=null,Rb=null,_y=function(e){try{return JSON.stringify(e)}catch{return String(e)}};function Ib(n,e){var t=n[1];return[e.payload,t+1]}function Oc(n,e,t){useIsomorphicLayoutEffect(function(){return n.apply(void 0,e)},t)}function Db(n,e,t,o,r,i,c){n.current=o,e.current=r,t.current=!1,i.current&&(i.current=null,c())}function jb(n,e,t,o,r,i,c,a,s,l){if(n){var f=!1,A=null,u=function(){if(!f){var R=e.getState(),D,j;try{D=o(R,r.current)}catch(H){j=H,A=H}j||(A=null),D===i.current?c.current||s():(i.current=D,a.current=D,c.current=!0,l({type:"STORE_UPDATED",payload:{error:j}}))}};t.onStateChange=u,t.trySubscribe(),u();var g=function(){if(f=!0,t.tryUnsubscribe(),t.onStateChange=null,A)throw A};return g}}var Mb=function(){return[null,0]};function my(n,e){e===void 0&&(e={});var t=e,o=t.getDisplayName,r=o===void 0?function(_n){return"ConnectAdvanced("+_n+")"}:o,i=t.methodName,c=i===void 0?"connectAdvanced":i,a=t.renderCountProp,s=a===void 0?void 0:a,l=t.shouldHandleStateChanges,f=l===void 0?!0:l,A=t.storeKey,u=A===void 0?"store":A,g=t.withRef,p=g===void 0?!1:g,R=t.forwardRef,D=R===void 0?!1:R,j=t.context,H=j===void 0?ReactReduxContext:j,Q=_objectWithoutPropertiesLoose(t,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);if(!1)var rn;var cn=H;return function(ln){var mn=ln.displayName||ln.name||"Component",Sn=r(mn),It=_extends({},Q,{getDisplayName:r,methodName:c,renderCountProp:s,shouldHandleStateChanges:f,storeKey:u,displayName:Sn,wrappedComponentName:mn,WrappedComponent:ln}),Dt=Q.pure;function mr(En){return n(En.dispatch,It)}var yr=Dt?useMemo:function(En){return En()};function qe(En){var He=useMemo(function(){var Ge=En.reactReduxForwardedRef,kr=_objectWithoutPropertiesLoose(En,["reactReduxForwardedRef"]);return[En.context,Ge,kr]},[En]),zn=He[0],Wa=He[1],ze=He[2],Br=useMemo(function(){return zn&&zn.Consumer&&isContextConsumer(React.createElement(zn.Consumer,null))?zn:cn},[zn,cn]),In=useContext(Br),We=Boolean(En.store)&&Boolean(En.store.getState)&&Boolean(En.store.dispatch),Qv=Boolean(In)&&Boolean(In.store),Dn=We?En.store:In.store,vr=useMemo(function(){return mr(Dn)},[Dn]),Ga=useMemo(function(){if(!f)return Rb;var Ge=new Subscription(Dn,We?null:In.subscription),kr=Ge.notifyNestedSubs.bind(Ge);return[Ge,kr]},[Dn,We,In]),Mt=Ga[0],$a=Ga[1],Ka=useMemo(function(){return We?In:_extends({},In,{subscription:Mt})},[We,In,Mt]),Ya=useReducer(Ib,Pb,Mb),$m=Ya[0],Lt=$m[0],Km=Ya[1];if(Lt&&Lt.error)throw Lt.error;var Va=useRef(),Fr=useRef(ze),Nt=useRef(),Xa=useRef(!1),Cr=yr(function(){return Nt.current&&ze===Fr.current?Nt.current:vr(Dn.getState(),ze)},[Dn,Lt,ze]);Oc(Db,[Fr,Va,Xa,ze,Cr,Nt,$a]),Oc(jb,[f,Dn,Mt,vr,Fr,Va,Xa,Nt,$a,Km],[Dn,Mt,vr]);var wr=useMemo(function(){return React.createElement(ln,_extends({},Cr,{ref:Wa}))},[Wa,ln,Cr]),Ym=useMemo(function(){return f?React.createElement(Br.Provider,{value:Ka},wr):wr},[Br,wr,Ka]);return Ym}var pe=Dt?React.memo(qe):qe;if(pe.WrappedComponent=ln,pe.displayName=qe.displayName=Sn,D){var jt=React.forwardRef(function(He,zn){return React.createElement(pe,_extends({},He,{reactReduxForwardedRef:zn}))});return jt.displayName=Sn,jt.WrappedComponent=ln,hoistStatics(jt,ln)}return hoistStatics(pe,ln)}}function Lb(n,e){var t={},o=function(c){var a=n[c];typeof a=="function"&&(t[c]=function(){return e(a.apply(void 0,arguments))})};for(var r in n)o(r);return t}function So(n){return function(t,o){var r=n(t,o);function i(){return r}return i.dependsOnOwnProps=!1,i}}function Tc(n){return n.dependsOnOwnProps!==null&&n.dependsOnOwnProps!==void 0?Boolean(n.dependsOnOwnProps):n.length!==1}function Pc(n,e){return function(o,r){var i=r.displayName,c=function(s,l){return c.dependsOnOwnProps?c.mapToProps(s,l):c.mapToProps(s)};return c.dependsOnOwnProps=!0,c.mapToProps=function(s,l){c.mapToProps=n,c.dependsOnOwnProps=Tc(n);var f=c(s,l);return typeof f=="function"&&(c.mapToProps=f,c.dependsOnOwnProps=Tc(f),f=c(s,l)),f},c}}function Nb(n){return typeof n=="function"?Pc(n,"mapDispatchToProps"):void 0}function Jb(n){return n?void 0:So(function(e){return{dispatch:e}})}function Ub(n){return n&&typeof n=="object"?So(function(e){return Lb(n,e)}):void 0}const yy=[Nb,Jb,Ub];function qb(n){return typeof n=="function"?Pc(n,"mapStateToProps"):void 0}function Hb(n){return n?void 0:So(function(){return{}})}const By=[qb,Hb];function xo(){return xo=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},xo.apply(this,arguments)}function zb(n,e,t){return xo({},t,n,e)}function Wb(n){return function(t,o){var r=o.displayName,i=o.pure,c=o.areMergedPropsEqual,a=!1,s;return function(f,A,u){var g=n(f,A,u);return a?(!i||!c(g,s))&&(s=g):(a=!0,s=g),s}}}function Gb(n){return typeof n=="function"?Wb(n):void 0}function $b(n){return n?void 0:function(){return zb}}const vy=[Gb,$b];function Oo(n,e,t){for(var o=e.length-1;o>=0;o--){var r=e[o](n);if(r)return r}return function(i,c){throw new Error("Invalid value of type "+typeof n+" for "+t+" argument when connecting component "+c.wrappedComponentName+".")}}function Kb(n,e){return n===e}function Fy(n){var e=n===void 0?{}:n,t=e.connectHOC,o=t===void 0?connectAdvanced:t,r=e.mapStateToPropsFactories,i=r===void 0?defaultMapStateToPropsFactories:r,c=e.mapDispatchToPropsFactories,a=c===void 0?defaultMapDispatchToPropsFactories:c,s=e.mergePropsFactories,l=s===void 0?defaultMergePropsFactories:s,f=e.selectorFactory,A=f===void 0?defaultSelectorFactory:f;return function(g,p,R,D){D===void 0&&(D={});var j=D,H=j.pure,Q=H===void 0?!0:H,rn=j.areStatesEqual,cn=rn===void 0?Kb:rn,_n=j.areOwnPropsEqual,ln=_n===void 0?shallowEqual:_n,mn=j.areStatePropsEqual,Sn=mn===void 0?shallowEqual:mn,It=j.areMergedPropsEqual,Dt=It===void 0?shallowEqual:It,mr=_objectWithoutPropertiesLoose(j,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),yr=Oo(g,i,"mapStateToProps"),qe=Oo(p,a,"mapDispatchToProps"),pe=Oo(R,l,"mergeProps");return o(A,_extends({methodName:"connect",getDisplayName:function(En){return"Connect("+En+")"},shouldHandleStateChanges:Boolean(g),initMapStateToProps:yr,initMapDispatchToProps:qe,initMergeProps:pe,pure:Q,areStatesEqual:cn,areOwnPropsEqual:ln,areStatePropsEqual:Sn,areMergedPropsEqual:Dt},mr))}}const Cy=null;function Yb(){var n=Bo(ut);return n}function wy(n){n===void 0&&(n=ReactReduxContext);var e=n===ReactReduxContext?useDefaultReduxContext:function(){return useContext(n)};return function(){var o=e(),r=o.store;return r}}var ky=null;function Sy(n){n===void 0&&(n=ReactReduxContext);var e=n===ReactReduxContext?useDefaultStore:createStoreHook(n);return function(){var o=e();return o.dispatch}}var xy=null,Vb=function(e,t){return e===t};function Xb(n,e,t,o){var r=mo(function(p){return p+1},0),i=r[1],c=ie(function(){return new xc(t,o)},[t,o]),a=Se(),s=Se(),l=Se(),f=Se(),A=t.getState(),u;try{if(n!==s.current||A!==l.current||a.current){var g=n(A);f.current===void 0||!e(g,f.current)?u=g:u=f.current}else u=f.current}catch(p){throw a.current&&(p.message+=`
The error may be correlated with this previous error:
`+a.current.stack+`

`),p}return ko(function(){s.current=n,l.current=A,f.current=u,a.current=void 0}),ko(function(){function p(){try{var R=t.getState(),D=s.current(R);if(e(D,f.current))return;f.current=D,l.current=R}catch(j){a.current=j}i()}return c.onStateChange=p,c.trySubscribe(),p(),function(){return c.tryUnsubscribe()}},[t,c]),u}function Zb(n){n===void 0&&(n=ut);var e=n===ut?Yb:function(){return Bo(n)};return function(o,r){r===void 0&&(r=Vb);var i=e(),c=i.store,a=i.subscription,s=Xb(o,r,c,a);return lc(s),s}}var Qb=Zb();kb(Cc);var nh="Expected a function";function eh(n,e){var t;if(typeof e!="function")throw new TypeError(nh);return n=bi(n),function(){return--n>0&&(t=e.apply(this,arguments)),n<=1&&(e=void 0),t}}const th=eh;function oh(n){return th(2,n)}const rh=oh(()=>({...window.desktop.store,dispatch:Ci}));var Rc=M(1174).h;const{render:ih}=C,ch=async(n,e="div")=>{const t=rh(),r=t.getState().settings.locale;r&&await window.desktop.intl.applyLocale(r);const i=document.createElement(e);document.body.appendChild(i),window.addEventListener("beforeunload",()=>Fc(i)),ih(Rc(Tb,{store:t},Rc(n,null)),i)},{notifyError:Ty,setupErrorReporter:ah}=(()=>{let n=null;return{setupErrorReporter:e=>n=e,notifyError:e=>{if(n){n(e);return}Hi.warn("notifyError: skipping error reporting, reporter is not initialized.",{error:e})}}})();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var To=function(n,e){return To=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])},To(n,e)};function Et(n,e){To(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Z=function(){return Z=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Z.apply(this,arguments)};function Py(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]]);return t}function Ry(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(c=n[a])&&(i=(r<3?c(i):r>3?c(e,t,i):c(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i}function Iy(n,e){return function(t,o){e(t,o,n)}}function Dy(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function jy(n,e,t,o){function r(i){return i instanceof t?i:new t(function(c){c(i)})}return new(t||(t=Promise))(function(i,c){function a(f){try{l(o.next(f))}catch(A){c(A)}}function s(f){try{l(o.throw(f))}catch(A){c(A)}}function l(f){f.done?i(f.value):r(f.value).then(a,s)}l((o=o.apply(n,e||[])).next())})}function My(n,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(l){return function(f){return s([l,f])}}function s(l){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(f){l=[6,f],r=0}finally{o=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Ly(n,e,t,o){o===void 0&&(o=t),n[o]=e[t]}function Ny(n,e){for(var t in n)t!=="default"&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function Ic(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],o=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&o>=n.length&&(n=void 0),{value:n&&n[o++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ce(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var o=t.call(n),r,i=[],c;try{for(;(e===void 0||e-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(a){c={error:a}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(c)throw c.error}}return i}function Dc(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(ce(arguments[e]));return n}function Jy(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var o=Array(n),r=0,e=0;e<t;e++)for(var i=arguments[e],c=0,a=i.length;c<a;c++,r++)o[r]=i[c];return o}function dt(n){return this instanceof dt?(this.v=n,this):new dt(n)}function Uy(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(n,e||[]),r,i=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(u){o[u]&&(r[u]=function(g){return new Promise(function(p,R){i.push([u,g,p,R])>1||a(u,g)})})}function a(u,g){try{s(o[u](g))}catch(p){A(i[0][3],p)}}function s(u){u.value instanceof dt?Promise.resolve(u.value.v).then(l,f):A(i[0][2],u)}function l(u){a("next",u)}function f(u){a("throw",u)}function A(u,g){u(g),i.shift(),i.length&&a(i[0][0],i[0][1])}}function qy(n){var e,t;return e={},o("next"),o("throw",function(r){throw r}),o("return"),e[Symbol.iterator]=function(){return this},e;function o(r,i){e[r]=n[r]?function(c){return(t=!t)?{value:dt(n[r](c)),done:r==="return"}:i?i(c):c}:i}}function Hy(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Ic=="function"?Ic(n):n[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=n[i]&&function(c){return new Promise(function(a,s){c=n[i](c),r(a,s,c.done,c.value)})}}function r(i,c,a,s){Promise.resolve(s).then(function(l){i({value:l,done:a})},c)}}function zy(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}function Wy(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}function Gy(n){return n&&n.__esModule?n:{default:n}}function $y(n,e){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}function Ky(n,e,t){if(!e.has(n))throw new TypeError("attempted to set private field on non-instance");return e.set(n,t),t}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Po=function(n,e){return Po=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])},Po(n,e)};function lh(n,e){Po(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var un=function(){return un=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},un.apply(this,arguments)};function Yy(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]]);return t}function Vy(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(c=n[a])&&(i=(r<3?c(i):r>3?c(e,t,i):c(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i}function Xy(n,e){return function(t,o){e(t,o,n)}}function Zy(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function Qy(n,e,t,o){function r(i){return i instanceof t?i:new t(function(c){c(i)})}return new(t||(t=Promise))(function(i,c){function a(f){try{l(o.next(f))}catch(A){c(A)}}function s(f){try{l(o.throw(f))}catch(A){c(A)}}function l(f){f.done?i(f.value):r(f.value).then(a,s)}l((o=o.apply(n,e||[])).next())})}function nB(n,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(l){return function(f){return s([l,f])}}function s(l){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(f){l=[6,f],r=0}finally{o=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function eB(n,e,t,o){o===void 0&&(o=t),n[o]=e[t]}function tB(n,e){for(var t in n)t!=="default"&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function xn(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],o=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&o>=n.length&&(n=void 0),{value:n&&n[o++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Oe(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var o=t.call(n),r,i=[],c;try{for(;(e===void 0||e-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(a){c={error:a}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(c)throw c.error}}return i}function Ro(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(Oe(arguments[e]));return n}function oB(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var o=Array(n),r=0,e=0;e<t;e++)for(var i=arguments[e],c=0,a=i.length;c<a;c++,r++)o[r]=i[c];return o}function gt(n){return this instanceof gt?(this.v=n,this):new gt(n)}function rB(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(n,e||[]),r,i=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(u){o[u]&&(r[u]=function(g){return new Promise(function(p,R){i.push([u,g,p,R])>1||a(u,g)})})}function a(u,g){try{s(o[u](g))}catch(p){A(i[0][3],p)}}function s(u){u.value instanceof gt?Promise.resolve(u.value.v).then(l,f):A(i[0][2],u)}function l(u){a("next",u)}function f(u){a("throw",u)}function A(u,g){u(g),i.shift(),i.length&&a(i[0][0],i[0][1])}}function iB(n){var e,t;return e={},o("next"),o("throw",function(r){throw r}),o("return"),e[Symbol.iterator]=function(){return this},e;function o(r,i){e[r]=n[r]?function(c){return(t=!t)?{value:gt(n[r](c)),done:r==="return"}:i?i(c):c}:i}}function cB(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof xn=="function"?xn(n):n[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=n[i]&&function(c){return new Promise(function(a,s){c=n[i](c),r(a,s,c.done,c.value)})}}function r(i,c,a,s){Promise.resolve(s).then(function(l){i({value:l,done:a})},c)}}function aB(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}function lB(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}function sB(n){return n&&n.__esModule?n:{default:n}}function fB(n,e){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}function AB(n,e,t){if(!e.has(n))throw new TypeError("attempted to set private field on non-instance");return e.set(n,t),t}var tn=M(5897),jc=Object.prototype.toString;function Mc(n){switch(jc.call(n)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return On(n,Error)}}function ae(n,e){return jc.call(n)==="[object "+e+"]"}function Lc(n){return ae(n,"ErrorEvent")}function Nc(n){return ae(n,"DOMError")}function sh(n){return ae(n,"DOMException")}function le(n){return ae(n,"String")}function Te(n){return n===null||typeof n!="object"&&typeof n!="function"}function se(n){return ae(n,"Object")}function Io(n){return typeof Event!="undefined"&&On(n,Event)}function Jc(n){return typeof Element!="undefined"&&On(n,Element)}function fh(n){return ae(n,"RegExp")}function Do(n){return Boolean(n&&n.then&&typeof n.then=="function")}function Ah(n){return se(n)&&"nativeEvent"in n&&"preventDefault"in n&&"stopPropagation"in n}function uB(n){return typeof n=="number"&&n!==n}function On(n,e){try{return n instanceof e}catch{return!1}}function pt(n,e){try{for(var t=n,o=5,r=80,i=[],c=0,a=0,s=" > ",l=s.length,f=void 0;t&&c++<o&&(f=uh(t,e),!(f==="html"||c>1&&a+i.length*l+f.length>=r));)i.push(f),a+=f.length,t=t.parentNode;return i.reverse().join(s)}catch{return"<unknown>"}}function uh(n,e){var t=n,o=[],r,i,c,a,s;if(!t||!t.tagName)return"";o.push(t.tagName.toLowerCase());var l=e&&e.length?e.filter(function(A){return t.getAttribute(A)}).map(function(A){return[A,t.getAttribute(A)]}):null;if(l&&l.length)l.forEach(function(A){o.push("["+A[0]+'="'+A[1]+'"]')});else if(t.id&&o.push("#"+t.id),r=t.className,r&&le(r))for(i=r.split(/\s+/),s=0;s<i.length;s++)o.push("."+i[s]);var f=["type","name","title","alt"];for(s=0;s<f.length;s++)c=f[s],a=t.getAttribute(c),a&&o.push("["+c+'="'+a+'"]');return o.join("")}function Eh(){var n=(0,tn.R)();try{return n.document.location.href}catch{return""}}function Pe(n,e){return e===void 0&&(e=0),typeof n!="string"||e===0||n.length<=e?n:n.substr(0,e)+"..."}function EB(n,e){var t=n,o=t.length;if(o<=150)return t;e>o&&(e=o);var r=Math.max(e-60,0);r<5&&(r=0);var i=Math.min(r+140,o);return i>o-5&&(i=o),i===o&&(r=Math.max(i-140,0)),t=t.slice(r,i),r>0&&(t="'{snip} "+t),i<o&&(t+=" {snip}"),t}function Uc(n,e){if(!Array.isArray(n))return"";for(var t=[],o=0;o<n.length;o++){var r=n[o];try{t.push(String(r))}catch{t.push("[value cannot be serialized]")}}return t.join(e)}function jo(n,e){return le(n)?fh(e)?e.test(n):typeof e=="string"?n.indexOf(e)!==-1:!1:!1}function dB(n){return n.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function fn(n,e,t){if(e in n){var o=n[e],r=t(o);if(typeof r=="function")try{qc(r,o)}catch{}n[e]=r}}function bt(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,configurable:!0})}function qc(n,e){var t=e.prototype||{};n.prototype=e.prototype=t,bt(n,"__sentry_original__",e)}function Mo(n){return n.__sentry_original__}function dh(n){return Object.keys(n).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])}).join("&")}function Hc(n){if(Mc(n)){var e=n,t={message:e.message,name:e.name,stack:e.stack};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}if(Io(n)){var r=n,i={};i.type=r.type;try{i.target=Jc(r.target)?pt(r.target):Object.prototype.toString.call(r.target)}catch{i.target="<unknown>"}try{i.currentTarget=Jc(r.currentTarget)?pt(r.currentTarget):Object.prototype.toString.call(r.currentTarget)}catch{i.currentTarget="<unknown>"}typeof CustomEvent!="undefined"&&On(n,CustomEvent)&&(i.detail=r.detail);for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(i[c]=r[c]);return i}return n}function gh(n,e){e===void 0&&(e=40);var t=Object.keys(Hc(n));if(t.sort(),!t.length)return"[object has no keys]";if(t[0].length>=e)return Pe(t[0],e);for(var o=t.length;o>0;o--){var r=t.slice(0,o).join(", ");if(!(r.length>e))return o===t.length?r:Pe(r,e)}return""}function Lo(n){var e,t;if(se(n)){var o=n,r={};try{for(var i=xn(Object.keys(o)),c=i.next();!c.done;c=i.next()){var a=c.value;typeof o[a]!="undefined"&&(r[a]=Lo(o[a]))}}catch(s){e={error:s}}finally{try{c&&!c.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return r}return Array.isArray(n)?n.map(Lo):n}function gB(n){var e;switch(!0){case n==null:e=new String(n);break;case(typeof n=="symbol"||typeof n=="bigint"):e=Object(n);break;case isPrimitive(n):e=new n.constructor(n);break;default:e=n;break}return e}var zc,Wc=function(){function n(){this.name=n.id}return n.prototype.setupOnce=function(){zc=Function.prototype.toString,Function.prototype.toString=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=Mo(this)||this;return zc.apply(o,e)}},n.id="FunctionToString",n}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var No=function(n,e){return No=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])},No(n,e)};function pB(n,e){No(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var en=function(){return en=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},en.apply(this,arguments)};function bB(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]]);return t}function hB(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(c=n[a])&&(i=(r<3?c(i):r>3?c(e,t,i):c(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i}function _B(n,e){return function(t,o){e(t,o,n)}}function mB(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function yB(n,e,t,o){function r(i){return i instanceof t?i:new t(function(c){c(i)})}return new(t||(t=Promise))(function(i,c){function a(f){try{l(o.next(f))}catch(A){c(A)}}function s(f){try{l(o.throw(f))}catch(A){c(A)}}function l(f){f.done?i(f.value):r(f.value).then(a,s)}l((o=o.apply(n,e||[])).next())})}function BB(n,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(l){return function(f){return s([l,f])}}function s(l){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(f){l=[6,f],r=0}finally{o=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function vB(n,e,t,o){o===void 0&&(o=t),n[o]=e[t]}function FB(n,e){for(var t in n)t!=="default"&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function Jo(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],o=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&o>=n.length&&(n=void 0),{value:n&&n[o++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Uo(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var o=t.call(n),r,i=[],c;try{for(;(e===void 0||e-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(a){c={error:a}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(c)throw c.error}}return i}function Cn(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(Uo(arguments[e]));return n}function CB(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var o=Array(n),r=0,e=0;e<t;e++)for(var i=arguments[e],c=0,a=i.length;c<a;c++,r++)o[r]=i[c];return o}function ht(n){return this instanceof ht?(this.v=n,this):new ht(n)}function wB(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(n,e||[]),r,i=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(u){o[u]&&(r[u]=function(g){return new Promise(function(p,R){i.push([u,g,p,R])>1||a(u,g)})})}function a(u,g){try{s(o[u](g))}catch(p){A(i[0][3],p)}}function s(u){u.value instanceof ht?Promise.resolve(u.value.v).then(l,f):A(i[0][2],u)}function l(u){a("next",u)}function f(u){a("throw",u)}function A(u,g){u(g),i.shift(),i.length&&a(i[0][0],i[0][1])}}function kB(n){var e,t;return e={},o("next"),o("throw",function(r){throw r}),o("return"),e[Symbol.iterator]=function(){return this},e;function o(r,i){e[r]=n[r]?function(c){return(t=!t)?{value:ht(n[r](c)),done:r==="return"}:i?i(c):c}:i}}function SB(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Jo=="function"?Jo(n):n[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=n[i]&&function(c){return new Promise(function(a,s){c=n[i](c),r(a,s,c.done,c.value)})}}function r(i,c,a,s){Promise.resolve(s).then(function(l){i({value:l,done:a})},c)}}function xB(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}function OB(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}function TB(n){return n&&n.__esModule?n:{default:n}}function PB(n,e){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}function RB(n,e,t){if(!e.has(n))throw new TypeError("attempted to set private field on non-instance");return e.set(n,t),t}var N=M(9685),Re=(0,tn.R)(),qo="Sentry Logger ",Gc=["debug","info","warn","error","log","assert"];function _t(n){var e=(0,tn.R)();if(!("console"in e))return n();var t=e.console,o={};Gc.forEach(function(i){i in e.console&&t[i].__sentry_original__&&(o[i]=t[i],t[i]=t[i].__sentry_original__)});var r=n();return Object.keys(o).forEach(function(i){t[i]=o[i]}),r}var ph=function(){function n(){this._enabled=!1}return n.prototype.disable=function(){this._enabled=!1},n.prototype.enable=function(){this._enabled=!0},n.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._enabled&&_t(function(){var o;(o=Re.console).log.apply(o,Ro([qo+"[Log]:"],e))})},n.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._enabled&&_t(function(){var o;(o=Re.console).warn.apply(o,Ro([qo+"[Warn]:"],e))})},n.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._enabled&&_t(function(){var o;(o=Re.console).error.apply(o,Ro([qo+"[Error]:"],e))})},n}(),Ho=Re.__SENTRY__||{},J=Ho.logger||new ph;(0,N.c)()&&(Ho.logger=J,Re.__SENTRY__=Ho);function fe(){var n=(0,tn.R)(),e=n.crypto||n.msCrypto;if(e!==void 0&&e.getRandomValues){var t=new Uint16Array(8);e.getRandomValues(t),t[3]=t[3]&4095|16384,t[4]=t[4]&16383|32768;var o=function(r){for(var i=r.toString(16);i.length<4;)i="0"+i;return i};return o(t[0])+o(t[1])+o(t[2])+o(t[3])+o(t[4])+o(t[5])+o(t[6])+o(t[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(r){var i=Math.random()*16|0,c=r==="x"?i:i&3|8;return c.toString(16)})}function zo(n){if(!n)return{};var e=n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!e)return{};var t=e[6]||"",o=e[8]||"";return{host:e[4],path:e[5],protocol:e[2],relative:e[5]+t+o}}function $c(n){return n.exception&&n.exception.values?n.exception.values[0]:void 0}function Un(n){var e=n.message,t=n.event_id;if(e)return e;var o=$c(n);return o?o.type&&o.value?o.type+": "+o.value:o.type||o.value||t||"<unknown>":t||"<unknown>"}function Wo(n,e,t){var o=n.exception=n.exception||{},r=o.values=o.values||[],i=r[0]=r[0]||{};i.value||(i.value=e||""),i.type||(i.type=t||"Error")}function Ie(n,e){var t=$c(n);if(t){var o={type:"generic",handled:!0},r=t.mechanism;if(t.mechanism=un(un(un({},o),r),e),e&&"data"in e){var i=un(un({},r&&r.data),e.data);t.mechanism.data=i}}}var bh=/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;function IB(n){var e=n.match(bh)||[],t=parseInt(e[1],10),o=parseInt(e[2],10),r=parseInt(e[3],10);return{buildmetadata:e[5],major:isNaN(t)?void 0:t,minor:isNaN(o)?void 0:o,patch:isNaN(r)?void 0:r,prerelease:e[4]}}function DB(n,e,t){t===void 0&&(t=5);var o=e.lineno||0,r=n.length,i=Math.max(Math.min(r,o-1),0);e.pre_context=n.slice(Math.max(0,i-t),i).map(function(c){return snipLine(c,0)}),e.context_line=snipLine(n[Math.min(r-1,i)],e.colno||0),e.post_context=n.slice(Math.min(i+1,r),i+1+t).map(function(c){return snipLine(c,0)})}function jB(n){return n.split(/[\?#]/,1)[0]}function Kc(n){if(n&&n.__sentry_captured__)return!0;try{bt(n,"__sentry_captured__",!0)}catch{}return!1}var hh=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],Yc=function(){function n(e){e===void 0&&(e={}),this._options=e,this.name=n.id}return n.prototype.setupOnce=function(e,t){e(function(o){var r=t();if(r){var i=r.getIntegration(n);if(i){var c=r.getClient(),a=c?c.getOptions():{},s=_h(i._options,a);return mh(o,s)?null:o}}return o})},n.id="InboundFilters",n}();function _h(n,e){return n===void 0&&(n={}),e===void 0&&(e={}),{allowUrls:Cn(n.whitelistUrls||[],n.allowUrls||[],e.whitelistUrls||[],e.allowUrls||[]),denyUrls:Cn(n.blacklistUrls||[],n.denyUrls||[],e.blacklistUrls||[],e.denyUrls||[]),ignoreErrors:Cn(n.ignoreErrors||[],e.ignoreErrors||[],hh),ignoreInternal:n.ignoreInternal!==void 0?n.ignoreInternal:!0}}function mh(n,e){return e.ignoreInternal&&Ch(n)?((0,N.c)()&&J.warn(`Event dropped due to being internal Sentry Error.
Event: `+Un(n)),!0):yh(n,e.ignoreErrors)?((0,N.c)()&&J.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: "+Un(n)),!0):Bh(n,e.denyUrls)?((0,N.c)()&&J.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: "+Un(n)+`.
Url: `+mt(n)),!0):vh(n,e.allowUrls)?!1:((0,N.c)()&&J.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: "+Un(n)+`.
Url: `+mt(n)),!0)}function yh(n,e){return!e||!e.length?!1:Fh(n).some(function(t){return e.some(function(o){return jo(t,o)})})}function Bh(n,e){if(!e||!e.length)return!1;var t=mt(n);return t?e.some(function(o){return jo(t,o)}):!1}function vh(n,e){if(!e||!e.length)return!0;var t=mt(n);return t?e.some(function(o){return jo(t,o)}):!0}function Fh(n){if(n.message)return[n.message];if(n.exception)try{var e=n.exception.values&&n.exception.values[0]||{},t=e.type,o=t===void 0?"":t,r=e.value,i=r===void 0?"":r;return[""+i,o+": "+i]}catch{return(0,N.c)()&&J.error("Cannot extract message for event "+Un(n)),[]}return[]}function Ch(n){try{return n.exception.values[0].type==="SentryError"}catch{}return!1}function Vc(n){n===void 0&&(n=[]);for(var e=n.length-1;e>=0;e--){var t=n[e];if(t&&t.filename!=="<anonymous>"&&t.filename!=="[native code]")return t.filename||null}return null}function mt(n){try{if(n.stacktrace)return Vc(n.stacktrace.frames);var e;try{e=n.exception.values[0].stacktrace.frames}catch{}return e?Vc(e):null}catch{return(0,N.c)()&&J.error("Cannot extract url for event "+Un(n)),null}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Go=function(n,e){return Go=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])},Go(n,e)};function MB(n,e){Go(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var P=function(){return P=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},P.apply(this,arguments)};function LB(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]]);return t}function NB(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(c=n[a])&&(i=(r<3?c(i):r>3?c(e,t,i):c(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i}function JB(n,e){return function(t,o){e(t,o,n)}}function UB(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function qB(n,e,t,o){function r(i){return i instanceof t?i:new t(function(c){c(i)})}return new(t||(t=Promise))(function(i,c){function a(f){try{l(o.next(f))}catch(A){c(A)}}function s(f){try{l(o.throw(f))}catch(A){c(A)}}function l(f){f.done?i(f.value):r(f.value).then(a,s)}l((o=o.apply(n,e||[])).next())})}function HB(n,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(l){return function(f){return s([l,f])}}function s(l){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(f){l=[6,f],r=0}finally{o=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function zB(n,e,t,o){o===void 0&&(o=t),n[o]=e[t]}function WB(n,e){for(var t in n)t!=="default"&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function Xc(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],o=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&o>=n.length&&(n=void 0),{value:n&&n[o++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function wh(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var o=t.call(n),r,i=[],c;try{for(;(e===void 0||e-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(a){c={error:a}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(c)throw c.error}}return i}function Ae(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(wh(arguments[e]));return n}function GB(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var o=Array(n),r=0,e=0;e<t;e++)for(var i=arguments[e],c=0,a=i.length;c<a;c++,r++)o[r]=i[c];return o}function yt(n){return this instanceof yt?(this.v=n,this):new yt(n)}function $B(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(n,e||[]),r,i=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(u){o[u]&&(r[u]=function(g){return new Promise(function(p,R){i.push([u,g,p,R])>1||a(u,g)})})}function a(u,g){try{s(o[u](g))}catch(p){A(i[0][3],p)}}function s(u){u.value instanceof yt?Promise.resolve(u.value.v).then(l,f):A(i[0][2],u)}function l(u){a("next",u)}function f(u){a("throw",u)}function A(u,g){u(g),i.shift(),i.length&&a(i[0][0],i[0][1])}}function KB(n){var e,t;return e={},o("next"),o("throw",function(r){throw r}),o("return"),e[Symbol.iterator]=function(){return this},e;function o(r,i){e[r]=n[r]?function(c){return(t=!t)?{value:yt(n[r](c)),done:r==="return"}:i?i(c):c}:i}}function YB(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Xc=="function"?Xc(n):n[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=n[i]&&function(c){return new Promise(function(a,s){c=n[i](c),r(a,s,c.done,c.value)})}}function r(i,c,a,s){Promise.resolve(s).then(function(l){i({value:l,done:a})},c)}}function VB(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}function XB(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}function ZB(n){return n&&n.__esModule?n:{default:n}}function QB(n,e){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}function nv(n,e,t){if(!e.has(n))throw new TypeError("attempted to set private field on non-instance");return e.set(n,t),t}var ue=M(3264),kh=M(5409);function Ee(n){return new qn(function(e){e(n)})}function $o(n){return new qn(function(e,t){t(n)})}var qn=function(){function n(e){var t=this;this._state=0,this._handlers=[],this._resolve=function(o){t._setResult(1,o)},this._reject=function(o){t._setResult(2,o)},this._setResult=function(o,r){if(t._state===0){if(Do(r)){r.then(t._resolve,t._reject);return}t._state=o,t._value=r,t._executeHandlers()}},this._executeHandlers=function(){if(t._state!==0){var o=t._handlers.slice();t._handlers=[],o.forEach(function(r){r[0]||(t._state===1&&r[1](t._value),t._state===2&&r[2](t._value),r[0]=!0)})}};try{e(this._resolve,this._reject)}catch(o){this._reject(o)}}return n.prototype.then=function(e,t){var o=this;return new n(function(r,i){o._handlers.push([!1,function(c){if(!e)r(c);else try{r(e(c))}catch(a){i(a)}},function(c){if(!t)i(c);else try{r(t(c))}catch(a){i(a)}}]),o._executeHandlers()})},n.prototype.catch=function(e){return this.then(function(t){return t},e)},n.prototype.finally=function(e){var t=this;return new n(function(o,r){var i,c;return t.then(function(a){c=!1,i=a,e&&e()},function(a){c=!0,i=a,e&&e()}).then(function(){if(c){r(i);return}o(i)})})},n}(),Zc=100,Bt=function(){function n(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={}}return n.clone=function(e){var t=new n;return e&&(t._breadcrumbs=Ae(e._breadcrumbs),t._tags=P({},e._tags),t._extra=P({},e._extra),t._contexts=P({},e._contexts),t._user=e._user,t._level=e._level,t._span=e._span,t._session=e._session,t._transactionName=e._transactionName,t._fingerprint=e._fingerprint,t._eventProcessors=Ae(e._eventProcessors),t._requestSession=e._requestSession),t},n.prototype.addScopeListener=function(e){this._scopeListeners.push(e)},n.prototype.addEventProcessor=function(e){return this._eventProcessors.push(e),this},n.prototype.setUser=function(e){return this._user=e||{},this._session&&this._session.update({user:e}),this._notifyScopeListeners(),this},n.prototype.getUser=function(){return this._user},n.prototype.getRequestSession=function(){return this._requestSession},n.prototype.setRequestSession=function(e){return this._requestSession=e,this},n.prototype.setTags=function(e){return this._tags=P(P({},this._tags),e),this._notifyScopeListeners(),this},n.prototype.setTag=function(e,t){var o;return this._tags=P(P({},this._tags),(o={},o[e]=t,o)),this._notifyScopeListeners(),this},n.prototype.setExtras=function(e){return this._extra=P(P({},this._extra),e),this._notifyScopeListeners(),this},n.prototype.setExtra=function(e,t){var o;return this._extra=P(P({},this._extra),(o={},o[e]=t,o)),this._notifyScopeListeners(),this},n.prototype.setFingerprint=function(e){return this._fingerprint=e,this._notifyScopeListeners(),this},n.prototype.setLevel=function(e){return this._level=e,this._notifyScopeListeners(),this},n.prototype.setTransactionName=function(e){return this._transactionName=e,this._notifyScopeListeners(),this},n.prototype.setTransaction=function(e){return this.setTransactionName(e)},n.prototype.setContext=function(e,t){var o;return t===null?delete this._contexts[e]:this._contexts=P(P({},this._contexts),(o={},o[e]=t,o)),this._notifyScopeListeners(),this},n.prototype.setSpan=function(e){return this._span=e,this._notifyScopeListeners(),this},n.prototype.getSpan=function(){return this._span},n.prototype.getTransaction=function(){var e=this.getSpan();return e&&e.transaction},n.prototype.setSession=function(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this},n.prototype.getSession=function(){return this._session},n.prototype.update=function(e){if(!e)return this;if(typeof e=="function"){var t=e(this);return t instanceof n?t:this}return e instanceof n?(this._tags=P(P({},this._tags),e._tags),this._extra=P(P({},this._extra),e._extra),this._contexts=P(P({},this._contexts),e._contexts),e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession)):se(e)&&(e=e,this._tags=P(P({},this._tags),e.tags),this._extra=P(P({},this._extra),e.extra),this._contexts=P(P({},this._contexts),e.contexts),e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession)),this},n.prototype.clear=function(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this},n.prototype.addBreadcrumb=function(e,t){var o=typeof t=="number"?Math.min(t,Zc):Zc;if(o<=0)return this;var r=P({timestamp:(0,ue.yW)()},e);return this._breadcrumbs=Ae(this._breadcrumbs,[r]).slice(-o),this._notifyScopeListeners(),this},n.prototype.clearBreadcrumbs=function(){return this._breadcrumbs=[],this._notifyScopeListeners(),this},n.prototype.applyToEvent=function(e,t){if(this._extra&&Object.keys(this._extra).length&&(e.extra=P(P({},this._extra),e.extra)),this._tags&&Object.keys(this._tags).length&&(e.tags=P(P({},this._tags),e.tags)),this._user&&Object.keys(this._user).length&&(e.user=P(P({},this._user),e.user)),this._contexts&&Object.keys(this._contexts).length&&(e.contexts=P(P({},this._contexts),e.contexts)),this._level&&(e.level=this._level),this._transactionName&&(e.transaction=this._transactionName),this._span){e.contexts=P({trace:this._span.getTraceContext()},e.contexts);var o=this._span.transaction&&this._span.transaction.name;o&&(e.tags=P({transaction:o},e.tags))}return this._applyFingerprint(e),e.breadcrumbs=Ae(e.breadcrumbs||[],this._breadcrumbs),e.breadcrumbs=e.breadcrumbs.length>0?e.breadcrumbs:void 0,e.sdkProcessingMetadata=this._sdkProcessingMetadata,this._notifyEventProcessors(Ae(Qc(),this._eventProcessors),e,t)},n.prototype.setSDKProcessingMetadata=function(e){return this._sdkProcessingMetadata=P(P({},this._sdkProcessingMetadata),e),this},n.prototype._notifyEventProcessors=function(e,t,o,r){var i=this;return r===void 0&&(r=0),new qn(function(c,a){var s=e[r];if(t===null||typeof s!="function")c(t);else{var l=s(P({},t),o);Do(l)?l.then(function(f){return i._notifyEventProcessors(e,f,o,r+1).then(c)}).then(null,a):i._notifyEventProcessors(e,l,o,r+1).then(c).then(null,a)}})},n.prototype._notifyScopeListeners=function(){var e=this;this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(function(t){t(e)}),this._notifyingListeners=!1)},n.prototype._applyFingerprint=function(e){e.fingerprint=e.fingerprint?Array.isArray(e.fingerprint)?e.fingerprint:[e.fingerprint]:[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint},n}();function Qc(){var n=(0,tn.R)();return n.__SENTRY__=n.__SENTRY__||{},n.__SENTRY__.globalEventProcessors=n.__SENTRY__.globalEventProcessors||[],n.__SENTRY__.globalEventProcessors}function Ko(n){Qc().push(n)}var Sh=function(){function n(e){this.errors=0,this.sid=fe(),this.duration=0,this.status="ok",this.init=!0,this.ignoreDuration=!1;var t=(0,ue.ph)();this.timestamp=t,this.started=t,e&&this.update(e)}return n.prototype.update=function(e){if(e===void 0&&(e={}),e.user&&(!this.ipAddress&&e.user.ip_address&&(this.ipAddress=e.user.ip_address),!this.did&&!e.did&&(this.did=e.user.id||e.user.email||e.user.username)),this.timestamp=e.timestamp||(0,ue.ph)(),e.ignoreDuration&&(this.ignoreDuration=e.ignoreDuration),e.sid&&(this.sid=e.sid.length===32?e.sid:fe()),e.init!==void 0&&(this.init=e.init),!this.did&&e.did&&(this.did=""+e.did),typeof e.started=="number"&&(this.started=e.started),this.ignoreDuration)this.duration=void 0;else if(typeof e.duration=="number")this.duration=e.duration;else{var t=this.timestamp-this.started;this.duration=t>=0?t:0}e.release&&(this.release=e.release),e.environment&&(this.environment=e.environment),!this.ipAddress&&e.ipAddress&&(this.ipAddress=e.ipAddress),!this.userAgent&&e.userAgent&&(this.userAgent=e.userAgent),typeof e.errors=="number"&&(this.errors=e.errors),e.status&&(this.status=e.status)},n.prototype.close=function(e){e?this.update({status:e}):this.status==="ok"?this.update({status:"exited"}):this.update()},n.prototype.toJSON=function(){return Lo({sid:""+this.sid,init:this.init,started:new Date(this.started*1e3).toISOString(),timestamp:new Date(this.timestamp*1e3).toISOString(),status:this.status,errors:this.errors,did:typeof this.did=="number"||typeof this.did=="string"?""+this.did:void 0,duration:this.duration,attrs:{release:this.release,environment:this.environment,ip_address:this.ipAddress,user_agent:this.userAgent}})},n}(),Yo=4,xh=100,Vo=function(){function n(e,t,o){t===void 0&&(t=new Bt),o===void 0&&(o=Yo),this._version=o,this._stack=[{}],this.getStackTop().scope=t,e&&this.bindClient(e)}return n.prototype.isOlderThan=function(e){return this._version<e},n.prototype.bindClient=function(e){var t=this.getStackTop();t.client=e,e&&e.setupIntegrations&&e.setupIntegrations()},n.prototype.pushScope=function(){var e=Bt.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:e}),e},n.prototype.popScope=function(){return this.getStack().length<=1?!1:!!this.getStack().pop()},n.prototype.withScope=function(e){var t=this.pushScope();try{e(t)}finally{this.popScope()}},n.prototype.getClient=function(){return this.getStackTop().client},n.prototype.getScope=function(){return this.getStackTop().scope},n.prototype.getStack=function(){return this._stack},n.prototype.getStackTop=function(){return this._stack[this._stack.length-1]},n.prototype.captureException=function(e,t){var o=this._lastEventId=t&&t.event_id?t.event_id:fe(),r=t;if(!t){var i=void 0;try{throw new Error("Sentry syntheticException")}catch(c){i=c}r={originalException:e,syntheticException:i}}return this._invokeClient("captureException",e,P(P({},r),{event_id:o})),o},n.prototype.captureMessage=function(e,t,o){var r=this._lastEventId=o&&o.event_id?o.event_id:fe(),i=o;if(!o){var c=void 0;try{throw new Error(e)}catch(a){c=a}i={originalException:e,syntheticException:c}}return this._invokeClient("captureMessage",e,t,P(P({},i),{event_id:r})),r},n.prototype.captureEvent=function(e,t){var o=t&&t.event_id?t.event_id:fe();return e.type!=="transaction"&&(this._lastEventId=o),this._invokeClient("captureEvent",e,P(P({},t),{event_id:o})),o},n.prototype.lastEventId=function(){return this._lastEventId},n.prototype.addBreadcrumb=function(e,t){var o=this.getStackTop(),r=o.scope,i=o.client;if(!(!r||!i)){var c=i.getOptions&&i.getOptions()||{},a=c.beforeBreadcrumb,s=a===void 0?null:a,l=c.maxBreadcrumbs,f=l===void 0?xh:l;if(!(f<=0)){var A=(0,ue.yW)(),u=P({timestamp:A},e),g=s?_t(function(){return s(u,t)}):u;g!==null&&r.addBreadcrumb(g,f)}}},n.prototype.setUser=function(e){var t=this.getScope();t&&t.setUser(e)},n.prototype.setTags=function(e){var t=this.getScope();t&&t.setTags(e)},n.prototype.setExtras=function(e){var t=this.getScope();t&&t.setExtras(e)},n.prototype.setTag=function(e,t){var o=this.getScope();o&&o.setTag(e,t)},n.prototype.setExtra=function(e,t){var o=this.getScope();o&&o.setExtra(e,t)},n.prototype.setContext=function(e,t){var o=this.getScope();o&&o.setContext(e,t)},n.prototype.configureScope=function(e){var t=this.getStackTop(),o=t.scope,r=t.client;o&&r&&e(o)},n.prototype.run=function(e){var t=na(this);try{e(this)}finally{na(t)}},n.prototype.getIntegration=function(e){var t=this.getClient();if(!t)return null;try{return t.getIntegration(e)}catch{return(0,N.c)()&&J.warn("Cannot retrieve integration "+e.id+" from the current Hub"),null}},n.prototype.startSpan=function(e){return this._callExtensionMethod("startSpan",e)},n.prototype.startTransaction=function(e,t){return this._callExtensionMethod("startTransaction",e,t)},n.prototype.traceHeaders=function(){return this._callExtensionMethod("traceHeaders")},n.prototype.captureSession=function(e){if(e===void 0&&(e=!1),e)return this.endSession();this._sendSessionUpdate()},n.prototype.endSession=function(){var e=this.getStackTop(),t=e&&e.scope,o=t&&t.getSession();o&&o.close(),this._sendSessionUpdate(),t&&t.setSession()},n.prototype.startSession=function(e){var t=this.getStackTop(),o=t.scope,r=t.client,i=r&&r.getOptions()||{},c=i.release,a=i.environment,s=(0,tn.R)(),l=(s.navigator||{}).userAgent,f=new Sh(P(P(P({release:c,environment:a},o&&{user:o.getUser()}),l&&{userAgent:l}),e));if(o){var A=o.getSession&&o.getSession();A&&A.status==="ok"&&A.update({status:"exited"}),this.endSession(),o.setSession(f)}return f},n.prototype._sendSessionUpdate=function(){var e=this.getStackTop(),t=e.scope,o=e.client;if(t){var r=t.getSession&&t.getSession();r&&o&&o.captureSession&&o.captureSession(r)}},n.prototype._invokeClient=function(e){for(var t,o=[],r=1;r<arguments.length;r++)o[r-1]=arguments[r];var i=this.getStackTop(),c=i.scope,a=i.client;a&&a[e]&&(t=a)[e].apply(t,Ae(o,[c]))},n.prototype._callExtensionMethod=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var r=De(),i=r.__SENTRY__;if(i&&i.extensions&&typeof i.extensions[e]=="function")return i.extensions[e].apply(this,t);(0,N.c)()&&J.warn("Extension method "+e+" couldn't be found, doing nothing.")},n}();function De(){var n=(0,tn.R)();return n.__SENTRY__=n.__SENTRY__||{extensions:{},hub:void 0},n}function na(n){var e=De(),t=Tn(e);return Xo(e,n),t}function An(){var n=De();return(!ea(n)||Tn(n).isOlderThan(Yo))&&Xo(n,new Vo),(0,kh.KV)()?Oh(n):Tn(n)}function ev(){isDebugBuild()&&logger.warn("Function `getActiveDomain` is deprecated and will be removed in a future version.");var n=De().__SENTRY__;return n&&n.extensions&&n.extensions.domain&&n.extensions.domain.active}function Oh(n){try{var e=De().__SENTRY__,t=e&&e.extensions&&e.extensions.domain&&e.extensions.domain.active;if(!t)return Tn(n);if(!ea(t)||Tn(t).isOlderThan(Yo)){var o=Tn(n).getStackTop();Xo(t,new Vo(o.client,Bt.clone(o.scope)))}return Tn(t)}catch{return Tn(n)}}function ea(n){return!!(n&&n.__SENTRY__&&n.__SENTRY__.hub)}function Tn(n){return n&&n.__SENTRY__&&n.__SENTRY__.hub||(n.__SENTRY__=n.__SENTRY__||{},n.__SENTRY__.hub=new Vo),n.__SENTRY__.hub}function Xo(n,e){return n?(n.__SENTRY__=n.__SENTRY__||{},n.__SENTRY__.hub=e,!0):!1}var wn;(function(n){n.Fatal="fatal",n.Error="error",n.Warning="warning",n.Log="log",n.Info="info",n.Debug="debug",n.Critical="critical"})(wn||(wn={}));var tv=null,Th=50;function Ph(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=n.sort(function(o,r){return o[0]-r[0]}).map(function(o){return o[1]});return function(o,r){var i,c,a,s;r===void 0&&(r=0);var l=[];try{for(var f=xn(o.split(`
`).slice(r)),A=f.next();!A.done;A=f.next()){var u=A.value;try{for(var g=(a=void 0,xn(t)),p=g.next();!p.done;p=g.next()){var R=p.value,D=R(u);if(D){l.push(D);break}}}catch(j){a={error:j}}finally{try{p&&!p.done&&(s=g.return)&&s.call(g)}finally{if(a)throw a.error}}}}catch(j){i={error:j}}finally{try{A&&!A.done&&(c=f.return)&&c.call(f)}finally{if(i)throw i.error}}return Rh(l)}}function Rh(n){if(!n.length)return[];var e=n,t=e[0].function||"",o=e[e.length-1].function||"";return(t.indexOf("captureMessage")!==-1||t.indexOf("captureException")!==-1)&&(e=e.slice(1)),o.indexOf("sentryWrapped")!==-1&&(e=e.slice(0,-1)),e.slice(0,Th).map(function(r){return un(un({},r),{filename:r.filename||e[0].filename,function:r.function||"?"})}).reverse()}var Zo="<anonymous>";function Pn(n){try{return!n||typeof n!="function"?Zo:n.name||Zo}catch{return Zo}}function ov(){try{return new ErrorEvent(""),!0}catch{return!1}}function rv(){try{return new DOMError(""),!0}catch{return!1}}function iv(){try{return new DOMException(""),!0}catch{return!1}}function vt(){if(!("fetch"in(0,tn.R)()))return!1;try{return new Headers,new Request(""),new Response,!0}catch{return!1}}function Qo(n){return n&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString())}function Ih(){if(!vt())return!1;var n=(0,tn.R)();if(Qo(n.fetch))return!0;var e=!1,t=n.document;if(t&&typeof t.createElement=="function")try{var o=t.createElement("iframe");o.hidden=!0,t.head.appendChild(o),o.contentWindow&&o.contentWindow.fetch&&(e=Qo(o.contentWindow.fetch)),t.head.removeChild(o)}catch(r){(0,N.c)()&&J.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",r)}return e}function cv(){return"ReportingObserver"in getGlobalObject()}function Dh(){if(!vt())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch{return!1}}function jh(){var n=(0,tn.R)(),e=n.chrome,t=e&&e.app&&e.app.runtime,o="history"in n&&!!n.history.pushState&&!!n.history.replaceState;return!t&&o}var nn=(0,tn.R)(),je={},ta={};function Mh(n){if(!ta[n])switch(ta[n]=!0,n){case"console":Lh();break;case"dom":$h();break;case"xhr":qh();break;case"fetch":Nh();break;case"history":Hh();break;case"error":Kh();break;case"unhandledrejection":Yh();break;default:(0,N.c)()&&J.warn("unknown instrumentation type:",n);return}}function Rn(n,e){je[n]=je[n]||[],je[n].push(e),Mh(n)}function yn(n,e){var t,o;if(!(!n||!je[n]))try{for(var r=xn(je[n]||[]),i=r.next();!i.done;i=r.next()){var c=i.value;try{c(e)}catch(a){(0,N.c)()&&J.error(`Error while triggering instrumentation handler.
Type: `+n+`
Name: `+Pn(c)+`
Error:`,a)}}}catch(a){t={error:a}}finally{try{i&&!i.done&&(o=r.return)&&o.call(r)}finally{if(t)throw t.error}}}function Lh(){"console"in nn&&Gc.forEach(function(n){n in nn.console&&fn(nn.console,n,function(e){return function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];yn("console",{args:t,level:n}),e&&e.apply(nn.console,t)}})})}function Nh(){Ih()&&fn(nn,"fetch",function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o={args:e,fetchData:{method:Jh(e),url:Uh(e)},startTimestamp:Date.now()};return yn("fetch",un({},o)),n.apply(nn,e).then(function(r){return yn("fetch",un(un({},o),{endTimestamp:Date.now(),response:r})),r},function(r){throw yn("fetch",un(un({},o),{endTimestamp:Date.now(),error:r})),r})}})}function Jh(n){return n===void 0&&(n=[]),"Request"in nn&&On(n[0],Request)&&n[0].method?String(n[0].method).toUpperCase():n[1]&&n[1].method?String(n[1].method).toUpperCase():"GET"}function Uh(n){return n===void 0&&(n=[]),typeof n[0]=="string"?n[0]:"Request"in nn&&On(n[0],Request)?n[0].url:String(n[0])}function qh(){if("XMLHttpRequest"in nn){var n=XMLHttpRequest.prototype;fn(n,"open",function(e){return function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var r=this,i=t[1],c=r.__sentry_xhr__={method:le(t[0])?t[0].toUpperCase():t[0],url:t[1]};le(i)&&c.method==="POST"&&i.match(/sentry_key/)&&(r.__sentry_own_request__=!0);var a=function(){if(r.readyState===4){try{c.status_code=r.status}catch{}yn("xhr",{args:t,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:r})}};return"onreadystatechange"in r&&typeof r.onreadystatechange=="function"?fn(r,"onreadystatechange",function(s){return function(){for(var l=[],f=0;f<arguments.length;f++)l[f]=arguments[f];return a(),s.apply(r,l)}}):r.addEventListener("readystatechange",a),e.apply(r,t)}}),fn(n,"send",function(e){return function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return this.__sentry_xhr__&&t[0]!==void 0&&(this.__sentry_xhr__.body=t[0]),yn("xhr",{args:t,startTimestamp:Date.now(),xhr:this}),e.apply(this,t)}})}}var Ft;function Hh(){if(!jh())return;var n=nn.onpopstate;nn.onpopstate=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var r=nn.location.href,i=Ft;if(Ft=r,yn("history",{from:i,to:r}),n)try{return n.apply(this,t)}catch{}};function e(t){return function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];var i=o.length>2?o[2]:void 0;if(i){var c=Ft,a=String(i);Ft=a,yn("history",{from:c,to:a})}return t.apply(this,o)}}fn(nn.history,"pushState",e),fn(nn.history,"replaceState",e)}var zh=1e3,Ct,wt;function Wh(n,e){if(!n||n.type!==e.type)return!0;try{if(n.target!==e.target)return!0}catch{}return!1}function Gh(n){if(n.type!=="keypress")return!1;try{var e=n.target;if(!e||!e.tagName)return!0;if(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)return!1}catch{}return!0}function oa(n,e){return e===void 0&&(e=!1),function(t){if(!(!t||wt===t)&&!Gh(t)){var o=t.type==="keypress"?"input":t.type;Ct===void 0?(n({event:t,name:o,global:e}),wt=t):Wh(wt,t)&&(n({event:t,name:o,global:e}),wt=t),clearTimeout(Ct),Ct=nn.setTimeout(function(){Ct=void 0},zh)}}}function $h(){if("document"in nn){var n=yn.bind(null,"dom"),e=oa(n,!0);nn.document.addEventListener("click",e,!1),nn.document.addEventListener("keypress",e,!1),["EventTarget","Node"].forEach(function(t){var o=nn[t]&&nn[t].prototype;!o||!o.hasOwnProperty||!o.hasOwnProperty("addEventListener")||(fn(o,"addEventListener",function(r){return function(i,c,a){if(i==="click"||i=="keypress")try{var s=this,l=s.__sentry_instrumentation_handlers__=s.__sentry_instrumentation_handlers__||{},f=l[i]=l[i]||{refCount:0};if(!f.handler){var A=oa(n);f.handler=A,r.call(this,i,A,a)}f.refCount+=1}catch{}return r.call(this,i,c,a)}}),fn(o,"removeEventListener",function(r){return function(i,c,a){if(i==="click"||i=="keypress")try{var s=this,l=s.__sentry_instrumentation_handlers__||{},f=l[i];f&&(f.refCount-=1,f.refCount<=0&&(r.call(this,i,f.handler,a),f.handler=void 0,delete l[i]),Object.keys(l).length===0&&delete s.__sentry_instrumentation_handlers__)}catch{}return r.call(this,i,c,a)}}))})}}var nr=null;function Kh(){nr=nn.onerror,nn.onerror=function(n,e,t,o,r){return yn("error",{column:o,error:r,line:t,msg:n,url:e}),nr?nr.apply(this,arguments):!1}}var er=null;function Yh(){er=nn.onunhandledrejection,nn.onunhandledrejection=function(n){return yn("unhandledrejection",n),er?er.apply(this,arguments):!0}}function Vh(){var n=typeof WeakSet=="function",e=n?new WeakSet:[];function t(r){if(n)return e.has(r)?!0:(e.add(r),!1);for(var i=0;i<e.length;i++){var c=e[i];if(c===r)return!0}return e.push(r),!1}function o(r){if(n)e.delete(r);else for(var i=0;i<e.length;i++)if(e[i]===r){e.splice(i,1);break}}return[t,o]}function kn(n,e,t){e===void 0&&(e=1/0),t===void 0&&(t=1/0);try{return ia("",n,e,t)}catch{return"**non-serializable**"}}function ra(n,e,t){e===void 0&&(e=3),t===void 0&&(t=100*1024);var o=kn(n,e);return Qh(o)>t?ra(n,e-1,t):o}function ia(n,e,t,o,r){t===void 0&&(t=1/0),o===void 0&&(o=1/0),r===void 0&&(r=Vh());var i=Oe(r,2),c=i[0],a=i[1];if(t===0)return Xh(e);if(e!=null&&typeof e.toJSON=="function")return e.toJSON();var s=ca(e,n);if(Te(s))return s;var l=Hc(e),f=Array.isArray(e)?[]:{};if(c(e))return"[Circular ~]";var A=0;for(var u in l)if(Object.prototype.hasOwnProperty.call(l,u)){if(A>=o){f[u]="[MaxProperties ~]";break}A+=1;var g=l[u];f[u]=ia(u,g,t-1,o,r)}return a(e),f}function Xh(n){if(typeof n=="string")return n;var e=Object.prototype.toString.call(n);if(e==="[object Object]")return"[Object]";if(e==="[object Array]")return"[Array]";var t=ca(n);return Te(t)?t:e}function ca(n,e){return e==="domain"&&n&&typeof n=="object"&&n._events?"[Domain]":e==="domainEmitter"?"[DomainEmitter]":typeof global!="undefined"&&n===global?"[Global]":typeof window!="undefined"&&n===window?"[Window]":typeof document!="undefined"&&n===document?"[Document]":Ah(n)?"[SyntheticEvent]":typeof n=="number"&&n!==n?"[NaN]":n===void 0?"[undefined]":typeof n=="function"?"[Function: "+Pn(n)+"]":typeof n=="symbol"?"["+String(n)+"]":typeof n=="bigint"?"[BigInt: "+String(n)+"]":n}function Zh(n){return~-encodeURI(n).split(/%..|./).length}function Qh(n){return Zh(JSON.stringify(n))}var de="?",n_=10,e_=20,t_=30,o_=40,r_=50;function Me(n,e,t,o){var r={filename:n,function:e,in_app:!0};return t!==void 0&&(r.lineno=t),o!==void 0&&(r.colno=o),r}var i_=/^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,c_=/\((\S*)(?::(\d+))(?::(\d+))\)/,a_=function(n){var e=i_.exec(n);if(e){var t=e[2]&&e[2].indexOf("eval")===0;if(t){var o=c_.exec(e[2]);o&&(e[2]=o[1],e[3]=o[2],e[4]=o[3])}var r=ce(aa(e[1]||de,e[2]),2),i=r[0],c=r[1];return Me(c,i,e[3]?+e[3]:void 0,e[4]?+e[4]:void 0)}},l_=[t_,a_],s_=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,f_=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,A_=function(n){var e,t=s_.exec(n);if(t){var o=t[3]&&t[3].indexOf(" > eval")>-1;if(o){var r=f_.exec(t[3]);r&&(t[1]=t[1]||"eval",t[3]=r[1],t[4]=r[2],t[5]="")}var i=t[3],c=t[1]||de;return e=ce(aa(c,i),2),c=e[0],i=e[1],Me(i,c,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}},u_=[r_,A_],E_=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,d_=function(n){var e=E_.exec(n);return e?Me(e[2],e[1]||de,+e[3],e[4]?+e[4]:void 0):void 0},g_=[o_,d_],p_=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,b_=function(n){var e=p_.exec(n);return e?Me(e[2],e[3]||de,+e[1]):void 0},h_=[n_,b_],__=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,m_=function(n){var e=__.exec(n);return e?Me(e[5],e[3]||e[4]||de,+e[1],+e[2]):void 0},y_=[e_,m_],aa=function(n,e){var t=n.indexOf("safari-extension")!==-1,o=n.indexOf("safari-web-extension")!==-1;return t||o?[n.indexOf("@")!==-1?n.split("@")[0]:de,t?"safari-extension:"+e:"safari-web-extension:"+e]:[n,e]};function la(n){var e=or(n),t={type:n&&n.name,value:C_(n)};return e.length&&(t.stacktrace={frames:e}),t.type===void 0&&t.value===""&&(t.value="Unrecoverable error caught"),t}function B_(n,e,t){var o={exception:{values:[{type:Io(n)?n.constructor.name:t?"UnhandledRejection":"Error",value:"Non-Error "+(t?"promise rejection":"exception")+" captured with keys: "+gh(n)}]},extra:{__serialized__:ra(n)}};if(e){var r=or(e);r.length&&(o.stacktrace={frames:r})}return o}function tr(n){return{exception:{values:[la(n)]}}}function or(n){var e=n.stacktrace||n.stack||"",t=F_(n);try{return Ph(h_,y_,l_,g_,u_)(e,t)}catch{}return[]}var v_=/Minified React error #\d+;/i;function F_(n){if(n){if(typeof n.framesToPop=="number")return n.framesToPop;if(v_.test(n.message))return 1}return 0}function C_(n){var e=n&&n.message;return e?e.error&&typeof e.error.message=="string"?e.error.message:e:"No error message"}function w_(n,e,t){var o=e&&e.syntheticException||void 0,r=rr(n,o,t);return Ie(r),r.level=wn.Error,e&&e.event_id&&(r.event_id=e.event_id),Ee(r)}function k_(n,e,t,o){e===void 0&&(e=wn.Info);var r=t&&t.syntheticException||void 0,i=ir(n,r,o);return i.level=e,t&&t.event_id&&(i.event_id=t.event_id),Ee(i)}function rr(n,e,t,o){var r;if(Lc(n)&&n.error){var i=n;return tr(i.error)}if(Nc(n)||sh(n)){var c=n;if("stack"in n)r=tr(n);else{var a=c.name||(Nc(c)?"DOMError":"DOMException"),s=c.message?a+": "+c.message:a;r=ir(s,e,t),Wo(r,s)}return"code"in c&&(r.tags=Z(Z({},r.tags),{"DOMException.code":""+c.code})),r}if(Mc(n))return tr(n);if(se(n)||Io(n)){var l=n;return r=B_(l,e,o),Ie(r,{synthetic:!0}),r}return r=ir(n,e,t),Wo(r,""+n,void 0),Ie(r,{synthetic:!0}),r}function ir(n,e,t){var o={message:n};if(t&&e){var r=or(e);r.length&&(o.stacktrace={frames:r})}return o}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var cr=function(n,e){return cr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])},cr(n,e)};function av(n,e){cr(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var sa=function(){return sa=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},sa.apply(this,arguments)};function lv(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]]);return t}function sv(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(c=n[a])&&(i=(r<3?c(i):r>3?c(e,t,i):c(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i}function fv(n,e){return function(t,o){e(t,o,n)}}function Av(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function uv(n,e,t,o){function r(i){return i instanceof t?i:new t(function(c){c(i)})}return new(t||(t=Promise))(function(i,c){function a(f){try{l(o.next(f))}catch(A){c(A)}}function s(f){try{l(o.throw(f))}catch(A){c(A)}}function l(f){f.done?i(f.value):r(f.value).then(a,s)}l((o=o.apply(n,e||[])).next())})}function Ev(n,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(l){return function(f){return s([l,f])}}function s(l){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(f){l=[6,f],r=0}finally{o=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function dv(n,e,t,o){o===void 0&&(o=t),n[o]=e[t]}function gv(n,e){for(var t in n)t!=="default"&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function fa(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],o=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&o>=n.length&&(n=void 0),{value:n&&n[o++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function S_(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var o=t.call(n),r,i=[],c;try{for(;(e===void 0||e-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(a){c={error:a}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(c)throw c.error}}return i}function x_(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(S_(arguments[e]));return n}function pv(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var o=Array(n),r=0,e=0;e<t;e++)for(var i=arguments[e],c=0,a=i.length;c<a;c++,r++)o[r]=i[c];return o}function kt(n){return this instanceof kt?(this.v=n,this):new kt(n)}function bv(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(n,e||[]),r,i=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(u){o[u]&&(r[u]=function(g){return new Promise(function(p,R){i.push([u,g,p,R])>1||a(u,g)})})}function a(u,g){try{s(o[u](g))}catch(p){A(i[0][3],p)}}function s(u){u.value instanceof kt?Promise.resolve(u.value.v).then(l,f):A(i[0][2],u)}function l(u){a("next",u)}function f(u){a("throw",u)}function A(u,g){u(g),i.shift(),i.length&&a(i[0][0],i[0][1])}}function hv(n){var e,t;return e={},o("next"),o("throw",function(r){throw r}),o("return"),e[Symbol.iterator]=function(){return this},e;function o(r,i){e[r]=n[r]?function(c){return(t=!t)?{value:kt(n[r](c)),done:r==="return"}:i?i(c):c}:i}}function _v(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof fa=="function"?fa(n):n[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=n[i]&&function(c){return new Promise(function(a,s){c=n[i](c),r(a,s,c.done,c.value)})}}function r(i,c,a,s){Promise.resolve(s).then(function(l){i({value:l,done:a})},c)}}function mv(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}function yv(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}function Bv(n){return n&&n.__esModule?n:{default:n}}function vv(n,e){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}function Fv(n,e,t){if(!e.has(n))throw new TypeError("attempted to set private field on non-instance");return e.set(n,t),t}function gn(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var o=An();if(o&&o[n])return o[n].apply(o,x_(e));throw new Error("No hub defined or "+n+" was not found on the hub, please open a bug report.")}function Aa(n,e){var t=new Error("Sentry syntheticException");return gn("captureException",n,{captureContext:e,originalException:n,syntheticException:t})}function Cv(n,e){var t=new Error(n),o=typeof e=="string"?e:void 0,r=typeof e!="string"?{captureContext:e}:void 0;return gn("captureMessage",n,o,__assign({originalException:n,syntheticException:t},r))}function wv(n){return gn("captureEvent",n)}function kv(n){gn("configureScope",n)}function Sv(n){gn("addBreadcrumb",n)}function xv(n,e){gn("setContext",n,e)}function Ov(n){gn("setExtras",n)}function Tv(n){gn("setTags",n)}function Pv(n,e){gn("setExtra",n,e)}function Rv(n,e){gn("setTag",n,e)}function Iv(n){gn("setUser",n)}function O_(n){gn("withScope",n)}function Dv(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];gn.apply(void 0,__spread(["_invokeClient",n],e))}function jv(n,e){return gn("startTransaction",__assign({},n),e)}var T_=Object.setPrototypeOf||({__proto__:[]}instanceof Array?P_:R_);function P_(n,e){return n.__proto__=e,n}function R_(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(n,t)||(n[t]=e[t]);return n}var on=function(n){lh(e,n);function e(t){var o=this.constructor,r=n.call(this,t)||this;return r.message=t,r.name=o.prototype.constructor.name,T_(r,o.prototype),r}return e}(Error),I_=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;function D_(n){return n==="http"||n==="https"}function Le(n,e){e===void 0&&(e=!1);var t=n.host,o=n.path,r=n.pass,i=n.port,c=n.projectId,a=n.protocol,s=n.publicKey;return a+"://"+s+(e&&r?":"+r:"")+("@"+t+(i?":"+i:"")+"/"+(o&&o+"/")+c)}function j_(n){var e=I_.exec(n);if(!e)throw new on("Invalid Sentry Dsn: "+n);var t=Oe(e.slice(1),6),o=t[0],r=t[1],i=t[2],c=i===void 0?"":i,a=t[3],s=t[4],l=s===void 0?"":s,f=t[5],A="",u=f,g=u.split("/");if(g.length>1&&(A=g.slice(0,-1).join("/"),u=g.pop()),u){var p=u.match(/^\d+/);p&&(u=p[0])}return ua({host:a,pass:c,path:A,projectId:u,port:l,protocol:o,publicKey:r})}function ua(n){return"user"in n&&!("publicKey"in n)&&(n.publicKey=n.user),{user:n.publicKey||"",protocol:n.protocol,publicKey:n.publicKey||"",pass:n.pass||"",host:n.host,port:n.port||"",path:n.path||"",projectId:n.projectId}}function M_(n){if((0,N.c)()){var e=n.port,t=n.projectId,o=n.protocol,r=["protocol","publicKey","host","projectId"];if(r.forEach(function(i){if(!n[i])throw new on("Invalid Sentry Dsn: "+i+" missing")}),!t.match(/^\d+$/))throw new on("Invalid Sentry Dsn: Invalid projectId "+t);if(!D_(o))throw new on("Invalid Sentry Dsn: Invalid protocol "+o);if(e&&isNaN(parseInt(e,10)))throw new on("Invalid Sentry Dsn: Invalid port "+e);return!0}}function St(n){var e=typeof n=="string"?j_(n):ua(n);return M_(e),e}var Ea="7",Mv=function(){function n(e,t,o){t===void 0&&(t={}),this.dsn=e,this._dsnObject=St(e),this.metadata=t,this._tunnel=o}return n.prototype.getDsn=function(){return this._dsnObject},n.prototype.forceEnvelope=function(){return!!this._tunnel},n.prototype.getBaseApiEndpoint=function(){return lr(this._dsnObject)},n.prototype.getStoreEndpoint=function(){return pa(this._dsnObject)},n.prototype.getStoreEndpointWithUrlEncodedAuth=function(){return sr(this._dsnObject)},n.prototype.getEnvelopeEndpointWithUrlEncodedAuth=function(){return xt(this._dsnObject,this._tunnel)},n}();function ar(n,e,t){return{initDsn:n,metadata:e||{},dsn:St(n),tunnel:t}}function lr(n){var e=n.protocol?n.protocol+":":"",t=n.port?":"+n.port:"";return e+"//"+n.host+t+(n.path?"/"+n.path:"")+"/api/"}function da(n,e){return""+lr(n)+n.projectId+"/"+e+"/"}function ga(n){return dh({sentry_key:n.publicKey,sentry_version:Ea})}function pa(n){return da(n,"store")}function sr(n){return pa(n)+"?"+ga(n)}function L_(n){return da(n,"envelope")}function xt(n,e){return e||L_(n)+"?"+ga(n)}function Lv(n,e,t){var o=["Sentry sentry_version="+Ea];return o.push("sentry_client="+e+"/"+t),o.push("sentry_key="+n.publicKey),n.pass&&o.push("sentry_secret="+n.pass),{"Content-Type":"application/json","X-Sentry-Auth":o.join(", ")}}function N_(n,e){var t=St(n),o=lr(t)+"embed/error-page/",r="dsn="+Le(t);for(var i in e)if(i!=="dsn")if(i==="user"){if(!e.user)continue;e.user.name&&(r+="&name="+encodeURIComponent(e.user.name)),e.user.email&&(r+="&email="+encodeURIComponent(e.user.email))}else r+="&"+encodeURIComponent(i)+"="+encodeURIComponent(e[i]);return o+"?"+r}var Ot=(0,tn.R)(),fr=0;function ba(){return fr>0}function J_(){fr+=1,setTimeout(function(){fr-=1})}function ge(n,e,t){if(e===void 0&&(e={}),typeof n!="function")return n;try{var o=n.__sentry_wrapped__;if(o)return o;if(Mo(n))return n}catch{return n}var r=function(){var a=Array.prototype.slice.call(arguments);try{t&&typeof t=="function"&&t.apply(this,arguments);var s=a.map(function(l){return ge(l,e)});return n.apply(this,s)}catch(l){throw J_(),O_(function(f){f.addEventProcessor(function(A){return e.mechanism&&(Wo(A,void 0,void 0),Ie(A,e.mechanism)),A.extra=Z(Z({},A.extra),{arguments:a}),A}),Aa(l)}),l}};try{for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])}catch{}qc(r,n),bt(n,"__sentry_wrapped__",r);try{var c=Object.getOwnPropertyDescriptor(r,"name");c.configurable&&Object.defineProperty(r,"name",{get:function(){return n.name}})}catch{}return r}function U_(n){if(n===void 0&&(n={}),!!Ot.document){if(!n.eventId){(0,N.c)()&&J.error("Missing eventId option in showReportDialog call");return}if(!n.dsn){(0,N.c)()&&J.error("Missing dsn option in showReportDialog call");return}var e=Ot.document.createElement("script");e.async=!0,e.src=N_(n.dsn,n),n.onLoad&&(e.onload=n.onLoad);var t=Ot.document.head||Ot.document.body;t&&t.appendChild(e)}}var Tt=function(){function n(e){this.name=n.id,this._installFunc={onerror:q_,onunhandledrejection:H_},this._options=Z({onerror:!0,onunhandledrejection:!0},e)}return n.prototype.setupOnce=function(){Error.stackTraceLimit=50;var e=this._options;for(var t in e){var o=this._installFunc[t];o&&e[t]&&(G_(t),o(),this._installFunc[t]=void 0)}},n.id="GlobalHandlers",n}();function q_(){Rn("error",function(n){var e=ce(ma(),2),t=e[0],o=e[1];if(t.getIntegration(Tt)){var r=n.msg,i=n.url,c=n.line,a=n.column,s=n.error;if(!(ba()||s&&s.__sentry_own_request__)){var l=s===void 0&&le(r)?W_(r,i,c,a):ha(rr(s||r,void 0,o,!1),i,c,a);l.level=wn.Error,_a(t,s,l,"onerror")}}})}function H_(){Rn("unhandledrejection",function(n){var e=ce(ma(),2),t=e[0],o=e[1];if(t.getIntegration(Tt)){var r=n;try{"reason"in n?r=n.reason:"detail"in n&&"reason"in n.detail&&(r=n.detail.reason)}catch{}if(ba()||r&&r.__sentry_own_request__)return!0;var i=Te(r)?z_(r):rr(r,void 0,o,!0);i.level=wn.Error,_a(t,r,i,"onunhandledrejection")}})}function z_(n){return{exception:{values:[{type:"UnhandledRejection",value:"Non-Error promise rejection captured with value: "+String(n)}]}}}function W_(n,e,t,o){var r=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,i=Lc(n)?n.message:n,c="Error",a=i.match(r);a&&(c=a[1],i=a[2]);var s={exception:{values:[{type:c,value:i}]}};return ha(s,e,t,o)}function ha(n,e,t,o){var r=n.exception=n.exception||{},i=r.values=r.values||[],c=i[0]=i[0]||{},a=c.stacktrace=c.stacktrace||{},s=a.frames=a.frames||[],l=isNaN(parseInt(o,10))?void 0:o,f=isNaN(parseInt(t,10))?void 0:t,A=le(e)&&e.length>0?e:Eh();return s.length===0&&s.push({colno:l,filename:A,function:"?",in_app:!0,lineno:f}),n}function G_(n){(0,N.c)()&&J.log("Global Handler attached: "+n)}function _a(n,e,t,o){Ie(t,{handled:!1,type:o}),n.captureEvent(t,{originalException:e})}function ma(){var n=An(),e=n.getClient(),t=e&&e.getOptions().attachStacktrace;return[n,t]}var $_=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],ya=function(){function n(e){this.name=n.id,this._options=Z({XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0},e)}return n.prototype.setupOnce=function(){var e=(0,tn.R)();this._options.setTimeout&&fn(e,"setTimeout",Ba),this._options.setInterval&&fn(e,"setInterval",Ba),this._options.requestAnimationFrame&&fn(e,"requestAnimationFrame",K_),this._options.XMLHttpRequest&&"XMLHttpRequest"in e&&fn(XMLHttpRequest.prototype,"send",Y_);var t=this._options.eventTarget;if(t){var o=Array.isArray(t)?t:$_;o.forEach(V_)}},n.id="TryCatch",n}();function Ba(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=e[0];return e[0]=ge(o,{mechanism:{data:{function:Pn(n)},handled:!0,type:"instrument"}}),n.apply(this,e)}}function K_(n){return function(e){return n.apply(this,[ge(e,{mechanism:{data:{function:"requestAnimationFrame",handler:Pn(n)},handled:!0,type:"instrument"}})])}}function Y_(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=this,r=["onload","onerror","onprogress","onreadystatechange"];return r.forEach(function(i){i in o&&typeof o[i]=="function"&&fn(o,i,function(c){var a={mechanism:{data:{function:i,handler:Pn(c)},handled:!0,type:"instrument"}},s=Mo(c);return s&&(a.mechanism.data.handler=Pn(s)),ge(c,a)})}),n.apply(this,e)}}function V_(n){var e=(0,tn.R)(),t=e[n]&&e[n].prototype;!t||!t.hasOwnProperty||!t.hasOwnProperty("addEventListener")||(fn(t,"addEventListener",function(o){return function(r,i,c){try{typeof i.handleEvent=="function"&&(i.handleEvent=ge(i.handleEvent.bind(i),{mechanism:{data:{function:"handleEvent",handler:Pn(i),target:n},handled:!0,type:"instrument"}}))}catch{}return o.apply(this,[r,ge(i,{mechanism:{data:{function:"addEventListener",handler:Pn(i),target:n},handled:!0,type:"instrument"}}),c])}}),fn(t,"removeEventListener",function(o){return function(r,i,c){var a=i;try{var s=a&&a.__sentry_wrapped__;s&&o.call(this,r,s,c)}catch{}return o.call(this,r,a,c)}}))}var X_=["fatal","error","warning","log","info","debug","critical"];function Z_(n){return X_.indexOf(n)!==-1}function Q_(n){return n==="warn"?wn.Warning:Z_(n)?n:wn.Log}var Ar=function(){function n(e){this.name=n.id,this._options=Z({console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0},e)}return n.prototype.addSentryBreadcrumb=function(e){this._options.sentry&&An().addBreadcrumb({category:"sentry."+(e.type==="transaction"?"transaction":"event"),event_id:e.event_id,level:e.level,message:Un(e)},{event:e})},n.prototype.setupOnce=function(){this._options.console&&Rn("console",em),this._options.dom&&Rn("dom",nm(this._options.dom)),this._options.xhr&&Rn("xhr",tm),this._options.fetch&&Rn("fetch",om),this._options.history&&Rn("history",rm)},n.id="Breadcrumbs",n}();function nm(n){function e(t){var o,r=typeof n=="object"?n.serializeAttribute:void 0;typeof r=="string"&&(r=[r]);try{o=t.event.target?pt(t.event.target,r):pt(t.event,r)}catch{o="<unknown>"}o.length!==0&&An().addBreadcrumb({category:"ui."+t.name,message:o},{event:t.event,name:t.name,global:t.global})}return e}function em(n){var e={category:"console",data:{arguments:n.args,logger:"console"},level:Q_(n.level),message:Uc(n.args," ")};if(n.level==="assert")if(n.args[0]===!1)e.message="Assertion failed: "+(Uc(n.args.slice(1)," ")||"console.assert"),e.data.arguments=n.args.slice(1);else return;An().addBreadcrumb(e,{input:n.args,level:n.level})}function tm(n){if(n.endTimestamp){if(n.xhr.__sentry_own_request__)return;var e=n.xhr.__sentry_xhr__||{},t=e.method,o=e.url,r=e.status_code,i=e.body;An().addBreadcrumb({category:"xhr",data:{method:t,url:o,status_code:r},type:"http"},{xhr:n.xhr,input:i});return}}function om(n){n.endTimestamp&&(n.fetchData.url.match(/sentry_key/)&&n.fetchData.method==="POST"||(n.error?An().addBreadcrumb({category:"fetch",data:n.fetchData,level:wn.Error,type:"http"},{data:n.error,input:n.args}):An().addBreadcrumb({category:"fetch",data:Z(Z({},n.fetchData),{status_code:n.response.status}),type:"http"},{input:n.args,response:n.response})))}function rm(n){var e=(0,tn.R)(),t=n.from,o=n.to,r=zo(e.location.href),i=zo(t),c=zo(o);i.path||(i=r),r.protocol===c.protocol&&r.host===c.host&&(o=c.relative),r.protocol===i.protocol&&r.host===i.host&&(t=i.relative),An().addBreadcrumb({category:"navigation",data:{from:t,to:o}})}var im="cause",cm=5,va=function(){function n(e){e===void 0&&(e={}),this.name=n.id,this._key=e.key||im,this._limit=e.limit||cm}return n.prototype.setupOnce=function(){Ko(function(e,t){var o=An().getIntegration(n);return o?am(o._key,o._limit,e,t):e})},n.id="LinkedErrors",n}();function am(n,e,t,o){if(!t.exception||!t.exception.values||!o||!On(o.originalException,Error))return t;var r=Fa(e,o.originalException,n);return t.exception.values=Dc(r,t.exception.values),t}function Fa(n,e,t,o){if(o===void 0&&(o=[]),!On(e[t],Error)||o.length+1>=n)return o;var r=la(e[t]);return Fa(n,e[t],t,Dc([r],o))}var Hn=(0,tn.R)(),Ca=function(){function n(){this.name=n.id}return n.prototype.setupOnce=function(){Ko(function(e){if(An().getIntegration(n)){if(!Hn.navigator&&!Hn.location&&!Hn.document)return e;var t=e.request&&e.request.url||Hn.location&&Hn.location.href,o=(Hn.document||{}).referrer,r=(Hn.navigator||{}).userAgent,i=Z(Z(Z({},e.request&&e.request.headers),o&&{Referer:o}),r&&{"User-Agent":r}),c=Z(Z({},t&&{url:t}),{headers:i});return Z(Z({},e),{request:c})}return e})},n.id="UserAgent",n}(),wa=function(){function n(){this.name=n.id}return n.prototype.setupOnce=function(e,t){e(function(o){var r=t().getIntegration(n);if(r){try{if(lm(o,r._previousEvent))return(0,N.c)()&&J.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{return r._previousEvent=o}return r._previousEvent=o}return o})},n.id="Dedupe",n}();function lm(n,e){return e?!!(sm(n,e)||fm(n,e)):!1}function sm(n,e){var t=n.message,o=e.message;return!(!t&&!o||t&&!o||!t&&o||t!==o||!Sa(n,e)||!ka(n,e))}function fm(n,e){var t=xa(e),o=xa(n);return!(!t||!o||t.type!==o.type||t.value!==o.value||!Sa(n,e)||!ka(n,e))}function ka(n,e){var t=Oa(n),o=Oa(e);if(!t&&!o)return!0;if(t&&!o||!t&&o||(t=t,o=o,o.length!==t.length))return!1;for(var r=0;r<o.length;r++){var i=o[r],c=t[r];if(i.filename!==c.filename||i.lineno!==c.lineno||i.colno!==c.colno||i.function!==c.function)return!1}return!0}function Sa(n,e){var t=n.fingerprint,o=e.fingerprint;if(!t&&!o)return!0;if(t&&!o||!t&&o)return!1;t=t,o=o;try{return t.join("")===o.join("")}catch{return!1}}function xa(n){return n.exception&&n.exception.values&&n.exception.values[0]}function Oa(n){var e=n.exception;if(e)try{return e.values[0].stacktrace.frames}catch{return}else if(n.stacktrace)return n.stacktrace.frames}var Ta={},ur=(0,tn.R)();ur.Sentry&&ur.Sentry.Integrations&&(Ta=ur.Sentry.Integrations);var Am=Z(Z(Z({},Ta),_),d);const Er="sentry-ipc";var Ne;(function(n){n.PING="sentry-electron.ping",n.EVENT="sentry-electron.event",n.SCOPE="sentry-electron.scope"})(Ne||(Ne={}));var Nv=M(4845);function um(n){for(const e of n.spans||[])delete e.spanRecorder,delete e.transaction}function Jv(n,e){um(e);const t=deepMerge(n,e);return(e.spans||n.spans)&&(t.spans=e.spans||n.spans),Object.assign(Object.assign({},t),{sdk:Object.assign(Object.assign({},n.sdk),e.sdk)})}var Pa;(function(n){n[n.Classic=1]="Classic",n[n.Protocol=2]="Protocol",n[n.Both=3]="Both"})(Pa||(Pa={}));function Em(n){const e=typeof window!="undefined"?"renderer":"main";if(e!==n)throw new Error(`This code is intended to run in the Electron ${n} process but is currently running in the ${e} process.
This can occur if a bundler picks the wrong entry point.

You can work around this by using a relative import:
import * as Sentry from '@sentry/electron/${e}';`)}function dm(){return window.__SENTRY_IPC__?window.__SENTRY_IPC__:(J.log("IPC was not configured in preload script, falling back to custom protocol and fetch"),fetch(`${Er}://${Ne.PING}`).catch(()=>console.error(`Sentry SDK failed to establish connection with the Electron main process.
 - Ensure you have initialized the SDK in the main process
 - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
 - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`)),{sendScope:n=>{fetch(`${Er}://${Ne.SCOPE}/sentry_key`,{method:"POST",body:n}).catch(()=>{})},sendEvent:n=>{fetch(`${Er}://${Ne.EVENT}/sentry_key`,{method:"POST",body:n}).catch(()=>{})}})}let dr;function Ra(){return dr||(dr=dm()),dr}class Je{constructor(){this.name=Je.id}setupOnce(){this._setupScopeListener()}_setupScopeListener(){const e=An().getScope();if(e){const t=Ra();e.addScopeListener(o=>{t.sendScope(JSON.stringify(kn(o,20,2e3))),e.clearBreadcrumbs()})}}}Je.id="ScopeToMain";class Ue{constructor(){this.name=Ue.id}setupOnce(e){const t=Ra();e(o=>(o.breadcrumbs=o.breadcrumbs||[],delete o.environment,t.sendEvent(JSON.stringify(kn(o,20,2e3))),null))}}Ue.id="EventToMain";function gm(n,e){e.debug===!0&&((0,N.c)()?J.enable():console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));var t=An(),o=t.getScope();o&&o.update(e.initialScope);var r=new n(e);t.bindClient(r)}var Ia="6.19.2",Da=[];function ja(n){return n.reduce(function(e,t){return e.every(function(o){return t.name!==o.name})&&e.push(t),e},[])}function pm(n){var e=n.defaultIntegrations&&Cn(n.defaultIntegrations)||[],t=n.integrations,o=Cn(ja(e));Array.isArray(t)?o=Cn(o.filter(function(c){return t.every(function(a){return a.name!==c.name})}),ja(t)):typeof t=="function"&&(o=t(o),o=Array.isArray(o)?o:[o]);var r=o.map(function(c){return c.name}),i="Debug";return r.indexOf(i)!==-1&&o.push.apply(o,Cn(o.splice(r.indexOf(i),1))),o}function bm(n){Da.indexOf(n.name)===-1&&(n.setupOnce(Ko,An),Da.push(n.name),(0,N.c)()&&J.log("Integration installed: "+n.name))}function hm(n){var e={};return pm(n).forEach(function(t){e[t.name]=t,bm(t)}),bt(e,"initialized",!0),e}var Ma="Not capturing exception because it's already been captured.",_m=function(){function n(e,t){this._integrations={},this._numProcessing=0,this._backend=new e(t),this._options=t,t.dsn&&(this._dsn=St(t.dsn))}return n.prototype.captureException=function(e,t,o){var r=this;if(Kc(e)){(0,N.c)()&&J.log(Ma);return}var i=t&&t.event_id;return this._process(this._getBackend().eventFromException(e,t).then(function(c){return r._captureEvent(c,t,o)}).then(function(c){i=c})),i},n.prototype.captureMessage=function(e,t,o,r){var i=this,c=o&&o.event_id,a=Te(e)?this._getBackend().eventFromMessage(String(e),t,o):this._getBackend().eventFromException(e,o);return this._process(a.then(function(s){return i._captureEvent(s,o,r)}).then(function(s){c=s})),c},n.prototype.captureEvent=function(e,t,o){if(t&&t.originalException&&Kc(t.originalException)){(0,N.c)()&&J.log(Ma);return}var r=t&&t.event_id;return this._process(this._captureEvent(e,t,o).then(function(i){r=i})),r},n.prototype.captureSession=function(e){if(!this._isEnabled()){(0,N.c)()&&J.warn("SDK not enabled, will not capture session.");return}typeof e.release!="string"?(0,N.c)()&&J.warn("Discarded session because of missing or non-string release"):(this._sendSession(e),e.update({init:!1}))},n.prototype.getDsn=function(){return this._dsn},n.prototype.getOptions=function(){return this._options},n.prototype.getTransport=function(){return this._getBackend().getTransport()},n.prototype.flush=function(e){var t=this;return this._isClientDoneProcessing(e).then(function(o){return t.getTransport().close(e).then(function(r){return o&&r})})},n.prototype.close=function(e){var t=this;return this.flush(e).then(function(o){return t.getOptions().enabled=!1,o})},n.prototype.setupIntegrations=function(){this._isEnabled()&&!this._integrations.initialized&&(this._integrations=hm(this._options))},n.prototype.getIntegration=function(e){try{return this._integrations[e.id]||null}catch{return(0,N.c)()&&J.warn("Cannot retrieve integration "+e.id+" from the current Client"),null}},n.prototype._updateSessionFromEvent=function(e,t){var o,r,i=!1,c=!1,a=t.exception&&t.exception.values;if(a){c=!0;try{for(var s=Jo(a),l=s.next();!l.done;l=s.next()){var f=l.value,A=f.mechanism;if(A&&A.handled===!1){i=!0;break}}}catch(p){o={error:p}}finally{try{l&&!l.done&&(r=s.return)&&r.call(s)}finally{if(o)throw o.error}}}var u=e.status==="ok",g=u&&e.errors===0||u&&i;g&&(e.update(en(en({},i&&{status:"crashed"}),{errors:e.errors||Number(c||i)})),this.captureSession(e))},n.prototype._sendSession=function(e){this._getBackend().sendSession(e)},n.prototype._isClientDoneProcessing=function(e){var t=this;return new qn(function(o){var r=0,i=1,c=setInterval(function(){t._numProcessing==0?(clearInterval(c),o(!0)):(r+=i,e&&r>=e&&(clearInterval(c),o(!1)))},i)})},n.prototype._getBackend=function(){return this._backend},n.prototype._isEnabled=function(){return this.getOptions().enabled!==!1&&this._dsn!==void 0},n.prototype._prepareEvent=function(e,t,o){var r=this,i=this.getOptions(),c=i.normalizeDepth,a=c===void 0?3:c,s=i.normalizeMaxBreadth,l=s===void 0?1e3:s,f=en(en({},e),{event_id:e.event_id||(o&&o.event_id?o.event_id:fe()),timestamp:e.timestamp||(0,ue.yW)()});this._applyClientOptions(f),this._applyIntegrationsMetadata(f);var A=t;o&&o.captureContext&&(A=Bt.clone(A).update(o.captureContext));var u=Ee(f);return A&&(u=A.applyToEvent(f,o)),u.then(function(g){return g&&(g.sdkProcessingMetadata=en(en({},g.sdkProcessingMetadata),{normalizeDepth:kn(a)})),typeof a=="number"&&a>0?r._normalizeEvent(g,a,l):g})},n.prototype._normalizeEvent=function(e,t,o){if(!e)return null;var r=en(en(en(en(en({},e),e.breadcrumbs&&{breadcrumbs:e.breadcrumbs.map(function(i){return en(en({},i),i.data&&{data:kn(i.data,t,o)})})}),e.user&&{user:kn(e.user,t,o)}),e.contexts&&{contexts:kn(e.contexts,t,o)}),e.extra&&{extra:kn(e.extra,t,o)});return e.contexts&&e.contexts.trace&&(r.contexts.trace=e.contexts.trace),e.sdkProcessingMetadata=en(en({},e.sdkProcessingMetadata),{baseClientNormalized:!0}),r},n.prototype._applyClientOptions=function(e){var t=this.getOptions(),o=t.environment,r=t.release,i=t.dist,c=t.maxValueLength,a=c===void 0?250:c;"environment"in e||(e.environment="environment"in t?o:"production"),e.release===void 0&&r!==void 0&&(e.release=r),e.dist===void 0&&i!==void 0&&(e.dist=i),e.message&&(e.message=Pe(e.message,a));var s=e.exception&&e.exception.values&&e.exception.values[0];s&&s.value&&(s.value=Pe(s.value,a));var l=e.request;l&&l.url&&(l.url=Pe(l.url,a))},n.prototype._applyIntegrationsMetadata=function(e){var t=Object.keys(this._integrations);t.length>0&&(e.sdk=e.sdk||{},e.sdk.integrations=Cn(e.sdk.integrations||[],t))},n.prototype._sendEvent=function(e){this._getBackend().sendEvent(e)},n.prototype._captureEvent=function(e,t,o){return this._processEvent(e,t,o).then(function(r){return r.event_id},function(r){(0,N.c)()&&J.error(r)})},n.prototype._processEvent=function(e,t,o){var r=this,i=this.getOptions(),c=i.beforeSend,a=i.sampleRate,s=this.getTransport();function l(A,u){s.recordLostEvent&&s.recordLostEvent(A,u)}if(!this._isEnabled())return $o(new on("SDK not enabled, will not capture event."));var f=e.type==="transaction";return!f&&typeof a=="number"&&Math.random()>a?(l("sample_rate","event"),$o(new on("Discarding event because it's not included in the random sample (sampling rate = "+a+")"))):this._prepareEvent(e,o,t).then(function(A){if(A===null)throw l("event_processor",e.type||"event"),new on("An event processor returned null, will not send event.");var u=t&&t.data&&t.data.__sentry__===!0;if(u||f||!c)return A;var g=c(A,t);return mm(g)}).then(function(A){if(A===null)throw l("before_send",e.type||"event"),new on("`beforeSend` returned `null`, will not send event.");var u=o&&o.getSession&&o.getSession();return!f&&u&&r._updateSessionFromEvent(u,A),r._sendEvent(A),A}).then(null,function(A){throw A instanceof on?A:(r.captureException(A,{data:{__sentry__:!0},originalException:A}),new on(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: `+A))})},n.prototype._process=function(e){var t=this;this._numProcessing+=1,e.then(function(o){return t._numProcessing-=1,o},function(o){return t._numProcessing-=1,o})},n}();function mm(n){var e="`beforeSend` method has to return `null` or a valid event.";if(Do(n))return n.then(function(t){if(!(se(t)||t===null))throw new on(e);return t},function(t){throw new on("beforeSend rejected with "+t)});if(!(se(n)||n===null))throw new on(e);return n}function Pt(n,e){return e===void 0&&(e=[]),[n,e]}function Uv(n,e){var t=__read(n,2),o=t[0],r=t[1];return[o,__spread(r,[e])]}function qv(n){var e=__read(n,2),t=__read(e[1],1),o=__read(t[0],1),r=o[0];return r.type}function gr(n){var e=Oe(n,2),t=e[0],o=e[1],r=JSON.stringify(t);return o.reduce(function(i,c){var a=Oe(c,2),s=a[0],l=a[1],f=Te(l)?String(l):JSON.stringify(l);return i+`
`+JSON.stringify(s)+`
`+f},r)}function pr(n){if(!(!n.metadata||!n.metadata.sdk)){var e=n.metadata.sdk,t=e.name,o=e.version;return{name:t,version:o}}}function ym(n,e){return e&&(n.sdk=n.sdk||{},n.sdk.name=n.sdk.name||e.name,n.sdk.version=n.sdk.version||e.version,n.sdk.integrations=Cn(n.sdk.integrations||[],e.integrations||[]),n.sdk.packages=Cn(n.sdk.packages||[],e.packages||[])),n}function La(n,e){var t=pr(e),o=en(en({sent_at:new Date().toISOString()},t&&{sdk:t}),!!e.tunnel&&{dsn:Le(e.dsn)}),r="aggregates"in n?"sessions":"session",i=[{type:r},n],c=Pt(o,[i]);return[c,r]}function Bm(n,e){var t=Uo(La(n,e),2),o=t[0],r=t[1];return{body:gr(o),type:r,url:xt(e.dsn,e.tunnel)}}function vm(n,e){var t=pr(e),o=n.type||"event",r=(n.sdkProcessingMetadata||{}).transactionSampling,i=r||{},c=i.method,a=i.rate,s=en(en({event_id:n.event_id,sent_at:new Date().toISOString()},t&&{sdk:t}),!!e.tunnel&&{dsn:Le(e.dsn)}),l=[{type:o,sample_rates:[{id:c,rate:a}]},n];return Pt(s,[l])}function Fm(n,e){var t=pr(e),o=n.type||"event",r=o==="transaction"||!!e.tunnel,i=(n.sdkProcessingMetadata||{}).transactionSampling,c=i||{},a=c.method,s=c.rate;ym(n,e.metadata.sdk),n.tags=n.tags||{},n.extra=n.extra||{},n.sdkProcessingMetadata&&n.sdkProcessingMetadata.baseClientNormalized||(n.tags.skippedNormalization=!0,n.extra.normalizeDepth=n.sdkProcessingMetadata?n.sdkProcessingMetadata.normalizeDepth:"unset"),delete n.sdkProcessingMetadata;var l;try{l=JSON.stringify(n)}catch(R){n.tags.JSONStringifyError=!0,n.extra.JSONStringifyError=R;try{l=JSON.stringify(kn(n))}catch(D){var f=D;l=JSON.stringify({message:"JSON.stringify error after renormalization",extra:{message:f.message,stack:f.stack}})}}var A={body:l,type:o,url:r?xt(e.dsn,e.tunnel):sr(e.dsn)};if(r){var u=en(en({event_id:n.event_id,sent_at:new Date().toISOString()},t&&{sdk:t}),!!e.tunnel&&{dsn:Le(e.dsn)}),g=[{type:o,sample_rates:[{id:a,rate:s}]},A.body],p=Pt(u,[g]);A.body=gr(p)}return A}var Cm=function(){function n(){}return n.prototype.sendEvent=function(e){return Ee({reason:"NoopTransport: Event has been skipped because no Dsn is configured.",status:"skipped"})},n.prototype.close=function(e){return Ee(!0)},n}(),wm=function(){function n(e){this._options=e,this._options.dsn||(0,N.c)()&&J.warn("No DSN provided, backend will not do anything."),this._transport=this._setupTransport()}return n.prototype.eventFromException=function(e,t){throw new on("Backend has to implement `eventFromException` method")},n.prototype.eventFromMessage=function(e,t,o){throw new on("Backend has to implement `eventFromMessage` method")},n.prototype.sendEvent=function(e){if(this._newTransport&&this._options.dsn&&this._options._experiments&&this._options._experiments.newTransport){var t=ar(this._options.dsn,this._options._metadata,this._options.tunnel),o=vm(e,t);this._newTransport.send(o).then(null,function(r){(0,N.c)()&&J.error("Error while sending event:",r)})}else this._transport.sendEvent(e).then(null,function(r){(0,N.c)()&&J.error("Error while sending event:",r)})},n.prototype.sendSession=function(e){if(!this._transport.sendSession){(0,N.c)()&&J.warn("Dropping session because custom transport doesn't implement sendSession");return}if(this._newTransport&&this._options.dsn&&this._options._experiments&&this._options._experiments.newTransport){var t=ar(this._options.dsn,this._options._metadata,this._options.tunnel),o=Uo(La(e,t),1),r=o[0];this._newTransport.send(r).then(null,function(i){(0,N.c)()&&J.error("Error while sending session:",i)})}else this._transport.sendSession(e).then(null,function(i){(0,N.c)()&&J.error("Error while sending session:",i)})},n.prototype.getTransport=function(){return this._transport},n.prototype._setupTransport=function(){return new Cm},n}();function km(n){var e=[];function t(){return n===void 0||e.length<n}function o(c){return e.splice(e.indexOf(c),1)[0]}function r(c){if(!t())return $o(new on("Not adding Promise due to buffer limit reached."));var a=c();return e.indexOf(a)===-1&&e.push(a),a.then(function(){return o(a)}).then(null,function(){return o(a).then(null,function(){})}),a}function i(c){return new qn(function(a,s){var l=e.length;if(!l)return a(!0);var f=setTimeout(function(){c&&c>0&&a(!1)},c);e.forEach(function(A){Ee(A).then(function(){--l||(clearTimeout(f),a(!0))},s)})})}return{$:e,add:r,drain:i}}function Sm(n,e,t){var o=[{type:"client_report"},{timestamp:t||(0,ue.yW)(),discarded_events:n}];return Pt(e?{dsn:e}:{},[o])}function xm(n){return n>=200&&n<300?"success":n===429?"rate_limit":n>=400&&n<500?"invalid":n>=500?"failed":"unknown"}var Om=60*1e3;function Tm(n,e){e===void 0&&(e=Date.now());var t=parseInt(""+n,10);if(!isNaN(t))return t*1e3;var o=Date.parse(""+n);return isNaN(o)?Om:o-e}function Na(n,e){return n[e]||n.all||0}function Pm(n,e,t){return t===void 0&&(t=Date.now()),Na(n,e)>t}function Rm(n,e,t){var o,r,i,c;t===void 0&&(t=Date.now());var a=un({},n),s=e["x-sentry-rate-limits"],l=e["retry-after"];if(s)try{for(var f=xn(s.trim().split(",")),A=f.next();!A.done;A=f.next()){var u=A.value,g=u.split(":",2),p=parseInt(g[0],10),R=(isNaN(p)?60:p)*1e3;if(!g[1])a.all=t+R;else try{for(var D=(i=void 0,xn(g[1].split(";"))),j=D.next();!j.done;j=D.next()){var H=j.value;a[H]=t+R}}catch(Q){i={error:Q}}finally{try{j&&!j.done&&(c=D.return)&&c.call(D)}finally{if(i)throw i.error}}}}catch(Q){o={error:Q}}finally{try{A&&!A.done&&(r=f.return)&&r.call(f)}finally{if(o)throw o.error}}else l&&(a.all=t+Tm(l,t));return a}function Im(n){n.then(null,function(e){console.error(e)})}var Bn=(0,tn.R)(),Rt;function Ja(){if(Rt)return Rt;if(Qo(Bn.fetch))return Rt=Bn.fetch.bind(Bn);var n=Bn.document,e=Bn.fetch;if(n&&typeof n.createElement=="function")try{var t=n.createElement("iframe");t.hidden=!0,n.head.appendChild(t);var o=t.contentWindow;o&&o.fetch&&(e=o.fetch),n.head.removeChild(t)}catch(r){(0,N.c)()&&J.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",r)}return Rt=e.bind(Bn)}function Dm(n,e){var t=Object.prototype.toString.call(Bn&&Bn.navigator)==="[object Navigator]",o=t&&typeof Bn.navigator.sendBeacon=="function";if(o){var r=Bn.navigator.sendBeacon.bind(Bn.navigator);return r(n,e)}if(vt()){var i=Ja();return Im(i(n,{body:e,method:"POST",credentials:"omit",keepalive:!0}))}}function br(n){var e=n;return e==="event"?"error":e}var hr=(0,tn.R)(),Ua=function(){function n(e){var t=this;this.options=e,this._buffer=km(30),this._rateLimits={},this._outcomes={},this._api=ar(e.dsn,e._metadata,e.tunnel),this.url=sr(this._api.dsn),this.options.sendClientReports&&hr.document&&hr.document.addEventListener("visibilitychange",function(){hr.document.visibilityState==="hidden"&&t._flushOutcomes()})}return n.prototype.sendEvent=function(e){return this._sendRequest(Fm(e,this._api),e)},n.prototype.sendSession=function(e){return this._sendRequest(Bm(e,this._api),e)},n.prototype.close=function(e){return this._buffer.drain(e)},n.prototype.recordLostEvent=function(e,t){var o;if(this.options.sendClientReports){var r=br(t)+":"+e;(0,N.c)()&&J.log("Adding outcome: "+r),this._outcomes[r]=(o=this._outcomes[r],(o!=null?o:0)+1)}},n.prototype._flushOutcomes=function(){if(this.options.sendClientReports){var e=this._outcomes;if(this._outcomes={},!Object.keys(e).length){(0,N.c)()&&J.log("No outcomes to flush");return}(0,N.c)()&&J.log(`Flushing outcomes:
`+JSON.stringify(e,null,2));var t=xt(this._api.dsn,this._api.tunnel),o=Object.keys(e).map(function(i){var c=ce(i.split(":"),2),a=c[0],s=c[1];return{reason:s,category:a,quantity:e[i]}}),r=Sm(o,this._api.tunnel&&Le(this._api.dsn));try{Dm(t,gr(r))}catch(i){(0,N.c)()&&J.error(i)}}},n.prototype._handleResponse=function(e){var t=e.requestType,o=e.response,r=e.headers,i=e.resolve,c=e.reject,a=xm(o.status);if(this._rateLimits=Rm(this._rateLimits,r),this._isRateLimited(t)&&(0,N.c)()&&(0,N.c)()&&J.warn("Too many "+t+" requests, backing off until: "+this._disabledUntil(t)),a==="success"){i({status:a});return}c(o)},n.prototype._disabledUntil=function(e){var t=br(e);return new Date(Na(this._rateLimits,t))},n.prototype._isRateLimited=function(e){var t=br(e);return Pm(this._rateLimits,t)},n}(),jm=function(n){Et(e,n);function e(t,o){o===void 0&&(o=Ja());var r=n.call(this,t)||this;return r._fetch=o,r}return e.prototype._sendRequest=function(t,o){var r=this;if(this._isRateLimited(t.type))return this.recordLostEvent("ratelimit_backoff",t.type),Promise.reject({event:o,type:t.type,reason:"Transport for "+t.type+" requests locked till "+this._disabledUntil(t.type)+" due to too many requests.",status:429});var i={body:t.body,method:"POST",referrerPolicy:Dh()?"origin":""};return this.options.fetchParameters!==void 0&&Object.assign(i,this.options.fetchParameters),this.options.headers!==void 0&&(i.headers=this.options.headers),this._buffer.add(function(){return new qn(function(c,a){r._fetch(t.url,i).then(function(s){var l={"x-sentry-rate-limits":s.headers.get("X-Sentry-Rate-Limits"),"retry-after":s.headers.get("Retry-After")};r._handleResponse({requestType:t.type,response:s,headers:l,resolve:c,reject:a})}).catch(a)})}).then(void 0,function(c){throw c instanceof on?r.recordLostEvent("queue_overflow",t.type):r.recordLostEvent("network_error",t.type),c})},e}(Ua),Mm=function(n){Et(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype._sendRequest=function(t,o){var r=this;return this._isRateLimited(t.type)?(this.recordLostEvent("ratelimit_backoff",t.type),Promise.reject({event:o,type:t.type,reason:"Transport for "+t.type+" requests locked till "+this._disabledUntil(t.type)+" due to too many requests.",status:429})):this._buffer.add(function(){return new qn(function(i,c){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===4){var l={"x-sentry-rate-limits":a.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":a.getResponseHeader("Retry-After")};r._handleResponse({requestType:t.type,response:a,headers:l,resolve:i,reject:c})}},a.open("POST",t.url);for(var s in r.options.headers)Object.prototype.hasOwnProperty.call(r.options.headers,s)&&a.setRequestHeader(s,r.options.headers[s]);a.send(t.body)})}).then(void 0,function(i){throw i instanceof on?r.recordLostEvent("queue_overflow",t.type):r.recordLostEvent("network_error",t.type),i})},e}(Ua),Lm=function(n){Et(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.eventFromException=function(t,o){return w_(t,o,this._options.attachStacktrace)},e.prototype.eventFromMessage=function(t,o,r){return o===void 0&&(o=wn.Info),k_(t,o,r,this._options.attachStacktrace)},e.prototype._setupTransport=function(){if(!this._options.dsn)return n.prototype._setupTransport.call(this);var t=Z(Z({},this._options.transportOptions),{dsn:this._options.dsn,tunnel:this._options.tunnel,sendClientReports:this._options.sendClientReports,_metadata:this._options._metadata});return this._options.transport?new this._options.transport(t):vt()?new jm(t):new Mm(t)},e}(wm),Nm=function(n){Et(e,n);function e(t){t===void 0&&(t={});var o=this;return t._metadata=t._metadata||{},t._metadata.sdk=t._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:"npm:@sentry/browser",version:Ia}],version:Ia},o=n.call(this,Lm,t)||this,o}return e.prototype.showReportDialog=function(t){t===void 0&&(t={});var o=(0,tn.R)().document;if(o){if(!this._isEnabled()){(0,N.c)()&&J.error("Trying to call showReportDialog with Sentry Client disabled");return}U_(Z(Z({},t),{dsn:t.dsn||this.getDsn()}))}},e.prototype._prepareEvent=function(t,o,r){return t.platform=t.platform||"javascript",n.prototype._prepareEvent.call(this,t,o,r)},e.prototype._sendEvent=function(t){var o=this.getIntegration(Ar);o&&o.addSentryBreadcrumb(t),n.prototype._sendEvent.call(this,t)},e}(_m),qa=[new Yc,new Wc,new ya,new Ar,new Tt,new va,new wa,new Ca];function Jm(n){if(n===void 0&&(n={}),n.defaultIntegrations===void 0&&(n.defaultIntegrations=qa),n.release===void 0){var e=(0,tn.R)();e.SENTRY_RELEASE&&e.SENTRY_RELEASE.id&&(n.release=e.SENTRY_RELEASE.id)}n.autoSessionTracking===void 0&&(n.autoSessionTracking=!0),n.sendClientReports===void 0&&(n.sendClientReports=!0),gm(Nm,n),n.autoSessionTracking&&Um()}function Hv(n){n===void 0&&(n={});var e=getCurrentHub(),t=e.getScope();t&&(n.user=__assign(__assign({},t.getUser()),n.user)),n.eventId||(n.eventId=e.lastEventId());var o=e.getClient();o&&o.showReportDialog(n)}function zv(){return getCurrentHub().lastEventId()}function Wv(){}function Gv(n){n()}function $v(n){var e=getCurrentHub().getClient();return e?e.flush(n):(isDebugBuild()&&logger.warn("Cannot flush events. No client defined."),resolvedSyncPromise(!1))}function Kv(n){var e=getCurrentHub().getClient();return e?e.close(n):(isDebugBuild()&&logger.warn("Cannot flush events and disable SDK. No client defined."),resolvedSyncPromise(!1))}function Yv(n){return internalWrap(n)()}function Ha(n){n.startSession({ignoreDuration:!0}),n.captureSession()}function Um(){var n=(0,tn.R)(),e=n.document;if(typeof e=="undefined"){(0,N.c)()&&J.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");return}var t=An();t.captureSession&&(Ha(t),Rn("history",function(o){var r=o.from,i=o.to;r===void 0||r===i||Ha(An())}))}const qm=[...qa,new Je,new Ue];function Hm(n={}){if(Em("renderer"),window!=null&&window.__SENTRY__RENDERER_INIT__){J.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);return}window.__SENTRY__RENDERER_INIT__=!0,n.autoSessionTracking===void 0&&(n.autoSessionTracking=!1),n.defaultIntegrations===void 0&&(n.defaultIntegrations=qm),n.dsn===void 0&&(n.dsn="https://12345@dummy.dsn/12345"),delete n.initialScope,Jm(n)}const Vv=Object.assign(Object.assign({},E),Am);function zm(){var n,e;console.log("Starting Sentry (Renderer)"),Hm({...(e=(n=window.desktop)==null?void 0:n.diagnostics)==null?void 0:e.sentryOptions}),ah(Aa)}function Wm(n){const e=useRef(n);return!shallowEqual(n,e.current)&&!isEqual(n,e.current)&&(e.current=n),e.current}function Xv(n,e){useEffect(n,[Wm(e)])}function Gm(n){return Qb(n,Qi)}var K=M(1174).h;zm();const za=n=>{var o;const e=(o=co(n))==null?void 0:o.history,t=Array.isArray(e)?e[e.length-1]:null;try{return t?Object.keys(gE(new URL(t).searchParams)):[]}catch(r){return Hi.error("getFlags: unexpected error occurred",{error:r,url:t}),[]}},_r={[bn.ITPolicy]:{},[bn.UserChoices]:{},[bn.ITDefaults]:{},[bn.SlackDefaults]:{}};ch(()=>{const{intl:n}=window.desktop,{settings:e,webContents:t}=Gm(A=>({settings:A.settings,webContents:A.webContents})),[o,r]=st(Zi(_r)),[i,c]=st(za(t)),a=()=>r(Zi(_r)),s=()=>{const A=za(t),u=ho(i,A),g=ho(A,i);if(!Qi(_r,o))for(const p of Object.values(bn))window.desktop.settingsEditor.updateSettings(o[p],p);(!nc(u)||!nc(g))&&[[u,!0],[g,!1]].forEach(([p,R])=>p.forEach(D=>window.desktop.settingsEditor.toggleFeatureFragment({feature:D,enabled:R})))},l=A=>{const{currentTarget:u}=A,g={...o};let p=u.value;(p==="undefined"||p==="")&&(p=void 0),p==="null"&&(p=null),p==="false"&&(p=!1),p==="true"&&(p=!0);const R=u.id.split("."),[D,...j]=R,H=te(e,["slackDefaults",...j]),Q=Array.isArray(H)?p.split(",").map(rn=>rn.trim()):p;eb(g,R,Q),r(g)},f=()=>{const A=at(e,o[bn.SlackDefaults],o[bn.ITDefaults],o[bn.UserChoices],o[bn.ITPolicy],o),u=(H,Q,rn,cn)=>{const _n=[H,...Q],ln=te(A,_n),mn=_n.join(".");return rn==="dropdown"?K("td",{class:cn?"highlight":""},K("select",{name:mn,id:mn,onChange:l},[void 0,null,!1,!0].map(Sn=>K("option",{selected:Sn===ln,value:String(Sn)},String(Sn))))):K("td",{class:cn?"highlight":""},K("input",{class:"layer-value",type:rn,id:mn,value:ln===void 0?"":String(ln),onInput:l}))},g=H=>{const Q=te(A,["slackDefaults",...H]),rn=te(A,H);let cn="text";typeof Q=="number"&&(cn="number"),typeof Q=="boolean"&&(cn="dropdown");const _n=H.join("."),ln=cg(e,_n);return K("tr",{class:"settings-row"},K("td",null,K("label",{class:"key",htmlFor:_n},_n)),K("td",null,K("label",{htmlFor:"computed-value",class:"computed-value"},String(rn))),...Object.values(bn).map(mn=>u(mn,H,cn,mn===ln)))},p=H=>{const Q=te(A,H);return ji(Q)?Object.keys(Q).flatMap(rn=>p(H.concat(rn))):[g(H)]},R=[],D=ho(Object.keys(A),Object.values(bn));for(const H of D){const Q=p([H]);R.push(...Q)}const j=H=>{const{currentTarget:Q}=H,rn=Q.value.split(",").map(cn=>cn.trim());c(rn)};return K("table",{id:"settings"},K("thead",null,K("tr",null,K("th",null,"Preference"),K("th",null,"Computed value"),K("th",null,"itPolicy"),K("th",null,"userChoices"),K("th",null,"itDefaults"),K("th",null,"slackDefaults"))),K("tbody",null,...R,K("tr",null,K("td",null,K("label",{htmlFor:"feature_flag"},"feature_flag")),K("td",{colSpan:5},K("input",{type:"string",id:"feature-flags",value:i,onInput:j})))))};return K("div",{className:"SettingsEditor"},K("header",null,K("button",{title:n.t("Save",ke.RENDERER)(),onClick:s},n.t("Save",ke.RENDERER)()),K("button",{title:n.t("Reset",ke.RENDERER)(),onClick:a},n.t("Reset",ke.RENDERER)())),f())})})(),sandboxedRenderer=xr})();

//# sourceMappingURL=settings-editor.bundle.js.map