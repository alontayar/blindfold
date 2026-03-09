/* ============================================================
   JAZZ BLINDFOLD TEST — DATA FILE
   ============================================================
   HOW TO ADD SONGS:
   1. Find video on YouTube, copy 11-char ID after ?v=
   2. Set youtubeId:'' to disable video for a track
   3. Personnel keys must match INSTR_ORDER exactly
   ============================================================ */

const INSTR_ORDER = [
  'voice','trumpet','cornet','flugelhorn',
  'soprano_sax','alto_sax','tenor_sax','baritone_sax',
  'trombone','flute','guitar','vibraphone',
  'piano','organ','bass','drums'
];

const INSTR_LABEL = {
  voice:'Voice', trumpet:'Trumpet', cornet:'Cornet', flugelhorn:'Flugelhorn',
  soprano_sax:'Soprano Sax', alto_sax:'Alto Saxophone',
  tenor_sax:'Tenor Saxophone', baritone_sax:'Baritone Sax',
  trombone:'Trombone', flute: 'Flute', guitar:'Guitar', vibraphone:'Vibraphone',
  piano:'Piano', organ:'Organ', bass:'Bass', drums:'Drums'
};

const POOLS = {
  trumpet:['Miles Davis','Clifford Brown','Lee Morgan','Freddie Hubbard','Chet Baker','Kenny Dorham','Art Farmer','Donald Byrd','Woody Shaw','Blue Mitchell','Clark Terry','Dizzy Gillespie','Booker Little','Thad Jones','Nat Adderley','Charles Tolliver'],
  cornet:['Don Cherry','Nat Adderley','Clark Terry','Thad Jones','Bobby Bradford','Ruby Braff'],
  flugelhorn:['Art Farmer','Miles Davis','Clark Terry','Freddie Hubbard','Thad Jones','Chet Baker'],
  soprano_sax:['John Coltrane','Steve Lacy','Sidney Bechet','Wayne Shorter','Roland Kirk','Sam Rivers','Dave Liebman'],
  alto_sax:['Cannonball Adderley','Lee Konitz','Phil Woods','Jackie McLean','Art Pepper','Sonny Stitt','Paul Desmond','Eric Dolphy','Charlie Parker','Ornette Coleman','John Handy','Frank Strozier','Gigi Gryce','Lou Donaldson','Charles McPherson', 'Gary Bartz'],
  tenor_sax:['John Coltrane','Sonny Rollins','Joe Henderson','Wayne Shorter','Hank Mobley','Dexter Gordon','Johnny Griffin','Benny Golson','Booker Ervin','Stanley Turrentine','Clifford Jordan','Jimmy Heath','Harold Land','Warne Marsh','Zoot Sims','Tina Brooks','Junior Cook','Charlie Rouse','George Coleman','Lucky Thompson'],
  baritone_sax:['Pepper Adams','Gerry Mulligan','Harry Carney','Lars Gullin','Cecil Payne'],
  trombone:['J.J. Johnson','Curtis Fuller','Slide Hampton','Frank Rosolino','Jimmy Knepper','Grachan Moncur III','Julian Priester','Willie Dennis','Kai Winding','Bob Brookmeyer'],
  flute:['Herbie Mann','Hubert Laws','Yusef Lateef','James Moody','Frank Wess','Roland Kirk','Eric Dolphy'],
  guitar:['Wes Montgomery','Grant Green','Jim Hall','Kenny Burrell','Joe Pass','Barney Kessel','Herb Ellis','Jimmy Raney','Tal Farlow'],
  vibraphone:['Milt Jackson','Bobby Hutcherson','Gary Burton','Red Norvo','Victor Feldman','Eddie Costa','Lem Winchester','Cal Tjader','Walt Dickerson'],
  piano:['Bill Evans','Paul Bley', 'Harold Mabern', 'Red Garland','Wynton Kelly','Herbie Hancock','McCoy Tyner','Tommy Flanagan','Barry Harris','Cedar Walton','Bobby Timmons','Horace Silver','Thelonious Monk','Bud Powell','Hank Jones','Ahmad Jamal','Stanley Cowell', 'Duke Ellington', 'Victor Feldman', 'Oscar Peterson','Richie Powell','Walter Davis Jr.','Sonny Clark','Mal Waldron','Kenny Drew','Herbie Nichols', 'Andrew Hill','Jaki Byard','Joe Zawinul','Elmo Hope','Ray Bryant','Junior Mance','Dave Brubeck','Horace Parlan','Duke Jordan','Duke Pearson'],
  organ:['Jimmy Smith','Jack McDuff','Larry Young','Shirley Scott','Don Patterson','Charles Earland','Jimmy McGriff','Big John Patton'],
  bass:['Paul Chambers','Laymon Jackson', 'Scott LaFaro','Ron Carter','Jimmy Garrison','Charlie Haden','Ray Brown','Percy Heath','Wilbur Ware','Reggie Workman','Bob Cranshaw','Sam Jones','Doug Watkins','Oscar Pettiford','George Morrow','Jymie Merritt','NHØP', 'George Duvivier', 'Aaron Bell', 'Butch Warren','Richard Davis', 'Reggie Johnson', 'Teddy Smith','Steve Davis','Art Davis','Leroy Vinnegar','Chuck Israels','Charles Mingus'],
  drums:['Jimmy Cobb','Philly Joe Jones','Tony Williams','Max Roach','Art Blakey','Elvin Jones','Paul Motian','Roy Haynes','Billy Higgins','Ed Thigpen','Albert Heath','Pete LaRoca','Joe Morello','Frankie Dunlop','Ben Riley','Dannie Richmond','Shadow Wilson','Art Taylor','Louis Hayes','Charlie Persip','Kenny Clarke','Lex Humphries','Al Harewood'],
  voice:['Billie Holiday','Sarah Vaughan','Blossom Dearie','Ella Fitzgerald','Carmen McRae','Betty Carter','Abbey Lincoln','Nina Simone','Shirley Horn','Anita O\'Day','Chris Connor'],
};

