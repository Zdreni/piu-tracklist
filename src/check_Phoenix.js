"use strict";


//import { CheckInitialTracklistOfNewMix } from './check.js';


export const checkPhoenixTable = {

// verified according to https://www.youtube.com/watch?v=kbqvvlw9ED4,
// track order is sorted as in "all tunes"
// also differences recorded by https://www.youtube.com/@NEVSISTER/videos


// 1st ~ Zero:

"0B__Dignity__FULL":  "S15 S19  D18 D22",
"0A__Dignity":  "S4 S6 S15 S17 S21 S22  D17 D20 D24 D26",
"05__Slam":  "S5 S7 S9 S18 S20  D9 D22 D24",
"01__Another_Truth":  "S4 S6 S8 S16  D9 D18 D19 D21  CoOp(x2)",
"0C__Beat_of_the_War_2":  "S4 S5 S7 S11 S17 S21  D15 D20",
"0C__Moonlight":  "S4 S8 S11 S18 S19  D12 D20 D21",
"0C__Witch_Doctor":  "S4 S6 S11 S17 S19 S21  D19 D22 D23",
"0C__Love_is_a_Danger_Zone_2":  "S4 S7 S11 S15 S22  D18 D24",
"0C__Phantom":  "S2 S7 S13 S18 S19  D15 D19 D21",
"0C__Papa_Gonzales":  "S4 S6 S8 S16 S22  D19 D24",
"0C__Jump":  "S4 S7 S12 S16  D18",
"0C__Love_is_a_Danger_Zone_try_to_B_P_M":  "S16 S21  D17 D23",
"0C__Love_is_a_Danger_Zone_2_DnG":  "S17 S18  CoOp(x2)",
"0B__J_Bong":  "S3 S5 S7 S8 S15  D17",
"0B__Hi_Bi":  "S5 S8 S16 S19  D11 D20 D21",
"0B__Solitary_2":  "S4 S8 S9 S18  D20 D21",
"0B__Canon_D":  "S3 S7 S11 S17 S20 S21  D12 D17 D23  CoOp(x2)",
"0B__Tream_Vook_of_the_War":  "S14 S19  D17 D22",
"0B__Banya_Classic_Remix":  "S13 S19  D15 D21",
"0B__BanYa_HipHop_Remix":  "S6 S8  D21",
"0B__Canon_D__FULL":  "S15 S17  D23 D24",
"0A__Final_Audition_3_U_F":  "S2 S5 S8 S9 S16 S17  D18 D19",
"0A__Naissance_2":  "S9 S15  D16 D20",
"0A__Monkey_Fingers":  "S4 S6 S10 S15  D17",
"0A__Blazing":  "S4 S7 S9 S17 S20  D21",
"0A__Pump_Me_Amadeus":  "S3 S6 S13 S18  D15 D19 D21 D24",
"0A__X_Treme":  "S5 S8 S12 S15 S18  D15 D20",
"0A__Get_Up":  "S5 S10 S15 S21  D15 D19 D23",
"08__Bee":  "S7 S10 S12 S17 S19  D15 D20 D23 D24",
"08__D_Gang":  "S5 S6 S11 S18  D9 D15 D18",
"08__Hello":  "S11 S17  D18",
"08__Beat_of_the_War":  "S3 S6 S9 S16 S18 S21  D20 D24",
"08__Come_to_Me":  "S4 S6 S11 S13 S17  D14 D15",
"07__Dr_M":  "S3 S6 S9 S10 S14 S16  D14 D18",
"07__Emperor":  "S2 S8 S12 S16  D17  CoOp(x2)",
"07__Get_Your_Groove_On":  "S4 S7 S12  D10 D22",
"07__Love_is_a_Danger_Zone":  "S4 S8 S11 S17 S19  D11 D17 D21  CoOp(x2)",
"07__Maria":  "S7 S12 S16 S18  D16 D21",
"07__Mission_Possible":  "S5 S7 S19",
"07__My_Way":  "S4 S6 S8 S15  D16 D18",
"07__Point_Break":  "S3 S6 S8 S13  D7 D14",
"07__Street_Show_Down":  "S8 S11 S16  D16 D19",
"07__Top_City":  "S4 S6 S13 S20  D9 D21",
"07__Winter":  "S4 S7 S12 S16 S20  D14 D17 D21",
"07__Will_o_the_Wisp":  "S2 S5 S13 S16 S19  D14 D16 D20 D21 D25",
"07__Till_the_End_of_Time":  "S3 S4 S11 S13 S17  D10 D13 D16",
"07__Oy_Oy_Oy":  "S4 S8 S9 S14  D13",
"07__We_Will_Meet_Again":  "S4 S9 S13  D11",
"07__Miss_s_Story":  "S7 S19  D19",
"07__Set_Me_Up":  "S2 S4 S6 S10 S14  D17",
"07__Dance_With_Me":  "S2 S4 S6 S15  D15 D18",
"07__Vook":  "S3 S7 S10 S16 S18 S20  D15 D20 D21",
"07__Csikos_Post":  "S4 S7 S8 S12 S15  D12 D16 D22  CoOp(x2)",
"09__Chicken_Wing":  "S4 S6 S9 S11 S17 S20 S21  D18 D22",
"09__Can_Can":  "S7 S12 S16 S20  D18 D22",
"09__Final_Audition_ep_1":  "S4 S8 S9 S13 S17 S21  D15 D22 D23",
"0E__Extra_BanYa_Remix":  "S12 S21  D15",
"05__Pump_Jump":  "S5 S15  D18",
"05__N":  "S5 S16  D16",
"05__Rolling_Christmas":  "S3 S5 S8 S12 S17  D5 D13 D16 D22  CoOp(x2)",
"05__All_I_Want_For_Xmas":  "S3 S5 S9  D8",
"05__Beethoven_Virus":  "S4 S6 S7 S12 S16 S17 S21  D13 D18 D21 D24  CoOp(x2)",
"04__Oh_Rosa":  "S9 S14  D11  CoOp(x2)",
"04__First_Love":  "S6 S12  D15",
"04__Betrayer":  "S1 S5 S9 S13 S16  D13 D17",
"04__Solitary":  "S2 S4 S6 S8 S11 S17 S18  D10 D17",
"04__Mr_Larpus":  "S3 S5 S13 S15 S20 S22  D16 D18 D22 D23",
"03__Final_Audition_2":  "S4 S7 S10 S12 S18  D12 D18 D20",
"03__Naissance":  "S5 S8 S12 S20  D12 D16",
"03__Turkey_March":  "S3 S7 S12 S17 S19  D13 D18 D21  CoOp(x2)",
"03__With_My_Lover":  "S5 S12  D14 D18",
"03__An_Interesting_View":  "S6 S13",
"03__Nightmare":  "S3 S6  D14",
"03__Close_Your_Eyes":  "S6",
"03__Free_Style":  "S5 S9 S13  D15",
"03__Midnight_Blue":  "S12  D13",
"03__She_Likes_Pizza":  "S9 S10 S21  D11 D18 D23",
"03__Pumping_Up":  "S5 S10 S13  D15",
"02__Final_Audition":  "S2 S7 S10 S18 S19  D17 D19",
"02__Extravaganza":  "S4 S8 S11 S13 S19 S22  D15 D18 D21",
"02__Repeatorment_Remix":  "S18  D22",


// NX ~ NXA:

"0F__Blaze_Emotion":  "S2 S3 S6 S7 S9 S16 S17  D11 D18 D19",
"0F__Cannon_X_1":  "S3 S7 S13 S20 S21  D15 D22",
"0F__Chopsticks_Challenge":  "S6 S12 S17  D16",
"0F__The_People_Didnt_Know":  "S3 S5 S12 S16  D8 D17  CoOp(x2)",
"0F__DJ_Otada":  "S4 S7 S10 S17 S19  D14 D20 D22",
"0F__K_O_A_Alice_in_Wonderworld":  "S1 S3 S5 S10 S17  D14 D19",
"0F__My_Dreams":  "S4 S10 S18 S19  D19 D22",
"0F__Toccata":  "S4 S7 S11 S17  D15 D18",
"0F__Final_Audition_ep_2_X":  "S3 S5 S9 S17 S23  D21 D24",
"0F__The_People_Didnt_Know_Pumping_Up":  "S8  D6 D18",
"0F__Ugly_Duck_Toccata":  "S17  D18",
"0F__Caprice_of_DJ_Otada":  "S12 S21  D22 D25",
"0F__Dr_KOA":  "S12 S18  D20",
"0F__Turkey_Virus":  "S15  D14",
"0F__Chopsticks_Challenge__FULL":  "S17  D20",
"0E__Pumptris_8bit":  "S3 S5 S8 S17 S18  CoOp(x2)",
"0E__Solitary_1_5":  "S7 S16  D18",
"0E__Beat_the_Ghost":  "S4 S11 S18 S20  D20",
"0E__Caprice_of_Otada":  "S4 S6 S8 S17 S19  D11 D19 D22",
"0E__Money":  "S9 S14  D17",
"0E__Monkey_Fingers_2":  "S4 S8 S17  D8 D19",
"0E__Faster_Z":  "S4 S7 S12 S13 S16 S19 S21  D15 D21 D23",
"0E__Pumptris_Quattro":  "S3 S7 S13 S18 S20  D15 D20 D22",
"0E__Guitar_Man":  "S3 S7 S13 S20  D19",
"0E__Higgledy_Piggledy":  "S2 S6 S9 S15 S16 S19  D8 D16 D20",
"0E__Jam_o_Beat":  "S7 S16  D15",
"0E__BanYa_P_Guitar_Remix":  "S22  D24",
"0E__Money_Fingers":  "S10 S17  D14 D19",
"0D__Witch_Doctor_1":  "S2 S5 S8 S9 S17 S18 S19  D17 D20 D21",
"0D__Arch_of_Darkness":  "S2 S5 S15 S17  D18",
"0D__Chimera":  "S4 S9 S13 S18 S19 S23  D18 D22 D26  CoOp(x2)",
"0D__2006_Love_Song":  "S3 S9 S12 S15  D14",
"0D__Do_U_Know_That_Old_School":  "S4 S6 S17  D20",
"0D__Gun_Rock":  "S5 S9 S17 S20  D9 D18 D24",
"0D__Bullfighters_Song":  "S4 S5 S11 S15 S17  D12 D18 D21",
"0D__Ugly_Dee":  "S3 S5 S10 S17  D17 D18",
"0D__Final_Audition_ep_2_1":  "S3 S4 S8 S19 S21 S22  D12 D22 D23",
"0D__Final_Audition_ep_2_2":  "S8 S17 S18 S21 S22  D19 D23 D24",
"0D__Wi_Ex_Doc_Va":  "S17 S21  D17 D24",
"0D__Bemera":  "S17 S24  D18 D26",
"0D__Banya_P_Classic_Remix":  "S15 S21  D16 D22",
"0D__Love_is_a_Danger_Zone_2__FULL":  "S20  D21",
"0D__Beat_of_the_War_2__FULL":  "S21  D21",


// Fiesta ~ Fiesta 2:

"13__Elise":  "S4 S7 S11 S16 S18 S21  D12 D17 D23  CoOp(x2)",
"13__Ignis_Fatuus":  "S12 S16 S19 S22  D17 D18 D23 D25  CoOp(x2)",
"13__Love_is_a_Danger_Zone_Cranky_Mix":  "S7 S14 S17 S20 S21  D11 D16 D20 D23  CoOp(x2)",
"13__Hypnosis_SynthWulf_Mix":  "S11 S13 S17 S20  D14 D15 D19 D22",
"13__Flew_Far_Faster":  "S13 S18 S22  D15 D22 D24  CoOp(x3)",
"13__Unique":  "S3 S6 S10 S14 S16  D12 D16 D18",
"13__Accident":  "S4 S7 S13 S18  D13 D20",
"13__D":  "S4 S7 S11 S18  D14 D19 D20",
"13__U_Got_Me_Rocking":  "S3 S6 S9 S17 S18  D5 D17",
"13__Lucid":  "S4 S7 S13 S16 S19  D14 D20 D23  CoOp(x2)",
"13__Log_In":  "S5 S7 S10 S18 S20  D12 D19",
"13__Windmill":  "S8 S13 S17 S21  D14 D18 D23  CoOp(x2)",
"13__Follow_Me":  "S4 S6 S9 S14 S17  D10 D17  CoOp(x2)",
"13__Yeo_Rae_A":  "S1 S3 S5 S8 S13  D7 D10",
"13__Mental_Rider":  "S13 S16 S21  D15 D20 D22 D24  CoOp(x4)",
"13__What_Are_You_Doin":  "S18  D23",
"13__Ignis_Fatuus__SHORT":  "S21  D21",
"13__Flew_Far_Faster__SHORT":  "S18  D21",
"12__Unique__SHORT":  "S18  D16",
"12__U_Got_Me_Rocking__SHORT":  "S17  D17",
"11__Cleaner":  "S4 S7 S13 S17 S21 S23  D20 D25 D26",
"11__Interference":  "S12 S18  D13 D19 D22",
"11__Reality":  "S4 S6 S9 S15 S17  D6 D15",
"11__Take_Out":  "S4 S7 S11 S17 S20  D13 D19 D22 D23  CoOp(x3)",
"11__Butterfly":  "S4 S6 S9 S13 S16  D8 D17",
"11__Overblow":  "S4 S7 S10 S16 S18 S20  D12 D18 D19  CoOp(x2)",
"11__We_Got_2_Know":  "S1 S5 S9 S17  D7 D18  CoOp(x3)",
"11__Hungarian_Dance_V":  "S4 S6 S9 S17 S18  D11 D17 D21",
"11__The_Devil":  "S4 S6 S9 S12 S19  D15 D20  CoOp(x2)",
"11__Native":  "S3 S5 S10 S17 S20  D11 D18",
"11__Vacuum_Cleaner":  "S16 S20 S25  D20 D26",
"11__Everybody_Got_2_Know":  "S21  D19",
"11__Interference__FULL":  "S19  D16 D18",
"11__Trotpris__SHORT":  "S14  D15",
"11__Cleaner__SHORT":  "S21  D22",
"11__Take_Out__SHORT":  "S18  D19",
"11__Overblow__SHORT":  "S18  D17",
"11__Night_Duty":  "S3 S6 S9 S14 S17 S20  D8 D15 D21",
"11__Pavane":  "S3 S6 S10 S17  D17 D22",
"11__Pine_Nut":  "S15 S20  D17 D23",
"11__ASDF":  "S9 S17  D10 D17",
"11__Jonathans_Dream":  "S4 S6 S8 S16 S18  D13 D15 D19",
"10__X_Tree":  "S2 S9 S14 S20  D16 D20 D22",
"10__Sorceress_Elise":  "S4 S6 S8 S10 S17 S18 S21 S23  D13 D18 D24  CoOp(x2)",
"10__Betrayer_Act_2":  "S4 S6 S12  D15",
"10__U_Got_2_Know":  "S2 S7 S8 S17 S19 S20  D18",
"10__Destination":  "S4 S7 S13 S17 S19 S20  D15 D20",
"10__Vacuum":  "S19 S21 S23  D21 D25",
"10__Do_It_Reggae_Style":  "S13  D16",
"10__Xenesis":  "S4 S7 S11 S18  D13 D15 D18",
"10__Arirang":  "S13 S19 S22  D15 D22",
"10__Tek_Club_Copenhagen":  "S3 S5 S17 S18  D17",
"10__Hello_William":  "S4 S6 S10 S17 S19  D12 D20",
"10__Turkey_March_Minimal_Tunes":  "S3 S6 S10 S17  D13 D18",
"10__Get_Up_and_Go":  "S4 S7 S11 S17  D12 D19",
"10__Phantom_Intermezzo":  "S3 S7 S12 S16 S19 S22  D17 D19 D21",
"10__Mission_Possible_Blowback":  "S19  D19 D21",
"10__Pumping_Jumping":  "S2 S4 S6 S14 S16 S17 S19  D9 D18",
"10__B_P_Classic_Remix":  "S14 S18  D15 D19",
"10__PaPa_Helloizing":  "S10 S19",
"10__B_P_Classic_Remix_2":  "S13 S18",
"10__Set_Up_Me2_Mix":  "S18",
"10__msgoon_RMX_pt_6":  "S21  D21",
"10__Final_Audition_2__SHORT":  "S17  D19",
"10__Final_Audition_3_U_F__SHORT":  "S18  D18",
"10__Final_Audition_ep_2_X__SHORT":  "S20  D20",
"10__Love_is_a_Danger_Zone__SHORT":  "S13 S20  D18",
"10__Love_is_a_Danger_Zone_2__SHORT":  "S9 S19  D23",
"10__Extravaganza__SHORT":  "S16  D16 D23",
"10__Chicken_Wing__SHORT":  "S20  D15",
"10__Winter__SHORT":  "S6 S11 S16  D13 D17",
"10__Solitary_2__SHORT":  "S18  D18",
"10__Moonlight__SHORT":  "S15 S19  D20",
"10__Witch_Doctor__SHORT":  "S14 S20  D17",
"10__Exceed2_Opening__SHORT":  "S16  D18",
"10__NX_Opening__SHORT":  "S16  D18",
"10__K_O_A_Alice_In_Wonderworld__SHORT":  "S9 S16  D18",
"10__Bemera__SHORT":  "S15 S21 S22  D19",
"10__Pumptris_8bit__SHORT":  "S8 S16  D22",
"10__Destination__SHORT":  "S11 S15  D20 D21",
"10__Tepris":  "S2 S4 S7 S17  D11 D20  CoOp(x2)",
"10__Napalm":  "S15 S19 S21  D16 D22",
"12__Dream_to_Nightmare":  "S19 S21  D22 D23",
"12__VVV":  "S18 S23  D17 D19",
"13__Pop_the_Track":  "S2 S4 S7 S10 S16 S18  D11 D18 D20  CoOp(x2)",
"13__Passacaglia":  "S4 S8 S12 S17 S19  D14 D18 D22 D23",
"13__Baroque_Virus":  "S5 S10 S17  D13 D18 D20",
"13__Infinity_RMX":  "S19  D19",
"13__Pop_The_Track__SHORT":  "S18  D16",
"13__Passacaglia__SHORT":  "S17  D18",
"12__Monolith":  "S3 S5 S9 S15 S21  D14 D17 D22",
"12__Ladybug":  "S1 S3 S5 S14  D14  CoOp(x2)",
"16__Kitty_Cat":  "S1 S3 S5 S14  D6 D15  CoOp(x2)",
"12__Hardkore_of_the_North":  "S4 S7 S12 S18 S22  D15 D22",
"12__Tribe_Attacker":  "S4 S5 S9 S17  D10 D17  CoOp(x4)",
"12__Utopia":  "S4 S7 S10 S17  D13 D18",
"12__Xuxa":  "S3 S5 S10 S14  D12 D17  CoOp(x2)",
"12__Star_Command":  "S3 S5 S13 S15 S19  D15 D22 D23",
"11__What_Happened":  "S3 S7 S12 S17 S21  D20 D23",
"11__Gargoyle":  "S4 S7 S11 S18 S22  D14 D20 D23",
"11__Allegro_Con_Fuoco":  "S5 S7 S10 S17 S22  D11 D18 D23",
"11__X_Rave":  "S3 S6 S9 S17  D13 D21",
"11__Smells_Like_a_Chocolate":  "S3 S6 S9 S16  D12 D17",
"11__Necromancy":  "S4 S7 S10 S18 S20  D15 D19 D23",
"11__X_Rave__SHORT":  "S16  D18",


// Prime:

"14__Nemesis":  "S4 S7 S10 S16 S18  D12 D20  CoOp(x2)",
"14__Katkoi":  "S8 S11 S14 S18  D12 D15 D19",
"14__Latino_Virus":  "S3 S7 S9 S17  D13 D19  CoOp(x2)",
"14__Elysium":  "S4 S9 S14  D10 D15",
"14__Yog_Sothoth":  "S9 S16 S17 S21 S23  D18 D24 D25  CoOp(x3)",
"14__Silhouette_Effect":  "S4 S7 S10 S18  D13 D20  CoOp(x2)",
"14__Chinese_Restaurant":  "S4 S7 S10 S16 S18  D11 D19  CoOp(x3)",
"14__Avalanche":  "S4 S7 S11 S16 S19 S22  D13 D19 D20 D25  CoOp(x3)",
"14__Force_of_Ra":  "S8 S12 S17 S19  D12 D20",
"14__Requiem":  "S4 S7 S12 S16 S19  D10 D18 D23",
"14__You_Got_Me_Crazy":  "S4 S6 S10 S17 S18  D5 D18",
"14__B2":  "S4 S7 S10 S16 S18  D13 D19",
"14__Meteorize":  "S3 S5 S10 S16 S18  D9 D17 D19",
"14__Mad5cience":  "S5 S15 S20  D9 D16",
"14__Hestia":  "S4 S7 S10 S19  D12 D21",
"14__Amphitryon":  "S4 S7 S11 S18  D13 D21",
"14__Leakage_Voltage":  "S12 S15 S17 S21  D14 D18 D23",
"14__Removable_Disk0":  "S3 S6 S9 S15  D6 D16  CoOp(x2)",
"14__Super_Fantasy":  "S4 S7 S10 S14 S16 S19 S20  D12 D18 D22  CoOp(x2)",
"14__Violet_Perfume":  "S4 S6 S8 S13 S17  D12 D14 D18  CoOp(x2)",
"14__Red_Swan":  "S4 S7 S9 S18  D12 D20 D22  CoOp(x2)",
"14__Hyacinth":  "S5 S10 S14 S18 S22  D13 D20 D24",
"14__Blaze_Emotion_Band_version":  "S2 S9 S17  D5 D18",
"14__1950":  "S16 S20 S23 S25  D22 D25 D27",
"14__Sugar_Conspiracy_Theory":  "S1 S3 S6 S10 S14 S18 S19  D7 D11 D16 D20  CoOp(x2)",
"14__Allegro_Piu_Mosso":  "S4 S6 S10 S17 S19  D12 D19",
"14__Annihilator_Method":  "S7 S11 S16 S19 S23  D15 D20 D24",
"14__Move_That_Body":  "S3 S5 S10 S12 S17 S20  D12 D18",
"14__Scorpion_King":  "S3 S5 S8 S15 S19  D10 D16 D20 D23",
"14__Point_Zero_One":  "S10 S16 S20  D11 D17 D22",
"14__Red_Snow":  "S7 S11 S16 S19  D13 D18 D21 D22  CoOp(x2)",
"14__Campanella":  "S4 S6 S10 S16  D12 D17  CoOp(x2)",  // CoOp(x2).new
"14__You_again_my_love":  "S1 S3 S6 S14  D6 D15  CoOp(x2)",
"14__Robot_Battle":  "S9 S14 S19 S22  D14 D19 D24",
"14__Reminiscence":  "S3 S6 S10 S16 S18  D11 D17 D20  CoOp(x2)",
"14__Moment_Day":  "S3 S6 S10 S15 S17 S18  D11 D16 D18  CoOp(x2)",
"14__Break_It_Down":  "S7 S14 S16  D5 D13 D17 D21",
"14__Hypercube":  "S6 S10 S15 S17  D11 D15 D19",
"14__Like_Me":  "S6 S10 S14 S19  D13 D20  CoOp(x2)",
"14__Beethoven_Influenza":  "S18 S21  D20",
"14__Avalanquiem":  "S20 S23  D25",
"14__Paradoxx":  "S21 S23 S26  D25 D28",
"14__Move_That_Body__FULL":  "S18  D19",
"14__Super_Fantasy__SHORT":  "S19  D17",
"14__Yog_Sothoth__SHORT":  "S14 S18 S21  D16 D21",
"14__Silhouette_Effect__SHORT":  "S18  D17",
"14__Move_That_Body__SHORT":  "S17  D18",
"14__Prime_Opening__SHORT":  "S15  D15  CoOp(x5)",
"14__Rock_the_House":  "S8 S10 S16  D11 D13 D18 D22",
"14__The_Revolution":  "S7 S12 S17 S19  D12 D19 D22",
"14__Selfishness":  "S3 S6 S11 S17  D12 D18 D20",
"14__Cosmical_Rhythm":  "S4 S6 S8 S14  D11 D15 D19",
"14__Dolly_Kiss":  "S6 S14 S17  D6 D16 D21",
"14__Matador":  "S4 S7 S10 S18 S21  D7 D16 D19 D22",
"14__Milky_Way_Galaxy":  "S6 S11 S18  D13 D19",
"14__Feel_My_Happiness":  "S4 S11 S17  D6 D18 D21",
"14__Ragnarok":  "S8 S12 S16 S18 S21  D9 D13 D17",
"14__Achluoias":  "S9 S15 S17 S22 S24  D14 D17 D24 D26",
"14__Karyawisata":  "S4 S7 S10 S14 S16 S20  D7 D17 D22",
"14__video_out_c":  "S11 S14 S17 S22  D15 D23",
"14__Stardust_Overdrive":  "S4 S9 S16 S18  D5 D13 D16 D19 D23",
"14__Selfishness__SHORT":  "S17  D18",
"14__Rock_the_House__SHORT":  "S15 S18  D20",
"14__Stardust_Overdrive__SHORT":  "S16  D17",
"14__Amai_Yuuwaku_Dangerous":  "S1 S3 S6 S11 S14  D6 D10 D15",
"14__Yoropiku_Pikuyoro":  "S3 S5 S10 S15  D5 D16  CoOp(x2)",
"14__Imprinting":  "S4 S8 S11 S17 S21  D14 D16 D21 D24",
"14__Sudden_Romance":  "S4 S6 S9 S14 S19  D9 D15 D19",
"14__Mitotsudaira":  "S1 S4 S9 S15 S18  D12 D16 D19",
"14__Smile_Diary":  "S4 S7 S11 S16 S19  D9 D17 D19",
"14__Bad_Apple":  "S1 S3 S5 S9 S13 S15 S17 S19  D11 D18 D20  CoOp(x2)",
"14__Prime":  "S4 S7 S11 S16 S18 S21  D13 D16 D18 D21",
"14__Queen_of_the_Red":  "S4 S7 S12 S15 S18  D14 D16 D19",
"14__Idealized_Romance":  "S2 S4 S7 S11 S16 S18  D11 D18",
"14__Just_Hold_On":  "S4 S7 S11 S16 S21  D15 D19 D22 D25",
"14__Bad_Apple__FULL":  "S10 S14 S17  D12 D18 D22  CoOp(x4)",


// Prime 2:

"15__Chase_Me":  "S3 S5 S9 S15 S17 S20  D11 D18 D23  CoOp(x2)",
"15__Good_Night":  "S3 S6 S9 S17 S20 S23  D6 D19 D22 D24",
"15__Chase_Me__FULL":  "S19  D25",
"15__Last_Rebirth":  "S3 S5 S9 S13 S16  D8 D14 D17 D18",
"15__Super_Capriccio":  "S4 S7 S12 S16 S19  D11 D19 D23",
"15__Hellfire":  "S7 S11 S15 S18 S22  D10 D19 D23",
"15__Tritium":  "S8 S12 S17 S20  D10 D14 D19 D21",
"15__Cross_Over":  "S7 S11 S15 S18 S22  D15 D19 D23  CoOp(x2)",
"15__God_Mode":  "S4 S8 S13 S18 S20  D9 D17 D21",
"15__Shub_Niggurath":  "S12 S16 S19 S21 S24  D18 D23 D26",
"15__Further":  "S11 S16 S18 S22 S24  D14 D17 D22 D25",
"15__The_Quick_Brown_Fox":  "S11 S16 S19 S23  D16 D22 D24",
"15__Silver_Beat":  "S13 S16 S18  D8 D13 D18",
"15__Bring_Back_the_Beat":  "S7 S12 S17 S19  D9 D19",
"15__Break_Out":  "S4 S8 S12 S16 S19  D12 D18 D20",
"15__Sarabande":  "S2 S4 S7 S12 S16 S19 S20  D11 D18 D21 D24  CoOp(x2)",
"15__Kasou_Shinja":  "S4 S7 S9 S16 S18 S21  D12 D19 D24  CoOp(x2)",
"15__Overblow2":  "S5 S10 S15 S18  D8 D15 D19",
"15__Passing_Rider":  "S8 S12 S16 S19  D10 D20",
"15__Arcana_Force":  "S4 S9 S16 S20  D10 D17 D20",
"15__Allegro_Furioso":  "S6 S11 S14 S18 S20  D15 D20  CoOp(x3)",
"15__Anguished_Unmaking":  "S3 S5 S8 S15 S18  D10 D19 D22",
"15__Utsushiyo_No_Kaze":  "S7 S11 S17 S20  D11 D18 D20",
"15__Hey_U":  "S3 S5 S10 S15  D10 D16",
"15__Twist_of_Fate":  "S4 S6 S10 S16 S19  D10 D17 D21  CoOp(x2)",
"15__HTTP":  "S2 S4 S7 S14 S17 S21  D11 D13 D19 D24  CoOp(x2)",
"15__Up_n_Up":  "S3 S5 S8 S17  D10 D18 D21",
"15__Travel_to_Future":  "S3 S7 S11 S17 S19  D13 D18 D21 D23",
"15__Rave_til_the_Earth_End":  "S4 S7 S15 S17 S19  D14 D18 D20",
"15__Awakening":  "S7 S10 S14 S16 S19  D9 D13 D17 D20  CoOp(x2)",
"15__Escape":  "S15 S18 S21 S24  D19 D22 D26",
"15__Waltz_of_Doge":  "S8 S11 S14 S17 S19  D12 D18 D20  CoOp(x2)",
"15__Heart_Attack":  "S7 S11 S16 S18  D10 D18 D21",
"15__Vulcan":  "S19 S22  D24",
"15__Shub_Sothoth":  "S25  D27",
"15__Leather":  "S18 S21 S24  D22 D26",
"15__Sarabande__SHORT":  "S10 S17 S19  D19",
"15__Prime2_Opening__SHORT":  "S7 S12 S17  D19",
"15__Shub_Niggurath__SHORT":  "S18 S21  D23",
"15__Kasou_Shinja__SHORT":  "S20  D21",
"15__Step":  "S7 S13 S17  D12 D18 D20",
"15__Nakakapagpabagabag":  "S11 S15 S19  D16 D20  CoOp(x2)",
"15__Hush":  "S3 S5 S8 S15  D7 D15",
"15__Fallen_Angel":  "S6 S11 S17 S19  D11 D16 D20",
"15__Gargoyle__FULL":  "S21 S23  D22 D25  CoOp(x2)",
"15__Hush__FULL":  "S15  D16",
"15__V3":  "S6 S9 S14 S17  D10 D18 D21 D24",
"15__Cross_Time":  "S3 S7 S12 S16 S18  D11 D17 D20 D22",
"15__The_Festival_of_Ghost2":  "S11 S16 S18 S20  D11 D17 D20",
"15__Helix":  "S5 S7 S11 S16 S18 S19  D12 D16 D19",
"15__Hyperion":  "S4 S9 S14 S17  D11 D18 D20",
"15__Black_Dragon":  "S4 S8 S11 S17 S21  D12 D17 D19",
"15__BSPower_Explosion":  "S8 S12 S16 S19 S21  D13 D20 D23  CoOp(x2)",
"15__Start_On_Red":  "S4 S8 S11 S16 S19  D13 D19 D20",
"15__Time_Attack_Blue":  "S8 S15 S18  D10 D16 D20",
"15__Magical_Vacation":  "S6 S11 S16 S18  D7 D13 D18  CoOp(x2)",
"15__Visual_Dream_II":  "S5 S8 S16 S18  D11 D19",
"15__Death_Moon":  "S3 S6 S12 S14 S17 S19  D7 D17 D21  CoOp(x2)",
"15__Super_Stylin":  "S6 S8 S11 S17  D10 D12 D17 D21",
"15__Christmas_Memories":  "S3 S5 S8 S14  D9 D15  CoOp(x2)",
"15__Keep_On":  "S6 S13 S15 S18 S21  D13 D17 D20 D21",
"15__Asterios_ReEntry":  "S4 S6 S10 S14 S17 S19  D8 D18 D22  CoOp(x2)",
"15__Le_Grand_Bleu":  "S7 S12 S16 S18 S20  D10 D18 D20",
"15__Infinity":  "S10 S15 S18 S21  D10 D19 D23  CoOp(x3)",
"15__Gothique_Resonance":  "S8 S11 S18 S21  D13 D21",
"15__Bedlam":  "S8 S15 S18 S22  D15 D20 D24  CoOp(x2)",
"15__A_Site_De_La_Rue":  "S9 S11 S16 S19  D14 D19 D24",
"15__Clue":  "S4 S8 S12 S16 S18  D12 D18 D20 D21",
"15__Redline":  "S5 S11 S16 S18  D16 D19 D20 D22  CoOp(x3)",
"15__Kill_Them":  "S5 S10 S15 S18  D10 D19",
"15__Donatello":  "S13 S17 S22  D18 D22",
"15__Death_Moon__SHORT":  "S9 S16 S19 S22  D19 D23",
"15__Hyperion__SHORT":  "S16 S20  D21",


// XX:

"16__Jogging":  "S3 S5 S9 S16 S18  D7 D16 D18 D22",
"16__Full_Moon":  "S2 S4 S6 S16 S20 S22  D14 D20 D24  CoOp(x2)",
"16__Timing":  "S2 S4 S7 S15 S18  D11 D16 D19",
"16__Fly_High":  "S1 S3 S5 S9 S15 S18 S20  D10 D16 D19 D21  CoOp(x2)",
"16__You_and_I":  "S1 S4 S7 S14 S17 S21  D14 D17 D20 D24  CoOp(x2)",
"16__Good_Night__FULL":  "S18 S21 S24  D26",
"16__Full_Moon__FULL":  "S20 S22  D24",
"16__Wedding_Crashers":  "S4 S6 S10 S16 S18 S21  D7 D13 D19 D23  CoOp(x3)",
"16__Switronic":  "S3 S5 S8 S11 S15 S17  D10 D16 D18 D22  CoOp(x2)",
"16__Obliteration":  "S7 S10 S15 S18  D10 D16 D19",
"16__Transacaglia_in_G_minor":  "S3 S6 S11 S16 S19  D7 D13 D18 D20",
"16__1949":  "S16 S21 S23  D22 D26 D28",
"16__Janus":  "S8 S12 S17 S20  D14 D19 D22  CoOp(x2)",
"16__I_Want_U":  "S3 S7 S12 S17 S20  D6 D14 D18 D22",
"16__District_1":  "S6 S10 S15 S19  D12 D17 D21  CoOp(x3)",
"16__Sugar_Plum":  "S4 S7 S11 S15 S19  D11 D17 D20  CoOp(x2)",
"16__Telling_Fortune_Flower":  "S10 S13 S17 S19 S21 S23  D13 D20 D23 D26",
"16__Nyarlathotep":  "S13 S17 S18 S21 S23  D17 D20 D23 D25",
"16__Heart_Rabbit_Coaster":  "S10 S14 S17 S21 S23  D13 D18 D22 D25  CoOp(x4)",
"16__Lepton_Strike":  "S10 S16 S19 S21  D11 D17 D21 D23",
"16__Skeptic":  "S12 S19 S22 S24  D14 D22 D25",
"16__Iolite_Sky":  "S7 S10 S16 S20 S22  D11 D18 D21 D24",
"16__Percent_X":  "S3 S6 S10 S18 S20  D9 D13 D19",
"16__La_Cinquantaine":  "S5 S9 S16 S19  D13 D17 D20",
"16__Le_Grand_Rouge":  "S8 S13 S18 S20  D19 D22",
"16__Carmen_Bus":  "S12 S16 S18 S21  D13 D20 D22",
"16__Macaron_Day":  "S4 S7 S12 S17  D13 D18  CoOp(x2)",
"16__Ice_of_Death":  "S3 S7 S11 S17 S20  D12 D17 D20  CoOp(x2)",
"16__Poseidon":  "S3 S6 S10 S15 S21  D8 D16 D22  CoOp(x2)",
"16__Adrenaline_Blaster":  "S3 S5 S8 S15 S18 S21  D12 D19 D23  CoOp(x2)",
"16__Vanish":  "S6 S12 S17 S20  D10 D13 D18 D22 D24  CoOp(x2)",
"16__Tales_of_Pumpnia":  "S9 S12 S17 S20  D14 D18 D21  CoOp(x2)",
"16__Kimchi_Fingers":  "S14 S17 S20  D17 D21  CoOp(x2)",
"16__Orbit_Stabilizer":  "S4 S13 S16 S19 S21  D18 D21 D23",
"16__Destrucimate":  "S9 S12 S16 S19 S21  D14 D19 D23",
"16__Clematis_Rapsodia":  "S11 S15 S18 S22  D13 D16 D19 D23  CoOp(x3)",
"16__Wicked_Legend":  "S10 S16 S20  D12 D18 D21",
"16__Tantanmen":  "S4 S7 S11 S14 S17 S20  D13 D20 D24  CoOp(x3)",
"16__Stardream":  "S1 S3 S6 S10 S15 S18 S21  D11 D16 D19 D22  CoOp(x2)",
"16__Can_Can_Orpheus":  "S8 S13 S16 S19 S21  D12 D15 D18 D23  CoOp(x2)",
"16__Papasito":  "S7 S13 S15 S16 S20  D11 D14 D16 D18 D19 D21  CoOp(x2)",
"16__Fires_of_Destiny":  "S6 S10 S16 S18 S20  D11 D18 D22  CoOp(x2)",
"16__The_End_of_the_World":  "S3 S5 S8 S16 S20  D7 D17 D22",
"16__Forgotten_Vampire":  "S3 S6 S8 S13 S16 S18  D5 D11 D14 D17 D20  CoOp(x2)",
"16__Harmagedon":  "S4 S6 S10 S16 S19 S22  D13 D21 D24",
"16__Repentance":  "S6 S10 S16 S19 S22  D13 D17 D20 D23 D26",
"16__The_Reverie":  "S3 S5 S8 S11 S15 S17 S19 S21  D12 D18 D22",
"16__Cygnus":  "S4 S7 S11 S17 S19 S21  D12 D18 D21 D23",
"16__Tropicanic":  "S2 S4 S7 S11 S16 S19  D6 D13 D18 D21",
"16__Paradoxx__SHORT":  "S21 S24  D26",
"16__Brown_Sky":  "S19 S21 S25  D21 D24 D26",
"16__Papasito__FULL":  "S12 S19 S22  D14 D20 D23",
"16__Desaparecer":  "S18 S20 S22  D19 D23 D25",
"16__Errorcode_0":  "S19 S23 S25  D24 D27",
"16__Meteo5cience":  "S18 S21  D18 D22",
"16__Fire_Noodle_Challenge":  "S15 S19 S23  D20 D25",
"16__Nyarlathotep__SHORT":  "S22  D24",
"16__Wedding_Crashers__SHORT":  "S4 S7 S11 S15 S18  D6 D13 D20",
"16__Can_Can_Orpheus__SHORT":  "D13 D15 D17 D19 D21 D23 D25",
"16__XX_Opening__SHORT":  "S3 S6 S11 S16  D12 D17",
"16__I_Want_U__SHORT":  "S4 S7 S11 S19  D13 D21",
"16__Poseidon__SHORT":  "S11 S14 S18 S21  D14 D21",
"16__Switronic__SHORT":  "S3 S6 S9 S14 S17  D4 D11 D17",
"16__God_Mode_2_0":  "S8 S13 S17 S21  D13 D18 D20 D22",
"16__Slapstick_Parfait":  "S3 S7 S10 S16 S19  D13 D18 D21",
"16__Paved_Garden":  "S8 S12 S16 S19 S22  D14 D18 D21 D24",
"16__Pop_Sequence":  "S5 S7 S11 S15 S21  D13 D19 D23",
"16__Crossing_Delta":  "S10 S13 S17 S20  D14 D18 D21 D23  CoOp(x2)",
"16__Club_Night":  "S9 S17 S19 S22  D12 D18 D21 D23  CoOp(x2)",
"16__Indestructible":  "S9 S12 S17 S19 S22  D15 D20 D22 D25  CoOp(x2)",
"16__8_6":  "S12 S16 S20  D18 D21  CoOp(x2)",
"16__Cross_Soul":  "S8 S17 S20 S22  D12 D18 D20 D24",
"16__Broken_Karma":  "S11 S16 S19 S21  D13 D20 D23",
"16__After_a_Thousand_Years":  "S4 S7 S12 S18 S19  D14 D20 D23",
"16__Lala":  "S1 S3 S5 S8 S14  D8 D16",
"16__F_r_iend":  "S10 S15 S19 S21 S23  D12 D17 D21 D25",
"16__Danger_n_Danger":  "S8 S12 S16 S19  D10 D14 D18 D21 D23",
"16__Nihilism_Another_Ver":  "S8 S15 S18 S21  D17 D19 D22",
"16__Phalanx_RS2018":  "S11 S15 S17 S19 S22  D13 D18 D21 D24",
"16__Point_Zero_2":  "S11 S16 S19 S21  D15 D20 D22",
"16__Brain_Power":  "S3 S5 S8 S11 S16 S19 S22  D8 D14 D20 D24  CoOp(x2)",
"16__Life_is_Piano":  "S2 S4 S7 S10 S16 S19  D11 D18 D21",
"16__Gloria":  "S10 S14 S17 S20 S23  D16 D18 D21 D25",
"16__Mopemope":  "S11 S15 S17 S21 S23  D17 D19 D24 D25  CoOp(x2)",
"16__Re_End_of_a_Dream":  "S12 S15 S19 S21 S23  D18 D22 D25",
"16__Cross_Ray":  "S4 S7 S12 S16 S19 S21  D14 D20 D23",
"16__Allegro_Con_Fuoco__FULL":  "S18 S23  D21 D25",
"16__Prime_Time":  "S15 S21 S23  D20 D23 D26",
"16__8_6__FULL":  "S15 S21  D23",
"16__Baroque_Virus__FULL":  "S15 S18 S21  D20 D23",
"16__Ultimatum":  "S17 S21 S23 S25  D25 D27",
"16__Kokugen_Kairou_Labyrinth":  "S9 S13 S15 S17 S20 S23  D18 D22 D26",
"16__Imagination":  "S12 S15 S18 S19  D16 D21",
"16__Black_Swan":  "S12 S15 S16 S19  D15 D22",
"16__Obelisque":  "S2 S4 S7 S10 S15 S17  D12 D15 D17  CoOp(x2)",
"16__Rage_of_Fire":  "S7 S11 S16 S18  D11 D17 D19  CoOp(x2)",
"16__Dual_Racing_RED_vs_BLUE":  "S7 S11 S16 S18 S20  D13 D19 D21  CoOp(x2)",
"16__Cycling":  "S3 S7 S10 S16 S19  D11 D16 D20",
"16__Uranium":  "S9 S15 S19 S22  D12 D17 D20 D24",
"16__Xeroize":  "S12 S17 S21 S24  D18 D22 D25  CoOp(x3)",
"16__Rising_Star":  "S6 S11 S15 S17  D12 D17 D19  CoOp(x2)",
"16__Cutie_Song":  "S4 S8 S11 S15 S19  D13 D17 D21  CoOp(x3)",
"16__Headless_Chicken":  "S6 S10 S15 S19 S21  D12 D17 D21  CoOp(x2)",
"16__Over_the_Horizon":  "S11 S14 S17 S20  D14 D18 D21",
"16__Loki":  "S12 S16 S20 S21  D12 D20  CoOp(x2)",
"16__Dement_After_Legend":  "S15 S18 S21 S23  D20 D24 D26",
"16__Houseplan":  "S3 S6 S9 S15 S17  D8 D16 D19",
"16__Your_Mind":  "S9 S15 S17 S21  D10 D18 D23",



// Phoenix:

"17__Boca":  "S3 S5 S9 S14 S17 S19 S21  D15 D19 D21 D23",
"17__Nxde":  "S2 S4 S6 S11 S14 S16  D8 D15 D17  CoOp(x2)",
"17__Teddy_Bear":  "S2 S4 S6 S9 S14 S17  D7 D15 D18  CoOp(x2)",
"17__Alone":  "S1 S3 S5 S8 S15 S17  D6 D16 D18",
"17__Amor_Fati":  "S2 S4 S6 S15 S18 S21  D16 D19 D23",
"17__After_Like":  "S1 S4 S6 S9 S13 S15 S18  D7 D15 D17 D20  CoOp(x2)",
"17__Vector":  "S8 S14 S18 S22  D15 D20 D24",
"17__Versailles":  "S7 S10 S16 S19 S20  D12 D20 D23",
"17__Showdown":  "S6 S10 S14 S17 S20  D11 D16 D18 D22",
"17__Euphorianic":  "S3 S5 S8 S11 S16 S19  D10 D18 D21",
"17__Jupin":  "S12 S17 S19 S21 S23  D14 D18 D23 D25",
"17__Etude_Op_10_4":  "S4 S7 S11 S16 S22  D13 D17 D25",
"17__Goodtek":  "S8 S12 S16 S18 S21  D12 D16 D20 D24",
"17__Co5m1c_R4ilr0ad":  "S10 S15 S18 S21  D13 D19 D22",
"17__Energy_Synergy_Matrix":  "S7 S11 S16 S18 S20  D13 D19 D22",
"17__Milk":  "S7 S11 S15 S17 S20  D11 D16 D19 D22",
"17__Acquire":  "S7 S11 S15 S17 S20  D12 D16 D19 D23  CoOp(x3)",
"17__Pneumonoultramicroscopicsilicovolcanoconiosis":  "S12 S16 S19  D22",
"17__Altale":  "S2 S6 S9 S12 S15 S18 S21  D6 D16 D19 D23",
"17__Halcyon":  "S12 S18 S20 S22  D12 D20 D24",

};
