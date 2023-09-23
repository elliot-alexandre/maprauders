insert into
    locales (id, name, value)
values
    (
        'fc2e5927-70e4-4e69-a655-2ba557b61932',
        'spanish',
        'ES'
    ),
    (
        'dd0e390d-713a-4df1-9cfa-866af0877dff',
        'english',
        'EN'
    );

insert into
    maps (id, name, in_progress, map_conifg, total_level)
values
    (
        1,
        'penal-colony',
        true,
        '{    "zoom": -2,     "minZoom": -1,     "maxZoom": 3,     "padding": [600, 600],     "imageDimensions": [1172.03, 792.57]}',
        3
    );

insert into
    tags (id, name)
values
    (1, 'community_call_out'),
    (2, 'ammo'),
    (3, 'medic_kit'),
    (4, 'container'),
    (5, 'purse'),
    (6, 'dead_body'),
    (7, 'blocked_resource_box'),
    (8, 'blocked_access'),
    (9, 'depot'),
    (10, 'vault'),
    (11, 'hidden_stash'),
    (12, 'escape_pod'),
    (13, 'airlock'),
    (14, 'zero_to_hero'),
    (15, 'faction_mission'),
    (16, 'enemy_spawn'),
    (17, 'breach_pod'),
    (18, 'official_call_out');

insert into
    categories (id, name, color)
values
    (1, 'loot', '#3e92d0'),
    (2, 'extraction', '#facd45'),
    (3, 'mission', '#5db670'),
    (4, 'enemy', '#d43c3c'),
    (5, 'call_out', '#ff6961');

insert into
    rel_tags_categories (category_id, tag_id)
values
    (5, 1),
    (1, 2),
    (1, 3),
    (1, 4),
    (1, 5),
    (1, 6),
    (1, 7),
    (1, 8),
    (1, 9),
    (1, 10),
    (1, 11),
    (2, 12),
    (2, 13),
    (3, 14),
    (3, 15),
    (4, 16),
    (4, 17),
    (5, 18);

insert into
    levels (id, name, value, map_id)
values
    (1, 'main floor', 1, 1),
    (2, 'middle floor', 2, 1),
    (3, 'top floor', 3, 1);

insert into
    sections (id, name, level_id, map_id)
values
    (1, 'main floor', 1, 1),
    (2, 'middle floor', 2, 1),
    (3, 'top floor', 3, 1);

insert into
    resources (id, name)
values
    (1, 'airlock_gym_4d.webp'),
    (2, 'airlock_visit_5d.webp'),
    (3, 'airlock_canteen_3c.webp'),
    (4, 'airlock_workshop_2b.webp'),
    (5, 'airlock_library_1a.webp'),
    (6, 'escape_pod.webp'),
    (7, 'escape_pod.webp'),
    (8, 'hidden_stash_canteen.webp'),
    (9, 'hidden_stash_visitation.webp'),
    (10, 'hidden_stash_cells.webp'),
    (11, 'vault.webp'),
    (12, 'blocked_access_maintenance1.webp'),
    (13, 'blocked_access_maintenance2.webp'),
    (14, 'blocked_resource_box_escape_pod.webp'),
    (15, 'blocked_resource_box_escape_pod.webp'),
    (16, 'blocked_resource_box_central_tower.webp'),
    (17, 'medic_kit_gym.webp'),
    (18, 'medic_kit_personal1.webp'),
    (19, 'ammo_large_green_box_library.webp'),
    (20, 'ammo_security_red.webp'),
    (21, 'ammo_security.webp'),
    (22, 'locker_gym2.webp'),
    (23, 'locker_gym1.webp'),
    (24, 'locker_visitation.webp'),
    (25, 'file_cabinet_security.webp'),
    (26, 'ammo_large_green_box_library.webp'),
    (27, 'mission_prisioners_of_war.webp'),
    (28, 'mission_prison_break.webp'),
    (29, 'depot.webp'),
    (30, 'purse_security.webp'),
    (31, 'ammo_central_tower.webp'),
    (32, 'dead_body_security_red.webp'),
    (33, 'file_cabinet_personal1.webp'),
    (34, 'dead_body_library.webp'),
    (35, 'file_cabinet_security_red.webp'),
    (36, 'dead_body_dorms.webp'),
    (37, 'large_green_box_security.webp'),
    (38, 'dead_body_near_depot.webp'),
    (39, 'blocked_resource_box_central_tower.webp'),
    (40, 'large_green_box_security_red.webp'),
    (41, 'large_green_box_security2.webp'),
    (42, 'safe_room_switch1.webp');

