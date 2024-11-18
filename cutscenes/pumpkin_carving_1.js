function pumpkin_carving_1() {
    function on_scene_end() {
        request_music_stop(2);
    }

    scene(inn);

    animate(ari, idle);
    
    place_actor(ari, north, food_service_entrance);
    place_actor(elsie, east, get_element_x(ari) - 20, get_element_y(ari));
    place_actor(adeline, east, "south table service");
    
    place_actor(hemlock, east, "bartender 3");
    place_actor(balor, west, "top-middle bar seat");
    place_actor(ryis, west, "bottom-middle bar seat");
    place_actor(landen, west, "bottom bar seat");
    
    place_actor(hayden, south, "north table top 1");
    place_actor(henrietta, south, "north table top 2");
    place_actor(luc, south, "north table top 3");
    place_actor(dell, north, "north table bottom 1");
    place_actor(celine, north, "north table bottom 3");
    place_actor(holt, west, "north table right end");

    place_actor(juniper, south, "south table top 1");
    place_actor(olric, south, "south table top 3");
    place_actor(valen, north, "south table bottom 2");
    place_actor(march, north, "south table bottom 3");
    
    camera_position(h2h_camera_1);

    fade_in(2);

    wait(0.5);
    __free(() => bark_speech(elsie, heart));
    wait(1.5);
    
    // Greeting
    next_line();
    
    __async(
        () => {
            walk(ari, "south table bottom 1");
            face(ari, north);
            animate(ari, sit);        
        },
        () => {
            walk(elsie, get_element_x(elsie), get_element_y(elsie) - 60);
            face(elsie, east);
        }
    );
    
    // 1st place intro
    next_line();
    next_line();
    next_line();
    next_line();
    next_line();
    
    // Alcohol Chat
    next_line();
    next_line();
    next_line();
    next_line();
    next_line();
    
    // 2nd place intro
    next_line();
    next_line();
    next_line();
    next_line();

    __async(
        () => {
            walk(adeline, get_element_x("soup pot"), get_element_y("soup pot") + 30);
            face(adeline, south);
        },
        () => {
            wait(0.5);
            walk(elsie, "south table left end");
            animate(elsie, sit);
            face(elsie, east);
        }
    );
    
    next_line();
    
    // Judge announcement
    next_line();
    next_line();
    next_line();
    next_line();
    
    fade_out(0.5);
    remove_actor(ryis);
    place_actor(ryis, east, "north table service");
    animate(ryis, idle);
    fade_in(0.5);
    
    // Judging
    next_line();
    next_line();
    next_line();
    next_line();
    next_line();
    
    wait(1);
    fade_out(2);
}
