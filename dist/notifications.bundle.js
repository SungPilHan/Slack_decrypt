var sandboxedRenderer;(()=>{var ta={7392:(x,g,l)=>{"use strict";l.d(g,{Z:()=>J});var h=l(428),b=l.n(h),S=l(1128),F=l.n(S),_=F()(b());_.push([x.id,`.Avatar {
  border-radius: 4px;
  margin: 3px 8px 0 0;
  width: 36px;
  min-width: 36px;
  max-height: 36px;
  background-size: cover;
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/html-notifications/avatar.less"],names:[],mappings:"AAAA;EACE,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,sBAAA;AACF",sourcesContent:[`.Avatar {
  border-radius: 4px;
  margin: 3px 8px 0 0;
  width: 36px;
  min-width: 36px;
  max-height: 36px;
  background-size: cover;
}
`],sourceRoot:""}]);const J=_},8730:(x,g,l)=>{"use strict";l.d(g,{Z:()=>J});var h=l(428),b=l.n(h),S=l(1128),F=l.n(S),_=F()(b());_.push([x.id,`.Notifications2018 .Channels {
  background-color: var(--sk_primary_background);
}
.Notifications2018 .Channel {
  border-bottom: 1px solid var(--sk_foreground_min);
}
.Notifications2018 .Channel header {
  color: var(--sk_foreground_max);
  display: flex;
}
.Notifications2018 .Channel header h4 {
  font-size: 14px;
  font-weight: 800;
  margin: 0;
}
.Notifications2018 .Channel header a:hover {
  background-color: var(--sk_foreground_min);
}
.Notifications2018 .Channel header a.OpenChannel {
  height: 100%;
  padding: 9px 10px 7px 10px;
  display: inline-block;
  width: calc(100% - 35px);
  box-sizing: border-box;
  flex-grow: 1;
}
.Notifications2018 .Channel header a.OpenChannel h4 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.Notifications2018 .Channel header a.Close {
  display: inline-block;
  padding: 7px 10px 0 10px;
  float: right;
  margin-right: 1px;
}
.Notifications2018 .Channel header i.c-icon:before {
  font-size: 14px;
}
.Notifications2018 .Channels:last-child {
  border: none;
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/html-notifications/channel.less"],names:[],mappings:"AAAA;EAEI,8CAAA;AAAJ;AAFA;EAMI,iDAAA;AADJ;AALA;EASM,+BAAA;EACA,aAAA;AADN;AATA;EAaQ,eAAA;EACA,gBAAA;EACA,SAAA;AADR;AAdA;EAmBQ,0CAAA;AAFR;AAjBA;EAuBQ,YAAA;EACA,0BAAA;EACA,qBAAA;EACA,wBAAA;EACA,sBAAA;EACA,YAAA;AAHR;AAzBA;EA+BU,mBAAA;EACA,gBAAA;EACA,uBAAA;AAHV;AA9BA;EAsCQ,qBAAA;EACA,wBAAA;EACA,YAAA;EACA,iBAAA;AALR;AApCA;EA6CQ,eAAA;AANR;AAvCA;EAmDI,YAAA;AATJ",sourcesContent:[`.Notifications2018 {
  .Channels {
    background-color: var(--sk_primary_background);
  }

  .Channel {
    border-bottom: 1px solid var(--sk_foreground_min);

    header {
      color: var(--sk_foreground_max);
      display: flex;

      h4 {
        font-size: 14px;
        font-weight: 800;
        margin: 0;
      }

      a:hover {
        background-color: var(--sk_foreground_min);
      }

      a.OpenChannel {
        height: 100%;
        padding: 9px 10px 7px 10px;
        display: inline-block;
        width: ~'calc(100% - 35px)';
        box-sizing: border-box;
        flex-grow: 1;

        h4 {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      a.Close {
        display: inline-block;
        padding: 7px 10px 0 10px;
        float: right;
        margin-right: 1px;
      }

      i.c-icon:before {
        font-size: 14px;
      }
    }
  }

  .Channels:last-child {
    border: none;
  }
}
`],sourceRoot:""}]);const J=_},9638:(x,g,l)=>{"use strict";l.d(g,{Z:()=>J});var h=l(428),b=l.n(h),S=l(1128),F=l.n(S),_=F()(b());_.push([x.id,`.Notifications2018 .Message:hover {
  background-color: var(--sk_foreground_min);
}
.Notifications2018 .Message {
  display: flex;
  padding: 8px 10px 6px 10px;
}
.Notifications2018 .Message:last-child {
  margin-bottom: 10px;
}
.Notifications2018 .Message:first-child {
  padding-top: 0;
}
.Notifications2018 .Message p,
.Notifications2018 .Message h5 {
  margin: 0;
}
.Notifications2018 .Message h5 {
  font-weight: 900;
  color: var(--sk_primary_foreground);
  font-size: 15px;
}
.Notifications2018 .Message .Timestamp {
  font-size: 12px;
  color: var(--sk_foreground_max);
  font-weight: 400;
  margin-left: 4px;
}
.Notifications2018 .Message .Content {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  display: -webkit-box;
  padding: 0 2px;
}
.Notifications2018 .Message .Content p {
  line-height: 22px;
}
.Notifications2018 .Message .Content img {
  width: 100%;
  border-radius: 3px;
  margin-top: 11px;
}
.Notifications2018 .Message .Content .emoji {
  max-width: 22px;
  max-height: 22px;
  margin: 0;
  margin-bottom: -5px;
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/html-notifications/message.less"],names:[],mappings:"AAAA;EAEI,0CAAA;AAAJ;AAFA;EAMI,aAAA;EACA,0BAAA;AADJ;AAGI;EACE,mBAAA;AADN;AAII;EACE,cAAA;AAFN;AAZA;;EAmBM,SAAA;AAHN;AAhBA;EAuBM,gBAAA;EACA,mCAAA;EACA,eAAA;AAJN;AArBA;EA6BM,eAAA;EACA,+BAAA;EACA,gBAAA;EACA,gBAAA;AALN;AA3BA;EAqCM,4BAAA;EACA,qBAAA;EACA,gBAAA;EACA,oBAAA;EACA,cAAA;AAPN;AAlCA;EA4CQ,iBAAA;AAPR;AArCA;EAgDQ,WAAA;EACA,kBAAA;EACA,gBAAA;AARR;AA1CA;EAsDQ,eAAA;EACA,gBAAA;EACA,SAAA;EACA,mBAAA;AATR",sourcesContent:[`.Notifications2018 {
  .Message:hover {
    background-color: var(--sk_foreground_min);
  }

  .Message {
    display: flex;
    padding: 8px 10px 6px 10px;

    &:last-child {
      margin-bottom: 10px;
    }

    &:first-child {
      padding-top: 0;
    }

    p,
    h5 {
      margin: 0;
    }

    h5 {
      font-weight: 900;
      color: var(--sk_primary_foreground);
      font-size: 15px;
    }

    .Timestamp {
      font-size: 12px;
      color: var(--sk_foreground_max);
      font-weight: 400;
      margin-left: 4px;
    }

    .Content {
      // 5 lines max
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
      display: -webkit-box;
      padding: 0 2px;

      p {
        line-height: 22px;
      }

      img {
        width: 100%;
        border-radius: 3px;
        margin-top: 11px;
      }

      .emoji {
        max-width: 22px;
        max-height: 22px;
        margin: 0;
        margin-bottom: -5px;
      }
    }
  }
}
`],sourceRoot:""}]);const J=_},3935:(x,g,l)=>{"use strict";l.d(g,{Z:()=>on});var h=l(428),b=l.n(h),S=l(1128),F=l.n(S),_=l(4322),J=l.n(_),U=l(4897),R=l(8015),Q=l(3535),Y=l(35),en=l(6254),G=l(3528),cn=l(737),nn=l(1266),hn=l(4411),En=F()(b()),pn=J()(U.Z),In=J()(R.Z),O=J()(Q.Z),v=J()(Y.Z),E=J()(en.Z),s=J()(G.Z),I=J()(cn.Z),z=J()(nn.Z),V=J()(hn.Z);En.push([x.id,`/*

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
  src: url(`+pn+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 400;
  src: url(`+In+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 700;
  src: url(`+O+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 900;
  src: url(`+v+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Light Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 300;
  src: url(`+E+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 400;
  src: url(`+s+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 700;
  src: url(`+I+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 900;
  src: url(`+z+`) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
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
@font-face {
  font-family: 'Slack v2';
  src: url(`+V+`) format('woff2');
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
.Notifications2018 a {
  text-decoration: none;
}
.Notifications2018 .NotificationHost {
  --sk_primary_foreground: #1d1c1d;
  --sk_primary_background: #fff;
  --sk_inverted_foreground: #fff;
  --sk_inverted_background: #1d1c1d;
  --sk_foreground_min: rgba(29, 28, 29, 0.04);
  --sk_foreground_low: rgba(29, 28, 29, 0.13);
  --sk_foreground_high: rgba(29, 28, 29, 0.5);
  --sk_foreground_max: rgba(29, 28, 29, 0.7);
  width: 98%;
  height: 100%;
  float: right;
  display: flex;
  align-items: flex-end;
  font-family: Slack-Lato, Meiryo, Lucida Grande, sans-serif;
  color: var(--sk_primary_foreground);
}
.Notifications2018 .NotificationHost.NotificationHost--dark {
  --sk_primary_foreground: #e8e8e8;
  --sk_primary_background: #1a1d21;
  --sk_inverted_foreground: #1a1d21;
  --sk_inverted_background: #e8e8e8;
  --sk_foreground_min: rgba(232, 232, 232, 0.04);
  --sk_foreground_low: rgba(232, 232, 232, 0.13);
  --sk_foreground_high: rgba(232, 232, 232, 0.5);
  --sk_foreground_max: rgba(232, 232, 232, 0.7);
}
.Notifications2018 .NotificationHost-list {
  width: 100%;
}
.Notifications2018 .NotificationHost .spin-enter {
  -webkit-animation-duration: 0.2s;
  -webkit-animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
}
.Notifications2018 .NotificationHost .spin-leave {
  -webkit-animation-duration: 0.2s;
  -webkit-animation-fill-mode: both;
  -webkit-animation-name: collapseHeight;
  align-self: flex-end;
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes collapseHeight {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    height: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/html-notifications/notification-host.less","webpack://./src/resources/lato.less","webpack://./src/resources/plastic/plastic_typography.less","webpack://./src/resources/plastic/plastic_utilities.less","webpack://./src/resources/slack-icons-font.less"],names:[],mappings:"AAAA;;;;;;;;;;CAUC;AACD,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,YAAY;ACGZ;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,SAAS;ACGT;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,mBAAmB;ACGnB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,gBAAgB;ACGhB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA;;;;;;;;;;;;;EAaE;AACF;;;;EAIE;AEvFF;EACE,wBAAA;EACA,2BAAA;EACA,qBAAA;AFyFF;AACA,sEAAsE;AACtE;;;;;;;EAOE;AACF;;;CAGC;AACD;;;CAGC;AGpBD;EACE,iBAAA;AHsBF;AGpBA;EACE,iBAAA;AHsBF;AIjHA;EAEE,uBAAA;EACA,4DAAA;EACA,kBAAA;EACA,gBAAA;AJkHF;AItGA;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AJwGF;AIvGE;EAfA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;AJyHF;AIvGA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;AJyGF;AIxGE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;AJ0GJ;AIxGE;EAEE,gBAAA;AJyGJ;AIlGA;EACE,UAAA;AJoGF;AInGE;EACE,kBAAA;AJqGJ;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AImkBA;EAEE,WAAA;AJlkBF;AIujBE;EACE,gBAAA;EACA,cAAA;AJrjBJ;AIujBE;EACE,yBAAA;AJrjBJ;AI6jBE;EACE,eAAA;AJ3jBJ;AI+jBA;EAEE,WAAA;AJ9jBF;AI0iBE;EACE,gBAAA;EACA,cAAA;AJxiBJ;AI0iBE;EACE,yBAAA;AJxiBJ;AIyjBE;EACE,eAAA;AJvjBJ;AI2jBA;EAEE,WAAA;AJ1jBF;AI6hBE;EACE,gBAAA;EACA,cAAA;AJ3hBJ;AI6hBE;EACE,yBAAA;AJ3hBJ;AIqjBE;EACE,eAAA;AJnjBJ;AImhBE;EACE,gBAAA;EACA,cAAA;AJjhBJ;AImhBE;EACE,yBAAA;AJjhBJ;AI4gBE;EACE,gBAAA;EACA,cAAA;AJ1gBJ;AI4gBE;EACE,yBAAA;AJ1gBJ;AIqgBE;EACE,gBAAA;EACA,cAAA;AJngBJ;AIqgBE;EACE,yBAAA;AJngBJ;AI8fE;EACE,gBAAA;EACA,cAAA;AJ5fJ;AI8fE;EACE,yBAAA;AJ5fJ;AIufE;EACE,gBAAA;EACA,cAAA;AJrfJ;AIufE;EACE,yBAAA;AJrfJ;AIgfE;EACE,gBAAA;EACA,cAAA;AJ9eJ;AIgfE;EACE,yBAAA;AJ9eJ;AIyeE;EACE,gBAAA;EACA,cAAA;AJveJ;AIyeE;EACE,yBAAA;AJveJ;AIkeE;EACE,gBAAA;EACA,cAAA;AJheJ;AIkeE;EACE,yBAAA;AJheJ;AI2dE;EACE,gBAAA;EACA,cAAA;AJzdJ;AI2dE;EACE,yBAAA;AJzdJ;AIodE;EACE,gBAAA;EACA,cAAA;AJldJ;AIodE;EACE,yBAAA;AJldJ;AI6cE;EACE,gBAAA;EACA,cAAA;AJ3cJ;AI6cE;EACE,yBAAA;AJ3cJ;AIscE;EACE,gBAAA;EACA,cAAA;AJpcJ;AIscE;EACE,yBAAA;AJpcJ;AI+bE;EACE,gBAAA;EACA,cAAA;AJ7bJ;AI+bE;EACE,yBAAA;AJ7bJ;AIwbE;EACE,gBAAA;EACA,cAAA;AJtbJ;AIwbE;EACE,yBAAA;AJtbJ;AIibE;EACE,gBAAA;EACA,cAAA;AJ/aJ;AIibE;EACE,yBAAA;AJ/aJ;AI0aE;EACE,gBAAA;EACA,cAAA;AJxaJ;AI0aE;EACE,yBAAA;AJxaJ;AImaE;EACE,gBAAA;EACA,cAAA;AJjaJ;AImaE;EACE,yBAAA;AJjaJ;AI4ZE;EACE,gBAAA;EACA,cAAA;AJ1ZJ;AI4ZE;EACE,yBAAA;AJ1ZJ;AIqZE;EACE,gBAAA;EACA,cAAA;AJnZJ;AIqZE;EACE,yBAAA;AJnZJ;AI8YE;EACE,gBAAA;EACA,cAAA;AJ5YJ;AI8YE;EACE,yBAAA;AJ5YJ;AIuYE;EACE,gBAAA;EACA,cAAA;AJrYJ;AIuYE;EACE,yBAAA;AJrYJ;AIgYE;EACE,gBAAA;EACA,cAAA;AJ9XJ;AIgYE;EACE,yBAAA;AJ9XJ;AIyXE;EACE,gBAAA;EACA,cAAA;AJvXJ;AIyXE;EACE,yBAAA;AJvXJ;AIkXE;EACE,gBAAA;EACA,cAAA;AJhXJ;AIkXE;EACE,yBAAA;AJhXJ;AI2WE;EACE,gBAAA;EACA,cAAA;AJzWJ;AI2WE;EACE,yBAAA;AJzWJ;AIoWE;EACE,gBAAA;EACA,cAAA;AJlWJ;AIoWE;EACE,yBAAA;AJlWJ;AI6VE;EACE,gBAAA;EACA,cAAA;AJ3VJ;AI6VE;EACE,yBAAA;AJ3VJ;AIsVE;EACE,gBAAA;EACA,cAAA;AJpVJ;AIsVE;EACE,yBAAA;AJpVJ;AI+UE;EACE,gBAAA;EACA,cAAA;AJ7UJ;AI+UE;EACE,yBAAA;AJ7UJ;AIwUE;EACE,gBAAA;EACA,cAAA;AJtUJ;AIwUE;EACE,yBAAA;AJtUJ;AIiUE;EACE,gBAAA;EACA,cAAA;AJ/TJ;AIiUE;EACE,yBAAA;AJ/TJ;AI0TE;EACE,gBAAA;EACA,cAAA;AJxTJ;AI0TE;EACE,yBAAA;AJxTJ;AImTE;EACE,gBAAA;EACA,cAAA;AJjTJ;AImTE;EACE,yBAAA;AJjTJ;AI4SE;EACE,gBAAA;EACA,cAAA;AJ1SJ;AI4SE;EACE,yBAAA;AJ1SJ;AIqSE;EACE,gBAAA;EACA,cAAA;AJnSJ;AIqSE;EACE,yBAAA;AJnSJ;AI8RE;EACE,gBAAA;EACA,cAAA;AJ5RJ;AI8RE;EACE,yBAAA;AJ5RJ;AIuRE;EACE,gBAAA;EACA,cAAA;AJrRJ;AIuRE;EACE,yBAAA;AJrRJ;AIgRE;EACE,gBAAA;EACA,cAAA;AJ9QJ;AIgRE;EACE,yBAAA;AJ9QJ;AIyQE;EACE,gBAAA;EACA,cAAA;AJvQJ;AIyQE;EACE,yBAAA;AJvQJ;AIkQE;EACE,gBAAA;EACA,cAAA;AJhQJ;AIkQE;EACE,yBAAA;AJhQJ;AI2PE;EACE,gBAAA;EACA,cAAA;AJzPJ;AI2PE;EACE,yBAAA;AJzPJ;AIoPE;EACE,gBAAA;EACA,cAAA;AJlPJ;AIoPE;EACE,yBAAA;AJlPJ;AI6OE;EACE,gBAAA;EACA,cAAA;AJ3OJ;AI6OE;EACE,yBAAA;AJ3OJ;AIsOE;EACE,gBAAA;EACA,cAAA;AJpOJ;AIsOE;EACE,yBAAA;AJpOJ;AI+NE;EACE,gBAAA;EACA,cAAA;AJ7NJ;AI+NE;EACE,yBAAA;AJ7NJ;AIwNE;EACE,gBAAA;EACA,cAAA;AJtNJ;AIwNE;EACE,yBAAA;AJtNJ;AIiNE;EACE,gBAAA;EACA,cAAA;AJ/MJ;AIiNE;EACE,yBAAA;AJ/MJ;AI0ME;EACE,gBAAA;EACA,cAAA;AJxMJ;AI0ME;EACE,yBAAA;AJxMJ;AImME;EACE,gBAAA;EACA,cAAA;AJjMJ;AImME;EACE,yBAAA;AJjMJ;AI4LE;EACE,gBAAA;EACA,cAAA;AJ1LJ;AI4LE;EACE,yBAAA;AJ1LJ;AIqLE;EACE,gBAAA;EACA,cAAA;AJnLJ;AIqLE;EACE,yBAAA;AJnLJ;AI8KE;EACE,gBAAA;EACA,cAAA;AJ5KJ;AI8KE;EACE,yBAAA;AJ5KJ;AIuKE;EACE,gBAAA;EACA,cAAA;AJrKJ;AIuKE;EACE,yBAAA;AJrKJ;AIgKE;EACE,gBAAA;EACA,cAAA;AJ9JJ;AIgKE;EACE,yBAAA;AJ9JJ;AIyJE;EACE,gBAAA;EACA,cAAA;AJvJJ;AIyJE;EACE,yBAAA;AJvJJ;AIkJE;EACE,gBAAA;EACA,cAAA;AJhJJ;AIkJE;EACE,yBAAA;AJhJJ;AI2IE;EACE,gBAAA;EACA,cAAA;AJzIJ;AI2IE;EACE,yBAAA;AJzIJ;AIoIE;EACE,gBAAA;EACA,cAAA;AJlIJ;AIoIE;EACE,yBAAA;AJlIJ;AI6HE;EACE,gBAAA;EACA,cAAA;AJ3HJ;AI6HE;EACE,yBAAA;AJ3HJ;AIsHE;EACE,gBAAA;EACA,cAAA;AJpHJ;AIsHE;EACE,yBAAA;AJpHJ;AI+GE;EACE,gBAAA;EACA,cAAA;AJ7GJ;AI+GE;EACE,yBAAA;AJ7GJ;AIwGE;EACE,gBAAA;EACA,cAAA;AJtGJ;AIwGE;EACE,yBAAA;AJtGJ;AIiGE;EACE,gBAAA;EACA,cAAA;AJ/FJ;AIiGE;EACE,yBAAA;AJ/FJ;AI0FE;EACE,gBAAA;EACA,cAAA;AJxFJ;AI0FE;EACE,yBAAA;AJxFJ;AImFE;EACE,gBAAA;EACA,cAAA;AJjFJ;AImFE;EACE,yBAAA;AJjFJ;AI4EE;EACE,gBAAA;EACA,cAAA;AJ1EJ;AI4EE;EACE,yBAAA;AJ1EJ;AIqEE;EACE,gBAAA;EACA,cAAA;AJnEJ;AIqEE;EACE,yBAAA;AJnEJ;AI8DE;EACE,gBAAA;EACA,cAAA;AJ5DJ;AI8DE;EACE,yBAAA;AJ5DJ;AIuDE;EACE,gBAAA;EACA,cAAA;AJrDJ;AIuDE;EACE,yBAAA;AJrDJ;AIgDE;EACE,gBAAA;EACA,cAAA;AJ9CJ;AIgDE;EACE,yBAAA;AJ9CJ;AIyCE;EACE,gBAAA;EACA,cAAA;AJvCJ;AIyCE;EACE,yBAAA;AJvCJ;AIkCE;EACE,gBAAA;EACA,cAAA;AJhCJ;AIkCE;EACE,yBAAA;AJhCJ;AI2BE;EACE,gBAAA;EACA,cAAA;AJzBJ;AI2BE;EACE,yBAAA;AJzBJ;AIoBE;EACE,gBAAA;EACA,cAAA;AJlBJ;AIoBE;EACE,yBAAA;AJlBJ;AIaE;EACE,gBAAA;EACA,cAAA;AJXJ;AIaE;EACE,yBAAA;AJXJ;AIME;EACE,gBAAA;EACA,cAAA;AJJJ;AIME;EACE,yBAAA;AJJJ;AIDE;EACE,gBAAA;EACA,cAAA;AJGJ;AIDE;EACE,yBAAA;AJGJ;AIRE;EACE,gBAAA;EACA,cAAA;AJUJ;AIRE;EACE,yBAAA;AJUJ;AIfE;EACE,gBAAA;EACA,cAAA;AJiBJ;AIfE;EACE,yBAAA;AJiBJ;AItBE;EACE,gBAAA;EACA,cAAA;AJwBJ;AItBE;EACE,yBAAA;AJwBJ;AI7BE;EACE,gBAAA;EACA,cAAA;AJ+BJ;AI7BE;EACE,yBAAA;AJ+BJ;AIpCE;EACE,gBAAA;EACA,cAAA;AJsCJ;AIpCE;EACE,yBAAA;AJsCJ;AI3CE;EACE,gBAAA;EACA,cAAA;AJ6CJ;AI3CE;EACE,yBAAA;AJ6CJ;AIlDE;EACE,gBAAA;EACA,cAAA;AJoDJ;AIlDE;EACE,yBAAA;AJoDJ;AIzDE;EACE,gBAAA;EACA,cAAA;AJ2DJ;AIzDE;EACE,yBAAA;AJ2DJ;AIhEE;EACE,gBAAA;EACA,cAAA;AJkEJ;AIhEE;EACE,yBAAA;AJkEJ;AIvEE;EACE,gBAAA;EACA,cAAA;AJyEJ;AIvEE;EACE,yBAAA;AJyEJ;AI9EE;EACE,gBAAA;EACA,cAAA;AJgFJ;AI9EE;EACE,yBAAA;AJgFJ;AIrFE;EACE,gBAAA;EACA,cAAA;AJuFJ;AIrFE;EACE,yBAAA;AJuFJ;AI5FE;EACE,gBAAA;EACA,cAAA;AJ8FJ;AI5FE;EACE,yBAAA;AJ8FJ;AInGE;EACE,gBAAA;EACA,cAAA;AJqGJ;AInGE;EACE,yBAAA;AJqGJ;AI1GE;EACE,gBAAA;EACA,cAAA;AJ4GJ;AI1GE;EACE,yBAAA;AJ4GJ;AIjHE;EACE,gBAAA;EACA,cAAA;AJmHJ;AIjHE;EACE,yBAAA;AJmHJ;AIxHE;EACE,gBAAA;EACA,cAAA;AJ0HJ;AIxHE;EACE,yBAAA;AJ0HJ;AI/HE;EACE,gBAAA;EACA,cAAA;AJiIJ;AI/HE;EACE,yBAAA;AJiIJ;AItIE;EACE,gBAAA;EACA,cAAA;AJwIJ;AItIE;EACE,yBAAA;AJwIJ;AI7IE;EACE,gBAAA;EACA,cAAA;AJ+IJ;AI7IE;EACE,yBAAA;AJ+IJ;AIpJE;EACE,gBAAA;EACA,cAAA;AJsJJ;AIpJE;EACE,yBAAA;AJsJJ;AI3JE;EACE,gBAAA;EACA,cAAA;AJ6JJ;AI3JE;EACE,yBAAA;AJ6JJ;AIlKE;EACE,gBAAA;EACA,cAAA;AJoKJ;AIlKE;EACE,yBAAA;AJoKJ;AIzKE;EACE,gBAAA;EACA,cAAA;AJ2KJ;AIzKE;EACE,yBAAA;AJ2KJ;AIhLE;EACE,gBAAA;EACA,cAAA;AJkLJ;AIhLE;EACE,yBAAA;AJkLJ;AIvLE;EACE,gBAAA;EACA,cAAA;AJyLJ;AIvLE;EACE,yBAAA;AJyLJ;AI9LE;EACE,gBAAA;EACA,cAAA;AJgMJ;AI9LE;EACE,yBAAA;AJgMJ;AIrME;EACE,gBAAA;EACA,cAAA;AJuMJ;AIrME;EACE,yBAAA;AJuMJ;AI5ME;EACE,gBAAA;EACA,cAAA;AJ8MJ;AI5ME;EACE,yBAAA;AJ8MJ;AInNE;EACE,gBAAA;EACA,cAAA;AJqNJ;AInNE;EACE,yBAAA;AJqNJ;AI1NE;EACE,gBAAA;EACA,cAAA;AJ4NJ;AI1NE;EACE,yBAAA;AJ4NJ;AIjOE;EACE,gBAAA;EACA,cAAA;AJmOJ;AIjOE;EACE,yBAAA;AJmOJ;AIxOE;EACE,gBAAA;EACA,cAAA;AJ0OJ;AIxOE;EACE,yBAAA;AJ0OJ;AI/OE;EACE,gBAAA;EACA,cAAA;AJiPJ;AI/OE;EACE,yBAAA;AJiPJ;AItPE;EACE,gBAAA;EACA,cAAA;AJwPJ;AItPE;EACE,yBAAA;AJwPJ;AI7PE;EACE,gBAAA;EACA,cAAA;AJ+PJ;AI7PE;EACE,yBAAA;AJ+PJ;AIpQE;EACE,gBAAA;EACA,cAAA;AJsQJ;AIpQE;EACE,yBAAA;AJsQJ;AI3QE;EACE,gBAAA;EACA,cAAA;AJ6QJ;AI3QE;EACE,yBAAA;AJ6QJ;AIlRE;EACE,gBAAA;EACA,cAAA;AJoRJ;AIlRE;EACE,yBAAA;AJoRJ;AIzRE;EACE,gBAAA;EACA,cAAA;AJ2RJ;AIzRE;EACE,yBAAA;AJ2RJ;AIhSE;EACE,gBAAA;EACA,cAAA;AJkSJ;AIhSE;EACE,yBAAA;AJkSJ;AIvSE;EACE,gBAAA;EACA,cAAA;AJySJ;AIvSE;EACE,yBAAA;AJySJ;AI9SE;EACE,gBAAA;EACA,cAAA;AJgTJ;AI9SE;EACE,yBAAA;AJgTJ;AIrTE;EACE,gBAAA;EACA,cAAA;AJuTJ;AIrTE;EACE,yBAAA;AJuTJ;AI5TE;EACE,gBAAA;EACA,cAAA;AJ8TJ;AI5TE;EACE,yBAAA;AJ8TJ;AInUE;EACE,gBAAA;EACA,cAAA;AJqUJ;AInUE;EACE,yBAAA;AJqUJ;AI1UE;EACE,gBAAA;EACA,cAAA;AJ4UJ;AI1UE;EACE,yBAAA;AJ4UJ;AA10FA;EAEI,qBAAA;AA20FJ;AA70FA;EAWI,gCAAA;EACA,6BAAA;EACA,8BAAA;EACA,iCAAA;EAKA,2CAAA;EACA,2CAAA;EACA,2CAAA;EACA,0CAAA;EAcA,UAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,qBAAA;EAEA,0DAAA;EACA,mCAAA;AAmzFJ;AAr0FI;EACE,gCAAA;EACA,gCAAA;EACA,iCAAA;EACA,iCAAA;EACA,8CAAA;EACA,8CAAA;EACA,8CAAA;EACA,6CAAA;AAu0FN;AA3zFI;EACE,WAAA;AA6zFN;AA32FA;EAkDM,gCAAA;EACA,iCAAA;EACA,8BAAA;AA4zFN;AAh3FA;EAwDM,gCAAA;EACA,iCAAA;EACA,sCAAA;EACA,oBAAA;AA2zFN;AAvzFE;EACE;IACE,UAAA;EAyzFJ;EAvzFE;IACE,UAAA;EAyzFJ;AACF;AAtzFE;EACE;IACE,UAAA;EAwzFJ;EAtzFE;IACE,UAAA;IACA,SAAA;IACA,aAAA;IACA,gBAAA;EAwzFJ;AACF",sourcesContent:[`@import '../../../resources/lato';
@import '../../../resources/slack-icons-font';

.Notifications2018 {
  a {
    text-decoration: none;
  }

  .NotificationHost {
    // This file uses a pared-down version of Slack Kit's color variable system.
    // Please reach out in #devel-slack-kit if you have any questions about how
    // to use these colors!

    // Light Mode variable names
    --sk_primary_foreground: #1d1c1d; // rgb(29, 28, 29)
    --sk_primary_background: #fff;
    --sk_inverted_foreground: #fff;
    --sk_inverted_background: #1d1c1d;
    // These are fades of the primary color at four stops: 4%, 13%, 50% and 70%.
    // min, low, high, and max describe how much contrast the color should create
    // against the background, e.g. _max would create the darkest gray in light
    // mode and the lightest gray in dark mode.
    --sk_foreground_min: rgba(29, 28, 29, 0.04);
    --sk_foreground_low: rgba(29, 28, 29, 0.13);
    --sk_foreground_high: rgba(29, 28, 29, 0.5);
    --sk_foreground_max: rgba(29, 28, 29, 0.7);

    // and their Dark Mode counterparts
    &.NotificationHost--dark {
      --sk_primary_foreground: #e8e8e8; // rgb(232, 232, 232)
      --sk_primary_background: #1a1d21;
      --sk_inverted_foreground: #1a1d21;
      --sk_inverted_background: #e8e8e8;
      --sk_foreground_min: rgba(232, 232, 232, 0.04);
      --sk_foreground_low: rgba(232, 232, 232, 0.13);
      --sk_foreground_high: rgba(232, 232, 232, 0.5);
      --sk_foreground_max: rgba(232, 232, 232, 0.7);
    }

    width: 98%;
    height: 100%;
    float: right;
    display: flex;
    align-items: flex-end;

    font-family: Slack-Lato, Meiryo, Lucida Grande, sans-serif;
    color: var(--sk_primary_foreground);

    &-list {
      width: 100%;
    }

    .spin-enter {
      -webkit-animation-duration: 0.2s;
      -webkit-animation-fill-mode: both;
      -webkit-animation-name: fadeIn;
    }

    .spin-leave {
      -webkit-animation-duration: 0.2s;
      -webkit-animation-fill-mode: both;
      -webkit-animation-name: collapseHeight;
      align-self: flex-end;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes collapseHeight {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      height: 0;
      margin-top: 0;
      margin-bottom: 0;
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
`,`/*
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
@lato: 'Slack-Lato', 'appleLogo', sans-serif;
@helvetica: 'Helvetica Neue', Helvetica, 'Segoe UI', Tahoma, Arial, sans-serif;

/*
 * Explanation of font-family choice / sequence ...
 * consolas is a MSFT font included with Windows XP and is designed for legibility,
 * ClearType-friendly etc. https://en.wikipedia.org/wiki/Consolas
 * \`courier\` is next as it looks nice on the Mac, which won't have Consolas.
 * there is \`Menlo\` on the Mac, but it's quite tall and long compared to courier.
 * as a fallback, \`monospace\` is the generic family we want to render snippets with.
 */
@monospace: Consolas, monaco, courier, monospace !important;
`,`/*
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

@import './plastic_typography.less';
@import './plastic_colors.less';

// Fonts
.helvetica() {
  font-family: @helvetica;
}
.lato() {
  font-family: @lato;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
.lato_black() {
  font-family: @lato;
  font-weight: 900;
}
.lato_bold() {
  font-family: @lato;
  font-weight: 700;
}
.lato_regular() {
  font-family: @lato;
  font-weight: 500;
}
.lato_light() {
  font-family: @lato;
  font-weight: 300;
}
.monospace() {
  font-family: @monospace;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
}

// Unit conversion
.px_to_rem(@property, @px_value) when (ispixel(@px_value)) {
  @{property}: unit(@px_value / 16, rem);
}

/* Font Size Mixin
 * For example:
 * 	.font_size(16px);		// 16 is in px unit and will output in rem unit: \`font-size: 1rem;\`
*/
.font_size(@px_value) when (ispixel(@px_value)) {
  .px_to_rem(font-size, @px_value);
}

/* Line Height Mixin
 * For example:
 * 	.line_height(24px);	// 24 is in px unit and will output in rem unit: \`line-height: 1.5rem;\`
*/
.line_height(@px_value) when (ispixel(@px_value)) {
  .px_to_rem(line-height, @px_value);
}

// Font Styles
.normal() {
  font-weight: normal;
}
.black() {
  font-weight: 900;
}
.bold() {
  font-weight: 700;
}
.medium() {
  font-weight: 500;
}
.light() {
  font-weight: 300;
}
.italic() {
  font-style: italic;
}
.underline() {
  text-decoration: underline;
}
.no_underline() {
  text-decoration: none;
}
.tiny {
  font-size: 0.7rem;
}
.small {
  font-size: 0.9rem;
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
`],sourceRoot:""}]);const on=En},3928:(x,g,l)=>{"use strict";l.d(g,{Z:()=>J});var h=l(428),b=l.n(h),S=l(1128),F=l.n(S),_=F()(b());_.push([x.id,`.Notifications2018 .Team {
  background-color: var(--sk_primary_background);
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(44, 45, 48, 0.3);
  margin: 10px;
}
.Notifications2018 .Team a,
.Notifications2018 .Team a:active,
.Notifications2018 .Team a:visited,
.Notifications2018 .Team a:focus {
  color: unset;
}
.Notifications2018 .Team > header {
  border-radius: 4px 4px 0 0;
  margin: 0;
  height: 40px;
  position: relative;
}
.Notifications2018 .Team > header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  position: relative;
  display: inline-block;
}
.Notifications2018 .Team > header i {
  margin: 1px 9px 0 0;
}
.Notifications2018 .Team > header a.OpenTeam,
.Notifications2018 .Team > header a.Close {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.Notifications2018 .Team > header a.OpenTeam {
  margin-left: 10px;
  display: inline-block;
  box-sizing: border-box;
  width: calc(100% - 50px);
}
.Notifications2018 .Team > header a.OpenTeam i {
  padding-top: 5px;
  float: left;
}
.Notifications2018 .Team > header a.OpenTeam h3 {
  width: calc(100% - 30px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.Notifications2018 .Team > header a.Close {
  right: 5px;
  box-sizing: border-box;
  float: right;
  display: inline;
}
.Notifications2018 .Team > header > a:hover {
  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/html-notifications/team.less"],names:[],mappings:"AAAA;EAEI,8CAAA;EACA,kBAAA;EACA,6CAAA;EACA,YAAA;AAAJ;AALA;;;;EAWM,YAAA;AAAN;AAGI;EACE,0BAAA;EACA,SAAA;EACA,YAAA;EACA,kBAAA;AADN;AAHI;EAOI,SAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,qBAAA;AADR;AAVI;EAeI,mBAAA;AAFR;AAbI;;EAoBI,kBAAA;EACA,QAAA;EACA,2BAAA;AAHR;AAnBI;EA0BI,iBAAA;EACA,qBAAA;EACA,sBAAA;EACA,wBAAA;AAJR;AAzBI;EAgCM,gBAAA;EACA,WAAA;AAJV;AA7BI;EAqCM,wBAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;AALV;AAnCI;EA6CI,UAAA;EACA,sBAAA;EACA,YAAA;EACA,eAAA;AAPR;AAUM;EACE,0DAAA;AARR",sourcesContent:[`.Notifications2018 {
  .Team {
    background-color: var(--sk_primary_background);
    border-radius: 4px;
    box-shadow: 0px 1px 4px rgba(44, 45, 48, 0.3);
    margin: 10px;

    a,
    a:active,
    a:visited,
    a:focus {
      color: unset;
    }

    & > header {
      border-radius: 4px 4px 0 0;
      margin: 0;
      height: 40px;
      position: relative;

      h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 800;
        position: relative;
        display: inline-block;
      }

      i {
        margin: 1px 9px 0 0;
      }

      a.OpenTeam,
      a.Close {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      a.OpenTeam {
        margin-left: 10px;
        display: inline-block;
        box-sizing: border-box;
        width: ~'calc(100% - 50px)';

        i {
          padding-top: 5px;
          float: left;
        }

        h3 {
          width: ~'calc(100% - 30px)';
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      a.Close {
        right: 5px;
        box-sizing: border-box;
        float: right;
        display: inline;
      }

      & > a:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
      }
    }
  }
}
`],sourceRoot:""}]);const J=_},4411:(x,g,l)=>{"use strict";l.d(g,{Z:()=>h});const h=l.p+"slack-icons-v25aaab12924ee1742103112e4bfa21b70.woff2"},35:(x,g,l)=>{"use strict";l.d(g,{Z:()=>h});const h=l.p+"lato-blackd3e44e6115ad32c371760205d27375ed.woff2"},3535:(x,g,l)=>{"use strict";l.d(g,{Z:()=>h});const h=l.p+"lato-bold31816c24a18fbc659282368ab2ac9478.woff2"},1266:(x,g,l)=>{"use strict";l.d(g,{Z:()=>h});const h=l.p+"lato-italic-black62bc5da14d9c6ff41e5f0f456d314808.woff2"},737:(x,g,l)=>{"use strict";l.d(g,{Z:()=>h});const h=l.p+"lato-italic-bold365ea5a303e2259ca5ab8247820f087b.woff2"},6254:(x,g,l)=>{"use strict";l.d(g,{Z:()=>h});const h=l.p+"lato-italic-light074c7fc38126bb94664d75a61d77b746.woff2"},3528:(x,g,l)=>{"use strict";l.d(g,{Z:()=>h});const h=l.p+"lato-italic4484c4211566a05bd71b1f4758adde46.woff2"},4897:(x,g,l)=>{"use strict";l.d(g,{Z:()=>h});const h=l.p+"lato-light2815bd9ba07f2cbe781a3ee1ed79f863.woff2"},8015:(x,g,l)=>{"use strict";l.d(g,{Z:()=>h});const h=l.p+"lato-regularf1aa7a0753149183efa2f47ac56de822.woff2"},1128:x=>{"use strict";x.exports=function(g){var l=[];return l.toString=function(){return this.map(function(b){var S=g(b);return b[2]?"@media ".concat(b[2]," {").concat(S,"}"):S}).join("")},l.i=function(h,b,S){typeof h=="string"&&(h=[[null,h,""]]);var F={};if(S)for(var _=0;_<this.length;_++){var J=this[_][0];J!=null&&(F[J]=!0)}for(var U=0;U<h.length;U++){var R=[].concat(h[U]);S&&F[R[0]]||(b&&(R[2]?R[2]="".concat(b," and ").concat(R[2]):R[2]=b),l.push(R))}},l}},428:x=>{"use strict";function g(_,J){return F(_)||S(_,J)||h(_,J)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(_,J){if(_){if(typeof _=="string")return b(_,J);var U=Object.prototype.toString.call(_).slice(8,-1);if(U==="Object"&&_.constructor&&(U=_.constructor.name),U==="Map"||U==="Set")return Array.from(_);if(U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))return b(_,J)}}function b(_,J){(J==null||J>_.length)&&(J=_.length);for(var U=0,R=new Array(J);U<J;U++)R[U]=_[U];return R}function S(_,J){var U=_&&(typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"]);if(U!=null){var R=[],Q=!0,Y=!1,en,G;try{for(U=U.call(_);!(Q=(en=U.next()).done)&&(R.push(en.value),!(J&&R.length===J));Q=!0);}catch(cn){Y=!0,G=cn}finally{try{!Q&&U.return!=null&&U.return()}finally{if(Y)throw G}}return R}}function F(_){if(Array.isArray(_))return _}x.exports=function(J){var U=g(J,4),R=U[1],Q=U[3];if(typeof btoa=="function"){var Y=btoa(unescape(encodeURIComponent(JSON.stringify(Q)))),en="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(Y),G="/*# ".concat(en," */"),cn=Q.sources.map(function(nn){return"/*# sourceURL=".concat(Q.sourceRoot||"").concat(nn," */")});return[R].concat(cn).concat([G]).join(`
`)}return[R].join(`
`)}},4322:x=>{"use strict";x.exports=function(g,l){return l||(l={}),g=g&&g.__esModule?g.default:g,typeof g!="string"?g:(/^['"].*['"]$/.test(g)&&(g=g.slice(1,-1)),l.hash&&(g+=l.hash),/["'() \t\n]/.test(g)||l.needQuotes?'"'.concat(g.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):g)}},464:function(x){/*! @license DOMPurify 2.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.3/LICENSE */(function(g,l){x.exports=l()})(this,function(){"use strict";function g(m){if(Array.isArray(m)){for(var D=0,N=Array(m.length);D<m.length;D++)N[D]=m[D];return N}else return Array.from(m)}var l=Object.hasOwnProperty,h=Object.setPrototypeOf,b=Object.isFrozen,S=Object.getPrototypeOf,F=Object.getOwnPropertyDescriptor,_=Object.freeze,J=Object.seal,U=Object.create,R=typeof Reflect!="undefined"&&Reflect,Q=R.apply,Y=R.construct;Q||(Q=function(D,N,sn){return D.apply(N,sn)}),_||(_=function(D){return D}),J||(J=function(D){return D}),Y||(Y=function(D,N){return new(Function.prototype.bind.apply(D,[null].concat(g(N))))});var en=E(Array.prototype.forEach),G=E(Array.prototype.pop),cn=E(Array.prototype.push),nn=E(String.prototype.toLowerCase),hn=E(String.prototype.match),En=E(String.prototype.replace),pn=E(String.prototype.indexOf),In=E(String.prototype.trim),O=E(RegExp.prototype.test),v=s(TypeError);function E(m){return function(D){for(var N=arguments.length,sn=Array(N>1?N-1:0),wn=1;wn<N;wn++)sn[wn-1]=arguments[wn];return Q(m,D,sn)}}function s(m){return function(){for(var D=arguments.length,N=Array(D),sn=0;sn<D;sn++)N[sn]=arguments[sn];return Y(m,N)}}function I(m,D){h&&h(m,null);for(var N=D.length;N--;){var sn=D[N];if(typeof sn=="string"){var wn=nn(sn);wn!==sn&&(b(D)||(D[N]=wn),sn=wn)}m[sn]=!0}return m}function z(m){var D=U(null),N=void 0;for(N in m)Q(l,m,[N])&&(D[N]=m[N]);return D}function V(m,D){for(;m!==null;){var N=F(m,D);if(N){if(N.get)return E(N.get);if(typeof N.value=="function")return E(N.value)}m=S(m)}function sn(wn){return console.warn("fallback value for",wn),null}return sn}var on=_(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),rn=_(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Z=_(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),X=_(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),w=_(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),C=_(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),L=_(["#text"]),H=_(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Cn=_(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Fn=_(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),xn=_(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Pn=J(/\{\{[\s\S]*|[\s\S]*\}\}/gm),Rn=J(/<%[\s\S]*|[\s\S]*%>/gm),Tn=J(/^data-[\-\w.\u00B7-\uFFFF]/),Gn=J(/^aria-[\-\w]+$/),Sn=J(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),dn=J(/^(?:\w+script|data):/i),ln=J(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m};function gn(m){if(Array.isArray(m)){for(var D=0,N=Array(m.length);D<m.length;D++)N[D]=m[D];return N}else return Array.from(m)}var p=function(){return typeof window=="undefined"?null:window},y=function(D,N){if((typeof D=="undefined"?"undefined":mn(D))!=="object"||typeof D.createPolicy!="function")return null;var sn=null,wn="data-tt-policy-suffix";N.currentScript&&N.currentScript.hasAttribute(wn)&&(sn=N.currentScript.getAttribute(wn));var Wn="dompurify"+(sn?"#"+sn:"");try{return D.createPolicy(Wn,{createHTML:function(se){return se}})}catch{return console.warn("TrustedTypes policy "+Wn+" could not be created."),null}};function k(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:p(),D=function(d){return k(d)};if(D.version="2.3.3",D.removed=[],!m||!m.document||m.document.nodeType!==9)return D.isSupported=!1,D;var N=m.document,sn=m.document,wn=m.DocumentFragment,Wn=m.HTMLTemplateElement,Un=m.Node,se=m.Element,yn=m.NodeFilter,ye=m.NamedNodeMap,ve=ye===void 0?m.NamedNodeMap||m.MozNamedAttrMap:ye,Ao=m.Text,Li=m.Comment,Mi=m.DOMParser,Wo=m.trustedTypes,Ue=se.prototype,lo=V(Ue,"cloneNode"),jo=V(Ue,"nextSibling"),Ui=V(Ue,"childNodes"),fo=V(Ue,"parentNode");if(typeof Wn=="function"){var so=sn.createElement("template");so.content&&so.content.ownerDocument&&(sn=so.content.ownerDocument)}var ee=y(Wo,N),Go=ee&&Ke?ee.createHTML(""):"",$n=sn,Eo=$n.implementation,Hi=$n.createNodeIterator,Ki=$n.createDocumentFragment,Wi=$n.getElementsByTagName,ji=N.importNode,zo={};try{zo=z(sn).documentMode?sn.documentMode:{}}catch{}var Yn={};D.isSupported=typeof fo=="function"&&Eo&&typeof Eo.createHTMLDocument!="undefined"&&zo!==9;var uo=Pn,ho=Rn,Gi=Tn,zi=Gn,qi=dn,oe=ln,po=Sn,Jn=null,qo=I({},[].concat(gn(on),gn(rn),gn(Z),gn(w),gn(L))),Nn=null,$o=I({},[].concat(gn(H),gn(Cn),gn(Fn),gn(xn))),go=null,_o=null,Yo=!0,bo=!0,Vo=!1,Ee=!1,ue=!1,mo=!1,Bo=!1,de=!1,He=!1,Zo=!0,Ke=!1,ce=!0,We=!0,Ie=!1,he={},pe=null,je=I({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Xo=null,we=I({},["audio","video","img","source","image","track"]),Co=null,Qo=I({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),yo="http://www.w3.org/1998/Math/MathML",vo="http://www.w3.org/2000/svg",ie="http://www.w3.org/1999/xhtml",Ge=ie,Io=!1,ge=void 0,$i=["application/xhtml+xml","text/html"],Yi="text/html",qn=void 0,Xn=null,Vi=sn.createElement("form"),re=function(d){Xn&&Xn===d||((!d||(typeof d=="undefined"?"undefined":mn(d))!=="object")&&(d={}),d=z(d),Jn="ALLOWED_TAGS"in d?I({},d.ALLOWED_TAGS):qo,Nn="ALLOWED_ATTR"in d?I({},d.ALLOWED_ATTR):$o,Co="ADD_URI_SAFE_ATTR"in d?I(z(Qo),d.ADD_URI_SAFE_ATTR):Qo,Xo="ADD_DATA_URI_TAGS"in d?I(z(we),d.ADD_DATA_URI_TAGS):we,pe="FORBID_CONTENTS"in d?I({},d.FORBID_CONTENTS):je,go="FORBID_TAGS"in d?I({},d.FORBID_TAGS):{},_o="FORBID_ATTR"in d?I({},d.FORBID_ATTR):{},he="USE_PROFILES"in d?d.USE_PROFILES:!1,Yo=d.ALLOW_ARIA_ATTR!==!1,bo=d.ALLOW_DATA_ATTR!==!1,Vo=d.ALLOW_UNKNOWN_PROTOCOLS||!1,Ee=d.SAFE_FOR_TEMPLATES||!1,ue=d.WHOLE_DOCUMENT||!1,de=d.RETURN_DOM||!1,He=d.RETURN_DOM_FRAGMENT||!1,Zo=d.RETURN_DOM_IMPORT!==!1,Ke=d.RETURN_TRUSTED_TYPE||!1,Bo=d.FORCE_BODY||!1,ce=d.SANITIZE_DOM!==!1,We=d.KEEP_CONTENT!==!1,Ie=d.IN_PLACE||!1,po=d.ALLOWED_URI_REGEXP||po,Ge=d.NAMESPACE||ie,ge=$i.indexOf(d.PARSER_MEDIA_TYPE)===-1?ge=Yi:ge=d.PARSER_MEDIA_TYPE,qn=ge==="application/xhtml+xml"?function(P){return P}:nn,Ee&&(bo=!1),He&&(de=!0),he&&(Jn=I({},[].concat(gn(L))),Nn=[],he.html===!0&&(I(Jn,on),I(Nn,H)),he.svg===!0&&(I(Jn,rn),I(Nn,Cn),I(Nn,xn)),he.svgFilters===!0&&(I(Jn,Z),I(Nn,Cn),I(Nn,xn)),he.mathMl===!0&&(I(Jn,w),I(Nn,Fn),I(Nn,xn))),d.ADD_TAGS&&(Jn===qo&&(Jn=z(Jn)),I(Jn,d.ADD_TAGS)),d.ADD_ATTR&&(Nn===$o&&(Nn=z(Nn)),I(Nn,d.ADD_ATTR)),d.ADD_URI_SAFE_ATTR&&I(Co,d.ADD_URI_SAFE_ATTR),d.FORBID_CONTENTS&&(pe===je&&(pe=z(pe)),I(pe,d.FORBID_CONTENTS)),We&&(Jn["#text"]=!0),ue&&I(Jn,["html","head","body"]),Jn.table&&(I(Jn,["tbody"]),delete go.tbody),_&&_(d),Xn=d)},ni=I({},["mi","mo","mn","ms","mtext"]),ei=I({},["foreignobject","desc","title","annotation-xml"]),ze=I({},rn);I(ze,Z),I(ze,X);var wo=I({},w);I(wo,C);var Zi=function(d){var P=fo(d);(!P||!P.tagName)&&(P={namespaceURI:ie,tagName:"template"});var W=nn(d.tagName),_n=nn(P.tagName);if(d.namespaceURI===vo)return P.namespaceURI===ie?W==="svg":P.namespaceURI===yo?W==="svg"&&(_n==="annotation-xml"||ni[_n]):Boolean(ze[W]);if(d.namespaceURI===yo)return P.namespaceURI===ie?W==="math":P.namespaceURI===vo?W==="math"&&ei[_n]:Boolean(wo[W]);if(d.namespaceURI===ie){if(P.namespaceURI===vo&&!ei[_n]||P.namespaceURI===yo&&!ni[_n])return!1;var On=I({},["title","style","font","a","script"]);return!wo[W]&&(On[W]||!ze[W])}return!1},zn=function(d){cn(D.removed,{element:d});try{d.parentNode.removeChild(d)}catch{try{d.outerHTML=Go}catch{d.remove()}}},oi=function(d,P){try{cn(D.removed,{attribute:P.getAttributeNode(d),from:P})}catch{cn(D.removed,{attribute:null,from:P})}if(P.removeAttribute(d),d==="is"&&!Nn[d])if(de||He)try{zn(P)}catch{}else try{P.setAttribute(d,"")}catch{}},ii=function(d){var P=void 0,W=void 0;if(Bo)d="<remove></remove>"+d;else{var _n=hn(d,/^[\r\n\t ]+/);W=_n&&_n[0]}ge==="application/xhtml+xml"&&(d='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+d+"</body></html>");var On=ee?ee.createHTML(d):d;if(Ge===ie)try{P=new Mi().parseFromString(On,ge)}catch{}if(!P||!P.documentElement){P=Eo.createDocument(Ge,"template",null);try{P.documentElement.innerHTML=Io?"":On}catch{}}var Dn=P.body||P.documentElement;return d&&W&&Dn.insertBefore(sn.createTextNode(W),Dn.childNodes[0]||null),Ge===ie?Wi.call(P,ue?"html":"body")[0]:ue?P.documentElement:Dn},ti=function(d){return Hi.call(d.ownerDocument||d,d,yn.SHOW_ELEMENT|yn.SHOW_COMMENT|yn.SHOW_TEXT,null,!1)},Xi=function(d){return d instanceof Ao||d instanceof Li?!1:typeof d.nodeName!="string"||typeof d.textContent!="string"||typeof d.removeChild!="function"||!(d.attributes instanceof ve)||typeof d.removeAttribute!="function"||typeof d.setAttribute!="function"||typeof d.namespaceURI!="string"||typeof d.insertBefore!="function"},Te=function(d){return(typeof Un=="undefined"?"undefined":mn(Un))==="object"?d instanceof Un:d&&(typeof d=="undefined"?"undefined":mn(d))==="object"&&typeof d.nodeType=="number"&&typeof d.nodeName=="string"},Qn=function(d,P,W){Yn[d]&&en(Yn[d],function(_n){_n.call(D,P,W,Xn)})},ci=function(d){var P=void 0;if(Qn("beforeSanitizeElements",d,null),Xi(d)||hn(d.nodeName,/[\u0080-\uFFFF]/))return zn(d),!0;var W=qn(d.nodeName);if(Qn("uponSanitizeElement",d,{tagName:W,allowedTags:Jn}),!Te(d.firstElementChild)&&(!Te(d.content)||!Te(d.content.firstElementChild))&&O(/<[/\w]/g,d.innerHTML)&&O(/<[/\w]/g,d.textContent)||W==="select"&&O(/<template/i,d.innerHTML))return zn(d),!0;if(!Jn[W]||go[W]){if(We&&!pe[W]){var _n=fo(d)||d.parentNode,On=Ui(d)||d.childNodes;if(On&&_n)for(var Dn=On.length,Ln=Dn-1;Ln>=0;--Ln)_n.insertBefore(lo(On[Ln],!0),jo(d))}return zn(d),!0}return d instanceof se&&!Zi(d)||(W==="noscript"||W==="noembed")&&O(/<\/no(script|embed)/i,d.innerHTML)?(zn(d),!0):(Ee&&d.nodeType===3&&(P=d.textContent,P=En(P,uo," "),P=En(P,ho," "),d.textContent!==P&&(cn(D.removed,{element:d.cloneNode()}),d.textContent=P)),Qn("afterSanitizeElements",d,null),!1)},ri=function(d,P,W){if(ce&&(P==="id"||P==="name")&&(W in sn||W in Vi))return!1;if(!(bo&&!_o[P]&&O(Gi,P))){if(!(Yo&&O(zi,P))){if(!Nn[P]||_o[P])return!1;if(!Co[P]){if(!O(po,En(W,oe,""))){if(!((P==="src"||P==="xlink:href"||P==="href")&&d!=="script"&&pn(W,"data:")===0&&Xo[d])){if(!(Vo&&!O(qi,En(W,oe,"")))){if(W)return!1}}}}}}return!0},ae=function(d){var P=void 0,W=void 0,_n=void 0,On=void 0;Qn("beforeSanitizeAttributes",d,null);var Dn=d.attributes;if(Dn){var Ln={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Nn};for(On=Dn.length;On--;){P=Dn[On];var ne=P,Se=ne.name,ai=ne.namespaceURI;if(W=In(P.value),_n=qn(Se),Ln.attrName=_n,Ln.attrValue=W,Ln.keepAttr=!0,Ln.forceKeepAttr=void 0,Qn("uponSanitizeAttribute",d,Ln),W=Ln.attrValue,!Ln.forceKeepAttr&&(oi(Se,d),!!Ln.keepAttr)){if(O(/\/>/i,W)){oi(Se,d);continue}Ee&&(W=En(W,uo," "),W=En(W,ho," "));var Qi=qn(d.nodeName);if(ri(Qi,_n,W))try{ai?d.setAttributeNS(ai,Se,W):d.setAttribute(Se,W),G(D.removed)}catch{}}}Qn("afterSanitizeAttributes",d,null)}},qe=function $(d){var P=void 0,W=ti(d);for(Qn("beforeSanitizeShadowDOM",d,null);P=W.nextNode();)Qn("uponSanitizeShadowNode",P,null),!ci(P)&&(P.content instanceof wn&&$(P.content),ae(P));Qn("afterSanitizeShadowDOM",d,null)};return D.sanitize=function($,d){var P=void 0,W=void 0,_n=void 0,On=void 0,Dn=void 0;if(Io=!$,Io&&($="<!-->"),typeof $!="string"&&!Te($)){if(typeof $.toString!="function")throw v("toString is not a function");if($=$.toString(),typeof $!="string")throw v("dirty is not a string, aborting")}if(!D.isSupported){if(mn(m.toStaticHTML)==="object"||typeof m.toStaticHTML=="function"){if(typeof $=="string")return m.toStaticHTML($);if(Te($))return m.toStaticHTML($.outerHTML)}return $}if(mo||re(d),D.removed=[],typeof $=="string"&&(Ie=!1),!Ie)if($ instanceof Un)P=ii("<!---->"),W=P.ownerDocument.importNode($,!0),W.nodeType===1&&W.nodeName==="BODY"||W.nodeName==="HTML"?P=W:P.appendChild(W);else{if(!de&&!Ee&&!ue&&$.indexOf("<")===-1)return ee&&Ke?ee.createHTML($):$;if(P=ii($),!P)return de?null:Go}P&&Bo&&zn(P.firstChild);for(var Ln=ti(Ie?$:P);_n=Ln.nextNode();)_n.nodeType===3&&_n===On||ci(_n)||(_n.content instanceof wn&&qe(_n.content),ae(_n),On=_n);if(On=null,Ie)return $;if(de){if(He)for(Dn=Ki.call(P.ownerDocument);P.firstChild;)Dn.appendChild(P.firstChild);else Dn=P;return Zo&&(Dn=ji.call(N,Dn,!0)),Dn}var ne=ue?P.outerHTML:P.innerHTML;return Ee&&(ne=En(ne,uo," "),ne=En(ne,ho," ")),ee&&Ke?ee.createHTML(ne):ne},D.setConfig=function($){re($),mo=!0},D.clearConfig=function(){Xn=null,mo=!1},D.isValidAttribute=function($,d,P){Xn||re({});var W=qn($),_n=qn(d);return ri(W,_n,P)},D.addHook=function($,d){typeof d=="function"&&(Yn[$]=Yn[$]||[],cn(Yn[$],d))},D.removeHook=function($){Yn[$]&&G(Yn[$])},D.removeHooks=function($){Yn[$]&&(Yn[$]=[])},D.removeAllHooks=function(){Yn={}},D}var M=k();return M})},449:(x,g,l)=>{"use strict";var h=l(6722),b={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},S={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},F={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J={};J[h.ForwardRef]=F,J[h.Memo]=_;function U(hn){return h.isMemo(hn)?_:J[hn.$$typeof]||b}var R=Object.defineProperty,Q=Object.getOwnPropertyNames,Y=Object.getOwnPropertySymbols,en=Object.getOwnPropertyDescriptor,G=Object.getPrototypeOf,cn=Object.prototype;function nn(hn,En,pn){if(typeof En!="string"){if(cn){var In=G(En);In&&In!==cn&&nn(hn,In,pn)}var O=Q(En);Y&&(O=O.concat(Y(En)));for(var v=U(hn),E=U(En),s=0;s<O.length;++s){var I=O[s];if(!S[I]&&!(pn&&pn[I])&&!(E&&E[I])&&!(v&&v[I])){var z=en(En,I);try{R(hn,I,z)}catch{}}}}return hn}x.exports=nn},5140:(x,g)=>{"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=typeof Symbol=="function"&&Symbol.for,h=l?Symbol.for("react.element"):60103,b=l?Symbol.for("react.portal"):60106,S=l?Symbol.for("react.fragment"):60107,F=l?Symbol.for("react.strict_mode"):60108,_=l?Symbol.for("react.profiler"):60114,J=l?Symbol.for("react.provider"):60109,U=l?Symbol.for("react.context"):60110,R=l?Symbol.for("react.async_mode"):60111,Q=l?Symbol.for("react.concurrent_mode"):60111,Y=l?Symbol.for("react.forward_ref"):60112,en=l?Symbol.for("react.suspense"):60113,G=l?Symbol.for("react.suspense_list"):60120,cn=l?Symbol.for("react.memo"):60115,nn=l?Symbol.for("react.lazy"):60116,hn=l?Symbol.for("react.block"):60121,En=l?Symbol.for("react.fundamental"):60117,pn=l?Symbol.for("react.responder"):60118,In=l?Symbol.for("react.scope"):60119;function O(E){if(typeof E=="object"&&E!==null){var s=E.$$typeof;switch(s){case h:switch(E=E.type,E){case R:case Q:case S:case _:case F:case en:return E;default:switch(E=E&&E.$$typeof,E){case U:case Y:case nn:case cn:case J:return E;default:return s}}case b:return s}}}function v(E){return O(E)===Q}g.AsyncMode=R,g.ConcurrentMode=Q,g.ContextConsumer=U,g.ContextProvider=J,g.Element=h,g.ForwardRef=Y,g.Fragment=S,g.Lazy=nn,g.Memo=cn,g.Portal=b,g.Profiler=_,g.StrictMode=F,g.Suspense=en,g.isAsyncMode=function(E){return v(E)||O(E)===R},g.isConcurrentMode=v,g.isContextConsumer=function(E){return O(E)===U},g.isContextProvider=function(E){return O(E)===J},g.isElement=function(E){return typeof E=="object"&&E!==null&&E.$$typeof===h},g.isForwardRef=function(E){return O(E)===Y},g.isFragment=function(E){return O(E)===S},g.isLazy=function(E){return O(E)===nn},g.isMemo=function(E){return O(E)===cn},g.isPortal=function(E){return O(E)===b},g.isProfiler=function(E){return O(E)===_},g.isStrictMode=function(E){return O(E)===F},g.isSuspense=function(E){return O(E)===en},g.isValidElementType=function(E){return typeof E=="string"||typeof E=="function"||E===S||E===Q||E===_||E===F||E===en||E===G||typeof E=="object"&&E!==null&&(E.$$typeof===nn||E.$$typeof===cn||E.$$typeof===J||E.$$typeof===U||E.$$typeof===Y||E.$$typeof===En||E.$$typeof===pn||E.$$typeof===In||E.$$typeof===hn)},g.typeOf=O},6722:(x,g,l)=>{"use strict";x.exports=l(5140)},9317:x=>{var g="Expected a function",l=NaN,h="[object Symbol]",b=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,_=/^0o[0-7]+$/i,J=parseInt,U=typeof global=="object"&&global&&global.Object===Object&&global,R=typeof self=="object"&&self&&self.Object===Object&&self,Q=U||R||Function("return this")(),Y=Object.prototype,en=Y.toString,G=Math.max,cn=Math.min,nn=function(){return Q.Date.now()};function hn(v,E,s){var I,z,V,on,rn,Z,X=0,w=!1,C=!1,L=!0;if(typeof v!="function")throw new TypeError(g);E=O(E)||0,En(s)&&(w=!!s.leading,C="maxWait"in s,V=C?G(O(s.maxWait)||0,E):V,L="trailing"in s?!!s.trailing:L);function H(dn){var ln=I,mn=z;return I=z=void 0,X=dn,on=v.apply(mn,ln),on}function Cn(dn){return X=dn,rn=setTimeout(Pn,E),w?H(dn):on}function Fn(dn){var ln=dn-Z,mn=dn-X,gn=E-ln;return C?cn(gn,V-mn):gn}function xn(dn){var ln=dn-Z,mn=dn-X;return Z===void 0||ln>=E||ln<0||C&&mn>=V}function Pn(){var dn=nn();if(xn(dn))return Rn(dn);rn=setTimeout(Pn,Fn(dn))}function Rn(dn){return rn=void 0,L&&I?H(dn):(I=z=void 0,on)}function Tn(){rn!==void 0&&clearTimeout(rn),X=0,I=Z=z=rn=void 0}function Gn(){return rn===void 0?on:Rn(nn())}function Sn(){var dn=nn(),ln=xn(dn);if(I=arguments,z=this,Z=dn,ln){if(rn===void 0)return Cn(Z);if(C)return rn=setTimeout(Pn,E),H(Z)}return rn===void 0&&(rn=setTimeout(Pn,E)),on}return Sn.cancel=Tn,Sn.flush=Gn,Sn}function En(v){var E=typeof v;return!!v&&(E=="object"||E=="function")}function pn(v){return!!v&&typeof v=="object"}function In(v){return typeof v=="symbol"||pn(v)&&en.call(v)==h}function O(v){if(typeof v=="number")return v;if(In(v))return l;if(En(v)){var E=typeof v.valueOf=="function"?v.valueOf():v;v=En(E)?E+"":E}if(typeof v!="string")return v===0?v:+v;v=v.replace(b,"");var s=F.test(v);return s||_.test(v)?J(v.slice(2),s?2:8):S.test(v)?l:+v}x.exports=hn},1717:x=>{var g="Expected a function",l=NaN,h="[object Symbol]",b=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,_=/^0o[0-7]+$/i,J=parseInt,U=typeof global=="object"&&global&&global.Object===Object&&global,R=typeof self=="object"&&self&&self.Object===Object&&self,Q=U||R||Function("return this")(),Y=Object.prototype,en=Y.toString,G=Math.max,cn=Math.min,nn=function(){return Q.Date.now()};function hn(E,s,I){var z,V,on,rn,Z,X,w=0,C=!1,L=!1,H=!0;if(typeof E!="function")throw new TypeError(g);s=v(s)||0,pn(I)&&(C=!!I.leading,L="maxWait"in I,on=L?G(v(I.maxWait)||0,s):on,H="trailing"in I?!!I.trailing:H);function Cn(ln){var mn=z,gn=V;return z=V=void 0,w=ln,rn=E.apply(gn,mn),rn}function Fn(ln){return w=ln,Z=setTimeout(Rn,s),C?Cn(ln):rn}function xn(ln){var mn=ln-X,gn=ln-w,p=s-mn;return L?cn(p,on-gn):p}function Pn(ln){var mn=ln-X,gn=ln-w;return X===void 0||mn>=s||mn<0||L&&gn>=on}function Rn(){var ln=nn();if(Pn(ln))return Tn(ln);Z=setTimeout(Rn,xn(ln))}function Tn(ln){return Z=void 0,H&&z?Cn(ln):(z=V=void 0,rn)}function Gn(){Z!==void 0&&clearTimeout(Z),w=0,z=X=V=Z=void 0}function Sn(){return Z===void 0?rn:Tn(nn())}function dn(){var ln=nn(),mn=Pn(ln);if(z=arguments,V=this,X=ln,mn){if(Z===void 0)return Fn(X);if(L)return Z=setTimeout(Rn,s),Cn(X)}return Z===void 0&&(Z=setTimeout(Rn,s)),rn}return dn.cancel=Gn,dn.flush=Sn,dn}function En(E,s,I){var z=!0,V=!0;if(typeof E!="function")throw new TypeError(g);return pn(I)&&(z="leading"in I?!!I.leading:z,V="trailing"in I?!!I.trailing:V),hn(E,s,{leading:z,maxWait:s,trailing:V})}function pn(E){var s=typeof E;return!!E&&(s=="object"||s=="function")}function In(E){return!!E&&typeof E=="object"}function O(E){return typeof E=="symbol"||In(E)&&en.call(E)==h}function v(E){if(typeof E=="number")return E;if(O(E))return l;if(pn(E)){var s=typeof E.valueOf=="function"?E.valueOf():E;E=pn(s)?s+"":s}if(typeof E!="string")return E===0?E:+E;E=E.replace(b,"");var I=F.test(E);return I||_.test(E)?J(E.slice(2),I?2:8):S.test(E)?l:+E}x.exports=En},7876:(x,g,l)=>{"use strict";l.d(g,{qp:()=>h.qp,Qb:()=>h.Qb,d4:()=>h.d4,bt:()=>h.bt,Ye:()=>h.Ye,_Y:()=>h._Y,sO:()=>h.sO,eJ:()=>h.eJ,az:()=>b.createElement,Vf:()=>b.createRef,wA:()=>b.Component,ZP:()=>gn,hu:()=>en,uy:()=>Gn,Tm:()=>Tn,l$:()=>Rn,m$:()=>Sn,Vx:()=>_,Gp:()=>Q,mm:()=>dn});var h=l(7604),b=l(1174);function S(p,y){for(var k in y)p[k]=y[k];return p}function F(p,y){for(var k in p)if(k!=="__source"&&!(k in y))return!0;for(var M in y)if(M!=="__source"&&p[M]!==y[M])return!0;return!1}function _(p){this.props=p}function J(p,y){function k(m){var D=this.props.ref,N=D==m.ref;return!N&&D&&(D.call?D(null):D.current=null),y?!y(this.props,m)||!N:F(this.props,m)}function M(m){return this.shouldComponentUpdate=k,(0,b.createElement)(p,m)}return M.displayName="Memo("+(p.displayName||p.name)+")",M.prototype.isReactComponent=!0,M.__f=!0,M}(_.prototype=new b.Component).isPureReactComponent=!0,_.prototype.shouldComponentUpdate=function(p,y){return F(this.props,p)||F(this.state,y)};var U=b.options.__b;b.options.__b=function(p){p.type&&p.type.__f&&p.ref&&(p.props.ref=p.ref,p.ref=null),U&&U(p)};var R=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Q(p){function y(k,M){var m=S({},k);return delete m.ref,p(m,(M=k.ref||M)&&(typeof M!="object"||"current"in M)?M:null)}return y.$$typeof=R,y.render=y,y.prototype.isReactComponent=y.__f=!0,y.displayName="ForwardRef("+(p.displayName||p.name)+")",y}var Y=function(p,y){return p==null?null:(0,b.toChildArray)((0,b.toChildArray)(p).map(y))},en={map:Y,forEach:Y,count:function(p){return p?(0,b.toChildArray)(p).length:0},only:function(p){var y=(0,b.toChildArray)(p);if(y.length!==1)throw"Children.only";return y[0]},toArray:b.toChildArray},G=b.options.__e;b.options.__e=function(p,y,k){if(p.then){for(var M,m=y;m=m.__;)if((M=m.__c)&&M.__c)return y.__e==null&&(y.__e=k.__e,y.__k=k.__k),M.__c(p,y)}G(p,y,k)};var cn=b.options.unmount;function nn(){this.__u=0,this.t=null,this.__b=null}function hn(p){var y=p.__.__c;return y&&y.__e&&y.__e(p)}function En(p){var y,k,M;function m(D){if(y||(y=p()).then(function(N){k=N.default||N},function(N){M=N}),M)throw M;if(!k)throw y;return(0,b.createElement)(k,D)}return m.displayName="Lazy",m.__f=!0,m}function pn(){this.u=null,this.o=null}b.options.unmount=function(p){var y=p.__c;y&&y.__R&&y.__R(),y&&p.__h===!0&&(p.type=null),cn&&cn(p)},(nn.prototype=new b.Component).__c=function(p,y){var k=y.__c,M=this;M.t==null&&(M.t=[]),M.t.push(k);var m=hn(M.__v),D=!1,N=function(){D||(D=!0,k.__R=null,m?m(sn):sn())};k.__R=N;var sn=function(){if(!--M.__u){if(M.state.__e){var Wn=M.state.__e;M.__v.__k[0]=function se(yn,ye,ve){return yn&&(yn.__v=null,yn.__k=yn.__k&&yn.__k.map(function(Ao){return se(Ao,ye,ve)}),yn.__c&&yn.__c.__P===ye&&(yn.__e&&ve.insertBefore(yn.__e,yn.__d),yn.__c.__e=!0,yn.__c.__P=ve)),yn}(Wn,Wn.__c.__P,Wn.__c.__O)}var Un;for(M.setState({__e:M.__b=null});Un=M.t.pop();)Un.forceUpdate()}},wn=y.__h===!0;M.__u++||wn||M.setState({__e:M.__b=M.__v.__k[0]}),p.then(N,N)},nn.prototype.componentWillUnmount=function(){this.t=[]},nn.prototype.render=function(p,y){if(this.__b){if(this.__v.__k){var k=document.createElement("div"),M=this.__v.__k[0].__c;this.__v.__k[0]=function D(N,sn,wn){return N&&(N.__c&&N.__c.__H&&(N.__c.__H.__.forEach(function(Wn){typeof Wn.__c=="function"&&Wn.__c()}),N.__c.__H=null),(N=S({},N)).__c!=null&&(N.__c.__P===wn&&(N.__c.__P=sn),N.__c=null),N.__k=N.__k&&N.__k.map(function(Wn){return D(Wn,sn,wn)})),N}(this.__b,k,M.__O=M.__P)}this.__b=null}var m=y.__e&&(0,b.createElement)(b.Fragment,null,p.fallback);return m&&(m.__h=null),[(0,b.createElement)(b.Fragment,null,y.__e?null:p.children),m]};var In=function(p,y,k){if(++k[1]===k[0]&&p.o.delete(y),p.props.revealOrder&&(p.props.revealOrder[0]!=="t"||!p.o.size))for(k=p.u;k;){for(;k.length>3;)k.pop()();if(k[1]<k[0])break;p.u=k=k[2]}};function O(p){return this.getChildContext=function(){return p.context},p.children}function v(p){var y=this,k=p.i;y.componentWillUnmount=function(){(0,b.render)(null,y.l),y.l=null,y.i=null},y.i&&y.i!==k&&y.componentWillUnmount(),p.__v?(y.l||(y.i=k,y.l={nodeType:1,parentNode:k,childNodes:[],appendChild:function(M){this.childNodes.push(M),y.i.appendChild(M)},insertBefore:function(M,m){this.childNodes.push(M),y.i.appendChild(M)},removeChild:function(M){this.childNodes.splice(this.childNodes.indexOf(M)>>>1,1),y.i.removeChild(M)}}),(0,b.render)((0,b.createElement)(O,{context:y.context},p.__v),y.l)):y.l&&y.componentWillUnmount()}function E(p,y){return(0,b.createElement)(v,{__v:p,i:y})}(pn.prototype=new b.Component).__e=function(p){var y=this,k=hn(y.__v),M=y.o.get(p);return M[0]++,function(m){var D=function(){y.props.revealOrder?(M.push(m),In(y,p,M)):m()};k?k(D):D()}},pn.prototype.render=function(p){this.u=null,this.o=new Map;var y=(0,b.toChildArray)(p.children);p.revealOrder&&p.revealOrder[0]==="b"&&y.reverse();for(var k=y.length;k--;)this.o.set(y[k],this.u=[1,0,this.u]);return p.children},pn.prototype.componentDidUpdate=pn.prototype.componentDidMount=function(){var p=this;this.o.forEach(function(y,k){In(p,k,y)})};var s=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,I=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,z=function(p){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(p)};function V(p,y,k){return y.__k==null&&(y.textContent=""),(0,b.render)(p,y),typeof k=="function"&&k(),p?p.__c:null}function on(p,y,k){return(0,b.hydrate)(p,y),typeof k=="function"&&k(),p?p.__c:null}b.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(p){Object.defineProperty(b.Component.prototype,p,{configurable:!0,get:function(){return this["UNSAFE_"+p]},set:function(y){Object.defineProperty(this,p,{configurable:!0,writable:!0,value:y})}})});var rn=b.options.event;function Z(){}function X(){return this.cancelBubble}function w(){return this.defaultPrevented}b.options.event=function(p){return rn&&(p=rn(p)),p.persist=Z,p.isPropagationStopped=X,p.isDefaultPrevented=w,p.nativeEvent=p};var C,L={configurable:!0,get:function(){return this.class}},H=b.options.vnode;b.options.vnode=function(p){var y=p.type,k=p.props,M=k;if(typeof y=="string"){for(var m in M={},k){var D=k[m];m==="value"&&"defaultValue"in k&&D==null||(m==="defaultValue"&&"value"in k&&k.value==null?m="value":m==="download"&&D===!0?D="":/ondoubleclick/i.test(m)?m="ondblclick":/^onchange(textarea|input)/i.test(m+y)&&!z(k.type)?m="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(m)?m=m.toLowerCase():I.test(m)?m=m.replace(/[A-Z0-9]/,"-$&").toLowerCase():D===null&&(D=void 0),M[m]=D)}y=="select"&&M.multiple&&Array.isArray(M.value)&&(M.value=(0,b.toChildArray)(k.children).forEach(function(N){N.props.selected=M.value.indexOf(N.props.value)!=-1})),y=="select"&&M.defaultValue!=null&&(M.value=(0,b.toChildArray)(k.children).forEach(function(N){N.props.selected=M.multiple?M.defaultValue.indexOf(N.props.value)!=-1:M.defaultValue==N.props.value})),p.props=M}y&&k.class!=k.className&&(L.enumerable="className"in k,k.className!=null&&(M.class=k.className),Object.defineProperty(M,"className",L)),p.$$typeof=s,H&&H(p)};var Cn=b.options.__r;b.options.__r=function(p){Cn&&Cn(p),C=p.__c};var Fn={ReactCurrentDispatcher:{current:{readContext:function(p){return C.__n[p.__c].props.value}}}},xn="17.0.2";function Pn(p){return b.createElement.bind(null,p)}function Rn(p){return!!p&&p.$$typeof===s}function Tn(p){return Rn(p)?b.cloneElement.apply(null,arguments):p}function Gn(p){return!!p.__k&&((0,b.render)(null,p),!0)}function Sn(p){return p&&(p.base||p.nodeType===1&&p)||null}var dn=function(p,y){return p(y)},ln=function(p,y){return p(y)},mn=b.Fragment;const gn={useState:h.eJ,useReducer:h._Y,useEffect:h.d4,useLayoutEffect:h.bt,useRef:h.sO,useImperativeHandle:h.aP,useMemo:h.Ye,useCallback:h.I4,useContext:h.qp,useDebugValue:h.Qb,version:"17.0.2",Children:en,render:V,hydrate:on,unmountComponentAtNode:Gn,createPortal:E,createElement:b.createElement,createContext:b.createContext,createFactory:Pn,cloneElement:Tn,createRef:b.createRef,Fragment:b.Fragment,isValidElement:Rn,findDOMNode:Sn,Component:b.Component,PureComponent:_,memo:J,forwardRef:Q,flushSync:ln,unstable_batchedUpdates:dn,StrictMode:b.Fragment,Suspense:nn,SuspenseList:pn,lazy:En,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Fn}},7604:(x,g,l)=>{"use strict";l.d(g,{eJ:()=>cn,_Y:()=>nn,d4:()=>hn,bt:()=>En,sO:()=>pn,aP:()=>In,Ye:()=>O,I4:()=>v,qp:()=>E,Qb:()=>s});var h=l(1174),b,S,F,_=0,J=[],U=h.options.__b,R=h.options.__r,Q=h.options.diffed,Y=h.options.__c,en=h.options.unmount;function G(w,C){h.options.__h&&h.options.__h(S,w,_||C),_=0;var L=S.__H||(S.__H={__:[],__h:[]});return w>=L.__.length&&L.__.push({}),L.__[w]}function cn(w){return _=1,nn(X,w)}function nn(w,C,L){var H=G(b++,2);return H.t=w,H.__c||(H.__=[L?L(C):X(void 0,C),function(Cn){var Fn=H.t(H.__[0],Cn);H.__[0]!==Fn&&(H.__=[Fn,H.__[1]],H.__c.setState({}))}],H.__c=S),H.__}function hn(w,C){var L=G(b++,3);!h.options.__s&&Z(L.__H,C)&&(L.__=w,L.__H=C,S.__H.__h.push(L))}function En(w,C){var L=G(b++,4);!h.options.__s&&Z(L.__H,C)&&(L.__=w,L.__H=C,S.__h.push(L))}function pn(w){return _=5,O(function(){return{current:w}},[])}function In(w,C,L){_=6,En(function(){typeof w=="function"?w(C()):w&&(w.current=C())},L==null?L:L.concat(w))}function O(w,C){var L=G(b++,7);return Z(L.__H,C)&&(L.__=w(),L.__H=C,L.__h=w),L.__}function v(w,C){return _=8,O(function(){return w},C)}function E(w){var C=S.context[w.__c],L=G(b++,9);return L.c=w,C?(L.__==null&&(L.__=!0,C.sub(S)),C.props.value):w.__}function s(w,C){h.options.useDebugValue&&h.options.useDebugValue(C?C(w):w)}function I(w){var C=G(b++,10),L=cn();return C.__=w,S.componentDidCatch||(S.componentDidCatch=function(H){C.__&&C.__(H),L[1](H)}),[L[0],function(){L[1](void 0)}]}function z(){J.forEach(function(w){if(w.__P)try{w.__H.__h.forEach(on),w.__H.__h.forEach(rn),w.__H.__h=[]}catch(C){w.__H.__h=[],h.options.__e(C,w.__v)}}),J=[]}h.options.__b=function(w){S=null,U&&U(w)},h.options.__r=function(w){R&&R(w),b=0;var C=(S=w.__c).__H;C&&(C.__h.forEach(on),C.__h.forEach(rn),C.__h=[])},h.options.diffed=function(w){Q&&Q(w);var C=w.__c;C&&C.__H&&C.__H.__h.length&&(J.push(C)!==1&&F===h.options.requestAnimationFrame||((F=h.options.requestAnimationFrame)||function(L){var H,Cn=function(){clearTimeout(Fn),V&&cancelAnimationFrame(H),setTimeout(L)},Fn=setTimeout(Cn,100);V&&(H=requestAnimationFrame(Cn))})(z)),S=void 0},h.options.__c=function(w,C){C.some(function(L){try{L.__h.forEach(on),L.__h=L.__h.filter(function(H){return!H.__||rn(H)})}catch(H){C.some(function(Cn){Cn.__h&&(Cn.__h=[])}),C=[],h.options.__e(H,L.__v)}}),Y&&Y(w,C)},h.options.unmount=function(w){en&&en(w);var C=w.__c;if(C&&C.__H)try{C.__H.__.forEach(on)}catch(L){h.options.__e(L,C.__v)}};var V=typeof requestAnimationFrame=="function";function on(w){var C=S;typeof w.__c=="function"&&w.__c(),S=C}function rn(w){var C=S;w.__c=w.__(),S=C}function Z(w,C){return!w||w.length!==C.length||C.some(function(L,H){return L!==w[H]})}function X(w,C){return typeof C=="function"?C(w):C}},8566:(x,g,l)=>{"use strict";var h=l(5232);function b(){}function S(){}S.resetWarningCache=b,x.exports=function(){function F(U,R,Q,Y,en,G){if(G!==h){var cn=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw cn.name="Invariant Violation",cn}}F.isRequired=F;function _(){return F}var J={array:F,bool:F,func:F,number:F,object:F,string:F,symbol:F,any:F,arrayOf:_,element:F,elementType:F,instanceOf:_,node:F,objectOf:_,oneOf:_,oneOfType:_,shape:_,exact:_,checkPropTypes:S,resetWarningCache:b};return J.PropTypes=J,J}},7396:(x,g,l)=>{if(!1)var h,b;else x.exports=l(8566)()},5232:x=>{"use strict";var g="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";x.exports=g},4994:(x,g)=>{"use strict";var l;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=typeof Symbol=="function"&&Symbol.for,b=h?Symbol.for("react.element"):60103,S=h?Symbol.for("react.portal"):60106,F=h?Symbol.for("react.fragment"):60107,_=h?Symbol.for("react.strict_mode"):60108,J=h?Symbol.for("react.profiler"):60114,U=h?Symbol.for("react.provider"):60109,R=h?Symbol.for("react.context"):60110,Q=h?Symbol.for("react.async_mode"):60111,Y=h?Symbol.for("react.concurrent_mode"):60111,en=h?Symbol.for("react.forward_ref"):60112,G=h?Symbol.for("react.suspense"):60113,cn=h?Symbol.for("react.suspense_list"):60120,nn=h?Symbol.for("react.memo"):60115,hn=h?Symbol.for("react.lazy"):60116,En=h?Symbol.for("react.block"):60121,pn=h?Symbol.for("react.fundamental"):60117,In=h?Symbol.for("react.responder"):60118,O=h?Symbol.for("react.scope"):60119;function v(s){if(typeof s=="object"&&s!==null){var I=s.$$typeof;switch(I){case b:switch(s=s.type,s){case Q:case Y:case F:case J:case _:case G:return s;default:switch(s=s&&s.$$typeof,s){case R:case en:case hn:case nn:case U:return s;default:return I}}case S:return I}}}function E(s){return v(s)===Y}l=Q,l=Y,l=R,l=U,l=b,l=en,l=F,l=hn,l=nn,l=S,l=J,l=_,l=G,l=function(s){return E(s)||v(s)===Q},l=E,l=function(s){return v(s)===R},l=function(s){return v(s)===U},l=function(s){return typeof s=="object"&&s!==null&&s.$$typeof===b},l=function(s){return v(s)===en},l=function(s){return v(s)===F},l=function(s){return v(s)===hn},l=function(s){return v(s)===nn},l=function(s){return v(s)===S},l=function(s){return v(s)===J},l=function(s){return v(s)===_},l=function(s){return v(s)===G},l=function(s){return typeof s=="string"||typeof s=="function"||s===F||s===Y||s===J||s===_||s===G||s===cn||typeof s=="object"&&s!==null&&(s.$$typeof===hn||s.$$typeof===nn||s.$$typeof===U||s.$$typeof===R||s.$$typeof===en||s.$$typeof===pn||s.$$typeof===In||s.$$typeof===O||s.$$typeof===En)},l=v},6533:(x,g,l)=>{"use strict";l(4994)},1332:(x,g,l)=>{"use strict";l.r(g),l.d(g,{default:()=>hn,useResizeDetector:()=>In,withResizeDetector:()=>En});var h=l(7876),b=l(9317),S=l.n(b),F=l(1717),_=l.n(F);/*! *****************************************************************************
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
***************************************************************************** */var J=function(O,v){return J=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(E,s){E.__proto__=s}||function(E,s){for(var I in s)s.hasOwnProperty(I)&&(E[I]=s[I])},J(O,v)};function U(O,v){J(O,v);function E(){this.constructor=O}O.prototype=v===null?Object.create(v):(E.prototype=v.prototype,new E)}var R=function(){return R=Object.assign||function(v){for(var E,s=1,I=arguments.length;s<I;s++){E=arguments[s];for(var z in E)Object.prototype.hasOwnProperty.call(E,z)&&(v[z]=E[z])}return v},R.apply(this,arguments)};function Q(O,v){var E={};for(var s in O)Object.prototype.hasOwnProperty.call(O,s)&&v.indexOf(s)<0&&(E[s]=O[s]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var I=0,s=Object.getOwnPropertySymbols(O);I<s.length;I++)v.indexOf(s[I])<0&&Object.prototype.propertyIsEnumerable.call(O,s[I])&&(E[s[I]]=O[s[I]]);return E}var Y=function(O,v,E,s){switch(v){case"debounce":return S()(O,E,s);case"throttle":return _()(O,E,s);default:return O}},en=function(O){return typeof O=="function"},G=function(){return typeof window=="undefined"},cn=function(O){return O instanceof Element||O instanceof HTMLDocument},nn=function(O,v,E,s){return function(I){var z=I.width,V=I.height;v(function(on){return on.width===z&&on.height===V||on.width===z&&!s||on.height===V&&!E?on:(O&&en(O)&&O(z,V),{width:z,height:V})})}},hn=function(O){U(v,O);function v(E){var s=O.call(this,E)||this;s.cancelHandler=function(){s.resizeHandler&&s.resizeHandler.cancel&&(s.resizeHandler.cancel(),s.resizeHandler=null)},s.attachObserver=function(){var Z=s.props,X=Z.targetRef,w=Z.observerOptions;if(!G()){X&&X.current&&(s.targetRef.current=X.current);var C=s.getElement();C&&(s.observableElement&&s.observableElement===C||(s.observableElement=C,s.resizeObserver.observe(C,w)))}},s.getElement=function(){var Z=s.props,X=Z.querySelector,w=Z.targetDomEl;if(G())return null;if(X)return document.querySelector(X);if(w&&cn(w))return w;if(s.targetRef&&cn(s.targetRef.current))return s.targetRef.current;var C=(0,h.m$)(s);if(!C)return null;var L=s.getRenderType();switch(L){case"renderProp":return C;case"childFunction":return C;case"child":return C;case"childArray":return C;default:return C.parentElement}},s.createResizeHandler=function(Z){var X=s.props,w=X.handleWidth,C=w===void 0?!0:w,L=X.handleHeight,H=L===void 0?!0:L,Cn=X.onResize;if(!(!C&&!H)){var Fn=nn(Cn,s.setState.bind(s),C,H);Z.forEach(function(xn){var Pn=xn&&xn.contentRect||{},Rn=Pn.width,Tn=Pn.height,Gn=!s.skipOnMount&&!G();Gn&&Fn({width:Rn,height:Tn}),s.skipOnMount=!1})}},s.getRenderType=function(){var Z=s.props,X=Z.render,w=Z.children;return en(X)?"renderProp":en(w)?"childFunction":(0,h.l$)(w)?"child":Array.isArray(w)?"childArray":"parent"};var I=E.skipOnMount,z=E.refreshMode,V=E.refreshRate,on=V===void 0?1e3:V,rn=E.refreshOptions;return s.state={width:void 0,height:void 0},s.skipOnMount=I,s.targetRef=(0,h.Vf)(),s.observableElement=null,G()||(s.resizeHandler=Y(s.createResizeHandler,z,on,rn),s.resizeObserver=new window.ResizeObserver(s.resizeHandler)),s}return v.prototype.componentDidMount=function(){this.attachObserver()},v.prototype.componentDidUpdate=function(){this.attachObserver()},v.prototype.componentWillUnmount=function(){G()||(this.resizeObserver.disconnect(),this.cancelHandler())},v.prototype.render=function(){var E=this.props,s=E.render,I=E.children,z=E.nodeType,V=z===void 0?"div":z,on=this.state,rn=on.width,Z=on.height,X={width:rn,height:Z,targetRef:this.targetRef},w=this.getRenderType(),C;switch(w){case"renderProp":return s&&s(X);case"childFunction":return C=I,C(X);case"child":if(C=I,C.type&&typeof C.type=="string"){X.targetRef;var L=Q(X,["targetRef"]);return(0,h.Tm)(C,L)}return(0,h.Tm)(C,X);case"childArray":return C=I,C.map(function(H){return!!H&&(0,h.Tm)(H,X)});default:return h.az(V,null)}},v}(h.Vx);function En(O,v){v===void 0&&(v={});var E=function(z){U(V,z);function V(){var on=z!==null&&z.apply(this,arguments)||this;return on.ref=(0,h.Vf)(),on}return V.prototype.render=function(){var on=this.props,rn=on.forwardedRef,Z=Q(on,["forwardedRef"]),X=rn!=null?rn:this.ref;return h.az(hn,R({},v,{targetRef:X}),h.az(O,R({targetRef:X},Z)))},V}(h.wA);function s(z,V){return h.az(E,R({},z,{forwardedRef:V}))}var I=O.displayName||O.name;return s.displayName="withResizeDetector("+I+")",(0,h.Gp)(s)}var pn=G()?h.d4:h.bt;function In(O){O===void 0&&(O={});var v=O.skipOnMount,E=v===void 0?!1:v,s=O.refreshMode,I=O.refreshRate,z=I===void 0?1e3:I,V=O.refreshOptions,on=O.handleWidth,rn=on===void 0?!0:on,Z=O.handleHeight,X=Z===void 0?!0:Z,w=O.targetRef,C=O.observerOptions,L=O.onResize,H=(0,h.sO)(E),Cn=(0,h.sO)(null),Fn=w!=null?w:Cn,xn=(0,h.sO)(),Pn=(0,h.eJ)({width:void 0,height:void 0}),Rn=Pn[0],Tn=Pn[1];return pn(function(){if(!G()){var Gn=nn(L,Tn,rn,X),Sn=function(ln){!rn&&!X||ln.forEach(function(mn){var gn=mn&&mn.contentRect||{},p=gn.width,y=gn.height,k=!H.current&&!G();k&&Gn({width:p,height:y}),H.current=!1})};xn.current=Y(Sn,s,z,V);var dn=new window.ResizeObserver(xn.current);return Fn.current&&dn.observe(Fn.current,C),function(){dn.disconnect();var ln=xn.current;ln&&ln.cancel&&ln.cancel()}}},[s,z,V,rn,X,L,C,Fn.current]),R({ref:Fn},Rn)}},3284:x=>{"use strict";var g=[];function l(S){for(var F=-1,_=0;_<g.length;_++)if(g[_].identifier===S){F=_;break}return F}function h(S,F){for(var _={},J=[],U=0;U<S.length;U++){var R=S[U],Q=F.base?R[0]+F.base:R[0],Y=_[Q]||0,en="".concat(Q," ").concat(Y);_[Q]=Y+1;var G=l(en),cn={css:R[1],media:R[2],sourceMap:R[3],supports:R[4],layer:R[5]};if(G!==-1)g[G].references++,g[G].updater(cn);else{var nn=b(cn,F);F.byIndex=U,g.splice(U,0,{identifier:en,updater:nn,references:1})}J.push(en)}return J}function b(S,F){var _=F.domAPI(F);_.update(S);var J=function(R){if(R){if(R.css===S.css&&R.media===S.media&&R.sourceMap===S.sourceMap&&R.supports===S.supports&&R.layer===S.layer)return;_.update(S=R)}else _.remove()};return J}x.exports=function(S,F){F=F||{},S=S||[];var _=h(S,F);return function(U){U=U||[];for(var R=0;R<_.length;R++){var Q=_[R],Y=l(Q);g[Y].references--}for(var en=h(U,F),G=0;G<_.length;G++){var cn=_[G],nn=l(cn);g[nn].references===0&&(g[nn].updater(),g.splice(nn,1))}_=en}}},1836:x=>{"use strict";var g={};function l(b){if(typeof g[b]=="undefined"){var S=document.querySelector(b);if(window.HTMLIFrameElement&&S instanceof window.HTMLIFrameElement)try{S=S.contentDocument.head}catch{S=null}g[b]=S}return g[b]}function h(b,S){var F=l(b);if(!F)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");F.appendChild(S)}x.exports=h},1599:x=>{"use strict";function g(l){var h=document.createElement("style");return l.setAttributes(h,l.attributes),l.insert(h,l.options),h}x.exports=g},5313:(x,g,l)=>{"use strict";function h(b){var S=l.nc;S&&b.setAttribute("nonce",S)}x.exports=h},9909:x=>{"use strict";function g(b,S,F){var _="";F.supports&&(_+="@supports (".concat(F.supports,") {")),F.media&&(_+="@media ".concat(F.media," {"));var J=typeof F.layer!="undefined";J&&(_+="@layer".concat(F.layer.length>0?" ".concat(F.layer):""," {")),_+=F.css,J&&(_+="}"),F.media&&(_+="}"),F.supports&&(_+="}");var U=F.sourceMap;U&&typeof btoa!="undefined"&&(_+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(U))))," */")),S.styleTagTransform(_,b,S.options)}function l(b){if(b.parentNode===null)return!1;b.parentNode.removeChild(b)}function h(b){var S=b.insertStyleElement(b);return{update:function(_){g(S,b,_)},remove:function(){l(S)}}}x.exports=h},4923:x=>{"use strict";function g(l,h){if(h.styleSheet)h.styleSheet.cssText=l;else{for(;h.firstChild;)h.removeChild(h.firstChild);h.appendChild(document.createTextNode(l))}}x.exports=g},1174:(x,g,l)=>{x.exports=l(5033)(400)},5033:x=>{"use strict";x.exports=rendererVendor}},lc={};function tn(x){var g=lc[x];if(g!==void 0)return g.exports;var l=lc[x]={id:x,exports:{}};return ta[x].call(l.exports,l,l.exports,tn),l.exports}tn.n=x=>{var g=x&&x.__esModule?()=>x.default:()=>x;return tn.d(g,{a:g}),g},tn.d=(x,g)=>{for(var l in g)tn.o(g,l)&&!tn.o(x,l)&&Object.defineProperty(x,l,{enumerable:!0,get:g[l]})},tn.o=(x,g)=>Object.prototype.hasOwnProperty.call(x,g),tn.r=x=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(x,"__esModule",{value:!0})},tn.p="./";var Ni={};(typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{}).SENTRY_RELEASE={id:"Slack@4.33.73"},(()=>{"use strict";tn.r(Ni),tn.d(Ni,{NotificationHost:()=>Vr});var x={};tn.r(x),tn.d(x,{actionTransformer:()=>ku,logger:()=>pr});var g=tn(3284),l=tn.n(g),h=tn(9909),b=tn.n(h),S=tn(1836),F=tn.n(S),_=tn(5313),J=tn.n(_),U=tn(1599),R=tn.n(U),Q=tn(4923),Y=tn.n(Q),en=tn(3935),G={};G.styleTagTransform=Y(),G.setAttributes=J(),G.insert=F().bind(null,"head"),G.domAPI=b(),G.insertStyleElement=R();var cn=l()(en.Z,G);const nn=en.Z&&en.Z.locals?en.Z.locals:void 0;function hn(n,e){return n===e}function En(n,e,o){if(e===null||o===null||e.length!==o.length)return!1;for(var i=e.length,t=0;t<i;t++)if(!n(e[t],o[t]))return!1;return!0}function pn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:hn,o=null,i=null;return function(){return En(e,o,arguments)||(i=n.apply(null,arguments)),o=arguments,i}}function In(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every(function(i){return typeof i=="function"})){var o=e.map(function(i){return typeof i}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+o+"]"))}return e}function O(n){for(var e=arguments.length,o=Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];return function(){for(var t=arguments.length,c=Array(t),r=0;r<t;r++)c[r]=arguments[r];var a=0,A=c.pop(),f=In(c),u=n.apply(void 0,[function(){return a++,A.apply(null,arguments)}].concat(o)),B=n(function(){for(var T=[],K=f.length,j=0;j<K;j++)T.push(f[j].apply(null,arguments));return u.apply(null,T)});return B.resultFunc=A,B.dependencies=f,B.recomputations=function(){return a},B.resetRecomputations=function(){return a=0},B}}var v=O(pn);function E(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v;if(typeof n!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof n));var o=Object.keys(n);return e(o.map(function(i){return n[i]}),function(){for(var i=arguments.length,t=Array(i),c=0;c<i;c++)t[c]=arguments[c];return t.reduce(function(r,a,A){return r[o[A]]=a,r},{})})}function s(n,e){for(const o of Object.values(SettingsLayer))if(has(n[o],e))return o;return null}const I=v(n=>n,({zoomLevel:n,notificationZoomLevel:e})=>e&&e!==null?e:n),z=v(I,n=>1+n*.2),V=({settings:n})=>n.releaseChannelOverride||ReleaseChannel.PROD,on=({environment:n,settings:e})=>{const o=process.env.SLACK_DEVELOPER_MENU;if(o==="false")return!1;const{isDevMode:i,devEnv:t,openDevToolsOnStart:c}=n,{isSignedIntoSlackOrg:r}=e;return i||!!t||c||r||!!o},rn=n=>!!n.win32.isAeroGlassEnabled&&!!n.isGpuCompositionAvailable,Z=({environment:n,settings:e})=>{const{notificationMethod:i}=e,t=i==="html",c=i&&i!=="html";{const r=isWindows10(n),a=rn(n);if(!r&&a&&!c||t&&a)return!0}return!1},X=n=>{const e=n.settings.updaterEndpointVersion;return e!==void 0?e===2:!(process.env.SLACK_UPDATE_URL||V(n)===ReleaseChannel.NIGHTLY)},w=n=>{const e=n.notificationTimeout;return Number.isSafeInteger(e)&&e===Number.MAX_SAFE_INTEGER},C={debug:"debug",info:"info",warn:"warn",error:"error",fatal:"error"},L=(n,e)=>(...o)=>{const i=o.map(t=>typeof t=="object"?JSON.stringify(t,null,2):t).join(" ");e?console[n](`[${e}]	${i}`):console[n](i)},H=Object.entries(C).reduce((n,[e,o])=>(n[e]=L(o),n),{}),Cn=(n,e)=>Object.entries(C).reduce((o,[i,t])=>(o[i]=L(t,n),o),{});var Fn=typeof global=="object"&&global&&global.Object===Object&&global;const xn=Fn;var Pn=typeof self=="object"&&self&&self.Object===Object&&self,Rn=xn||Pn||Function("return this")();const Tn=Rn;var Gn=Tn.Symbol;const Sn=Gn;var dn=Object.prototype,ln=dn.hasOwnProperty,mn=dn.toString,gn=Sn?Sn.toStringTag:void 0;function p(n){var e=ln.call(n,gn),o=n[gn];try{n[gn]=void 0;var i=!0}catch{}var t=mn.call(n);return i&&(e?n[gn]=o:delete n[gn]),t}const y=p;var k=Object.prototype,M=k.toString;function m(n){return M.call(n)}const D=m;var N="[object Null]",sn="[object Undefined]",wn=Sn?Sn.toStringTag:void 0;function Wn(n){return n==null?n===void 0?sn:N:wn&&wn in Object(n)?y(n):D(n)}const Un=Wn;function se(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}const yn=se;var ye="[object AsyncFunction]",ve="[object Function]",Ao="[object GeneratorFunction]",Li="[object Proxy]";function Mi(n){if(!yn(n))return!1;var e=Un(n);return e==ve||e==Ao||e==ye||e==Li}const Wo=Mi;var Ue=Tn["__core-js_shared__"];const lo=Ue;var jo=function(){var n=/[^.]+$/.exec(lo&&lo.keys&&lo.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function Ui(n){return!!jo&&jo in n}const fo=Ui;var so=Function.prototype,ee=so.toString;function Go(n){if(n!=null){try{return ee.call(n)}catch{}try{return n+""}catch{}}return""}const $n=Go;var Eo=/[\\^$.*+?()[\]{}|]/g,Hi=/^\[object .+?Constructor\]$/,Ki=Function.prototype,Wi=Object.prototype,ji=Ki.toString,zo=Wi.hasOwnProperty,Yn=RegExp("^"+ji.call(zo).replace(Eo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function uo(n){if(!yn(n)||fo(n))return!1;var e=Wo(n)?Yn:Hi;return e.test($n(n))}const ho=uo;function Gi(n,e){return n==null?void 0:n[e]}const zi=Gi;function qi(n,e){var o=zi(n,e);return ho(o)?o:void 0}const oe=qi;var po=oe(Object,"create");const Jn=po;function qo(){this.__data__=Jn?Jn(null):{},this.size=0}const Nn=qo;function $o(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}const go=$o;var _o="__lodash_hash_undefined__",Yo=Object.prototype,bo=Yo.hasOwnProperty;function Vo(n){var e=this.__data__;if(Jn){var o=e[n];return o===_o?void 0:o}return bo.call(e,n)?e[n]:void 0}const Ee=Vo;var ue=Object.prototype,mo=ue.hasOwnProperty;function Bo(n){var e=this.__data__;return Jn?e[n]!==void 0:mo.call(e,n)}const de=Bo;var He="__lodash_hash_undefined__";function Zo(n,e){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=Jn&&e===void 0?He:e,this}const Ke=Zo;function ce(n){var e=-1,o=n==null?0:n.length;for(this.clear();++e<o;){var i=n[e];this.set(i[0],i[1])}}ce.prototype.clear=Nn,ce.prototype.delete=go,ce.prototype.get=Ee,ce.prototype.has=de,ce.prototype.set=Ke;const We=ce;function Ie(){this.__data__=[],this.size=0}const he=Ie;function pe(n,e){return n===e||n!==n&&e!==e}const je=pe;function Xo(n,e){for(var o=n.length;o--;)if(je(n[o][0],e))return o;return-1}const we=Xo;var Co=Array.prototype,Qo=Co.splice;function yo(n){var e=this.__data__,o=we(e,n);if(o<0)return!1;var i=e.length-1;return o==i?e.pop():Qo.call(e,o,1),--this.size,!0}const vo=yo;function ie(n){var e=this.__data__,o=we(e,n);return o<0?void 0:e[o][1]}const Ge=ie;function Io(n){return we(this.__data__,n)>-1}const ge=Io;function $i(n,e){var o=this.__data__,i=we(o,n);return i<0?(++this.size,o.push([n,e])):o[i][1]=e,this}const Yi=$i;function qn(n){var e=-1,o=n==null?0:n.length;for(this.clear();++e<o;){var i=n[e];this.set(i[0],i[1])}}qn.prototype.clear=he,qn.prototype.delete=vo,qn.prototype.get=Ge,qn.prototype.has=ge,qn.prototype.set=Yi;const Xn=qn;var Vi=oe(Tn,"Map");const re=Vi;function ni(){this.size=0,this.__data__={hash:new We,map:new(re||Xn),string:new We}}const ei=ni;function ze(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}const wo=ze;function Zi(n,e){var o=n.__data__;return wo(e)?o[typeof e=="string"?"string":"hash"]:o.map}const zn=Zi;function oi(n){var e=zn(this,n).delete(n);return this.size-=e?1:0,e}const ii=oi;function ti(n){return zn(this,n).get(n)}const Xi=ti;function Te(n){return zn(this,n).has(n)}const Qn=Te;function ci(n,e){var o=zn(this,n),i=o.size;return o.set(n,e),this.size+=o.size==i?0:1,this}const ri=ci;function ae(n){var e=-1,o=n==null?0:n.length;for(this.clear();++e<o;){var i=n[e];this.set(i[0],i[1])}}ae.prototype.clear=ei,ae.prototype.delete=ii,ae.prototype.get=Xi,ae.prototype.has=Qn,ae.prototype.set=ri;const qe=ae;var $="__lodash_hash_undefined__";function d(n){return this.__data__.set(n,$),this}const P=d;function W(n){return this.__data__.has(n)}const _n=W;function On(n){var e=-1,o=n==null?0:n.length;for(this.__data__=new qe;++e<o;)this.add(n[e])}On.prototype.add=On.prototype.push=P,On.prototype.has=_n;const Dn=On;function Ln(n,e,o,i){for(var t=n.length,c=o+(i?1:-1);i?c--:++c<t;)if(e(n[c],c,n))return c;return-1}const ne=Ln;function Se(n){return n!==n}const ai=Se;function Qi(n,e,o){for(var i=o-1,t=n.length;++i<t;)if(n[i]===e)return i;return-1}const fc=Qi;function ca(n,e,o){return e===e?fc(n,e,o):ne(n,ai,o)}const ra=ca;function aa(n,e){var o=n==null?0:n.length;return!!o&&ra(n,e,0)>-1}const nt=aa;function Aa(n,e,o){for(var i=-1,t=n==null?0:n.length;++i<t;)if(o(e,n[i]))return!0;return!1}const et=Aa;function la(n,e){for(var o=-1,i=n==null?0:n.length,t=Array(i);++o<i;)t[o]=e(n[o],o,n);return t}const Ai=la;function fa(n){return function(e){return n(e)}}const ot=fa;function sa(n,e){return n.has(e)}const To=sa;var Ea=200;function ua(n,e,o,i){var t=-1,c=nt,r=!0,a=n.length,A=[],f=e.length;if(!a)return A;o&&(e=Ai(e,ot(o))),i?(c=et,r=!1):e.length>=Ea&&(c=To,r=!1,e=new Dn(e));n:for(;++t<a;){var u=n[t],B=o==null?u:o(u);if(u=i||u!==0?u:0,r&&B===B){for(var T=f;T--;)if(e[T]===B)continue n;A.push(u)}else c(e,B,i)||A.push(u)}return A}const da=ua;function ha(n,e){for(var o=-1,i=e.length,t=n.length;++o<i;)n[t+o]=e[o];return n}const sc=ha;function pa(n){return n!=null&&typeof n=="object"}const Fe=pa;var ga="[object Arguments]";function _a(n){return Fe(n)&&Un(n)==ga}const Ec=_a;var uc=Object.prototype,ba=uc.hasOwnProperty,ma=uc.propertyIsEnumerable,Ba=Ec(function(){return arguments}())?Ec:function(n){return Fe(n)&&ba.call(n,"callee")&&!ma.call(n,"callee")};const it=Ba;var Ca=Array.isArray;const Vn=Ca;var dc=Sn?Sn.isConcatSpreadable:void 0;function ya(n){return Vn(n)||it(n)||!!(dc&&n&&n[dc])}const va=ya;function hc(n,e,o,i,t){var c=-1,r=n.length;for(o||(o=va),t||(t=[]);++c<r;){var a=n[c];e>0&&o(a)?e>1?hc(a,e-1,o,i,t):sc(t,a):i||(t[t.length]=a)}return t}const tt=hc;function Ia(n){return n}const li=Ia;function wa(n,e,o){switch(o.length){case 0:return n.call(e);case 1:return n.call(e,o[0]);case 2:return n.call(e,o[0],o[1]);case 3:return n.call(e,o[0],o[1],o[2])}return n.apply(e,o)}const Ta=wa;var pc=Math.max;function Sa(n,e,o){return e=pc(e===void 0?n.length-1:e,0),function(){for(var i=arguments,t=-1,c=pc(i.length-e,0),r=Array(c);++t<c;)r[t]=i[e+t];t=-1;for(var a=Array(e+1);++t<e;)a[t]=i[t];return a[e]=o(r),Ta(n,this,a)}}const gc=Sa;function Fa(n){return function(){return n}}const Ja=Fa;var Oa=function(){try{var n=oe(Object,"defineProperty");return n({},"",{}),n}catch{}}();const fi=Oa;var Da=fi?function(n,e){return fi(n,"toString",{configurable:!0,enumerable:!1,value:Ja(e),writable:!0})}:li;const xa=Da;var Pa=800,Ra=16,ka=Date.now;function Na(n){var e=0,o=0;return function(){var i=ka(),t=Ra-(i-o);if(o=i,t>0){if(++e>=Pa)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}var La=Na(xa);const _c=La;function Ma(n,e){return _c(gc(n,e,li),n+"")}const ct=Ma;var Ua=9007199254740991;function Ha(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Ua}const rt=Ha;function Ka(n){return n!=null&&rt(n.length)&&!Wo(n)}const at=Ka;function Wa(n){return Fe(n)&&at(n)}const So=Wa;function ja(n){var e=n==null?0:n.length;return e?n[e-1]:void 0}const Ga=ja;var za=ct(function(n,e){var o=Ga(e);return So(o)&&(o=void 0),So(n)?da(n,tt(e,1,So,!0),void 0,o):[]});const si=za;var qa=oe(Tn,"Set");const $e=qa;function $a(){}const bc=$a;function Ya(n){var e=-1,o=Array(n.size);return n.forEach(function(i){o[++e]=i}),o}const At=Ya;var Va=1/0,Za=$e&&1/At(new $e([,-0]))[1]==Va?function(n){return new $e(n)}:bc;const Xa=Za;var Qa=200;function nA(n,e,o){var i=-1,t=nt,c=n.length,r=!0,a=[],A=a;if(o)r=!1,t=et;else if(c>=Qa){var f=e?null:Xa(n);if(f)return At(f);r=!1,t=To,A=new Dn}else A=e?[]:a;n:for(;++i<c;){var u=n[i],B=e?e(u):u;if(u=o||u!==0?u:0,r&&B===B){for(var T=A.length;T--;)if(A[T]===B)continue n;e&&A.push(B),a.push(u)}else t(A,B,o)||(A!==a&&A.push(B),a.push(u))}return a}const mc=nA;var eA=ct(function(n){return mc(tt(n,1,So,!0))});const oA=eA;function iA(n){return n&&n.length?mc(n):[]}const Bc=iA;function tA(){this.__data__=new Xn,this.size=0}const cA=tA;function rA(n){var e=this.__data__,o=e.delete(n);return this.size=e.size,o}const aA=rA;function AA(n){return this.__data__.get(n)}const lA=AA;function fA(n){return this.__data__.has(n)}const sA=fA;var EA=200;function uA(n,e){var o=this.__data__;if(o instanceof Xn){var i=o.__data__;if(!re||i.length<EA-1)return i.push([n,e]),this.size=++o.size,this;o=this.__data__=new qe(i)}return o.set(n,e),this.size=o.size,this}const dA=uA;function Ye(n){var e=this.__data__=new Xn(n);this.size=e.size}Ye.prototype.clear=cA,Ye.prototype.delete=aA,Ye.prototype.get=lA,Ye.prototype.has=sA,Ye.prototype.set=dA;const Ei=Ye;function hA(n,e){for(var o=-1,i=n==null?0:n.length;++o<i;)if(e(n[o],o,n))return!0;return!1}const pA=hA;var gA=1,_A=2;function bA(n,e,o,i,t,c){var r=o&gA,a=n.length,A=e.length;if(a!=A&&!(r&&A>a))return!1;var f=c.get(n),u=c.get(e);if(f&&u)return f==e&&u==n;var B=-1,T=!0,K=o&_A?new Dn:void 0;for(c.set(n,e),c.set(e,n);++B<a;){var j=n[B],q=e[B];if(i)var un=r?i(q,j,B,e,n,c):i(j,q,B,n,e,c);if(un!==void 0){if(un)continue;T=!1;break}if(K){if(!pA(e,function(an,bn){if(!To(K,bn)&&(j===an||t(j,an,o,i,c)))return K.push(bn)})){T=!1;break}}else if(!(j===q||t(j,q,o,i,c))){T=!1;break}}return c.delete(n),c.delete(e),T}const Cc=bA;var mA=Tn.Uint8Array;const yc=mA;function BA(n){var e=-1,o=Array(n.size);return n.forEach(function(i,t){o[++e]=[t,i]}),o}const CA=BA;var yA=1,vA=2,IA="[object Boolean]",wA="[object Date]",TA="[object Error]",SA="[object Map]",FA="[object Number]",JA="[object RegExp]",OA="[object Set]",DA="[object String]",xA="[object Symbol]",PA="[object ArrayBuffer]",RA="[object DataView]",vc=Sn?Sn.prototype:void 0,lt=vc?vc.valueOf:void 0;function kA(n,e,o,i,t,c,r){switch(o){case RA:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case PA:return!(n.byteLength!=e.byteLength||!c(new yc(n),new yc(e)));case IA:case wA:case FA:return je(+n,+e);case TA:return n.name==e.name&&n.message==e.message;case JA:case DA:return n==e+"";case SA:var a=CA;case OA:var A=i&yA;if(a||(a=At),n.size!=e.size&&!A)return!1;var f=r.get(n);if(f)return f==e;i|=vA,r.set(n,e);var u=Cc(a(n),a(e),i,t,c,r);return r.delete(n),u;case xA:if(lt)return lt.call(n)==lt.call(e)}return!1}const NA=kA;function LA(n,e,o){var i=e(n);return Vn(n)?i:sc(i,o(n))}const MA=LA;function UA(n,e){for(var o=-1,i=n==null?0:n.length,t=0,c=[];++o<i;){var r=n[o];e(r,o,n)&&(c[t++]=r)}return c}const HA=UA;function KA(){return[]}const WA=KA;var jA=Object.prototype,GA=jA.propertyIsEnumerable,Ic=Object.getOwnPropertySymbols,zA=Ic?function(n){return n==null?[]:(n=Object(n),HA(Ic(n),function(e){return GA.call(n,e)}))}:WA;const qA=zA;function $A(n,e){for(var o=-1,i=Array(n);++o<n;)i[o]=e(o);return i}const YA=$A;function VA(){return!1}const ZA=VA;var wc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Tc=wc&&typeof module=="object"&&module&&!module.nodeType&&module,XA=Tc&&Tc.exports===wc,Sc=XA?Tn.Buffer:void 0,QA=Sc?Sc.isBuffer:void 0,nl=QA||ZA;const ft=nl;var el=9007199254740991,ol=/^(?:0|[1-9]\d*)$/;function il(n,e){var o=typeof n;return e=e==null?el:e,!!e&&(o=="number"||o!="symbol"&&ol.test(n))&&n>-1&&n%1==0&&n<e}const st=il;var tl="[object Arguments]",cl="[object Array]",rl="[object Boolean]",al="[object Date]",Al="[object Error]",ll="[object Function]",fl="[object Map]",sl="[object Number]",El="[object Object]",ul="[object RegExp]",dl="[object Set]",hl="[object String]",pl="[object WeakMap]",gl="[object ArrayBuffer]",_l="[object DataView]",bl="[object Float32Array]",ml="[object Float64Array]",Bl="[object Int8Array]",Cl="[object Int16Array]",yl="[object Int32Array]",vl="[object Uint8Array]",Il="[object Uint8ClampedArray]",wl="[object Uint16Array]",Tl="[object Uint32Array]",vn={};vn[bl]=vn[ml]=vn[Bl]=vn[Cl]=vn[yl]=vn[vl]=vn[Il]=vn[wl]=vn[Tl]=!0,vn[tl]=vn[cl]=vn[gl]=vn[rl]=vn[_l]=vn[al]=vn[Al]=vn[ll]=vn[fl]=vn[sl]=vn[El]=vn[ul]=vn[dl]=vn[hl]=vn[pl]=!1;function Sl(n){return Fe(n)&&rt(n.length)&&!!vn[Un(n)]}const Fl=Sl;var Fc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fo=Fc&&typeof module=="object"&&module&&!module.nodeType&&module,Jl=Fo&&Fo.exports===Fc,Et=Jl&&xn.process,Ol=function(){try{var n=Fo&&Fo.require&&Fo.require("util").types;return n||Et&&Et.binding&&Et.binding("util")}catch{}}();const Jc=Ol;var Oc=Jc&&Jc.isTypedArray,Dl=Oc?ot(Oc):Fl;const Dc=Dl;var xl=Object.prototype,Pl=xl.hasOwnProperty;function Rl(n,e){var o=Vn(n),i=!o&&it(n),t=!o&&!i&&ft(n),c=!o&&!i&&!t&&Dc(n),r=o||i||t||c,a=r?YA(n.length,String):[],A=a.length;for(var f in n)(e||Pl.call(n,f))&&!(r&&(f=="length"||t&&(f=="offset"||f=="parent")||c&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||st(f,A)))&&a.push(f);return a}const kl=Rl;var Nl=Object.prototype;function Ll(n){var e=n&&n.constructor,o=typeof e=="function"&&e.prototype||Nl;return n===o}const Ml=Ll;function Ul(n,e){return function(o){return n(e(o))}}var Hl=Ul(Object.keys,Object);const Kl=Hl;var Wl=Object.prototype,jl=Wl.hasOwnProperty;function Gl(n){if(!Ml(n))return Kl(n);var e=[];for(var o in Object(n))jl.call(n,o)&&o!="constructor"&&e.push(o);return e}const zl=Gl;function ql(n){return at(n)?kl(n):zl(n)}const ut=ql;function $l(n){return MA(n,ut,qA)}const xc=$l;var Yl=1,Vl=Object.prototype,Zl=Vl.hasOwnProperty;function Xl(n,e,o,i,t,c){var r=o&Yl,a=xc(n),A=a.length,f=xc(e),u=f.length;if(A!=u&&!r)return!1;for(var B=A;B--;){var T=a[B];if(!(r?T in e:Zl.call(e,T)))return!1}var K=c.get(n),j=c.get(e);if(K&&j)return K==e&&j==n;var q=!0;c.set(n,e),c.set(e,n);for(var un=r;++B<A;){T=a[B];var an=n[T],bn=e[T];if(i)var An=r?i(bn,an,T,e,n,c):i(an,bn,T,n,e,c);if(!(An===void 0?an===bn||t(an,bn,o,i,c):An)){q=!1;break}un||(un=T=="constructor")}if(q&&!un){var kn=n.constructor,Mn=e.constructor;kn!=Mn&&"constructor"in n&&"constructor"in e&&!(typeof kn=="function"&&kn instanceof kn&&typeof Mn=="function"&&Mn instanceof Mn)&&(q=!1)}return c.delete(n),c.delete(e),q}const Ql=Xl;var nf=oe(Tn,"DataView");const dt=nf;var ef=oe(Tn,"Promise");const ht=ef;var of=oe(Tn,"WeakMap");const pt=of;var Pc="[object Map]",tf="[object Object]",Rc="[object Promise]",kc="[object Set]",Nc="[object WeakMap]",Lc="[object DataView]",cf=$n(dt),rf=$n(re),af=$n(ht),Af=$n($e),lf=$n(pt),Je=Un;(dt&&Je(new dt(new ArrayBuffer(1)))!=Lc||re&&Je(new re)!=Pc||ht&&Je(ht.resolve())!=Rc||$e&&Je(new $e)!=kc||pt&&Je(new pt)!=Nc)&&(Je=function(n){var e=Un(n),o=e==tf?n.constructor:void 0,i=o?$n(o):"";if(i)switch(i){case cf:return Lc;case rf:return Pc;case af:return Rc;case Af:return kc;case lf:return Nc}return e});const Mc=Je;var ff=1,Uc="[object Arguments]",Hc="[object Array]",ui="[object Object]",sf=Object.prototype,Kc=sf.hasOwnProperty;function Ef(n,e,o,i,t,c){var r=Vn(n),a=Vn(e),A=r?Hc:Mc(n),f=a?Hc:Mc(e);A=A==Uc?ui:A,f=f==Uc?ui:f;var u=A==ui,B=f==ui,T=A==f;if(T&&ft(n)){if(!ft(e))return!1;r=!0,u=!1}if(T&&!u)return c||(c=new Ei),r||Dc(n)?Cc(n,e,o,i,t,c):NA(n,e,A,o,i,t,c);if(!(o&ff)){var K=u&&Kc.call(n,"__wrapped__"),j=B&&Kc.call(e,"__wrapped__");if(K||j){var q=K?n.value():n,un=j?e.value():e;return c||(c=new Ei),t(q,un,o,i,c)}}return T?(c||(c=new Ei),Ql(n,e,o,i,t,c)):!1}const uf=Ef;function Wc(n,e,o,i,t){return n===e?!0:n==null||e==null||!Fe(n)&&!Fe(e)?n!==n&&e!==e:uf(n,e,o,i,Wc,t)}const gt=Wc;function df(n,e){return gt(n,e)}const _t=df;var te=tn(7604);function Jo(){return Jo=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},Jo.apply(this,arguments)}function bt(n,e){if(n==null)return{};var o={},i=Object.keys(n),t,c;for(c=0;c<i.length;c++)t=i[c],!(e.indexOf(t)>=0)&&(o[t]=n[t]);return o}function mt(n,e){return mt=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i},mt(n,e)}function Bt(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,mt(n,e)}var Bh=tn(7396);function hf(n,e){return n.classList?!!e&&n.classList.contains(e):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+e+" ")!==-1}function pf(n,e){n.classList?n.classList.add(e):hf(n,e)||(typeof n.className=="string"?n.className=n.className+" "+e:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+e))}function jc(n,e){return n.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function gf(n,e){n.classList?n.classList.remove(e):typeof n.className=="string"?n.className=jc(n.className,e):n.setAttribute("class",jc(n.className&&n.className.baseVal||"",e))}var fn=tn(7876);const Gc={disabled:!1},di=fn.ZP.createContext(null);var Oo="unmounted",Oe="exited",De="entering",Ve="entered",Ct="exiting",Ae=function(n){Bt(e,n);function e(i,t){var c;c=n.call(this,i,t)||this;var r=t,a=r&&!r.isMounting?i.enter:i.appear,A;return c.appearStatus=null,i.in?a?(A=Oe,c.appearStatus=De):A=Ve:i.unmountOnExit||i.mountOnEnter?A=Oo:A=Oe,c.state={status:A},c.nextCallback=null,c}e.getDerivedStateFromProps=function(t,c){var r=t.in;return r&&c.status===Oo?{status:Oe}:null};var o=e.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(t){var c=null;if(t!==this.props){var r=this.state.status;this.props.in?r!==De&&r!==Ve&&(c=De):(r===De||r===Ve)&&(c=Ct)}this.updateStatus(!1,c)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var t=this.props.timeout,c,r,a;return c=r=a=t,t!=null&&typeof t!="number"&&(c=t.exit,r=t.enter,a=t.appear!==void 0?t.appear:r),{exit:c,enter:r,appear:a}},o.updateStatus=function(t,c){t===void 0&&(t=!1),c!==null?(this.cancelNextCallback(),c===De?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===Oe&&this.setState({status:Oo})},o.performEnter=function(t){var c=this,r=this.props.enter,a=this.context?this.context.isMounting:t,A=this.props.nodeRef?[a]:[fn.ZP.findDOMNode(this),a],f=A[0],u=A[1],B=this.getTimeouts(),T=a?B.appear:B.enter;if(!t&&!r||Gc.disabled){this.safeSetState({status:Ve},function(){c.props.onEntered(f)});return}this.props.onEnter(f,u),this.safeSetState({status:De},function(){c.props.onEntering(f,u),c.onTransitionEnd(T,function(){c.safeSetState({status:Ve},function(){c.props.onEntered(f,u)})})})},o.performExit=function(){var t=this,c=this.props.exit,r=this.getTimeouts(),a=this.props.nodeRef?void 0:fn.ZP.findDOMNode(this);if(!c||Gc.disabled){this.safeSetState({status:Oe},function(){t.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Ct},function(){t.props.onExiting(a),t.onTransitionEnd(r.exit,function(){t.safeSetState({status:Oe},function(){t.props.onExited(a)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(t,c){c=this.setNextCallback(c),this.setState(t,c)},o.setNextCallback=function(t){var c=this,r=!0;return this.nextCallback=function(a){r&&(r=!1,c.nextCallback=null,t(a))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},o.onTransitionEnd=function(t,c){this.setNextCallback(c);var r=this.props.nodeRef?this.props.nodeRef.current:fn.ZP.findDOMNode(this),a=t==null&&!this.props.addEndListener;if(!r||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var A=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],f=A[0],u=A[1];this.props.addEndListener(f,u)}t!=null&&setTimeout(this.nextCallback,t)},o.render=function(){var t=this.state.status;if(t===Oo)return null;var c=this.props,r=c.children,a=c.in,A=c.mountOnEnter,f=c.unmountOnExit,u=c.appear,B=c.enter,T=c.exit,K=c.timeout,j=c.addEndListener,q=c.onEnter,un=c.onEntering,an=c.onEntered,bn=c.onExit,An=c.onExiting,kn=c.onExited,Mn=c.nodeRef,Hn=bt(c,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return fn.ZP.createElement(di.Provider,{value:null},typeof r=="function"?r(t,Hn):fn.ZP.cloneElement(fn.ZP.Children.only(r),Hn))},e}(fn.ZP.Component);Ae.contextType=di,Ae.propTypes={};function Ze(){}Ae.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ze,onEntering:Ze,onEntered:Ze,onExit:Ze,onExiting:Ze,onExited:Ze},Ae.UNMOUNTED=Oo,Ae.EXITED=Oe,Ae.ENTERING=De,Ae.ENTERED=Ve,Ae.EXITING=Ct;const _f=Ae;var bf=function(e,o){return e&&o&&o.split(" ").forEach(function(i){return pf(e,i)})},yt=function(e,o){return e&&o&&o.split(" ").forEach(function(i){return gf(e,i)})},vt=function(n){Bt(e,n);function e(){for(var i,t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return i=n.call.apply(n,[this].concat(c))||this,i.appliedClasses={appear:{},enter:{},exit:{}},i.onEnter=function(a,A){var f=i.resolveArguments(a,A),u=f[0],B=f[1];i.removeClasses(u,"exit"),i.addClass(u,B?"appear":"enter","base"),i.props.onEnter&&i.props.onEnter(a,A)},i.onEntering=function(a,A){var f=i.resolveArguments(a,A),u=f[0],B=f[1],T=B?"appear":"enter";i.addClass(u,T,"active"),i.props.onEntering&&i.props.onEntering(a,A)},i.onEntered=function(a,A){var f=i.resolveArguments(a,A),u=f[0],B=f[1],T=B?"appear":"enter";i.removeClasses(u,T),i.addClass(u,T,"done"),i.props.onEntered&&i.props.onEntered(a,A)},i.onExit=function(a){var A=i.resolveArguments(a),f=A[0];i.removeClasses(f,"appear"),i.removeClasses(f,"enter"),i.addClass(f,"exit","base"),i.props.onExit&&i.props.onExit(a)},i.onExiting=function(a){var A=i.resolveArguments(a),f=A[0];i.addClass(f,"exit","active"),i.props.onExiting&&i.props.onExiting(a)},i.onExited=function(a){var A=i.resolveArguments(a),f=A[0];i.removeClasses(f,"exit"),i.addClass(f,"exit","done"),i.props.onExited&&i.props.onExited(a)},i.resolveArguments=function(a,A){return i.props.nodeRef?[i.props.nodeRef.current,a]:[a,A]},i.getClassNames=function(a){var A=i.props.classNames,f=typeof A=="string",u=f&&A?A+"-":"",B=f?""+u+a:A[a],T=f?B+"-active":A[a+"Active"],K=f?B+"-done":A[a+"Done"];return{baseClassName:B,activeClassName:T,doneClassName:K}},i}var o=e.prototype;return o.addClass=function(t,c,r){var a=this.getClassNames(c)[r+"ClassName"],A=this.getClassNames("enter"),f=A.doneClassName;c==="appear"&&r==="done"&&f&&(a+=" "+f),r==="active"&&t&&t.scrollTop,a&&(this.appliedClasses[c][r]=a,bf(t,a))},o.removeClasses=function(t,c){var r=this.appliedClasses[c],a=r.base,A=r.active,f=r.done;this.appliedClasses[c]={},a&&yt(t,a),A&&yt(t,A),f&&yt(t,f)},o.render=function(){var t=this.props,c=t.classNames,r=bt(t,["classNames"]);return fn.ZP.createElement(_f,Jo({},r,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(fn.ZP.Component);vt.defaultProps={classNames:""},vt.propTypes={};const mf=vt;function Bf(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function It(n,e){var o=function(c){return e&&(0,fn.l$)(c)?e(c):c},i=Object.create(null);return n&&fn.hu.map(n,function(t){return t}).forEach(function(t){i[t.key]=o(t)}),i}function Cf(n,e){n=n||{},e=e||{};function o(u){return u in e?e[u]:n[u]}var i=Object.create(null),t=[];for(var c in n)c in e?t.length&&(i[c]=t,t=[]):t.push(c);var r,a={};for(var A in e){if(i[A])for(r=0;r<i[A].length;r++){var f=i[A][r];a[i[A][r]]=o(f)}a[A]=o(A)}for(r=0;r<t.length;r++)a[t[r]]=o(t[r]);return a}function xe(n,e,o){return o[e]!=null?o[e]:n.props[e]}function yf(n,e){return It(n.children,function(o){return(0,fn.Tm)(o,{onExited:e.bind(null,o),in:!0,appear:xe(o,"appear",n),enter:xe(o,"enter",n),exit:xe(o,"exit",n)})})}function vf(n,e,o){var i=It(n.children),t=Cf(e,i);return Object.keys(t).forEach(function(c){var r=t[c];if((0,fn.l$)(r)){var a=c in e,A=c in i,f=e[c],u=(0,fn.l$)(f)&&!f.props.in;A&&(!a||u)?t[c]=(0,fn.Tm)(r,{onExited:o.bind(null,r),in:!0,exit:xe(r,"exit",n),enter:xe(r,"enter",n)}):!A&&a&&!u?t[c]=(0,fn.Tm)(r,{in:!1}):A&&a&&(0,fn.l$)(f)&&(t[c]=(0,fn.Tm)(r,{onExited:o.bind(null,r),in:f.props.in,exit:xe(r,"exit",n),enter:xe(r,"enter",n)}))}}),t}var If=Object.values||function(n){return Object.keys(n).map(function(e){return n[e]})},wf={component:"div",childFactory:function(e){return e}},wt=function(n){Bt(e,n);function e(i,t){var c;c=n.call(this,i,t)||this;var r=c.handleExited.bind(Bf(c));return c.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},c}var o=e.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(t,c){var r=c.children,a=c.handleExited,A=c.firstRender;return{children:A?yf(t,a):vf(t,r,a),firstRender:!1}},o.handleExited=function(t,c){var r=It(this.props.children);t.key in r||(t.props.onExited&&t.props.onExited(c),this.mounted&&this.setState(function(a){var A=Jo({},a.children);return delete A[t.key],{children:A}}))},o.render=function(){var t=this.props,c=t.component,r=t.childFactory,a=bt(t,["component","childFactory"]),A=this.state.contextValue,f=If(this.state.children).map(r);return delete a.appear,delete a.enter,delete a.exit,c===null?fn.ZP.createElement(di.Provider,{value:A},f):fn.ZP.createElement(di.Provider,{value:A},fn.ZP.createElement(c,a,f))},e}(fn.ZP.Component);wt.propTypes={},wt.defaultProps=wf;const Tf=wt;var Sf=tn(1174),hi=fn.ZP.createContext(null);const Ch=null;function Ff(n){n()}var zc=Ff,Jf=function(e){return zc=e},Of=function(){return zc},qc={notify:function(){}};function Df(){var n=Of(),e=null,o=null;return{clear:function(){e=null,o=null},notify:function(){n(function(){for(var t=e;t;)t.callback(),t=t.next})},get:function(){for(var t=[],c=e;c;)t.push(c),c=c.next;return t},subscribe:function(t){var c=!0,r=o={callback:t,next:null,prev:o};return r.prev?r.prev.next=r:e=r,function(){!c||e===null||(c=!1,r.next?r.next.prev=r.prev:o=r.prev,r.prev?r.prev.next=r.next:e=r.next)}}}}var $c=function(){function n(o,i){this.store=o,this.parentSub=i,this.unsubscribe=null,this.listeners=qc,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var e=n.prototype;return e.addNestedSub=function(i){return this.trySubscribe(),this.listeners.subscribe(i)},e.notifyNestedSubs=function(){this.listeners.notify()},e.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},e.isSubscribed=function(){return Boolean(this.unsubscribe)},e.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=Df())},e.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=qc)},n}(),Tt=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?fn.bt:fn.d4;function xf(n){var e=n.store,o=n.context,i=n.children,t=(0,fn.Ye)(function(){var a=new $c(e);return a.onStateChange=a.notifyNestedSubs,{store:e,subscription:a}},[e]),c=(0,fn.Ye)(function(){return e.getState()},[e]);Tt(function(){var a=t.subscription;return a.trySubscribe(),c!==e.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[t,c]);var r=o||hi;return fn.ZP.createElement(r.Provider,{value:t},i)}const Pf=xf;var yh=tn(449),vh=tn(6533),Rf=null,kf=null,Ih=function(e){try{return JSON.stringify(e)}catch{return String(e)}};function Nf(n,e){var o=n[1];return[e.payload,o+1]}function Yc(n,e,o){useIsomorphicLayoutEffect(function(){return n.apply(void 0,e)},o)}function Lf(n,e,o,i,t,c,r){n.current=i,e.current=t,o.current=!1,c.current&&(c.current=null,r())}function Mf(n,e,o,i,t,c,r,a,A,f){if(n){var u=!1,B=null,T=function(){if(!u){var q=e.getState(),un,an;try{un=i(q,t.current)}catch(bn){an=bn,B=bn}an||(B=null),un===c.current?r.current||A():(c.current=un,a.current=un,r.current=!0,f({type:"STORE_UPDATED",payload:{error:an}}))}};o.onStateChange=T,o.trySubscribe(),T();var K=function(){if(u=!0,o.tryUnsubscribe(),o.onStateChange=null,B)throw B};return K}}var Uf=function(){return[null,0]};function wh(n,e){e===void 0&&(e={});var o=e,i=o.getDisplayName,t=i===void 0?function(Hn){return"ConnectAdvanced("+Hn+")"}:i,c=o.methodName,r=c===void 0?"connectAdvanced":c,a=o.renderCountProp,A=a===void 0?void 0:a,f=o.shouldHandleStateChanges,u=f===void 0?!0:f,B=o.storeKey,T=B===void 0?"store":B,K=o.withRef,j=K===void 0?!1:K,q=o.forwardRef,un=q===void 0?!1:q,an=o.context,bn=an===void 0?ReactReduxContext:an,An=_objectWithoutPropertiesLoose(o,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);if(!1)var kn;var Mn=bn;return function(Kn){var Le=Kn.displayName||Kn.name||"Component",No=t(Le),Oi=_extends({},An,{getDisplayName:t,methodName:r,renderCountProp:A,shouldHandleStateChanges:u,storeKey:T,displayName:No,wrappedComponentName:Le,WrappedComponent:Kn}),Di=An.pure;function ec(jn){return n(jn.dispatch,Oi)}var oc=Di?useMemo:function(jn){return jn()};function Lo(jn){var Mo=useMemo(function(){var Ko=jn.reactReduxForwardedRef,Ac=_objectWithoutPropertiesLoose(jn,["reactReduxForwardedRef"]);return[jn.context,Ko,Ac]},[jn]),Me=Mo[0],Zr=Mo[1],Uo=Mo[2],ic=useMemo(function(){return Me&&Me.Consumer&&isContextConsumer(React.createElement(Me.Consumer,null))?Me:Mn},[Me,Mn]),Be=useContext(ic),Ho=Boolean(jn.store)&&Boolean(jn.store.getState)&&Boolean(jn.store.dispatch),Sp=Boolean(Be)&&Boolean(Be.store),Ce=Ho?jn.store:Be.store,tc=useMemo(function(){return ec(Ce)},[Ce]),Xr=useMemo(function(){if(!u)return kf;var Ko=new Subscription(Ce,Ho?null:Be.subscription),Ac=Ko.notifyNestedSubs.bind(Ko);return[Ko,Ac]},[Ce,Ho,Be]),Pi=Xr[0],Qr=Xr[1],na=useMemo(function(){return Ho?Be:_extends({},Be,{subscription:Pi})},[Ho,Be,Pi]),ea=useReducer(Nf,Rf,Uf),ph=ea[0],Ri=ph[0],gh=ea[1];if(Ri&&Ri.error)throw Ri.error;var oa=useRef(),cc=useRef(Uo),ki=useRef(),ia=useRef(!1),rc=oc(function(){return ki.current&&Uo===cc.current?ki.current:tc(Ce.getState(),Uo)},[Ce,Ri,Uo]);Yc(Lf,[cc,oa,ia,Uo,rc,ki,Qr]),Yc(Mf,[u,Ce,Pi,tc,cc,oa,ia,ki,Qr,gh],[Ce,Pi,tc]);var ac=useMemo(function(){return React.createElement(Kn,_extends({},rc,{ref:Zr}))},[Zr,Kn,rc]),_h=useMemo(function(){return u?React.createElement(ic.Provider,{value:na},ac):ac},[ic,ac,na]);return _h}var ao=Di?React.memo(Lo):Lo;if(ao.WrappedComponent=Kn,ao.displayName=Lo.displayName=No,un){var xi=React.forwardRef(function(Mo,Me){return React.createElement(ao,_extends({},Mo,{reactReduxForwardedRef:Me}))});return xi.displayName=No,xi.WrappedComponent=Kn,hoistStatics(xi,Kn)}return hoistStatics(ao,Kn)}}function Hf(n,e){var o={},i=function(r){var a=n[r];typeof a=="function"&&(o[r]=function(){return e(a.apply(void 0,arguments))})};for(var t in n)i(t);return o}function St(n){return function(o,i){var t=n(o,i);function c(){return t}return c.dependsOnOwnProps=!1,c}}function Vc(n){return n.dependsOnOwnProps!==null&&n.dependsOnOwnProps!==void 0?Boolean(n.dependsOnOwnProps):n.length!==1}function Zc(n,e){return function(i,t){var c=t.displayName,r=function(A,f){return r.dependsOnOwnProps?r.mapToProps(A,f):r.mapToProps(A)};return r.dependsOnOwnProps=!0,r.mapToProps=function(A,f){r.mapToProps=n,r.dependsOnOwnProps=Vc(n);var u=r(A,f);return typeof u=="function"&&(r.mapToProps=u,r.dependsOnOwnProps=Vc(u),u=r(A,f)),u},r}}function Kf(n){return typeof n=="function"?Zc(n,"mapDispatchToProps"):void 0}function Wf(n){return n?void 0:St(function(e){return{dispatch:e}})}function jf(n){return n&&typeof n=="object"?St(function(e){return Hf(n,e)}):void 0}const Th=[Kf,Wf,jf];function Gf(n){return typeof n=="function"?Zc(n,"mapStateToProps"):void 0}function zf(n){return n?void 0:St(function(){return{}})}const Sh=[Gf,zf];function qf(n,e,o){return Jo({},o,n,e)}function $f(n){return function(o,i){var t=i.displayName,c=i.pure,r=i.areMergedPropsEqual,a=!1,A;return function(u,B,T){var K=n(u,B,T);return a?(!c||!r(K,A))&&(A=K):(a=!0,A=K),A}}}function Yf(n){return typeof n=="function"?$f(n):void 0}function Vf(n){return n?void 0:function(){return qf}}const Fh=[Yf,Vf];function Ft(n,e,o){for(var i=e.length-1;i>=0;i--){var t=e[i](n);if(t)return t}return function(c,r){throw new Error("Invalid value of type "+typeof n+" for "+o+" argument when connecting component "+r.wrappedComponentName+".")}}function Zf(n,e){return n===e}function Jh(n){var e=n===void 0?{}:n,o=e.connectHOC,i=o===void 0?connectAdvanced:o,t=e.mapStateToPropsFactories,c=t===void 0?defaultMapStateToPropsFactories:t,r=e.mapDispatchToPropsFactories,a=r===void 0?defaultMapDispatchToPropsFactories:r,A=e.mergePropsFactories,f=A===void 0?defaultMergePropsFactories:A,u=e.selectorFactory,B=u===void 0?defaultSelectorFactory:u;return function(K,j,q,un){un===void 0&&(un={});var an=un,bn=an.pure,An=bn===void 0?!0:bn,kn=an.areStatesEqual,Mn=kn===void 0?Zf:kn,Hn=an.areOwnPropsEqual,Kn=Hn===void 0?shallowEqual:Hn,Le=an.areStatePropsEqual,No=Le===void 0?shallowEqual:Le,Oi=an.areMergedPropsEqual,Di=Oi===void 0?shallowEqual:Oi,ec=_objectWithoutPropertiesLoose(an,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),oc=Ft(K,c,"mapStateToProps"),Lo=Ft(j,a,"mapDispatchToProps"),ao=Ft(q,f,"mergeProps");return i(B,_extends({methodName:"connect",getDisplayName:function(jn){return"Connect("+jn+")"},shouldHandleStateChanges:Boolean(K),initMapStateToProps:oc,initMapDispatchToProps:Lo,initMergeProps:ao,pure:An,areStatesEqual:Mn,areOwnPropsEqual:Kn,areStatePropsEqual:No,areMergedPropsEqual:Di},ec))}}const Oh=null;function Xf(){var n=(0,fn.qp)(hi);return n}function Dh(n){n===void 0&&(n=ReactReduxContext);var e=n===ReactReduxContext?useDefaultReduxContext:function(){return useContext(n)};return function(){var i=e(),t=i.store;return t}}var xh=null;function Ph(n){n===void 0&&(n=ReactReduxContext);var e=n===ReactReduxContext?useDefaultStore:createStoreHook(n);return function(){var i=e();return i.dispatch}}var Rh=null,Qf=function(e,o){return e===o};function ns(n,e,o,i){var t=(0,fn._Y)(function(j){return j+1},0),c=t[1],r=(0,fn.Ye)(function(){return new $c(o,i)},[o,i]),a=(0,fn.sO)(),A=(0,fn.sO)(),f=(0,fn.sO)(),u=(0,fn.sO)(),B=o.getState(),T;try{if(n!==A.current||B!==f.current||a.current){var K=n(B);u.current===void 0||!e(K,u.current)?T=K:T=u.current}else T=u.current}catch(j){throw a.current&&(j.message+=`
The error may be correlated with this previous error:
`+a.current.stack+`

`),j}return Tt(function(){A.current=n,f.current=B,u.current=T,a.current=void 0}),Tt(function(){function j(){try{var q=o.getState(),un=A.current(q);if(e(un,u.current))return;u.current=un,f.current=q}catch(an){a.current=an}c()}return r.onStateChange=j,r.trySubscribe(),j(),function(){return r.tryUnsubscribe()}},[o,r]),T}function es(n){n===void 0&&(n=hi);var e=n===hi?Xf:function(){return(0,fn.qp)(n)};return function(i,t){t===void 0&&(t=Qf);var c=e(),r=c.store,a=c.subscription,A=ns(i,t,r,a);return(0,fn.Qb)(A),A}}var os=es();Jf(fn.mm);var is=/\s/;function ts(n){for(var e=n.length;e--&&is.test(n.charAt(e)););return e}const cs=ts;var rs=/^\s+/;function as(n){return n&&n.slice(0,cs(n)+1).replace(rs,"")}const As=as;var ls="[object Symbol]";function fs(n){return typeof n=="symbol"||Fe(n)&&Un(n)==ls}const pi=fs;var Xc=0/0,ss=/^[-+]0x[0-9a-f]+$/i,Es=/^0b[01]+$/i,us=/^0o[0-7]+$/i,ds=parseInt;function hs(n){if(typeof n=="number")return n;if(pi(n))return Xc;if(yn(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=yn(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=As(n);var o=Es.test(n);return o||us.test(n)?ds(n.slice(2),o?2:8):ss.test(n)?Xc:+n}const ps=hs;var Qc=1/0,gs=17976931348623157e292;function _s(n){if(!n)return n===0?n:0;if(n=ps(n),n===Qc||n===-Qc){var e=n<0?-1:1;return e*gs}return n===n?n:0}const bs=_s;function ms(n){var e=bs(n),o=e%1;return e===e?o?e-o:e:0}const Bs=ms;var Cs="Expected a function";function ys(n,e){var o;if(typeof e!="function")throw new TypeError(Cs);return n=Bs(n),function(){return--n>0&&(o=e.apply(this,arguments)),n<=1&&(e=void 0),o}}const vs=ys;function Is(n){return vs(2,n)}const ws=Is(()=>({...window.desktop.store,dispatch:bc}));var nr=tn(1174).h;const{render:Ts}=Sf,Ss=async(n,e="div")=>{const o=ws(),t=o.getState().settings.locale;t&&await window.desktop.intl.applyLocale(t);const c=document.createElement(e);document.body.appendChild(c),window.addEventListener("beforeunload",()=>(0,fn.uy)(c)),Ts(nr(Pf,{store:o},nr(n,null)),c)};function Fs(n,e,o){e=="__proto__"&&fi?fi(n,e,{configurable:!0,enumerable:!0,value:o,writable:!0}):n[e]=o}const er=Fs;function Js(n,e,o,i){for(var t=-1,c=n==null?0:n.length;++t<c;){var r=n[t];e(i,r,o(r),n)}return i}const Os=Js;function Ds(n){return function(e,o,i){for(var t=-1,c=Object(e),r=i(e),a=r.length;a--;){var A=r[n?a:++t];if(o(c[A],A,c)===!1)break}return e}}var xs=Ds();const Ps=xs;function Rs(n,e){return n&&Ps(n,e,ut)}const ks=Rs;function Ns(n,e){return function(o,i){if(o==null)return o;if(!at(o))return n(o,i);for(var t=o.length,c=e?t:-1,r=Object(o);(e?c--:++c<t)&&i(r[c],c,r)!==!1;);return o}}var Ls=Ns(ks);const or=Ls;function Ms(n,e,o,i){return or(n,function(t,c,r){e(i,t,o(t),r)}),i}const Us=Ms;var Hs=1,Ks=2;function Ws(n,e,o,i){var t=o.length,c=t,r=!i;if(n==null)return!c;for(n=Object(n);t--;){var a=o[t];if(r&&a[2]?a[1]!==n[a[0]]:!(a[0]in n))return!1}for(;++t<c;){a=o[t];var A=a[0],f=n[A],u=a[1];if(r&&a[2]){if(f===void 0&&!(A in n))return!1}else{var B=new Ei;if(i)var T=i(f,u,A,n,e,B);if(!(T===void 0?gt(u,f,Hs|Ks,i,B):T))return!1}}return!0}const js=Ws;function Gs(n){return n===n&&!yn(n)}const ir=Gs;function zs(n){for(var e=ut(n),o=e.length;o--;){var i=e[o],t=n[i];e[o]=[i,t,ir(t)]}return e}const qs=zs;function $s(n,e){return function(o){return o==null?!1:o[n]===e&&(e!==void 0||n in Object(o))}}const tr=$s;function Ys(n){var e=qs(n);return e.length==1&&e[0][2]?tr(e[0][0],e[0][1]):function(o){return o===n||js(o,n,e)}}const Vs=Ys;var Zs=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Xs=/^\w*$/;function Qs(n,e){if(Vn(n))return!1;var o=typeof n;return o=="number"||o=="symbol"||o=="boolean"||n==null||pi(n)?!0:Xs.test(n)||!Zs.test(n)||e!=null&&n in Object(e)}const Jt=Qs;var nE="Expected a function";function Ot(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(nE);var o=function(){var i=arguments,t=e?e.apply(this,i):i[0],c=o.cache;if(c.has(t))return c.get(t);var r=n.apply(this,i);return o.cache=c.set(t,r)||c,r};return o.cache=new(Ot.Cache||qe),o}Ot.Cache=qe;const eE=Ot;var oE=500;function iE(n){var e=eE(n,function(i){return o.size===oE&&o.clear(),i}),o=e.cache;return e}const tE=iE;var cE=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rE=/\\(\\)?/g,aE=tE(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(cE,function(o,i,t,c){e.push(t?c.replace(rE,"$1"):i||o)}),e});const AE=aE;var lE=1/0,cr=Sn?Sn.prototype:void 0,rr=cr?cr.toString:void 0;function ar(n){if(typeof n=="string")return n;if(Vn(n))return Ai(n,ar)+"";if(pi(n))return rr?rr.call(n):"";var e=n+"";return e=="0"&&1/n==-lE?"-0":e}const fE=ar;function sE(n){return n==null?"":fE(n)}const EE=sE;function uE(n,e){return Vn(n)?n:Jt(n,e)?[n]:AE(EE(n))}const gi=uE;var dE=1/0;function hE(n){if(typeof n=="string"||pi(n))return n;var e=n+"";return e=="0"&&1/n==-dE?"-0":e}const Do=hE;function pE(n,e){e=gi(e,n);for(var o=0,i=e.length;n!=null&&o<i;)n=n[Do(e[o++])];return o&&o==i?n:void 0}const Dt=pE;function gE(n,e,o){var i=n==null?void 0:Dt(n,e);return i===void 0?o:i}const _E=gE;function bE(n,e){return n!=null&&e in Object(n)}const mE=bE;function BE(n,e,o){e=gi(e,n);for(var i=-1,t=e.length,c=!1;++i<t;){var r=Do(e[i]);if(!(c=n!=null&&o(n,r)))break;n=n[r]}return c||++i!=t?c:(t=n==null?0:n.length,!!t&&rt(t)&&st(r,t)&&(Vn(n)||it(n)))}const CE=BE;function yE(n,e){return n!=null&&CE(n,e,mE)}const Ar=yE;var vE=1,IE=2;function wE(n,e){return Jt(n)&&ir(e)?tr(Do(n),e):function(o){var i=_E(o,n);return i===void 0&&i===e?Ar(o,n):gt(e,i,vE|IE)}}const TE=wE;function SE(n){return function(e){return e==null?void 0:e[n]}}const FE=SE;function JE(n){return function(e){return Dt(e,n)}}const OE=JE;function DE(n){return Jt(n)?FE(Do(n)):OE(n)}const xE=DE;function PE(n){return typeof n=="function"?n:n==null?li:typeof n=="object"?Vn(n)?TE(n[0],n[1]):Vs(n):xE(n)}const lr=PE;function RE(n,e){return function(o,i){var t=Vn(o)?Os:Us,c=e?e():{};return t(o,n,lr(i,2),c)}}const kE=RE;var NE=Object.prototype,LE=NE.hasOwnProperty,ME=kE(function(n,e,o){LE.call(n,o)?n[o].push(e):er(n,o,[e])});const fr=ME;function UE(n,e){for(var o=-1,i=n==null?0:n.length;++o<i&&e(n[o],o,n)!==!1;);return n}const HE=UE;function KE(n){return typeof n=="function"?n:li}const WE=KE;function jE(n,e){var o=Vn(n)?HE:or;return o(n,WE(e))}const GE=jE;function zE(n){const e=fr(n,"teamId"),o={};return GE(e,(i,t)=>{o[t]=fr(e[t],"channel")}),o}function qE(n){return!n.channelName||n.channelName.startsWith("#")||n.channelName.includes(" ")?n:{...n,channelName:`#${n.channelName}`}}function $E(n){if(n&&n.authorName)return n;if(n&&(n.content||"").startsWith("<img"))return H.warn("ensureAuthorName: not able to resolve author name, either content is empty or content is html"),n;{const e={...n},o=e.content.match(/.*?:/);return o&&o.length>0&&(e.authorName=o[0].slice(0,o[0].length-1),e.content=e.content.replace(o[0],"")),H.info("ensureAuthorName: notification payload does not contain author name, match possible name instead"),e}}const YE=Object.prototype.hasOwnProperty;function VE(n,e){if(Object.is(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;const o=Object.keys(n),i=Object.keys(e);if(o.length!==i.length)return!1;for(let t=0;t<o.length;t++)if(!YE.call(e,o[t])||!Object.is(n[o[t]],e[o[t]]))return!1;return!0}function ZE(n){const e=(0,te.sO)(n);return!VE(n,e.current)&&!_t(n,e.current)&&(e.current=n),e.current}function xt(n,e){(0,te.d4)(n,[ZE(e)])}function xo(n){return os(n,_t)}const XE=()=>{const n=xo(e=>e.settings.locale);xt(()=>{async function e(){n&&await window.desktop.intl.applyLocale(n)}e()},[n])};var _i=tn(3928),Xe={};Xe.styleTagTransform=Y(),Xe.setAttributes=J(),Xe.insert=F().bind(null,"head"),Xe.domAPI=b(),Xe.insertStyleElement=R();var Mh=l()(_i.Z,Xe);const Uh=_i.Z&&_i.Z.locals?_i.Z.locals:void 0;var QE=Object.prototype,nu=QE.hasOwnProperty;function eu(n,e,o){var i=n[e];(!(nu.call(n,e)&&je(i,o))||o===void 0&&!(e in n))&&er(n,e,o)}const ou=eu;function iu(n,e,o,i){if(!yn(n))return n;e=gi(e,n);for(var t=-1,c=e.length,r=c-1,a=n;a!=null&&++t<c;){var A=Do(e[t]),f=o;if(A==="__proto__"||A==="constructor"||A==="prototype")return n;if(t!=r){var u=a[A];f=i?i(u,A,a):void 0,f===void 0&&(f=yn(u)?u:st(e[t+1])?[]:{})}ou(a,A,f),a=a[A]}return n}const tu=iu;function cu(n,e,o){for(var i=-1,t=e.length,c={};++i<t;){var r=e[i],a=Dt(n,r);o(a,r)&&tu(c,gi(r,n),a)}return c}const ru=cu;function au(n,e){return ru(n,e,function(o,i){return Ar(n,i)})}const Au=au;function lu(n){var e=n==null?0:n.length;return e?tt(n,1):[]}const fu=lu;function su(n){return _c(gc(n,void 0,fu),n+"")}var Eu=su(function(n,e){return n==null?{}:Au(n,e)});const uu=Eu;var du=Math.min;function hu(n,e,o){for(var i=o?et:nt,t=n[0].length,c=n.length,r=c,a=Array(c),A=1/0,f=[];r--;){var u=n[r];r&&e&&(u=Ai(u,ot(e))),A=du(u.length,A),a[r]=!o&&(e||t>=120&&u.length>=120)?new Dn(r&&u):void 0}u=n[0];var B=-1,T=a[0];n:for(;++B<t&&f.length<A;){var K=u[B],j=e?e(K):K;if(K=o||K!==0?K:0,!(T?To(T,j):i(f,j,o))){for(r=c;--r;){var q=a[r];if(!(q?To(q,j):i(n[r],j,o)))continue n}T&&T.push(j),f.push(K)}}return f}const pu=hu;function gu(n){return So(n)?n:[]}const _u=gu;var bu=ct(function(n){var e=Ai(n,_u);return e.length&&e[0]===n[0]?pu(e):[]});const mu=bu;function Bu(n,e){for(var o,i=-1,t=n.length;++i<t;){var c=e(n[i]);c!==void 0&&(o=o===void 0?c:o+c)}return o}const Cu=Bu;function yu(n,e){return n&&n.length?Cu(n,lr(e,2)):0}const sr=yu;function vu(n,e){return n.teams[e]}function Iu(n,e){var o;return!!((o=n==null?void 0:n.featureFlags)!=null&&o[e])}function Kh(n,e){return Object.values(Tu(n)).some(o=>Iu(o,e))}const Wh=v(n=>{var e;return(e=n==null?void 0:n.teams)!=null?e:{}},n=>{const e=Object.values(n).find(o=>o&&o.version);return e?e.version:void 0}),wu=v(n=>n,n=>Object.entries(n).reduce((e,[o,i])=>(e[o]={...i.unreads,teamId:o},e),{})),Pt="*",jh=v(n=>{var e;return(e=n==null?void 0:n.teams)!=null?e:{}},n=>Object.values(n).map(e=>{var o;return((o=e==null?void 0:e.connectivityPrefs)==null?void 0:o.ntlmCredentialDomains)||Pt}).find(e=>e!==Pt)||Pt),Tu=v([n=>{var e,o;return(o=(e=n.webapp)==null?void 0:e.teams)!=null?o:{}},n=>n.workspaces],(n,e)=>uu(n,mu(...[n,e].map(Object.keys)))),Su=v([n=>n.webapp?n.webapp.teams:{},n=>n.workspacesMeta.selectedWorkspaceId],(n,e)=>e?n==null?void 0:n[e]:null),Gh=v([Su,n=>n.settings.locale],(n,e)=>n?n.locale:e),zh=v([wu],n=>{const e=Object.values(n),o=Object.keys(e).some(i=>{const{showBullet:t,unreads:c}=e[i];return t&&c>0});return{unreads:sr(e,({unreads:i})=>i||0),unreadHighlights:sr(e,({unreadHighlights:i})=>i||0),showBullet:o}});var bi={},Rt={checkExisting:!0};function Fu(n){bi[n]=!0}function Ju(n){bi[n]=!1}function Er(n){return!!bi[n]}function Ou(n){if(Rt.checkExisting&&Er(n))throw new TypeError("Duplicate action type: ".concat(n))}function Du(){return Object.keys(bi).filter(Er)}function qh(){Du().forEach(Ju)}function $h(){Rt.checkExisting=!0}function Yh(){Rt.checkExisting=!1}var ur=0,xu=function(e){return e},dr=function(e){return e&&typeof e.dispatch=="function"?e.dispatch:e},kt=function(e){return Array.isArray(e)?e.map(dr):dr(e)};function hr(n,e,o){typeof n=="function"&&(o=e,e=n,n=void 0),typeof e!="function"&&(e=xu),typeof o!="function"&&(o=void 0);var i=typeof n=="string"&&/^[0-9A-Z_]+$/.test(n);i?(Ou(n),Fu(n)):++ur;var t=i?n:"[".concat(ur,"]").concat(n?" "+n:""),c=void 0;function r(){var f=e.apply(void 0,arguments);return o?{type:t,payload:f,error:f instanceof Error,meta:o.apply(void 0,arguments)}:{type:t,payload:f,error:f instanceof Error}}var a=function(u,B){return function(){var T=r.apply(void 0,arguments);return T.error||(T.error=B),Array.isArray(u)?u.map(function(K){return K(T)}):u?u(T):T}};function A(){return a(c,!1).apply(void 0,arguments)}return A.asError=function(){return a(c,!0).apply(void 0,arguments)},A.getType=function(){return t},A.toString=function(){return t},A.raw=r,A.assignTo=function(f){return c=kt(f),A},A.assigned=function(){return!!c},A.bound=function(){return!1},A.dispatched=A.assigned,A.bindTo=function(f){var u=a(kt(f,!1));return u.asError=a(kt(f,!0)),u.raw=r,u.getType=A.getType,u.toString=A.toString,u.assignTo=function(){return u},u.bindTo=function(){return u},u.assigned=function(){return!1},u.bound=function(){return!0},u.dispatched=u.bound,u},A}const Nt=hr("Batch",function(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return e.length===1&&Array.isArray(e[0])?e[0]:e});function Lt(){return Lt=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},Lt.apply(this,arguments)}function Mt(n){return n&&n.getType?n.toString():n}function Pu(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,o={payload:!0,fallback:null},i=Lt(f,{has:t,on:c,off:r,options:a});function t(u){return!!n[Mt(u)]}function c(u,B){return Array.isArray(u)?u.forEach(function(T){c(T,B)}):n[Mt(u)]=B,i}function r(u){return Array.isArray(u)?u.forEach(r):delete n[Mt(u)],i}function a(u){return Object.keys(u).forEach(function(B){return o[B]=u[B]}),i}if(typeof n=="function"){var A=n;n={},A(c,r)}t(Nt)||c(Nt,function(u,B){return o.payload?B.reduce(f,u):B.payload.reduce(f,u)});function f(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e,B=arguments.length>1?arguments[1]:void 0;if(!B||typeof B.type!="string"||B.type.startsWith("@@redux/"))return u;var T=n[B.type]||o.fallback;return T?o.payload?T(u,B.payload,B.meta):T(u,B):u}return i}function Ut(){return Ut=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},Ut.apply(this,arguments)}function Ru(n){for(var e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];if(o&&o.length>0){if(!n||typeof n!="function"&&typeof n.dispatch!="function")throw new TypeError("disbatch must take either a valid Redux store or a dispatch function as first parameter");return typeof n.dispatch=="function"&&(n=n.dispatch),n(batch.apply(void 0,o))}else{if(!n||typeof n.dispatch!="function")throw new TypeError("disbatch must take a valid Redux store with a dispatch function as first parameter");return Ut(n,{disbatch:Ru.bind(void 0,n)})}}var Ht=Nt.getType();function ku(n){return n&&n.type===Ht?(n.payload.type=Ht,n.payload):n}var pr={},Nu=function(e){typeof console[e]=="function"&&(pr[e]=function(){for(var i=arguments.length,t=new Array(i),c=0;c<i;c++)t[c]=arguments[c];var r=t.pop();Array.isArray(r)&&r.type===Ht?r.forEach(function(a){console[e].apply(console,[].concat(t,[a]))}):(t.push(r),console[e].apply(console,t))})};for(var Lu in console)Nu(Lu);const Vh={reduxLogger:x};var Zh=null,Mu=(n=>(n.CUSTOM_MENU_ITEM_CLICKED="CUSTOM_MENU_ITEM_CLICKED",n.DISPLAY_ADDED="DISPLAY_ADDED",n.DISPLAY_METRICS_CHANGED="DISPLAY_METRICS_CHANGED",n.DISPLAY_REMOVED="DISPLAY_REMOVED",n.MARK_DEVTOOLS_STATE="MARK_DEVTOOLS_STATE",n.POWER_RESUMED="POWER_RESUMED",n.SET_ACCESSIBILITY_SUPPORT_ENABLED="SET_ACCESSIBILITY_SUPPORT_ENABLED",n.SET_CUSTOM_MENU_ITEMS="SET_CUSTOM_MENU_ITEMS",n.SET_NET_LOG_STATUS="SET_NET_LOG_STATUS",n.SET_NETWORK_STATUS="SET_NETWORK_STATUS",n.SET_SUSPEND_STATUS="SET_SUSPEND_STATUS",n.SET_SYSTEM_IDLE="SET_SYSTEM_IDLE",n.SET_SYSTEM_LOCKED="SET_SYSTEM_LOCKED",n.SET_UPDATE_STATUS="SET_UPDATE_STATUS",n.SET_UPDATE_SUPPORTED="SET_UPDATE_SUPPORTED",n.UPDATE_DOWNLOADED="UPDATE_DOWNLOADED",n.SIGN_IN_CANCELED="SIGN_IN_CANCELED",n.SIGN_IN_COMPLETE="SIGN_IN_COMPLETE",n.SIGN_IN_PROGRESS="SIGN_IN_PROGRESS",n.TICKLE_MESSAGE_SERVER="TICKLE_MESSAGE_SERVER",n.TRACK_PAGE_ERROR="TRACK_PAGE_ERROR",n.SET_SESSION_MODE="SET_SESSION_MODE",n))(Mu||{}),Uu=(n=>(n.SELECT_TEAM="SELECT_TEAM",n.SELECT_TEAM_BY_USER_ID="SELECT_TEAM_BY_USER_ID",n.SELECT_TEAM_BY_INDEX="SELECT_TEAM_BY_INDEX",n.SET_TEAMS_BY_INDEX="SET_TEAMS_BY_INDEX",n.SELECT_CHANNEL="SELECT_CHANNEL",n.SELECT_NEXT_TEAM="SELECT_NEXT_TEAM",n.SELECT_PREVIOUS_TEAM="SELECT_PREVIOUS_TEAM",n.SIGNED_OUT_TEAM="SIGNED_OUT_TEAM",n))(Uu||{}),Hu=(n=>(n.APP_COMMAND="APP_COMMAND",n.CONTEXT_MENU_ITEM_CLICKED="CONTEXT_MENU_ITEM_CLICKED",n.EDITING_COMMAND="EDITING_COMMAND",n.OPEN_CONTEXT_MENU="OPEN_CONTEXT_MENU",n.POPUP_APP_MENU="POPUP_APP_MENU",n.SET_CONTEXT_MENU_TEMPLATE="SET_CONTEXT_MENU_TEMPLATE",n.CLOSE_APP_MENU="CLOSE_APP_MENU",n))(Hu||{}),Ku=(n=>(n.SHOW_AUTH_DIALOG="SHOW_AUTH_DIALOG",n.SHOW_URL_SCHEME_MODAL="SHOW_URL_SCHEME_MODAL",n.SUBMIT_CREDENTIALS="SUBMIT_CREDENTIALS",n.SHOW_TRAY_BALLOON="SHOW_TRAY_BALLOON",n))(Ku||{}),Wu=(n=>(n.RECORD_PERFORMANCE_TIMING="RECORD_PERFORMANCE_TIMING",n))(Wu||{}),ju=(n=>(n.INITIALIZE="INITIALIZE",n.READY="READY",n))(ju||{}),Gu=(n=>(n.AUTOLOGIN_TEAMS_COMPLETE="AUTOLOGIN_TEAMS_COMPLETE",n.CLEAR_CACHE_RESTART_APP="CLEAR_CACHE_RESTART_APP",n.CONFIRM_AND_RESET_APP="CONFIRM_AND_RESET_APP",n.FOREGROUND_APP="FOREGROUND_APP",n.HANDLE_DEEP_LINK="HANDLE_DEEP_LINK",n.MAIN_WINDOW_BLURRED="MAIN_WINDOW_BLURRED",n.MAIN_WINDOW_SHOWN="MAIN_WINDOW_SHOWN",n.MAIN_WINDOW_UNRESPONSIVE="MAIN_WINDOW_UNRESPONSIVE",n.MOVE_WINDOW_PRIMARY_SCREEN="MOVE_WINDOW_PRIMARY_SCREEN",n.PREPARE_AND_REVEAL_LOGS="PREPARE_AND_REVEAL_LOGS",n.RESTART_APP="RESTART_APP",n.QUIT_APP="QUIT_APP",n.REFRESH_TEAMS="REFRESH_TEAMS",n.RELOAD="RELOAD",n.SHOW_ABOUT="SHOW_ABOUT",n.SHOW_RELEASE_NOTES="SHOW_RELEASE_NOTES",n.SHOW_SETTINGS_EDITOR="SHOW_SETTINGS_EDITOR",n.USE_JS_PATH="USE_JS_PATH",n.SHOW_WEBAPP_DIALOG="SHOW_WEBAPP_DIALOG",n.SIGN_OUT_TEAM="SIGN_OUT_TEAM",n.TOGGLE_DEV_TOOLS="TOGGLE_DEV_TOOLS",n.TOGGLE_FULL_SCREEN="TOGGLE_FULL_SCREEN",n.TITLE_BAR_DOUBLE_CLICKED="TITLE_BAR_DOUBLE_CLICKED",n.TOKEN_FILE_PROCESSED="TOKEN_FILE_PROCESSED",n.MAGIC_LOGIN_IN_PROGRESS="MAGIC_LOGIN_IN_PROGRESS",n.RESTART_WITH_NET_LOG="RESTART_WITH_NET_LOG",n.START_NET_LOG="START_NET_LOG",n.DOWNLOADS_CLEANED_UP="DOWNLOADS_CLEANED_UP",n.SET_TASKBAR_BADGE="SET_TASKBAR_BADGE",n.TOGGLE_FEATURE_FRAGMENT="TOGGLE_FEATURE_FRAGMENT",n.SWITCH_MODE_AND_LOAD_URL="SWITCH_MODE_AND_LOAD_URL",n))(Gu||{}),zu=(n=>(n.NEW_NOTIFICATION="NEW_NOTIFICATION",n.REMOVE_NOTIFICATION="REMOVE_NOTIFICATION",n.CLEAR_NOTIFICATIONS="CLEAR_NOTIFICATIONS",n.CLICK_NOTIFICATION="CLICK_NOTIFICATION",n.NOTIFICATION_ACTION="NOTIFICATION_ACTION",n.REPLY_TO_NOTIFICATION="REPLY_TO_NOTIFICATION",n.SET_WINDOW_SHAPE="SET_WINDOW_SHAPE",n))(zu||{}),qu=(n=>(n.UPDATE_SETTINGS="UPDATE_SETTINGS",n.SET_DEV_MODE="SET_DEV_MODE",n.SET_DEV_ENVIRONMENT="SET_DEV_ENVIRONMENT",n.SET_TITLE_BAR_HIDDEN="SET_TITLE_BAR_HIDDEN",n.ZOOM_IN="ZOOM_IN",n.ZOOM_OUT="ZOOM_OUT",n.RESET_ZOOM="RESET_ZOOM",n.WHITELIST_PROTOCOL="WHITELIST_PROTOCOL",n.ALLOWLIST_FILE_EXT="ALLOWLIST_FILE_EXT",n))(qu||{}),gr=(n=>(n.ADD_NEW_TEAMS="ADD_NEW_TEAMS",n.REMOVE_TEAMS="REMOVE_TEAMS",n))(gr||{}),$u=(n=>(n.CREATE_WINDOW="CREATE_WINDOW",n.WINDOW_CREATED="WINDOW_CREATED",n.REMOVE_WINDOW="REMOVE_WINDOW",n.SET_WINDOW_FRAME="SET_WINDOW_FRAME",n))($u||{}),Yu=(n=>(n.SYNC="SYNC",n.SELECTION_CHANGED="SELECTION_CHANGED",n.SELECT_BY_ID="SELECT_BY_ID",n.SELECT_NEXT="SELECT_NEXT",n.SELECT_PREVIOUS="SELECT_PREVIOUS",n.ASSOCIATE_WEB_CONTENTS="ASSOCIATE_WEB_CONTENTS",n))(Yu||{});const Xh=null;var Vu=(n=>(n.JA_JP="ja-JP",n.EN_US="en-US",n.EN_GB="en-GB",n.ES_ES="es-ES",n.ES_LA="es-LA",n.FR_FR="fr-FR",n.DE_DE="de-DE",n.PT_BR="pt-BR",n.KO_KR="ko-KR",n.IT_IT="it-IT",n.ZH_CN="zh-CN",n.ZH_TW="zh-TW",n))(Vu||{});const Zu="en-US";function Xu(n,...e){return(e!=null?e:[]).flat().reduce((o,i)=>(delete o[i],o),{...n!=null?n:{}})}function Qu(n){if(!n.teams)return"(Empty)";const e=Object.keys(n.teams),o=Bc(Object.values(n.teams).reduce((i,t)=>(i.push(...Object.keys(t)),i),[]));return`(${e}) Changed keys [${o}]`}const nd=hr("REDUX_UPDATE_FROM_WEBAPP",n=>n,n=>({logPayload:Qu(n)})),ed="T00000000",Po={active_item:"#4C9689",active_item_text:"#FFFFFF",active_presence:"#38978D",badge:"#EB4D5C",column_bg:"#4D394B",hover_item:"#3E313C",menu_bg:"#3E313C",text_color:"#FFFFFF",titlebarBackground:"#232323",titlebarTextColor:"#FFFFFF"},Qh=Pu({[nd.getType()]:(n,e)=>{const o=e.teams?od(n.teams,e.teams):n.teams;return{...n,teams:o}},[gr.REMOVE_TEAMS]:(n,e)=>({...n,teams:Xu(n.teams,e)})},{teams:{}});function od(n,e){return Object.entries(e).filter(([o])=>o!==ed).map(([o,i])=>({[o]:{...n[o]||{},...i}})).reduce((o,i)=>({...o,...i}),n)}const id={theme:{titlebarBackground:Po.titlebarBackground,titlebarTextColor:Po.titlebarTextColor},notificationPrefs:{notificationSound:"knock_brush.mp3",noTextInNotifications:!1,muteSounds:!1},connectivityPrefs:{ntlmCredentialDomains:"*"},featureFlags:{},unreads:{unreads:0,unreadHighlights:0,showBullet:!1},locale:Zu,version:void 0},np=n=>({...n,teams:mapValues(n.teams,e=>({...cloneDeep(id),theme:e.theme,featureFlags:e.featureFlags,locale:e.locale}))});var td=(n=>(n[n.Setting=0]="Setting",n[n.Action=1]="Action",n[n.Other=2]="Other",n[n.None=3]="None",n))(td||{}),cd=(n=>(n.CHANNEL="channel",n.USER="user",n.TEAM="team",n.FILE="file",n.FILES="files",n.SHARE_FILE="share-file",n.INVITE="invite",n.NOTIFICATIONS="notifications",n.PREFERENCES="preferences",n.CREATE="create",n.BROWSE="browse",n))(cd||{});function rd(n){return/^slack:\/\/setting/i.test(n||"")}function ad(n){return/^slack:\/\/app/i.test(n||"")}function _r(n){return/^slack:/i.test(n||"")}function ep(n){let e;return Array.isArray(n)?e=n.find(o=>!!o&&_r(o)):e=n&&_r(n)?n:void 0,e?rd(e)?{type:0,href:e}:ad(e)?{type:1,href:e}:{type:2,href:e}:{type:3,href:""}}function op(n){if(!n||typeof n!="string")return null;try{const e=new URL(n);return e.protocol!==SLACK_PROTOCOL?null:{args:{...searchParamsEntries(e.searchParams),cmd:e.host},pathname:e.pathname}}catch(e){return logger.warn("Unable to parse deep link",{url:n,error:e}),null}}function Ad(n,e){return`slack://${n}?${new URLSearchParams(e).toString()}`}const ip=n=>`${baseSlackURL(n)}/clog/track/`,tp=(n,e)=>{const{instanceUid:o,sessionId:i,releaseChannel:t,userId:c,workspaceId:r}=e;return{...n,user_id:c,team_id:r,args:{...n.args,selected_user_id:c,selected_workspace_id:r,instanceUid:o,sessionId:i,releaseChannel:t}}};var mi=(n=>(n[n.DISPLAY_INFO=1000001]="DISPLAY_INFO",n[n._DEPRECATED_SYSTEM_LOCALE=1000002]="_DEPRECATED_SYSTEM_LOCALE",n[n._DEPRECATED_DESKTOP_HANG=1000003]="_DEPRECATED_DESKTOP_HANG",n[n.DESKTOP_CRASH=1000004]="DESKTOP_CRASH",n[n._DEPRECATED_DESKTOP_SCRIPTS_MISSING=1000005]="_DEPRECATED_DESKTOP_SCRIPTS_MISSING",n[n.DESKTOP_CLIENT_LAUNCH=1000006]="DESKTOP_CLIENT_LAUNCH",n[n.DESKTOP_RENDER_PROCESS_GONE=1000007]="DESKTOP_RENDER_PROCESS_GONE",n[n.DESKTOP_NOTIFICATION_RECEIVED=1000010]="DESKTOP_NOTIFICATION_RECEIVED",n[n.DESKTOP_NOTIFICATION_SUCCESS=1000011]="DESKTOP_NOTIFICATION_SUCCESS",n[n.DESKTOP_NOTIFICATION_ERROR=1000012]="DESKTOP_NOTIFICATION_ERROR",n[n.DESKTOP_NOTIFICATION_CLICK=1000013]="DESKTOP_NOTIFICATION_CLICK",n[n.DESKTOP_NOTIFICATION_REPLY=1000014]="DESKTOP_NOTIFICATION_REPLY",n[n.DESKTOP_NOTIFICATION_DISMISSED=1000015]="DESKTOP_NOTIFICATION_DISMISSED",n[n.DESKTOP_NOTIFICATION_FAILOVER=1000016]="DESKTOP_NOTIFICATION_FAILOVER",n[n.DESKTOP_NOTIFICATION_ACTION=1000017]="DESKTOP_NOTIFICATION_ACTION",n[n.DESKTOP_UPDATER_ERROR=1000050]="DESKTOP_UPDATER_ERROR",n[n.DESKTOP_UPDATER_CHECKING=1000051]="DESKTOP_UPDATER_CHECKING",n[n.DESKTOP_UPDATER_UPDATE_AVAILABLE=1000052]="DESKTOP_UPDATER_UPDATE_AVAILABLE",n[n.DESKTOP_UPDATER_UPDATE_NOT_AVAILABLE=1000053]="DESKTOP_UPDATER_UPDATE_NOT_AVAILABLE",n[n.DESKTOP_UPDATER_UPDATE_DOWNLOADED=1000054]="DESKTOP_UPDATER_UPDATE_DOWNLOADED",n[n.DESKTOP_UPDATER_CHECK_UPDATE_FAILURE=100055]="DESKTOP_UPDATER_CHECK_UPDATE_FAILURE",n[n._DEPRECATED_DESKTOP_WINDOWS_UPDATE_START=1000056]="_DEPRECATED_DESKTOP_WINDOWS_UPDATE_START",n[n._DEPRECATED_DESKTOP_WINDOWS_UPDATE_COMPLETED=1000057]="_DEPRECATED_DESKTOP_WINDOWS_UPDATE_COMPLETED",n[n.DESKTOP_UPDATER_APPLY_UPDATE=1000058]="DESKTOP_UPDATER_APPLY_UPDATE",n[n.DESKTOP_UPDATER_MAC_SERVER_FAIL=1000059]="DESKTOP_UPDATER_MAC_SERVER_FAIL",n[n.DESKTOP_UPDATER_SUCCESS=1000060]="DESKTOP_UPDATER_SUCCESS",n[n.DESKTOP_UPDATER_FAIL=1000061]="DESKTOP_UPDATER_FAIL",n[n._DEPRECATED_DESKTOP_DEEPLINK_ACTIVATION=1000100]="_DEPRECATED_DESKTOP_DEEPLINK_ACTIVATION",n[n._DEPRECATED_DESKTOP_TILE_ACTIVITY=1000101]="_DEPRECATED_DESKTOP_TILE_ACTIVITY",n[n._DEPRECATED_DESKTOP_TRACEROUTE=1000110]="_DEPRECATED_DESKTOP_TRACEROUTE",n[n.DESKTOP_API_TEST_ERROR=1000111]="DESKTOP_API_TEST_ERROR",n[n.DESKTOP_API_TEST_OFFLINE=1000112]="DESKTOP_API_TEST_OFFLINE",n[n.DESKTOP_NAVIGATOR_CONNECTION=1000113]="DESKTOP_NAVIGATOR_CONNECTION",n[n.DESKTOP_NAVIGATOR_ONLINE_BOGUS=1000114]="DESKTOP_NAVIGATOR_ONLINE_BOGUS",n[n.DESKTOP_PROXY_INFO=1000115]="DESKTOP_PROXY_INFO",n[n._DEPRECATED_DESKTOP_LANGUAGE_DETECTED=1000150]="_DEPRECATED_DESKTOP_LANGUAGE_DETECTED",n[n._DEPRECATED_DESKTOP_DICT_UNSUPPORTED=1000151]="_DEPRECATED_DESKTOP_DICT_UNSUPPORTED",n[n._DEPRECATED_DESKTOP_DICT_INVALID_HASH=1000152]="_DEPRECATED_DESKTOP_DICT_INVALID_HASH",n[n._DEPRECATED_DESKTOP_DICT_DOWNLOAD_FAIL=1000153]="_DEPRECATED_DESKTOP_DICT_DOWNLOAD_FAIL",n[n._DEPRECATED_DESKTOP_SPELLCHECK_FORCE_LANGUAGE=1000154]="_DEPRECATED_DESKTOP_SPELLCHECK_FORCE_LANGUAGE",n[n._DEPRECATED_DESKTOP_SPELLCHECK_AUTO_LANGUAGE=1000155]="_DEPRECATED_DESKTOP_SPELLCHECK_AUTO_LANGUAGE",n[n._DEPRECATED_DESKTOP_SPELLCHECK_UNLOAD_DICT=1000156]="_DEPRECATED_DESKTOP_SPELLCHECK_UNLOAD_DICT",n[n._DEPRECATED_DESKTOP_SPELLCHECK_SWITCH_FAIL=1000157]="_DEPRECATED_DESKTOP_SPELLCHECK_SWITCH_FAIL",n[n.DESKTOP_CLIENT_RELOAD=1000200]="DESKTOP_CLIENT_RELOAD",n[n.DESKTOP_CLIENT_RESET=1000201]="DESKTOP_CLIENT_RESET",n[n.DESKTOP_CLIENT_TIME_TO_USABLE=1000202]="DESKTOP_CLIENT_TIME_TO_USABLE",n[n.DESKTOP_KEYCHAIN_DENIED=1000203]="DESKTOP_KEYCHAIN_DENIED",n[n.DESKTOP_CLIENT_ZOOM_LEVEL=1000300]="DESKTOP_CLIENT_ZOOM_LEVEL",n[n.DESKTOP_CLIENT_ACCESSIBILITY_SUPPORT=1000301]="DESKTOP_CLIENT_ACCESSIBILITY_SUPPORT",n[n.DESKTOP_CLIENT_MENU_TRIGGER=1000302]="DESKTOP_CLIENT_MENU_TRIGGER",n[n.DESKTOP_CLIENT_THEME_SHOULD_USE_HIGH_CONTRAST_COLORS=1000303]="DESKTOP_CLIENT_THEME_SHOULD_USE_HIGH_CONTRAST_COLORS",n[n._DEPRECATED_DESKTOP_CLIENT_MAGIC_TOKEN_MARK_CLICK=1000400]="_DEPRECATED_DESKTOP_CLIENT_MAGIC_TOKEN_MARK_CLICK",n[n.DESKTOP_EA_TEAMID=1000500]="DESKTOP_EA_TEAMID",n[n.DESKTOP_INTERFACE_INVALID_PARAM=1000600]="DESKTOP_INTERFACE_INVALID_PARAM",n[n.DESKTOP_OPEN_EXTERNAL_URL=1000700]="DESKTOP_OPEN_EXTERNAL_URL",n[n.DESKTOP_OPEN_DOWNLOADED_FILE=1000701]="DESKTOP_OPEN_DOWNLOADED_FILE",n[n.DESKTOP_UNRESPONSIVE_DIALOG_SHOWN=1000800]="DESKTOP_UNRESPONSIVE_DIALOG_SHOWN",n[n.DESKTOP_UNRESPONSIVE_DIALOG_CLOSED=1000801]="DESKTOP_UNRESPONSIVE_DIALOG_CLOSED",n[n.DESKTOP_EXTERNAL_CONFIG=1000900]="DESKTOP_EXTERNAL_CONFIG",n))(mi||{}),br=(n=>(n[n.WINRT_NODERT=0]="WINRT_NODERT",n[n.WINRT_ELECTRON=1]="WINRT_ELECTRON",n[n.HTML=2]="HTML",n[n.HWND_ELECTRON=3]="HWND_ELECTRON",n[n.MACOS_ELECTRON=4]="MACOS_ELECTRON",n[n.LINUX_ELECTRON=5]="LINUX_ELECTRON",n[n.HTML2018=6]="HTML2018",n))(br||{}),ld=(n=>(n[n.LINK=0]="LINK",n[n.APP_MENU_HELP_CENTER=1]="APP_MENU_HELP_CENTER",n[n.APP_MENU_WORKSPACE_LOGIN=2]="APP_MENU_WORKSPACE_LOGIN",n[n.SIGN_OUT_EPIC=3]="SIGN_OUT_EPIC",n[n.RELEASE_NOTES_EPIC=4]="RELEASE_NOTES_EPIC",n[n.URL_SCHEME_DIALOG_EPIC=5]="URL_SCHEME_DIALOG_EPIC",n[n.MAGIC_LOGIN_REDIRECT=6]="MAGIC_LOGIN_REDIRECT",n[n.CONTEXT_MENU_SEARCH_GOOGLE=7]="CONTEXT_MENU_SEARCH_GOOGLE",n[n.REPORT_ISSUE_EPIC=8]="REPORT_ISSUE_EPIC",n))(ld||{}),fd=(n=>(n[n.CANCELLED=0]="CANCELLED",n[n.WAIT=1]="WAIT",n[n.RELOAD=2]="RELOAD",n[n.CLEAR_CACHE_RELOAD=3]="CLEAR_CACHE_RELOAD",n[n.DISMISSED=4]="DISMISSED",n))(fd||{});function Kt({id:n},e){const o=br.HTML2018;window.desktop.diagnostics.track(e,{notificationId:n,notificationSystem:o})}var Bi=tn(8730),Qe={};Qe.styleTagTransform=Y(),Qe.setAttributes=J(),Qe.insert=F().bind(null,"head"),Qe.domAPI=b(),Qe.insertStyleElement=R();var cp=l()(Bi.Z,Qe);const rp=Bi.Z&&Bi.Z.locals?Bi.Z.locals:void 0;var Ci=tn(9638),no={};no.styleTagTransform=Y(),no.setAttributes=J(),no.insert=F().bind(null,"head"),no.domAPI=b(),no.insertStyleElement=R();var ap=l()(Ci.Z,no);const Ap=Ci.Z&&Ci.Z.locals?Ci.Z.locals:void 0;var yi=tn(464);/*! *****************************************************************************
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
***************************************************************************** */var Wt=function(n,e){return Wt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(o[t]=i[t])},Wt(n,e)};function eo(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Wt(n,e);function o(){this.constructor=n}n.prototype=e===null?Object.create(e):(o.prototype=e.prototype,new o)}var mr=function(){return mr=Object.assign||function(e){for(var o,i=1,t=arguments.length;i<t;i++){o=arguments[i];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c])}return e},mr.apply(this,arguments)};function lp(n,e){var o={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(o[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,i=Object.getOwnPropertySymbols(n);t<i.length;t++)e.indexOf(i[t])<0&&Object.prototype.propertyIsEnumerable.call(n,i[t])&&(o[i[t]]=n[i[t]]);return o}function fp(n,e,o,i){var t=arguments.length,c=t<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(n,e,o,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(c=(t<3?r(c):t>3?r(e,o,c):r(e,o))||c);return t>3&&c&&Object.defineProperty(e,o,c),c}function sp(n,e){return function(o,i){e(o,i,n)}}function Ep(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function sd(n,e,o,i){function t(c){return c instanceof o?c:new o(function(r){r(c)})}return new(o||(o=Promise))(function(c,r){function a(u){try{f(i.next(u))}catch(B){r(B)}}function A(u){try{f(i.throw(u))}catch(B){r(B)}}function f(u){u.done?c(u.value):t(u.value).then(a,A)}f((i=i.apply(n,e||[])).next())})}function Br(n,e){var o={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},i,t,c,r;return r={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(r[Symbol.iterator]=function(){return this}),r;function a(f){return function(u){return A([f,u])}}function A(f){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,t&&(c=f[0]&2?t.return:f[0]?t.throw||((c=t.return)&&c.call(t),0):t.next)&&!(c=c.call(t,f[1])).done)return c;switch(t=0,c&&(f=[f[0]&2,c.value]),f[0]){case 0:case 1:c=f;break;case 4:return o.label++,{value:f[1],done:!1};case 5:o.label++,t=f[1],f=[0];continue;case 7:f=o.ops.pop(),o.trys.pop();continue;default:if(c=o.trys,!(c=c.length>0&&c[c.length-1])&&(f[0]===6||f[0]===2)){o=0;continue}if(f[0]===3&&(!c||f[1]>c[0]&&f[1]<c[3])){o.label=f[1];break}if(f[0]===6&&o.label<c[1]){o.label=c[1],c=f;break}if(c&&o.label<c[2]){o.label=c[2],o.ops.push(f);break}c[2]&&o.ops.pop(),o.trys.pop();continue}f=e.call(n,o)}catch(u){f=[6,u],t=0}finally{i=c=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}var Cr=Object.create?function(n,e,o,i){i===void 0&&(i=o),Object.defineProperty(n,i,{enumerable:!0,get:function(){return e[o]}})}:function(n,e,o,i){i===void 0&&(i=o),n[i]=e[o]};function up(n,e){for(var o in n)o!=="default"&&!Object.prototype.hasOwnProperty.call(e,o)&&Cr(e,n,o)}function Ro(n){var e=typeof Symbol=="function"&&Symbol.iterator,o=e&&n[e],i=0;if(o)return o.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function _e(n,e){var o=typeof Symbol=="function"&&n[Symbol.iterator];if(!o)return n;var i=o.call(n),t,c=[],r;try{for(;(e===void 0||e-- >0)&&!(t=i.next()).done;)c.push(t.value)}catch(a){r={error:a}}finally{try{t&&!t.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}return c}function dp(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(_e(arguments[e]));return n}function hp(){for(var n=0,e=0,o=arguments.length;e<o;e++)n+=arguments[e].length;for(var i=Array(n),t=0,e=0;e<o;e++)for(var c=arguments[e],r=0,a=c.length;r<a;r++,t++)i[t]=c[r];return i}function oo(n,e){for(var o=0,i=e.length,t=n.length;o<i;o++,t++)n[t]=e[o];return n}function Pe(n){return this instanceof Pe?(this.v=n,this):new Pe(n)}function Ed(n,e,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=o.apply(n,e||[]),t,c=[];return t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t;function r(T){i[T]&&(t[T]=function(K){return new Promise(function(j,q){c.push([T,K,j,q])>1||a(T,K)})})}function a(T,K){try{A(i[T](K))}catch(j){B(c[0][3],j)}}function A(T){T.value instanceof Pe?Promise.resolve(T.value.v).then(f,u):B(c[0][2],T)}function f(T){a("next",T)}function u(T){a("throw",T)}function B(T,K){T(K),c.shift(),c.length&&a(c[0][0],c[0][1])}}function pp(n){var e,o;return e={},i("next"),i("throw",function(t){throw t}),i("return"),e[Symbol.iterator]=function(){return this},e;function i(t,c){e[t]=n[t]?function(r){return(o=!o)?{value:Pe(n[t](r)),done:t==="return"}:c?c(r):r}:c}}function ud(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],o;return e?e.call(n):(n=typeof Ro=="function"?Ro(n):n[Symbol.iterator](),o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o);function i(c){o[c]=n[c]&&function(r){return new Promise(function(a,A){r=n[c](r),t(a,A,r.done,r.value)})}}function t(c,r,a,A){Promise.resolve(A).then(function(f){c({value:f,done:a})},r)}}function gp(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var dd=Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e};function _p(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var o in n)o!=="default"&&Object.prototype.hasOwnProperty.call(n,o)&&Cr(e,n,o);return dd(e,n),e}function bp(n){return n&&n.__esModule?n:{default:n}}function mp(n,e){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}function Bp(n,e,o){if(!e.has(n))throw new TypeError("attempted to set private field on non-instance");return e.set(n,o),o}var jt=function(n){return n&&typeof n.length=="number"&&typeof n!="function"};function Bn(n){return typeof n=="function"}function yr(n){return Bn(n==null?void 0:n.then)}function hd(n){var e=function(i){Error.call(i),i.stack=new Error().stack},o=n(e);return o.prototype=Object.create(Error.prototype),o.prototype.constructor=o,o}var Gt=hd(function(n){return function(o){n(this),this.message=o?o.length+` errors occurred during unsubscription:
`+o.map(function(i,t){return t+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=o}});function zt(n,e){if(n){var o=n.indexOf(e);0<=o&&n.splice(o,1)}}var vi=function(){function n(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._teardowns=null}return n.prototype.unsubscribe=function(){var e,o,i,t,c;if(!this.closed){this.closed=!0;var r=this._parentage;if(r)if(this._parentage=null,Array.isArray(r))try{for(var a=Ro(r),A=a.next();!A.done;A=a.next()){var f=A.value;f.remove(this)}}catch(q){e={error:q}}finally{try{A&&!A.done&&(o=a.return)&&o.call(a)}finally{if(e)throw e.error}}else r.remove(this);var u=this.initialTeardown;if(Bn(u))try{u()}catch(q){c=q instanceof Gt?q.errors:[q]}var B=this._teardowns;if(B){this._teardowns=null;try{for(var T=Ro(B),K=T.next();!K.done;K=T.next()){var j=K.value;try{Ir(j)}catch(q){c=c!=null?c:[],q instanceof Gt?c=oo(oo([],_e(c)),_e(q.errors)):c.push(q)}}}catch(q){i={error:q}}finally{try{K&&!K.done&&(t=T.return)&&t.call(T)}finally{if(i)throw i.error}}}if(c)throw new Gt(c)}},n.prototype.add=function(e){var o;if(e&&e!==this)if(this.closed)Ir(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._teardowns=(o=this._teardowns)!==null&&o!==void 0?o:[]).push(e)}},n.prototype._hasParent=function(e){var o=this._parentage;return o===e||Array.isArray(o)&&o.includes(e)},n.prototype._addParent=function(e){var o=this._parentage;this._parentage=Array.isArray(o)?(o.push(e),o):o?[o,e]:e},n.prototype._removeParent=function(e){var o=this._parentage;o===e?this._parentage=null:Array.isArray(o)&&zt(o,e)},n.prototype.remove=function(e){var o=this._teardowns;o&&zt(o,e),e instanceof n&&e._removeParent(this)},n.EMPTY=function(){var e=new n;return e.closed=!0,e}(),n}(),Cp=vi.EMPTY;function vr(n){return n instanceof vi||n&&"closed"in n&&Bn(n.remove)&&Bn(n.add)&&Bn(n.unsubscribe)}function Ir(n){Bn(n)?n():n.unsubscribe()}var Re={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Ii={setTimeout:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var o=Ii.delegate;return((o==null?void 0:o.setTimeout)||setTimeout).apply(void 0,oo([],_e(n)))},clearTimeout:function(n){var e=Ii.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(n)},delegate:void 0};function wr(n){Ii.setTimeout(function(){var e=Re.onUnhandledError;if(e)e(n);else throw n})}function ko(){}var pd=function(){return qt("C",void 0,void 0)}();function gd(n){return qt("E",void 0,n)}function _d(n){return qt("N",n,void 0)}function qt(n,e,o){return{kind:n,value:e,error:o}}var ke=null;function bd(n){if(Re.useDeprecatedSynchronousErrorHandling){var e=!ke;if(e&&(ke={errorThrown:!1,error:null}),n(),e){var o=ke,i=o.errorThrown,t=o.error;if(ke=null,i)throw t}}else n()}function md(n){Re.useDeprecatedSynchronousErrorHandling&&ke&&(ke.errorThrown=!0,ke.error=n)}var $t=function(n){eo(e,n);function e(o){var i=n.call(this)||this;return i.isStopped=!1,o?(i.destination=o,vr(o)&&o.add(i)):i.destination=Bd,i}return e.create=function(o,i,t){return new Tr(o,i,t)},e.prototype.next=function(o){this.isStopped?Vt(_d(o),this):this._next(o)},e.prototype.error=function(o){this.isStopped?Vt(gd(o),this):(this.isStopped=!0,this._error(o))},e.prototype.complete=function(){this.isStopped?Vt(pd,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(o){this.destination.next(o)},e.prototype._error=function(o){try{this.destination.error(o)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(vi),Tr=function(n){eo(e,n);function e(o,i,t){var c=n.call(this)||this,r;if(Bn(o))r=o;else if(o){r=o.next,i=o.error,t=o.complete;var a;c&&Re.useDeprecatedNextContext?(a=Object.create(o),a.unsubscribe=function(){return c.unsubscribe()}):a=o,r=r==null?void 0:r.bind(a),i=i==null?void 0:i.bind(a),t=t==null?void 0:t.bind(a)}return c.destination={next:r?Yt(r,c):ko,error:Yt(i!=null?i:Sr,c),complete:t?Yt(t,c):ko},c}return e}($t);function Yt(n,e){return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];try{n.apply(void 0,oo([],_e(o)))}catch(t){Re.useDeprecatedSynchronousErrorHandling?md(t):wr(t)}}}function Sr(n){throw n}function Vt(n,e){var o=Re.onStoppedNotification;o&&Ii.setTimeout(function(){return o(n,e)})}var Bd={closed:!0,next:ko,error:Sr,complete:ko},Zt=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Fr(n){return n}function yp(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Jr(n)}function Jr(n){return n.length===0?Fr:n.length===1?n[0]:function(o){return n.reduce(function(i,t){return t(i)},o)}}var Zn=function(){function n(e){e&&(this._subscribe=e)}return n.prototype.lift=function(e){var o=new n;return o.source=this,o.operator=e,o},n.prototype.subscribe=function(e,o,i){var t=this,c=yd(e)?e:new Tr(e,o,i);return bd(function(){var r=t,a=r.operator,A=r.source;c.add(a?a.call(c,A):A?t._subscribe(c):t._trySubscribe(c))}),c},n.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(o){e.error(o)}},n.prototype.forEach=function(e,o){var i=this;return o=Or(o),new o(function(t,c){var r;r=i.subscribe(function(a){try{e(a)}catch(A){c(A),r==null||r.unsubscribe()}},c,t)})},n.prototype._subscribe=function(e){var o;return(o=this.source)===null||o===void 0?void 0:o.subscribe(e)},n.prototype[Zt]=function(){return this},n.prototype.pipe=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return Jr(e)(this)},n.prototype.toPromise=function(e){var o=this;return e=Or(e),new e(function(i,t){var c;o.subscribe(function(r){return c=r},function(r){return t(r)},function(){return i(c)})})},n.create=function(e){return new n(e)},n}();function Or(n){var e;return(e=n!=null?n:Re.Promise)!==null&&e!==void 0?e:Promise}function Cd(n){return n&&Bn(n.next)&&Bn(n.error)&&Bn(n.complete)}function yd(n){return n&&n instanceof $t||Cd(n)&&vr(n)}function Dr(n){return Bn(n[Zt])}function xr(n){return Symbol.asyncIterator&&Bn(n==null?void 0:n[Symbol.asyncIterator])}function Pr(n){return new TypeError("You provided "+(n!==null&&typeof n=="object"?"an invalid object":"'"+n+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function vd(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Rr=vd();function kr(n){return Bn(n==null?void 0:n[Rr])}function Nr(n){return Ed(this,arguments,function(){var o,i,t,c;return Br(this,function(r){switch(r.label){case 0:o=n.getReader(),r.label=1;case 1:r.trys.push([1,,9,10]),r.label=2;case 2:return[4,Pe(o.read())];case 3:return i=r.sent(),t=i.value,c=i.done,c?[4,Pe(void 0)]:[3,5];case 4:return[2,r.sent()];case 5:return[4,Pe(t)];case 6:return[4,r.sent()];case 7:return r.sent(),[3,2];case 8:return[3,10];case 9:return o.releaseLock(),[7];case 10:return[2]}})})}function Lr(n){return Bn(n==null?void 0:n.getReader)}function be(n){if(n instanceof Zn)return n;if(n!=null){if(Dr(n))return Id(n);if(jt(n))return wd(n);if(yr(n))return Td(n);if(xr(n))return Mr(n);if(kr(n))return Sd(n);if(Lr(n))return Fd(n)}throw Pr(n)}function Id(n){return new Zn(function(e){var o=n[Zt]();if(Bn(o.subscribe))return o.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function wd(n){return new Zn(function(e){for(var o=0;o<n.length&&!e.closed;o++)e.next(n[o]);e.complete()})}function Td(n){return new Zn(function(e){n.then(function(o){e.closed||(e.next(o),e.complete())},function(o){return e.error(o)}).then(null,wr)})}function Sd(n){return new Zn(function(e){var o,i;try{for(var t=Ro(n),c=t.next();!c.done;c=t.next()){var r=c.value;if(e.next(r),e.closed)return}}catch(a){o={error:a}}finally{try{c&&!c.done&&(i=t.return)&&i.call(t)}finally{if(o)throw o.error}}e.complete()})}function Mr(n){return new Zn(function(e){Jd(n,e).catch(function(o){return e.error(o)})})}function Fd(n){return Mr(Nr(n))}function Jd(n,e){var o,i,t,c;return sd(this,void 0,void 0,function(){var r,a;return Br(this,function(A){switch(A.label){case 0:A.trys.push([0,5,6,11]),o=ud(n),A.label=1;case 1:return[4,o.next()];case 2:if(i=A.sent(),!!i.done)return[3,4];if(r=i.value,e.next(r),e.closed)return[2];A.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=A.sent(),t={error:a},[3,11];case 6:return A.trys.push([6,,9,10]),i&&!i.done&&(c=o.return)?[4,c.call(o)]:[3,8];case 7:A.sent(),A.label=8;case 8:return[3,10];case 9:if(t)throw t.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function Od(n){return Bn(n==null?void 0:n.lift)}function io(n){return function(e){if(Od(e))return e.lift(function(o){try{return n(o,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}var to=function(n){eo(e,n);function e(o,i,t,c,r){var a=n.call(this,o)||this;return a.onFinalize=r,a._next=i?function(A){try{i(A)}catch(f){o.error(f)}}:n.prototype._next,a._error=c?function(A){try{c(A)}catch(f){o.error(f)}finally{this.unsubscribe()}}:n.prototype._error,a._complete=t?function(){try{t()}catch(A){o.error(A)}finally{this.unsubscribe()}}:n.prototype._complete,a}return e.prototype.unsubscribe=function(){var o,i=this.closed;n.prototype.unsubscribe.call(this),!i&&((o=this.onFinalize)===null||o===void 0||o.call(this))},e}($t);function Ur(n,e){return io(function(o,i){var t=0;o.subscribe(new to(i,function(c){i.next(n.call(e,c,t++))}))})}function me(n,e,o,i,t){i===void 0&&(i=0),t===void 0&&(t=!1);var c=e.schedule(function(){o(),t?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(c),!t)return c}function Dd(n,e,o,i,t,c,r,a){var A=[],f=0,u=0,B=!1,T=function(){B&&!A.length&&!f&&e.complete()},K=function(q){return f<i?j(q):A.push(q)},j=function(q){c&&e.next(q),f++;var un=!1;be(o(q,u++)).subscribe(new to(e,function(an){t==null||t(an),c?K(an):e.next(an)},function(){un=!0},void 0,function(){if(un)try{f--;for(var an=function(){var bn=A.shift();r?me(e,r,function(){return j(bn)}):j(bn)};A.length&&f<i;)an();T()}catch(bn){e.error(bn)}}))};return n.subscribe(new to(e,K,function(){B=!0,T()})),function(){a==null||a()}}function wi(n,e,o){return o===void 0&&(o=1/0),Bn(e)?wi(function(i,t){return Ur(function(c,r){return e(i,c,t,r)})(be(n(i,t)))},o):(typeof e=="number"&&(o=e),io(function(i,t){return Dd(i,t,n,o)}))}var xd=Array.isArray;function Pd(n,e){return xd(e)?n.apply(void 0,oo([],_e(e))):n(e)}function Rd(n){return Ur(function(e){return Pd(n,e)})}var kd=["addListener","removeListener"],Nd=["addEventListener","removeEventListener"],Ld=["on","off"];function Ti(n,e,o,i){if(Bn(o)&&(i=o,o=void 0),i)return Ti(n,e,o).pipe(Rd(i));var t=_e(Hd(n)?Nd.map(function(a){return function(A){return n[a](e,A,o)}}):Md(n)?kd.map(Hr(n,e)):Ud(n)?Ld.map(Hr(n,e)):[],2),c=t[0],r=t[1];if(!c&&jt(n))return wi(function(a){return Ti(a,e,o)})(be(n));if(!c)throw new TypeError("Invalid event target");return new Zn(function(a){var A=function(){for(var f=[],u=0;u<arguments.length;u++)f[u]=arguments[u];return a.next(1<f.length?f:f[0])};return c(A),function(){return r(A)}})}function Hr(n,e){return function(o){return function(i){return n[o](e,i)}}}function Md(n){return Bn(n.addListener)&&Bn(n.removeListener)}function Ud(n){return Bn(n.on)&&Bn(n.off)}function Hd(n){return Bn(n.addEventListener)&&Bn(n.removeEventListener)}function Kd(n){return n===void 0&&(n=1/0),wi(Fr,n)}var Xt=new Zn(function(n){return n.complete()});function vp(n){return n?Wd(n):Xt}function Wd(n){return new Observable(function(e){return n.schedule(function(){return e.complete()})})}function Kr(n){return n&&Bn(n.schedule)}function Qt(n){return n[n.length-1]}function Ip(n){return isFunction(Qt(n))?n.pop():void 0}function jd(n){return Kr(Qt(n))?n.pop():void 0}function Gd(n,e){return typeof Qt(n)=="number"?n.pop():e}function Wr(n,e){return e===void 0&&(e=0),io(function(o,i){o.subscribe(new to(i,function(t){return me(i,n,function(){return i.next(t)},e)},function(){return me(i,n,function(){return i.complete()},e)},function(t){return me(i,n,function(){return i.error(t)},e)}))})}function jr(n,e){return e===void 0&&(e=0),io(function(o,i){i.add(n.schedule(function(){return o.subscribe(i)},e))})}function zd(n,e){return be(n).pipe(jr(e),Wr(e))}function qd(n,e){return be(n).pipe(jr(e),Wr(e))}function $d(n,e){return new Zn(function(o){var i=0;return e.schedule(function(){i===n.length?o.complete():(o.next(n[i++]),o.closed||this.schedule())})})}function Yd(n,e){return new Zn(function(o){var i;return me(o,e,function(){i=n[Rr](),me(o,e,function(){var t,c,r;try{t=i.next(),c=t.value,r=t.done}catch(a){o.error(a);return}r?o.complete():o.next(c)},0,!0)}),function(){return Bn(i==null?void 0:i.return)&&i.return()}})}function Gr(n,e){if(!n)throw new Error("Iterable cannot be null");return new Zn(function(o){me(o,e,function(){var i=n[Symbol.asyncIterator]();me(o,e,function(){i.next().then(function(t){t.done?o.complete():o.next(t.value)})},0,!0)})})}function Vd(n,e){return Gr(Nr(n),e)}function Zd(n,e){if(n!=null){if(Dr(n))return zd(n,e);if(jt(n))return $d(n,e);if(yr(n))return qd(n,e);if(xr(n))return Gr(n,e);if(kr(n))return Yd(n,e);if(Lr(n))return Vd(n,e)}throw Pr(n)}function Xd(n,e){return e?Zd(n,e):be(n)}function Qd(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var o=jd(n),i=Gd(n,1/0),t=n;return t.length?t.length===1?be(t[0]):Kd(i)(Xd(t,o)):Xt}var nh=function(n){eo(e,n);function e(o,i){return n.call(this)||this}return e.prototype.schedule=function(o,i){return i===void 0&&(i=0),this},e}(vi),Si={setInterval:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var o=Si.delegate;return((o==null?void 0:o.setInterval)||setInterval).apply(void 0,oo([],_e(n)))},clearInterval:function(n){var e=Si.delegate;return((e==null?void 0:e.clearInterval)||clearInterval)(n)},delegate:void 0},eh=function(n){eo(e,n);function e(o,i){var t=n.call(this,o,i)||this;return t.scheduler=o,t.work=i,t.pending=!1,t}return e.prototype.schedule=function(o,i){if(i===void 0&&(i=0),this.closed)return this;this.state=o;var t=this.id,c=this.scheduler;return t!=null&&(this.id=this.recycleAsyncId(c,t,i)),this.pending=!0,this.delay=i,this.id=this.id||this.requestAsyncId(c,this.id,i),this},e.prototype.requestAsyncId=function(o,i,t){return t===void 0&&(t=0),Si.setInterval(o.flush.bind(o,this),t)},e.prototype.recycleAsyncId=function(o,i,t){if(t===void 0&&(t=0),t!=null&&this.delay===t&&this.pending===!1)return i;Si.clearInterval(i)},e.prototype.execute=function(o,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var t=this._execute(o,i);if(t)return t;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(o,i){var t=!1,c;try{this.work(o)}catch(r){t=!0,c=r||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),c},e.prototype.unsubscribe=function(){if(!this.closed){var o=this,i=o.id,t=o.scheduler,c=t.actions;this.work=this.state=this.scheduler=null,this.pending=!1,zt(c,this),i!=null&&(this.id=this.recycleAsyncId(t,i,null)),this.delay=null,n.prototype.unsubscribe.call(this)}},e}(nh),zr={now:function(){return(zr.delegate||Date).now()},delegate:void 0},qr=function(){function n(e,o){o===void 0&&(o=n.now),this.schedulerActionCtor=e,this.now=o}return n.prototype.schedule=function(e,o,i){return o===void 0&&(o=0),new this.schedulerActionCtor(this,e).schedule(i,o)},n.now=zr.now,n}(),oh=function(n){eo(e,n);function e(o,i){i===void 0&&(i=qr.now);var t=n.call(this,o,i)||this;return t.actions=[],t._active=!1,t._scheduled=void 0,t}return e.prototype.flush=function(o){var i=this.actions;if(this._active){i.push(o);return}var t;this._active=!0;do if(t=o.execute(o.state,o.delay))break;while(o=i.shift());if(this._active=!1,t){for(;o=i.shift();)o.unsubscribe();throw t}},e}(qr),ih=new oh(eh),th=ih;function ch(n){return n instanceof Date&&!isNaN(n)}function $r(n,e,o){n===void 0&&(n=0),o===void 0&&(o=th);var i=-1;return e!=null&&(Kr(e)?o=e:i=e),new Zn(function(t){var c=ch(n)?+n-o.now():n;c<0&&(c=0);var r=0;return o.schedule(function(){t.closed||(t.next(r++),0<=i?this.schedule(void 0,i):t.complete())},c)})}function Yr(n){return io(function(e,o){be(n).subscribe(new to(o,function(){return o.complete()},ko)),!o.closed&&e.subscribe(o)})}function rh(n){return n<=0?function(){return Xt}:io(function(e,o){var i=0;e.subscribe(new to(o,function(t){++i<=n&&(o.next(t),n<=i&&o.complete())}))})}var Fi=tn(7392),co={};co.styleTagTransform=Y(),co.setAttributes=J(),co.insert=F().bind(null,"head"),co.domAPI=b(),co.insertStyleElement=R();var wp=l()(Fi.Z,co);const Tp=Fi.Z&&Fi.Z.locals?Fi.Z.locals:void 0;var nc=tn(1174).h,ah=(n=>(n.PENDING="pending",n.LOADED="loaded",n.LOADING="loading",n.ERROR="error",n))(ah||{});const Ah=({imageUri:n})=>{const[e,o]=(0,te.eJ)("pending");return(0,te.d4)(()=>{async function t(){if(!n){o("error"),H.error("fetchIconImage: avatar image url is not available");return}if(e!=="pending")return;const c=()=>new Promise((r,a)=>{const A=new Image;A.onerror=f=>a(f),A.onload=()=>r(),A.src=n});try{o("loading"),await c(),o("loaded")}catch(r){H.error("fetchIconImage: failed to load avatar image",{error:r}),o("error")}}t()},[]),nc("span",null,e==="loaded"||e==="loading"?nc("img",{className:"Avatar",src:n,draggable:!1}):nc("div",{className:"Avatar",style:{width:"36px",height:"36px",backgroundColor:"var(--sk_foreground_low)"}}))};var Ne=tn(1174).h;const lh=()=>{const n=new Date;let e;try{e=n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch(o){H.warn("getTimestamp: Failed to get timestamp via toLocaleTimeString, try fallback",{error:o});try{e=new Intl.DateTimeFormat("default",{hour:"numeric",minute:"numeric"}).format(n),H.info("getTimestamp: Current locale info in system",{resolvedOptions:Intl.DateTimeFormat().resolvedOptions()})}catch(i){H.error("getTimestamp: Failed to get timestamp, skipping render timestamp",{error:i})}}return e},fh=n=>{const e=xo(j=>j.settings),{notificationTimeout:o,notificationAfterHoverTimeout:i}=e;let t=null;xt(()=>{if(!t)return;const j=Number.isSafeInteger(o)?o:6e3,q=Number.isSafeInteger(i)?i:2e3;if(w(e)){H.info("NotificationMessage: disabling dismiss timeout");return}const un=Ti(t,"mouseleave"),an=Ti(t,"mouseover"),bn=Qd($r(j).pipe(Yr(an)),un.pipe(wi(()=>$r(q).pipe(Yr(an))))).pipe(rh(1)).subscribe(()=>window.desktop.notifications.removeNotification(n.notification.id));return bn.unsubscribe.bind(bn)},[t,o,i,n.notification]);const c=()=>{const{id:j,teamId:q,msg:un,thread_ts:an,channel:bn,trace_id:An}=n.notification;window.desktop.notifications.clickNotification({notificationId:j,channel:bn,teamId:q,messageId:un,traceId:An,threadTimestamp:an}),Kt(n.notification,mi.DESKTOP_NOTIFICATION_CLICK)},r=(j,q="",un)=>{const an=j||q,bn=an.startsWith(`${un}: `)?an.replace(`${un}: `,""):an,An=yi.sanitize(bn,{USE_PROFILES:{html:!0}});return Array.isArray(yi.removed)&&yi.removed.length>0&&H.warn("getContent removed",{removed:yi.removed}),An},{content:a,title:A,avatarImage:f,imageUri:u}=n.notification,{authorName:B}=$E(n.notification),T=r(a,A,B),K=lh();return Ne("div",{"data-testid":"notification-message",className:"Message",onClick:c,ref:j=>t=j},Ne(Ah,{imageUri:f}),Ne("div",{className:"Content"},Ne("h5",null,B," ",K?Ne("span",{className:"Timestamp"},K):null),Ne("p",{dangerouslySetInnerHTML:{__html:T}}),u?Ne("img",{src:u}):null))};var le=tn(1174).h;const sh=n=>{const{notifications:e,showClose:o,name:i,id:t}=n,c=()=>{var f;const a=(f=(e!=null?e:[])[0])==null?void 0:f.teamId;return a||H.warn("renderOpenChannel: notification does not include workspaceId to open channel",{notifications:e}),le("a",{href:"#",className:"OpenChannel",onClick:()=>window.desktop.notifications.handleDeepLink({url:`slack://channel?team=${a}&id=${t}`})},le("h4",null,i))},r=()=>le("a",{href:"#",onClick:()=>e.forEach(A=>{window.desktop.notifications.removeNotification(A.id),Kt(A,mi.DESKTOP_NOTIFICATION_DISMISSED)}),className:"Close"},le("i",{className:"c-icon c-icon--times"}));return le("div",{className:"Channel"},le("header",null,i?c():le("a",{className:"OpenChannel"}),o?r():null),le("div",{className:"Messages"},e.map(a=>le(fh,{key:a.id,notification:a}))))};var fe=tn(1174).h;const Eh=(n,e)=>{const{webapp:o,workspaces:i}=e,t=vu(o,n),c=t?t.theme:Po,{titlebarBackground:r,titlebarTextColor:a}=c;(!r||!a)&&H.warn("buildTeamObject: team object missing properties",{id:n,theme:t.theme});const A=i[n];return A?{theme:{menu_bg:r!=null?r:Po.titlebarBackground,text_color:a!=null?a:Po.titlebarTextColor},team_name:A.name}:null},uh=n=>{const e=Object.keys(n),o=e.length>1;return e.map(i=>{const t=n[i]&&n[i].length>0&&qE(n[i][0]).channelName||"";return fe(sh,{showClose:o,key:i,name:t,id:i,notifications:n[i]})})},dh=n=>{const e=xo(f=>f),{id:o,channels:i}=n,t=Eh(o,e),c=()=>{const f=i?Object.keys(i):[],u={team:o};f.length>0?u.id=f[0]:H.warn("openTeam: Notification group contains no notification. Unable to navigate to channel.");const B=Ad("channel",u);window.desktop.notifications.handleDeepLink({url:B}),w(e.settings)&&r()},r=()=>{for(const f of Object.keys(i))for(const u of i[f])window.desktop.notifications.removeNotification(u.id),Kt(u,mi.DESKTOP_NOTIFICATION_DISMISSED)};if(!t)return null;const a=t&&t.theme.menu_bg?{color:t.theme.text_color}:{},A=t&&t.theme.menu_bg?{background:`linear-gradient(to bottom, ${t.theme.menu_bg} 40px, #fff 2%)`}:{};return fe("div",{className:"Team",style:A},fe("header",{style:a},fe("a",{href:"#","data-testid":"open-team",className:"OpenTeam",onClick:c},fe("i",{className:"c-icon c-icon--vogue c-icon--inline"}),fe("h3",null,t.team_name)),fe("a",{href:"#","data-testid":"close-notification",className:"Close",onClick:r},fe("i",{className:"c-icon c-icon--times c-icon--inline"}))),fe("div",{className:"Channels"},uh(i)))};var ro=tn(1174).h;const{useResizeDetector:hh}=tn(1332),Ji=(n,e)=>n.id===e.id,Vr=()=>{const n=xo(An=>{const{notificationMaxItems:kn,notifyPosition:Mn,userTheme:Hn}=An.settings,Kn=Mn.corner.split("_")[0]==="top";return{notificationMaxItems:kn!==void 0?kn:3,isTop:Kn,scaleFactor:z(An.settings),userTheme:Hn}}),e=xo(An=>An.notifications.notifications),[o,i]=(0,te.eJ)([]),t=(0,te.sO)([]);(0,te.d4)(()=>{t.current=e});const[c,r]=(0,te.eJ)({x:0,y:0,show:!1}),a=(0,te.sO)(null),A=(0,te.I4)((An,kn)=>f(!0),[c]);hh({onResize:A,targetRef:a,skipOnMount:!0,handleWidth:!1});const f=(An=!1)=>{const kn=a.current;if(!kn)return;const Mn=kn.offsetLeft*n.scaleFactor,Hn=kn.offsetHeight*n.scaleFactor,Kn=o.length>0,Le=Mn!==c.x||Hn!==c.y;An&&Le&&Mn>0&&Hn>0?window.desktop.notifications.setNotificationsWindowShape({x:Mn,y:Hn,show:c.show}):An||(window.desktop.notifications.setNotificationsWindowShape({x:Mn,y:Hn,show:Kn}),r({x:Mn,y:Hn,show:Kn}))};xt(()=>f(),[o]),XE();const u=si(e,o,Ji),B=si(t.current,e,Ji),T=Math.max(0,o.length-B.length),K=si(e,o,Ji).splice(0,n.notificationMaxItems-T),j=oA(o,K),q=Bc(si(j,B,Ji));H.debug("NotificationHost: Calculating notification items to render",{currentNotificationItemsQueue:e.map(An=>An.id),prevNotificationItemsQueue:t.current.map(An=>An.id),currentOnscreenItems:o.map(An=>An.id),remainingItemsInQueue:u.map(An=>An.id),removedItems:B.map(An=>An.id),itemsToAddOnScreen:K.map(An=>An.id),updatedItemsWithDismissed:j.map(An=>An.id),itemsShouldOnScreen:q.map(An=>An.id)}),K.length>0||B.length>0?_t(q,o)||(H.debug("NotificationHost: render new onscreen notification items"),i(q)):H.debug("NotificationHost: re-render triggered but no changes in onscreen notification items");const un={flexDirection:n.isTop?"column":"column-reverse"},an=zE(o),bn=Object.entries(an).map(([An,kn])=>ro(mf,{id:An,timeout:400},ro(dh,{key:An,id:An,channels:kn})));return ro("span",{className:"Notifications2018"},ro("div",{className:`NotificationHost NotificationHost--${n.userTheme}`,style:un},ro(Tf,{id:"NotificationHost-list",className:"NotificationHost-list",nodeRef:a},ro("div",{ref:a,style:{width:"100%",height:"100%"}},bn))))};window.open=null,Ss(Vr,"span")})(),sandboxedRenderer=Ni})();

//# sourceMappingURL=notifications.bundle.js.map