insert into
    points (
        id,
        name,
        position,
        category_id,
        tag_id,
        section_id
    )
values
    (
        1,
        'Airlock GYM - 4D',
        '[790.7642819116803,-148.0000503050237]',
        2,
        13,
        1
    ),
    (
        2,
        'Airlock VISIT - 5D',
        '[488.0440665386694,-636.5]',
        2,
        13,
        1
    ),
    (
        3,
        'Airlock CANTEEN - 3C',
        '[250.63455815683983,-996]',
        2,
        13,
        1
    ),
    (
        4,
        'Airlock WORKSHOP - 2B',
        '[-791.6161374957401,-330.5]',
        2,
        13,
        1
    ),
    (
        5,
        'Airlock LIBRARY - 1A',
        '[304.0887982326394,520.5]',
        2,
        13,
        1
    ),
    (
        6,
        'Escape Pod',
        '[360.61610354785364,-148.75]',
        2,
        12,
        1
    ),
    (
        7,
        'Escape Pod',
        '[359.1616666859495,917.75]',
        2,
        12,
        1
    ),
    (
        8,
        'Hidden Stash',
        '[-84.6202068971449,-409.5]',
        1,
        11,
        1
    ),
    (
        9,
        'Hidden Stash',
        '[469.17962587906754,-494]',
        1,
        11,
        1
    ),
    (
        10,
        'Hidden Stash',
        '[61.84225731920547, -28.497135964741357]',
        1,
        11,
        1
    ),
    (
        11,
        'Vault',
        '[61.84225731920547, -28.497135964741357]',
        1,
        10,
        1
    ),
    (
        12,
        'Blocked access',
        '[-55.49166318309706,6.297013601974205]',
        1,
        8,
        1
    ),
    (
        13,
        'Blocked access',
        '[24.509586205710193,-555.75]',
        1,
        8,
        1
    ),
    (
        14,
        'Blocked resource box',
        '[-18.53077708069911, 31.515975396193674]',
        1,
        7,
        1
    ),
    (
        15,
        'Blocked resource box',
        '[75.17580568554031, 31.17797172152834]',
        1,
        7,
        1
    ),
    (
        16,
        'Blocked resource box',
        '[-17.567944429058386, 4.1547513351669565]',
        1,
        7,
        1
    ),
    (
        17,
        'Medic kit',
        '[-36.00953244117922, -19.77165666443532]',
        1,
        3,
        1
    ),
    (
        18,
        'Medic kit',
        '[-30.15155536659083, 44.21997259396159]',
        1,
        3,
        1
    ),
    (
        19,
        'Medic kit',
        '[15.485670894176138, 6.214132166573197]',
        1,
        3,
        1
    ),
    (
        20,
        'Medic kit',
        '[24.005096407430656,-511.5]',
        1,
        3,
        1
    ),
    (
        21,
        'Ammo box',
        '[-55.207747781026484, 8.501231244348977]',
        1,
        2,
        1
    ),
    (
        22,
        'Ammo box',
        '[59.28174971707392, -18.121404830352]',
        1,
        2,
        1
    ),
    (
        23,
        'Ammo box',
        '[51.126022331214045,-551.5]',
        1,
        2,
        1
    ),
    (
        24,
        'Ammo box',
        '[34.71634155550814, 7.581223333595003]',
        1,
        2,
        1
    ),
    (
        25,
        'Ammo box',
        '[12.969045352149521, 8.382651820637824]',
        1,
        2,
        1
    ),
    (
        26,
        'Ammo box',
        '[15.549245133894315, 30.230795734461157]',
        1,
        2,
        1
    ),
    (
        27,
        'Ammo box',
        '[345.45741308681386,-575]',
        1,
        2,
        1
    ),
    (
        28,
        'Locker',
        '[-30.126046003186723, 46.08885074442652]',
        1,
        4,
        1
    ),
    (
        29,
        'Locker',
        '[-35.371902583795304, 49.08307397746196]',
        1,
        4,
        1
    ),
    (
        30,
        'Locker',
        '[403.43611114324915,-432.25]',
        1,
        4,
        1
    ),
    (
        31,
        'File cabinet',
        '[-16.519659880393643, -18.378501103181005]',
        1,
        4,
        1
    ),
    (
        32,
        'Large green box',
        '[34.59580796550388, 7.556492444942318]',
        1,
        4,
        1
    ),
    (
        33,
        'Locker',
        '[67.92934795279123, -26.37744559605137]',
        1,
        4,
        1
    ),
    (
        34,
        'Large container',
        '[74.70976518, 3.225994897672205]',
        1,
        4,
        1
    ),
    (
        35,
        'Prisoners of War',
        '[78.92751634019716, -29.400468026214277]',
        3,
        15,
        1
    ),
    (
        36,
        'Prison Break',
        '[62.94025744728154, -27.605141214567457]',
        3,
        15,
        1
    ),
    (
        37,
        'Dead body',
        '[349.9543367435482,158.75]',
        1,
        6,
        1
    ),
    (
        38,
        'Depot',
        '[-2.2779431291934795, 35.88531094201322]',
        1,
        9,
        1
    ),
    (39, 'Purse', '[325.3499395839258,-540]', 1, 5, 1),
    (
        40,
        'Ammo box',
        '[-22.483645120053893, 9.408885944803764]',
        1,
        2,
        1
    ),
    (
        41,
        'Ammo box',
        '[70.38402422286745, 5.464573691097243]',
        1,
        2,
        1
    ),
    (
        42,
        'Dead body',
        '[18.14244222593537, 37.5496780592663]',
        1,
        6,
        1
    ),
    (
        43,
        'File cabinet',
        '[23.25745372405777,-524.5]',
        1,
        4,
        1
    ),
    (
        44,
        'Dead bodies',
        '[16.744552621436554, 13.397770382520411]',
        1,
        6,
        1
    ),
    (
        45,
        'File cabinet',
        '[19.36402145997023, 32.6908159498476]',
        1,
        4,
        1
    ),
    (
        46,
        'Dead body',
        '[5.948764571705706, -20.12109721355985]',
        1,
        6,
        1
    ),
    (
        47,
        'Large green box',
        '[333.33798376245693,-614.5]',
        1,
        4,
        1
    ),
    (
        48,
        'Dead bodies',
        '[-13.921528870861962, 36.60325016970574]',
        1,
        6,
        1
    ),
    (
        49,
        'File cabinet',
        '[-17.884625123328572, 4.274854995867592]',
        1,
        4,
        1
    ),
    (
        50,
        'Large green box',
        '[19.067257037201433, 32.37204096248071]',
        1,
        4,
        1
    ),
    (
        51,
        'Large green box',
        '[-60.759175704233016, 33.5805046091757]',
        1,
        4,
        1
    ),
    (
        52,
        'Safe Room Switch 1',
        '[348.582579375639,-578.625]',
        3,
        15,
        1
    );

