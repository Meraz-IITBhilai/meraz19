import{S as ti,i as oi,s as li,C as Uo,w as ii,x as ai,y as ni,z as si,A as Kl,f as ri,t as hi,B as fi,_ as Zl,l,r,a as f,m as i,n,u as h,h as t,c as m,p as mi,b as s,H as o,E as ui}from"../../chunks/index-019a8a31.js";import{E as ci}from"../../chunks/Event-db49fb41.js";function pi(A){let b,_,E,k,d,v,I,ft,Oe,g,mt,Be,C,ut,Se,R,te,ct,pt,We,O,bt,De,B,dt,Me,S,wt,je,x,oe,vt,yt,le,_t,Et,ie,kt,Ne,W,xt,qe,D,It,ze,M,Tt,Fe,j,Lt,$e,p,ae,Rt,Pt,ne,Ht,At,se,gt,Ct,re,Ot,Bt,he,St,Wt,fe,Dt,Mt,me,jt,Nt,ue,qt,zt,ce,Ft,$t,pe,Jt,Je,N,Yt,Ye,q,Gt,Ge,z,Ut,Ue,F,Vt,Ve,$,Xt,Xe,y,be,Qt,Kt,de,Zt,eo,we,to,oo,ve,lo,Qe,J,io,Ke,Y,ao,Ze,G,no,et,u,ye,so,ro,_e,ho,fo,Ee,mo,uo,ke,co,po,xe,bo,wo,Ie,vo,yo,Te,_o,Eo,Le,ko,xo,Re,Io,To,Pe,Lo,Ro,He,Po,Ho,Ae,Ao,go,ge,Co,tt,U,Oo,ot,T,Bo,So,Wo,lt,V,Do,it,P,Mo,X,jo,at,H,Ce,No,qo,nt,Q,zo,st,K,Fo,rt,Z,$o;return{c(){b=l("p"),_=r("Website Description"),E=f(),k=l("p"),d=r("(Last updated: 2/11/2019)"),v=f(),I=l("p"),ft=r(`\u201CObstacles are put in your way to see if what you want is really worth fighting for\u201D.
	Make a bot that can run for you and cross the final line before anyone else does.`),Oe=f(),g=l("h1"),mt=r("Description"),Be=f(),C=l("p"),ut=r(`It is an obstacle race, where you have to make a robot that can clear the Obstacle Course and
	compete against other teams\u2019 time. The Obstacle Course will be filled with various hurdles,
	slopes, and moving obstacles. The competition will have two rounds, namely Beauty Round and the
	Arena Rush. In the Beauty round, your robot will be judged on its looks and functionality. In the
	Arena Rush round, your robot will be tested on the course where you have to complete it in the
	least time possible.`),Se=f(),R=l("p"),te=l("strong"),ct=r("Read the rules and the specifications for the robot"),pt=r(` mentioned below carefully
	before making the robot.`),We=f(),O=l("h1"),bt=r("Round 1"),De=f(),B=l("p"),dt=r("In this round, your robot will be judged by the judging panel."),Me=f(),S=l("p"),wt=r("Judging Criteria for this round will be as follows-"),je=f(),x=l("ol"),oe=l("li"),vt=r("Aesthetics - How good your robot looks."),yt=f(),le=l("li"),_t=r("Functionality - How functional your robot is."),Et=f(),ie=l("li"),kt=r("Design - How well you have integrated looks and functionality."),Ne=f(),W=l("p"),xt=r("Scores for this round will be the sum of points given in each category mentioned above."),qe=f(),D=l("h1"),It=r("Round 2"),ze=f(),M=l("p"),Tt=r(`In this round, your robot will be competing with the best lap times of other teams in the obstacle
	course specially designed to test your robot capabilities. This course is time-based, your scores
	will be based on how much time your robot takes to complete the course. There are some rules
	mentioned below which you have to follow in this round. Not following the rules may result in a
	penalty or even disqualification.`),Fe=f(),j=l("p"),Lt=r("Rules for Round 2:"),$e=f(),p=l("ul"),ae=l("li"),Rt=r("There can be, at max, five-member in each team."),Pt=f(),ne=l("li"),Ht=r("Only one bot will be allowed in the arena at a time."),At=f(),se=l("li"),gt=r(`Rush starts when the Coordinator announces the same and will end when the bot crosses the finish
		line or crosses a certain number of penalties (the number will be told at the event day).`),Ct=f(),re=l("li"),Ot=r("The bots must not deviate from the path specified OR must not take unintentional shortcuts."),Bt=f(),he=l("li"),St=r("Only 1 person is allowed to control the bot. The rest of the team members can cheer from behind."),Wt=f(),fe=l("li"),Dt=r(`No other people (except Coordinator, Camera Man, & the Managing Committee) are allowed to
		enter the race track until the last bot finishes the race.`),Mt=f(),me=l("li"),jt=r(`In the case of BOT DAMAGE / Battery Drain in between the competition, a time penalty will be
		given. A maximum of 2 team members (excluding controller) are allowed to hop on the track and
		immediately repair it (this time shall not be counted). The bot will have to continue from the
		last checkpoint where it stopped.`),Nt=f(),ue=l("li"),qt=r(`In case of any damage caused by the bot to the arena, the team (with the help of the organizers)
		must repair the arena. However, in case of irreparable damages, the team shall be disqualified
		and the event will be continued with changes in the arena (with mutual agreement between the
		teams)`),zt=f(),ce=l("li"),Ft=r(`Details about any new rules or penalties that are not discussed in this document will be
		announced at the start of the event.`),$t=f(),pe=l("li"),Jt=r("In case of any dispute, the decision taken by the management committee will be final."),Je=f(),N=l("p"),Yt=r(`NOTE: The above rules are subject to change. In such genuine cases, the modified rules would be
	informed by the Coordinator.`),Ye=f(),q=l("h1"),Gt=r("Final Rankings"),Ge=f(),z=l("p"),Ut=r(`The final ranking will be based on the scores of both the rounds. The top teams in the final
	ranking will win the prize money.`),Ue=f(),F=l("h1"),Vt=r("Specifications for the robot:"),Ve=f(),$=l("p"),Xt=r("Your robot must justify the below-mentioned specifications-"),Xe=f(),y=l("ol"),be=l("li"),Qt=r(`The bot must be having a pickup mechanism to lift a block (perfect cube) of side length 15cm and
		weighing up to 0.5kg. Block will also have a hook on top with a radius of 1cm.`),Kt=f(),de=l("li"),Zt=r(`The maximum and minimum dimensions (LxWxH) of the robot can be 30cm x 30cm x 30cm and 10cm x
		10cm x 5cm respectively (excluding the pickup mechanism).`),eo=f(),we=l("li"),to=r("Your robot must weigh less than 2.5kg (along with the power source and controller)."),oo=f(),ve=l("li"),lo=r("The controller can be either wired or wireless."),Qe=f(),J=l("p"),io=r(`The robot which does not meet these specifications will be disqualified from the
	competition.\xA0`),Ke=f(),Y=l("h1"),ao=r("Specifications for the Arena:"),Ze=f(),G=l("p"),no=r(`The maximum dimension of the track will be 0.4m X 30m. The arena will contain some of the
	following hurdles:\xA0`),et=f(),u=l("ol"),ye=l("li"),so=r("Sharp turns"),ro=f(),_e=l("li"),ho=r("Roller inclination of max 45 degrees"),fo=f(),Ee=l("li"),mo=r("Hanging bridge"),uo=f(),ke=l("li"),co=r("Half ramp assembly with an inclination of max 45 degrees."),po=f(),xe=l("li"),bo=r("Ramp assembly with an inclination of 30 degrees and a declination of 30 degrees."),wo=f(),Ie=l("li"),vo=r("Stairs with the step width of 3cm and height 2 cm"),yo=f(),Te=l("li"),_o=r("Sand Box"),Eo=f(),Le=l("li"),ko=r("A Box of stones"),xo=f(),Re=l("li"),Io=r("Open track of 16cm x 40 cm"),To=f(),Pe=l("li"),Lo=r("Speed breakers (semi-circular pipes) of max. height of 2cm"),Ro=f(),He=l("li"),Po=r("rotating disc"),Ho=f(),Ae=l("li"),Ao=r("Pits of the max. radius of 2.5 cm"),go=f(),ge=l("li"),Co=r("Curved path having the inclination of 30 degrees."),tt=f(),U=l("p"),Oo=r(`Use your imagination and creativity to come up with the best possible bots to beat the above
	challenges in their toughest possible scenarios.`),ot=f(),T=l("p"),Bo=l("br"),So=l("br"),Wo=l("br"),lt=f(),V=l("p"),Do=r(`All the teams must register before the event with there team and team members' names using the
	form link given below.`),it=f(),P=l("p"),Mo=r("Form Link: "),X=l("a"),jo=r("https://forms.gle/V5W1wPRFMWn8dnJQ6"),at=f(),H=l("p"),Ce=l("strong"),No=r("Note:"),qo=r(` All the participating teams are requested to keep checking this section of
	the Meraz\u2019s website for more updates. The new update will be marked with the last updated
	date at the top.`),nt=f(),Q=l("h1"),zo=r("Contact Person"),st=f(),K=l("p"),Fo=r("Harshit Bansal - +91 9639480092 (Phone/Whatsapp)"),rt=f(),Z=l("p"),$o=r("Ayushneel Titus - +91 9111196600 (Phone/Whatsapp)"),this.h()},l(e){b=i(e,"P",{});var a=n(b);_=h(a,"Website Description"),a.forEach(t),E=m(e),k=i(e,"P",{});var Vo=n(k);d=h(Vo,"(Last updated: 2/11/2019)"),Vo.forEach(t),v=m(e),I=i(e,"P",{});var Xo=n(I);ft=h(Xo,`\u201CObstacles are put in your way to see if what you want is really worth fighting for\u201D.
	Make a bot that can run for you and cross the final line before anyone else does.`),Xo.forEach(t),Oe=m(e),g=i(e,"H1",{});var Qo=n(g);mt=h(Qo,"Description"),Qo.forEach(t),Be=m(e),C=i(e,"P",{});var Ko=n(C);ut=h(Ko,`It is an obstacle race, where you have to make a robot that can clear the Obstacle Course and
	compete against other teams\u2019 time. The Obstacle Course will be filled with various hurdles,
	slopes, and moving obstacles. The competition will have two rounds, namely Beauty Round and the
	Arena Rush. In the Beauty round, your robot will be judged on its looks and functionality. In the
	Arena Rush round, your robot will be tested on the course where you have to complete it in the
	least time possible.`),Ko.forEach(t),Se=m(e),R=i(e,"P",{});var Jo=n(R);te=i(Jo,"STRONG",{});var Zo=n(te);ct=h(Zo,"Read the rules and the specifications for the robot"),Zo.forEach(t),pt=h(Jo,` mentioned below carefully
	before making the robot.`),Jo.forEach(t),We=m(e),O=i(e,"H1",{});var el=n(O);bt=h(el,"Round 1"),el.forEach(t),De=m(e),B=i(e,"P",{});var tl=n(B);dt=h(tl,"In this round, your robot will be judged by the judging panel."),tl.forEach(t),Me=m(e),S=i(e,"P",{});var ol=n(S);wt=h(ol,"Judging Criteria for this round will be as follows-"),ol.forEach(t),je=m(e),x=i(e,"OL",{});var ee=n(x);oe=i(ee,"LI",{});var ll=n(oe);vt=h(ll,"Aesthetics - How good your robot looks."),ll.forEach(t),yt=m(ee),le=i(ee,"LI",{});var il=n(le);_t=h(il,"Functionality - How functional your robot is."),il.forEach(t),Et=m(ee),ie=i(ee,"LI",{});var al=n(ie);kt=h(al,"Design - How well you have integrated looks and functionality."),al.forEach(t),ee.forEach(t),Ne=m(e),W=i(e,"P",{});var nl=n(W);xt=h(nl,"Scores for this round will be the sum of points given in each category mentioned above."),nl.forEach(t),qe=m(e),D=i(e,"H1",{});var sl=n(D);It=h(sl,"Round 2"),sl.forEach(t),ze=m(e),M=i(e,"P",{});var rl=n(M);Tt=h(rl,`In this round, your robot will be competing with the best lap times of other teams in the obstacle
	course specially designed to test your robot capabilities. This course is time-based, your scores
	will be based on how much time your robot takes to complete the course. There are some rules
	mentioned below which you have to follow in this round. Not following the rules may result in a
	penalty or even disqualification.`),rl.forEach(t),Fe=m(e),j=i(e,"P",{});var hl=n(j);Lt=h(hl,"Rules for Round 2:"),hl.forEach(t),$e=m(e),p=i(e,"UL",{});var w=n(p);ae=i(w,"LI",{});var fl=n(ae);Rt=h(fl,"There can be, at max, five-member in each team."),fl.forEach(t),Pt=m(w),ne=i(w,"LI",{});var ml=n(ne);Ht=h(ml,"Only one bot will be allowed in the arena at a time."),ml.forEach(t),At=m(w),se=i(w,"LI",{});var ul=n(se);gt=h(ul,`Rush starts when the Coordinator announces the same and will end when the bot crosses the finish
		line or crosses a certain number of penalties (the number will be told at the event day).`),ul.forEach(t),Ct=m(w),re=i(w,"LI",{});var cl=n(re);Ot=h(cl,"The bots must not deviate from the path specified OR must not take unintentional shortcuts."),cl.forEach(t),Bt=m(w),he=i(w,"LI",{});var pl=n(he);St=h(pl,"Only 1 person is allowed to control the bot. The rest of the team members can cheer from behind."),pl.forEach(t),Wt=m(w),fe=i(w,"LI",{});var bl=n(fe);Dt=h(bl,`No other people (except Coordinator, Camera Man, & the Managing Committee) are allowed to
		enter the race track until the last bot finishes the race.`),bl.forEach(t),Mt=m(w),me=i(w,"LI",{});var dl=n(me);jt=h(dl,`In the case of BOT DAMAGE / Battery Drain in between the competition, a time penalty will be
		given. A maximum of 2 team members (excluding controller) are allowed to hop on the track and
		immediately repair it (this time shall not be counted). The bot will have to continue from the
		last checkpoint where it stopped.`),dl.forEach(t),Nt=m(w),ue=i(w,"LI",{});var wl=n(ue);qt=h(wl,`In case of any damage caused by the bot to the arena, the team (with the help of the organizers)
		must repair the arena. However, in case of irreparable damages, the team shall be disqualified
		and the event will be continued with changes in the arena (with mutual agreement between the
		teams)`),wl.forEach(t),zt=m(w),ce=i(w,"LI",{});var vl=n(ce);Ft=h(vl,`Details about any new rules or penalties that are not discussed in this document will be
		announced at the start of the event.`),vl.forEach(t),$t=m(w),pe=i(w,"LI",{});var yl=n(pe);Jt=h(yl,"In case of any dispute, the decision taken by the management committee will be final."),yl.forEach(t),w.forEach(t),Je=m(e),N=i(e,"P",{});var _l=n(N);Yt=h(_l,`NOTE: The above rules are subject to change. In such genuine cases, the modified rules would be
	informed by the Coordinator.`),_l.forEach(t),Ye=m(e),q=i(e,"H1",{});var El=n(q);Gt=h(El,"Final Rankings"),El.forEach(t),Ge=m(e),z=i(e,"P",{});var kl=n(z);Ut=h(kl,`The final ranking will be based on the scores of both the rounds. The top teams in the final
	ranking will win the prize money.`),kl.forEach(t),Ue=m(e),F=i(e,"H1",{});var xl=n(F);Vt=h(xl,"Specifications for the robot:"),xl.forEach(t),Ve=m(e),$=i(e,"P",{});var Il=n($);Xt=h(Il,"Your robot must justify the below-mentioned specifications-"),Il.forEach(t),Xe=m(e),y=i(e,"OL",{});var L=n(y);be=i(L,"LI",{});var Tl=n(be);Qt=h(Tl,`The bot must be having a pickup mechanism to lift a block (perfect cube) of side length 15cm and
		weighing up to 0.5kg. Block will also have a hook on top with a radius of 1cm.`),Tl.forEach(t),Kt=m(L),de=i(L,"LI",{});var Ll=n(de);Zt=h(Ll,`The maximum and minimum dimensions (LxWxH) of the robot can be 30cm x 30cm x 30cm and 10cm x
		10cm x 5cm respectively (excluding the pickup mechanism).`),Ll.forEach(t),eo=m(L),we=i(L,"LI",{});var Rl=n(we);to=h(Rl,"Your robot must weigh less than 2.5kg (along with the power source and controller)."),Rl.forEach(t),oo=m(L),ve=i(L,"LI",{});var Pl=n(ve);lo=h(Pl,"The controller can be either wired or wireless."),Pl.forEach(t),L.forEach(t),Qe=m(e),J=i(e,"P",{});var Hl=n(J);io=h(Hl,`The robot which does not meet these specifications will be disqualified from the
	competition.\xA0`),Hl.forEach(t),Ke=m(e),Y=i(e,"H1",{});var Al=n(Y);ao=h(Al,"Specifications for the Arena:"),Al.forEach(t),Ze=m(e),G=i(e,"P",{});var gl=n(G);no=h(gl,`The maximum dimension of the track will be 0.4m X 30m. The arena will contain some of the
	following hurdles:\xA0`),gl.forEach(t),et=m(e),u=i(e,"OL",{});var c=n(u);ye=i(c,"LI",{});var Cl=n(ye);so=h(Cl,"Sharp turns"),Cl.forEach(t),ro=m(c),_e=i(c,"LI",{});var Ol=n(_e);ho=h(Ol,"Roller inclination of max 45 degrees"),Ol.forEach(t),fo=m(c),Ee=i(c,"LI",{});var Bl=n(Ee);mo=h(Bl,"Hanging bridge"),Bl.forEach(t),uo=m(c),ke=i(c,"LI",{});var Sl=n(ke);co=h(Sl,"Half ramp assembly with an inclination of max 45 degrees."),Sl.forEach(t),po=m(c),xe=i(c,"LI",{});var Wl=n(xe);bo=h(Wl,"Ramp assembly with an inclination of 30 degrees and a declination of 30 degrees."),Wl.forEach(t),wo=m(c),Ie=i(c,"LI",{});var Dl=n(Ie);vo=h(Dl,"Stairs with the step width of 3cm and height 2 cm"),Dl.forEach(t),yo=m(c),Te=i(c,"LI",{});var Ml=n(Te);_o=h(Ml,"Sand Box"),Ml.forEach(t),Eo=m(c),Le=i(c,"LI",{});var jl=n(Le);ko=h(jl,"A Box of stones"),jl.forEach(t),xo=m(c),Re=i(c,"LI",{});var Nl=n(Re);Io=h(Nl,"Open track of 16cm x 40 cm"),Nl.forEach(t),To=m(c),Pe=i(c,"LI",{});var ql=n(Pe);Lo=h(ql,"Speed breakers (semi-circular pipes) of max. height of 2cm"),ql.forEach(t),Ro=m(c),He=i(c,"LI",{});var zl=n(He);Po=h(zl,"rotating disc"),zl.forEach(t),Ho=m(c),Ae=i(c,"LI",{});var Fl=n(Ae);Ao=h(Fl,"Pits of the max. radius of 2.5 cm"),Fl.forEach(t),go=m(c),ge=i(c,"LI",{});var $l=n(ge);Co=h($l,"Curved path having the inclination of 30 degrees."),$l.forEach(t),c.forEach(t),tt=m(e),U=i(e,"P",{});var Jl=n(U);Oo=h(Jl,`Use your imagination and creativity to come up with the best possible bots to beat the above
	challenges in their toughest possible scenarios.`),Jl.forEach(t),ot=m(e),T=i(e,"P",{});var ht=n(T);Bo=i(ht,"BR",{}),So=i(ht,"BR",{}),Wo=i(ht,"BR",{}),ht.forEach(t),lt=m(e),V=i(e,"P",{});var Yl=n(V);Do=h(Yl,`All the teams must register before the event with there team and team members' names using the
	form link given below.`),Yl.forEach(t),it=m(e),P=i(e,"P",{});var Yo=n(P);Mo=h(Yo,"Form Link: "),X=i(Yo,"A",{href:!0});var Gl=n(X);jo=h(Gl,"https://forms.gle/V5W1wPRFMWn8dnJQ6"),Gl.forEach(t),Yo.forEach(t),at=m(e),H=i(e,"P",{});var Go=n(H);Ce=i(Go,"STRONG",{});var Ul=n(Ce);No=h(Ul,"Note:"),Ul.forEach(t),qo=h(Go,` All the participating teams are requested to keep checking this section of
	the Meraz\u2019s website for more updates. The new update will be marked with the last updated
	date at the top.`),Go.forEach(t),nt=m(e),Q=i(e,"H1",{});var Vl=n(Q);zo=h(Vl,"Contact Person"),Vl.forEach(t),st=m(e),K=i(e,"P",{});var Xl=n(K);Fo=h(Xl,"Harshit Bansal - +91 9639480092 (Phone/Whatsapp)"),Xl.forEach(t),rt=m(e),Z=i(e,"P",{});var Ql=n(Z);$o=h(Ql,"Ayushneel Titus - +91 9111196600 (Phone/Whatsapp)"),Ql.forEach(t),this.h()},h(){mi(X,"href","https://forms.gle/V5W1wPRFMWn8dnJQ6")},m(e,a){s(e,b,a),o(b,_),s(e,E,a),s(e,k,a),o(k,d),s(e,v,a),s(e,I,a),o(I,ft),s(e,Oe,a),s(e,g,a),o(g,mt),s(e,Be,a),s(e,C,a),o(C,ut),s(e,Se,a),s(e,R,a),o(R,te),o(te,ct),o(R,pt),s(e,We,a),s(e,O,a),o(O,bt),s(e,De,a),s(e,B,a),o(B,dt),s(e,Me,a),s(e,S,a),o(S,wt),s(e,je,a),s(e,x,a),o(x,oe),o(oe,vt),o(x,yt),o(x,le),o(le,_t),o(x,Et),o(x,ie),o(ie,kt),s(e,Ne,a),s(e,W,a),o(W,xt),s(e,qe,a),s(e,D,a),o(D,It),s(e,ze,a),s(e,M,a),o(M,Tt),s(e,Fe,a),s(e,j,a),o(j,Lt),s(e,$e,a),s(e,p,a),o(p,ae),o(ae,Rt),o(p,Pt),o(p,ne),o(ne,Ht),o(p,At),o(p,se),o(se,gt),o(p,Ct),o(p,re),o(re,Ot),o(p,Bt),o(p,he),o(he,St),o(p,Wt),o(p,fe),o(fe,Dt),o(p,Mt),o(p,me),o(me,jt),o(p,Nt),o(p,ue),o(ue,qt),o(p,zt),o(p,ce),o(ce,Ft),o(p,$t),o(p,pe),o(pe,Jt),s(e,Je,a),s(e,N,a),o(N,Yt),s(e,Ye,a),s(e,q,a),o(q,Gt),s(e,Ge,a),s(e,z,a),o(z,Ut),s(e,Ue,a),s(e,F,a),o(F,Vt),s(e,Ve,a),s(e,$,a),o($,Xt),s(e,Xe,a),s(e,y,a),o(y,be),o(be,Qt),o(y,Kt),o(y,de),o(de,Zt),o(y,eo),o(y,we),o(we,to),o(y,oo),o(y,ve),o(ve,lo),s(e,Qe,a),s(e,J,a),o(J,io),s(e,Ke,a),s(e,Y,a),o(Y,ao),s(e,Ze,a),s(e,G,a),o(G,no),s(e,et,a),s(e,u,a),o(u,ye),o(ye,so),o(u,ro),o(u,_e),o(_e,ho),o(u,fo),o(u,Ee),o(Ee,mo),o(u,uo),o(u,ke),o(ke,co),o(u,po),o(u,xe),o(xe,bo),o(u,wo),o(u,Ie),o(Ie,vo),o(u,yo),o(u,Te),o(Te,_o),o(u,Eo),o(u,Le),o(Le,ko),o(u,xo),o(u,Re),o(Re,Io),o(u,To),o(u,Pe),o(Pe,Lo),o(u,Ro),o(u,He),o(He,Po),o(u,Ho),o(u,Ae),o(Ae,Ao),o(u,go),o(u,ge),o(ge,Co),s(e,tt,a),s(e,U,a),o(U,Oo),s(e,ot,a),s(e,T,a),o(T,Bo),o(T,So),o(T,Wo),s(e,lt,a),s(e,V,a),o(V,Do),s(e,it,a),s(e,P,a),o(P,Mo),o(P,X),o(X,jo),s(e,at,a),s(e,H,a),o(H,Ce),o(Ce,No),o(H,qo),s(e,nt,a),s(e,Q,a),o(Q,zo),s(e,st,a),s(e,K,a),o(K,Fo),s(e,rt,a),s(e,Z,a),o(Z,$o)},p:ui,d(e){e&&t(b),e&&t(E),e&&t(k),e&&t(v),e&&t(I),e&&t(Oe),e&&t(g),e&&t(Be),e&&t(C),e&&t(Se),e&&t(R),e&&t(We),e&&t(O),e&&t(De),e&&t(B),e&&t(Me),e&&t(S),e&&t(je),e&&t(x),e&&t(Ne),e&&t(W),e&&t(qe),e&&t(D),e&&t(ze),e&&t(M),e&&t(Fe),e&&t(j),e&&t($e),e&&t(p),e&&t(Je),e&&t(N),e&&t(Ye),e&&t(q),e&&t(Ge),e&&t(z),e&&t(Ue),e&&t(F),e&&t(Ve),e&&t($),e&&t(Xe),e&&t(y),e&&t(Qe),e&&t(J),e&&t(Ke),e&&t(Y),e&&t(Ze),e&&t(G),e&&t(et),e&&t(u),e&&t(tt),e&&t(U),e&&t(ot),e&&t(T),e&&t(lt),e&&t(V),e&&t(it),e&&t(P),e&&t(at),e&&t(H),e&&t(nt),e&&t(Q),e&&t(st),e&&t(K),e&&t(rt),e&&t(Z)}}}function bi(A){let b,_;const E=[A[0],ei];let k={$$slots:{default:[pi]},$$scope:{ctx:A}};for(let d=0;d<E.length;d+=1)k=Uo(k,E[d]);return b=new ci({props:k}),{c(){ii(b.$$.fragment)},l(d){ai(b.$$.fragment,d)},m(d,v){ni(b,d,v),_=!0},p(d,[v]){const I=v&1?si(E,[v&1&&Kl(d[0]),v&0&&Kl(ei)]):{};v&2&&(I.$$scope={dirty:v,ctx:d}),b.$set(I)},i(d){_||(ri(b.$$.fragment,d),_=!0)},o(d){hi(b.$$.fragment,d),_=!1},d(d){fi(b,d)}}}const ei={layout:"event",name:"Areana Haste",image:"AreanaHaste.jpg",imageSize:"horizontal",registerURL:"https://forms.gle/XCDWu7XHwspbVhYy9"};function di(A,b,_){return A.$$set=E=>{_(0,b=Uo(Uo({},b),Zl(E)))},b=Zl(b),[b]}class yi extends ti{constructor(b){super(),oi(this,b,di,bi,li,{})}}export{yi as default,ei as metadata};