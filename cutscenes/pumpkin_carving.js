function pumpkin_carving() {
    function on_scene_end() {
        request_music_stop(2);
    }

    scene(inn);

    var reina1_x = get_element_x("stove-top kitchen");
    var reina1_y = get_element_y("stove-top kitchen");

    var reina2_x = get_element_x("cutting board");
    var reina2_y = get_element_y("stove-top kitchen");

    var camera_x = get_element_x(h2h_camera_1);
    var camera_y = get_element_y(h2h_camera_1) + 40;
    
    function pace_reina() {
        if (get_element_x(reina) == reina1_x) {
            walk(reina, reina2_x, reina2_y);
        } else {
            walk(reina, reina1_x, reina1_y);
        }
        
        face(reina, north);
        animate(reina, chop);
    }
    
    function shake_camera_local() {
        camera_position(camera_x - 1, camera_y);
        wait(0.05);
        camera_position(camera_x, camera_y);
        wait(0.05);
        camera_position(camera_x + 1, camera_y);
        wait(0.05);
        camera_position(camera_x, camera_y);
        wait(0.05);
    }
    
    animate(ari, idle);

    // TO PLACE:
    // Adeline
    // Reina
    
    var elsie_x = get_element_x("soup pot") - 20;
    var elsie_y = get_element_y("soup pot") + 20;

    var henrietta_x = get_element_x("north table right end") + 10;
    var henrietta_y = get_element_y("north table right end") - 20;

    var ryis_x = get_element_x("north table top 3");
    var ryis_y = get_element_y("north table top 3") - 20;

    var landen_x = get_element_x("north table top 3") + 20;
    var landen_y = get_element_y("north table top 3") - 20;

    place_actor(josephine, east, "bartender 1");
    place_actor(hemlock, east, "bartender 4");
    place_actor(reina, north, reina1_x, reina1_y);

    place_actor(elsie, south, elsie_x, elsie_y);
    
    place_actor(holt, west, "top bar seat");
    place_actor(nora, west, "top-middle bar seat");
    place_actor(juniper, west, "bottom-middle bar seat");
    place_actor(valen, west, "bottom bar seat");

    place_actor(balor, east, "south table left end");
    place_actor(march, north, "south table bottom 2");
    place_actor(olric, north, "south table bottom 3");
    place_actor(dell, south, "south table top 3");

    place_actor(celine, east, "north table left end");
    place_actor(terithia, south, "north table top 1");
    place_actor(hayden, south, "north table top 2");
    place_actor(maple, north, "north table bottom 1");
    place_actor(luc, north, "north table bottom 2");
    place_actor(eiland, north, "north table bottom 3");
    place_actor(errol, west, "north table right end");

    place_actor(ryis, east, ryis_x, ryis_y);
    place_actor(landen, west, landen_x, landen_y);
    place_actor(henrietta, north, henrietta_x, henrietta_y);

    place_actor(ari, north, food_service_entrance);
    
    animate(hemlock, polish);
    animate(josephine, polish);
    animate(reina, idle);

    var adeline_x = get_element_x(food_service_entrance) - 40;
    var adeline_y = get_element_y(food_service_entrance) - 30;

    place_actor(adeline, south, adeline_x, adeline_y);

    setup_prop("north table left end pumpkin");
    setup_prop("north table top 1 pumpkin");
    setup_prop("north table top 2 pumpkin");
    setup_prop("north table top 3 pumpkin");
    setup_prop("north table bottom 1 pumpkin");
    setup_prop("north table bottom 2 pumpkin");
    setup_prop("north table bottom 3 pumpkin");
    setup_prop("north table right end pumpkin");

    animate(holt, drink);
    animate(nora, write_sit);
    
    camera_position(camera_x, camera_y);

    fade_in(1);
    
    __async(
        () => {
            walk(ari, get_element_x(food_service_entrance), get_element_y(adeline));
            face(ari, west);
        },
        () => walk(adeline, get_element_x(food_service_entrance) - 20, get_element_y(adeline))
    );
    
    // (Scene - One-Two: Inn, halloween decorations. Adeline stands by the entrance to greet the player and walks up with them as they enter.)
    
    __async(
        () => {
            next_line();
            next_line();
            close_textbox();
        },
        () => {
            pace_reina();
        },
        () => {
            __free(() => bark_speech(ryis, ellipses));
            wait(0.75);
            __free(() => bark_speech(landen, question_mark));
            wait(0.75);
            __free(() => bark_speech(ryis, sweat_drop));
        }
    );
    

    __async(
        () => {
            walk(ari, get_element_x(elsie) + 5, get_element_y(elsie) + 25);
            face(ari, north);
        },
        () => {
            wait(1.25);
            walk(adeline, get_element_x(balor), get_element_y(march))
            animate(adeline, write);
            // Make Adeline do a clipboard animation
        }
    );
    
    // (Scene - Three: Adeline walks off to the right. Player walks up to Elsie and her conversation commences.)
    
    __async(
        () => {
            next_line();

            if (get_response() == 0) {
                next_line();
            }

            next_line();

            close_textbox();
        },
        () => {
            __free(() => bark_speech(nora, ellipses));
            wait(0.5);
            __free(() => bark_speech(valen, ellipses));
        }
    )

    
    // (Elsie walks in front of the soup pot to be more central. 6 more pumpkins have now appeared on the table in front of the participants’ seats)
    
    __async(
        () => {
            setup_prop("south table top 1 pumpkin");
            wait(0.75);
            setup_prop("south table top 2 pumpkin");
            wait(0.75);
            setup_prop("south table top 3 pumpkin");
            wait(0.75);
            setup_prop("south table left end pumpkin");
            wait(0.75);
            setup_prop("south table bottom 1 pumpkin");
            wait(0.75);
            setup_prop("south table bottom 2 pumpkin");
            wait(0.75);
            setup_prop("south table bottom 3 pumpkin");
        },
        () => {
            walk(elsie, get_element_x("soup pot"), elsie_y);
            face(elsie, south);
            face(celine, north);
            face(balor, north);
            face(ryis, west);

            face(holt, east);
            face(valen, east);
            face(juniper, east);
            face(nora, east);

            animate(nora, sit);

            next_line();
            next_line();
            next_line();
            next_line();
            next_line();
            next_line();
            next_line();
            next_line();
            next_line();
            next_line();
            next_line();
            next_line();
        }
    );

    
    __async(
        () => {
            next_line();
            next_line();
            next_line();
        },
        () => {
            walk(adeline, get_element_x(terithia) - 30, get_element_y(march));
            walk(adeline, get_element_x(terithia) - 30, get_element_y(terithia));
            face(adeline, south);
        },
    )

    next_line();
    close_textbox();

    // (Scene - Three: Adeline walks to the top of the inn, standing in front of the soup pot, holding clipboard sprite.)

    __async(
        () => {
            walk(henrietta, "north table top 3");
            face(henrietta, south);
        },
        () => {
            wait(0.5);
            walk(elsie, get_element_x(ryis) - 20, get_element_y(ryis) + 5);
            face(elsie, east);
        },
        () => {
            walk(ari, get_element_x(ari), get_element_y("south table bottom 1"));
            walk(ari, "south table bottom 1");
            face(ari, north);
        },
        () => pace_reina(),
        () => {
            wait(1.25);
            walk(juniper, "south table top 2");
            face(juniper, south);
        },
        () => {
            wait(1.75);
            walk(valen, "south table top 1");
            face(valen, south);
        },
        () => {
            face(celine, east);
            face(balor, east);
            face(ryis, east);
            face(holt, west);
            face(nora, west);
            
            animate(nora, write_sit);
        }
    )
    
    // (Scene - Four: A few NPCs that aren’t at tables already move to tables. Henrietta hops up onto a chair next to Hayden. The player moves to an open spot at a table with Valen, Juniper, March, Olric, Dell and Balor. The other table has Eiland, Celine, Hayden, and Henrietta.)

    next_line();
    next_line();
    next_line();
    
    __async(
        () => {
            wait(1.25);
            pace_reina()
        },
        () => {
            walk(adeline, get_element_x(celine) - 15, get_element_y(maple));
            face(adeline, east);
            animate(adeline, write);
        },
        () => {
            next_line();
            next_line();
            next_line();
        }
    );

    __async(
        () => {
            next_line();
            next_line();
            next_line();

            next_line();
        },
        () => {
            __free(() => bark_speech(terithia, question_mark));
            wait(0.75);
            __free(() => bark_speech(hayden, henrietta));
        }
    )

    
    __async(
        () => {
            walk(adeline, get_element_x(balor), get_element_y(valen));
            face(adeline, east);
            animate(adeline, write);
        },
        () => {
            next_line();
            next_line();
            next_line();
            next_line();
        },
        () => {
            wait(1.25);
            walk(terithia, "bottom bar seat");
            face(terithia, west);
            __free(() => bark_speech(terithia, hot_drink));
            wait(1.25);
            animate(nora, drink);
        }
    );

    __async(
        () => {
            next_line();
            next_line();
            next_line();
            next_line();
            next_line();
            next_line();
        },
        () => {
            walk(adeline, get_element_x(balor), get_element_y(ari));
            face(adeline, north);
            animate(adeline, write);
        },
        () => {
            wait(2.5);
            pace_reina();
        }
    )

    
    next_line();

    // Balor leaves to go to the bar.

    __async(
        () => {
            walk(balor, "bottom-middle bar seat");
            __free(() => bark_speech(balor, ellipses));
            wait(0.5);
            __free(() => bark_speech(hemlock, cold_drink));
        },
        () => {
            wait(0.5);
            walk(hemlock, "bartender 3");
            face(hemlock, east);
        },
        () => {
            // The screen shakes and fades to black.
            // BANG
            
            next_line();
            
            close_textbox();

            __async(
                () => {
                    play_sound('SoundEffects/Enemies/DieFlesh/DieFlesh');
                },
                () => {
                    shake_camera_local();
                    shake_camera_local();
                    shake_camera_local();
                    shake_camera_local();
                }
            )

            fade_out(1);

            destroy_prop("south table top 1 pumpkin");
            destroy_prop("south table top 2 pumpkin");
            destroy_prop("south table top 3 pumpkin");

            setup_prop("pumpkin valen saved");
            
            place_actor(valen, south, get_element_x(valen) - 15, get_element_y(valen) - 5);
            animate(valen, idle);
            
            fade_in(1);
        }
    );
    
    next_line();
    next_line();
    next_line();
    next_line();
    
    animate(hemlock, polish);

    __async(
        () => {
            next_line();
            next_line();
            next_line();
            next_line();
            setup_prop("south table top 3 pumpkin");
        },
        () => {
            destroy_prop("north table bottom 3 pumpkin");
            walk(eiland, get_element_x(dell) + 20, get_element_y(dell) - 10);
            face(eiland, south);
        }
    );
    
    close_textbox();

    __async(
        () => {
            __async(
                () => {
                    destroy_prop("pumpkin valen saved");
                    walk(valen, "south table top 1");
                    setup_prop("south table top 1 pumpkin");
                },
                () => {
                    wait(1);
                    walk(balor, "south table left end");
                }
            );
        },
        () => {
            walk(adeline, get_element_x("soup pot") + 5, elsie_y + 20);
            face(adeline, south);

            // (Scene - Seven: End Carving. Adeline walks toward the soup pot. Balor and Valen return to their seats. Eiland moves beside Dell, his pumpkin disappears from his spot and appears in hers.)

            next_line();
            close_textbox();
        }
    );
    
    
    // (The judges (Ryis, Elsie and Josephine) gather at the soup pot, then - Scene Eight: Ryis heads to inspect Hayden and Henrietta’s pumpkin. Josephine heads to Celine’s, and Elsie heads to the player’s table.) 

    __async(
        () => {
            walk(josephine, get_element_x("soup pot") - 20, elsie_y);
            face(josephine, south);
        },
        () => {
            walk(elsie, get_element_x("soup pot"), elsie_y);
            face(elsie, south);
        },
        () => {
            walk(ryis, get_element_x("soup pot") + 20, elsie_y);
            face(ryis, south);
        },
        () => {
            pace_reina();
        }
    );
    
    next_line();
    next_line();
    next_line();
    
    __free(() => bark_speech(juniper, sweat_drop));
    next_line();
    next_line();
    
    close_textbox();
    walk(ryis, get_element_x(henrietta) - 10, get_element_y(henrietta) - 10);
    face(ryis, south);
    
    
    next_line();
    __free(() => bark_speech(ryis, question_mark));
    
    // (The pumpkin just has a huge, ragged hole in the middle of it.)
    
    __async(
        () => {
            next_line();
            next_line();
            wait(0.25);
            __free(() => bark_speech(ryis, sweat_drop));
            next_line();
            next_line();
            next_line();
        },
        () => {
            wait(2);
            walk(josephine, get_element_x(celine) - 10, get_element_y(celine) + 20);
            face(josephine, east);
        },
        () => {
            wait(4);
            walk(elsie, get_element_x(elsie), get_element_y(celine) + 20);
            walk(elsie, get_element_x(balor), get_element_y(valen) + 3);
        },
        () => {
            walk(adeline, get_element_x(celine), get_element_y(henrietta) + 5);
            face(adeline, east);
        }
    )

    next_line();
    next_line();
    next_line();
    next_line();
    next_line();
    
    // (Scene - Nine: The three judges return to the soup pot, backs to the room, to confer until an exclamation mark (or whatever else would work to indicate they decided on the winner) appears above them. They turn back to face the contestants.)

    close_textbox();
    
    __async(
        () => {
            walk(josephine, get_element_x("soup pot") - 20, elsie_y);
            face(josephine, south);
        },
        () => {
            walk(elsie, get_element_x("soup pot"), elsie_y);
            face(elsie, south);
        },
        () => {
            walk(ryis, get_element_x("soup pot") + 20, elsie_y);
            face(ryis, south);
        }
    );
    
    face(ryis, west);
    wait(0.1);
    face(josephine, east);
    face(elsie, west);
    
    __free(() => bark_speech(elsie, ellipses));
    wait(0.5);
    __free(() => bark_speech(josephine, ellipses));
    wait(0.75);
    face(elsie, east);
    __free(() => bark_speech(ryis, exclamation_mark));
    wait(1);
    __free(() => bark_speech(elsie, ellipses));
    wait(1.5);

    face(ryis, south);
    face(josephine, south);
    face(elsie, south);
    
    next_line();
    
    __free(() => bark_speech(dell, celebration));
    
    next_line();
    next_line();

    __free(() => bark_speech(eiland, hungry));
    next_line();
    next_line();
    next_line();
    next_line();
    next_line();
    next_line();
    next_line();
    next_line();
    next_line();
    next_line();

    next_line();
    next_line();
    
    close_textbox();
    
    __async(
        () => {
            walk(ryis, "north table top 1");
        },
        () => {
            wait(0.5);
            walk(josephine, get_element_x(celine), get_element_y(valen) - 10);
        },
        () => {
            wait(0.75);
            walk(elsie, get_element_x(landen) - 10, get_element_y(landen) + 5);
        },
        () => {
            wait(.75);
            walk(ari, get_element_x(ari), get_element_y("south table bottom 2") + 20);
            walk(ari, get_element_x("soup pot"), get_element_y(ari));
            walk(ari, get_element_x(ari), get_element_y(ari) + 10);
        },
        () => {
            walk(adeline, get_element_x("soup pot"), get_element_y(march));
            face(adeline, south);
        }
    );
    
    face(ari, north);
    
    // (Scene - Ten: Adeline approaches the player as they’re leaving.)
    
    next_line();
    next_line();
    
    close_textbox();
    ari_hold_item(pumpkin_pie);
    wait(1);
    
    next_line();
    
    fade_out(1);
}