insert into
    labels (name, size, color, rotation, position, section_id)
values
    (
        'Level 0',
        18,
        '#8264c4',
        0,
        '[-853.4616950050654, -500]',
        1
    ),
    (
        'Level 1',
        18,
        '#a6c464',
        0,
        '[-853.4616950050654, -200]',
        1
    ),
    (
        'Level 2',
        18,
        '#af4661',
        0,
        '[-853.4616950050654, 100]',
        1
    ),
    (
        'Level 3',
        18,
        '#a6c464',
        0,
        '[-853.4616950050654, 886]',
        1
    ),
    (
        'CANTEEN',
        12,
        '#fff',
        0,
        '[63.73292901098853, -787.5]',
        1
    ),
    (
        'KITCHEN',
        12,
        '#fff',
        0,
        '[269.2740506400347, -791]',
        1
    ),
    (
        'SECURITY',
        12,
        '#fff',
        0,
        '[340.08223753362074, -580.5]',
        1
    ),
    (
        'VISITATION',
        12,
        '#fff',
        0,
        '[495.40482674514567, -564]',
        1
    ),
    (
        'GYM',
        14,
        '#fff',
        0,
        '[621.8185637436414, -149]',
        1
    ),
    (
        'GYM LOCKERS',
        10,
        '#fff',
        90,
        '[499.9091758882407, -347.25]',
        1
    ),
    (
        'STAFF',
        10,
        '#fff',
        0,
        '[37.05266811479629, -530.375]',
        1
    ),
    (
        'STAFF',
        10,
        '#fff',
        0,
        '[29.118372209934535, 257]',
        1
    ),
    (
        'SECURITY',
        10,
        '#fff',
        90,
        '[331.6403108109979, 272.75]',
        1
    ),
    (
        'LIBRARY',
        12,
        '#fff',
        0,
        '[42.61974999647475, 395.25]',
        1
    ),
    (
        'UTILITY',
        9,
        '#fff',
        0,
        '[221.62928851867622, 205.75]',
        1
    ),
    (
        'DORMS',
        12,
        '#fff',
        -45,
        '[-209.18059220403285, 249.25]',
        1
    ),
    (
        'SECURITY',
        12,
        '#fff',
        0,
        '[-275.40685188210927, -101.5]',
        1
    ),
    (
        'MAIN MILL',
        12,
        '#fff',
        0,
        '[-477.3187909760593, -368.95913652002224]',
        1
    ),
    (
        'SIDE MILL',
        12,
        '#fff',
        90,
        '[-461.2955127516002, -92]',
        1
    ),
    (
        'LAUNDRY',
        12,
        '#fff',
        90,
        '[-450.80988835533793, -202.5]',
        1
    ),
    (
        'CHECKPOINT',
        12,
        '#fff',
        45,
        '[-232.82805499852458, 692.125]',
        1
    ),
    (
        'HEAD SEC OFFICE',
        12,
        '#fff',
        45,
        '[-325.2378576840715, 1030]',
        1
    ),
    (
        'BUNKS',
        12,
        '#fff',
        45,
        '[-404.3092429130717, 888.5]',
        1
    ),
    (
        'BREAK',
        10,
        '#fff',
        45,
        '[-370.6642707327104, 913.75]',
        1
    ),
    (
        'STAFF\nLOCKERS',
        10,
        '#fff',
        -45,
        '[-326.9551130003189, 809]',
        1
    ),
    (
        'CENTRAL TOWER',
        10,
        '#fff',
        0,
        '[71.22593409470744, -171.5]',
        1
    ),
    (
        'CENTRAL TOWER',
        10,
        '#fff',
        0,
        '[71.22593409470744, 910]',
        1
    ),
    (
        'CELL BLOCK\nLEVEL 3',
        12,
        '#fff',
        10,
        '[-51.1208518117337, 800]',
        1
    ),
    (
        'CELL BLOCK\nLEVEL 1',
        12,
        '#fff',
        90,
        '[46.37004886564273, -305]',
        1
    ),
    (
        'CELL BLOCK\nLEVEL 2',
        12,
        '#fff',
        90,
        '[46.37004886564273, 26.25]',
        1
    ),
    (
        'WORKSHOP',
        12,
        '#facd45',
        0,
        '[-193.89286204954715, -170.75]',
        1
    ),
    (
        'CANTEEN',
        12,
        '#facd45',
        90,
        '[39.11370893241383, -378]',
        1
    ),
    (
        'VISITATION',
        12,
        '#facd45',
        -45,
        '[186.88087827237644, -325.5]',
        1
    ),
    (
        'GYM',
        12,
        '#facd45',
        0,
        '[271.83435148074943, -146.25]',
        1
    ),
    (
        'ARRIVALS',
        12,
        '#facd45',
        45,
        '[205.63299794397676, 14]',
        1
    );