const songs = [

  /* ── MILES DAVIS ──────────────────────────────────────── */
  { title:'So What', album:'Kind of Blue', leader:'Miles Davis', year:1959, youtubeId:'ylXk1LBvIqU',
    personnel:{ trumpet:'Miles Davis', tenor_sax:'John Coltrane', alto_sax:'Cannonball Adderley', piano:'Bill Evans', bass:'Paul Chambers', drums:'Jimmy Cobb' }},
  { title:'Freddie Freeloader', album:'Kind of Blue', leader:'Miles Davis', year:1959, youtubeId:'ZZcuSBouhVA',
    personnel:{ trumpet:'Miles Davis', tenor_sax:'John Coltrane', alto_sax:'Cannonball Adderley', piano:'Wynton Kelly', bass:'Paul Chambers', drums:'Jimmy Cobb' }},
  { title:'All Blues', album:'Kind of Blue', leader:'Miles Davis', year:1959, youtubeId:'-488UORrfJ0',
    personnel:{ trumpet:'Miles Davis', tenor_sax:'John Coltrane', alto_sax:'Cannonball Adderley', piano:'Bill Evans', bass:'Paul Chambers', drums:'Jimmy Cobb' }},
  { title:'Blue in Green', album:'Kind of Blue', leader:'Miles Davis', year:1959, youtubeId:'TLDflhhdPCg',
    personnel:{ trumpet:'Miles Davis', tenor_sax:'John Coltrane', piano:'Bill Evans', bass:'Paul Chambers', drums:'Jimmy Cobb' }},
  { title:'Milestones', album:'Milestones', leader:'Miles Davis', year:1958, youtubeId:'k94zDsJ-JMU',
    personnel:{ trumpet:'Miles Davis', tenor_sax:'John Coltrane', alto_sax:'Cannonball Adderley', piano:'Red Garland', bass:'Paul Chambers', drums:'Philly Joe Jones' }},
  { title:"'Round Midnight", album:"'Round About Midnight", leader:'Miles Davis', year:1957, youtubeId:'Ys9wiGNDCvA',
    personnel:{ trumpet:'Miles Davis', tenor_sax:'John Coltrane', piano:'Red Garland', bass:'Paul Chambers', drums:'Philly Joe Jones' }},
  { title:'Bye Bye Blackbird', album:"'Round About Midnight", leader:'Miles Davis', year:1957, youtubeId:'AlSVDvNHLPs',
    personnel:{ trumpet:'Miles Davis', tenor_sax:'John Coltrane', piano:'Red Garland', bass:'Paul Chambers', drums:'Philly Joe Jones' }},
  { title:'E.S.P.', album:'E.S.P.', leader:'Miles Davis', year:1965, youtubeId:'lRhqn21-xeg',
    personnel:{ trumpet:'Miles Davis', tenor_sax:'Wayne Shorter', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Tony Williams' }},
  { title:'Footprints', album:'Miles Smiles', leader:'Miles Davis', year:1967, youtubeId:'O-rrt8IYhe0',
    personnel:{ trumpet:'Miles Davis', tenor_sax:'Wayne Shorter', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Tony Williams' }},
  { title:'Agitation', album:'E.S.P.', leader:'Miles Davis', year:1965, youtubeId:'ywAMUxfe4jk',
    personnel:{ trumpet:'Miles Davis', tenor_sax:'Wayne Shorter', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Tony Williams' }},
  { title:"Walkin'", album:"Walkin'", leader:'Miles Davis', year:1954, youtubeId:'WMW3RloxEyA',
    personnel:{ trumpet:'Miles Davis', trombone:'J.J. Johnson', tenor_sax:'Lucky Thompson', piano:'Horace Silver', bass:'Percy Heath', drums:'Kenny Clarke' }},
  { title:'Oleo', album:"Cookin' with the Miles Davis Quintet", leader:'Miles Davis', year:1956, youtubeId:'x_cQHeWwSBQ',
    personnel:{ trumpet:'Miles Davis', tenor_sax:'John Coltrane', piano:'Red Garland', bass:'Paul Chambers', drums:'Philly Joe Jones' }},
  { title:'Two Bass Hit', album:'Milestones', leader:'Miles Davis', year:1958, youtubeId:'NV7v0Q88a44',
    personnel:{ trumpet:'Miles Davis', tenor_sax:'John Coltrane', alto_sax:'Cannonball Adderley', piano:'Red Garland', bass:'Paul Chambers', drums:'Philly Joe Jones' }},
  { title:'Airegin', album:"Workin' with the Miles Davis Quintet", leader:'Miles Davis', year:1956, youtubeId:'-Hpczb5quhk',
    personnel:{ trumpet:'Miles Davis', tenor_sax:'John Coltrane', piano:'Red Garland', bass:'Paul Chambers', drums:'Philly Joe Jones' }},
  { title:"Bags' Groove", album:"Bags' Groove", leader:'Miles Davis', year:1954, youtubeId:'N7FHwhEKWsM',
    personnel:{ trumpet:'Miles Davis', vibraphone:'Milt Jackson', piano:'Thelonious Monk', bass:'Percy Heath', drums:'Kenny Clarke' }},

  /* ── JOHN COLTRANE ────────────────────────────────────── */
  { title:'Acknowledgement', album:'A Love Supreme', leader:'John Coltrane', year:1964, youtubeId:'Dmx2WuUPVcs',
    personnel:{ tenor_sax:'John Coltrane', piano:'McCoy Tyner', bass:'Jimmy Garrison', drums:'Elvin Jones' }},
  { title:'Resolution', album:'A Love Supreme', leader:'John Coltrane', year:1964, youtubeId:'hIZFqMR1cuM',
    personnel:{ tenor_sax:'John Coltrane', piano:'McCoy Tyner', bass:'Jimmy Garrison', drums:'Elvin Jones' }},
  { title:'Giant Steps', album:'Giant Steps', leader:'John Coltrane', year:1959, youtubeId:'KwIC6B_dvW4',
    personnel:{ tenor_sax:'John Coltrane', piano:'Tommy Flanagan', bass:'Paul Chambers', drums:'Art Taylor' }},
  { title:'Naima', album:'Giant Steps', leader:'John Coltrane', year:1959, youtubeId:'bPAC6zt_1ZM',
    personnel:{ tenor_sax:'John Coltrane', piano:'Wynton Kelly', bass:'Paul Chambers', drums:'Jimmy Cobb' }},
  { title:'Cousin Mary', album:'Giant Steps', leader:'John Coltrane', year:1959, youtubeId:'aAf8YyFtVDA',
    personnel:{ tenor_sax:'John Coltrane', piano:'Tommy Flanagan', bass:'Paul Chambers', drums:'Art Taylor' }},
  { title:'My Favorite Things', album:'My Favorite Things', leader:'John Coltrane', year:1960, youtubeId:'JQvc-Gkwhow',
    personnel:{ soprano_sax:'John Coltrane', piano:'McCoy Tyner', bass:'Steve Davis', drums:'Elvin Jones' }},
  { title:'Impressions', album:'Impressions', leader:'John Coltrane', year:1961, youtubeId:'7RRxiUw6bkk',
    personnel:{ tenor_sax:'John Coltrane', piano:'McCoy Tyner', bass:'Jimmy Garrison', drums:'Elvin Jones' }},
  { title:'Crescent', album:'Crescent', leader:'John Coltrane', year:1964, youtubeId:'zat58nzyxAY',
    personnel:{ tenor_sax:'John Coltrane', piano:'McCoy Tyner', bass:'Jimmy Garrison', drums:'Elvin Jones' }},
  { title:"Lonnie's Lament", album:'Crescent', leader:'John Coltrane', year:1964, youtubeId:'japCux4wals',
    personnel:{ tenor_sax:'John Coltrane', piano:'McCoy Tyner', bass:'Jimmy Garrison', drums:'Elvin Jones' }},
  { title:'Afro Blue', album:'Live at Birdland', leader:'John Coltrane', year:1963, youtubeId:'HIH3fNUsbnA',
    personnel:{ tenor_sax:'John Coltrane', piano:'McCoy Tyner', bass:'Jimmy Garrison', drums:'Elvin Jones' }},
  { title:'Trinkle Tinkle', album:'Thelonious Monk with John Coltrane', leader:'Thelonious Monk', year:1957, youtubeId:'k3Zf7S4fukI',
    personnel:{ piano:'Thelonious Monk', tenor_sax:'John Coltrane', bass:'Wilbur Ware', drums:'Shadow Wilson' }},

  /* ── BILL EVANS ───────────────────────────────────────── */
  { title:'Waltz for Debby', album:'Waltz for Debby', leader:'Bill Evans', year:1961, youtubeId:'wCINvavqFXk',
    personnel:{ piano:'Bill Evans', bass:'Scott LaFaro', drums:'Paul Motian' }},
  { title:'My Foolish Heart', album:'Waltz for Debby', leader:'Bill Evans', year:1961, youtubeId:'EpVXH3Vm2wg',
    personnel:{ piano:'Bill Evans', bass:'Scott LaFaro', drums:'Paul Motian' }},
  { title:'Autumn Leaves', album:'Portrait in Jazz', leader:'Bill Evans', year:1959, youtubeId:'r-Z8KuwI7Gc',
    personnel:{ piano:'Bill Evans', bass:'Scott LaFaro', drums:'Paul Motian' }},
  { title:'Solar', album:'Explorations', leader:'Bill Evans', year:1961, youtubeId:'5cIcIbHb0Bc',
    personnel:{ piano:'Bill Evans', bass:'Scott LaFaro', drums:'Paul Motian' }},
  { title:'Israel', album:'Explorations', leader:'Bill Evans', year:1961, youtubeId:'HvjK1kdtFfg',
    personnel:{ piano:'Bill Evans', bass:'Scott LaFaro', drums:'Paul Motian' }},
  { title:'Peace Piece', album:'Everybody Digs Bill Evans', leader:'Bill Evans', year:1958, youtubeId:'-49G2-0GBSA',
    personnel:{ piano:'Bill Evans' }},

  /* ── ART BLAKEY ───────────────────────────────────────── */
  { title:"Moanin'", album:"Moanin'", leader:'Art Blakey & The Jazz Messengers', year:1958, youtubeId:'Cv9NSR-2DwM',
    personnel:{ trumpet:'Lee Morgan', tenor_sax:'Benny Golson', piano:'Bobby Timmons', bass:'Jymie Merritt', drums:'Art Blakey' }},
  { title:'Along Came Betty', album:"Moanin'", leader:'Art Blakey & The Jazz Messengers', year:1958, youtubeId:'CTzRHq_cH5E',
    personnel:{ trumpet:'Lee Morgan', tenor_sax:'Benny Golson', piano:'Bobby Timmons', bass:'Jymie Merritt', drums:'Art Blakey' }},
  { title:'Blues March', album:"Moanin'", leader:'Art Blakey & The Jazz Messengers', year:1958, youtubeId:'sOES7AZ-d60',
    personnel:{ trumpet:'Lee Morgan', tenor_sax:'Benny Golson', piano:'Bobby Timmons', bass:'Jymie Merritt', drums:'Art Blakey' }},
  { title:'Free for All', album:'Free for All', leader:'Art Blakey & The Jazz Messengers', year:1964, youtubeId:'GJBLA39spc4',
    personnel:{ trumpet:'Freddie Hubbard', trombone: 'Curtis Fuller', tenor_sax:'Wayne Shorter', piano:'Cedar Walton', bass:'Reggie Workman', drums:'Art Blakey' }},
  { title:'A Night in Tunisia', album:'A Night in Tunisia', leader:'Art Blakey & The Jazz Messengers', year:1960, youtubeId:'FHKyVJ5YfNU',
    personnel:{ trumpet:'Lee Morgan', tenor_sax:'Wayne Shorter', piano:'Walter Davis Jr.', bass:'Jymie Merritt', drums:'Art Blakey' }},

  /* ── CLIFFORD BROWN & MAX ROACH ───────────────────────── */
  { title:'Joy Spring', album:'Study in Brown', leader:'Clifford Brown & Max Roach', year:1955, youtubeId:'dnK6OHPQZbA',
    personnel:{ trumpet:'Clifford Brown', tenor_sax:'Harold Land', piano:'Richie Powell', bass:'George Morrow', drums:'Max Roach' }},
  { title:'Daahoud', album:'Study in Brown', leader:'Clifford Brown & Max Roach', year:1955, youtubeId:'lv4EarQxGMo',
    personnel:{ trumpet:'Clifford Brown', tenor_sax:'Harold Land', piano:'Richie Powell', bass:'George Morrow', drums:'Max Roach' }},
  { title:'What Is This Thing Called Love', album:'At Basin Street', leader:'Clifford Brown & Max Roach', year:1956, youtubeId:'Gb_uG7dSGcs',
    personnel:{ trumpet:'Clifford Brown', tenor_sax:'Sonny Rollins', piano:'Richie Powell', bass:'George Morrow', drums:'Max Roach' }},
  { title:'Cherokee', album:'Study in Brown', leader:'Clifford Brown & Max Roach', year:1955, youtubeId:'M283JFxesic',
    personnel:{ trumpet:'Clifford Brown', tenor_sax:'Harold Land', piano:'Richie Powell', bass:'George Morrow', drums:'Max Roach' }},

  /* ── SONNY ROLLINS ────────────────────────────────────── */
  { title:'St. Thomas', album:'Saxophone Colossus', leader:'Sonny Rollins', year:1956, youtubeId:'fdakJqKPRDE',
    personnel:{ tenor_sax:'Sonny Rollins', piano:'Tommy Flanagan', bass:'Doug Watkins', drums:'Max Roach' }},
  { title:'Strode Rode', album:'Saxophone Colossus', leader:'Sonny Rollins', year:1956, youtubeId:'L7G4DciALDs',
    personnel:{ tenor_sax:'Sonny Rollins', piano:'Tommy Flanagan', bass:'Doug Watkins', drums:'Max Roach' }},
  { title:'Blue 7', album:'Saxophone Colossus', leader:'Sonny Rollins', year:1956, youtubeId:'-QtwXvu1uGA',
    personnel:{ tenor_sax:'Sonny Rollins', piano:'Tommy Flanagan', bass:'Doug Watkins', drums:'Max Roach' }},

  /* ── LEE MORGAN ───────────────────────────────────────── */
  { title:'The Sidewinder', album:'The Sidewinder', leader:'Lee Morgan', year:1963, youtubeId:'qJi03NqXfk8',
    personnel:{ trumpet:'Lee Morgan', tenor_sax:'Joe Henderson', piano:'Barry Harris', bass:'Bob Cranshaw', drums:'Billy Higgins' }},
  { title:'Ceora', album:'Cornbread', leader:'Lee Morgan', year:1965, youtubeId:'uRjshy_n_yE',
    personnel:{ trumpet:'Lee Morgan', tenor_sax:'Hank Mobley', piano:'Herbie Hancock', bass:'Larry Ridley', drums:'Billy Higgins' }},
  { title:'Speedball', album:'The Gigolo', leader:'Lee Morgan', year:1968, youtubeId:'-Gp72Pt-8JI',
    personnel:{ trumpet:'Lee Morgan', tenor_sax:'Wayne Shorter', piano:'Harold Mabern', bass:'Bob Cranshaw', drums:'Billy Higgins' }},

  /* ── HERBIE HANCOCK ───────────────────────────────────── */
  { title:'Maiden Voyage', album:'Maiden Voyage', leader:'Herbie Hancock', year:1965, youtubeId:'EWC5x9G45yo',
    personnel:{ trumpet:'Freddie Hubbard', tenor_sax:'George Coleman', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Tony Williams' }},
  { title:'Dolphin Dance', album:'Maiden Voyage', leader:'Herbie Hancock', year:1965, youtubeId:'RaHCnfI7y74',
    personnel:{ trumpet:'Freddie Hubbard', tenor_sax:'George Coleman', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Tony Williams' }},
  { title:'Watermelon Man', album:"Takin' Off", leader:'Herbie Hancock', year:1962, youtubeId:'_QkGAaYtXA0',
    personnel:{ trumpet:'Freddie Hubbard', tenor_sax:'Dexter Gordon', piano:'Herbie Hancock', bass:'Butch Warren', drums:'Billy Higgins' }},
  { title:'One Finger Snap', album:'Empyrean Isles', leader:'Herbie Hancock', year:1964, youtubeId:'yQgv5bRqmnk',
    personnel:{ trumpet:'Freddie Hubbard', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Tony Williams' }},

  /* ── WAYNE SHORTER ────────────────────────────────────── */
  { title:'Speak No Evil', album:'Speak No Evil', leader:'Wayne Shorter', year:1964, youtubeId:'Vdc3KJVopU4',
    personnel:{ trumpet:'Freddie Hubbard', tenor_sax:'Wayne Shorter', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Elvin Jones' }},
  { title:'Infant Eyes', album:'Speak No Evil', leader:'Wayne Shorter', year:1964, youtubeId:'CYg_3pQN-LU',
    personnel:{ trumpet:'Freddie Hubbard', tenor_sax:'Wayne Shorter', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Elvin Jones' }},
  { title:'Fee-Fi-Fo-Fum', album:'Speak No Evil', leader:'Wayne Shorter', year:1964, youtubeId:'5bE0CZi-O8c',
    personnel:{ trumpet:'Freddie Hubbard', tenor_sax:'Wayne Shorter', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Elvin Jones' }},
  { title:'Witch Hunt', album:'Speak No Evil', leader:'Wayne Shorter', year:1964, youtubeId:'oJoSrQ6iP0c',
    personnel:{ trumpet:'Freddie Hubbard', tenor_sax:'Wayne Shorter', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Elvin Jones' }},

  /* ── JOE HENDERSON ────────────────────────────────────── */
  { title:'Blue Bossa', album:'Page One', leader:'Joe Henderson', year:1963, youtubeId:'EUxv3AAaK_Y',
    personnel:{ trumpet:'Kenny Dorham', tenor_sax:'Joe Henderson', piano:'McCoy Tyner', bass:'Butch Warren', drums:'Pete LaRoca' }},
  { title:'Recorda Me', album:'Page One', leader:'Joe Henderson', year:1963, youtubeId:'3c9zSAVWKEs',
    personnel:{ trumpet:'Kenny Dorham', tenor_sax:'Joe Henderson', piano:'McCoy Tyner', bass:'Butch Warren', drums:'Pete LaRoca' }},
  { title:'Inner Urge', album:'Inner Urge', leader:'Joe Henderson', year:1964, youtubeId:'dYxgci2uPno',
    personnel:{ tenor_sax:'Joe Henderson', piano:'McCoy Tyner', bass:'Bob Cranshaw', drums:'Elvin Jones' }},

  /* ── KENNY DORHAM ─────────────────────────────────────── */
  { title:'Una Mas', album:'Una Mas', leader:'Kenny Dorham', year:1963, youtubeId:'TDETNk20Vkc',
    personnel:{ trumpet:'Kenny Dorham', tenor_sax:'Joe Henderson', piano:'Herbie Hancock', bass:'Butch Warren', drums:'Tony Williams' }},

  /* ── GRANT GREEN ──────────────────────────────────────── */
  { title:'Idle Moments', album:'Idle Moments', leader:'Grant Green', year:1963, youtubeId:'aq0m0hbCjFQ',
    personnel:{ guitar:'Grant Green', tenor_sax:'Joe Henderson', vibraphone:'Bobby Hutcherson', piano:'Duke Pearson', bass:'Bob Cranshaw', drums:'Al Harewood' }},
  { title:'Matador', album:'Matador', leader:'Grant Green', year:1964, youtubeId:'hTe9M4yFdEQ',
    personnel:{ guitar:'Grant Green', piano:'McCoy Tyner', bass:'Bob Cranshaw', drums:'Elvin Jones' }},

  /* ── HORACE SILVER ────────────────────────────────────── */
  { title:'Song for My Father', album:'Song for My Father', leader:'Horace Silver', year:1964, youtubeId:'mKf1x3CALAE',
    personnel:{ trumpet:'Carmell Jones', tenor_sax:'Joe Henderson', piano:'Horace Silver', bass:'Teddy Smith', drums:'Roger Humphries' }},
  { title:"Blowin' the Blues Away", album:"Blowin' the Blues Away", leader:'Horace Silver', year:1959, youtubeId:'9aOpQMpcybQ',
    personnel:{ trumpet:'Blue Mitchell', tenor_sax:'Junior Cook', piano:'Horace Silver', bass:'Gene Taylor', drums:'Louis Hayes' }},
  { title:'Senor Blues', album:'6 Pieces of Silver', leader:'Horace Silver', year:1956, youtubeId:'yKWphXfIsxs',
    personnel:{ trumpet:'Donald Byrd', tenor_sax:'Hank Mobley', piano:'Horace Silver', bass:'Doug Watkins', drums:'Louis Hayes' }},

  /* ── ORNETTE COLEMAN ──────────────────────────────────── */
  { title:'Lonely Woman', album:'The Shape of Jazz to Come', leader:'Ornette Coleman', year:1959, youtubeId:'OIIyCOAByDU',
    personnel:{ alto_sax:'Ornette Coleman', cornet:'Don Cherry', bass:'Charlie Haden', drums:'Billy Higgins' }},
  { title:'Peace', album:'The Shape of Jazz to Come', leader:'Ornette Coleman', year:1959, youtubeId:'nAomEYBpJsg',
    personnel:{ alto_sax:'Ornette Coleman', cornet:'Don Cherry', bass:'Charlie Haden', drums:'Billy Higgins' }},
  { title:'Congeniality', album:'The Shape of Jazz to Come', leader:'Ornette Coleman', year:1959, youtubeId:'9GB9RazkRrM',
    personnel:{ alto_sax:'Ornette Coleman', cornet:'Don Cherry', bass:'Charlie Haden', drums:'Billy Higgins' }},

  /* ── WES MONTGOMERY ───────────────────────────────────── */
  { title:'West Coast Blues', album:'The Incredible Jazz Guitar of Wes Montgomery', leader:'Wes Montgomery', year:1960, youtubeId:'VSkVxeJTiX8',
    personnel:{ guitar:'Wes Montgomery', piano:'Tommy Flanagan', bass:'Percy Heath', drums:'Albert Heath' }},
  { title:'Four on Six', album:'The Incredible Jazz Guitar of Wes Montgomery', leader:'Wes Montgomery', year:1960, youtubeId:'MBM7R9IgoTg',
    personnel:{ guitar:'Wes Montgomery', piano:'Tommy Flanagan', bass:'Percy Heath', drums:'Albert Heath' }},
  { title:'D-Natural Blues', album:'The Incredible Jazz Guitar of Wes Montgomery', leader:'Wes Montgomery', year:1960, youtubeId:'c22uSGkLq1k',
    personnel:{ guitar:'Wes Montgomery', piano:'Tommy Flanagan', bass:'Percy Heath', drums:'Albert Heath' }},

  /* ── DAVE BRUBECK ─────────────────────────────────────── */
  { title:'Take Five', album:'Time Out', leader:'Dave Brubeck', year:1959, youtubeId:'vmDDOFXSgAs',
    personnel:{ alto_sax:'Paul Desmond', piano:'Dave Brubeck', bass:'Eugene Wright', drums:'Joe Morello' }},
  { title:'Blue Rondo a la Turk', album:'Time Out', leader:'Dave Brubeck', year:1959, youtubeId:'FqPC-BkylxA',
    personnel:{ alto_sax:'Paul Desmond', piano:'Dave Brubeck', bass:'Eugene Wright', drums:'Joe Morello' }},

  /* ── THELONIOUS MONK ──────────────────────────────────── */
  { title:"Monk's Dream", album:"Monk's Dream", leader:'Thelonious Monk', year:1963, youtubeId:'mgqYJa5hMQY',
    personnel:{ piano:'Thelonious Monk', tenor_sax:'Charlie Rouse', bass:'John Ore', drums:'Frankie Dunlop' }},
  { title:'Blue Monk', album:'Thelonious Monk Trio', leader:'Thelonious Monk', year:1954, youtubeId:'WZcTZycaBdg',
    personnel:{ piano:'Thelonious Monk', bass:'Percy Heath', drums:'Art Blakey' }},

  /* ── HANK MOBLEY ──────────────────────────────────────── */
  { title:'This I Dig of You', album:'Soul Station', leader:'Hank Mobley', year:1960, youtubeId:'nJ-i3i2B9O0',
    personnel:{ tenor_sax:'Hank Mobley', piano:'Wynton Kelly', bass:'Paul Chambers', drums:'Art Blakey' }},
  { title:'Remember', album:'Soul Station', leader:'Hank Mobley', year:1960, youtubeId:'KV0HX9sk_04',
    personnel:{ tenor_sax:'Hank Mobley', piano:'Wynton Kelly', bass:'Paul Chambers', drums:'Art Blakey' }},

  /* ── DEXTER GORDON ────────────────────────────────────── */
  { title:'Cheese Cake', album:'Go!', leader:'Dexter Gordon', year:1962, youtubeId:'hkyJQcmVtZQ',
    personnel:{ tenor_sax:'Dexter Gordon', piano:'Sonny Clark', bass:'Butch Warren', drums:'Billy Higgins' }},

  /* ── SONNY CLARK ──────────────────────────────────────── */
  { title:"Cool Struttin'", album:"Cool Struttin'", leader:'Sonny Clark', year:1958, youtubeId:'UiidZPQ9G2g',
    personnel:{ trumpet:'Art Farmer', alto_sax:'Jackie McLean', piano:'Sonny Clark', bass:'Paul Chambers', drums:'Philly Joe Jones' }},

  /* ── CANNONBALL ADDERLEY ──────────────────────────────── */
  { title:'Autumn Leaves', album:"Somethin' Else", leader:'Cannonball Adderley', year:1958, youtubeId:'CpB7-8SGlJ0',
    personnel:{ alto_sax:'Cannonball Adderley', trumpet:'Miles Davis', piano:'Hank Jones', bass:'Sam Jones', drums:'Art Blakey' }},
  { title:"Somethin' Else", album:"Somethin' Else", leader:'Cannonball Adderley', year:1958, youtubeId:'yOtqq3E0JNg',
    personnel:{ alto_sax:'Cannonball Adderley', trumpet:'Miles Davis', piano:'Hank Jones', bass:'Sam Jones', drums:'Art Blakey' }},
  { title:'Work Song', album:'The Cannonball Adderley Quintet in San Francisco', leader:'Cannonball Adderley', year:1959, youtubeId:'VlepuNi40M8',
    personnel:{ alto_sax:'Cannonball Adderley', cornet:'Nat Adderley', piano:'Bobby Timmons', bass:'Sam Jones', drums:'Louis Hayes' }},
  { title:'Mercy, Mercy, Mercy', album:'Mercy, Mercy, Mercy!', leader:'Cannonball Adderley', year:1966, youtubeId:'y7FFLYXEOqA',
    personnel:{ alto_sax:'Cannonball Adderley', cornet:'Nat Adderley', piano:'Joe Zawinul', bass:'Victor Gaskin', drums:'Roy McCurdy' }},

  /* ── ERIC DOLPHY ──────────────────────────────────────── */
  { title:'Out to Lunch', album:'Out to Lunch!', leader:'Eric Dolphy', year:1964, youtubeId:'gzBpK1GcwdQ',
    personnel:{ alto_sax:'Eric Dolphy', trumpet:'Freddie Hubbard', vibraphone:'Bobby Hutcherson', bass:'Richard Davis', drums:'Tony Williams' }},
  { title:'Hat and Beard', album:'Out to Lunch!', leader:'Eric Dolphy', year:1964, youtubeId:'7tnPkQufnZY',
    personnel:{ alto_sax:'Eric Dolphy', trumpet:'Freddie Hubbard', vibraphone:'Bobby Hutcherson', bass:'Richard Davis', drums:'Tony Williams' }},

  /* ── MJQ ──────────────────────────────────────────────── */
  { title:'Django', album:'Fontessa', leader:'Modern Jazz Quartet', year:1956, youtubeId:'TdCjJuknjvs',
    personnel:{ vibraphone:'Milt Jackson', piano:'John Lewis', bass:'Percy Heath', drums:'Kenny Clarke' }},

  /* ── ANDREW HILL ──────────────────────────────────────── */
  { title:'Refuge', album:'Point of Departure', leader:'Andrew Hill', year:1964, youtubeId:'dYZcjrydVt0',
    personnel:{ trumpet:'Kenny Dorham', alto_sax:'Eric Dolphy', tenor_sax:'Joe Henderson', piano:'Andrew Hill', bass:'Richard Davis', drums:'Tony Williams' }},
   
     { title:'Land Of Nod', album:'Black Fire', leader:'Andrew Hill', year:1963, youtubeId:'wI7nzKI0WIU',
    personnel:{ tenor_sax:'Joe Henderson', piano:'Andrew Hill', bass:'Richard Davis', drums:'Roy Haynes' }},

  { title:'Siete Ocho', album:'Judgment!', leader:'Andrew Hill', year:1964, youtubeId:'rkzazhbDUw8',
    personnel:{ vibraphone:'Bobby Hutcherson', piano:'Andrew Hill', bass:'Richard Davis', drums:'Elvin Jones' }},

  { title:'The Griots', album:'Andrew!!!', leader:'Andrew Hill', year:1964, youtubeId:'SwJEf-BF5_E',
    personnel:{ vibraphone:'Bobby Hutcherson', piano:'Andrew Hill', bass:'Richard Davis', drums:'Joe Chambers' }},

  { title:'Euterpe', album:'Pax', leader:'Andrew Hill', year:1965, youtubeId:'PmtbcUtZ1nE',
    personnel:{ trumpet:'Freddie Hubbard', tenor_sax:'Joe Henderson', piano:'Andrew Hill', bass:'Richard Davis', drums:'Joe Chambers' }},

  { title:'Grass Roots', album:'Grass Roots', leader:'Andrew Hill', year:1968, youtubeId:'QA1-TDGnfUM',
    personnel:{ tenor_sax:'Booker Ervin', trumpet:'Lee Morgan', piano:'Andrew Hill', bass:'Ron Carter', drums:'Freddie Waits' }},





   




  { title:'Mr. Lucky (Alt. Take)', album:'Out of This World', leader:'Pepper Adams/Donald Byrd', year:1961, youtubeId:'dbCE4Rb6X6s',
    personnel:{ trumpet:'Donald Byrd', baritone_sax:'Pepper Adams', piano:'Herbie Hancock', bass:'Laymon Jackson', drums:'Jimmy Cobb' }},

     { title:"I'm An Old Cowhand", album:'Out of This World', leader:'Pepper Adams/Donald Byrd', year:1961, youtubeId:'HGSMpmo5pnc',
    personnel:{ trumpet:'Donald Byrd', baritone_sax:'Pepper Adams', piano:'Herbie Hancock', bass:'Laymon Jackson', drums:'Jimmy Cobb' }},

  { title:'One for Five', album:'Bossa Nova Bacchanal', leader:'Charlie Rouse', year:1965, youtubeId:'r5kg1cNU_Z0',
    personnel:{ trumpet:'Freddie Hubbard', tenor_sax:'Charlie Rouse', piano:'McCoy Tyner', bass:'Bob Cranshaw', drums:'Billy Higgins' }},

  { title:'Like Someone in Love', album:'Profile', leader:'Duke Pearson', year:1959, youtubeId:'ho-bL9-pQWg',
    personnel:{ piano:'Duke Pearson', bass:'Gene Taylor', drums:'Lex Humphries' }},






     { title:'Like Someone in Love', album:'1962 Copenhagen', leader:'Bud Powell', year:1962, youtubeId:'tf1PM80iErY',
    personnel:{ piano:'Bud Powell', bass:'NHØP', drums:'Jørn Elniff' }},

  { title:'Split Kick', album:'Introducing Paul Bley', leader:'Paul Bley', year:1953, youtubeId:'-ehc-7iQ0Uw',
    personnel:{ piano:'Paul Bley', bass:'Charles Mingus', drums:'Art Blakey' }},

  { title:'Wilburs Red Cross', album:'Wilbur Ware Super Bass', leader:'Wilbur Ware', year:1968, youtubeId:'C0eMWpnEYtE',
    personnel:{ bass:'Wilbur Ware', tenor_sax:'Clifford Jordan', trumpet:'Don Cherry', drums:'Ed Blackwell' }},

  { title:'Too Close for Comfort', album:'Love, Gloom, Cash, Love', leader:'Herbie Nichols', year:1957, youtubeId:'BH00upW6lxo',
    personnel:{ piano:'Herbie Nichols', bass:'George Duvivier', drums:'Dannie Richmond' }},

  { title:'Love, Gloom, Cash, Love', album:'Love, Gloom, Cash, Love', leader:'Herbie Nichols', year:1957, youtubeId:'HSGINNvs4Hg',
    personnel:{ piano:'Herbie Nichols', bass:'George Duvivier', drums:'Dannie Richmond' }},

  { title:'Pumpkin', album:'Black Fire', leader:'Andrew Hill', year:1963, youtubeId:'VdMmcyDU8Yc',
    personnel:{ tenor_sax:'Joe Henderson', piano:'Andrew Hill', bass:'Richard Davis', drums:'Roy Haynes' }},

  { title:'ATFW You', album:'Cornell 1964', leader:'Charles Mingus', year:1964, youtubeId:'FPZzVGs09Hg',
    personnel:{piano:'Jaki Byard', bass: 'Charles Mingus', drums: 'Dannie Richmond'}},

  { title:'Out Front', album:'Out Front!', leader:'Jaki Byard', year:1961, youtubeId:'GJexqlUMo5A',
    personnel:{ piano:'Jaki Byard', bass:'Bob Cranshaw', drums:'Walter Perkins' }},









  { title:'What Is This Thing Called Love?', album:'Portrait in Jazz', leader:'Bill Evans', year:1959, youtubeId:'8WMUZ6nixvQ',
    personnel:{ piano:'Bill Evans', bass:'Scott LaFaro', drums:'Paul Motian' }},

  { title:'Oleo', album:'Bags Groove', leader:'Miles Davis', year:1954, youtubeId:'RJUZroNIbYM',
    personnel:{ trumpet:'Miles Davis', tenor_sax:'Sonny Rollins', piano:'Horace Silver', bass:'Percy Heath', drums:'Kenny Clarke' }},

  { title:'Gone With The Wind', album:'Classic Early Solos (1934-1937)', leader:'Art Tatum', year:1937, youtubeId:'mEvMexhGwyQ',
    personnel:{ piano:'Art Tatum' }},

  { title:'The Way You Look Tonight', album:'The Art Tatum Solo Masterpieces Vol.6', leader:'Art Tatum', year:1953, youtubeId:'32BUn-uLzps',
    personnel:{ piano:'Art Tatum' }},

  { title:'The Song Is You', album:'A Jazz Message', leader:'Art Blakey', year:1963, youtubeId:'goARAX_9fMU',
    personnel:{ alto_sax:'Sonny Stitt', piano:'McCoy Tyner', bass:'Art Davis', drums:'Art Blakey' }},

  { title:'Jodo', album:'Blue Spirits', leader:'Freddie Hubbard', year:1965, youtubeId:'Qwe3qpK1VhI',
    personnel:{ trumpet:'Freddie Hubbard', alto_sax:'James Spaulding', tenor_sax:'Hank Mobley', piano:'McCoy Tyner', bass:'Bob Cranshaw', drums:'Pete LaRoca' }},

  { title:'Nite Flite', album:'Delightfulee', leader:'Lee Morgan', year:1966, youtubeId:'r9jhoHC1wlU',
    personnel:{ trumpet:'Lee Morgan', tenor_sax:'Joe Henderson', piano:'McCoy Tyner', bass:'Bob Cranshaw', drums:'Billy Higgins' }},

  { title:'You\'d Be So Nice To Come Home To', album:'Motion', leader:'Lee Konitz', year:1961, youtubeId:'xToLJrqAkW0',
    personnel:{ alto_sax:'Lee Konitz', bass:'Sonny Dallas', drums:'Elvin Jones' }},

  { title:'Just Friends', album:'Coltrane Time', leader:'John Coltrane', year:1958, youtubeId:'ujiNUzvWid8',
    personnel:{ tenor_sax:'John Coltrane', trumpet: 'Kenny Dorham', piano:'Cecil Taylor', bass:'Chuck Israels', drums:'Louis Hayes' }},

  { title:'Like Someone In Love', album:'Coltrane Time', leader:'John Coltrane', year:1958, youtubeId:'yB9Ho9UY7pU',
    personnel:{ tenor_sax:'John Coltrane', trumpet: 'Kenny Dorham', piano:'Cecil Taylor', bass:'Chuck Israels', drums:'Louis Hayes' }},

  { title:'On The Trail', album:'Four!', leader:'Joe Henderson', year:1968, youtubeId:'uGFqtChmFr0',
    personnel:{ tenor_sax:'Joe Henderson', piano:'Wynton Kelly', bass:'Paul Chambers', drums:'Jimmy Cobb' }},

  { title:'Philly Mignon', album:'Here To Stay', leader:'Freddie Hubbard', year:1962, youtubeId:'DOlkaWNocVw',
    personnel:{ trumpet:'Freddie Hubbard', tenor_sax:'Wayne Shorter', piano:'Cedar Walton', bass:'Reggie Workman', drums:'Philly Joe Jones' }},

  { title:'Visions', album:'Medina & Spiral', leader:'Bobby Hutcherson', year:1968, youtubeId:'zSGm28sdHqg',
    personnel:{ vibraphone:'Bobby Hutcherson', tenor_sax:'Harold Land', piano: 'Stanley Cowell', bass:'Reggie Johnson', drums:'Joe Chambers' }},

  { title:'Spiral', album:'Medina & Spiral', leader:'Bobby Hutcherson', year:1968, youtubeId:'J_Xkbm_IfZo',
    personnel:{ vibraphone:'Bobby Hutcherson', tenor_sax:'Harold Land', piano: 'Stanley Cowell', bass:'Reggie Johnson', drums:'Joe Chambers' }},

  { title:'Equipoise', album:'Members Don\'t Get Weary', leader:'Max Roach', year:1968, youtubeId:'YJVL5uRDTrM',
    personnel:{ drums:'Max Roach', trumpet:'Charles Tolliver', alto_sax:'Gary Bartz', piano:'Stanley Cowell', bass:'Jymie Merritt' }},

  { title:'Earl\'s World', album:'Paper Man', leader:'Charles Tolliver', year:1968, youtubeId:'nB7RGyIHc6E',
    personnel:{ trumpet:'Charles Tolliver', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Joe Chambers' }},

  { title:'Peace With Myself', album:'Paper Man', leader:'Charles Tolliver', year:1968, youtubeId:'0Dvy2Q6n7Ug',
    personnel:{ trumpet:'Charles Tolliver', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Joe Chambers' }},

  { title:'Jorgie\'s', album:'Royal Flush', leader:'Donald Byrd', year:1961, youtubeId:'Nm25w0w0hhM',
    personnel:{ trumpet:'Donald Byrd', baritone_sax:'Pepper Adams', piano:'Herbie Hancock', bass:'Butch Warren', drums:'Billy Higgins' }},

  { title:'Chordially', album:'London Collection Vol.3', leader:'Thelonious Monk', year:1971, youtubeId:'5oJJPrx4qIk',
    personnel:{ piano:'Thelonious Monk' }},

  { title:'Waltz', album:'THE ARRIVAL OF VICTOR FELDMAN', leader:'Victor Feldman', year:1957, youtubeId:'aX0k_3wtgrM',
    personnel:{ piano:'Victor Feldman', vibraphone:'Victor Feldman', bass:'Scott LaFaro', drums:'Stan Levey' }},

  { title:'Harlem Blues', album:'Harlem Blues', leader:'Phineas Newborn Jr.', year:1959, youtubeId:'J1rcVMfx8h4',
    personnel:{ piano:'Phineas Newborn Jr.', bass:'Ray Brown', drums:'Elvin Jones' }},

  { title:'Ray\'s Idea', album:'Harlem Blues', leader:'Phineas Newborn Jr.', year:1959, youtubeId:'UuV1raguNWA',
    personnel:{ piano:'Phineas Newborn Jr.', bass:'Ray Brown', drums:'Elvin Jones' }},

  { title:'Money Jungle', album:'Money Jungle', leader:'Duke Ellington', year:1962, youtubeId:'z9CfWuUIhvk',
    personnel:{ piano:'Duke Ellington', bass:'Charles Mingus', drums:'Max Roach' }},

  { title:'Warm Valley', album:'Money Jungle', leader:'Duke Ellington', year:1962, youtubeId:'UryIva-bn1U',
    personnel:{ piano:'Duke Ellington', bass:'Charles Mingus', drums:'Max Roach' }},

    { title:'In a Sentimental Mood', album:'Duke Ellington & John Coltrane', leader:'Duke Ellington', year:1962, youtubeId:'gkdFmq4Nnmk',
    personnel:{ tenor_sax:'John Coltrane', piano:'Duke Ellington', bass:'Aaron Bell', drums:'Elvin Jones' }},

  { title:'The Feeling of Jazz', album:'Duke Ellington & John Coltrane', leader:'Duke Ellington', year:1962, youtubeId:'Zka8CXiOX6I',
    personnel:{ tenor_sax:'John Coltrane', piano:'Duke Ellington', bass:'Aaron Bell', drums:'Sam Woodyard' }},








  

  { title:'Locomotion', album:'Blue Train', leader:'John Coltrane', year:1957, youtubeId:'tOAldzgQ9nY',
    personnel:{ tenor_sax:'John Coltrane', trumpet:'Lee Morgan', trombone:'Curtis Fuller', piano:'Kenny Drew', bass:'Paul Chambers', drums:'Philly Joe Jones' }},  // :contentReference[oaicite:0]{index=0}

  { title:'Three Little Words', album:'LD + 3', leader:'Lou Donaldson', year:1958, youtubeId:'UBK-iH7SBkc',
    personnel:{ alto_sax:'Lou Donaldson', piano:'Gene Harris', bass:'Andy Simpkins', drums:'Bill Dowdy' }},

  { title:'Chain Reaction', album:'A Caddy for Daddy', leader:'Hank Mobley', year:1965, youtubeId:'e7LCG3Y0Uuo',
    personnel:{ tenor_sax:'Hank Mobley', trumpet:'Lee Morgan', piano:'McCoy Tyner', bass:'Bob Cranshaw', drums:'Billy Higgins' }},

  { title:'No Blues', album:'Smokin\' at the Half Note', leader:'Wes Montgomery', year:1965, youtubeId:'Kbjq6EVuSto',
    personnel:{ guitar:'Wes Montgomery', piano:'Wynton Kelly', bass:'Paul Chambers', drums:'Jimmy Cobb' }},

  { title:'Lennie Bird', album:'Live at the Half Note', leader:'Lee Konitz', year:1959, youtubeId:'1qS8b7bXK94',
    personnel:{ alto_sax:'Lee Konitz', tenor_sax:'Warne Marsh', piano:'Bill Evans', bass:'Jimmy Garrison', drums:'Paul Motian' }},

  { title:'My Heart Stood Still', album:'Preminado', leader:'Barry Harris', year:1960, youtubeId:'YFVzpAi0ipU',
    personnel:{ piano:'Barry Harris', bass:'Joe Benjamin', drums:'Elvin Jones' }},

     { title:'There Will Never Be Another You', album:'Deeds, Not Words', leader:'Max Roach', year:1958, youtubeId:'x537pt8UxaU',
    personnel:{ bass:'Oscar Pettiford', drums:'Max Roach' }},

     { title:'Theme for Ernie', album:'Soultrane', leader:'John Coltrane', year:1958, youtubeId:'vRObBFYTBh8',
    personnel:{ tenor_sax:'John Coltrane', piano:'Red Garland', bass:'Paul Chambers', drums:'Art Taylor' }},

     { title:'Mr. Kenyatta', album:'Search for the New Land', leader:'Lee Morgan', year:1964, youtubeId:'5_Z4AVOmCKU',
    personnel:{ trumpet:'Lee Morgan', tenor_sax:'Wayne Shorter', guitar:'Grant Green', piano:'Herbie Hancock', bass:'Reggie Workman', drums:'Billy Higgins' }},




   

  { title:'Take the "A" Train', album:'2-3-4', leader:'Shelly Manne', year:1962, youtubeId:'bkQuAI1O3xs',
    personnel:{ tenor_sax:'Coleman Hawkins', piano:'Hank Jones', bass:'George Duvivier', drums:'Shelly Manne' }},
   
  { title:'Blues Function', album:'Bluesnik', leader:'Jackie McLean', year:1961, youtubeId:'dnXB_FR00JA',
    personnel:{ alto_sax:'Jackie McLean', trumpet:'Freddie Hubbard', piano:'Kenny Drew', bass:'Doug Watkins', drums:'Pete La Roca' }},

     { title:'Cloud Break (Up Blues)', album:'Out of the Storm', leader:'Ed Thigpen', year:1966, youtubeId:'vX1QYI7FHGI',
    personnel:{ trumpet:'Clark Terry', guitar:'Kenny Burrell', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Ed Thigpen' }},

  { title:'Cielito Lindo', album:'Out of the Storm', leader:'Ed Thigpen', year:1966, youtubeId:'MAleo5rgnXk',
    personnel:{ trumpet:'Clark Terry', guitar:'Kenny Burrell', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Ed Thigpen' }},

     { title:'Air Raid', album:'Evolution', leader:'Grachan Moncur III', year:1963, youtubeId:'UOhhx96udUY',
    personnel:{ trombone:'Grachan Moncur III', trumpet:'Lee Morgan', alto_sax:'Jackie McLean', vibraphone:'Bobby Hutcherson', bass:'Bob Cranshaw', drums:'Tony Williams' }},

    { title:'The Coaster', album:'Evolution', leader:'Grachan Moncur III', year:1963, youtubeId:'3aKRxgXppQ8',
    personnel:{ trombone:'Grachan Moncur III', trumpet:'Lee Morgan', alto_sax:'Jackie McLean', vibraphone:'Bobby Hutcherson', bass:'Bob Cranshaw', drums:'Tony Williams' }},

     { title:'Fuchsia Swing Song', album:'Fuchsia Swing Song', leader:'Sam Rivers', year:1964, youtubeId:'bCpuaVe_pOU',
    personnel:{ tenor_sax:'Sam Rivers', piano:'Jaki Byard', bass:'Ron Carter', drums:'Tony Williams' }},

  { title:'Little B\'s Poem', album:'Components', leader:'Bobby Hutcherson', year:1965, youtubeId:'3X-GdYVT7Y8',
    personnel:{ vibraphone:'Bobby Hutcherson', flute:'James Spaulding', piano:'Herbie Hancock', bass:'Ron Carter', drums:'Joe Chambers' }},

  { title:'Mode for Joe', album:'Mode for Joe', leader:'Joe Henderson', year:1966, youtubeId:'sk1rT9Xsuc0',
    personnel:{ tenor_sax:'Joe Henderson', trumpet:'Lee Morgan', trombone:'Curtis Fuller', vibraphone:'Bobby Hutcherson', piano:'Cedar Walton', bass:'Ron Carter', drums:'Joe Chambers' }},

  { title:'Nomad', album:'Idle Moments', leader:'Grant Green', year:1963, youtubeId:'5jvP42Q3guw',
    personnel:{ guitar:'Grant Green', tenor_sax:'Joe Henderson', vibraphone:'Bobby Hutcherson', piano:'Duke Pearson', bass:'Bob Cranshaw', drums:'Al Harewood' }},

     { title:'De-Dah', album:'Here\'s Hope!', leader:'Elmo Hope', year:1961, youtubeId:'CPkK8c-BN0Y',
    personnel:{ piano:'Elmo Hope', bass:'Paul Chambers', drums:'Philly Joe Jones' }},

     { title:'Five Will Get You Ten', album:'A Fickle Sonance', leader:'Jackie McLean', year:1961, youtubeId:'F3ZphdNu4ng',
    personnel:{ alto_sax:'Jackie McLean', trumpet:'Tommy Turrentine', piano:'Sonny Clark', bass:'Butch Warren', drums:'Billy Higgins' }},

     { title:'Honeysuckle Rose', album:'The Ivory Hunters', leader:'Bob Brookmeyer & Bill Evans', year:1959, youtubeId:'xLdO7tYcfNQ',
    personnel:{ piano:'Bill Evans', piano:'Bob Brookmeyer', bass:'Percy Heath', drums:'Connie Kay' }},

     { title:'Focus on Sanity', album:'The Avant-Garde', leader:'John Coltrane & Don Cherry', year:1960, youtubeId:'iMEshwRb8IM',
    personnel:{ tenor_sax:'John Coltrane', cornet:'Don Cherry', bass:'Percy Heath', drums:'Ed Blackwell' }},

  { title:'The Blessing', album:'The Avant-Garde', leader:'John Coltrane & Don Cherry', year:1960, youtubeId:'_9wyp3wQQ1Q',
    personnel:{ soprano_sax:'John Coltrane', cornet:'Don Cherry', bass:'Charlie Haden', drums:'Ed Blackwell' }},

     { title:'Angola', album:'The Soothsayer', leader:'Wayne Shorter', year:1965, youtubeId:'IbE3jlLhJL8',
    personnel:{ tenor_sax:'Wayne Shorter', trumpet:'Freddie Hubbard', alto_sax:'James Spaulding', piano:'McCoy Tyner', bass:'Ron Carter', drums:'Tony Williams' }},

     { title:"The Party's Over", album:'Blossom Dearie Sings Comden and Green', leader:'Blossom Dearie', year:1959, youtubeId:'jFfwUHR2guY',
    personnel:{ voice:'Blossom Dearie', piano:'Blossom Dearie', guitar:'Kenny Burrell', bass:'Ray Brown', drums:'Ed Thigpen' }},

     { title:'Lady Sings the Blues', album:'Herbie Nichols Trio', leader:'Herbie Nichols', year:1955, youtubeId:'de4vD4HiATI',
    personnel:{ piano:'Herbie Nichols', bass:'Al McKibbon', drums:'Max Roach' }},

     { title:'Brownie Speaks', album:'Memorial Album', leader:'Clifford Brown', year:1953, youtubeId:'ypn41_AkOjA',
    personnel:{ trumpet:'Clifford Brown', alto_sax:'Lou Donaldson', piano:'Elmo Hope', bass:'Percy Heath', drums:'Philly Joe Jones' }},

     { title:'Bachianas Brasileiras', album:'The Sheriff', leader:'Modern Jazz Quartet', year:1963, youtubeId:'hZQTjRJdvig',
    personnel:{ vibraphone:'Milt Jackson', piano:'John Lewis', bass:'Percy Heath', drums:'Connie Kay' }},

     { title:'Brownie Speaks', album:'Maggie\'s Back in Town!!', leader:'Howard McGhee', year:1961, youtubeId:'DWlzL934FpA',
    personnel:{ trumpet:'Howard McGhee', piano:'Phineas Newborn Jr.', bass:'Leroy Vinnegar', drums:'Shelly Manne' }},

     { title:'245', album:'Outward Bound', leader:'Eric Dolphy', year:1960, youtubeId:'FchfzTHD-6Y',
    personnel:{ alto_sax:'Eric Dolphy', trumpet:'Freddie Hubbard', piano:'Jaki Byard', bass:'George Tucker', drums:'Roy Haynes' }},

     { title:'Reflection', album:'We Three', leader:'Roy Haynes/Phineas Newborn Jr./Paul Chambers', year:1958, youtubeId:'LdYr1WCuIKw',
    personnel:{ piano:'Phineas Newborn Jr.', bass:'Paul Chambers', drums:'Roy Haynes' }},

  { title:'Sugar Ray', album:'We Three', leader:'Roy Haynes/Phineas Newborn Jr./Paul Chambers', year:1958, youtubeId:'rdQl9e6RSjk',
    personnel:{ piano:'Phineas Newborn Jr.', bass:'Paul Chambers', drums:'Roy Haynes' }},

     { title:"Mama 'G'", album:'Kelly Great', leader:'Wynton Kelly', year:1959, youtubeId:'bY0kK3Pl638',
    personnel:{ piano:'Wynton Kelly', trumpet:'Lee Morgan', tenor_sax:'Wayne Shorter', bass:'Paul Chambers', drums:'Philly Joe Jones' }},

     { title:'Third Plane', album:'Third Plane', leader:'Ron Carter/Herbie Hancock/Tony Williams', year:1977, youtubeId:'9hKFkCtiFZs',
    personnel:{ bass:'Ron Carter', piano:'Herbie Hancock', drums:'Tony Williams' }},

     { title:'Slippery', album:'Something for Lester', leader:'Ray Brown', year:1977, youtubeId:'ktdpsWc_5qo',
    personnel:{ bass:'Ray Brown', piano:'Cedar Walton', drums:'Elvin Jones' }},

     { title:'To My Wife', album:'Here\'s Jaki', leader:'Jaki Byard', year:1961, youtubeId:'ztyJwsOL_AI',
    personnel:{ piano:'Jaki Byard', bass:'Ron Carter', drums:'Roy Haynes' }},

     { title:'Ecaroh', album:'Horace Silver Trio', leader:'Horace Silver', year:1952, youtubeId:'Wn3VIgRJT2w',
    personnel:{ piano:'Horace Silver', bass:'Curley Russell', drums:'Art Blakey' }},

     { title:"Relaxin' at Camarillo", album:'Overseas', leader:'Tommy Flanagan', year:1957, youtubeId:'tL8MU_G5iDo',
    personnel:{ piano:'Tommy Flanagan', bass:'Wilbur Little', drums:'Elvin Jones' }},

  { title:'Skål Brothers', album:'Overseas', leader:'Tommy Flanagan', year:1957, youtubeId:'IQFrDT8-bfs',
    personnel:{ piano:'Tommy Flanagan', bass:'Wilbur Little', drums:'Elvin Jones' }},

     { title:'Eclypso', album:'The Cats', leader:'Tommy Flanagan', year:1957, youtubeId:'GMiMxsLhozA',
    personnel:{ piano:'Tommy Flanagan', tenor_sax:'John Coltrane', trumpet:'Idrees Sulieman', guitar:'Kenny Burrell', bass:'Doug Watkins', drums:'Louis Hayes' }},

  { title:'Raggedy Ann', album:'Take Twelve', leader:'Lee Morgan', year:1962, youtubeId:'z7k3WFRkMIc',
    personnel:{ trumpet:'Lee Morgan', tenor_sax:'Clifford Jordan', piano:'Barry Harris', bass:'Bob Cranshaw', drums:'Louis Hayes' }},

     { title:'Wives and Lovers', album:'Solid', leader:'Grant Green', year:1964, youtubeId:'wHfCVbBRvRo',
    personnel:{ guitar:'Grant Green', piano:'McCoy Tyner', bass:'Bob Cranshaw', drums:'Elvin Jones' }},

     { title:'Head Start', album:'Happenings', leader:'Bobby Hutcherson', year:1966, youtubeId:'ZTWm3OMDBkc',
    personnel:{ vibraphone:'Bobby Hutcherson', piano:'Herbie Hancock', bass:'Bob Cranshaw', drums:'Joe Chambers' }},

     { title:'Alone Together', album:'Easy Walker', leader:'Stanley Turrentine', year:1968, youtubeId:'UJ79inGG0UI',
    personnel:{ tenor_sax:'Stanley Turrentine', piano:'McCoy Tyner', bass:'Bob Cranshaw', drums:'Mickey Roker' }},

     { title:"Monk's Blues", album:'Live at Newport', leader:'McCoy Tyner', year:1963, youtubeId:'21Hobs7xxhs',
    personnel:{ piano:'McCoy Tyner', bass:'Bob Cranshaw', drums:'Mickey Roker' }},

   

   
]; /* end songs */
