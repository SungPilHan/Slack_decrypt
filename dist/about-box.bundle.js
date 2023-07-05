var sandboxedRenderer;(()=>{var sa={4743:(h,d,u)=>{"use strict";u.d(d,{Z:()=>ir});var b=u(428),S=u.n(b),v=u(1128),F=u.n(v),p=u(4322),_=u.n(p),w=u(4897),x=u(8015),U=u(3535),H=u(35),W=u(6254),J=u(3528),$=u(737),O=u(1266),G=u(4411),k=F()(S()),T=_()(w.Z),L=_()(x.Z),j=_()(U.Z),I=_()(H.Z),y=_()(W.Z),m=_()(J.Z),rn=_()($.Z),Un=_()(O.Z),Ie=_()(G.Z);k.push([h.id,`/*

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
  src: url(`+j+`) format('woff2');
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
  src: url(`+y+`) format('woff2');
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
  src: url(`+rn+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 900;
  src: url(`+Un+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
@font-face {
  font-family: 'Slack v2';
  src: url(`+Ie+`) format('woff2');
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
.AboutBox {
  background: white;
  font-family: Slack-Lato, Lucida Grande, sans-serif;
  padding: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.AboutBox-logo {
  width: 82px;
  height: 82px;
  user-select: none;
}
.AboutBox-versionContainer {
  width: 100%;
  margin-top: 16px;
  text-align: center;
}
.AboutBox-version {
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0;
  color: #2c2d30;
  text-align: center;
  user-select: none;
  pointer-events: none;
}
.AboutBox-version.long {
  font-size: 16px;
}
.AboutBox-webappVersion {
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0;
  color: #2c2d30;
  text-align: center;
  word-wrap: break-word;
}
.AboutBox-copy {
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  padding: 0px 0px 0px 5px;
  transition: all 0.1s ease-in-out;
}
.AboutBox-copy:before {
  font-size: 16px;
  line-height: 18px;
}
.AboutBox-copy:hover {
  transform: scale(1.2);
}
.AboutBox-copy:active {
  transform: scale(1.1);
}
.AboutBox-tooltipHolder {
  display: inline-block;
  position: relative;
  z-index: 1;
  font-family: 'Slack-Lato', 'appleLogo', sans-serif !important;
}
.AboutBox-tooltip {
  display: block;
  position: absolute;
  z-index: 1030;
  top: 50%;
  left: 50%;
  border-radius: 6px;
  max-width: 250px;
  padding: 8px 12px;
  transform: translate(-50%, -150%);
  text-align: left;
  opacity: 0;
  color: white;
  background-color: black;
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.3;
  pointer-events: none;
  user-select: none;
  transition: opacity 150ms ease-out;
}
.AboutBox-tooltip:after {
  top: 100%;
  left: 50%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(0, 0, 0, 0);
  border-top-color: #000000;
  border-width: 5px;
  margin-left: -5px;
}
.AboutBox .singleLineOfText {
  display: -webkit-box;
  text-overflow: visible;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.AboutBox .fadeIn {
  opacity: 0;
  transform: scaleY(0);
  animation-name: fadeInKeyframes;
  animation-duration: 250ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}
.AboutBox .fadeOut {
  opacity: 0;
  transition: all 250ms ease-in;
}
@keyframes fadeInKeyframes {
  to {
    opacity: 1;
    transform: scaleY(1);
    transform-origin: top;
  }
}
.AboutBox-dependencies {
  opacity: 0;
  transform: scaleY(0);
  position: absolute;
  left: 0px;
  bottom: 42px;
  margin-top: -20px;
  height: 192px;
  box-sizing: border-box;
  border: 1px solid rgba(151, 151, 151, 0.25);
  border-style: solid none;
  -webkit-app-region: no-drag;
}
.AboutBox-dependencies:hover,
.AboutBox-dependencies:focus,
.AboutBox-dependencies:active {
  outline: none;
}
.AboutBox-acknowledgements {
  background: #007a5a;
  color: white !important;
  padding: 8px 14px 9px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.25);
  -webkit-font-smoothing: antialiased;
  line-height: 1.2rem;
  font-weight: 900;
  font-size: 15px;
  font-family: inherit;
  text-decoration: none;
  -webkit-user-select: none;
  border: 0;
  border-radius: 0.25rem;
  -webkit-box-shadow: none;
  margin-top: 35px;
  display: inline-block;
  cursor: default;
  -webkit-app-region: no-drag;
}
.AboutBox-acknowledgements:hover,
.AboutBox-acknowledgements:focus,
.AboutBox-acknowledgements:active {
  outline: none;
}
.AboutBox-acknowledgements::after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 0.25rem;
}
.AboutBox-acknowledgements:hover::after {
  box-shadow: inset 0 -2px rgba(0, 0, 0, 0.25);
}
.AboutBox-acknowledgements:active {
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.25);
}
.AboutBox-acknowledgements:active::after {
  box-shadow: none;
}
.AboutBox .Dependency {
  font-family: Slack-Lato, Lucida Grande, sans-serif;
  color: #2c2d30;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 24px;
  padding-right: 24px;
}
.AboutBox .Dependency-name {
  font-weight: 700;
  display: -webkit-box;
  text-overflow: visible;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.AboutBox .Dependency-licenseName {
  display: inline;
}
.AboutBox .Dependency-licenseText {
  display: inline-block;
  margin-top: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  border: 1px solid rgba(151, 151, 151, 0.25);
  border-style: solid none;
}
.AboutBox .Dependency-licenseText-enter {
  opacity: 0;
}
.AboutBox .Dependency-licenseText-enter-active {
  opacity: 1;
  transition: opacity 0.4s ease-out;
}
.AboutBox .Dependency-viewLicense {
  background: white;
  color: #2c2d30;
  padding: 3px 3px 0px 3px;
  margin-left: 6px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.25);
  -webkit-font-smoothing: antialiased;
  -webkit-user-select: none;
  border: 0;
  border-radius: 0.25rem;
  -webkit-box-shadow: none;
  display: inline-block;
  cursor: default;
}
.AboutBox .Dependency-viewLicense:focus,
.AboutBox .Dependency-viewLicense:active {
  outline: none;
}
.AboutBox .Dependency-viewLicense:hover {
  outline: none;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
}
.AboutBox .Dependency-viewLicense::after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 0.25rem;
}
.AboutBox .Dependency-viewLicense:hover::after {
  box-shadow: inset 0 -2px rgba(0, 0, 0, 0.25);
}
.AboutBox .Dependency-viewLicense:active {
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.25);
}
.AboutBox .Dependency-viewLicense:active::after {
  box-shadow: none;
}
.AboutBox .Dependency-viewLicense-leave {
  opacity: 1;
}
.AboutBox .Dependency-viewLicense-leave-active {
  opacity: 0;
  transition: opacity 0.2s ease-out;
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/about-box.less","webpack://./src/resources/lato.less","webpack://./src/resources/slack-icons-font.less","webpack://./src/resources/plastic/plastic_typography.less","webpack://./src/resources/plastic/plastic_utilities.less"],names:[],mappings:"AAAA;;;;;;;;;;CAUC;AACD,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,YAAY;ACGZ;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,SAAS;ACGT;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,mBAAmB;ACGnB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,gBAAgB;ACGhB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AElEA;EAEE,uBAAA;EACA,4DAAA;EACA,kBAAA;EACA,gBAAA;AFmEF;AEvDA;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AFyDF;AExDE;EAfA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;AF0EF;AExDA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;AF0DF;AEzDE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;AF2DJ;AEzDE;EAEE,gBAAA;AF0DJ;AEnDA;EACE,UAAA;AFqDF;AEpDE;EACE,kBAAA;AFsDJ;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEknBA;EAEE,WAAA;AFjnBF;AEsmBE;EACE,gBAAA;EACA,cAAA;AFpmBJ;AEsmBE;EACE,yBAAA;AFpmBJ;AE4mBE;EACE,eAAA;AF1mBJ;AE8mBA;EAEE,WAAA;AF7mBF;AEylBE;EACE,gBAAA;EACA,cAAA;AFvlBJ;AEylBE;EACE,yBAAA;AFvlBJ;AEwmBE;EACE,eAAA;AFtmBJ;AE0mBA;EAEE,WAAA;AFzmBF;AE4kBE;EACE,gBAAA;EACA,cAAA;AF1kBJ;AE4kBE;EACE,yBAAA;AF1kBJ;AEomBE;EACE,eAAA;AFlmBJ;AEkkBE;EACE,gBAAA;EACA,cAAA;AFhkBJ;AEkkBE;EACE,yBAAA;AFhkBJ;AE2jBE;EACE,gBAAA;EACA,cAAA;AFzjBJ;AE2jBE;EACE,yBAAA;AFzjBJ;AEojBE;EACE,gBAAA;EACA,cAAA;AFljBJ;AEojBE;EACE,yBAAA;AFljBJ;AE6iBE;EACE,gBAAA;EACA,cAAA;AF3iBJ;AE6iBE;EACE,yBAAA;AF3iBJ;AEsiBE;EACE,gBAAA;EACA,cAAA;AFpiBJ;AEsiBE;EACE,yBAAA;AFpiBJ;AE+hBE;EACE,gBAAA;EACA,cAAA;AF7hBJ;AE+hBE;EACE,yBAAA;AF7hBJ;AEwhBE;EACE,gBAAA;EACA,cAAA;AFthBJ;AEwhBE;EACE,yBAAA;AFthBJ;AEihBE;EACE,gBAAA;EACA,cAAA;AF/gBJ;AEihBE;EACE,yBAAA;AF/gBJ;AE0gBE;EACE,gBAAA;EACA,cAAA;AFxgBJ;AE0gBE;EACE,yBAAA;AFxgBJ;AEmgBE;EACE,gBAAA;EACA,cAAA;AFjgBJ;AEmgBE;EACE,yBAAA;AFjgBJ;AE4fE;EACE,gBAAA;EACA,cAAA;AF1fJ;AE4fE;EACE,yBAAA;AF1fJ;AEqfE;EACE,gBAAA;EACA,cAAA;AFnfJ;AEqfE;EACE,yBAAA;AFnfJ;AE8eE;EACE,gBAAA;EACA,cAAA;AF5eJ;AE8eE;EACE,yBAAA;AF5eJ;AEueE;EACE,gBAAA;EACA,cAAA;AFreJ;AEueE;EACE,yBAAA;AFreJ;AEgeE;EACE,gBAAA;EACA,cAAA;AF9dJ;AEgeE;EACE,yBAAA;AF9dJ;AEydE;EACE,gBAAA;EACA,cAAA;AFvdJ;AEydE;EACE,yBAAA;AFvdJ;AEkdE;EACE,gBAAA;EACA,cAAA;AFhdJ;AEkdE;EACE,yBAAA;AFhdJ;AE2cE;EACE,gBAAA;EACA,cAAA;AFzcJ;AE2cE;EACE,yBAAA;AFzcJ;AEocE;EACE,gBAAA;EACA,cAAA;AFlcJ;AEocE;EACE,yBAAA;AFlcJ;AE6bE;EACE,gBAAA;EACA,cAAA;AF3bJ;AE6bE;EACE,yBAAA;AF3bJ;AEsbE;EACE,gBAAA;EACA,cAAA;AFpbJ;AEsbE;EACE,yBAAA;AFpbJ;AE+aE;EACE,gBAAA;EACA,cAAA;AF7aJ;AE+aE;EACE,yBAAA;AF7aJ;AEwaE;EACE,gBAAA;EACA,cAAA;AFtaJ;AEwaE;EACE,yBAAA;AFtaJ;AEiaE;EACE,gBAAA;EACA,cAAA;AF/ZJ;AEiaE;EACE,yBAAA;AF/ZJ;AE0ZE;EACE,gBAAA;EACA,cAAA;AFxZJ;AE0ZE;EACE,yBAAA;AFxZJ;AEmZE;EACE,gBAAA;EACA,cAAA;AFjZJ;AEmZE;EACE,yBAAA;AFjZJ;AE4YE;EACE,gBAAA;EACA,cAAA;AF1YJ;AE4YE;EACE,yBAAA;AF1YJ;AEqYE;EACE,gBAAA;EACA,cAAA;AFnYJ;AEqYE;EACE,yBAAA;AFnYJ;AE8XE;EACE,gBAAA;EACA,cAAA;AF5XJ;AE8XE;EACE,yBAAA;AF5XJ;AEuXE;EACE,gBAAA;EACA,cAAA;AFrXJ;AEuXE;EACE,yBAAA;AFrXJ;AEgXE;EACE,gBAAA;EACA,cAAA;AF9WJ;AEgXE;EACE,yBAAA;AF9WJ;AEyWE;EACE,gBAAA;EACA,cAAA;AFvWJ;AEyWE;EACE,yBAAA;AFvWJ;AEkWE;EACE,gBAAA;EACA,cAAA;AFhWJ;AEkWE;EACE,yBAAA;AFhWJ;AE2VE;EACE,gBAAA;EACA,cAAA;AFzVJ;AE2VE;EACE,yBAAA;AFzVJ;AEoVE;EACE,gBAAA;EACA,cAAA;AFlVJ;AEoVE;EACE,yBAAA;AFlVJ;AE6UE;EACE,gBAAA;EACA,cAAA;AF3UJ;AE6UE;EACE,yBAAA;AF3UJ;AEsUE;EACE,gBAAA;EACA,cAAA;AFpUJ;AEsUE;EACE,yBAAA;AFpUJ;AE+TE;EACE,gBAAA;EACA,cAAA;AF7TJ;AE+TE;EACE,yBAAA;AF7TJ;AEwTE;EACE,gBAAA;EACA,cAAA;AFtTJ;AEwTE;EACE,yBAAA;AFtTJ;AEiTE;EACE,gBAAA;EACA,cAAA;AF/SJ;AEiTE;EACE,yBAAA;AF/SJ;AE0SE;EACE,gBAAA;EACA,cAAA;AFxSJ;AE0SE;EACE,yBAAA;AFxSJ;AEmSE;EACE,gBAAA;EACA,cAAA;AFjSJ;AEmSE;EACE,yBAAA;AFjSJ;AE4RE;EACE,gBAAA;EACA,cAAA;AF1RJ;AE4RE;EACE,yBAAA;AF1RJ;AEqRE;EACE,gBAAA;EACA,cAAA;AFnRJ;AEqRE;EACE,yBAAA;AFnRJ;AE8QE;EACE,gBAAA;EACA,cAAA;AF5QJ;AE8QE;EACE,yBAAA;AF5QJ;AEuQE;EACE,gBAAA;EACA,cAAA;AFrQJ;AEuQE;EACE,yBAAA;AFrQJ;AEgQE;EACE,gBAAA;EACA,cAAA;AF9PJ;AEgQE;EACE,yBAAA;AF9PJ;AEyPE;EACE,gBAAA;EACA,cAAA;AFvPJ;AEyPE;EACE,yBAAA;AFvPJ;AEkPE;EACE,gBAAA;EACA,cAAA;AFhPJ;AEkPE;EACE,yBAAA;AFhPJ;AE2OE;EACE,gBAAA;EACA,cAAA;AFzOJ;AE2OE;EACE,yBAAA;AFzOJ;AEoOE;EACE,gBAAA;EACA,cAAA;AFlOJ;AEoOE;EACE,yBAAA;AFlOJ;AE6NE;EACE,gBAAA;EACA,cAAA;AF3NJ;AE6NE;EACE,yBAAA;AF3NJ;AEsNE;EACE,gBAAA;EACA,cAAA;AFpNJ;AEsNE;EACE,yBAAA;AFpNJ;AE+ME;EACE,gBAAA;EACA,cAAA;AF7MJ;AE+ME;EACE,yBAAA;AF7MJ;AEwME;EACE,gBAAA;EACA,cAAA;AFtMJ;AEwME;EACE,yBAAA;AFtMJ;AEiME;EACE,gBAAA;EACA,cAAA;AF/LJ;AEiME;EACE,yBAAA;AF/LJ;AE0LE;EACE,gBAAA;EACA,cAAA;AFxLJ;AE0LE;EACE,yBAAA;AFxLJ;AEmLE;EACE,gBAAA;EACA,cAAA;AFjLJ;AEmLE;EACE,yBAAA;AFjLJ;AE4KE;EACE,gBAAA;EACA,cAAA;AF1KJ;AE4KE;EACE,yBAAA;AF1KJ;AEqKE;EACE,gBAAA;EACA,cAAA;AFnKJ;AEqKE;EACE,yBAAA;AFnKJ;AE8JE;EACE,gBAAA;EACA,cAAA;AF5JJ;AE8JE;EACE,yBAAA;AF5JJ;AEuJE;EACE,gBAAA;EACA,cAAA;AFrJJ;AEuJE;EACE,yBAAA;AFrJJ;AEgJE;EACE,gBAAA;EACA,cAAA;AF9IJ;AEgJE;EACE,yBAAA;AF9IJ;AEyIE;EACE,gBAAA;EACA,cAAA;AFvIJ;AEyIE;EACE,yBAAA;AFvIJ;AEkIE;EACE,gBAAA;EACA,cAAA;AFhIJ;AEkIE;EACE,yBAAA;AFhIJ;AE2HE;EACE,gBAAA;EACA,cAAA;AFzHJ;AE2HE;EACE,yBAAA;AFzHJ;AEoHE;EACE,gBAAA;EACA,cAAA;AFlHJ;AEoHE;EACE,yBAAA;AFlHJ;AE6GE;EACE,gBAAA;EACA,cAAA;AF3GJ;AE6GE;EACE,yBAAA;AF3GJ;AEsGE;EACE,gBAAA;EACA,cAAA;AFpGJ;AEsGE;EACE,yBAAA;AFpGJ;AE+FE;EACE,gBAAA;EACA,cAAA;AF7FJ;AE+FE;EACE,yBAAA;AF7FJ;AEwFE;EACE,gBAAA;EACA,cAAA;AFtFJ;AEwFE;EACE,yBAAA;AFtFJ;AEiFE;EACE,gBAAA;EACA,cAAA;AF/EJ;AEiFE;EACE,yBAAA;AF/EJ;AE0EE;EACE,gBAAA;EACA,cAAA;AFxEJ;AE0EE;EACE,yBAAA;AFxEJ;AEmEE;EACE,gBAAA;EACA,cAAA;AFjEJ;AEmEE;EACE,yBAAA;AFjEJ;AE4DE;EACE,gBAAA;EACA,cAAA;AF1DJ;AE4DE;EACE,yBAAA;AF1DJ;AEqDE;EACE,gBAAA;EACA,cAAA;AFnDJ;AEqDE;EACE,yBAAA;AFnDJ;AE8CE;EACE,gBAAA;EACA,cAAA;AF5CJ;AE8CE;EACE,yBAAA;AF5CJ;AEuCE;EACE,gBAAA;EACA,cAAA;AFrCJ;AEuCE;EACE,yBAAA;AFrCJ;AEgCE;EACE,gBAAA;EACA,cAAA;AF9BJ;AEgCE;EACE,yBAAA;AF9BJ;AEyBE;EACE,gBAAA;EACA,cAAA;AFvBJ;AEyBE;EACE,yBAAA;AFvBJ;AEkBE;EACE,gBAAA;EACA,cAAA;AFhBJ;AEkBE;EACE,yBAAA;AFhBJ;AEWE;EACE,gBAAA;EACA,cAAA;AFTJ;AEWE;EACE,yBAAA;AFTJ;AEIE;EACE,gBAAA;EACA,cAAA;AFFJ;AEIE;EACE,yBAAA;AFFJ;AEHE;EACE,gBAAA;EACA,cAAA;AFKJ;AEHE;EACE,yBAAA;AFKJ;AEVE;EACE,gBAAA;EACA,cAAA;AFYJ;AEVE;EACE,yBAAA;AFYJ;AEjBE;EACE,gBAAA;EACA,cAAA;AFmBJ;AEjBE;EACE,yBAAA;AFmBJ;AExBE;EACE,gBAAA;EACA,cAAA;AF0BJ;AExBE;EACE,yBAAA;AF0BJ;AE/BE;EACE,gBAAA;EACA,cAAA;AFiCJ;AE/BE;EACE,yBAAA;AFiCJ;AEtCE;EACE,gBAAA;EACA,cAAA;AFwCJ;AEtCE;EACE,yBAAA;AFwCJ;AE7CE;EACE,gBAAA;EACA,cAAA;AF+CJ;AE7CE;EACE,yBAAA;AF+CJ;AEpDE;EACE,gBAAA;EACA,cAAA;AFsDJ;AEpDE;EACE,yBAAA;AFsDJ;AE3DE;EACE,gBAAA;EACA,cAAA;AF6DJ;AE3DE;EACE,yBAAA;AF6DJ;AElEE;EACE,gBAAA;EACA,cAAA;AFoEJ;AElEE;EACE,yBAAA;AFoEJ;AEzEE;EACE,gBAAA;EACA,cAAA;AF2EJ;AEzEE;EACE,yBAAA;AF2EJ;AEhFE;EACE,gBAAA;EACA,cAAA;AFkFJ;AEhFE;EACE,yBAAA;AFkFJ;AEvFE;EACE,gBAAA;EACA,cAAA;AFyFJ;AEvFE;EACE,yBAAA;AFyFJ;AE9FE;EACE,gBAAA;EACA,cAAA;AFgGJ;AE9FE;EACE,yBAAA;AFgGJ;AErGE;EACE,gBAAA;EACA,cAAA;AFuGJ;AErGE;EACE,yBAAA;AFuGJ;AE5GE;EACE,gBAAA;EACA,cAAA;AF8GJ;AE5GE;EACE,yBAAA;AF8GJ;AEnHE;EACE,gBAAA;EACA,cAAA;AFqHJ;AEnHE;EACE,yBAAA;AFqHJ;AE1HE;EACE,gBAAA;EACA,cAAA;AF4HJ;AE1HE;EACE,yBAAA;AF4HJ;AEjIE;EACE,gBAAA;EACA,cAAA;AFmIJ;AEjIE;EACE,yBAAA;AFmIJ;AExIE;EACE,gBAAA;EACA,cAAA;AF0IJ;AExIE;EACE,yBAAA;AF0IJ;AE/IE;EACE,gBAAA;EACA,cAAA;AFiJJ;AE/IE;EACE,yBAAA;AFiJJ;AEtJE;EACE,gBAAA;EACA,cAAA;AFwJJ;AEtJE;EACE,yBAAA;AFwJJ;AE7JE;EACE,gBAAA;EACA,cAAA;AF+JJ;AE7JE;EACE,yBAAA;AF+JJ;AEpKE;EACE,gBAAA;EACA,cAAA;AFsKJ;AEpKE;EACE,yBAAA;AFsKJ;AE3KE;EACE,gBAAA;EACA,cAAA;AF6KJ;AE3KE;EACE,yBAAA;AF6KJ;AElLE;EACE,gBAAA;EACA,cAAA;AFoLJ;AElLE;EACE,yBAAA;AFoLJ;AEzLE;EACE,gBAAA;EACA,cAAA;AF2LJ;AEzLE;EACE,yBAAA;AF2LJ;AEhME;EACE,gBAAA;EACA,cAAA;AFkMJ;AEhME;EACE,yBAAA;AFkMJ;AEvME;EACE,gBAAA;EACA,cAAA;AFyMJ;AEvME;EACE,yBAAA;AFyMJ;AE9ME;EACE,gBAAA;EACA,cAAA;AFgNJ;AE9ME;EACE,yBAAA;AFgNJ;AErNE;EACE,gBAAA;EACA,cAAA;AFuNJ;AErNE;EACE,yBAAA;AFuNJ;AE5NE;EACE,gBAAA;EACA,cAAA;AF8NJ;AE5NE;EACE,yBAAA;AF8NJ;AEnOE;EACE,gBAAA;EACA,cAAA;AFqOJ;AEnOE;EACE,yBAAA;AFqOJ;AE1OE;EACE,gBAAA;EACA,cAAA;AF4OJ;AE1OE;EACE,yBAAA;AF4OJ;AEjPE;EACE,gBAAA;EACA,cAAA;AFmPJ;AEjPE;EACE,yBAAA;AFmPJ;AExPE;EACE,gBAAA;EACA,cAAA;AF0PJ;AExPE;EACE,yBAAA;AF0PJ;AE/PE;EACE,gBAAA;EACA,cAAA;AFiQJ;AE/PE;EACE,yBAAA;AFiQJ;AEtQE;EACE,gBAAA;EACA,cAAA;AFwQJ;AEtQE;EACE,yBAAA;AFwQJ;AE7QE;EACE,gBAAA;EACA,cAAA;AF+QJ;AE7QE;EACE,yBAAA;AF+QJ;AEpRE;EACE,gBAAA;EACA,cAAA;AFsRJ;AEpRE;EACE,yBAAA;AFsRJ;AE3RE;EACE,gBAAA;EACA,cAAA;AF6RJ;AE3RE;EACE,yBAAA;AF6RJ;AACA;;;;EAIE;AG/xFD;EAEQ,wBAAA;EACc,2BAAA;EACE,qBAAA;AHgyFzB;AACA,sEAAsE;AACtE;;;;;;;EAOE;AACF;;;;;;;;;;;;;EAaE;AACF;;;CAGC;AACD;;;CAGC;AI9uFE;EAAU,iBAAA;AJivFb;AIhvFkB;EAAW,iBAAA;AJmvF7B;AAh0FA;EACE,iBAAA;EACA,kDAAA;EACA,aAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AAi0FF;AA/zFE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AAi0FJ;AA9zFE;EACE,WAAA;EACA,gBAAA;EACA,kBAAA;AAg0FJ;AA7zFE;EACE,WAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,oBAAA;AA+zFJ;AA9zFI;EACE,eAAA;AAg0FN;AA5zFE;EACE,WAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,qBAAA;AA8zFJ;AA3zFE;EACE,6BAAA;EACA,4BAAA;EACA,YAAA;EACA,aAAA;EACA,wBAAA;EACA,gCAAA;AA6zFJ;AA5zFI;EACE,eAAA;EACA,iBAAA;AA8zFN;AA5zFI;EACE,qBAAA;AA8zFN;AA5zFI;EACE,qBAAA;AA8zFN;AA1zFE;EACE,qBAAA;EACA,kBAAA;EACA,UAAA;EACA,6DAAA;AA4zFJ;AAzzFE;EACE,cAAA;EACA,kBAAA;EACA,aAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iCAAA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,iBAAA;EACA,kCAAA;AA2zFJ;AAzzFI;EACE,SAAA;EACA,SAAA;EACA,yBAAA;EACA,YAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,oBAAA;EACA,8BAAA;EACA,yBAAA;EACA,iBAAA;EACA,iBAAA;AA2zFN;AAv6FA;EAiHI,oBAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,4BAAA;AAyzFJ;AA96FA;EAyHI,UAAA;EACA,oBAAA;EACA,+BAAA;EACA,yBAAA;EACA,kCAAA;EACA,6BAAA;AAwzFJ;AAt7FA;EAkII,UAAA;EACA,6BAAA;AAuzFJ;AApzFE;EACE;IACE,UAAA;IACA,oBAAA;IACA,qBAAA;EAszFJ;AACF;AAnzFE;EACE,UAAA;EACA,oBAAA;EAEA,kBAAA;EACA,SAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,2CAAA;EACA,wBAAA;EACA,2BAAA;AAozFJ;AAlzFI;;;EAGE,aAAA;AAozFN;AAhzFE;EACE,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,sCAAA;EACA,mCAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,oBAAA;EACA,qBAAA;EACA,yBAAA;EACA,SAAA;EACA,sBAAA;EACA,wBAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,2BAAA;AAkzFJ;AAhzFI;;;EAGE,aAAA;AAkzFN;AA/yFI;EACE,kBAAA;EACA,WAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,sBAAA;AAizFN;AA9yFI;EACE,4CAAA;AAgzFN;AA7yFI;EACE,+CAAA;AA+yFN;AA7yFM;EACE,gBAAA;AA+yFR;AA9/FA;EAqNI,kDAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EAEA,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,mBAAA;AA2yFJ;AAzyFI;EACE,gBAAA;EAhHF,oBAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,4BAAA;AA45FJ;AA5yFI;EACE,eAAA;AA8yFN;AA3yFI;EACE,qBAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;EACA,2CAAA;EACA,wBAAA;AA6yFN;AA3yFM;EACE,UAAA;AA6yFR;AA3yFQ;EACE,UAAA;EACA,iCAAA;AA6yFV;AAxyFI;EACE,iBAAA;EACA,cAAA;EACA,wBAAA;EACA,gBAAA;EACA,sCAAA;EACA,mCAAA;EACA,yBAAA;EACA,SAAA;EACA,sBAAA;EACA,wBAAA;EACA,qBAAA;EACA,eAAA;AA0yFN;AAxyFM;;EAEE,aAAA;AA0yFR;AAvyFM;EACE,aAAA;EACA,2CAAA;AAyyFR;AAtyFM;EACE,kBAAA;EACA,WAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,sBAAA;AAwyFR;AAryFM;EACE,4CAAA;AAuyFR;AApyFM;EACE,+CAAA;AAsyFR;AApyFQ;EACE,gBAAA;AAsyFV;AAlyFM;EACE,UAAA;AAoyFR;AAlyFQ;EACE,UAAA;EACA,iCAAA;AAoyFV",sourcesContent:[`@import '../../resources/lato.less';
@import '../../resources/slack-icons-font.less';
@import '../../resources/plastic/plastic_typography.less';
@import '../../resources/plastic/plastic_utilities.less';
@import '../../resources/slack_kit/slack_kit_colors.less';

@about-width: 320px;
@about-padding: 42px;
@about-text-color: #2c2d30;
@about-border-color: rgba(151, 151, 151, 0.25);
@about-font-family: Slack-Lato, Lucida Grande, sans-serif;
@shadow-color: rgba(0, 0, 0, 0.25);

.AboutBox {
  background: white;
  font-family: @about-font-family;
  padding: @about-padding;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-logo {
    width: 82px;
    height: 82px;
    user-select: none;
  }

  &-versionContainer {
    width: 100%;
    margin-top: 16px;
    text-align: center;
  }

  &-version {
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0;
    color: @about-text-color;
    text-align: center;
    user-select: none;
    pointer-events: none;
    &.long {
      font-size: 16px;
    }
  }

  &-webappVersion {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0;
    color: @about-text-color;
    text-align: center;
    word-wrap: break-word;
  }

  &-copy {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    outline: none;
    padding: 0px 0px 0px 5px;
    transition: all 0.1s ease-in-out;
    &:before {
      font-size: 16px;
      line-height: 18px;
    }
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(1.1);
    }
  }

  &-tooltipHolder {
    display: inline-block;
    position: relative;
    z-index: 1;
    font-family: @lato !important;
  }

  &-tooltip {
    display: block;
    position: absolute;
    z-index: 1030;
    top: 50%;
    left: 50%;
    border-radius: 6px;
    max-width: 250px;
    padding: 8px 12px;
    transform: translate(-50%, -150%);
    text-align: left;
    opacity: 0;
    color: white;
    background-color: black;
    font-size: 12px;
    font-weight: bold;
    font-style: normal;
    line-height: 1.3;
    pointer-events: none;
    user-select: none;
    transition: opacity 150ms ease-out;

    &:after {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(0, 0, 0, 0);
      border-top-color: #000000;
      border-width: 5px;
      margin-left: -5px;
    }
  }

  .singleLineOfText {
    display: -webkit-box;
    text-overflow: visible;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .fadeIn {
    opacity: 0;
    transform: scaleY(0);
    animation-name: fadeInKeyframes;
    animation-duration: 250ms;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  }

  .fadeOut {
    opacity: 0;
    transition: all 250ms ease-in;
  }

  @keyframes fadeInKeyframes {
    to {
      opacity: 1;
      transform: scaleY(1);
      transform-origin: top;
    }
  }

  &-dependencies {
    opacity: 0;
    transform: scaleY(0);

    position: absolute;
    left: 0px;
    bottom: 42px;
    margin-top: -20px;
    height: 192px;
    box-sizing: border-box;
    border: 1px solid @about-border-color;
    border-style: solid none;
    -webkit-app-region: no-drag;

    &:hover,
    &:focus,
    &:active {
      outline: none;
    }
  }

  &-acknowledgements {
    background: @sk_green;
    color: white !important;
    padding: 8px 14px 9px;
    text-shadow: 0 1px @shadow-color;
    -webkit-font-smoothing: antialiased;
    line-height: 1.2rem;
    font-weight: 900;
    font-size: 15px;
    font-family: inherit;
    text-decoration: none;
    -webkit-user-select: none;
    border: 0;
    border-radius: 0.25rem;
    -webkit-box-shadow: none;
    margin-top: 35px;
    display: inline-block;
    cursor: default;
    -webkit-app-region: no-drag;

    &:hover,
    &:focus,
    &:active {
      outline: none;
    }

    &::after {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 0.25rem;
    }

    &:hover::after {
      box-shadow: inset 0 -2px @shadow-color;
    }

    &:active {
      box-shadow: inset 0 2px 1px @shadow-color;

      &::after {
        box-shadow: none;
      }
    }
  }

  .Dependency {
    font-family: @about-font-family;
    color: @about-text-color;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0;

    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 24px;
    padding-right: 24px;

    &-name {
      font-weight: 700;
      .singleLineOfText;
    }

    &-licenseName {
      display: inline;
    }

    &-licenseText {
      display: inline-block;
      margin-top: 12px;
      padding-top: 12px;
      padding-bottom: 12px;
      border: 1px solid @about-border-color;
      border-style: solid none;

      &-enter {
        opacity: 0;

        &-active {
          opacity: 1;
          transition: opacity 0.4s ease-out;
        }
      }
    }

    &-viewLicense {
      background: white;
      color: @about-text-color;
      padding: 3px 3px 0px 3px;
      margin-left: 6px;
      text-shadow: 0 1px @shadow-color;
      -webkit-font-smoothing: antialiased;
      -webkit-user-select: none;
      border: 0;
      border-radius: 0.25rem;
      -webkit-box-shadow: none;
      display: inline-block;
      cursor: default;

      &:focus,
      &:active {
        outline: none;
      }

      &:hover {
        outline: none;
        box-shadow: inset 0 1px @shadow-color;
      }

      &::after {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 0.25rem;
      }

      &:hover::after {
        box-shadow: inset 0 -2px @shadow-color;
      }

      &:active {
        box-shadow: inset 0 2px 1px @shadow-color;

        &::after {
          box-shadow: none;
        }
      }

      &-leave {
        opacity: 1;

        &-active {
          opacity: 0;
          transition: opacity 0.2s ease-out;
        }
      }
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
`],sourceRoot:""}]);const ir=k},4411:(h,d,u)=>{"use strict";u.d(d,{Z:()=>b});const b=u.p+"slack-icons-v25aaab12924ee1742103112e4bfa21b70.woff2"},35:(h,d,u)=>{"use strict";u.d(d,{Z:()=>b});const b=u.p+"lato-blackd3e44e6115ad32c371760205d27375ed.woff2"},3535:(h,d,u)=>{"use strict";u.d(d,{Z:()=>b});const b=u.p+"lato-bold31816c24a18fbc659282368ab2ac9478.woff2"},1266:(h,d,u)=>{"use strict";u.d(d,{Z:()=>b});const b=u.p+"lato-italic-black62bc5da14d9c6ff41e5f0f456d314808.woff2"},737:(h,d,u)=>{"use strict";u.d(d,{Z:()=>b});const b=u.p+"lato-italic-bold365ea5a303e2259ca5ab8247820f087b.woff2"},6254:(h,d,u)=>{"use strict";u.d(d,{Z:()=>b});const b=u.p+"lato-italic-light074c7fc38126bb94664d75a61d77b746.woff2"},3528:(h,d,u)=>{"use strict";u.d(d,{Z:()=>b});const b=u.p+"lato-italic4484c4211566a05bd71b1f4758adde46.woff2"},4897:(h,d,u)=>{"use strict";u.d(d,{Z:()=>b});const b=u.p+"lato-light2815bd9ba07f2cbe781a3ee1ed79f863.woff2"},8015:(h,d,u)=>{"use strict";u.d(d,{Z:()=>b});const b=u.p+"lato-regularf1aa7a0753149183efa2f47ac56de822.woff2"},9685:(h,d,u)=>{"use strict";u.d(d,{c:()=>S,n:()=>v});var b=!0;function S(){return b}function v(){return typeof __SENTRY_BROWSER_BUNDLE__!="undefined"&&!!__SENTRY_BROWSER_BUNDLE__}},5897:(h,d,u)=>{"use strict";u.d(d,{R:()=>v});var b=u(5409),S={};function v(){return(0,b.KV)()?global:typeof window!="undefined"?window:typeof self!="undefined"?self:S}},5409:(h,d,u)=>{"use strict";u.d(d,{KV:()=>S,l$:()=>v});var b=u(9685);h=u.hmd(h);function S(){return!(0,b.n)()&&Object.prototype.toString.call(typeof process!="undefined"?process:0)==="[object process]"}function v(p,_){return p.require(_)}function F(p){var _;try{_=v(h,p)}catch{}try{var w=v(h,"process").cwd;_=v(h,w()+"/node_modules/"+p)}catch{}return _}},3264:(h,d,u)=>{"use strict";u.d(d,{yW:()=>x,ph:()=>U});var b=u(5897),S=u(5409);h=u.hmd(h);var v={nowSeconds:function(){return Date.now()/1e3}};function F(){var O=(0,b.R)().performance;if(!(!O||!O.now)){var G=Date.now()-O.now();return{now:function(){return O.now()},timeOrigin:G}}}function p(){try{var O=(0,S.l$)(h,"perf_hooks");return O.performance}catch{return}}var _=(0,S.KV)()?p():F(),w=_===void 0?v:{nowSeconds:function(){return(_.timeOrigin+_.now())/1e3}},x=v.nowSeconds.bind(v),U=w.nowSeconds.bind(w),H=null,W=_!==void 0,J,$=function(){var O=(0,b.R)().performance;if(!O||!O.now){J="none";return}var G=3600*1e3,k=O.now(),T=Date.now(),L=O.timeOrigin?Math.abs(O.timeOrigin+k-T):G,j=L<G,I=O.timing&&O.timing.navigationStart,y=typeof I=="number",m=y?Math.abs(I+k-T):G,rn=m<G;return j||rn?L<=m?(J="timeOrigin",O.timeOrigin):(J="navigationStart",I):(J="dateNow",T)}()},1128:h=>{"use strict";h.exports=function(d){var u=[];return u.toString=function(){return this.map(function(S){var v=d(S);return S[2]?"@media ".concat(S[2]," {").concat(v,"}"):v}).join("")},u.i=function(b,S,v){typeof b=="string"&&(b=[[null,b,""]]);var F={};if(v)for(var p=0;p<this.length;p++){var _=this[p][0];_!=null&&(F[_]=!0)}for(var w=0;w<b.length;w++){var x=[].concat(b[w]);v&&F[x[0]]||(S&&(x[2]?x[2]="".concat(S," and ").concat(x[2]):x[2]=S),u.push(x))}},u}},428:h=>{"use strict";function d(p,_){return F(p)||v(p,_)||b(p,_)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(p,_){if(p){if(typeof p=="string")return S(p,_);var w=Object.prototype.toString.call(p).slice(8,-1);if(w==="Object"&&p.constructor&&(w=p.constructor.name),w==="Map"||w==="Set")return Array.from(p);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return S(p,_)}}function S(p,_){(_==null||_>p.length)&&(_=p.length);for(var w=0,x=new Array(_);w<_;w++)x[w]=p[w];return x}function v(p,_){var w=p&&(typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"]);if(w!=null){var x=[],U=!0,H=!1,W,J;try{for(w=w.call(p);!(U=(W=w.next()).done)&&(x.push(W.value),!(_&&x.length===_));U=!0);}catch($){H=!0,J=$}finally{try{!U&&w.return!=null&&w.return()}finally{if(H)throw J}}return x}}function F(p){if(Array.isArray(p))return p}h.exports=function(_){var w=d(_,4),x=w[1],U=w[3];if(typeof btoa=="function"){var H=btoa(unescape(encodeURIComponent(JSON.stringify(U)))),W="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(H),J="/*# ".concat(W," */"),$=U.sources.map(function(O){return"/*# sourceURL=".concat(U.sourceRoot||"").concat(O," */")});return[x].concat($).concat([J]).join(`
`)}return[x].join(`
`)}},4322:h=>{"use strict";h.exports=function(d,u){return u||(u={}),d=d&&d.__esModule?d.default:d,typeof d!="string"?d:(/^['"].*['"]$/.test(d)&&(d=d.slice(1,-1)),u.hash&&(d+=u.hash),/["'() \t\n]/.test(d)||u.needQuotes?'"'.concat(d.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):d)}},4845:h=>{"use strict";var d=function(T){return u(T)&&!b(T)};function u(k){return!!k&&typeof k=="object"}function b(k){var T=Object.prototype.toString.call(k);return T==="[object RegExp]"||T==="[object Date]"||F(k)}var S=typeof Symbol=="function"&&Symbol.for,v=S?Symbol.for("react.element"):60103;function F(k){return k.$$typeof===v}function p(k){return Array.isArray(k)?[]:{}}function _(k,T){return T.clone!==!1&&T.isMergeableObject(k)?O(p(k),k,T):k}function w(k,T,L){return k.concat(T).map(function(j){return _(j,L)})}function x(k,T){if(!T.customMerge)return O;var L=T.customMerge(k);return typeof L=="function"?L:O}function U(k){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(k).filter(function(T){return k.propertyIsEnumerable(T)}):[]}function H(k){return Object.keys(k).concat(U(k))}function W(k,T){try{return T in k}catch{return!1}}function J(k,T){return W(k,T)&&!(Object.hasOwnProperty.call(k,T)&&Object.propertyIsEnumerable.call(k,T))}function $(k,T,L){var j={};return L.isMergeableObject(k)&&H(k).forEach(function(I){j[I]=_(k[I],L)}),H(T).forEach(function(I){J(k,I)||(W(k,I)&&L.isMergeableObject(T[I])?j[I]=x(I,L)(k[I],T[I],L):j[I]=_(T[I],L))}),j}function O(k,T,L){L=L||{},L.arrayMerge=L.arrayMerge||w,L.isMergeableObject=L.isMergeableObject||d,L.cloneUnlessOtherwiseSpecified=_;var j=Array.isArray(T),I=Array.isArray(k),y=j===I;return y?j?L.arrayMerge(k,T,L):$(k,T,L):_(T,L)}O.all=function(T,L){if(!Array.isArray(T))throw new Error("first argument should be an array");return T.reduce(function(j,I){return O(j,I,L)},{})};var G=O;h.exports=G},449:(h,d,u)=>{"use strict";var b=u(6722),S={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},v={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},F={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},p={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_={};_[b.ForwardRef]=F,_[b.Memo]=p;function w(G){return b.isMemo(G)?p:_[G.$$typeof]||S}var x=Object.defineProperty,U=Object.getOwnPropertyNames,H=Object.getOwnPropertySymbols,W=Object.getOwnPropertyDescriptor,J=Object.getPrototypeOf,$=Object.prototype;function O(G,k,T){if(typeof k!="string"){if($){var L=J(k);L&&L!==$&&O(G,L,T)}var j=U(k);H&&(j=j.concat(H(k)));for(var I=w(G),y=w(k),m=0;m<j.length;++m){var rn=j[m];if(!v[rn]&&!(T&&T[rn])&&!(y&&y[rn])&&!(I&&I[rn])){var Un=W(k,rn);try{x(G,rn,Un)}catch{}}}}return G}h.exports=O},5140:(h,d)=>{"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=typeof Symbol=="function"&&Symbol.for,b=u?Symbol.for("react.element"):60103,S=u?Symbol.for("react.portal"):60106,v=u?Symbol.for("react.fragment"):60107,F=u?Symbol.for("react.strict_mode"):60108,p=u?Symbol.for("react.profiler"):60114,_=u?Symbol.for("react.provider"):60109,w=u?Symbol.for("react.context"):60110,x=u?Symbol.for("react.async_mode"):60111,U=u?Symbol.for("react.concurrent_mode"):60111,H=u?Symbol.for("react.forward_ref"):60112,W=u?Symbol.for("react.suspense"):60113,J=u?Symbol.for("react.suspense_list"):60120,$=u?Symbol.for("react.memo"):60115,O=u?Symbol.for("react.lazy"):60116,G=u?Symbol.for("react.block"):60121,k=u?Symbol.for("react.fundamental"):60117,T=u?Symbol.for("react.responder"):60118,L=u?Symbol.for("react.scope"):60119;function j(y){if(typeof y=="object"&&y!==null){var m=y.$$typeof;switch(m){case b:switch(y=y.type,y){case x:case U:case v:case p:case F:case W:return y;default:switch(y=y&&y.$$typeof,y){case w:case H:case O:case $:case _:return y;default:return m}}case S:return m}}}function I(y){return j(y)===U}d.AsyncMode=x,d.ConcurrentMode=U,d.ContextConsumer=w,d.ContextProvider=_,d.Element=b,d.ForwardRef=H,d.Fragment=v,d.Lazy=O,d.Memo=$,d.Portal=S,d.Profiler=p,d.StrictMode=F,d.Suspense=W,d.isAsyncMode=function(y){return I(y)||j(y)===x},d.isConcurrentMode=I,d.isContextConsumer=function(y){return j(y)===w},d.isContextProvider=function(y){return j(y)===_},d.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===b},d.isForwardRef=function(y){return j(y)===H},d.isFragment=function(y){return j(y)===v},d.isLazy=function(y){return j(y)===O},d.isMemo=function(y){return j(y)===$},d.isPortal=function(y){return j(y)===S},d.isProfiler=function(y){return j(y)===p},d.isStrictMode=function(y){return j(y)===F},d.isSuspense=function(y){return j(y)===W},d.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===v||y===U||y===p||y===F||y===W||y===J||typeof y=="object"&&y!==null&&(y.$$typeof===O||y.$$typeof===$||y.$$typeof===_||y.$$typeof===w||y.$$typeof===H||y.$$typeof===k||y.$$typeof===T||y.$$typeof===L||y.$$typeof===G)},d.typeOf=j},6722:(h,d,u)=>{"use strict";h.exports=u(5140)},8566:(h,d,u)=>{"use strict";var b=u(5232);function S(){}function v(){}v.resetWarningCache=S,h.exports=function(){function F(w,x,U,H,W,J){if(J!==b){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}}F.isRequired=F;function p(){return F}var _={array:F,bool:F,func:F,number:F,object:F,string:F,symbol:F,any:F,arrayOf:p,element:F,elementType:F,instanceOf:p,node:F,objectOf:p,oneOf:p,oneOfType:p,shape:p,exact:p,checkPropTypes:v,resetWarningCache:S};return _.PropTypes=_,_}},7396:(h,d,u)=>{if(!1)var b,S;else h.exports=u(8566)()},5232:h=>{"use strict";var d="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";h.exports=d},4994:(h,d)=>{"use strict";var u;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=typeof Symbol=="function"&&Symbol.for,S=b?Symbol.for("react.element"):60103,v=b?Symbol.for("react.portal"):60106,F=b?Symbol.for("react.fragment"):60107,p=b?Symbol.for("react.strict_mode"):60108,_=b?Symbol.for("react.profiler"):60114,w=b?Symbol.for("react.provider"):60109,x=b?Symbol.for("react.context"):60110,U=b?Symbol.for("react.async_mode"):60111,H=b?Symbol.for("react.concurrent_mode"):60111,W=b?Symbol.for("react.forward_ref"):60112,J=b?Symbol.for("react.suspense"):60113,$=b?Symbol.for("react.suspense_list"):60120,O=b?Symbol.for("react.memo"):60115,G=b?Symbol.for("react.lazy"):60116,k=b?Symbol.for("react.block"):60121,T=b?Symbol.for("react.fundamental"):60117,L=b?Symbol.for("react.responder"):60118,j=b?Symbol.for("react.scope"):60119;function I(m){if(typeof m=="object"&&m!==null){var rn=m.$$typeof;switch(rn){case S:switch(m=m.type,m){case U:case H:case F:case _:case p:case J:return m;default:switch(m=m&&m.$$typeof,m){case x:case W:case G:case O:case w:return m;default:return rn}}case v:return rn}}}function y(m){return I(m)===H}u=U,u=H,u=x,u=w,u=S,u=W,u=F,u=G,u=O,u=v,u=_,u=p,u=J,u=function(m){return y(m)||I(m)===U},u=y,u=function(m){return I(m)===x},u=function(m){return I(m)===w},u=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===S},u=function(m){return I(m)===W},u=function(m){return I(m)===F},u=function(m){return I(m)===G},u=function(m){return I(m)===O},u=function(m){return I(m)===v},u=function(m){return I(m)===_},u=function(m){return I(m)===p},u=function(m){return I(m)===J},u=function(m){return typeof m=="string"||typeof m=="function"||m===F||m===H||m===_||m===p||m===J||m===$||typeof m=="object"&&m!==null&&(m.$$typeof===G||m.$$typeof===O||m.$$typeof===w||m.$$typeof===x||m.$$typeof===W||m.$$typeof===T||m.$$typeof===L||m.$$typeof===j||m.$$typeof===k)},u=I},6533:(h,d,u)=>{"use strict";u(4994)},3284:h=>{"use strict";var d=[];function u(v){for(var F=-1,p=0;p<d.length;p++)if(d[p].identifier===v){F=p;break}return F}function b(v,F){for(var p={},_=[],w=0;w<v.length;w++){var x=v[w],U=F.base?x[0]+F.base:x[0],H=p[U]||0,W="".concat(U," ").concat(H);p[U]=H+1;var J=u(W),$={css:x[1],media:x[2],sourceMap:x[3],supports:x[4],layer:x[5]};if(J!==-1)d[J].references++,d[J].updater($);else{var O=S($,F);F.byIndex=w,d.splice(w,0,{identifier:W,updater:O,references:1})}_.push(W)}return _}function S(v,F){var p=F.domAPI(F);p.update(v);var _=function(x){if(x){if(x.css===v.css&&x.media===v.media&&x.sourceMap===v.sourceMap&&x.supports===v.supports&&x.layer===v.layer)return;p.update(v=x)}else p.remove()};return _}h.exports=function(v,F){F=F||{},v=v||[];var p=b(v,F);return function(w){w=w||[];for(var x=0;x<p.length;x++){var U=p[x],H=u(U);d[H].references--}for(var W=b(w,F),J=0;J<p.length;J++){var $=p[J],O=u($);d[O].references===0&&(d[O].updater(),d.splice(O,1))}p=W}}},1836:h=>{"use strict";var d={};function u(S){if(typeof d[S]=="undefined"){var v=document.querySelector(S);if(window.HTMLIFrameElement&&v instanceof window.HTMLIFrameElement)try{v=v.contentDocument.head}catch{v=null}d[S]=v}return d[S]}function b(S,v){var F=u(S);if(!F)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");F.appendChild(v)}h.exports=b},1599:h=>{"use strict";function d(u){var b=document.createElement("style");return u.setAttributes(b,u.attributes),u.insert(b,u.options),b}h.exports=d},5313:(h,d,u)=>{"use strict";function b(S){var v=u.nc;v&&S.setAttribute("nonce",v)}h.exports=b},9909:h=>{"use strict";function d(S,v,F){var p="";F.supports&&(p+="@supports (".concat(F.supports,") {")),F.media&&(p+="@media ".concat(F.media," {"));var _=typeof F.layer!="undefined";_&&(p+="@layer".concat(F.layer.length>0?" ".concat(F.layer):""," {")),p+=F.css,_&&(p+="}"),F.media&&(p+="}"),F.supports&&(p+="}");var w=F.sourceMap;w&&typeof btoa!="undefined"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(w))))," */")),v.styleTagTransform(p,S,v.options)}function u(S){if(S.parentNode===null)return!1;S.parentNode.removeChild(S)}function b(S){var v=S.insertStyleElement(S);return{update:function(p){d(v,S,p)},remove:function(){u(v)}}}h.exports=b},4923:h=>{"use strict";function d(u,b){if(b.styleSheet)b.styleSheet.cssText=u;else{for(;b.firstChild;)b.removeChild(b.firstChild);b.appendChild(document.createTextNode(u))}}h.exports=d},1174:(h,d,u)=>{h.exports=u(5033)(400)},5033:h=>{"use strict";h.exports=rendererVendor}},rr={};function P(h){var d=rr[h];if(d!==void 0)return d.exports;var u=rr[h]={id:h,loaded:!1,exports:{}};return sa[h](u,u.exports,P),u.loaded=!0,u.exports}P.n=h=>{var d=h&&h.__esModule?()=>h.default:()=>h;return P.d(d,{a:d}),d},P.d=(h,d)=>{for(var u in d)P.o(d,u)&&!P.o(h,u)&&Object.defineProperty(h,u,{enumerable:!0,get:d[u]})},P.hmd=h=>(h=Object.create(h),h.children||(h.children=[]),Object.defineProperty(h,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+h.id)}}),h),P.o=(h,d)=>Object.prototype.hasOwnProperty.call(h,d),P.r=h=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},P.p="./";var Bt={};(typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{}).SENTRY_RELEASE={id:"Slack@4.33.73"},(()=>{"use strict";P.r(Bt),P.d(Bt,{AboutBox:()=>ea});var h={};P.r(h),P.d(h,{FunctionToString:()=>Qi,InboundFilters:()=>oc});var d={};P.r(d),P.d(d,{Breadcrumbs:()=>qo,Dedupe:()=>Ic,GlobalHandlers:()=>Et,LinkedErrors:()=>Tc,TryCatch:()=>xc,UserAgent:()=>Pc});var u={};P.r(u),P.d(u,{EventToMain:()=>Ce,ScopeToMain:()=>Fe});var b=P(3284),S=P.n(b),v=P(9909),F=P.n(v),p=P(1836),_=P.n(p),w=P(5313),x=P.n(w),U=P(1599),H=P.n(U),W=P(4923),J=P.n(W),$=P(4743),O={};O.styleTagTransform=J(),O.setAttributes=x(),O.insert=_().bind(null,"head"),O.domAPI=F(),O.insertStyleElement=H();var G=S()($.Z,O);const k=$.Z&&$.Z.locals?$.Z.locals:void 0;function T(n,e){return n===e}function L(n,e,t){if(e===null||t===null||e.length!==t.length)return!1;for(var o=e.length,r=0;r<o;r++)if(!n(e[r],t[r]))return!1;return!0}function j(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T,t=null,o=null;return function(){return L(e,t,arguments)||(o=n.apply(null,arguments)),t=arguments,o}}function I(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every(function(o){return typeof o=="function"})){var t=e.map(function(o){return typeof o}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+t+"]"))}return e}function y(n){for(var e=arguments.length,t=Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];return function(){for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];var a=0,s=i.pop(),l=I(i),A=n.apply(void 0,[function(){return a++,s.apply(null,arguments)}].concat(t)),E=n(function(){for(var f=[],g=l.length,B=0;B<g;B++)f.push(l[B].apply(null,arguments));return A.apply(null,f)});return E.resultFunc=s,E.dependencies=l,E.recomputations=function(){return a},E.resetRecomputations=function(){return a=0},E}}var m=y(j);function rn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:m;if(typeof n!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof n));var t=Object.keys(n);return e(t.map(function(o){return n[o]}),function(){for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return r.reduce(function(c,a,s){return c[t[s]]=a,c},{})})}var Un=(n=>(n.NIGHTLY="nightly",n.ALPHA="alpha",n.ETA="eta",n.PILOT="pilot",n.BETA="beta",n.PROD="prod",n))(Un||{}),Ie=(n=>(n.BETA="beta",n.PROD="prod",n))(Ie||{});const ir=n=>n!=="prod";function ch(n,e){for(const t of Object.values(SettingsLayer))if(has(n[t],e))return t;return null}const Aa=m(n=>n,({zoomLevel:n,notificationZoomLevel:e})=>e&&e!==null?e:n),ah=m(Aa,n=>1+n*.2),cr=({settings:n})=>n.releaseChannelOverride||Un.PROD,lh=({environment:n,settings:e})=>{const t=process.env.SLACK_DEVELOPER_MENU;if(t==="false")return!1;const{isDevMode:o,devEnv:r,openDevToolsOnStart:i}=n,{isSignedIntoSlackOrg:c}=e;return o||!!r||i||c||!!t},fa=n=>!!n.win32.isAeroGlassEnabled&&!!n.isGpuCompositionAvailable,sh=({environment:n,settings:e})=>{const{notificationMethod:o}=e,r=o==="html",i=o&&o!=="html";{const c=isWindows10(n),a=fa(n);if(!c&&a&&!i||r&&a)return!0}return!1},Ah=n=>{const e=n.settings.updaterEndpointVersion;return e!==void 0?e===2:!(process.env.SLACK_UPDATE_URL||cr(n)===ReleaseChannel.NIGHTLY)},fh=n=>{const e=n.notificationTimeout;return Number.isSafeInteger(e)&&e===Number.MAX_SAFE_INTEGER};var sn=(n=>(n.GENERAL="desktop_general",n.BROWSER="desktop_browser",n.RENDERER="desktop_renderer",n.MESSAGEBOX="desktop_messagebox",n.MENU="desktop_menu",n.EXTERNAL="desktop_external",n))(sn||{});function ua(n,e,t,o){return t?{eta:o.t("Electron Eta",sn.RENDERER)(),alpha:o.t("Alpha",sn.RENDERER)(),beta:o.t("Beta",sn.RENDERER)(),pilot:o.t("Customer Pilot",sn.GENERAL)(),prod:o.t("Production",sn.GENERAL)(),nightly:"Dogfood"}[e]||"":ga(n,o)}function Ea(n){const e="e0b59d9",t="HEAD";let o=n||"";return o.endsWith(".65535")&&e&&t&&(o=`${o} ${t}/${e}`),o}function da(n){return n?" 64-bit":" 32-bit"}function uh(n){const e=n.lastIndexOf("e0b59d9");return e>-1?n.slice(0,e):n}function ga(n,e){switch(n){case"WinStore":return e.t("Windows Store",sn.RENDERER)();case"MAS":return e.t("App Store",sn.RENDERER)();case"Snap":case"Flatpak":case"MSI":case"LMSI":case"MSQ":return n;default:return""}}var De=(n=>(n[n.NORMAL=1e3]="NORMAL",n[n.RESTRICTED=1001]="RESTRICTED",n))(De||{}),pa=Array.isArray;const dn=pa;var ba=typeof global=="object"&&global&&global.Object===Object&&global;const ar=ba;var ha=typeof self=="object"&&self&&self.Object===Object&&self,ma=ar||ha||Function("return this")();const mn=ma;var _a=mn.Symbol;const gn=_a;var lr=Object.prototype,ya=lr.hasOwnProperty,Ba=lr.toString,le=gn?gn.toStringTag:void 0;function va(n){var e=ya.call(n,le),t=n[le];try{n[le]=void 0;var o=!0}catch{}var r=Ba.call(n);return o&&(e?n[le]=t:delete n[le]),r}const Fa=va;var Ca=Object.prototype,wa=Ca.toString;function ka(n){return wa.call(n)}const Sa=ka;var xa="[object Null]",Oa="[object Undefined]",sr=gn?gn.toStringTag:void 0;function Ta(n){return n==null?n===void 0?Oa:xa:sr&&sr in Object(n)?Fa(n):Sa(n)}const qn=Ta;function Ra(n){return n!=null&&typeof n=="object"}const On=Ra;var Pa="[object Symbol]";function Ia(n){return typeof n=="symbol"||On(n)&&qn(n)==Pa}const Le=Ia;var Da=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,La=/^\w*$/;function Ma(n,e){if(dn(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||Le(n)?!0:La.test(n)||!Da.test(n)||e!=null&&n in Object(e)}const vt=Ma;function Na(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}const Tn=Na;var ja="[object AsyncFunction]",Ja="[object Function]",Ua="[object GeneratorFunction]",qa="[object Proxy]";function za(n){if(!Tn(n))return!1;var e=qn(n);return e==Ja||e==Ua||e==ja||e==qa}const Ar=za;var Ha=mn["__core-js_shared__"];const Ft=Ha;var fr=function(){var n=/[^.]+$/.exec(Ft&&Ft.keys&&Ft.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function Wa(n){return!!fr&&fr in n}const $a=Wa;var Ga=Function.prototype,Ka=Ga.toString;function Ya(n){if(n!=null){try{return Ka.call(n)}catch{}try{return n+""}catch{}}return""}const Rn=Ya;var Va=/[\\^$.*+?()[\]{}|]/g,Xa=/^\[object .+?Constructor\]$/,Za=Function.prototype,Qa=Object.prototype,nl=Za.toString,el=Qa.hasOwnProperty,tl=RegExp("^"+nl.call(el).replace(Va,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ol(n){if(!Tn(n)||$a(n))return!1;var e=Ar(n)?tl:Xa;return e.test(Rn(n))}const rl=ol;function il(n,e){return n==null?void 0:n[e]}const cl=il;function al(n,e){var t=cl(n,e);return rl(t)?t:void 0}const Pn=al;var ll=Pn(Object,"create");const se=ll;function sl(){this.__data__=se?se(null):{},this.size=0}const Al=sl;function fl(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}const ul=fl;var El="__lodash_hash_undefined__",dl=Object.prototype,gl=dl.hasOwnProperty;function pl(n){var e=this.__data__;if(se){var t=e[n];return t===El?void 0:t}return gl.call(e,n)?e[n]:void 0}const bl=pl;var hl=Object.prototype,ml=hl.hasOwnProperty;function _l(n){var e=this.__data__;return se?e[n]!==void 0:ml.call(e,n)}const yl=_l;var Bl="__lodash_hash_undefined__";function vl(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=se&&e===void 0?Bl:e,this}const Fl=vl;function zn(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var o=n[e];this.set(o[0],o[1])}}zn.prototype.clear=Al,zn.prototype.delete=ul,zn.prototype.get=bl,zn.prototype.has=yl,zn.prototype.set=Fl;const ur=zn;function Cl(){this.__data__=[],this.size=0}const wl=Cl;function kl(n,e){return n===e||n!==n&&e!==e}const Ct=kl;function Sl(n,e){for(var t=n.length;t--;)if(Ct(n[t][0],e))return t;return-1}const Me=Sl;var xl=Array.prototype,Ol=xl.splice;function Tl(n){var e=this.__data__,t=Me(e,n);if(t<0)return!1;var o=e.length-1;return t==o?e.pop():Ol.call(e,t,1),--this.size,!0}const Rl=Tl;function Pl(n){var e=this.__data__,t=Me(e,n);return t<0?void 0:e[t][1]}const Il=Pl;function Dl(n){return Me(this.__data__,n)>-1}const Ll=Dl;function Ml(n,e){var t=this.__data__,o=Me(t,n);return o<0?(++this.size,t.push([n,e])):t[o][1]=e,this}const Nl=Ml;function Hn(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var o=n[e];this.set(o[0],o[1])}}Hn.prototype.clear=wl,Hn.prototype.delete=Rl,Hn.prototype.get=Il,Hn.prototype.has=Ll,Hn.prototype.set=Nl;const Ne=Hn;var jl=Pn(mn,"Map");const Ae=jl;function Jl(){this.size=0,this.__data__={hash:new ur,map:new(Ae||Ne),string:new ur}}const Ul=Jl;function ql(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}const zl=ql;function Hl(n,e){var t=n.__data__;return zl(e)?t[typeof e=="string"?"string":"hash"]:t.map}const je=Hl;function Wl(n){var e=je(this,n).delete(n);return this.size-=e?1:0,e}const $l=Wl;function Gl(n){return je(this,n).get(n)}const Kl=Gl;function Yl(n){return je(this,n).has(n)}const Vl=Yl;function Xl(n,e){var t=je(this,n),o=t.size;return t.set(n,e),this.size+=t.size==o?0:1,this}const Zl=Xl;function Wn(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var o=n[e];this.set(o[0],o[1])}}Wn.prototype.clear=Ul,Wn.prototype.delete=$l,Wn.prototype.get=Kl,Wn.prototype.has=Vl,Wn.prototype.set=Zl;const Je=Wn;var Ql="Expected a function";function wt(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(Ql);var t=function(){var o=arguments,r=e?e.apply(this,o):o[0],i=t.cache;if(i.has(r))return i.get(r);var c=n.apply(this,o);return t.cache=i.set(r,c)||i,c};return t.cache=new(wt.Cache||Je),t}wt.Cache=Je;const kt=wt;var ns=500;function es(n){var e=kt(n,function(o){return t.size===ns&&t.clear(),o}),t=e.cache;return e}const ts=es;var os=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rs=/\\(\\)?/g,is=ts(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(os,function(t,o,r,i){e.push(r?i.replace(rs,"$1"):o||t)}),e});const cs=is;function as(n,e){for(var t=-1,o=n==null?0:n.length,r=Array(o);++t<o;)r[t]=e(n[t],t,n);return r}const St=as;var ls=1/0,Er=gn?gn.prototype:void 0,dr=Er?Er.toString:void 0;function gr(n){if(typeof n=="string")return n;if(dn(n))return St(n,gr)+"";if(Le(n))return dr?dr.call(n):"";var e=n+"";return e=="0"&&1/n==-ls?"-0":e}const ss=gr;function As(n){return n==null?"":ss(n)}const fs=As;function us(n,e){return dn(n)?n:vt(n,e)?[n]:cs(fs(n))}const Ue=us;var Es=1/0;function ds(n){if(typeof n=="string"||Le(n))return n;var e=n+"";return e=="0"&&1/n==-Es?"-0":e}const fe=ds;function gs(n,e){e=Ue(e,n);for(var t=0,o=e.length;n!=null&&t<o;)n=n[fe(e[t++])];return t&&t==o?n:void 0}const xt=gs;var ps=function(){try{var n=Pn(Object,"defineProperty");return n({},"",{}),n}catch{}}();const qe=ps;function bs(n,e,t){e=="__proto__"&&qe?qe(n,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):n[e]=t}const hs=bs;var ms=Object.prototype,_s=ms.hasOwnProperty;function ys(n,e,t){var o=n[e];(!(_s.call(n,e)&&Ct(o,t))||t===void 0&&!(e in n))&&hs(n,e,t)}const Bs=ys;var vs=9007199254740991,Fs=/^(?:0|[1-9]\d*)$/;function Cs(n,e){var t=typeof n;return e=e==null?vs:e,!!e&&(t=="number"||t!="symbol"&&Fs.test(n))&&n>-1&&n%1==0&&n<e}const Ot=Cs;function ws(n,e,t,o){if(!Tn(n))return n;e=Ue(e,n);for(var r=-1,i=e.length,c=i-1,a=n;a!=null&&++r<i;){var s=fe(e[r]),l=t;if(s==="__proto__"||s==="constructor"||s==="prototype")return n;if(r!=c){var A=a[s];l=o?o(A,s,a):void 0,l===void 0&&(l=Tn(A)?A:Ot(e[r+1])?[]:{})}Bs(a,s,l),a=a[s]}return n}const ks=ws;function Ss(n,e,t){for(var o=-1,r=e.length,i={};++o<r;){var c=e[o],a=xt(n,c);t(a,c)&&ks(i,Ue(c,n),a)}return i}const xs=Ss;function Os(n,e){return n!=null&&e in Object(n)}const Ts=Os;var Rs="[object Arguments]";function Ps(n){return On(n)&&qn(n)==Rs}const pr=Ps;var br=Object.prototype,Is=br.hasOwnProperty,Ds=br.propertyIsEnumerable,Ls=pr(function(){return arguments}())?pr:function(n){return On(n)&&Is.call(n,"callee")&&!Ds.call(n,"callee")};const Tt=Ls;var Ms=9007199254740991;function Ns(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Ms}const Rt=Ns;function js(n,e,t){e=Ue(e,n);for(var o=-1,r=e.length,i=!1;++o<r;){var c=fe(e[o]);if(!(i=n!=null&&t(n,c)))break;n=n[c]}return i||++o!=r?i:(r=n==null?0:n.length,!!r&&Rt(r)&&Ot(c,r)&&(dn(n)||Tt(n)))}const Js=js;function Us(n,e){return n!=null&&Js(n,e,Ts)}const hr=Us;function qs(n,e){return xs(n,e,function(t,o){return hr(n,o)})}const zs=qs;function Hs(n,e){for(var t=-1,o=e.length,r=n.length;++t<o;)n[r+t]=e[t];return n}const mr=Hs;var _r=gn?gn.isConcatSpreadable:void 0;function Ws(n){return dn(n)||Tt(n)||!!(_r&&n&&n[_r])}const $s=Ws;function yr(n,e,t,o,r){var i=-1,c=n.length;for(t||(t=$s),r||(r=[]);++i<c;){var a=n[i];e>0&&t(a)?e>1?yr(a,e-1,t,o,r):mr(r,a):o||(r[r.length]=a)}return r}const Gs=yr;function Ks(n){var e=n==null?0:n.length;return e?Gs(n,1):[]}const Ys=Ks;function Vs(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}const Xs=Vs;var Br=Math.max;function Zs(n,e,t){return e=Br(e===void 0?n.length-1:e,0),function(){for(var o=arguments,r=-1,i=Br(o.length-e,0),c=Array(i);++r<i;)c[r]=o[e+r];r=-1;for(var a=Array(e+1);++r<e;)a[r]=o[r];return a[e]=t(c),Xs(n,this,a)}}const vr=Zs;function Qs(n){return function(){return n}}const nA=Qs;function eA(n){return n}const Pt=eA;var tA=qe?function(n,e){return qe(n,"toString",{configurable:!0,enumerable:!1,value:nA(e),writable:!0})}:Pt;const oA=tA;var rA=800,iA=16,cA=Date.now;function aA(n){var e=0,t=0;return function(){var o=cA(),r=iA-(o-t);if(t=o,r>0){if(++e>=rA)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}var lA=aA(oA);const Fr=lA;function sA(n){return Fr(vr(n,void 0,Ys),n+"")}var AA=sA(function(n,e){return n==null?{}:zs(n,e)});const fA=AA;var uA="__lodash_hash_undefined__";function EA(n){return this.__data__.set(n,uA),this}const dA=EA;function gA(n){return this.__data__.has(n)}const pA=gA;function ze(n){var e=-1,t=n==null?0:n.length;for(this.__data__=new Je;++e<t;)this.add(n[e])}ze.prototype.add=ze.prototype.push=dA,ze.prototype.has=pA;const Cr=ze;function bA(n,e,t,o){for(var r=n.length,i=t+(o?1:-1);o?i--:++i<r;)if(e(n[i],i,n))return i;return-1}const hA=bA;function mA(n){return n!==n}const _A=mA;function yA(n,e,t){for(var o=t-1,r=n.length;++o<r;)if(n[o]===e)return o;return-1}const BA=yA;function vA(n,e,t){return e===e?BA(n,e,t):hA(n,_A,t)}const FA=vA;function CA(n,e){var t=n==null?0:n.length;return!!t&&FA(n,e,0)>-1}const wA=CA;function kA(n,e,t){for(var o=-1,r=n==null?0:n.length;++o<r;)if(t(e,n[o]))return!0;return!1}const SA=kA;function xA(n){return function(e){return n(e)}}const wr=xA;function OA(n,e){return n.has(e)}const It=OA;var TA=Math.min;function RA(n,e,t){for(var o=t?SA:wA,r=n[0].length,i=n.length,c=i,a=Array(i),s=1/0,l=[];c--;){var A=n[c];c&&e&&(A=St(A,wr(e))),s=TA(A.length,s),a[c]=!t&&(e||r>=120&&A.length>=120)?new Cr(c&&A):void 0}A=n[0];var E=-1,f=a[0];n:for(;++E<r&&l.length<s;){var g=A[E],B=e?e(g):g;if(g=t||g!==0?g:0,!(f?It(f,B):o(l,B,t))){for(c=i;--c;){var D=a[c];if(!(D?It(D,B):o(n[c],B,t)))continue n}f&&f.push(B),l.push(g)}}return l}const PA=RA;function IA(n,e){return Fr(vr(n,e,Pt),n+"")}const DA=IA;function LA(n){return n!=null&&Rt(n.length)&&!Ar(n)}const kr=LA;function MA(n){return On(n)&&kr(n)}const NA=MA;function jA(n){return NA(n)?n:[]}const JA=jA;var UA=DA(function(n){var e=St(n,JA);return e.length&&e[0]===n[0]?PA(e):[]});const qA=UA;function zA(){this.__data__=new Ne,this.size=0}const HA=zA;function WA(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}const $A=WA;function GA(n){return this.__data__.get(n)}const KA=GA;function YA(n){return this.__data__.has(n)}const VA=YA;var XA=200;function ZA(n,e){var t=this.__data__;if(t instanceof Ne){var o=t.__data__;if(!Ae||o.length<XA-1)return o.push([n,e]),this.size=++t.size,this;t=this.__data__=new Je(o)}return t.set(n,e),this.size=t.size,this}const QA=ZA;function $n(n){var e=this.__data__=new Ne(n);this.size=e.size}$n.prototype.clear=HA,$n.prototype.delete=$A,$n.prototype.get=KA,$n.prototype.has=VA,$n.prototype.set=QA;const He=$n;function nf(n,e){for(var t=-1,o=n==null?0:n.length;++t<o;)if(e(n[t],t,n))return!0;return!1}const ef=nf;var tf=1,of=2;function rf(n,e,t,o,r,i){var c=t&tf,a=n.length,s=e.length;if(a!=s&&!(c&&s>a))return!1;var l=i.get(n),A=i.get(e);if(l&&A)return l==e&&A==n;var E=-1,f=!0,g=t&of?new Cr:void 0;for(i.set(n,e),i.set(e,n);++E<a;){var B=n[E],D=e[E];if(o)var z=c?o(D,B,E,e,n,i):o(B,D,E,n,e,i);if(z!==void 0){if(z)continue;f=!1;break}if(g){if(!ef(e,function(q,en){if(!It(g,en)&&(B===q||r(B,q,t,o,i)))return g.push(en)})){f=!1;break}}else if(!(B===D||r(B,D,t,o,i))){f=!1;break}}return i.delete(n),i.delete(e),f}const Sr=rf;var cf=mn.Uint8Array;const xr=cf;function af(n){var e=-1,t=Array(n.size);return n.forEach(function(o,r){t[++e]=[r,o]}),t}const lf=af;function sf(n){var e=-1,t=Array(n.size);return n.forEach(function(o){t[++e]=o}),t}const Af=sf;var ff=1,uf=2,Ef="[object Boolean]",df="[object Date]",gf="[object Error]",pf="[object Map]",bf="[object Number]",hf="[object RegExp]",mf="[object Set]",_f="[object String]",yf="[object Symbol]",Bf="[object ArrayBuffer]",vf="[object DataView]",Or=gn?gn.prototype:void 0,Dt=Or?Or.valueOf:void 0;function Ff(n,e,t,o,r,i,c){switch(t){case vf:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case Bf:return!(n.byteLength!=e.byteLength||!i(new xr(n),new xr(e)));case Ef:case df:case bf:return Ct(+n,+e);case gf:return n.name==e.name&&n.message==e.message;case hf:case _f:return n==e+"";case pf:var a=lf;case mf:var s=o&ff;if(a||(a=Af),n.size!=e.size&&!s)return!1;var l=c.get(n);if(l)return l==e;o|=uf,c.set(n,e);var A=Sr(a(n),a(e),o,r,i,c);return c.delete(n),A;case yf:if(Dt)return Dt.call(n)==Dt.call(e)}return!1}const Cf=Ff;function wf(n,e,t){var o=e(n);return dn(n)?o:mr(o,t(n))}const kf=wf;function Sf(n,e){for(var t=-1,o=n==null?0:n.length,r=0,i=[];++t<o;){var c=n[t];e(c,t,n)&&(i[r++]=c)}return i}const xf=Sf;function Of(){return[]}const Tf=Of;var Rf=Object.prototype,Pf=Rf.propertyIsEnumerable,Tr=Object.getOwnPropertySymbols,If=Tr?function(n){return n==null?[]:(n=Object(n),xf(Tr(n),function(e){return Pf.call(n,e)}))}:Tf;const Df=If;function Lf(n,e){for(var t=-1,o=Array(n);++t<n;)o[t]=e(t);return o}const Mf=Lf;function Nf(){return!1}const jf=Nf;var Rr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Pr=Rr&&typeof module=="object"&&module&&!module.nodeType&&module,Jf=Pr&&Pr.exports===Rr,Ir=Jf?mn.Buffer:void 0,Uf=Ir?Ir.isBuffer:void 0,qf=Uf||jf;const Lt=qf;var zf="[object Arguments]",Hf="[object Array]",Wf="[object Boolean]",$f="[object Date]",Gf="[object Error]",Kf="[object Function]",Yf="[object Map]",Vf="[object Number]",Xf="[object Object]",Zf="[object RegExp]",Qf="[object Set]",nu="[object String]",eu="[object WeakMap]",tu="[object ArrayBuffer]",ou="[object DataView]",ru="[object Float32Array]",iu="[object Float64Array]",cu="[object Int8Array]",au="[object Int16Array]",lu="[object Int32Array]",su="[object Uint8Array]",Au="[object Uint8ClampedArray]",fu="[object Uint16Array]",uu="[object Uint32Array]",K={};K[ru]=K[iu]=K[cu]=K[au]=K[lu]=K[su]=K[Au]=K[fu]=K[uu]=!0,K[zf]=K[Hf]=K[tu]=K[Wf]=K[ou]=K[$f]=K[Gf]=K[Kf]=K[Yf]=K[Vf]=K[Xf]=K[Zf]=K[Qf]=K[nu]=K[eu]=!1;function Eu(n){return On(n)&&Rt(n.length)&&!!K[qn(n)]}const du=Eu;var Dr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ue=Dr&&typeof module=="object"&&module&&!module.nodeType&&module,gu=ue&&ue.exports===Dr,Mt=gu&&ar.process,pu=function(){try{var n=ue&&ue.require&&ue.require("util").types;return n||Mt&&Mt.binding&&Mt.binding("util")}catch{}}();const Lr=pu;var Mr=Lr&&Lr.isTypedArray,bu=Mr?wr(Mr):du;const Nr=bu;var hu=Object.prototype,mu=hu.hasOwnProperty;function _u(n,e){var t=dn(n),o=!t&&Tt(n),r=!t&&!o&&Lt(n),i=!t&&!o&&!r&&Nr(n),c=t||o||r||i,a=c?Mf(n.length,String):[],s=a.length;for(var l in n)(e||mu.call(n,l))&&!(c&&(l=="length"||r&&(l=="offset"||l=="parent")||i&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Ot(l,s)))&&a.push(l);return a}const yu=_u;var Bu=Object.prototype;function vu(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||Bu;return n===t}const Fu=vu;function Cu(n,e){return function(t){return n(e(t))}}var wu=Cu(Object.keys,Object);const ku=wu;var Su=Object.prototype,xu=Su.hasOwnProperty;function Ou(n){if(!Fu(n))return ku(n);var e=[];for(var t in Object(n))xu.call(n,t)&&t!="constructor"&&e.push(t);return e}const Tu=Ou;function Ru(n){return kr(n)?yu(n):Tu(n)}const jr=Ru;function Pu(n){return kf(n,jr,Df)}const Jr=Pu;var Iu=1,Du=Object.prototype,Lu=Du.hasOwnProperty;function Mu(n,e,t,o,r,i){var c=t&Iu,a=Jr(n),s=a.length,l=Jr(e),A=l.length;if(s!=A&&!c)return!1;for(var E=s;E--;){var f=a[E];if(!(c?f in e:Lu.call(e,f)))return!1}var g=i.get(n),B=i.get(e);if(g&&B)return g==e&&B==n;var D=!0;i.set(n,e),i.set(e,n);for(var z=c;++E<s;){f=a[E];var q=n[f],en=e[f];if(o)var un=c?o(en,q,f,e,n,i):o(q,en,f,n,e,i);if(!(un===void 0?q===en||r(q,en,t,o,i):un)){D=!1;break}z||(z=f=="constructor")}if(D&&!z){var kn=n.constructor,yn=e.constructor;kn!=yn&&"constructor"in n&&"constructor"in e&&!(typeof kn=="function"&&kn instanceof kn&&typeof yn=="function"&&yn instanceof yn)&&(D=!1)}return i.delete(n),i.delete(e),D}const Nu=Mu;var ju=Pn(mn,"DataView");const Nt=ju;var Ju=Pn(mn,"Promise");const jt=Ju;var Uu=Pn(mn,"Set");const Jt=Uu;var qu=Pn(mn,"WeakMap");const Ut=qu;var Ur="[object Map]",zu="[object Object]",qr="[object Promise]",zr="[object Set]",Hr="[object WeakMap]",Wr="[object DataView]",Hu=Rn(Nt),Wu=Rn(Ae),$u=Rn(jt),Gu=Rn(Jt),Ku=Rn(Ut),In=qn;(Nt&&In(new Nt(new ArrayBuffer(1)))!=Wr||Ae&&In(new Ae)!=Ur||jt&&In(jt.resolve())!=qr||Jt&&In(new Jt)!=zr||Ut&&In(new Ut)!=Hr)&&(In=function(n){var e=qn(n),t=e==zu?n.constructor:void 0,o=t?Rn(t):"";if(o)switch(o){case Hu:return Wr;case Wu:return Ur;case $u:return qr;case Gu:return zr;case Ku:return Hr}return e});const $r=In;var Yu=1,Gr="[object Arguments]",Kr="[object Array]",We="[object Object]",Vu=Object.prototype,Yr=Vu.hasOwnProperty;function Xu(n,e,t,o,r,i){var c=dn(n),a=dn(e),s=c?Kr:$r(n),l=a?Kr:$r(e);s=s==Gr?We:s,l=l==Gr?We:l;var A=s==We,E=l==We,f=s==l;if(f&&Lt(n)){if(!Lt(e))return!1;c=!0,A=!1}if(f&&!A)return i||(i=new He),c||Nr(n)?Sr(n,e,t,o,r,i):Cf(n,e,s,t,o,r,i);if(!(t&Yu)){var g=A&&Yr.call(n,"__wrapped__"),B=E&&Yr.call(e,"__wrapped__");if(g||B){var D=g?n.value():n,z=B?e.value():e;return i||(i=new He),r(D,z,t,o,i)}}return f?(i||(i=new He),Nu(n,e,t,o,r,i)):!1}const Zu=Xu;function Vr(n,e,t,o,r){return n===e?!0:n==null||e==null||!On(n)&&!On(e)?n!==n&&e!==e:Zu(n,e,t,o,Vr,r)}const qt=Vr;var Qu=1,nE=2;function eE(n,e,t,o){var r=t.length,i=r,c=!o;if(n==null)return!i;for(n=Object(n);r--;){var a=t[r];if(c&&a[2]?a[1]!==n[a[0]]:!(a[0]in n))return!1}for(;++r<i;){a=t[r];var s=a[0],l=n[s],A=a[1];if(c&&a[2]){if(l===void 0&&!(s in n))return!1}else{var E=new He;if(o)var f=o(l,A,s,n,e,E);if(!(f===void 0?qt(A,l,Qu|nE,o,E):f))return!1}}return!0}const tE=eE;function oE(n){return n===n&&!Tn(n)}const Xr=oE;function rE(n){for(var e=jr(n),t=e.length;t--;){var o=e[t],r=n[o];e[t]=[o,r,Xr(r)]}return e}const iE=rE;function cE(n,e){return function(t){return t==null?!1:t[n]===e&&(e!==void 0||n in Object(t))}}const Zr=cE;function aE(n){var e=iE(n);return e.length==1&&e[0][2]?Zr(e[0][0],e[0][1]):function(t){return t===n||tE(t,n,e)}}const lE=aE;function sE(n,e,t){var o=n==null?void 0:xt(n,e);return o===void 0?t:o}const AE=sE;var fE=1,uE=2;function EE(n,e){return vt(n)&&Xr(e)?Zr(fe(n),e):function(t){var o=AE(t,n);return o===void 0&&o===e?hr(t,n):qt(e,o,fE|uE)}}const dE=EE;function gE(n){return function(e){return e==null?void 0:e[n]}}const pE=gE;function bE(n){return function(e){return xt(e,n)}}const hE=bE;function mE(n){return vt(n)?pE(fe(n)):hE(n)}const _E=mE;function yE(n){return typeof n=="function"?n:n==null?Pt:typeof n=="object"?dn(n)?dE(n[0],n[1]):lE(n):_E(n)}const BE=yE;function vE(n,e){for(var t,o=-1,r=n.length;++o<r;){var i=e(n[o]);i!==void 0&&(t=t===void 0?i:t+i)}return t}const FE=vE;function CE(n,e){return n&&n.length?FE(n,BE(e,2)):0}const Qr=CE;function ph(n,e){return n.teams[e]}function wE(n,e){var t;return!!((t=n==null?void 0:n.featureFlags)!=null&&t[e])}function bh(n,e){return Object.values(xE(n)).some(t=>wE(t,e))}const kE=m(n=>{var e;return(e=n==null?void 0:n.teams)!=null?e:{}},n=>{const e=Object.values(n).find(t=>t&&t.version);return e?e.version:void 0}),SE=m(n=>n,n=>Object.entries(n).reduce((e,[t,o])=>(e[t]={...o.unreads,teamId:t},e),{})),zt="*",hh=m(n=>{var e;return(e=n==null?void 0:n.teams)!=null?e:{}},n=>Object.values(n).map(e=>{var t;return((t=e==null?void 0:e.connectivityPrefs)==null?void 0:t.ntlmCredentialDomains)||zt}).find(e=>e!==zt)||zt),xE=m([n=>{var e,t;return(t=(e=n.webapp)==null?void 0:e.teams)!=null?t:{}},n=>n.workspaces],(n,e)=>fA(n,qA(...[n,e].map(Object.keys)))),OE=m([n=>n.webapp?n.webapp.teams:{},n=>n.workspacesMeta.selectedWorkspaceId],(n,e)=>e?n==null?void 0:n[e]:null),mh=m([OE,n=>n.settings.locale],(n,e)=>n?n.locale:e),_h=m([SE],n=>{const e=Object.values(n),t=Object.keys(e).some(o=>{const{showBullet:r,unreads:i}=e[o];return r&&i>0});return{unreads:Qr(e,({unreads:o})=>o||0),unreadHighlights:Qr(e,({unreadHighlights:o})=>o||0),showBullet:t}});var TE=(n=>(n.QUIT_APP="QUIT_APP",n.RESET_WINDOW="RESET_WINDOW",n.REVEAL_LOGS="REVEAL_LOGS",n))(TE||{});const RE={darwin:"mac",linux:"linux",win32:"windows"},Ht=kt(n=>{const{clientEnvironment:e}=n,t=n.devEnv?ME(n.devEnv):void 0;switch(e){case De.NORMAL:return`${t?`${t}.`:""}slack.com`;case De.RESTRICTED:return t?`${t!=="dev"?`${t}.`:""}slack-gov-dev.com`:"slack-gov.com"}throw new Error("Unexpected mode specified")}),ni=kt(n=>{const{workspace:e}=n;return`https://${e?`${e}.`:""}${Ht(n)}`});function yh({releaseChannel:n,clientEnvironment:e,locale:t}){let o=`https://www.${Ht({clientEnvironment:e})}`;t!==DEFAULT_LOCALE&&(o+=`/intl/${t.toLowerCase()}`),o+="/release-notes";const r=RE.win32||"windows";return o+=`/${r}`,o+=n===ReleaseChannel.BETA?n:"",o}function Bh(n,e){let t=ni({clientEnvironment:n});return e!==DEFAULT_LOCALE&&(t+=`/intl/${e.toLowerCase()}`),t+="/help",t}function vh(n,e){const t=getSelectedWorkspace(n),o=ni({...n.environment,workspace:t==null?void 0:t.domain});return`${new URL(`${o}/help/requests/new`)}${e?"?crash_report=1":""}`}function Fh(n){return`${ti(n)}/api/`}function Ch(n){return`${ei(n)}/api/`}function ei(n){return ti(Ht(n))}function ti(n){return`https://app.${n}`}function PE(n,e){return Wt(n,e)&&n.hostname.startsWith("app.")}function IE(n){return Dn(n,SLACK_GOV_DOMAINS)&&!Dn(n,SLACK_URL_GOV_BLOCKED_DOMAINS)}function oi(n){return Dn(n,SLACK_COMMERICAL_DOMAINS)&&!Dn(n,SLACK_URL_COMMERICAL_BLOCKED_DOMAINS)}function Wt(n,e){if(!n)return!1;switch(e){case ClientEnvironment.NORMAL:return oi(n);case ClientEnvironment.RESTRICTED:return oi(n)||IE(n);default:return!1}}function ri(n,e){if(Wt(n,e)){for(const t of[...SLACK_COMMERICAL_DOMAINS,...SLACK_GOV_DOMAINS])if(t.matchSubDomains&&n.host.endsWith(`.${t.domain}`))return n.host.split(`.${t.domain}`).shift()}}function wh(n){return findMap(Object.values(ClientEnvironment).filter($t),e=>ri(n,e))}function Dn(n,...e){for(const t of e)for(const o of t)if(n.host===o.domain||o.matchSubDomains&&n.host.endsWith(`.${o.domain}`))return!0;return!1}function DE(n){try{return new URL(n)}catch{return null}}function kh(n,e){if(!n)return!1;switch(e){case ClientEnvironment.NORMAL:return Dn(n,SLACK_COMMERCIAL_DOWNLOAD_DOMAINS);case ClientEnvironment.RESTRICTED:return Dn(n,SLACK_COMMERCIAL_DOWNLOAD_DOMAINS,SLACK_GOV_DOWNLOAD_DOMAINS);default:return!1}throw new Error(`not a valid mode: ${e}`)}function $t(n){return!isString(n)}function LE(n){return Object.values(ClientEnvironment).filter($t).some(e=>Wt(n,e))}function Sh(n){var s;const e=typeof n=="string"?new URL(n):null,t=e?searchParamsEntries(e.searchParams):null;let o=(s=t==null?void 0:t.update)!=null?s:"{}";o&&!(o.startsWith("{")&&o.endsWith("}"))&&(o=`{${o}}`),o=replaceSmartQuotes(o),o=o.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:/g,'"$2": ');const r=o.match(/.*: (['"])?([a-zA-Z_-]*)(['"])?/),i=r&&r[2]&&(r[2]==="true"||r[2]==="false"),c=r&&r[2]&&/[\w]|[\w-]*/.test(r[2])&&!i,a=r&&r[1]==='"'&&r[3]==='"';return c&&!a&&(o=(o||"{}").replace(/(.*): (['"])?([a-zA-Z0-9_-]+)(['"])?/g,'$1: "$3"')),o}function xh(n){const e=typeof n=="string"?new URL(n):null,t=e?searchParamsEntries(e.searchParams):null;if((e==null?void 0:e.host)==="app"&&(t!=null&&t.action))switch(t.action.toLowerCase()){case"quit":return"QUIT_APP";case"reset-window":return"RESET_WINDOW";case"reveal-logs":return"REVEAL_LOGS";default:return null}else return null}function ME(n){const e=n.match(/([A-Za-z0-9])*/i);if(e&&n===e[0])return n}function Oh(n){try{const e=new URL(n),{protocol:t,searchParams:o}=e;return Dn(e,SLACK_COMMERICAL_DOMAINS,SLACK_GOV_DOMAINS)?t!=="https:"?(logger.warn(`sanitizeTeamURL: ${n} did not meet protocol requirements`),null):(o.has("redir")&&(logger.warn(`sanitizeTeamURL: ${n} contained redir parameter, which will be deleted`),o.delete("redir")),e.toString()):(logger.warn(`sanitizeTeamURL: ${n} did not meet host requirements`),null)}catch(e){return logger.error("sanitizeTeamURL: could not validate url",{input:n,error:e}),null}}function NE(n="",e){const t=DE(n);if(!t)return t;if(PE(t,e))return t.toString();if(LE(t)){const o=ri(t,e),r=o?t.host.split(o).join(REDACTED_STRING):t.host;return t.toString().split(t.host).join(r)}return n}function Th(n){return Object.values(ClientEnvironment).filter($t).reduce((e,t)=>NE(e,t),n)}function jE(){}const ii=jE;var C=P(1174),Ln,nn,ci,Gn=0,Gt=[],ai=C.options.__b,li=C.options.__r,si=C.options.diffed,Ai=C.options.__c,fi=C.options.unmount;function Kn(n,e){C.options.__h&&C.options.__h(nn,n,Gn||e),Gn=0;var t=nn.__H||(nn.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function Kt(n){return Gn=1,Yt(di,n)}function Yt(n,e,t){var o=Kn(Ln++,2);return o.t=n,o.__c||(o.__=[t?t(e):di(void 0,e),function(r){var i=o.t(o.__[0],r);o.__[0]!==i&&(o.__=[i,o.__[1]],o.__c.setState({}))}],o.__c=nn),o.__}function Vt(n,e){var t=Kn(Ln++,3);!C.options.__s&&no(t.__H,e)&&(t.__=n,t.__H=e,nn.__H.__h.push(t))}function Xt(n,e){var t=Kn(Ln++,4);!C.options.__s&&no(t.__H,e)&&(t.__=n,t.__H=e,nn.__h.push(t))}function Yn(n){return Gn=5,Vn(function(){return{current:n}},[])}function JE(n,e,t){Gn=6,Xt(function(){typeof n=="function"?n(e()):n&&(n.current=e())},t==null?t:t.concat(n))}function Vn(n,e){var t=Kn(Ln++,7);return no(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function UE(n,e){return Gn=8,Vn(function(){return n},e)}function Zt(n){var e=nn.context[n.__c],t=Kn(Ln++,9);return t.c=n,e?(t.__==null&&(t.__=!0,e.sub(nn)),e.props.value):n.__}function ui(n,e){C.options.useDebugValue&&C.options.useDebugValue(e?e(n):n)}function Rh(n){var e=Kn(Ln++,10),t=Kt();return e.__=n,nn.componentDidCatch||(nn.componentDidCatch=function(o){e.__&&e.__(o),t[1](o)}),[t[0],function(){t[1](void 0)}]}function qE(){Gt.forEach(function(n){if(n.__P)try{n.__H.__h.forEach($e),n.__H.__h.forEach(Qt),n.__H.__h=[]}catch(e){n.__H.__h=[],C.options.__e(e,n.__v)}}),Gt=[]}C.options.__b=function(n){nn=null,ai&&ai(n)},C.options.__r=function(n){li&&li(n),Ln=0;var e=(nn=n.__c).__H;e&&(e.__h.forEach($e),e.__h.forEach(Qt),e.__h=[])},C.options.diffed=function(n){si&&si(n);var e=n.__c;e&&e.__H&&e.__H.__h.length&&(Gt.push(e)!==1&&ci===C.options.requestAnimationFrame||((ci=C.options.requestAnimationFrame)||function(t){var o,r=function(){clearTimeout(i),Ei&&cancelAnimationFrame(o),setTimeout(t)},i=setTimeout(r,100);Ei&&(o=requestAnimationFrame(r))})(qE)),nn=void 0},C.options.__c=function(n,e){e.some(function(t){try{t.__h.forEach($e),t.__h=t.__h.filter(function(o){return!o.__||Qt(o)})}catch(o){e.some(function(r){r.__h&&(r.__h=[])}),e=[],C.options.__e(o,t.__v)}}),Ai&&Ai(n,e)},C.options.unmount=function(n){fi&&fi(n);var e=n.__c;if(e&&e.__H)try{e.__H.__.forEach($e)}catch(t){C.options.__e(t,e.__v)}};var Ei=typeof requestAnimationFrame=="function";function $e(n){var e=nn;typeof n.__c=="function"&&n.__c(),nn=e}function Qt(n){var e=nn;n.__c=n.__(),nn=e}function no(n,e){return!n||n.length!==e.length||e.some(function(t,o){return t!==n[o]})}function di(n,e){return typeof e=="function"?e(n):e}const zE=P.p+"Hash@1xfe567312dbef084f073c77da1132c886.png",HE=P.p+"Hash@2x4e633ab90387d1fb949eb7fb49aa4176.png",WE=P.p+"Hash@3x7eaed0e0a8f28b67fc003c5e33dd3ba7.png";function gi(n,e){for(var t in e)n[t]=e[t];return n}function eo(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var o in e)if(o!=="__source"&&n[o]!==e[o])return!0;return!1}function to(n){this.props=n}function $E(n,e){function t(r){var i=this.props.ref,c=i==r.ref;return!c&&i&&(i.call?i(null):i.current=null),e?!e(this.props,r)||!c:eo(this.props,r)}function o(r){return this.shouldComponentUpdate=t,(0,C.createElement)(n,r)}return o.displayName="Memo("+(n.displayName||n.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}(to.prototype=new C.Component).isPureReactComponent=!0,to.prototype.shouldComponentUpdate=function(n,e){return eo(this.props,n)||eo(this.state,e)};var pi=C.options.__b;C.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),pi&&pi(n)};var GE=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function KE(n){function e(t,o){var r=gi({},t);return delete r.ref,n(r,(o=t.ref||o)&&(typeof o!="object"||"current"in o)?o:null)}return e.$$typeof=GE,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(n.displayName||n.name)+")",e}var bi=function(n,e){return n==null?null:(0,C.toChildArray)((0,C.toChildArray)(n).map(e))},YE={map:bi,forEach:bi,count:function(n){return n?(0,C.toChildArray)(n).length:0},only:function(n){var e=(0,C.toChildArray)(n);if(e.length!==1)throw"Children.only";return e[0]},toArray:C.toChildArray},VE=C.options.__e;C.options.__e=function(n,e,t){if(n.then){for(var o,r=e;r=r.__;)if((o=r.__c)&&o.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),o.__c(n,e)}VE(n,e,t)};var hi=C.options.unmount;function Ge(){this.__u=0,this.t=null,this.__b=null}function mi(n){var e=n.__.__c;return e&&e.__e&&e.__e(n)}function XE(n){var e,t,o;function r(i){if(e||(e=n()).then(function(c){t=c.default||c},function(c){o=c}),o)throw o;if(!t)throw e;return(0,C.createElement)(t,i)}return r.displayName="Lazy",r.__f=!0,r}function Ee(){this.u=null,this.o=null}C.options.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&n.__h===!0&&(n.type=null),hi&&hi(n)},(Ge.prototype=new C.Component).__c=function(n,e){var t=e.__c,o=this;o.t==null&&(o.t=[]),o.t.push(t);var r=mi(o.__v),i=!1,c=function(){i||(i=!0,t.__R=null,r?r(a):a())};t.__R=c;var a=function(){if(!--o.__u){if(o.state.__e){var l=o.state.__e;o.__v.__k[0]=function E(f,g,B){return f&&(f.__v=null,f.__k=f.__k&&f.__k.map(function(D){return E(D,g,B)}),f.__c&&f.__c.__P===g&&(f.__e&&B.insertBefore(f.__e,f.__d),f.__c.__e=!0,f.__c.__P=B)),f}(l,l.__c.__P,l.__c.__O)}var A;for(o.setState({__e:o.__b=null});A=o.t.pop();)A.forceUpdate()}},s=e.__h===!0;o.__u++||s||o.setState({__e:o.__b=o.__v.__k[0]}),n.then(c,c)},Ge.prototype.componentWillUnmount=function(){this.t=[]},Ge.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=function i(c,a,s){return c&&(c.__c&&c.__c.__H&&(c.__c.__H.__.forEach(function(l){typeof l.__c=="function"&&l.__c()}),c.__c.__H=null),(c=gi({},c)).__c!=null&&(c.__c.__P===s&&(c.__c.__P=a),c.__c=null),c.__k=c.__k&&c.__k.map(function(l){return i(l,a,s)})),c}(this.__b,t,o.__O=o.__P)}this.__b=null}var r=e.__e&&(0,C.createElement)(C.Fragment,null,n.fallback);return r&&(r.__h=null),[(0,C.createElement)(C.Fragment,null,e.__e?null:n.children),r]};var _i=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};function ZE(n){return this.getChildContext=function(){return n.context},n.children}function QE(n){var e=this,t=n.i;e.componentWillUnmount=function(){(0,C.render)(null,e.l),e.l=null,e.i=null},e.i&&e.i!==t&&e.componentWillUnmount(),n.__v?(e.l||(e.i=t,e.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(o){this.childNodes.push(o),e.i.appendChild(o)},insertBefore:function(o,r){this.childNodes.push(o),e.i.appendChild(o)},removeChild:function(o){this.childNodes.splice(this.childNodes.indexOf(o)>>>1,1),e.i.removeChild(o)}}),(0,C.render)((0,C.createElement)(ZE,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount()}function nd(n,e){return(0,C.createElement)(QE,{__v:n,i:e})}(Ee.prototype=new C.Component).__e=function(n){var e=this,t=mi(e.__v),o=e.o.get(n);return o[0]++,function(r){var i=function(){e.props.revealOrder?(o.push(r),_i(e,n,o)):r()};t?t(i):i()}},Ee.prototype.render=function(n){this.u=null,this.o=new Map;var e=(0,C.toChildArray)(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},Ee.prototype.componentDidUpdate=Ee.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(e,t){_i(n,t,e)})};var yi=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,ed=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,td=function(n){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(n)};function od(n,e,t){return e.__k==null&&(e.textContent=""),(0,C.render)(n,e),typeof t=="function"&&t(),n?n.__c:null}function rd(n,e,t){return(0,C.hydrate)(n,e),typeof t=="function"&&t(),n?n.__c:null}C.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(C.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var Bi=C.options.event;function id(){}function cd(){return this.cancelBubble}function ad(){return this.defaultPrevented}C.options.event=function(n){return Bi&&(n=Bi(n)),n.persist=id,n.isPropagationStopped=cd,n.isDefaultPrevented=ad,n.nativeEvent=n};var vi,Fi={configurable:!0,get:function(){return this.class}},Ci=C.options.vnode;C.options.vnode=function(n){var e=n.type,t=n.props,o=t;if(typeof e=="string"){for(var r in o={},t){var i=t[r];r==="value"&&"defaultValue"in t&&i==null||(r==="defaultValue"&&"value"in t&&t.value==null?r="value":r==="download"&&i===!0?i="":/ondoubleclick/i.test(r)?r="ondblclick":/^onchange(textarea|input)/i.test(r+e)&&!td(t.type)?r="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(r)?r=r.toLowerCase():ed.test(r)?r=r.replace(/[A-Z0-9]/,"-$&").toLowerCase():i===null&&(i=void 0),o[r]=i)}e=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=(0,C.toChildArray)(t.children).forEach(function(c){c.props.selected=o.value.indexOf(c.props.value)!=-1})),e=="select"&&o.defaultValue!=null&&(o.value=(0,C.toChildArray)(t.children).forEach(function(c){c.props.selected=o.multiple?o.defaultValue.indexOf(c.props.value)!=-1:o.defaultValue==c.props.value})),n.props=o}e&&t.class!=t.className&&(Fi.enumerable="className"in t,t.className!=null&&(o.class=t.className),Object.defineProperty(o,"className",Fi)),n.$$typeof=yi,Ci&&Ci(n)};var wi=C.options.__r;C.options.__r=function(n){wi&&wi(n),vi=n.__c};var ld={ReactCurrentDispatcher:{current:{readContext:function(n){return vi.__n[n.__c].props.value}}}},Ph="17.0.2";function sd(n){return C.createElement.bind(null,n)}function ki(n){return!!n&&n.$$typeof===yi}function Ad(n){return ki(n)?C.cloneElement.apply(null,arguments):n}function Si(n){return!!n.__k&&((0,C.render)(null,n),!0)}function fd(n){return n&&(n.base||n.nodeType===1&&n)||null}var xi=function(n,e){return n(e)},ud=function(n,e){return n(e)},Ih=C.Fragment;const Oi={useState:Kt,useReducer:Yt,useEffect:Vt,useLayoutEffect:Xt,useRef:Yn,useImperativeHandle:JE,useMemo:Vn,useCallback:UE,useContext:Zt,useDebugValue:ui,version:"17.0.2",Children:YE,render:od,hydrate:rd,unmountComponentAtNode:Si,createPortal:nd,createElement:C.createElement,createContext:C.createContext,createFactory:sd,cloneElement:Ad,createRef:C.createRef,Fragment:C.Fragment,isValidElement:ki,findDOMNode:fd,Component:C.Component,PureComponent:to,memo:$E,forwardRef:KE,flushSync:ud,unstable_batchedUpdates:xi,StrictMode:C.Fragment,Suspense:Ge,SuspenseList:Ee,lazy:XE,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ld};var Dh=P(7396),Ke=Oi.createContext(null);const Lh=null;function Ed(n){n()}var Ti=Ed,dd=function(e){return Ti=e},gd=function(){return Ti},Ri={notify:function(){}};function pd(){var n=gd(),e=null,t=null;return{clear:function(){e=null,t=null},notify:function(){n(function(){for(var r=e;r;)r.callback(),r=r.next})},get:function(){for(var r=[],i=e;i;)r.push(i),i=i.next;return r},subscribe:function(r){var i=!0,c=t={callback:r,next:null,prev:t};return c.prev?c.prev.next=c:e=c,function(){!i||e===null||(i=!1,c.next?c.next.prev=c.prev:t=c.prev,c.prev?c.prev.next=c.next:e=c.next)}}}}var Pi=function(){function n(t,o){this.store=t,this.parentSub=o,this.unsubscribe=null,this.listeners=Ri,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var e=n.prototype;return e.addNestedSub=function(o){return this.trySubscribe(),this.listeners.subscribe(o)},e.notifyNestedSubs=function(){this.listeners.notify()},e.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},e.isSubscribed=function(){return Boolean(this.unsubscribe)},e.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=pd())},e.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=Ri)},n}(),oo=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?Xt:Vt;function bd(n){var e=n.store,t=n.context,o=n.children,r=Vn(function(){var a=new Pi(e);return a.onStateChange=a.notifyNestedSubs,{store:e,subscription:a}},[e]),i=Vn(function(){return e.getState()},[e]);oo(function(){var a=r.subscription;return a.trySubscribe(),i!==e.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[r,i]);var c=t||Ke;return Oi.createElement(c.Provider,{value:r},o)}const hd=bd;var Mh=P(449),Nh=P(6533),md=null,_d=null,jh=function(e){try{return JSON.stringify(e)}catch{return String(e)}};function yd(n,e){var t=n[1];return[e.payload,t+1]}function Ii(n,e,t){useIsomorphicLayoutEffect(function(){return n.apply(void 0,e)},t)}function Bd(n,e,t,o,r,i,c){n.current=o,e.current=r,t.current=!1,i.current&&(i.current=null,c())}function vd(n,e,t,o,r,i,c,a,s,l){if(n){var A=!1,E=null,f=function(){if(!A){var D=e.getState(),z,q;try{z=o(D,r.current)}catch(en){q=en,E=en}q||(E=null),z===i.current?c.current||s():(i.current=z,a.current=z,c.current=!0,l({type:"STORE_UPDATED",payload:{error:q}}))}};t.onStateChange=f,t.trySubscribe(),f();var g=function(){if(A=!0,t.tryUnsubscribe(),t.onStateChange=null,E)throw E};return g}}var Fd=function(){return[null,0]};function Jh(n,e){e===void 0&&(e={});var t=e,o=t.getDisplayName,r=o===void 0?function(we){return"ConnectAdvanced("+we+")"}:o,i=t.methodName,c=i===void 0?"connectAdvanced":i,a=t.renderCountProp,s=a===void 0?void 0:a,l=t.shouldHandleStateChanges,A=l===void 0?!0:l,E=t.storeKey,f=E===void 0?"store":E,g=t.withRef,B=g===void 0?!1:g,D=t.forwardRef,z=D===void 0?!1:D,q=t.context,en=q===void 0?ReactReduxContext:q,un=_objectWithoutPropertiesLoose(t,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);if(!1)var kn;var yn=en;return function(En){var ke=En.displayName||En.name||"Component",Se=r(ke),pt=_extends({},un,{getDisplayName:r,methodName:c,renderCountProp:s,shouldHandleStateChanges:A,storeKey:f,displayName:Se,wrappedComponentName:ke,WrappedComponent:En}),bt=un.pure;function Vo(an){return n(an.dispatch,pt)}var Xo=bt?useMemo:function(an){return an()};function xe(an){var Oe=useMemo(function(){var Pe=an.reactReduxForwardedRef,or=_objectWithoutPropertiesLoose(an,["reactReduxForwardedRef"]);return[an.context,Pe,or]},[an]),Jn=Oe[0],ta=Oe[1],Te=Oe[2],Zo=useMemo(function(){return Jn&&Jn.Consumer&&isContextConsumer(React.createElement(Jn.Consumer,null))?Jn:yn},[Jn,yn]),Sn=useContext(Zo),Re=Boolean(an.store)&&Boolean(an.store.getState)&&Boolean(an.store.dispatch),hy=Boolean(Sn)&&Boolean(Sn.store),xn=Re?an.store:Sn.store,Qo=useMemo(function(){return Vo(xn)},[xn]),oa=useMemo(function(){if(!A)return _d;var Pe=new Subscription(xn,Re?null:Sn.subscription),or=Pe.notifyNestedSubs.bind(Pe);return[Pe,or]},[xn,Re,Sn]),mt=oa[0],ra=oa[1],ia=useMemo(function(){return Re?Sn:_extends({},Sn,{subscription:mt})},[Re,Sn,mt]),ca=useReducer(yd,md,Fd),oh=ca[0],_t=oh[0],rh=ca[1];if(_t&&_t.error)throw _t.error;var aa=useRef(),nr=useRef(Te),yt=useRef(),la=useRef(!1),er=Xo(function(){return yt.current&&Te===nr.current?yt.current:Qo(xn.getState(),Te)},[xn,_t,Te]);Ii(Bd,[nr,aa,la,Te,er,yt,ra]),Ii(vd,[A,xn,mt,Qo,nr,aa,la,yt,ra,rh],[xn,mt,Qo]);var tr=useMemo(function(){return React.createElement(En,_extends({},er,{ref:ta}))},[ta,En,er]),ih=useMemo(function(){return A?React.createElement(Zo.Provider,{value:ia},tr):tr},[Zo,tr,ia]);return ih}var ae=bt?React.memo(xe):xe;if(ae.WrappedComponent=En,ae.displayName=xe.displayName=Se,z){var ht=React.forwardRef(function(Oe,Jn){return React.createElement(ae,_extends({},Oe,{reactReduxForwardedRef:Jn}))});return ht.displayName=Se,ht.WrappedComponent=En,hoistStatics(ht,En)}return hoistStatics(ae,En)}}function Cd(n,e){var t={},o=function(c){var a=n[c];typeof a=="function"&&(t[c]=function(){return e(a.apply(void 0,arguments))})};for(var r in n)o(r);return t}function ro(n){return function(t,o){var r=n(t,o);function i(){return r}return i.dependsOnOwnProps=!1,i}}function Di(n){return n.dependsOnOwnProps!==null&&n.dependsOnOwnProps!==void 0?Boolean(n.dependsOnOwnProps):n.length!==1}function Li(n,e){return function(o,r){var i=r.displayName,c=function(s,l){return c.dependsOnOwnProps?c.mapToProps(s,l):c.mapToProps(s)};return c.dependsOnOwnProps=!0,c.mapToProps=function(s,l){c.mapToProps=n,c.dependsOnOwnProps=Di(n);var A=c(s,l);return typeof A=="function"&&(c.mapToProps=A,c.dependsOnOwnProps=Di(A),A=c(s,l)),A},c}}function wd(n){return typeof n=="function"?Li(n,"mapDispatchToProps"):void 0}function kd(n){return n?void 0:ro(function(e){return{dispatch:e}})}function Sd(n){return n&&typeof n=="object"?ro(function(e){return Cd(n,e)}):void 0}const Uh=[wd,kd,Sd];function xd(n){return typeof n=="function"?Li(n,"mapStateToProps"):void 0}function Od(n){return n?void 0:ro(function(){return{}})}const qh=[xd,Od];function io(){return io=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},io.apply(this,arguments)}function Td(n,e,t){return io({},t,n,e)}function Rd(n){return function(t,o){var r=o.displayName,i=o.pure,c=o.areMergedPropsEqual,a=!1,s;return function(A,E,f){var g=n(A,E,f);return a?(!i||!c(g,s))&&(s=g):(a=!0,s=g),s}}}function Pd(n){return typeof n=="function"?Rd(n):void 0}function Id(n){return n?void 0:function(){return Td}}const zh=[Pd,Id];function co(n,e,t){for(var o=e.length-1;o>=0;o--){var r=e[o](n);if(r)return r}return function(i,c){throw new Error("Invalid value of type "+typeof n+" for "+t+" argument when connecting component "+c.wrappedComponentName+".")}}function Dd(n,e){return n===e}function Hh(n){var e=n===void 0?{}:n,t=e.connectHOC,o=t===void 0?connectAdvanced:t,r=e.mapStateToPropsFactories,i=r===void 0?defaultMapStateToPropsFactories:r,c=e.mapDispatchToPropsFactories,a=c===void 0?defaultMapDispatchToPropsFactories:c,s=e.mergePropsFactories,l=s===void 0?defaultMergePropsFactories:s,A=e.selectorFactory,E=A===void 0?defaultSelectorFactory:A;return function(g,B,D,z){z===void 0&&(z={});var q=z,en=q.pure,un=en===void 0?!0:en,kn=q.areStatesEqual,yn=kn===void 0?Dd:kn,we=q.areOwnPropsEqual,En=we===void 0?shallowEqual:we,ke=q.areStatePropsEqual,Se=ke===void 0?shallowEqual:ke,pt=q.areMergedPropsEqual,bt=pt===void 0?shallowEqual:pt,Vo=_objectWithoutPropertiesLoose(q,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),Xo=co(g,i,"mapStateToProps"),xe=co(B,a,"mapDispatchToProps"),ae=co(D,l,"mergeProps");return o(E,_extends({methodName:"connect",getDisplayName:function(an){return"Connect("+an+")"},shouldHandleStateChanges:Boolean(g),initMapStateToProps:Xo,initMapDispatchToProps:xe,initMergeProps:ae,pure:un,areStatesEqual:yn,areOwnPropsEqual:En,areStatePropsEqual:Se,areMergedPropsEqual:bt},Vo))}}const Wh=null;function Ld(){var n=Zt(Ke);return n}function $h(n){n===void 0&&(n=ReactReduxContext);var e=n===ReactReduxContext?useDefaultReduxContext:function(){return useContext(n)};return function(){var o=e(),r=o.store;return r}}var Gh=null;function Kh(n){n===void 0&&(n=ReactReduxContext);var e=n===ReactReduxContext?useDefaultStore:createStoreHook(n);return function(){var o=e();return o.dispatch}}var Yh=null,Md=function(e,t){return e===t};function Nd(n,e,t,o){var r=Yt(function(B){return B+1},0),i=r[1],c=Vn(function(){return new Pi(t,o)},[t,o]),a=Yn(),s=Yn(),l=Yn(),A=Yn(),E=t.getState(),f;try{if(n!==s.current||E!==l.current||a.current){var g=n(E);A.current===void 0||!e(g,A.current)?f=g:f=A.current}else f=A.current}catch(B){throw a.current&&(B.message+=`
The error may be correlated with this previous error:
`+a.current.stack+`

`),B}return oo(function(){s.current=n,l.current=E,A.current=f,a.current=void 0}),oo(function(){function B(){try{var D=t.getState(),z=s.current(D);if(e(z,A.current))return;A.current=z,l.current=D}catch(q){a.current=q}i()}return c.onStateChange=B,c.trySubscribe(),B(),function(){return c.tryUnsubscribe()}},[t,c]),f}function jd(n){n===void 0&&(n=Ke);var e=n===Ke?Ld:function(){return Zt(n)};return function(o,r){r===void 0&&(r=Md);var i=e(),c=i.store,a=i.subscription,s=Nd(o,r,c,a);return ui(s),s}}var Jd=jd();dd(xi);var Ud=/\s/;function qd(n){for(var e=n.length;e--&&Ud.test(n.charAt(e)););return e}const zd=qd;var Hd=/^\s+/;function Wd(n){return n&&n.slice(0,zd(n)+1).replace(Hd,"")}const $d=Wd;var Mi=0/0,Gd=/^[-+]0x[0-9a-f]+$/i,Kd=/^0b[01]+$/i,Yd=/^0o[0-7]+$/i,Vd=parseInt;function Xd(n){if(typeof n=="number")return n;if(Le(n))return Mi;if(Tn(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Tn(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=$d(n);var t=Kd.test(n);return t||Yd.test(n)?Vd(n.slice(2),t?2:8):Gd.test(n)?Mi:+n}const Zd=Xd;var Ni=1/0,Qd=17976931348623157e292;function ng(n){if(!n)return n===0?n:0;if(n=Zd(n),n===Ni||n===-Ni){var e=n<0?-1:1;return e*Qd}return n===n?n:0}const eg=ng;function tg(n){var e=eg(n),t=e%1;return e===e?t?e-t:e:0}const og=tg;var rg="Expected a function";function ig(n,e){var t;if(typeof e!="function")throw new TypeError(rg);return n=og(n),function(){return--n>0&&(t=e.apply(this,arguments)),n<=1&&(e=void 0),t}}const cg=ig;function ag(n){return cg(2,n)}const lg=ag(()=>({...window.desktop.store,dispatch:ii}));var ji=P(1174).h;const{render:sg}=C,Ag=async(n,e="div")=>{const t=lg(),r=t.getState().settings.locale;r&&await window.desktop.intl.applyLocale(r);const i=document.createElement(e);document.body.appendChild(i),window.addEventListener("beforeunload",()=>Si(i)),sg(ji(hd,{store:t},ji(n,null)),i)},Ji={debug:"debug",info:"info",warn:"warn",error:"error",fatal:"error"},Ui=(n,e)=>(...t)=>{const o=t.map(r=>typeof r=="object"?JSON.stringify(r,null,2):r).join(" ");e?console[n](`[${e}]	${o}`):console[n](o)},fg=Object.entries(Ji).reduce((n,[e,t])=>(n[e]=Ui(t),n),{}),Xh=(n,e)=>Object.entries(Ji).reduce((t,[o,r])=>(t[o]=Ui(r,n),t),{}),{notifyError:Zh,setupErrorReporter:ug}=(()=>{let n=null;return{setupErrorReporter:e=>n=e,notifyError:e=>{if(n){n(e);return}fg.warn("notifyError: skipping error reporting, reporter is not initialized.",{error:e})}}})();/*! *****************************************************************************
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
***************************************************************************** */var ao=function(n,e){return ao=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])},ao(n,e)};function Ye(n,e){ao(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Y=function(){return Y=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Y.apply(this,arguments)};function Qh(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]]);return t}function nm(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(c=n[a])&&(i=(r<3?c(i):r>3?c(e,t,i):c(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i}function em(n,e){return function(t,o){e(t,o,n)}}function tm(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function om(n,e,t,o){function r(i){return i instanceof t?i:new t(function(c){c(i)})}return new(t||(t=Promise))(function(i,c){function a(A){try{l(o.next(A))}catch(E){c(E)}}function s(A){try{l(o.throw(A))}catch(E){c(E)}}function l(A){A.done?i(A.value):r(A.value).then(a,s)}l((o=o.apply(n,e||[])).next())})}function rm(n,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(l){return function(A){return s([l,A])}}function s(l){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(A){l=[6,A],r=0}finally{o=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function im(n,e,t,o){o===void 0&&(o=t),n[o]=e[t]}function cm(n,e){for(var t in n)t!=="default"&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function qi(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],o=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&o>=n.length&&(n=void 0),{value:n&&n[o++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Xn(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var o=t.call(n),r,i=[],c;try{for(;(e===void 0||e-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(a){c={error:a}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(c)throw c.error}}return i}function zi(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(Xn(arguments[e]));return n}function am(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var o=Array(n),r=0,e=0;e<t;e++)for(var i=arguments[e],c=0,a=i.length;c<a;c++,r++)o[r]=i[c];return o}function Ve(n){return this instanceof Ve?(this.v=n,this):new Ve(n)}function lm(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(n,e||[]),r,i=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(f){o[f]&&(r[f]=function(g){return new Promise(function(B,D){i.push([f,g,B,D])>1||a(f,g)})})}function a(f,g){try{s(o[f](g))}catch(B){E(i[0][3],B)}}function s(f){f.value instanceof Ve?Promise.resolve(f.value.v).then(l,A):E(i[0][2],f)}function l(f){a("next",f)}function A(f){a("throw",f)}function E(f,g){f(g),i.shift(),i.length&&a(i[0][0],i[0][1])}}function sm(n){var e,t;return e={},o("next"),o("throw",function(r){throw r}),o("return"),e[Symbol.iterator]=function(){return this},e;function o(r,i){e[r]=n[r]?function(c){return(t=!t)?{value:Ve(n[r](c)),done:r==="return"}:i?i(c):c}:i}}function Am(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof qi=="function"?qi(n):n[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=n[i]&&function(c){return new Promise(function(a,s){c=n[i](c),r(a,s,c.done,c.value)})}}function r(i,c,a,s){Promise.resolve(s).then(function(l){i({value:l,done:a})},c)}}function fm(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}function um(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}function Em(n){return n&&n.__esModule?n:{default:n}}function dm(n,e){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}function gm(n,e,t){if(!e.has(n))throw new TypeError("attempted to set private field on non-instance");return e.set(n,t),t}/*! *****************************************************************************
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
***************************************************************************** */var lo=function(n,e){return lo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])},lo(n,e)};function Eg(n,e){lo(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var cn=function(){return cn=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},cn.apply(this,arguments)};function pm(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]]);return t}function bm(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(c=n[a])&&(i=(r<3?c(i):r>3?c(e,t,i):c(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i}function hm(n,e){return function(t,o){e(t,o,n)}}function mm(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function _m(n,e,t,o){function r(i){return i instanceof t?i:new t(function(c){c(i)})}return new(t||(t=Promise))(function(i,c){function a(A){try{l(o.next(A))}catch(E){c(E)}}function s(A){try{l(o.throw(A))}catch(E){c(E)}}function l(A){A.done?i(A.value):r(A.value).then(a,s)}l((o=o.apply(n,e||[])).next())})}function ym(n,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(l){return function(A){return s([l,A])}}function s(l){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(A){l=[6,A],r=0}finally{o=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Bm(n,e,t,o){o===void 0&&(o=t),n[o]=e[t]}function vm(n,e){for(var t in n)t!=="default"&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function Bn(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],o=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&o>=n.length&&(n=void 0),{value:n&&n[o++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function de(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var o=t.call(n),r,i=[],c;try{for(;(e===void 0||e-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(a){c={error:a}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(c)throw c.error}}return i}function so(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(de(arguments[e]));return n}function Fm(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var o=Array(n),r=0,e=0;e<t;e++)for(var i=arguments[e],c=0,a=i.length;c<a;c++,r++)o[r]=i[c];return o}function Xe(n){return this instanceof Xe?(this.v=n,this):new Xe(n)}function Cm(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(n,e||[]),r,i=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(f){o[f]&&(r[f]=function(g){return new Promise(function(B,D){i.push([f,g,B,D])>1||a(f,g)})})}function a(f,g){try{s(o[f](g))}catch(B){E(i[0][3],B)}}function s(f){f.value instanceof Xe?Promise.resolve(f.value.v).then(l,A):E(i[0][2],f)}function l(f){a("next",f)}function A(f){a("throw",f)}function E(f,g){f(g),i.shift(),i.length&&a(i[0][0],i[0][1])}}function wm(n){var e,t;return e={},o("next"),o("throw",function(r){throw r}),o("return"),e[Symbol.iterator]=function(){return this},e;function o(r,i){e[r]=n[r]?function(c){return(t=!t)?{value:Xe(n[r](c)),done:r==="return"}:i?i(c):c}:i}}function km(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Bn=="function"?Bn(n):n[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=n[i]&&function(c){return new Promise(function(a,s){c=n[i](c),r(a,s,c.done,c.value)})}}function r(i,c,a,s){Promise.resolve(s).then(function(l){i({value:l,done:a})},c)}}function Sm(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}function xm(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}function Om(n){return n&&n.__esModule?n:{default:n}}function Tm(n,e){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}function Rm(n,e,t){if(!e.has(n))throw new TypeError("attempted to set private field on non-instance");return e.set(n,t),t}var Z=P(5897),Hi=Object.prototype.toString;function Wi(n){switch(Hi.call(n)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return vn(n,Error)}}function Zn(n,e){return Hi.call(n)==="[object "+e+"]"}function $i(n){return Zn(n,"ErrorEvent")}function Gi(n){return Zn(n,"DOMError")}function dg(n){return Zn(n,"DOMException")}function Qn(n){return Zn(n,"String")}function ge(n){return n===null||typeof n!="object"&&typeof n!="function"}function ne(n){return Zn(n,"Object")}function Ao(n){return typeof Event!="undefined"&&vn(n,Event)}function Ki(n){return typeof Element!="undefined"&&vn(n,Element)}function gg(n){return Zn(n,"RegExp")}function fo(n){return Boolean(n&&n.then&&typeof n.then=="function")}function pg(n){return ne(n)&&"nativeEvent"in n&&"preventDefault"in n&&"stopPropagation"in n}function Pm(n){return typeof n=="number"&&n!==n}function vn(n,e){try{return n instanceof e}catch{return!1}}function Ze(n,e){try{for(var t=n,o=5,r=80,i=[],c=0,a=0,s=" > ",l=s.length,A=void 0;t&&c++<o&&(A=bg(t,e),!(A==="html"||c>1&&a+i.length*l+A.length>=r));)i.push(A),a+=A.length,t=t.parentNode;return i.reverse().join(s)}catch{return"<unknown>"}}function bg(n,e){var t=n,o=[],r,i,c,a,s;if(!t||!t.tagName)return"";o.push(t.tagName.toLowerCase());var l=e&&e.length?e.filter(function(E){return t.getAttribute(E)}).map(function(E){return[E,t.getAttribute(E)]}):null;if(l&&l.length)l.forEach(function(E){o.push("["+E[0]+'="'+E[1]+'"]')});else if(t.id&&o.push("#"+t.id),r=t.className,r&&Qn(r))for(i=r.split(/\s+/),s=0;s<i.length;s++)o.push("."+i[s]);var A=["type","name","title","alt"];for(s=0;s<A.length;s++)c=A[s],a=t.getAttribute(c),a&&o.push("["+c+'="'+a+'"]');return o.join("")}function hg(){var n=(0,Z.R)();try{return n.document.location.href}catch{return""}}function pe(n,e){return e===void 0&&(e=0),typeof n!="string"||e===0||n.length<=e?n:n.substr(0,e)+"..."}function Im(n,e){var t=n,o=t.length;if(o<=150)return t;e>o&&(e=o);var r=Math.max(e-60,0);r<5&&(r=0);var i=Math.min(r+140,o);return i>o-5&&(i=o),i===o&&(r=Math.max(i-140,0)),t=t.slice(r,i),r>0&&(t="'{snip} "+t),i<o&&(t+=" {snip}"),t}function Yi(n,e){if(!Array.isArray(n))return"";for(var t=[],o=0;o<n.length;o++){var r=n[o];try{t.push(String(r))}catch{t.push("[value cannot be serialized]")}}return t.join(e)}function uo(n,e){return Qn(n)?gg(e)?e.test(n):typeof e=="string"?n.indexOf(e)!==-1:!1:!1}function Dm(n){return n.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function tn(n,e,t){if(e in n){var o=n[e],r=t(o);if(typeof r=="function")try{Vi(r,o)}catch{}n[e]=r}}function Qe(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,configurable:!0})}function Vi(n,e){var t=e.prototype||{};n.prototype=e.prototype=t,Qe(n,"__sentry_original__",e)}function Eo(n){return n.__sentry_original__}function mg(n){return Object.keys(n).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])}).join("&")}function Xi(n){if(Wi(n)){var e=n,t={message:e.message,name:e.name,stack:e.stack};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}if(Ao(n)){var r=n,i={};i.type=r.type;try{i.target=Ki(r.target)?Ze(r.target):Object.prototype.toString.call(r.target)}catch{i.target="<unknown>"}try{i.currentTarget=Ki(r.currentTarget)?Ze(r.currentTarget):Object.prototype.toString.call(r.currentTarget)}catch{i.currentTarget="<unknown>"}typeof CustomEvent!="undefined"&&vn(n,CustomEvent)&&(i.detail=r.detail);for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(i[c]=r[c]);return i}return n}function _g(n,e){e===void 0&&(e=40);var t=Object.keys(Xi(n));if(t.sort(),!t.length)return"[object has no keys]";if(t[0].length>=e)return pe(t[0],e);for(var o=t.length;o>0;o--){var r=t.slice(0,o).join(", ");if(!(r.length>e))return o===t.length?r:pe(r,e)}return""}function go(n){var e,t;if(ne(n)){var o=n,r={};try{for(var i=Bn(Object.keys(o)),c=i.next();!c.done;c=i.next()){var a=c.value;typeof o[a]!="undefined"&&(r[a]=go(o[a]))}}catch(s){e={error:s}}finally{try{c&&!c.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return r}return Array.isArray(n)?n.map(go):n}function Lm(n){var e;switch(!0){case n==null:e=new String(n);break;case(typeof n=="symbol"||typeof n=="bigint"):e=Object(n);break;case isPrimitive(n):e=new n.constructor(n);break;default:e=n;break}return e}var Zi,Qi=function(){function n(){this.name=n.id}return n.prototype.setupOnce=function(){Zi=Function.prototype.toString,Function.prototype.toString=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=Eo(this)||this;return Zi.apply(o,e)}},n.id="FunctionToString",n}();/*! *****************************************************************************
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
***************************************************************************** */var po=function(n,e){return po=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])},po(n,e)};function Mm(n,e){po(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var X=function(){return X=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},X.apply(this,arguments)};function Nm(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]]);return t}function jm(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(c=n[a])&&(i=(r<3?c(i):r>3?c(e,t,i):c(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i}function Jm(n,e){return function(t,o){e(t,o,n)}}function Um(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function qm(n,e,t,o){function r(i){return i instanceof t?i:new t(function(c){c(i)})}return new(t||(t=Promise))(function(i,c){function a(A){try{l(o.next(A))}catch(E){c(E)}}function s(A){try{l(o.throw(A))}catch(E){c(E)}}function l(A){A.done?i(A.value):r(A.value).then(a,s)}l((o=o.apply(n,e||[])).next())})}function zm(n,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(l){return function(A){return s([l,A])}}function s(l){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(A){l=[6,A],r=0}finally{o=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Hm(n,e,t,o){o===void 0&&(o=t),n[o]=e[t]}function Wm(n,e){for(var t in n)t!=="default"&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function bo(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],o=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&o>=n.length&&(n=void 0),{value:n&&n[o++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ho(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var o=t.call(n),r,i=[],c;try{for(;(e===void 0||e-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(a){c={error:a}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(c)throw c.error}}return i}function pn(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(ho(arguments[e]));return n}function $m(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var o=Array(n),r=0,e=0;e<t;e++)for(var i=arguments[e],c=0,a=i.length;c<a;c++,r++)o[r]=i[c];return o}function nt(n){return this instanceof nt?(this.v=n,this):new nt(n)}function Gm(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(n,e||[]),r,i=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(f){o[f]&&(r[f]=function(g){return new Promise(function(B,D){i.push([f,g,B,D])>1||a(f,g)})})}function a(f,g){try{s(o[f](g))}catch(B){E(i[0][3],B)}}function s(f){f.value instanceof nt?Promise.resolve(f.value.v).then(l,A):E(i[0][2],f)}function l(f){a("next",f)}function A(f){a("throw",f)}function E(f,g){f(g),i.shift(),i.length&&a(i[0][0],i[0][1])}}function Km(n){var e,t;return e={},o("next"),o("throw",function(r){throw r}),o("return"),e[Symbol.iterator]=function(){return this},e;function o(r,i){e[r]=n[r]?function(c){return(t=!t)?{value:nt(n[r](c)),done:r==="return"}:i?i(c):c}:i}}function Ym(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof bo=="function"?bo(n):n[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=n[i]&&function(c){return new Promise(function(a,s){c=n[i](c),r(a,s,c.done,c.value)})}}function r(i,c,a,s){Promise.resolve(s).then(function(l){i({value:l,done:a})},c)}}function Vm(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}function Xm(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}function Zm(n){return n&&n.__esModule?n:{default:n}}function Qm(n,e){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}function n_(n,e,t){if(!e.has(n))throw new TypeError("attempted to set private field on non-instance");return e.set(n,t),t}var M=P(9685),be=(0,Z.R)(),mo="Sentry Logger ",nc=["debug","info","warn","error","log","assert"];function et(n){var e=(0,Z.R)();if(!("console"in e))return n();var t=e.console,o={};nc.forEach(function(i){i in e.console&&t[i].__sentry_original__&&(o[i]=t[i],t[i]=t[i].__sentry_original__)});var r=n();return Object.keys(o).forEach(function(i){t[i]=o[i]}),r}var yg=function(){function n(){this._enabled=!1}return n.prototype.disable=function(){this._enabled=!1},n.prototype.enable=function(){this._enabled=!0},n.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._enabled&&et(function(){var o;(o=be.console).log.apply(o,so([mo+"[Log]:"],e))})},n.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._enabled&&et(function(){var o;(o=be.console).warn.apply(o,so([mo+"[Warn]:"],e))})},n.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._enabled&&et(function(){var o;(o=be.console).error.apply(o,so([mo+"[Error]:"],e))})},n}(),_o=be.__SENTRY__||{},N=_o.logger||new yg;(0,M.c)()&&(_o.logger=N,be.__SENTRY__=_o);function ee(){var n=(0,Z.R)(),e=n.crypto||n.msCrypto;if(e!==void 0&&e.getRandomValues){var t=new Uint16Array(8);e.getRandomValues(t),t[3]=t[3]&4095|16384,t[4]=t[4]&16383|32768;var o=function(r){for(var i=r.toString(16);i.length<4;)i="0"+i;return i};return o(t[0])+o(t[1])+o(t[2])+o(t[3])+o(t[4])+o(t[5])+o(t[6])+o(t[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(r){var i=Math.random()*16|0,c=r==="x"?i:i&3|8;return c.toString(16)})}function yo(n){if(!n)return{};var e=n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!e)return{};var t=e[6]||"",o=e[8]||"";return{host:e[4],path:e[5],protocol:e[2],relative:e[5]+t+o}}function ec(n){return n.exception&&n.exception.values?n.exception.values[0]:void 0}function Mn(n){var e=n.message,t=n.event_id;if(e)return e;var o=ec(n);return o?o.type&&o.value?o.type+": "+o.value:o.type||o.value||t||"<unknown>":t||"<unknown>"}function Bo(n,e,t){var o=n.exception=n.exception||{},r=o.values=o.values||[],i=r[0]=r[0]||{};i.value||(i.value=e||""),i.type||(i.type=t||"Error")}function he(n,e){var t=ec(n);if(t){var o={type:"generic",handled:!0},r=t.mechanism;if(t.mechanism=cn(cn(cn({},o),r),e),e&&"data"in e){var i=cn(cn({},r&&r.data),e.data);t.mechanism.data=i}}}var Bg=/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;function e_(n){var e=n.match(Bg)||[],t=parseInt(e[1],10),o=parseInt(e[2],10),r=parseInt(e[3],10);return{buildmetadata:e[5],major:isNaN(t)?void 0:t,minor:isNaN(o)?void 0:o,patch:isNaN(r)?void 0:r,prerelease:e[4]}}function t_(n,e,t){t===void 0&&(t=5);var o=e.lineno||0,r=n.length,i=Math.max(Math.min(r,o-1),0);e.pre_context=n.slice(Math.max(0,i-t),i).map(function(c){return snipLine(c,0)}),e.context_line=snipLine(n[Math.min(r-1,i)],e.colno||0),e.post_context=n.slice(Math.min(i+1,r),i+1+t).map(function(c){return snipLine(c,0)})}function o_(n){return n.split(/[\?#]/,1)[0]}function tc(n){if(n&&n.__sentry_captured__)return!0;try{Qe(n,"__sentry_captured__",!0)}catch{}return!1}var vg=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],oc=function(){function n(e){e===void 0&&(e={}),this._options=e,this.name=n.id}return n.prototype.setupOnce=function(e,t){e(function(o){var r=t();if(r){var i=r.getIntegration(n);if(i){var c=r.getClient(),a=c?c.getOptions():{},s=Fg(i._options,a);return Cg(o,s)?null:o}}return o})},n.id="InboundFilters",n}();function Fg(n,e){return n===void 0&&(n={}),e===void 0&&(e={}),{allowUrls:pn(n.whitelistUrls||[],n.allowUrls||[],e.whitelistUrls||[],e.allowUrls||[]),denyUrls:pn(n.blacklistUrls||[],n.denyUrls||[],e.blacklistUrls||[],e.denyUrls||[]),ignoreErrors:pn(n.ignoreErrors||[],e.ignoreErrors||[],vg),ignoreInternal:n.ignoreInternal!==void 0?n.ignoreInternal:!0}}function Cg(n,e){return e.ignoreInternal&&Og(n)?((0,M.c)()&&N.warn(`Event dropped due to being internal Sentry Error.
Event: `+Mn(n)),!0):wg(n,e.ignoreErrors)?((0,M.c)()&&N.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: "+Mn(n)),!0):kg(n,e.denyUrls)?((0,M.c)()&&N.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: "+Mn(n)+`.
Url: `+tt(n)),!0):Sg(n,e.allowUrls)?!1:((0,M.c)()&&N.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: "+Mn(n)+`.
Url: `+tt(n)),!0)}function wg(n,e){return!e||!e.length?!1:xg(n).some(function(t){return e.some(function(o){return uo(t,o)})})}function kg(n,e){if(!e||!e.length)return!1;var t=tt(n);return t?e.some(function(o){return uo(t,o)}):!1}function Sg(n,e){if(!e||!e.length)return!0;var t=tt(n);return t?e.some(function(o){return uo(t,o)}):!0}function xg(n){if(n.message)return[n.message];if(n.exception)try{var e=n.exception.values&&n.exception.values[0]||{},t=e.type,o=t===void 0?"":t,r=e.value,i=r===void 0?"":r;return[""+i,o+": "+i]}catch{return(0,M.c)()&&N.error("Cannot extract message for event "+Mn(n)),[]}return[]}function Og(n){try{return n.exception.values[0].type==="SentryError"}catch{}return!1}function rc(n){n===void 0&&(n=[]);for(var e=n.length-1;e>=0;e--){var t=n[e];if(t&&t.filename!=="<anonymous>"&&t.filename!=="[native code]")return t.filename||null}return null}function tt(n){try{if(n.stacktrace)return rc(n.stacktrace.frames);var e;try{e=n.exception.values[0].stacktrace.frames}catch{}return e?rc(e):null}catch{return(0,M.c)()&&N.error("Cannot extract url for event "+Mn(n)),null}}/*! *****************************************************************************
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
***************************************************************************** */var vo=function(n,e){return vo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])},vo(n,e)};function r_(n,e){vo(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var R=function(){return R=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},R.apply(this,arguments)};function i_(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]]);return t}function c_(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(c=n[a])&&(i=(r<3?c(i):r>3?c(e,t,i):c(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i}function a_(n,e){return function(t,o){e(t,o,n)}}function l_(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function s_(n,e,t,o){function r(i){return i instanceof t?i:new t(function(c){c(i)})}return new(t||(t=Promise))(function(i,c){function a(A){try{l(o.next(A))}catch(E){c(E)}}function s(A){try{l(o.throw(A))}catch(E){c(E)}}function l(A){A.done?i(A.value):r(A.value).then(a,s)}l((o=o.apply(n,e||[])).next())})}function A_(n,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(l){return function(A){return s([l,A])}}function s(l){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(A){l=[6,A],r=0}finally{o=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function f_(n,e,t,o){o===void 0&&(o=t),n[o]=e[t]}function u_(n,e){for(var t in n)t!=="default"&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function ic(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],o=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&o>=n.length&&(n=void 0),{value:n&&n[o++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Tg(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var o=t.call(n),r,i=[],c;try{for(;(e===void 0||e-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(a){c={error:a}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(c)throw c.error}}return i}function te(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(Tg(arguments[e]));return n}function E_(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var o=Array(n),r=0,e=0;e<t;e++)for(var i=arguments[e],c=0,a=i.length;c<a;c++,r++)o[r]=i[c];return o}function ot(n){return this instanceof ot?(this.v=n,this):new ot(n)}function d_(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(n,e||[]),r,i=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(f){o[f]&&(r[f]=function(g){return new Promise(function(B,D){i.push([f,g,B,D])>1||a(f,g)})})}function a(f,g){try{s(o[f](g))}catch(B){E(i[0][3],B)}}function s(f){f.value instanceof ot?Promise.resolve(f.value.v).then(l,A):E(i[0][2],f)}function l(f){a("next",f)}function A(f){a("throw",f)}function E(f,g){f(g),i.shift(),i.length&&a(i[0][0],i[0][1])}}function g_(n){var e,t;return e={},o("next"),o("throw",function(r){throw r}),o("return"),e[Symbol.iterator]=function(){return this},e;function o(r,i){e[r]=n[r]?function(c){return(t=!t)?{value:ot(n[r](c)),done:r==="return"}:i?i(c):c}:i}}function p_(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof ic=="function"?ic(n):n[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=n[i]&&function(c){return new Promise(function(a,s){c=n[i](c),r(a,s,c.done,c.value)})}}function r(i,c,a,s){Promise.resolve(s).then(function(l){i({value:l,done:a})},c)}}function b_(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}function h_(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}function m_(n){return n&&n.__esModule?n:{default:n}}function __(n,e){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}function y_(n,e,t){if(!e.has(n))throw new TypeError("attempted to set private field on non-instance");return e.set(n,t),t}var oe=P(3264),Rg=P(5409);function re(n){return new Nn(function(e){e(n)})}function Fo(n){return new Nn(function(e,t){t(n)})}var Nn=function(){function n(e){var t=this;this._state=0,this._handlers=[],this._resolve=function(o){t._setResult(1,o)},this._reject=function(o){t._setResult(2,o)},this._setResult=function(o,r){if(t._state===0){if(fo(r)){r.then(t._resolve,t._reject);return}t._state=o,t._value=r,t._executeHandlers()}},this._executeHandlers=function(){if(t._state!==0){var o=t._handlers.slice();t._handlers=[],o.forEach(function(r){r[0]||(t._state===1&&r[1](t._value),t._state===2&&r[2](t._value),r[0]=!0)})}};try{e(this._resolve,this._reject)}catch(o){this._reject(o)}}return n.prototype.then=function(e,t){var o=this;return new n(function(r,i){o._handlers.push([!1,function(c){if(!e)r(c);else try{r(e(c))}catch(a){i(a)}},function(c){if(!t)i(c);else try{r(t(c))}catch(a){i(a)}}]),o._executeHandlers()})},n.prototype.catch=function(e){return this.then(function(t){return t},e)},n.prototype.finally=function(e){var t=this;return new n(function(o,r){var i,c;return t.then(function(a){c=!1,i=a,e&&e()},function(a){c=!0,i=a,e&&e()}).then(function(){if(c){r(i);return}o(i)})})},n}(),cc=100,rt=function(){function n(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={}}return n.clone=function(e){var t=new n;return e&&(t._breadcrumbs=te(e._breadcrumbs),t._tags=R({},e._tags),t._extra=R({},e._extra),t._contexts=R({},e._contexts),t._user=e._user,t._level=e._level,t._span=e._span,t._session=e._session,t._transactionName=e._transactionName,t._fingerprint=e._fingerprint,t._eventProcessors=te(e._eventProcessors),t._requestSession=e._requestSession),t},n.prototype.addScopeListener=function(e){this._scopeListeners.push(e)},n.prototype.addEventProcessor=function(e){return this._eventProcessors.push(e),this},n.prototype.setUser=function(e){return this._user=e||{},this._session&&this._session.update({user:e}),this._notifyScopeListeners(),this},n.prototype.getUser=function(){return this._user},n.prototype.getRequestSession=function(){return this._requestSession},n.prototype.setRequestSession=function(e){return this._requestSession=e,this},n.prototype.setTags=function(e){return this._tags=R(R({},this._tags),e),this._notifyScopeListeners(),this},n.prototype.setTag=function(e,t){var o;return this._tags=R(R({},this._tags),(o={},o[e]=t,o)),this._notifyScopeListeners(),this},n.prototype.setExtras=function(e){return this._extra=R(R({},this._extra),e),this._notifyScopeListeners(),this},n.prototype.setExtra=function(e,t){var o;return this._extra=R(R({},this._extra),(o={},o[e]=t,o)),this._notifyScopeListeners(),this},n.prototype.setFingerprint=function(e){return this._fingerprint=e,this._notifyScopeListeners(),this},n.prototype.setLevel=function(e){return this._level=e,this._notifyScopeListeners(),this},n.prototype.setTransactionName=function(e){return this._transactionName=e,this._notifyScopeListeners(),this},n.prototype.setTransaction=function(e){return this.setTransactionName(e)},n.prototype.setContext=function(e,t){var o;return t===null?delete this._contexts[e]:this._contexts=R(R({},this._contexts),(o={},o[e]=t,o)),this._notifyScopeListeners(),this},n.prototype.setSpan=function(e){return this._span=e,this._notifyScopeListeners(),this},n.prototype.getSpan=function(){return this._span},n.prototype.getTransaction=function(){var e=this.getSpan();return e&&e.transaction},n.prototype.setSession=function(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this},n.prototype.getSession=function(){return this._session},n.prototype.update=function(e){if(!e)return this;if(typeof e=="function"){var t=e(this);return t instanceof n?t:this}return e instanceof n?(this._tags=R(R({},this._tags),e._tags),this._extra=R(R({},this._extra),e._extra),this._contexts=R(R({},this._contexts),e._contexts),e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession)):ne(e)&&(e=e,this._tags=R(R({},this._tags),e.tags),this._extra=R(R({},this._extra),e.extra),this._contexts=R(R({},this._contexts),e.contexts),e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession)),this},n.prototype.clear=function(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this},n.prototype.addBreadcrumb=function(e,t){var o=typeof t=="number"?Math.min(t,cc):cc;if(o<=0)return this;var r=R({timestamp:(0,oe.yW)()},e);return this._breadcrumbs=te(this._breadcrumbs,[r]).slice(-o),this._notifyScopeListeners(),this},n.prototype.clearBreadcrumbs=function(){return this._breadcrumbs=[],this._notifyScopeListeners(),this},n.prototype.applyToEvent=function(e,t){if(this._extra&&Object.keys(this._extra).length&&(e.extra=R(R({},this._extra),e.extra)),this._tags&&Object.keys(this._tags).length&&(e.tags=R(R({},this._tags),e.tags)),this._user&&Object.keys(this._user).length&&(e.user=R(R({},this._user),e.user)),this._contexts&&Object.keys(this._contexts).length&&(e.contexts=R(R({},this._contexts),e.contexts)),this._level&&(e.level=this._level),this._transactionName&&(e.transaction=this._transactionName),this._span){e.contexts=R({trace:this._span.getTraceContext()},e.contexts);var o=this._span.transaction&&this._span.transaction.name;o&&(e.tags=R({transaction:o},e.tags))}return this._applyFingerprint(e),e.breadcrumbs=te(e.breadcrumbs||[],this._breadcrumbs),e.breadcrumbs=e.breadcrumbs.length>0?e.breadcrumbs:void 0,e.sdkProcessingMetadata=this._sdkProcessingMetadata,this._notifyEventProcessors(te(ac(),this._eventProcessors),e,t)},n.prototype.setSDKProcessingMetadata=function(e){return this._sdkProcessingMetadata=R(R({},this._sdkProcessingMetadata),e),this},n.prototype._notifyEventProcessors=function(e,t,o,r){var i=this;return r===void 0&&(r=0),new Nn(function(c,a){var s=e[r];if(t===null||typeof s!="function")c(t);else{var l=s(R({},t),o);fo(l)?l.then(function(A){return i._notifyEventProcessors(e,A,o,r+1).then(c)}).then(null,a):i._notifyEventProcessors(e,l,o,r+1).then(c).then(null,a)}})},n.prototype._notifyScopeListeners=function(){var e=this;this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(function(t){t(e)}),this._notifyingListeners=!1)},n.prototype._applyFingerprint=function(e){e.fingerprint=e.fingerprint?Array.isArray(e.fingerprint)?e.fingerprint:[e.fingerprint]:[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint},n}();function ac(){var n=(0,Z.R)();return n.__SENTRY__=n.__SENTRY__||{},n.__SENTRY__.globalEventProcessors=n.__SENTRY__.globalEventProcessors||[],n.__SENTRY__.globalEventProcessors}function Co(n){ac().push(n)}var Pg=function(){function n(e){this.errors=0,this.sid=ee(),this.duration=0,this.status="ok",this.init=!0,this.ignoreDuration=!1;var t=(0,oe.ph)();this.timestamp=t,this.started=t,e&&this.update(e)}return n.prototype.update=function(e){if(e===void 0&&(e={}),e.user&&(!this.ipAddress&&e.user.ip_address&&(this.ipAddress=e.user.ip_address),!this.did&&!e.did&&(this.did=e.user.id||e.user.email||e.user.username)),this.timestamp=e.timestamp||(0,oe.ph)(),e.ignoreDuration&&(this.ignoreDuration=e.ignoreDuration),e.sid&&(this.sid=e.sid.length===32?e.sid:ee()),e.init!==void 0&&(this.init=e.init),!this.did&&e.did&&(this.did=""+e.did),typeof e.started=="number"&&(this.started=e.started),this.ignoreDuration)this.duration=void 0;else if(typeof e.duration=="number")this.duration=e.duration;else{var t=this.timestamp-this.started;this.duration=t>=0?t:0}e.release&&(this.release=e.release),e.environment&&(this.environment=e.environment),!this.ipAddress&&e.ipAddress&&(this.ipAddress=e.ipAddress),!this.userAgent&&e.userAgent&&(this.userAgent=e.userAgent),typeof e.errors=="number"&&(this.errors=e.errors),e.status&&(this.status=e.status)},n.prototype.close=function(e){e?this.update({status:e}):this.status==="ok"?this.update({status:"exited"}):this.update()},n.prototype.toJSON=function(){return go({sid:""+this.sid,init:this.init,started:new Date(this.started*1e3).toISOString(),timestamp:new Date(this.timestamp*1e3).toISOString(),status:this.status,errors:this.errors,did:typeof this.did=="number"||typeof this.did=="string"?""+this.did:void 0,duration:this.duration,attrs:{release:this.release,environment:this.environment,ip_address:this.ipAddress,user_agent:this.userAgent}})},n}(),wo=4,Ig=100,ko=function(){function n(e,t,o){t===void 0&&(t=new rt),o===void 0&&(o=wo),this._version=o,this._stack=[{}],this.getStackTop().scope=t,e&&this.bindClient(e)}return n.prototype.isOlderThan=function(e){return this._version<e},n.prototype.bindClient=function(e){var t=this.getStackTop();t.client=e,e&&e.setupIntegrations&&e.setupIntegrations()},n.prototype.pushScope=function(){var e=rt.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:e}),e},n.prototype.popScope=function(){return this.getStack().length<=1?!1:!!this.getStack().pop()},n.prototype.withScope=function(e){var t=this.pushScope();try{e(t)}finally{this.popScope()}},n.prototype.getClient=function(){return this.getStackTop().client},n.prototype.getScope=function(){return this.getStackTop().scope},n.prototype.getStack=function(){return this._stack},n.prototype.getStackTop=function(){return this._stack[this._stack.length-1]},n.prototype.captureException=function(e,t){var o=this._lastEventId=t&&t.event_id?t.event_id:ee(),r=t;if(!t){var i=void 0;try{throw new Error("Sentry syntheticException")}catch(c){i=c}r={originalException:e,syntheticException:i}}return this._invokeClient("captureException",e,R(R({},r),{event_id:o})),o},n.prototype.captureMessage=function(e,t,o){var r=this._lastEventId=o&&o.event_id?o.event_id:ee(),i=o;if(!o){var c=void 0;try{throw new Error(e)}catch(a){c=a}i={originalException:e,syntheticException:c}}return this._invokeClient("captureMessage",e,t,R(R({},i),{event_id:r})),r},n.prototype.captureEvent=function(e,t){var o=t&&t.event_id?t.event_id:ee();return e.type!=="transaction"&&(this._lastEventId=o),this._invokeClient("captureEvent",e,R(R({},t),{event_id:o})),o},n.prototype.lastEventId=function(){return this._lastEventId},n.prototype.addBreadcrumb=function(e,t){var o=this.getStackTop(),r=o.scope,i=o.client;if(!(!r||!i)){var c=i.getOptions&&i.getOptions()||{},a=c.beforeBreadcrumb,s=a===void 0?null:a,l=c.maxBreadcrumbs,A=l===void 0?Ig:l;if(!(A<=0)){var E=(0,oe.yW)(),f=R({timestamp:E},e),g=s?et(function(){return s(f,t)}):f;g!==null&&r.addBreadcrumb(g,A)}}},n.prototype.setUser=function(e){var t=this.getScope();t&&t.setUser(e)},n.prototype.setTags=function(e){var t=this.getScope();t&&t.setTags(e)},n.prototype.setExtras=function(e){var t=this.getScope();t&&t.setExtras(e)},n.prototype.setTag=function(e,t){var o=this.getScope();o&&o.setTag(e,t)},n.prototype.setExtra=function(e,t){var o=this.getScope();o&&o.setExtra(e,t)},n.prototype.setContext=function(e,t){var o=this.getScope();o&&o.setContext(e,t)},n.prototype.configureScope=function(e){var t=this.getStackTop(),o=t.scope,r=t.client;o&&r&&e(o)},n.prototype.run=function(e){var t=lc(this);try{e(this)}finally{lc(t)}},n.prototype.getIntegration=function(e){var t=this.getClient();if(!t)return null;try{return t.getIntegration(e)}catch{return(0,M.c)()&&N.warn("Cannot retrieve integration "+e.id+" from the current Hub"),null}},n.prototype.startSpan=function(e){return this._callExtensionMethod("startSpan",e)},n.prototype.startTransaction=function(e,t){return this._callExtensionMethod("startTransaction",e,t)},n.prototype.traceHeaders=function(){return this._callExtensionMethod("traceHeaders")},n.prototype.captureSession=function(e){if(e===void 0&&(e=!1),e)return this.endSession();this._sendSessionUpdate()},n.prototype.endSession=function(){var e=this.getStackTop(),t=e&&e.scope,o=t&&t.getSession();o&&o.close(),this._sendSessionUpdate(),t&&t.setSession()},n.prototype.startSession=function(e){var t=this.getStackTop(),o=t.scope,r=t.client,i=r&&r.getOptions()||{},c=i.release,a=i.environment,s=(0,Z.R)(),l=(s.navigator||{}).userAgent,A=new Pg(R(R(R({release:c,environment:a},o&&{user:o.getUser()}),l&&{userAgent:l}),e));if(o){var E=o.getSession&&o.getSession();E&&E.status==="ok"&&E.update({status:"exited"}),this.endSession(),o.setSession(A)}return A},n.prototype._sendSessionUpdate=function(){var e=this.getStackTop(),t=e.scope,o=e.client;if(t){var r=t.getSession&&t.getSession();r&&o&&o.captureSession&&o.captureSession(r)}},n.prototype._invokeClient=function(e){for(var t,o=[],r=1;r<arguments.length;r++)o[r-1]=arguments[r];var i=this.getStackTop(),c=i.scope,a=i.client;a&&a[e]&&(t=a)[e].apply(t,te(o,[c]))},n.prototype._callExtensionMethod=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var r=me(),i=r.__SENTRY__;if(i&&i.extensions&&typeof i.extensions[e]=="function")return i.extensions[e].apply(this,t);(0,M.c)()&&N.warn("Extension method "+e+" couldn't be found, doing nothing.")},n}();function me(){var n=(0,Z.R)();return n.__SENTRY__=n.__SENTRY__||{extensions:{},hub:void 0},n}function lc(n){var e=me(),t=Fn(e);return So(e,n),t}function on(){var n=me();return(!sc(n)||Fn(n).isOlderThan(wo))&&So(n,new ko),(0,Rg.KV)()?Dg(n):Fn(n)}function B_(){isDebugBuild()&&logger.warn("Function `getActiveDomain` is deprecated and will be removed in a future version.");var n=me().__SENTRY__;return n&&n.extensions&&n.extensions.domain&&n.extensions.domain.active}function Dg(n){try{var e=me().__SENTRY__,t=e&&e.extensions&&e.extensions.domain&&e.extensions.domain.active;if(!t)return Fn(n);if(!sc(t)||Fn(t).isOlderThan(wo)){var o=Fn(n).getStackTop();So(t,new ko(o.client,rt.clone(o.scope)))}return Fn(t)}catch{return Fn(n)}}function sc(n){return!!(n&&n.__SENTRY__&&n.__SENTRY__.hub)}function Fn(n){return n&&n.__SENTRY__&&n.__SENTRY__.hub||(n.__SENTRY__=n.__SENTRY__||{},n.__SENTRY__.hub=new ko),n.__SENTRY__.hub}function So(n,e){return n?(n.__SENTRY__=n.__SENTRY__||{},n.__SENTRY__.hub=e,!0):!1}var bn;(function(n){n.Fatal="fatal",n.Error="error",n.Warning="warning",n.Log="log",n.Info="info",n.Debug="debug",n.Critical="critical"})(bn||(bn={}));var v_=null,Lg=50;function Mg(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=n.sort(function(o,r){return o[0]-r[0]}).map(function(o){return o[1]});return function(o,r){var i,c,a,s;r===void 0&&(r=0);var l=[];try{for(var A=Bn(o.split(`
`).slice(r)),E=A.next();!E.done;E=A.next()){var f=E.value;try{for(var g=(a=void 0,Bn(t)),B=g.next();!B.done;B=g.next()){var D=B.value,z=D(f);if(z){l.push(z);break}}}catch(q){a={error:q}}finally{try{B&&!B.done&&(s=g.return)&&s.call(g)}finally{if(a)throw a.error}}}}catch(q){i={error:q}}finally{try{E&&!E.done&&(c=A.return)&&c.call(A)}finally{if(i)throw i.error}}return Ng(l)}}function Ng(n){if(!n.length)return[];var e=n,t=e[0].function||"",o=e[e.length-1].function||"";return(t.indexOf("captureMessage")!==-1||t.indexOf("captureException")!==-1)&&(e=e.slice(1)),o.indexOf("sentryWrapped")!==-1&&(e=e.slice(0,-1)),e.slice(0,Lg).map(function(r){return cn(cn({},r),{filename:r.filename||e[0].filename,function:r.function||"?"})}).reverse()}var xo="<anonymous>";function Cn(n){try{return!n||typeof n!="function"?xo:n.name||xo}catch{return xo}}function F_(){try{return new ErrorEvent(""),!0}catch{return!1}}function C_(){try{return new DOMError(""),!0}catch{return!1}}function w_(){try{return new DOMException(""),!0}catch{return!1}}function it(){if(!("fetch"in(0,Z.R)()))return!1;try{return new Headers,new Request(""),new Response,!0}catch{return!1}}function Oo(n){return n&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString())}function jg(){if(!it())return!1;var n=(0,Z.R)();if(Oo(n.fetch))return!0;var e=!1,t=n.document;if(t&&typeof t.createElement=="function")try{var o=t.createElement("iframe");o.hidden=!0,t.head.appendChild(o),o.contentWindow&&o.contentWindow.fetch&&(e=Oo(o.contentWindow.fetch)),t.head.removeChild(o)}catch(r){(0,M.c)()&&N.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",r)}return e}function k_(){return"ReportingObserver"in getGlobalObject()}function Jg(){if(!it())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch{return!1}}function Ug(){var n=(0,Z.R)(),e=n.chrome,t=e&&e.app&&e.app.runtime,o="history"in n&&!!n.history.pushState&&!!n.history.replaceState;return!t&&o}var V=(0,Z.R)(),_e={},Ac={};function qg(n){if(!Ac[n])switch(Ac[n]=!0,n){case"console":zg();break;case"dom":Zg();break;case"xhr":Gg();break;case"fetch":Hg();break;case"history":Kg();break;case"error":Qg();break;case"unhandledrejection":np();break;default:(0,M.c)()&&N.warn("unknown instrumentation type:",n);return}}function wn(n,e){_e[n]=_e[n]||[],_e[n].push(e),qg(n)}function An(n,e){var t,o;if(!(!n||!_e[n]))try{for(var r=Bn(_e[n]||[]),i=r.next();!i.done;i=r.next()){var c=i.value;try{c(e)}catch(a){(0,M.c)()&&N.error(`Error while triggering instrumentation handler.
Type: `+n+`
Name: `+Cn(c)+`
Error:`,a)}}}catch(a){t={error:a}}finally{try{i&&!i.done&&(o=r.return)&&o.call(r)}finally{if(t)throw t.error}}}function zg(){"console"in V&&nc.forEach(function(n){n in V.console&&tn(V.console,n,function(e){return function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];An("console",{args:t,level:n}),e&&e.apply(V.console,t)}})})}function Hg(){jg()&&tn(V,"fetch",function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o={args:e,fetchData:{method:Wg(e),url:$g(e)},startTimestamp:Date.now()};return An("fetch",cn({},o)),n.apply(V,e).then(function(r){return An("fetch",cn(cn({},o),{endTimestamp:Date.now(),response:r})),r},function(r){throw An("fetch",cn(cn({},o),{endTimestamp:Date.now(),error:r})),r})}})}function Wg(n){return n===void 0&&(n=[]),"Request"in V&&vn(n[0],Request)&&n[0].method?String(n[0].method).toUpperCase():n[1]&&n[1].method?String(n[1].method).toUpperCase():"GET"}function $g(n){return n===void 0&&(n=[]),typeof n[0]=="string"?n[0]:"Request"in V&&vn(n[0],Request)?n[0].url:String(n[0])}function Gg(){if("XMLHttpRequest"in V){var n=XMLHttpRequest.prototype;tn(n,"open",function(e){return function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var r=this,i=t[1],c=r.__sentry_xhr__={method:Qn(t[0])?t[0].toUpperCase():t[0],url:t[1]};Qn(i)&&c.method==="POST"&&i.match(/sentry_key/)&&(r.__sentry_own_request__=!0);var a=function(){if(r.readyState===4){try{c.status_code=r.status}catch{}An("xhr",{args:t,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:r})}};return"onreadystatechange"in r&&typeof r.onreadystatechange=="function"?tn(r,"onreadystatechange",function(s){return function(){for(var l=[],A=0;A<arguments.length;A++)l[A]=arguments[A];return a(),s.apply(r,l)}}):r.addEventListener("readystatechange",a),e.apply(r,t)}}),tn(n,"send",function(e){return function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return this.__sentry_xhr__&&t[0]!==void 0&&(this.__sentry_xhr__.body=t[0]),An("xhr",{args:t,startTimestamp:Date.now(),xhr:this}),e.apply(this,t)}})}}var ct;function Kg(){if(!Ug())return;var n=V.onpopstate;V.onpopstate=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var r=V.location.href,i=ct;if(ct=r,An("history",{from:i,to:r}),n)try{return n.apply(this,t)}catch{}};function e(t){return function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];var i=o.length>2?o[2]:void 0;if(i){var c=ct,a=String(i);ct=a,An("history",{from:c,to:a})}return t.apply(this,o)}}tn(V.history,"pushState",e),tn(V.history,"replaceState",e)}var Yg=1e3,at,lt;function Vg(n,e){if(!n||n.type!==e.type)return!0;try{if(n.target!==e.target)return!0}catch{}return!1}function Xg(n){if(n.type!=="keypress")return!1;try{var e=n.target;if(!e||!e.tagName)return!0;if(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)return!1}catch{}return!0}function fc(n,e){return e===void 0&&(e=!1),function(t){if(!(!t||lt===t)&&!Xg(t)){var o=t.type==="keypress"?"input":t.type;at===void 0?(n({event:t,name:o,global:e}),lt=t):Vg(lt,t)&&(n({event:t,name:o,global:e}),lt=t),clearTimeout(at),at=V.setTimeout(function(){at=void 0},Yg)}}}function Zg(){if("document"in V){var n=An.bind(null,"dom"),e=fc(n,!0);V.document.addEventListener("click",e,!1),V.document.addEventListener("keypress",e,!1),["EventTarget","Node"].forEach(function(t){var o=V[t]&&V[t].prototype;!o||!o.hasOwnProperty||!o.hasOwnProperty("addEventListener")||(tn(o,"addEventListener",function(r){return function(i,c,a){if(i==="click"||i=="keypress")try{var s=this,l=s.__sentry_instrumentation_handlers__=s.__sentry_instrumentation_handlers__||{},A=l[i]=l[i]||{refCount:0};if(!A.handler){var E=fc(n);A.handler=E,r.call(this,i,E,a)}A.refCount+=1}catch{}return r.call(this,i,c,a)}}),tn(o,"removeEventListener",function(r){return function(i,c,a){if(i==="click"||i=="keypress")try{var s=this,l=s.__sentry_instrumentation_handlers__||{},A=l[i];A&&(A.refCount-=1,A.refCount<=0&&(r.call(this,i,A.handler,a),A.handler=void 0,delete l[i]),Object.keys(l).length===0&&delete s.__sentry_instrumentation_handlers__)}catch{}return r.call(this,i,c,a)}}))})}}var To=null;function Qg(){To=V.onerror,V.onerror=function(n,e,t,o,r){return An("error",{column:o,error:r,line:t,msg:n,url:e}),To?To.apply(this,arguments):!1}}var Ro=null;function np(){Ro=V.onunhandledrejection,V.onunhandledrejection=function(n){return An("unhandledrejection",n),Ro?Ro.apply(this,arguments):!0}}function ep(){var n=typeof WeakSet=="function",e=n?new WeakSet:[];function t(r){if(n)return e.has(r)?!0:(e.add(r),!1);for(var i=0;i<e.length;i++){var c=e[i];if(c===r)return!0}return e.push(r),!1}function o(r){if(n)e.delete(r);else for(var i=0;i<e.length;i++)if(e[i]===r){e.splice(i,1);break}}return[t,o]}function _n(n,e,t){e===void 0&&(e=1/0),t===void 0&&(t=1/0);try{return Ec("",n,e,t)}catch{return"**non-serializable**"}}function uc(n,e,t){e===void 0&&(e=3),t===void 0&&(t=100*1024);var o=_n(n,e);return rp(o)>t?uc(n,e-1,t):o}function Ec(n,e,t,o,r){t===void 0&&(t=1/0),o===void 0&&(o=1/0),r===void 0&&(r=ep());var i=de(r,2),c=i[0],a=i[1];if(t===0)return tp(e);if(e!=null&&typeof e.toJSON=="function")return e.toJSON();var s=dc(e,n);if(ge(s))return s;var l=Xi(e),A=Array.isArray(e)?[]:{};if(c(e))return"[Circular ~]";var E=0;for(var f in l)if(Object.prototype.hasOwnProperty.call(l,f)){if(E>=o){A[f]="[MaxProperties ~]";break}E+=1;var g=l[f];A[f]=Ec(f,g,t-1,o,r)}return a(e),A}function tp(n){if(typeof n=="string")return n;var e=Object.prototype.toString.call(n);if(e==="[object Object]")return"[Object]";if(e==="[object Array]")return"[Array]";var t=dc(n);return ge(t)?t:e}function dc(n,e){return e==="domain"&&n&&typeof n=="object"&&n._events?"[Domain]":e==="domainEmitter"?"[DomainEmitter]":typeof global!="undefined"&&n===global?"[Global]":typeof window!="undefined"&&n===window?"[Window]":typeof document!="undefined"&&n===document?"[Document]":pg(n)?"[SyntheticEvent]":typeof n=="number"&&n!==n?"[NaN]":n===void 0?"[undefined]":typeof n=="function"?"[Function: "+Cn(n)+"]":typeof n=="symbol"?"["+String(n)+"]":typeof n=="bigint"?"[BigInt: "+String(n)+"]":n}function op(n){return~-encodeURI(n).split(/%..|./).length}function rp(n){return op(JSON.stringify(n))}var ie="?",ip=10,cp=20,ap=30,lp=40,sp=50;function ye(n,e,t,o){var r={filename:n,function:e,in_app:!0};return t!==void 0&&(r.lineno=t),o!==void 0&&(r.colno=o),r}var Ap=/^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,fp=/\((\S*)(?::(\d+))(?::(\d+))\)/,up=function(n){var e=Ap.exec(n);if(e){var t=e[2]&&e[2].indexOf("eval")===0;if(t){var o=fp.exec(e[2]);o&&(e[2]=o[1],e[3]=o[2],e[4]=o[3])}var r=Xn(gc(e[1]||ie,e[2]),2),i=r[0],c=r[1];return ye(c,i,e[3]?+e[3]:void 0,e[4]?+e[4]:void 0)}},Ep=[ap,up],dp=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,gp=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,pp=function(n){var e,t=dp.exec(n);if(t){var o=t[3]&&t[3].indexOf(" > eval")>-1;if(o){var r=gp.exec(t[3]);r&&(t[1]=t[1]||"eval",t[3]=r[1],t[4]=r[2],t[5]="")}var i=t[3],c=t[1]||ie;return e=Xn(gc(c,i),2),c=e[0],i=e[1],ye(i,c,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}},bp=[sp,pp],hp=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,mp=function(n){var e=hp.exec(n);return e?ye(e[2],e[1]||ie,+e[3],e[4]?+e[4]:void 0):void 0},_p=[lp,mp],yp=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,Bp=function(n){var e=yp.exec(n);return e?ye(e[2],e[3]||ie,+e[1]):void 0},vp=[ip,Bp],Fp=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,Cp=function(n){var e=Fp.exec(n);return e?ye(e[5],e[3]||e[4]||ie,+e[1],+e[2]):void 0},wp=[cp,Cp],gc=function(n,e){var t=n.indexOf("safari-extension")!==-1,o=n.indexOf("safari-web-extension")!==-1;return t||o?[n.indexOf("@")!==-1?n.split("@")[0]:ie,t?"safari-extension:"+e:"safari-web-extension:"+e]:[n,e]};function pc(n){var e=Io(n),t={type:n&&n.name,value:Op(n)};return e.length&&(t.stacktrace={frames:e}),t.type===void 0&&t.value===""&&(t.value="Unrecoverable error caught"),t}function kp(n,e,t){var o={exception:{values:[{type:Ao(n)?n.constructor.name:t?"UnhandledRejection":"Error",value:"Non-Error "+(t?"promise rejection":"exception")+" captured with keys: "+_g(n)}]},extra:{__serialized__:uc(n)}};if(e){var r=Io(e);r.length&&(o.stacktrace={frames:r})}return o}function Po(n){return{exception:{values:[pc(n)]}}}function Io(n){var e=n.stacktrace||n.stack||"",t=xp(n);try{return Mg(vp,wp,Ep,_p,bp)(e,t)}catch{}return[]}var Sp=/Minified React error #\d+;/i;function xp(n){if(n){if(typeof n.framesToPop=="number")return n.framesToPop;if(Sp.test(n.message))return 1}return 0}function Op(n){var e=n&&n.message;return e?e.error&&typeof e.error.message=="string"?e.error.message:e:"No error message"}function Tp(n,e,t){var o=e&&e.syntheticException||void 0,r=Do(n,o,t);return he(r),r.level=bn.Error,e&&e.event_id&&(r.event_id=e.event_id),re(r)}function Rp(n,e,t,o){e===void 0&&(e=bn.Info);var r=t&&t.syntheticException||void 0,i=Lo(n,r,o);return i.level=e,t&&t.event_id&&(i.event_id=t.event_id),re(i)}function Do(n,e,t,o){var r;if($i(n)&&n.error){var i=n;return Po(i.error)}if(Gi(n)||dg(n)){var c=n;if("stack"in n)r=Po(n);else{var a=c.name||(Gi(c)?"DOMError":"DOMException"),s=c.message?a+": "+c.message:a;r=Lo(s,e,t),Bo(r,s)}return"code"in c&&(r.tags=Y(Y({},r.tags),{"DOMException.code":""+c.code})),r}if(Wi(n))return Po(n);if(ne(n)||Ao(n)){var l=n;return r=kp(l,e,o),he(r,{synthetic:!0}),r}return r=Lo(n,e,t),Bo(r,""+n,void 0),he(r,{synthetic:!0}),r}function Lo(n,e,t){var o={message:n};if(t&&e){var r=Io(e);r.length&&(o.stacktrace={frames:r})}return o}/*! *****************************************************************************
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
***************************************************************************** */var Mo=function(n,e){return Mo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])},Mo(n,e)};function S_(n,e){Mo(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var bc=function(){return bc=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},bc.apply(this,arguments)};function x_(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]]);return t}function O_(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(c=n[a])&&(i=(r<3?c(i):r>3?c(e,t,i):c(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i}function T_(n,e){return function(t,o){e(t,o,n)}}function R_(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function P_(n,e,t,o){function r(i){return i instanceof t?i:new t(function(c){c(i)})}return new(t||(t=Promise))(function(i,c){function a(A){try{l(o.next(A))}catch(E){c(E)}}function s(A){try{l(o.throw(A))}catch(E){c(E)}}function l(A){A.done?i(A.value):r(A.value).then(a,s)}l((o=o.apply(n,e||[])).next())})}function I_(n,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(l){return function(A){return s([l,A])}}function s(l){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(A){l=[6,A],r=0}finally{o=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function D_(n,e,t,o){o===void 0&&(o=t),n[o]=e[t]}function L_(n,e){for(var t in n)t!=="default"&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function hc(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],o=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&o>=n.length&&(n=void 0),{value:n&&n[o++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Pp(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var o=t.call(n),r,i=[],c;try{for(;(e===void 0||e-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(a){c={error:a}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(c)throw c.error}}return i}function Ip(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(Pp(arguments[e]));return n}function M_(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var o=Array(n),r=0,e=0;e<t;e++)for(var i=arguments[e],c=0,a=i.length;c<a;c++,r++)o[r]=i[c];return o}function st(n){return this instanceof st?(this.v=n,this):new st(n)}function N_(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(n,e||[]),r,i=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(f){o[f]&&(r[f]=function(g){return new Promise(function(B,D){i.push([f,g,B,D])>1||a(f,g)})})}function a(f,g){try{s(o[f](g))}catch(B){E(i[0][3],B)}}function s(f){f.value instanceof st?Promise.resolve(f.value.v).then(l,A):E(i[0][2],f)}function l(f){a("next",f)}function A(f){a("throw",f)}function E(f,g){f(g),i.shift(),i.length&&a(i[0][0],i[0][1])}}function j_(n){var e,t;return e={},o("next"),o("throw",function(r){throw r}),o("return"),e[Symbol.iterator]=function(){return this},e;function o(r,i){e[r]=n[r]?function(c){return(t=!t)?{value:st(n[r](c)),done:r==="return"}:i?i(c):c}:i}}function J_(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof hc=="function"?hc(n):n[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=n[i]&&function(c){return new Promise(function(a,s){c=n[i](c),r(a,s,c.done,c.value)})}}function r(i,c,a,s){Promise.resolve(s).then(function(l){i({value:l,done:a})},c)}}function U_(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}function q_(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}function z_(n){return n&&n.__esModule?n:{default:n}}function H_(n,e){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}function W_(n,e,t){if(!e.has(n))throw new TypeError("attempted to set private field on non-instance");return e.set(n,t),t}function ln(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var o=on();if(o&&o[n])return o[n].apply(o,Ip(e));throw new Error("No hub defined or "+n+" was not found on the hub, please open a bug report.")}function mc(n,e){var t=new Error("Sentry syntheticException");return ln("captureException",n,{captureContext:e,originalException:n,syntheticException:t})}function $_(n,e){var t=new Error(n),o=typeof e=="string"?e:void 0,r=typeof e!="string"?{captureContext:e}:void 0;return ln("captureMessage",n,o,__assign({originalException:n,syntheticException:t},r))}function G_(n){return ln("captureEvent",n)}function K_(n){ln("configureScope",n)}function Y_(n){ln("addBreadcrumb",n)}function V_(n,e){ln("setContext",n,e)}function X_(n){ln("setExtras",n)}function Z_(n){ln("setTags",n)}function Q_(n,e){ln("setExtra",n,e)}function ny(n,e){ln("setTag",n,e)}function ey(n){ln("setUser",n)}function Dp(n){ln("withScope",n)}function ty(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];ln.apply(void 0,__spread(["_invokeClient",n],e))}function oy(n,e){return ln("startTransaction",__assign({},n),e)}var Lp=Object.setPrototypeOf||({__proto__:[]}instanceof Array?Mp:Np);function Mp(n,e){return n.__proto__=e,n}function Np(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(n,t)||(n[t]=e[t]);return n}var Q=function(n){Eg(e,n);function e(t){var o=this.constructor,r=n.call(this,t)||this;return r.message=t,r.name=o.prototype.constructor.name,Lp(r,o.prototype),r}return e}(Error),jp=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;function Jp(n){return n==="http"||n==="https"}function Be(n,e){e===void 0&&(e=!1);var t=n.host,o=n.path,r=n.pass,i=n.port,c=n.projectId,a=n.protocol,s=n.publicKey;return a+"://"+s+(e&&r?":"+r:"")+("@"+t+(i?":"+i:"")+"/"+(o&&o+"/")+c)}function Up(n){var e=jp.exec(n);if(!e)throw new Q("Invalid Sentry Dsn: "+n);var t=de(e.slice(1),6),o=t[0],r=t[1],i=t[2],c=i===void 0?"":i,a=t[3],s=t[4],l=s===void 0?"":s,A=t[5],E="",f=A,g=f.split("/");if(g.length>1&&(E=g.slice(0,-1).join("/"),f=g.pop()),f){var B=f.match(/^\d+/);B&&(f=B[0])}return _c({host:a,pass:c,path:E,projectId:f,port:l,protocol:o,publicKey:r})}function _c(n){return"user"in n&&!("publicKey"in n)&&(n.publicKey=n.user),{user:n.publicKey||"",protocol:n.protocol,publicKey:n.publicKey||"",pass:n.pass||"",host:n.host,port:n.port||"",path:n.path||"",projectId:n.projectId}}function qp(n){if((0,M.c)()){var e=n.port,t=n.projectId,o=n.protocol,r=["protocol","publicKey","host","projectId"];if(r.forEach(function(i){if(!n[i])throw new Q("Invalid Sentry Dsn: "+i+" missing")}),!t.match(/^\d+$/))throw new Q("Invalid Sentry Dsn: Invalid projectId "+t);if(!Jp(o))throw new Q("Invalid Sentry Dsn: Invalid protocol "+o);if(e&&isNaN(parseInt(e,10)))throw new Q("Invalid Sentry Dsn: Invalid port "+e);return!0}}function At(n){var e=typeof n=="string"?Up(n):_c(n);return qp(e),e}var yc="7",ry=function(){function n(e,t,o){t===void 0&&(t={}),this.dsn=e,this._dsnObject=At(e),this.metadata=t,this._tunnel=o}return n.prototype.getDsn=function(){return this._dsnObject},n.prototype.forceEnvelope=function(){return!!this._tunnel},n.prototype.getBaseApiEndpoint=function(){return jo(this._dsnObject)},n.prototype.getStoreEndpoint=function(){return Fc(this._dsnObject)},n.prototype.getStoreEndpointWithUrlEncodedAuth=function(){return Jo(this._dsnObject)},n.prototype.getEnvelopeEndpointWithUrlEncodedAuth=function(){return ft(this._dsnObject,this._tunnel)},n}();function No(n,e,t){return{initDsn:n,metadata:e||{},dsn:At(n),tunnel:t}}function jo(n){var e=n.protocol?n.protocol+":":"",t=n.port?":"+n.port:"";return e+"//"+n.host+t+(n.path?"/"+n.path:"")+"/api/"}function Bc(n,e){return""+jo(n)+n.projectId+"/"+e+"/"}function vc(n){return mg({sentry_key:n.publicKey,sentry_version:yc})}function Fc(n){return Bc(n,"store")}function Jo(n){return Fc(n)+"?"+vc(n)}function zp(n){return Bc(n,"envelope")}function ft(n,e){return e||zp(n)+"?"+vc(n)}function iy(n,e,t){var o=["Sentry sentry_version="+yc];return o.push("sentry_client="+e+"/"+t),o.push("sentry_key="+n.publicKey),n.pass&&o.push("sentry_secret="+n.pass),{"Content-Type":"application/json","X-Sentry-Auth":o.join(", ")}}function Hp(n,e){var t=At(n),o=jo(t)+"embed/error-page/",r="dsn="+Be(t);for(var i in e)if(i!=="dsn")if(i==="user"){if(!e.user)continue;e.user.name&&(r+="&name="+encodeURIComponent(e.user.name)),e.user.email&&(r+="&email="+encodeURIComponent(e.user.email))}else r+="&"+encodeURIComponent(i)+"="+encodeURIComponent(e[i]);return o+"?"+r}var ut=(0,Z.R)(),Uo=0;function Cc(){return Uo>0}function Wp(){Uo+=1,setTimeout(function(){Uo-=1})}function ce(n,e,t){if(e===void 0&&(e={}),typeof n!="function")return n;try{var o=n.__sentry_wrapped__;if(o)return o;if(Eo(n))return n}catch{return n}var r=function(){var a=Array.prototype.slice.call(arguments);try{t&&typeof t=="function"&&t.apply(this,arguments);var s=a.map(function(l){return ce(l,e)});return n.apply(this,s)}catch(l){throw Wp(),Dp(function(A){A.addEventProcessor(function(E){return e.mechanism&&(Bo(E,void 0,void 0),he(E,e.mechanism)),E.extra=Y(Y({},E.extra),{arguments:a}),E}),mc(l)}),l}};try{for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])}catch{}Vi(r,n),Qe(n,"__sentry_wrapped__",r);try{var c=Object.getOwnPropertyDescriptor(r,"name");c.configurable&&Object.defineProperty(r,"name",{get:function(){return n.name}})}catch{}return r}function $p(n){if(n===void 0&&(n={}),!!ut.document){if(!n.eventId){(0,M.c)()&&N.error("Missing eventId option in showReportDialog call");return}if(!n.dsn){(0,M.c)()&&N.error("Missing dsn option in showReportDialog call");return}var e=ut.document.createElement("script");e.async=!0,e.src=Hp(n.dsn,n),n.onLoad&&(e.onload=n.onLoad);var t=ut.document.head||ut.document.body;t&&t.appendChild(e)}}var Et=function(){function n(e){this.name=n.id,this._installFunc={onerror:Gp,onunhandledrejection:Kp},this._options=Y({onerror:!0,onunhandledrejection:!0},e)}return n.prototype.setupOnce=function(){Error.stackTraceLimit=50;var e=this._options;for(var t in e){var o=this._installFunc[t];o&&e[t]&&(Xp(t),o(),this._installFunc[t]=void 0)}},n.id="GlobalHandlers",n}();function Gp(){wn("error",function(n){var e=Xn(Sc(),2),t=e[0],o=e[1];if(t.getIntegration(Et)){var r=n.msg,i=n.url,c=n.line,a=n.column,s=n.error;if(!(Cc()||s&&s.__sentry_own_request__)){var l=s===void 0&&Qn(r)?Vp(r,i,c,a):wc(Do(s||r,void 0,o,!1),i,c,a);l.level=bn.Error,kc(t,s,l,"onerror")}}})}function Kp(){wn("unhandledrejection",function(n){var e=Xn(Sc(),2),t=e[0],o=e[1];if(t.getIntegration(Et)){var r=n;try{"reason"in n?r=n.reason:"detail"in n&&"reason"in n.detail&&(r=n.detail.reason)}catch{}if(Cc()||r&&r.__sentry_own_request__)return!0;var i=ge(r)?Yp(r):Do(r,void 0,o,!0);i.level=bn.Error,kc(t,r,i,"onunhandledrejection")}})}function Yp(n){return{exception:{values:[{type:"UnhandledRejection",value:"Non-Error promise rejection captured with value: "+String(n)}]}}}function Vp(n,e,t,o){var r=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,i=$i(n)?n.message:n,c="Error",a=i.match(r);a&&(c=a[1],i=a[2]);var s={exception:{values:[{type:c,value:i}]}};return wc(s,e,t,o)}function wc(n,e,t,o){var r=n.exception=n.exception||{},i=r.values=r.values||[],c=i[0]=i[0]||{},a=c.stacktrace=c.stacktrace||{},s=a.frames=a.frames||[],l=isNaN(parseInt(o,10))?void 0:o,A=isNaN(parseInt(t,10))?void 0:t,E=Qn(e)&&e.length>0?e:hg();return s.length===0&&s.push({colno:l,filename:E,function:"?",in_app:!0,lineno:A}),n}function Xp(n){(0,M.c)()&&N.log("Global Handler attached: "+n)}function kc(n,e,t,o){he(t,{handled:!1,type:o}),n.captureEvent(t,{originalException:e})}function Sc(){var n=on(),e=n.getClient(),t=e&&e.getOptions().attachStacktrace;return[n,t]}var Zp=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],xc=function(){function n(e){this.name=n.id,this._options=Y({XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0},e)}return n.prototype.setupOnce=function(){var e=(0,Z.R)();this._options.setTimeout&&tn(e,"setTimeout",Oc),this._options.setInterval&&tn(e,"setInterval",Oc),this._options.requestAnimationFrame&&tn(e,"requestAnimationFrame",Qp),this._options.XMLHttpRequest&&"XMLHttpRequest"in e&&tn(XMLHttpRequest.prototype,"send",nb);var t=this._options.eventTarget;if(t){var o=Array.isArray(t)?t:Zp;o.forEach(eb)}},n.id="TryCatch",n}();function Oc(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=e[0];return e[0]=ce(o,{mechanism:{data:{function:Cn(n)},handled:!0,type:"instrument"}}),n.apply(this,e)}}function Qp(n){return function(e){return n.apply(this,[ce(e,{mechanism:{data:{function:"requestAnimationFrame",handler:Cn(n)},handled:!0,type:"instrument"}})])}}function nb(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=this,r=["onload","onerror","onprogress","onreadystatechange"];return r.forEach(function(i){i in o&&typeof o[i]=="function"&&tn(o,i,function(c){var a={mechanism:{data:{function:i,handler:Cn(c)},handled:!0,type:"instrument"}},s=Eo(c);return s&&(a.mechanism.data.handler=Cn(s)),ce(c,a)})}),n.apply(this,e)}}function eb(n){var e=(0,Z.R)(),t=e[n]&&e[n].prototype;!t||!t.hasOwnProperty||!t.hasOwnProperty("addEventListener")||(tn(t,"addEventListener",function(o){return function(r,i,c){try{typeof i.handleEvent=="function"&&(i.handleEvent=ce(i.handleEvent.bind(i),{mechanism:{data:{function:"handleEvent",handler:Cn(i),target:n},handled:!0,type:"instrument"}}))}catch{}return o.apply(this,[r,ce(i,{mechanism:{data:{function:"addEventListener",handler:Cn(i),target:n},handled:!0,type:"instrument"}}),c])}}),tn(t,"removeEventListener",function(o){return function(r,i,c){var a=i;try{var s=a&&a.__sentry_wrapped__;s&&o.call(this,r,s,c)}catch{}return o.call(this,r,a,c)}}))}var tb=["fatal","error","warning","log","info","debug","critical"];function ob(n){return tb.indexOf(n)!==-1}function rb(n){return n==="warn"?bn.Warning:ob(n)?n:bn.Log}var qo=function(){function n(e){this.name=n.id,this._options=Y({console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0},e)}return n.prototype.addSentryBreadcrumb=function(e){this._options.sentry&&on().addBreadcrumb({category:"sentry."+(e.type==="transaction"?"transaction":"event"),event_id:e.event_id,level:e.level,message:Mn(e)},{event:e})},n.prototype.setupOnce=function(){this._options.console&&wn("console",cb),this._options.dom&&wn("dom",ib(this._options.dom)),this._options.xhr&&wn("xhr",ab),this._options.fetch&&wn("fetch",lb),this._options.history&&wn("history",sb)},n.id="Breadcrumbs",n}();function ib(n){function e(t){var o,r=typeof n=="object"?n.serializeAttribute:void 0;typeof r=="string"&&(r=[r]);try{o=t.event.target?Ze(t.event.target,r):Ze(t.event,r)}catch{o="<unknown>"}o.length!==0&&on().addBreadcrumb({category:"ui."+t.name,message:o},{event:t.event,name:t.name,global:t.global})}return e}function cb(n){var e={category:"console",data:{arguments:n.args,logger:"console"},level:rb(n.level),message:Yi(n.args," ")};if(n.level==="assert")if(n.args[0]===!1)e.message="Assertion failed: "+(Yi(n.args.slice(1)," ")||"console.assert"),e.data.arguments=n.args.slice(1);else return;on().addBreadcrumb(e,{input:n.args,level:n.level})}function ab(n){if(n.endTimestamp){if(n.xhr.__sentry_own_request__)return;var e=n.xhr.__sentry_xhr__||{},t=e.method,o=e.url,r=e.status_code,i=e.body;on().addBreadcrumb({category:"xhr",data:{method:t,url:o,status_code:r},type:"http"},{xhr:n.xhr,input:i});return}}function lb(n){n.endTimestamp&&(n.fetchData.url.match(/sentry_key/)&&n.fetchData.method==="POST"||(n.error?on().addBreadcrumb({category:"fetch",data:n.fetchData,level:bn.Error,type:"http"},{data:n.error,input:n.args}):on().addBreadcrumb({category:"fetch",data:Y(Y({},n.fetchData),{status_code:n.response.status}),type:"http"},{input:n.args,response:n.response})))}function sb(n){var e=(0,Z.R)(),t=n.from,o=n.to,r=yo(e.location.href),i=yo(t),c=yo(o);i.path||(i=r),r.protocol===c.protocol&&r.host===c.host&&(o=c.relative),r.protocol===i.protocol&&r.host===i.host&&(t=i.relative),on().addBreadcrumb({category:"navigation",data:{from:t,to:o}})}var Ab="cause",fb=5,Tc=function(){function n(e){e===void 0&&(e={}),this.name=n.id,this._key=e.key||Ab,this._limit=e.limit||fb}return n.prototype.setupOnce=function(){Co(function(e,t){var o=on().getIntegration(n);return o?ub(o._key,o._limit,e,t):e})},n.id="LinkedErrors",n}();function ub(n,e,t,o){if(!t.exception||!t.exception.values||!o||!vn(o.originalException,Error))return t;var r=Rc(e,o.originalException,n);return t.exception.values=zi(r,t.exception.values),t}function Rc(n,e,t,o){if(o===void 0&&(o=[]),!vn(e[t],Error)||o.length+1>=n)return o;var r=pc(e[t]);return Rc(n,e[t],t,zi([r],o))}var jn=(0,Z.R)(),Pc=function(){function n(){this.name=n.id}return n.prototype.setupOnce=function(){Co(function(e){if(on().getIntegration(n)){if(!jn.navigator&&!jn.location&&!jn.document)return e;var t=e.request&&e.request.url||jn.location&&jn.location.href,o=(jn.document||{}).referrer,r=(jn.navigator||{}).userAgent,i=Y(Y(Y({},e.request&&e.request.headers),o&&{Referer:o}),r&&{"User-Agent":r}),c=Y(Y({},t&&{url:t}),{headers:i});return Y(Y({},e),{request:c})}return e})},n.id="UserAgent",n}(),Ic=function(){function n(){this.name=n.id}return n.prototype.setupOnce=function(e,t){e(function(o){var r=t().getIntegration(n);if(r){try{if(Eb(o,r._previousEvent))return(0,M.c)()&&N.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{return r._previousEvent=o}return r._previousEvent=o}return o})},n.id="Dedupe",n}();function Eb(n,e){return e?!!(db(n,e)||gb(n,e)):!1}function db(n,e){var t=n.message,o=e.message;return!(!t&&!o||t&&!o||!t&&o||t!==o||!Lc(n,e)||!Dc(n,e))}function gb(n,e){var t=Mc(e),o=Mc(n);return!(!t||!o||t.type!==o.type||t.value!==o.value||!Lc(n,e)||!Dc(n,e))}function Dc(n,e){var t=Nc(n),o=Nc(e);if(!t&&!o)return!0;if(t&&!o||!t&&o||(t=t,o=o,o.length!==t.length))return!1;for(var r=0;r<o.length;r++){var i=o[r],c=t[r];if(i.filename!==c.filename||i.lineno!==c.lineno||i.colno!==c.colno||i.function!==c.function)return!1}return!0}function Lc(n,e){var t=n.fingerprint,o=e.fingerprint;if(!t&&!o)return!0;if(t&&!o||!t&&o)return!1;t=t,o=o;try{return t.join("")===o.join("")}catch{return!1}}function Mc(n){return n.exception&&n.exception.values&&n.exception.values[0]}function Nc(n){var e=n.exception;if(e)try{return e.values[0].stacktrace.frames}catch{return}else if(n.stacktrace)return n.stacktrace.frames}var jc={},zo=(0,Z.R)();zo.Sentry&&zo.Sentry.Integrations&&(jc=zo.Sentry.Integrations);var pb=Y(Y(Y({},jc),h),d);const Ho="sentry-ipc";var ve;(function(n){n.PING="sentry-electron.ping",n.EVENT="sentry-electron.event",n.SCOPE="sentry-electron.scope"})(ve||(ve={}));var cy=P(4845);function bb(n){for(const e of n.spans||[])delete e.spanRecorder,delete e.transaction}function ay(n,e){bb(e);const t=deepMerge(n,e);return(e.spans||n.spans)&&(t.spans=e.spans||n.spans),Object.assign(Object.assign({},t),{sdk:Object.assign(Object.assign({},n.sdk),e.sdk)})}var Jc;(function(n){n[n.Classic=1]="Classic",n[n.Protocol=2]="Protocol",n[n.Both=3]="Both"})(Jc||(Jc={}));function hb(n){const e=typeof window!="undefined"?"renderer":"main";if(e!==n)throw new Error(`This code is intended to run in the Electron ${n} process but is currently running in the ${e} process.
This can occur if a bundler picks the wrong entry point.

You can work around this by using a relative import:
import * as Sentry from '@sentry/electron/${e}';`)}function mb(){return window.__SENTRY_IPC__?window.__SENTRY_IPC__:(N.log("IPC was not configured in preload script, falling back to custom protocol and fetch"),fetch(`${Ho}://${ve.PING}`).catch(()=>console.error(`Sentry SDK failed to establish connection with the Electron main process.
 - Ensure you have initialized the SDK in the main process
 - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
 - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`)),{sendScope:n=>{fetch(`${Ho}://${ve.SCOPE}/sentry_key`,{method:"POST",body:n}).catch(()=>{})},sendEvent:n=>{fetch(`${Ho}://${ve.EVENT}/sentry_key`,{method:"POST",body:n}).catch(()=>{})}})}let Wo;function Uc(){return Wo||(Wo=mb()),Wo}class Fe{constructor(){this.name=Fe.id}setupOnce(){this._setupScopeListener()}_setupScopeListener(){const e=on().getScope();if(e){const t=Uc();e.addScopeListener(o=>{t.sendScope(JSON.stringify(_n(o,20,2e3))),e.clearBreadcrumbs()})}}}Fe.id="ScopeToMain";class Ce{constructor(){this.name=Ce.id}setupOnce(e){const t=Uc();e(o=>(o.breadcrumbs=o.breadcrumbs||[],delete o.environment,t.sendEvent(JSON.stringify(_n(o,20,2e3))),null))}}Ce.id="EventToMain";function _b(n,e){e.debug===!0&&((0,M.c)()?N.enable():console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));var t=on(),o=t.getScope();o&&o.update(e.initialScope);var r=new n(e);t.bindClient(r)}var qc="6.19.2",zc=[];function Hc(n){return n.reduce(function(e,t){return e.every(function(o){return t.name!==o.name})&&e.push(t),e},[])}function yb(n){var e=n.defaultIntegrations&&pn(n.defaultIntegrations)||[],t=n.integrations,o=pn(Hc(e));Array.isArray(t)?o=pn(o.filter(function(c){return t.every(function(a){return a.name!==c.name})}),Hc(t)):typeof t=="function"&&(o=t(o),o=Array.isArray(o)?o:[o]);var r=o.map(function(c){return c.name}),i="Debug";return r.indexOf(i)!==-1&&o.push.apply(o,pn(o.splice(r.indexOf(i),1))),o}function Bb(n){zc.indexOf(n.name)===-1&&(n.setupOnce(Co,on),zc.push(n.name),(0,M.c)()&&N.log("Integration installed: "+n.name))}function vb(n){var e={};return yb(n).forEach(function(t){e[t.name]=t,Bb(t)}),Qe(e,"initialized",!0),e}var Wc="Not capturing exception because it's already been captured.",Fb=function(){function n(e,t){this._integrations={},this._numProcessing=0,this._backend=new e(t),this._options=t,t.dsn&&(this._dsn=At(t.dsn))}return n.prototype.captureException=function(e,t,o){var r=this;if(tc(e)){(0,M.c)()&&N.log(Wc);return}var i=t&&t.event_id;return this._process(this._getBackend().eventFromException(e,t).then(function(c){return r._captureEvent(c,t,o)}).then(function(c){i=c})),i},n.prototype.captureMessage=function(e,t,o,r){var i=this,c=o&&o.event_id,a=ge(e)?this._getBackend().eventFromMessage(String(e),t,o):this._getBackend().eventFromException(e,o);return this._process(a.then(function(s){return i._captureEvent(s,o,r)}).then(function(s){c=s})),c},n.prototype.captureEvent=function(e,t,o){if(t&&t.originalException&&tc(t.originalException)){(0,M.c)()&&N.log(Wc);return}var r=t&&t.event_id;return this._process(this._captureEvent(e,t,o).then(function(i){r=i})),r},n.prototype.captureSession=function(e){if(!this._isEnabled()){(0,M.c)()&&N.warn("SDK not enabled, will not capture session.");return}typeof e.release!="string"?(0,M.c)()&&N.warn("Discarded session because of missing or non-string release"):(this._sendSession(e),e.update({init:!1}))},n.prototype.getDsn=function(){return this._dsn},n.prototype.getOptions=function(){return this._options},n.prototype.getTransport=function(){return this._getBackend().getTransport()},n.prototype.flush=function(e){var t=this;return this._isClientDoneProcessing(e).then(function(o){return t.getTransport().close(e).then(function(r){return o&&r})})},n.prototype.close=function(e){var t=this;return this.flush(e).then(function(o){return t.getOptions().enabled=!1,o})},n.prototype.setupIntegrations=function(){this._isEnabled()&&!this._integrations.initialized&&(this._integrations=vb(this._options))},n.prototype.getIntegration=function(e){try{return this._integrations[e.id]||null}catch{return(0,M.c)()&&N.warn("Cannot retrieve integration "+e.id+" from the current Client"),null}},n.prototype._updateSessionFromEvent=function(e,t){var o,r,i=!1,c=!1,a=t.exception&&t.exception.values;if(a){c=!0;try{for(var s=bo(a),l=s.next();!l.done;l=s.next()){var A=l.value,E=A.mechanism;if(E&&E.handled===!1){i=!0;break}}}catch(B){o={error:B}}finally{try{l&&!l.done&&(r=s.return)&&r.call(s)}finally{if(o)throw o.error}}}var f=e.status==="ok",g=f&&e.errors===0||f&&i;g&&(e.update(X(X({},i&&{status:"crashed"}),{errors:e.errors||Number(c||i)})),this.captureSession(e))},n.prototype._sendSession=function(e){this._getBackend().sendSession(e)},n.prototype._isClientDoneProcessing=function(e){var t=this;return new Nn(function(o){var r=0,i=1,c=setInterval(function(){t._numProcessing==0?(clearInterval(c),o(!0)):(r+=i,e&&r>=e&&(clearInterval(c),o(!1)))},i)})},n.prototype._getBackend=function(){return this._backend},n.prototype._isEnabled=function(){return this.getOptions().enabled!==!1&&this._dsn!==void 0},n.prototype._prepareEvent=function(e,t,o){var r=this,i=this.getOptions(),c=i.normalizeDepth,a=c===void 0?3:c,s=i.normalizeMaxBreadth,l=s===void 0?1e3:s,A=X(X({},e),{event_id:e.event_id||(o&&o.event_id?o.event_id:ee()),timestamp:e.timestamp||(0,oe.yW)()});this._applyClientOptions(A),this._applyIntegrationsMetadata(A);var E=t;o&&o.captureContext&&(E=rt.clone(E).update(o.captureContext));var f=re(A);return E&&(f=E.applyToEvent(A,o)),f.then(function(g){return g&&(g.sdkProcessingMetadata=X(X({},g.sdkProcessingMetadata),{normalizeDepth:_n(a)})),typeof a=="number"&&a>0?r._normalizeEvent(g,a,l):g})},n.prototype._normalizeEvent=function(e,t,o){if(!e)return null;var r=X(X(X(X(X({},e),e.breadcrumbs&&{breadcrumbs:e.breadcrumbs.map(function(i){return X(X({},i),i.data&&{data:_n(i.data,t,o)})})}),e.user&&{user:_n(e.user,t,o)}),e.contexts&&{contexts:_n(e.contexts,t,o)}),e.extra&&{extra:_n(e.extra,t,o)});return e.contexts&&e.contexts.trace&&(r.contexts.trace=e.contexts.trace),e.sdkProcessingMetadata=X(X({},e.sdkProcessingMetadata),{baseClientNormalized:!0}),r},n.prototype._applyClientOptions=function(e){var t=this.getOptions(),o=t.environment,r=t.release,i=t.dist,c=t.maxValueLength,a=c===void 0?250:c;"environment"in e||(e.environment="environment"in t?o:"production"),e.release===void 0&&r!==void 0&&(e.release=r),e.dist===void 0&&i!==void 0&&(e.dist=i),e.message&&(e.message=pe(e.message,a));var s=e.exception&&e.exception.values&&e.exception.values[0];s&&s.value&&(s.value=pe(s.value,a));var l=e.request;l&&l.url&&(l.url=pe(l.url,a))},n.prototype._applyIntegrationsMetadata=function(e){var t=Object.keys(this._integrations);t.length>0&&(e.sdk=e.sdk||{},e.sdk.integrations=pn(e.sdk.integrations||[],t))},n.prototype._sendEvent=function(e){this._getBackend().sendEvent(e)},n.prototype._captureEvent=function(e,t,o){return this._processEvent(e,t,o).then(function(r){return r.event_id},function(r){(0,M.c)()&&N.error(r)})},n.prototype._processEvent=function(e,t,o){var r=this,i=this.getOptions(),c=i.beforeSend,a=i.sampleRate,s=this.getTransport();function l(E,f){s.recordLostEvent&&s.recordLostEvent(E,f)}if(!this._isEnabled())return Fo(new Q("SDK not enabled, will not capture event."));var A=e.type==="transaction";return!A&&typeof a=="number"&&Math.random()>a?(l("sample_rate","event"),Fo(new Q("Discarding event because it's not included in the random sample (sampling rate = "+a+")"))):this._prepareEvent(e,o,t).then(function(E){if(E===null)throw l("event_processor",e.type||"event"),new Q("An event processor returned null, will not send event.");var f=t&&t.data&&t.data.__sentry__===!0;if(f||A||!c)return E;var g=c(E,t);return Cb(g)}).then(function(E){if(E===null)throw l("before_send",e.type||"event"),new Q("`beforeSend` returned `null`, will not send event.");var f=o&&o.getSession&&o.getSession();return!A&&f&&r._updateSessionFromEvent(f,E),r._sendEvent(E),E}).then(null,function(E){throw E instanceof Q?E:(r.captureException(E,{data:{__sentry__:!0},originalException:E}),new Q(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: `+E))})},n.prototype._process=function(e){var t=this;this._numProcessing+=1,e.then(function(o){return t._numProcessing-=1,o},function(o){return t._numProcessing-=1,o})},n}();function Cb(n){var e="`beforeSend` method has to return `null` or a valid event.";if(fo(n))return n.then(function(t){if(!(ne(t)||t===null))throw new Q(e);return t},function(t){throw new Q("beforeSend rejected with "+t)});if(!(ne(n)||n===null))throw new Q(e);return n}function dt(n,e){return e===void 0&&(e=[]),[n,e]}function ly(n,e){var t=__read(n,2),o=t[0],r=t[1];return[o,__spread(r,[e])]}function sy(n){var e=__read(n,2),t=__read(e[1],1),o=__read(t[0],1),r=o[0];return r.type}function $o(n){var e=de(n,2),t=e[0],o=e[1],r=JSON.stringify(t);return o.reduce(function(i,c){var a=de(c,2),s=a[0],l=a[1],A=ge(l)?String(l):JSON.stringify(l);return i+`
`+JSON.stringify(s)+`
`+A},r)}function Go(n){if(!(!n.metadata||!n.metadata.sdk)){var e=n.metadata.sdk,t=e.name,o=e.version;return{name:t,version:o}}}function wb(n,e){return e&&(n.sdk=n.sdk||{},n.sdk.name=n.sdk.name||e.name,n.sdk.version=n.sdk.version||e.version,n.sdk.integrations=pn(n.sdk.integrations||[],e.integrations||[]),n.sdk.packages=pn(n.sdk.packages||[],e.packages||[])),n}function $c(n,e){var t=Go(e),o=X(X({sent_at:new Date().toISOString()},t&&{sdk:t}),!!e.tunnel&&{dsn:Be(e.dsn)}),r="aggregates"in n?"sessions":"session",i=[{type:r},n],c=dt(o,[i]);return[c,r]}function kb(n,e){var t=ho($c(n,e),2),o=t[0],r=t[1];return{body:$o(o),type:r,url:ft(e.dsn,e.tunnel)}}function Sb(n,e){var t=Go(e),o=n.type||"event",r=(n.sdkProcessingMetadata||{}).transactionSampling,i=r||{},c=i.method,a=i.rate,s=X(X({event_id:n.event_id,sent_at:new Date().toISOString()},t&&{sdk:t}),!!e.tunnel&&{dsn:Be(e.dsn)}),l=[{type:o,sample_rates:[{id:c,rate:a}]},n];return dt(s,[l])}function xb(n,e){var t=Go(e),o=n.type||"event",r=o==="transaction"||!!e.tunnel,i=(n.sdkProcessingMetadata||{}).transactionSampling,c=i||{},a=c.method,s=c.rate;wb(n,e.metadata.sdk),n.tags=n.tags||{},n.extra=n.extra||{},n.sdkProcessingMetadata&&n.sdkProcessingMetadata.baseClientNormalized||(n.tags.skippedNormalization=!0,n.extra.normalizeDepth=n.sdkProcessingMetadata?n.sdkProcessingMetadata.normalizeDepth:"unset"),delete n.sdkProcessingMetadata;var l;try{l=JSON.stringify(n)}catch(D){n.tags.JSONStringifyError=!0,n.extra.JSONStringifyError=D;try{l=JSON.stringify(_n(n))}catch(z){var A=z;l=JSON.stringify({message:"JSON.stringify error after renormalization",extra:{message:A.message,stack:A.stack}})}}var E={body:l,type:o,url:r?ft(e.dsn,e.tunnel):Jo(e.dsn)};if(r){var f=X(X({event_id:n.event_id,sent_at:new Date().toISOString()},t&&{sdk:t}),!!e.tunnel&&{dsn:Be(e.dsn)}),g=[{type:o,sample_rates:[{id:a,rate:s}]},E.body],B=dt(f,[g]);E.body=$o(B)}return E}var Ob=function(){function n(){}return n.prototype.sendEvent=function(e){return re({reason:"NoopTransport: Event has been skipped because no Dsn is configured.",status:"skipped"})},n.prototype.close=function(e){return re(!0)},n}(),Tb=function(){function n(e){this._options=e,this._options.dsn||(0,M.c)()&&N.warn("No DSN provided, backend will not do anything."),this._transport=this._setupTransport()}return n.prototype.eventFromException=function(e,t){throw new Q("Backend has to implement `eventFromException` method")},n.prototype.eventFromMessage=function(e,t,o){throw new Q("Backend has to implement `eventFromMessage` method")},n.prototype.sendEvent=function(e){if(this._newTransport&&this._options.dsn&&this._options._experiments&&this._options._experiments.newTransport){var t=No(this._options.dsn,this._options._metadata,this._options.tunnel),o=Sb(e,t);this._newTransport.send(o).then(null,function(r){(0,M.c)()&&N.error("Error while sending event:",r)})}else this._transport.sendEvent(e).then(null,function(r){(0,M.c)()&&N.error("Error while sending event:",r)})},n.prototype.sendSession=function(e){if(!this._transport.sendSession){(0,M.c)()&&N.warn("Dropping session because custom transport doesn't implement sendSession");return}if(this._newTransport&&this._options.dsn&&this._options._experiments&&this._options._experiments.newTransport){var t=No(this._options.dsn,this._options._metadata,this._options.tunnel),o=ho($c(e,t),1),r=o[0];this._newTransport.send(r).then(null,function(i){(0,M.c)()&&N.error("Error while sending session:",i)})}else this._transport.sendSession(e).then(null,function(i){(0,M.c)()&&N.error("Error while sending session:",i)})},n.prototype.getTransport=function(){return this._transport},n.prototype._setupTransport=function(){return new Ob},n}();function Rb(n){var e=[];function t(){return n===void 0||e.length<n}function o(c){return e.splice(e.indexOf(c),1)[0]}function r(c){if(!t())return Fo(new Q("Not adding Promise due to buffer limit reached."));var a=c();return e.indexOf(a)===-1&&e.push(a),a.then(function(){return o(a)}).then(null,function(){return o(a).then(null,function(){})}),a}function i(c){return new Nn(function(a,s){var l=e.length;if(!l)return a(!0);var A=setTimeout(function(){c&&c>0&&a(!1)},c);e.forEach(function(E){re(E).then(function(){--l||(clearTimeout(A),a(!0))},s)})})}return{$:e,add:r,drain:i}}function Pb(n,e,t){var o=[{type:"client_report"},{timestamp:t||(0,oe.yW)(),discarded_events:n}];return dt(e?{dsn:e}:{},[o])}function Ib(n){return n>=200&&n<300?"success":n===429?"rate_limit":n>=400&&n<500?"invalid":n>=500?"failed":"unknown"}var Db=60*1e3;function Lb(n,e){e===void 0&&(e=Date.now());var t=parseInt(""+n,10);if(!isNaN(t))return t*1e3;var o=Date.parse(""+n);return isNaN(o)?Db:o-e}function Gc(n,e){return n[e]||n.all||0}function Mb(n,e,t){return t===void 0&&(t=Date.now()),Gc(n,e)>t}function Nb(n,e,t){var o,r,i,c;t===void 0&&(t=Date.now());var a=cn({},n),s=e["x-sentry-rate-limits"],l=e["retry-after"];if(s)try{for(var A=Bn(s.trim().split(",")),E=A.next();!E.done;E=A.next()){var f=E.value,g=f.split(":",2),B=parseInt(g[0],10),D=(isNaN(B)?60:B)*1e3;if(!g[1])a.all=t+D;else try{for(var z=(i=void 0,Bn(g[1].split(";"))),q=z.next();!q.done;q=z.next()){var en=q.value;a[en]=t+D}}catch(un){i={error:un}}finally{try{q&&!q.done&&(c=z.return)&&c.call(z)}finally{if(i)throw i.error}}}}catch(un){o={error:un}}finally{try{E&&!E.done&&(r=A.return)&&r.call(A)}finally{if(o)throw o.error}}else l&&(a.all=t+Lb(l,t));return a}function jb(n){n.then(null,function(e){console.error(e)})}var fn=(0,Z.R)(),gt;function Kc(){if(gt)return gt;if(Oo(fn.fetch))return gt=fn.fetch.bind(fn);var n=fn.document,e=fn.fetch;if(n&&typeof n.createElement=="function")try{var t=n.createElement("iframe");t.hidden=!0,n.head.appendChild(t);var o=t.contentWindow;o&&o.fetch&&(e=o.fetch),n.head.removeChild(t)}catch(r){(0,M.c)()&&N.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",r)}return gt=e.bind(fn)}function Jb(n,e){var t=Object.prototype.toString.call(fn&&fn.navigator)==="[object Navigator]",o=t&&typeof fn.navigator.sendBeacon=="function";if(o){var r=fn.navigator.sendBeacon.bind(fn.navigator);return r(n,e)}if(it()){var i=Kc();return jb(i(n,{body:e,method:"POST",credentials:"omit",keepalive:!0}))}}function Ko(n){var e=n;return e==="event"?"error":e}var Yo=(0,Z.R)(),Yc=function(){function n(e){var t=this;this.options=e,this._buffer=Rb(30),this._rateLimits={},this._outcomes={},this._api=No(e.dsn,e._metadata,e.tunnel),this.url=Jo(this._api.dsn),this.options.sendClientReports&&Yo.document&&Yo.document.addEventListener("visibilitychange",function(){Yo.document.visibilityState==="hidden"&&t._flushOutcomes()})}return n.prototype.sendEvent=function(e){return this._sendRequest(xb(e,this._api),e)},n.prototype.sendSession=function(e){return this._sendRequest(kb(e,this._api),e)},n.prototype.close=function(e){return this._buffer.drain(e)},n.prototype.recordLostEvent=function(e,t){var o;if(this.options.sendClientReports){var r=Ko(t)+":"+e;(0,M.c)()&&N.log("Adding outcome: "+r),this._outcomes[r]=(o=this._outcomes[r],(o!=null?o:0)+1)}},n.prototype._flushOutcomes=function(){if(this.options.sendClientReports){var e=this._outcomes;if(this._outcomes={},!Object.keys(e).length){(0,M.c)()&&N.log("No outcomes to flush");return}(0,M.c)()&&N.log(`Flushing outcomes:
`+JSON.stringify(e,null,2));var t=ft(this._api.dsn,this._api.tunnel),o=Object.keys(e).map(function(i){var c=Xn(i.split(":"),2),a=c[0],s=c[1];return{reason:s,category:a,quantity:e[i]}}),r=Pb(o,this._api.tunnel&&Be(this._api.dsn));try{Jb(t,$o(r))}catch(i){(0,M.c)()&&N.error(i)}}},n.prototype._handleResponse=function(e){var t=e.requestType,o=e.response,r=e.headers,i=e.resolve,c=e.reject,a=Ib(o.status);if(this._rateLimits=Nb(this._rateLimits,r),this._isRateLimited(t)&&(0,M.c)()&&(0,M.c)()&&N.warn("Too many "+t+" requests, backing off until: "+this._disabledUntil(t)),a==="success"){i({status:a});return}c(o)},n.prototype._disabledUntil=function(e){var t=Ko(e);return new Date(Gc(this._rateLimits,t))},n.prototype._isRateLimited=function(e){var t=Ko(e);return Mb(this._rateLimits,t)},n}(),Ub=function(n){Ye(e,n);function e(t,o){o===void 0&&(o=Kc());var r=n.call(this,t)||this;return r._fetch=o,r}return e.prototype._sendRequest=function(t,o){var r=this;if(this._isRateLimited(t.type))return this.recordLostEvent("ratelimit_backoff",t.type),Promise.reject({event:o,type:t.type,reason:"Transport for "+t.type+" requests locked till "+this._disabledUntil(t.type)+" due to too many requests.",status:429});var i={body:t.body,method:"POST",referrerPolicy:Jg()?"origin":""};return this.options.fetchParameters!==void 0&&Object.assign(i,this.options.fetchParameters),this.options.headers!==void 0&&(i.headers=this.options.headers),this._buffer.add(function(){return new Nn(function(c,a){r._fetch(t.url,i).then(function(s){var l={"x-sentry-rate-limits":s.headers.get("X-Sentry-Rate-Limits"),"retry-after":s.headers.get("Retry-After")};r._handleResponse({requestType:t.type,response:s,headers:l,resolve:c,reject:a})}).catch(a)})}).then(void 0,function(c){throw c instanceof Q?r.recordLostEvent("queue_overflow",t.type):r.recordLostEvent("network_error",t.type),c})},e}(Yc),qb=function(n){Ye(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype._sendRequest=function(t,o){var r=this;return this._isRateLimited(t.type)?(this.recordLostEvent("ratelimit_backoff",t.type),Promise.reject({event:o,type:t.type,reason:"Transport for "+t.type+" requests locked till "+this._disabledUntil(t.type)+" due to too many requests.",status:429})):this._buffer.add(function(){return new Nn(function(i,c){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===4){var l={"x-sentry-rate-limits":a.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":a.getResponseHeader("Retry-After")};r._handleResponse({requestType:t.type,response:a,headers:l,resolve:i,reject:c})}},a.open("POST",t.url);for(var s in r.options.headers)Object.prototype.hasOwnProperty.call(r.options.headers,s)&&a.setRequestHeader(s,r.options.headers[s]);a.send(t.body)})}).then(void 0,function(i){throw i instanceof Q?r.recordLostEvent("queue_overflow",t.type):r.recordLostEvent("network_error",t.type),i})},e}(Yc),zb=function(n){Ye(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.eventFromException=function(t,o){return Tp(t,o,this._options.attachStacktrace)},e.prototype.eventFromMessage=function(t,o,r){return o===void 0&&(o=bn.Info),Rp(t,o,r,this._options.attachStacktrace)},e.prototype._setupTransport=function(){if(!this._options.dsn)return n.prototype._setupTransport.call(this);var t=Y(Y({},this._options.transportOptions),{dsn:this._options.dsn,tunnel:this._options.tunnel,sendClientReports:this._options.sendClientReports,_metadata:this._options._metadata});return this._options.transport?new this._options.transport(t):it()?new Ub(t):new qb(t)},e}(Tb),Hb=function(n){Ye(e,n);function e(t){t===void 0&&(t={});var o=this;return t._metadata=t._metadata||{},t._metadata.sdk=t._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:"npm:@sentry/browser",version:qc}],version:qc},o=n.call(this,zb,t)||this,o}return e.prototype.showReportDialog=function(t){t===void 0&&(t={});var o=(0,Z.R)().document;if(o){if(!this._isEnabled()){(0,M.c)()&&N.error("Trying to call showReportDialog with Sentry Client disabled");return}$p(Y(Y({},t),{dsn:t.dsn||this.getDsn()}))}},e.prototype._prepareEvent=function(t,o,r){return t.platform=t.platform||"javascript",n.prototype._prepareEvent.call(this,t,o,r)},e.prototype._sendEvent=function(t){var o=this.getIntegration(qo);o&&o.addSentryBreadcrumb(t),n.prototype._sendEvent.call(this,t)},e}(Fb),Vc=[new oc,new Qi,new xc,new qo,new Et,new Tc,new Ic,new Pc];function Wb(n){if(n===void 0&&(n={}),n.defaultIntegrations===void 0&&(n.defaultIntegrations=Vc),n.release===void 0){var e=(0,Z.R)();e.SENTRY_RELEASE&&e.SENTRY_RELEASE.id&&(n.release=e.SENTRY_RELEASE.id)}n.autoSessionTracking===void 0&&(n.autoSessionTracking=!0),n.sendClientReports===void 0&&(n.sendClientReports=!0),_b(Hb,n),n.autoSessionTracking&&$b()}function Ay(n){n===void 0&&(n={});var e=getCurrentHub(),t=e.getScope();t&&(n.user=__assign(__assign({},t.getUser()),n.user)),n.eventId||(n.eventId=e.lastEventId());var o=e.getClient();o&&o.showReportDialog(n)}function fy(){return getCurrentHub().lastEventId()}function uy(){}function Ey(n){n()}function dy(n){var e=getCurrentHub().getClient();return e?e.flush(n):(isDebugBuild()&&logger.warn("Cannot flush events. No client defined."),resolvedSyncPromise(!1))}function gy(n){var e=getCurrentHub().getClient();return e?e.close(n):(isDebugBuild()&&logger.warn("Cannot flush events and disable SDK. No client defined."),resolvedSyncPromise(!1))}function py(n){return internalWrap(n)()}function Xc(n){n.startSession({ignoreDuration:!0}),n.captureSession()}function $b(){var n=(0,Z.R)(),e=n.document;if(typeof e=="undefined"){(0,M.c)()&&N.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");return}var t=on();t.captureSession&&(Xc(t),wn("history",function(o){var r=o.from,i=o.to;r===void 0||r===i||Xc(on())}))}const Gb=[...Vc,new Fe,new Ce];function Kb(n={}){if(hb("renderer"),window!=null&&window.__SENTRY__RENDERER_INIT__){N.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);return}window.__SENTRY__RENDERER_INIT__=!0,n.autoSessionTracking===void 0&&(n.autoSessionTracking=!1),n.defaultIntegrations===void 0&&(n.defaultIntegrations=Gb),n.dsn===void 0&&(n.dsn="https://12345@dummy.dsn/12345"),delete n.initialScope,Wb(n)}const by=Object.assign(Object.assign({},u),pb);function Yb(){var n,e;console.log("Starting Sentry (Renderer)"),Kb({...(e=(n=window.desktop)==null?void 0:n.diagnostics)==null?void 0:e.sentryOptions}),ug(mc)}const Vb=Object.prototype.hasOwnProperty;function Xb(n,e){if(Object.is(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;const t=Object.keys(n),o=Object.keys(e);if(t.length!==o.length)return!1;for(let r=0;r<t.length;r++)if(!Vb.call(e,t[r])||!Object.is(n[t[r]],e[t[r]]))return!1;return!0}function Zb(n,e){return qt(n,e)}const Zc=Zb;function Qb(n){const e=Yn(n);return!Xb(n,e.current)&&!Zc(n,e.current)&&(e.current=n),e.current}function Qc(n,e){Vt(n,[Qb(e)])}function na(n){return Jd(n,Zc)}const nh=()=>{const n=na(e=>e.settings.locale);Qc(()=>{async function e(){n&&await window.desktop.intl.applyLocale(n)}e()},[n])};var hn=P(1174).h;const eh=`${zE} 1x,${HE} 2x,${WE} 3x`;Yb();function th(n){const{intl:e}=window.desktop,{app:t,environment:o}=n,r=cr(n),i=ua(o.distribution,r,t.isUpdateSupported,e),c=Ea(o.appVersion),a=da(o.is64Bit),s=o.clientEnvironment===De.RESTRICTED?" (GovSlack)":"";return`${i} ${c}${a}${s}`}const ea=()=>{const{intl:n}=window.desktop,{appVersion:e,webappVersion:t,versionString:o,clientEnvironment:r,devEnv:i}=na(f=>({appVersion:f.environment.appVersion,webappVersion:kE(f.webapp),versionString:th(f),clientEnvironment:f.environment.clientEnvironment,devEnv:f.environment.devEnv})),[c,a]=Kt(!1);nh(),Qc(()=>{if(c){const f=setTimeout(()=>a(!1),3e3);return()=>clearTimeout(f)}return ii},[c,a]);const s=`AboutBox-version${e!==void 0&&e.length>10?" long":""}`,l=n.t("Copied!",sn.RENDERER)(),A=()=>{navigator.clipboard.writeText(o).catch(f=>console.log("Failed to copy version string",f)),a(!0)},E=()=>window.open(`${ei({clientEnvironment:r,devEnv:i})}/libs/desktop`);return hn("div",{className:"AboutBox"},hn("img",{className:"AboutBox-logo",draggable:!1,srcSet:eh}),hn("span",{className:"AboutBox-tooltipContainer"},hn("span",{className:"AboutBox-tooltip",style:{opacity:c?1:0}},l)),hn("span",{className:"AboutBox-versionContainer"},hn("span",{className:s,"data-qa":"about_box_version",draggable:!1,key:"version"},o),hn("span",null,hn("button",{className:"AboutBox-copy c-icon c-icon--all-files",key:"copy",title:n.t("Copy",sn.RENDERER)(),onClick:A}))),hn("span",{"data-testid":"webapp-version",className:"AboutBox-webappVersion",draggable:!1},t),hn("input",{type:"button",className:"AboutBox-acknowledgements","data-qa":"about_box_acknowledgements",key:"acknowledgements",value:n.t("Notices and Acknowledgements",sn.RENDERER)(),onClick:E}))};Ag(ea)})(),sandboxedRenderer=Bt})();

//# sourceMappingURL=about-box.bundle.js.map