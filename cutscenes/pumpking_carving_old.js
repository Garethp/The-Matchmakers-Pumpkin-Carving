function pumpkin_carving_old() {
    function on_scene_end() {
        request_music_stop(2);
    }

    scene(inn);

    animate(ari, idle);

    place_actor(ari, north, food_service_entrance);
    place_actor(adeline, west, "bottom bar seat");
    place_actor(reina, east, "south table service");

    place_actor(hemlock, east, "bartender 1");

    var reinaMoveY = get_element_y(ari) - 20;
    var reinaMoveX = get_element_x(ari);

    place_actor(hayden, south, "north table top 1");
    place_actor(luc, south, "north table top 2");
    place_actor(ryis, north, "north table bottom 1");
    place_actor(eiland, north, "north table bottom 3");

    place_actor(olric, north, "south table bottom 2");
    place_actor(march, north, "south table bottom 3");
    place_actor(balor, south, "south table top 1");
    place_actor(juniper, south, "south table top 2");
    place_actor(valen, south, "south table top 3");

    place_actor(nora, west, "top bar seat");
    place_actor(elsie, west, "top-middle bar seat");
    place_actor(maple, west, "bottom-middle bar seat");

    camera_position(h2h_camera_1);

    fade_in(2);

    __free(() => bark(adeline, ellipses));

    wait(1);

    face(adeline, south);

    // Adeline: Hey! You made it!
    next_line();

    // Adeline: You're going to have a great time
    next_line();
    close_textbox();

    walk(reina, reinaMoveX, get_element_y(reina));
    walk(reina, reinaMoveX, reinaMoveY);
    face(reina, south);

    // Reina: Here's the pumpkin
    next_line();
    face(adeline, west);

    __async(() => {
        walk(ari, "south table bottom 1");
        face(ari, north);
        animate(ari, sit);

        // Olric: Join us
        next_line();

        // March: Not a team
        next_line();

        // Juniper/valen argument
        next_line();
        next_line();
        next_line()
        next_line();
    }, () => {
        walk(reina, "north table service");
        face(reina, east);
    });

    // March: Stop arguing
    next_line();

    // Balor, olric, march: What is that? A rock
    next_line();
    next_line();
    next_line();

    // Olric, Balor, Juniper about the prize
    next_line();
    next_line();
    next_line();
    next_line();

    // Valen, Juniper: Being satisfied
    next_line();
    next_line();

    // Drinks orders
    next_line();
    next_line();
    next_line();
    next_line();
    next_line();

    walk(adeline, get_element_x(adeline), get_element_y(adeline) + 20);
    face(adeline, east);

    // Judging time
    next_line();

    __async(
        () => {
            wait(0.15)
            walk(nora, get_element_x(nora) + 20, get_element_y(nora));
            walk(nora, get_element_x(nora), get_element_y(nora) + 20);
            face(nora, east);
        },
        () => {
            walk(maple, get_element_x(maple) + 20, get_element_y(maple));
            walk(maple, get_element_x(maple), get_element_y(maple) + 20);
            face(maple, east);
        },
        () => {
            walk(elsie, get_element_x(elsie) + 20, get_element_y(elsie));
            walk(elsie, get_element_x(elsie), get_element_y(elsie) + 20);
            face(elsie, east);
        }
    );

    // Judges
    next_line();
    next_line();
    next_line();
    next_line();
    next_line();
    next_line();

    __async(
        () => face(nora, south),
        () => face(elsie, south),
        () => face(maple, north)
    );

    wait(0.25);

    __async(
        () => __free(() => bark(elsie, ellipses)),
        () => __free(() => bark(maple, ellipses))
    );

    wait(1.5);

    face(elsie, north);
    wait(0.25);

    __async(
        () => __free(() => bark(nora, ellipses)),
        () => __free(() => bark(elsie, ellipses))
    );

    wait(1.5);

    __async(
        () => face(nora, east),
        () => face(elsie, east),
        () => face(maple, east),
        () => {
            wait(0.25);
            __free(() => bark(elsie, exclamation_mark));
        }
    );

    wait(1);

    // Winner
    next_line();

    __free(() => bark(hayden, exclamation_mark))

    wait(1);

    next_line();
    next_line();
    next_line();
    next_line();

    walk(adeline, get_element_x(adeline), get_element_y(ari));
    walk(adeline, get_element_x(ari) - 20,  get_element_y(ari));

    face(ari, west);

    // Consolation
    next_line();

    wait(1);
    fade_out(2);
}
