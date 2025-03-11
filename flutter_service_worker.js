'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "074d8371fa59a15999453b63390cbe8c",
"assets/assets/animated_backgrounds/1/liquid.gif": "cc4081d7ab2508021b4fd4c276d1d46f",
"assets/assets/animated_backgrounds/1/particles/particles_01.png": "500631c388dac0dfd6a7921a314f054b",
"assets/assets/animated_backgrounds/1/particles/particles_02.png": "46de8d53ade5130ebfb13e76e7de971e",
"assets/assets/animated_backgrounds/1/virus/vbody_0.png": "8efd232c739a27d51756115e4edb3024",
"assets/assets/animated_backgrounds/1/virus/vbody_1.png": "38096237958acdbb85d1368edcdb5a37",
"assets/assets/animated_backgrounds/1/virus/vbody_2.png": "3120f124dc246364dfeac473e10411ec",
"assets/assets/animated_backgrounds/1/virus/vbody_3.png": "7764dda79a5136965dcce9703bfa37e9",
"assets/assets/animated_backgrounds/1/virus/vbody_4.png": "bbcc3bdf65561ac473410114f907591b",
"assets/assets/animated_backgrounds/1/virus/vbody_5.png": "913ae7dfb5835a97631005ae30e9eee0",
"assets/assets/animated_backgrounds/1/virus/vbody_6.png": "30ba38db3cf875c16841cdcdd4964227",
"assets/assets/animated_backgrounds/1/virus/vbody_7.png": "1fdbbcc7a9c6ad4c58cf1a31fc7e6c3f",
"assets/assets/animated_backgrounds/1/virus/vbody_8.png": "dc11fbc04344e7dc45c2214b61299066",
"assets/assets/animated_backgrounds/2/liquid.gif": "d594d993ca5c4381012a3a00868deef1",
"assets/assets/animated_backgrounds/2/particles/particles_01.png": "640da6dbb795468c081a13634bbf55fb",
"assets/assets/animated_backgrounds/2/particles/particles_02.png": "34b8053180273349a5f351a48dea5b5e",
"assets/assets/animated_backgrounds/2/virus/typhoid.gif": "504ca073c230d2ca153bb08cba5ba3aa",
"assets/assets/animated_backgrounds/2/virus/vbody_0.png": "dc5dc1ec11f0df3e0143f2858d3e2d93",
"assets/assets/animated_backgrounds/2/virus/vbody_1.png": "a984a499a04a4ad003b2313ed24dba28",
"assets/assets/animated_backgrounds/2/virus/vbody_2.png": "98ee5368480ac8e21ccab1de031c67d1",
"assets/assets/animated_backgrounds/2/virus/vbody_3.png": "46383a376dd7c07beeaf3a0ee87442c4",
"assets/assets/animated_backgrounds/2/virus/vbody_4.png": "2f4a66c0fdff568a15d2e5e22ed9a388",
"assets/assets/animated_backgrounds/2/virus/vbody_5.png": "5ae707fa8c2e44348393ef50e90ffb3d",
"assets/assets/animated_backgrounds/2/virus/vbody_6.png": "9bc061537ab7aa795cd67830900f2952",
"assets/assets/animated_backgrounds/2/virus/vbody_7.png": "600d371d466bae0b328f175c0bcab285",
"assets/assets/animated_backgrounds/2/virus/vbody_8.png": "ec4dd01e12ce9c6b4114f02fce6458f3",
"assets/assets/animated_backgrounds/3/liquid.gif": "b993778ddede7905f0f1c456d47cd252",
"assets/assets/animated_backgrounds/3/particles/particles_01.png": "f2c32190177e8aabba1d49c2653af310",
"assets/assets/animated_backgrounds/3/particles/particles_02.png": "bf8ac275a107511723a3e2dc86d79afc",
"assets/assets/animated_backgrounds/3/virus/vbody_0.png": "73c148dd454cbe6b3cc74cf8c7c5e711",
"assets/assets/animated_backgrounds/3/virus/vbody_1.png": "bd346da658eb063242cb77ae131b541b",
"assets/assets/animated_backgrounds/3/virus/vbody_10.png": "9747411ed68bff0c547b354db296e5f5",
"assets/assets/animated_backgrounds/3/virus/vbody_11.png": "07c272235fc953a39e8652d162445d5d",
"assets/assets/animated_backgrounds/3/virus/vbody_12.png": "1d1d3692f0ed9605cf5c11063c7e7431",
"assets/assets/animated_backgrounds/3/virus/vbody_13.png": "c3ab6e6d571820fa42a82896762ce756",
"assets/assets/animated_backgrounds/3/virus/vbody_2.png": "fc689e7b61a17f65b89174f8979feea4",
"assets/assets/animated_backgrounds/3/virus/vbody_3.png": "fab3c54fb6f5dc16dec70b265cd792de",
"assets/assets/animated_backgrounds/3/virus/vbody_4.png": "a6c0779a7772878d1fcb6ddba04d4264",
"assets/assets/animated_backgrounds/3/virus/vbody_5.png": "24c6f570304df991b47e5212d35392bb",
"assets/assets/animated_backgrounds/3/virus/vbody_6.png": "3cbeb071d14289e1fc320502b916d8c1",
"assets/assets/animated_backgrounds/3/virus/vbody_7.png": "fc367acba0414987814eb78360e7a3b7",
"assets/assets/animated_backgrounds/3/virus/vbody_8.png": "29bf17f5566d3c6aaaf64a3417484000",
"assets/assets/animated_backgrounds/3/virus/vbody_9.png": "11e6f9660a33db4b39483de51122d741",
"assets/assets/animated_backgrounds/4/liquid.gif": "4de3539d46f8b199a28cd0845e3ec448",
"assets/assets/animated_backgrounds/4/particles/particles_01.png": "f2c32190177e8aabba1d49c2653af310",
"assets/assets/animated_backgrounds/4/particles/particles_02.png": "bf8ac275a107511723a3e2dc86d79afc",
"assets/assets/animated_backgrounds/4/virus/vbody_0.png": "2f712dbbc0c54388203f1167c80c066b",
"assets/assets/animated_backgrounds/4/virus/vbody_1.png": "49c02ed4d09dce24f12e7500c7bc9f07",
"assets/assets/animated_backgrounds/4/virus/vbody_10.png": "e5165590a55393c38ef3a716282db6e5",
"assets/assets/animated_backgrounds/4/virus/vbody_2.png": "957d2f235094cf73e22762b2052d60aa",
"assets/assets/animated_backgrounds/4/virus/vbody_3.png": "1fdbbcc7a9c6ad4c58cf1a31fc7e6c3f",
"assets/assets/animated_backgrounds/4/virus/vbody_4.png": "21fa0ffff422590a8d236ff8f1ea96cf",
"assets/assets/animated_backgrounds/4/virus/vbody_5.png": "e9dd574da05048b4edfd2792160829bf",
"assets/assets/animated_backgrounds/4/virus/vbody_6.png": "94699ba25aa887645bdaf172c283e11a",
"assets/assets/animated_backgrounds/4/virus/vbody_7.png": "8278fb68046a701e843bce405f3da3a0",
"assets/assets/animated_backgrounds/4/virus/vbody_8.png": "4f4b71627ec96afa9ced13c2d97a7f79",
"assets/assets/animated_backgrounds/4/virus/vbody_9.png": "72d1ee03fc8a042cfd36ebbe17cd3e25",
"assets/assets/animated_backgrounds/5/liquid.gif": "671c339bc8918297b2eb6cd9875b3264",
"assets/assets/animated_backgrounds/5/particles/particles_01.png": "3b4361fc9cdcfd5c55fa9ee99f50ab9c",
"assets/assets/animated_backgrounds/5/particles/particles_02.png": "ff6f4adacfc644cfcf95fd7b88cb4b71",
"assets/assets/animated_backgrounds/5/virus/vbody_0.png": "46ed073c5bc0a02a6a59abe9caa2dac1",
"assets/assets/animated_backgrounds/5/virus/vbody_1.png": "8278fb68046a701e843bce405f3da3a0",
"assets/assets/animated_backgrounds/5/virus/vbody_10.png": "e9dd574da05048b4edfd2792160829bf",
"assets/assets/animated_backgrounds/5/virus/vbody_11.png": "7e5bbefe719f45b000f7639918ec9aeb",
"assets/assets/animated_backgrounds/5/virus/vbody_12.png": "c784dcb1f292247698330ae5e5915bee",
"assets/assets/animated_backgrounds/5/virus/vbody_2.png": "14833d73bfa3fd0a38c2612f9f024bed",
"assets/assets/animated_backgrounds/5/virus/vbody_3.png": "ab7a819e0f541eb98fc1b1cee8f75b62",
"assets/assets/animated_backgrounds/5/virus/vbody_4.png": "49c1295f78143601a6e5c70c154dcb22",
"assets/assets/animated_backgrounds/5/virus/vbody_5.png": "eef4e5b3af684135621d29c704ce2ac6",
"assets/assets/animated_backgrounds/5/virus/vbody_6.png": "d0ce5c026c7ac7f7f81463b619ccea6d",
"assets/assets/animated_backgrounds/5/virus/vbody_7.png": "41588b2f3abf0dc164228cb8b8b7bf00",
"assets/assets/animated_backgrounds/5/virus/vbody_8.png": "21fa0ffff422590a8d236ff8f1ea96cf",
"assets/assets/animated_backgrounds/5/virus/vbody_9.png": "51f6ae939eb7e31c4bd3e0ef27587138",
"assets/assets/animated_backgrounds/6/liquid.gif": "55a825321ed23dd64ac26becf502744a",
"assets/assets/animated_backgrounds/6/particles/particles_01.png": "b4040a7a3dacaaa9d305e132a45ebf1e",
"assets/assets/animated_backgrounds/6/particles/particles_02.png": "7048328d82e7b7cdb6357924d27385ca",
"assets/assets/animated_backgrounds/6/virus/vbody_0.png": "663a80de5301433c9a187b229c1d9f3f",
"assets/assets/animated_backgrounds/6/virus/vbody_1.png": "ed0672ea72ea983aa118457d7b7fbea1",
"assets/assets/animated_backgrounds/6/virus/vbody_10.png": "e9dd574da05048b4edfd2792160829bf",
"assets/assets/animated_backgrounds/6/virus/vbody_2.png": "bc7c3828158937faf711469e1557567a",
"assets/assets/animated_backgrounds/6/virus/vbody_3.png": "8aa124fc8df00fb4f47f1542820f624a",
"assets/assets/animated_backgrounds/6/virus/vbody_4.png": "9fc36dd420ffc70632645aa17d5ac3b8",
"assets/assets/animated_backgrounds/6/virus/vbody_5.png": "3ad8e62c611e5a2177e1c3b4a3b11b0b",
"assets/assets/animated_backgrounds/6/virus/vbody_6.png": "5e2c7ec031105734fdf91d002507ec07",
"assets/assets/animated_backgrounds/6/virus/vbody_7.png": "11ef9bf650571e51f623f605c6ed881a",
"assets/assets/animated_backgrounds/6/virus/vbody_8.png": "232026ebfec6985d9307c204722dd650",
"assets/assets/animated_backgrounds/6/virus/vbody_9.png": "3ae04145101ef95254242cdb6092062f",
"assets/assets/animated_backgrounds/virus.gif": "cd22de16a73de315a36ec68f87d9fc92",
"assets/assets/characters/aristophanes_sophocles.png": "301583ff49dc6da9048ab236c886c422",
"assets/assets/characters/pericles.png": "58e7899ba9fc99fa92b08c5bce1ada3d",
"assets/assets/characters/phidias.png": "0310a0eda0e4ae82844f91df9239e4d5",
"assets/assets/characters/socrates_plato.png": "ffe2fbbb98093b2601827709fc6a7d64",
"assets/assets/characters/thucydides.png": "448b1a91ba66e3bfeb7a3f068be0e498",
"assets/assets/dead_socrates/death_of_Socrates1.png": "543bc6aac767c5db64acf5c01ff07375",
"assets/assets/dead_socrates/death_of_Socrates2.png": "0e75adeab76e608f6a6f7fff52faf9a2",
"assets/assets/dead_socrates/death_of_Socrates3.png": "b9279e0353492a64f209e85ae41ecc65",
"assets/assets/document_view/document.png": "1d33cb15e128f49e0d4ed7dfb1160ee0",
"assets/assets/document_view/pointer_button_icon.png": "5c96503af7977c9bfc6abd7c2602f167",
"assets/assets/end_war/end_of_war1.png": "eb33f7d6aa1a2a33e0726c9fce947fd2",
"assets/assets/end_war/end_of_war2.png": "a7836a5b9257d0e12272f63092d27f23",
"assets/assets/end_war/end_of_war3.png": "ed55a607dd5dbe9c12332f34dd20062f",
"assets/assets/icons/arrow_back.png": "c0603ac3da57bb46de58d070d2c42c0e",
"assets/assets/icons/arrow_down.png": "f713b233aca2764215bbad65c0133e20",
"assets/assets/icons/arrow_forward.png": "472001dcc8b18a28f2579f1af6126c13",
"assets/assets/icons/arrow_up.png": "a4d56f5608552854b65473ba3c2dcb9c",
"assets/assets/icons/scroll.png": "1d3fe6a5fa947c74e182ebb9e9dd7e00",
"assets/assets/icons/social_icons.png": "4dab110b4c1d8e3185c93768aa9a2ae9",
"assets/assets/images_quiz/image1.jpg": "7c18dc881b8dd21097fcfa4f34138ead",
"assets/assets/images_quiz/image2.jpg": "a0b89f31d8e45930d331af8afc3dcaca",
"assets/assets/images_quiz/image3.jpg": "798deb7f2d5b4500af81bfb36a4be1b9",
"assets/assets/images_quiz/image_quiz8.jpg": "fa9fe47fbff7075ef624270242bd3a64",
"assets/assets/images_quiz/pericles.jpg": "8d4af87719aa9cf0557e29a0ee9b5a8a",
"assets/assets/images_quiz/quiz1.jpg": "09e250b8ed10cf1012a3e66d4a1f6819",
"assets/assets/images_quiz/quiz2.jpg": "55b8e35bb21e075c3f12eec4870a8ff6",
"assets/assets/images_quiz/quiz3.jpg": "774728ccd90f223b42df9f10a4a6a684",
"assets/assets/images_quiz/quiz4.jpg": "0e3b6e5b88c97f4e041b96db5a74e430",
"assets/assets/image_back/about_book_map.png": "780fc2a936df9df82907db6b4c498992",
"assets/assets/image_back/characters_page_back.png": "6df104e9ad99480f1757e7331085c6bd",
"assets/assets/image_back/giana.png": "6687f4f64509be32563c0b09e2fe95b0",
"assets/assets/image_back/glossary_bk.png": "d8dd7b8286b4fe689f1d829bc6a4e7cd",
"assets/assets/image_back/gradient.png": "806ec9c1e38632d0ef6b8f7b7d52cb2b",
"assets/assets/image_back/irl_nikos.png": "b2c046f3cebf76ff30918183f773648c",
"assets/assets/imgs/particles_01.png": "fd3892db2e99c952154ed499c9e8b58f",
"assets/assets/imgs/particles_02.png": "56a1d90d2e563b8b0b90c70736e9fe27",
"assets/assets/imgs/particles_03.png": "126ac830b52c9e43789ef2032ce31569",
"assets/assets/man_body/chest.png": "8e4180d91661792234474f5b3ac6cef6",
"assets/assets/man_body/fill.png": "920c1656d2379ffc30926c04205d6d47",
"assets/assets/man_body/hands.png": "1d2289e4381cbd8dfeff2d59e9737c80",
"assets/assets/man_body/head.png": "ebf35d7eed5e62722cebc67ce030d206",
"assets/assets/man_body/intro.png": "b3fd486af7c6174038d6f0a12f26c70f",
"assets/assets/man_body/stomach.png": "ac4696cba3052df62b1cb3d5c36bd9fd",
"assets/assets/man_body/throat.png": "ff4d43433ed4a84525f8979f131d4262",
"assets/assets/map/map399image.jpg": "bfa23988c29fe8d51b577c4cccd19695",
"assets/assets/map/map403image.jpg": "71380dec0674a7bdc6bd781601598c73",
"assets/assets/map/map404image.jpg": "f7daaeaae8ff0c8bb46ffbebf1fe146c",
"assets/assets/map/map407image.jpg": "32f3337f0a92e514286512f9bba0cac8",
"assets/assets/map/map410image.jpg": "210aa768a941a732d6a9475dfa198ebf",
"assets/assets/map/map411image.jpg": "71380dec0674a7bdc6bd781601598c73",
"assets/assets/map/map413image.jpg": "fb74e09cd61a5a1f1c9c56288c333f85",
"assets/assets/map/map414image.jpg": "2c92e69475622ed796b9356f2f556c09",
"assets/assets/map/map415image.jpg": "f81e6e3228f77a3b01372390fb4dfff2",
"assets/assets/map/map416image.jpg": "d79cbf4605c9acb16f3534b048e90038",
"assets/assets/map/map421image.jpg": "65caa44cffc184b45c22d54a3dba666a",
"assets/assets/map/map427image.jpg": "db001d669fd810e185c5108735080487",
"assets/assets/map/map429image.jpg": "098f8a08f0e4ab70425a90c5b02c85f8",
"assets/assets/map/map430image.jpg": "53ab9f75e67146be60ced19c66a8683e",
"assets/assets/map/map431image.jpg": "8df5df30d751d60b69ad78f07f5f0f1a",
"assets/assets/map/map438image.jpg": "1286c9f0b684aef09f610ec1a808d938",
"assets/assets/map/map441image.jpg": "639f96b82e72576c9d8812194584b780",
"assets/assets/map/map443image.jpg": "8a70de2debc5c4f5ae35d52654419001",
"assets/assets/map/map446image.jpg": "65caa44cffc184b45c22d54a3dba666a",
"assets/assets/map/map447_432image.jpg": "639f96b82e72576c9d8812194584b780",
"assets/assets/map/map450image.jpg": "15ceb2b37e6d39ad06bb8252f0a40300",
"assets/assets/map/map451image.jpg": "f7d7331031f2a4df51d2398b27257d76",
"assets/assets/map/map454image.jpg": "1768ad06554c3f101f236a81f05cc925",
"assets/assets/map/map457image.jpg": "67885172a9639e95804b6e4ba770273a",
"assets/assets/map/map458image.jpg": "1286c9f0b684aef09f610ec1a808d938",
"assets/assets/map/map461image.jpg": "1c3c6636373c48f2c1a5e17366a0b619",
"assets/assets/map/map462image.jpg": "a92f9487bddec9e62c03d7d3ccf6fd01",
"assets/assets/map/map469image.jpg": "d1213c68fadf51ec6e1b18e19786c93b",
"assets/assets/map/map471image.jpg": "9b0334c8d32b00bdb7035e758170b787",
"assets/assets/map/map477image.jpg": "e0b3f2df5f4cf1cb3a0988bcea77fc23",
"assets/assets/map/map479image.jpg": "c87ff9fa87928142f7d2d3eb92c6f82a",
"assets/assets/map/map480image.jpg": "2cb244bbe76f167606c652001b5f9862",
"assets/assets/map/map490image.jpg": "c0cbe39ff94d4c9057f82f3a215b2cb1",
"assets/assets/map/map495image.jpg": "22090a671147a242941ed74cca761a66",
"assets/assets/map/virus_loc_1.jpg": "346ddd3219ff80b150b6da1ca2df6b4b",
"assets/assets/map/virus_loc_2.jpg": "4e0a27f1927924171b2dd999fc71a10a",
"assets/assets/map_images/399image.jpg": "bd6b7b3f39aa92c3388d2a503b32c599",
"assets/assets/map_images/413image.jpg": "8b477c983b09555fe963ce5bd3d0af58",
"assets/assets/map_images/414image.jpg": "5ed3531590edc9ac3bc3b764f233180b",
"assets/assets/map_images/415image.jpg": "6c2db5e9592e888638dd716c4f0f0d71",
"assets/assets/map_images/416image.jpg": "45f235c549580773e29dbc659c562a50",
"assets/assets/map_images/421image.jpg": "445cdb406790c6727c6422b38c11de4d",
"assets/assets/map_images/427image.jpg": "600e7d0b0b52df8edae2ba4891884dda",
"assets/assets/map_images/430image.jpg": "2fde9e9e8f0cad887184232635179b62",
"assets/assets/map_images/431image.jpg": "52996d3c085eac6f0f31474ba50e5e3e",
"assets/assets/map_images/438image.jpg": "59d9fa284c2a137a54212c8d68672e72",
"assets/assets/map_images/441image.jpg": "f4621317833e1b774af673c2b1fa8d3a",
"assets/assets/map_images/443image.jpg": "8b477c983b09555fe963ce5bd3d0af58",
"assets/assets/map_images/446image.jpg": "623cd9d9cce0b6ed618eb2339f93d1c9",
"assets/assets/map_images/447_432image.jpg": "3815502092f273295afdf4e0d78eb677",
"assets/assets/map_images/450image.jpg": "48c1d36a49ad6de8d1b1ed760036334b",
"assets/assets/map_images/451image.jpg": "6c00cb1368ae7e615088a0d197191ca8",
"assets/assets/map_images/454image.jpg": "8151eeb5e4bad313e18e29e8170ddcad",
"assets/assets/map_images/457image.jpg": "bad71d4513421a387720c51f9c8b8393",
"assets/assets/map_images/458image.jpg": "12d2ace5e2f597d378f08e967b21d1ad",
"assets/assets/map_images/461image.jpg": "4ef5c0297f0ce0b7650875f68a0c9276",
"assets/assets/map_images/462image.jpg": "13c15ffcc102e329a6fba8c5f4a771f6",
"assets/assets/map_images/469image.jpg": "b40a5125e4b5273f7de4ef7d4ced402e",
"assets/assets/map_images/471image.jpg": "245950d966be6a769e5a3be9b4df5c74",
"assets/assets/map_images/477image.jpg": "efbfe034b101ab75dbc36fa3ffad0110",
"assets/assets/map_images/479image.jpg": "b366376a16ffe36f2ac4b7bc3f059808",
"assets/assets/map_images/480image.jpg": "b49d4caa5ba0724023845f77aa361f67",
"assets/assets/map_images/490image.jpg": "910d3eeccd801d9d2589ff11ae1509e6",
"assets/assets/map_images/495image.jpg": "5968abf687947c4efd7130db8f50ec84",
"assets/assets/panarama_image/choice1_left.jpg": "477ac2a4d6325f7e9def8b9fe7b86b06",
"assets/assets/panarama_image/choice2_right.jpg": "21c96e3095ce7e2634b444ca1daadf27",
"assets/assets/panarama_image/panarama_image_10.png": "1863770696ec465bccec09e979dc8c97",
"assets/assets/panarama_image/panarama_image_6.png": "197ae18ef75b8a87a5f3c3199fd407c0",
"assets/assets/panarama_image/panarama_image_7.png": "1a7a40a83c2de3f800cbd2c46cef6000",
"assets/assets/panarama_image/panarama_image_8.png": "154d2c353a24c6b2e6f297bad62e4eaf",
"assets/assets/panarama_image/panarama_image_9.png": "bc4604d35b813ecfad2e8dbfc185abf5",
"assets/assets/panarama_image/panaram_image_1.png": "bb736a2224af3d8f16e6ed02893a0689",
"assets/assets/panarama_image/panaram_image_2.png": "85fa011364361304686f60f70035a0a7",
"assets/assets/panarama_image/panaram_image_3.png": "9c909f78d89faf80e2d2862963f3eff3",
"assets/assets/panarama_image/panaram_image_4.png": "3ca9315f4a9fb89323266c32b654a7f7",
"assets/assets/panarama_image/panaram_image_5.png": "ac77593d9883acd65db7d2b22ae2ea60",
"assets/assets/paralax_new/bk.jpeg": "39bcc5580723f76d4e952621560b5b60",
"assets/assets/paralax_new/building.png": "778260fd1de9029e44fb1653a744c44c",
"assets/assets/paralax_new/character_nikos/character_nikos_lottie.json": "8c564d7fe7ee5db25213d2a204d390cc",
"assets/assets/paralax_new/character_nikos/images/img_0.png": "9ead68cf0737d9f1f347af0aa902a473",
"assets/assets/paralax_new/character_nikos/images/img_1.png": "36a453142d5122e051b149fd5b449622",
"assets/assets/paralax_new/character_nikos/images/img_10.png": "c8d5f558cdc09f2096420c5a13b087dc",
"assets/assets/paralax_new/character_nikos/images/img_11.png": "7dc0eb2210f93d88972e6d5247848f49",
"assets/assets/paralax_new/character_nikos/images/img_12.png": "8f9c5606107c16ae919c24263f65126e",
"assets/assets/paralax_new/character_nikos/images/img_13.png": "70d92dc7e30c88cebc7ba495e0df467a",
"assets/assets/paralax_new/character_nikos/images/img_14.png": "f624d5665188ed74ba0a80a4ae630e9d",
"assets/assets/paralax_new/character_nikos/images/img_15.png": "0b9b5f3debbadef5a30b15bf0333d5e1",
"assets/assets/paralax_new/character_nikos/images/img_16.png": "252affd95495fdaf4d4b990a4fd21257",
"assets/assets/paralax_new/character_nikos/images/img_17.png": "62200d74d3b6d3db9dfafea0582f1e1a",
"assets/assets/paralax_new/character_nikos/images/img_18.png": "4379333b0969e2aa95c41da105404c9e",
"assets/assets/paralax_new/character_nikos/images/img_19.png": "f53aca435db7ee1a9fea962d6cafd1af",
"assets/assets/paralax_new/character_nikos/images/img_2.png": "904c4b074749b59c8d547ac2617383b8",
"assets/assets/paralax_new/character_nikos/images/img_20.png": "a31c51c9e0e1bd456bc2ec3af7be0b50",
"assets/assets/paralax_new/character_nikos/images/img_21.png": "d1503d41d463bc06e42cd8527b110657",
"assets/assets/paralax_new/character_nikos/images/img_22.png": "5a1765464286076de4b4e604232bff07",
"assets/assets/paralax_new/character_nikos/images/img_23.png": "c2fb338eaddc9b6f9acbd4189cbfc398",
"assets/assets/paralax_new/character_nikos/images/img_24.png": "71de12b1de2a70039bf0999832a6b5c5",
"assets/assets/paralax_new/character_nikos/images/img_25.png": "3e49c49dd3a77b127eac1db5cb430e7c",
"assets/assets/paralax_new/character_nikos/images/img_26.png": "d9dc6d590a1f3552b85b23443b84a2f1",
"assets/assets/paralax_new/character_nikos/images/img_27.png": "40bd733dca83470d83717d3cb5e4469e",
"assets/assets/paralax_new/character_nikos/images/img_28.png": "0a94989aefe59fa9679cc03e25f67b68",
"assets/assets/paralax_new/character_nikos/images/img_3.png": "2f63d8550ca38a232146b1c076a81a6b",
"assets/assets/paralax_new/character_nikos/images/img_4.png": "ba3881cf341b4ff431a1d853fdef1735",
"assets/assets/paralax_new/character_nikos/images/img_5.png": "da09fc1cc67eddf7c6fb2c80f2933bfa",
"assets/assets/paralax_new/character_nikos/images/img_6.png": "569500b82325ca26262ab36feca7e1d3",
"assets/assets/paralax_new/character_nikos/images/img_7.png": "3c80d0f7607616700d2855daacace165",
"assets/assets/paralax_new/character_nikos/images/img_8.png": "7f59e5ab53120e3552b2d6a6c4d57afc",
"assets/assets/paralax_new/character_nikos/images/img_9.png": "a46d52506acdc62311479916ac7ff622",
"assets/assets/paralax_new/character_nikos_lottie.gif": "8f914b65c72cbca82fd95dea62a2432b",
"assets/assets/paralax_new/clouds.png": "b4391d9ed867a44da9441a8d072d06c6",
"assets/assets/paralax_new/clouds2.png": "d3d7de3d4ae110efd8b53491467811b5",
"assets/assets/paralax_new/crow/crow.json": "97a79f26f0a132374f18788954bdf582",
"assets/assets/paralax_new/crow/images/img_0.png": "900d077445883ea6d362bd61672d9d38",
"assets/assets/paralax_new/crow/images/img_1.png": "cabce1840b7806c58f3092ac92a26a6d",
"assets/assets/paralax_new/crow/images/img_10.png": "18a0c08780418f94b4943fd97c01e6f4",
"assets/assets/paralax_new/crow/images/img_11.png": "7355f0df713e7f3b07dd10fac2a7cb06",
"assets/assets/paralax_new/crow/images/img_12.png": "bba9dc85538ec57921892a03e3e4ea56",
"assets/assets/paralax_new/crow/images/img_13.png": "a9f28384e98421e9d73cd1945c7558cd",
"assets/assets/paralax_new/crow/images/img_14.png": "361c3298a1dcdd7e39be62cd74743163",
"assets/assets/paralax_new/crow/images/img_2.png": "361c3298a1dcdd7e39be62cd74743163",
"assets/assets/paralax_new/crow/images/img_3.png": "a9f28384e98421e9d73cd1945c7558cd",
"assets/assets/paralax_new/crow/images/img_4.png": "bba9dc85538ec57921892a03e3e4ea56",
"assets/assets/paralax_new/crow/images/img_5.png": "7355f0df713e7f3b07dd10fac2a7cb06",
"assets/assets/paralax_new/crow/images/img_6.png": "18a0c08780418f94b4943fd97c01e6f4",
"assets/assets/paralax_new/crow/images/img_7.png": "67126031258120ca9264e8d1773dc724",
"assets/assets/paralax_new/crow/images/img_8.png": "f0120f7742096426da6a96d1f414fe75",
"assets/assets/paralax_new/crow/images/img_9.png": "67126031258120ca9264e8d1773dc724",
"assets/assets/paralax_new/crowd/crowd.json": "431d89678e606b40089a3961825cd001",
"assets/assets/paralax_new/crowd/images/crowd_00.png": "1ea8bebfb9cabc3c49321dcb574e6e3c",
"assets/assets/paralax_new/crowd/images/crowd_01.png": "f855549f74ebc69a1beb19371b4e3549",
"assets/assets/paralax_new/crowd/images/crowd_02.png": "f074c68cad798dafa37165ee4c815e00",
"assets/assets/paralax_new/crowd/images/crowd_03.png": "d79debb3dbe7a96563f634c892130f3c",
"assets/assets/paralax_new/crowd/images/crowd_04.png": "0013d0c2e06df8e15b66132a57c5ed75",
"assets/assets/paralax_new/crowd/images/crowd_05.png": "3c7c0da33d64e5358f2543120bbe97b8",
"assets/assets/paralax_new/crowd/images/crowd_06.png": "8c9d49092f473f68351825dc0b0c417c",
"assets/assets/paralax_new/crowd/images/crowd_07.png": "904cff6febda4157a29fb399fd7fc8a6",
"assets/assets/paralax_new/crowd/images/crowd_08.png": "9c378fdcaf01d967039e88ab338a0dff",
"assets/assets/paralax_new/crowd/images/crowd_09.png": "a8c835f15d5d23e419046e334fe9152a",
"assets/assets/paralax_new/crowd/images/crowd_10.png": "c9fab133e9f78020c15c733edd4e7def",
"assets/assets/paralax_new/crowd/images/crowd_11.png": "3323c313d139a0d755ac8d37a4d25acb",
"assets/assets/paralax_new/crowd/images/crowd_12.png": "059f8aaafdc5b5fa526c2108ba84c563",
"assets/assets/paralax_new/crowd/images/crowd_13.png": "b6a43dd853e4fe76d2871b0078e000f4",
"assets/assets/paralax_new/crowd/images/crowd_14.png": "a0853b154b02c1a708d68d19f4732327",
"assets/assets/paralax_new/crowd/images/crowd_15.png": "7ad41751d2c87bcd8ae9c2daa5147186",
"assets/assets/paralax_new/crowd/images/crowd_16.png": "f93b0d5c00b894c00aa814181ba73f93",
"assets/assets/paralax_new/crowd/images/crowd_17.png": "8ca5d0cf64ecb31b4f84f539d2f1ca34",
"assets/assets/paralax_new/crowd/images/crowd_18.png": "146350f5317e676e9fb5442fe0819271",
"assets/assets/paralax_new/crowd/images/crowd_19.png": "c6cce1b55590b7e7d20b1187ce0ae961",
"assets/assets/paralax_new/crowd/images/crowd_20.png": "7253e8fee8c347936e2b373eb8d85c61",
"assets/assets/paralax_new/crowd/images/crowd_21.png": "5cb0fabf46d21a964d1a7b18aa61da20",
"assets/assets/paralax_new/crowd/images/crowd_22.png": "1c1c0da3342b5bc99f8a12767333171f",
"assets/assets/paralax_new/crowd/images/crowd_23.png": "d1d138cf6498f813bdee9fdc22ea79ac",
"assets/assets/paralax_new/crowd/images/crowd_24.png": "1a87e8841498f08ca4e70872f4a2e131",
"assets/assets/paralax_new/crowd/images/crowd_25.png": "b8f20723c9ad5904bdb33f861880a42e",
"assets/assets/paralax_new/crowd/images/crowd_26.png": "6848050995cbdb2caf55b4e29df44e09",
"assets/assets/paralax_new/crowd/images/crowd_27.png": "76449d2f65d647f69f5c380ef164dbf1",
"assets/assets/paralax_new/crowd/images/crowd_28.png": "42345e11670d06d547a2e71481d20e60",
"assets/assets/paralax_new/crowd/images/crowd_29.png": "1e7e72e7d66c6446551076f98bded9bf",
"assets/assets/paralax_new/crowd/images/crowd_30.png": "6199b6b164f3d01b495bf5eb1f3e807b",
"assets/assets/paralax_new/crowd/images/crowd_31.png": "d85a35d44b419149806ecf9e7291e1a0",
"assets/assets/paralax_new/crowd/images/crowd_32.png": "db7071cbaba6092c4a3cec734257da9e",
"assets/assets/paralax_new/crowd/images/crowd_33.png": "3a8e033a185f062b888ae70cb1f57148",
"assets/assets/paralax_new/crowd/images/crowd_34.png": "cbb10b3aef7136f2a1625b737d26222a",
"assets/assets/paralax_new/crowd/images/crowd_35.png": "6e8fc0c5668195ab83cf57bad1e5e5f5",
"assets/assets/paralax_new/crowd/images/crowd_36.png": "9909db0a99ab2469ddb8bfde37f95723",
"assets/assets/paralax_new/crowd/images/crowd_37.png": "266e609a65018030f3853dc759fd8703",
"assets/assets/paralax_new/crowd/images/crowd_38.png": "02861559be40623eca78dfb6aa4fa47f",
"assets/assets/paralax_new/crowd/images/crowd_39.png": "1ea8bebfb9cabc3c49321dcb574e6e3c",
"assets/assets/paralax_new/crowd/images/crowd_40.png": "1ea8bebfb9cabc3c49321dcb574e6e3c",
"assets/assets/paralax_new/crowd/images/crowd_41.png": "1ea8bebfb9cabc3c49321dcb574e6e3c",
"assets/assets/paralax_new/crowd/images/crowd_42.png": "1ea8bebfb9cabc3c49321dcb574e6e3c",
"assets/assets/paralax_new/crowd/images/crowd_43.png": "1ea8bebfb9cabc3c49321dcb574e6e3c",
"assets/assets/paralax_new/crowd/images/crowd_44.png": "1ea8bebfb9cabc3c49321dcb574e6e3c",
"assets/assets/paralax_new/crowd/images/crowd_45.png": "1ea8bebfb9cabc3c49321dcb574e6e3c",
"assets/assets/paralax_new/crowd/images/crowd_46.png": "1ea8bebfb9cabc3c49321dcb574e6e3c",
"assets/assets/paralax_new/crowd/images/crowd_47.png": "1ea8bebfb9cabc3c49321dcb574e6e3c",
"assets/assets/paralax_new/crowd/images/crowd_bg.png": "12f3f9b9d512feb37db9c48002556441",
"assets/assets/paralax_new/crows/crows.json": "5d85407d123337771e99e7174eee7d3a",
"assets/assets/paralax_new/crows/images/img_0.png": "ee0a6c2ae3b640e5ec904a9c8ca596e8",
"assets/assets/paralax_new/crows/images/img_1.png": "b34ce8a58b14a2a16c8d9be13c0433fc",
"assets/assets/paralax_new/crows/images/img_10.png": "9f31271ed1c63be28b18eb1bb3abd35d",
"assets/assets/paralax_new/crows/images/img_11.png": "e0036cbfd63a2a2844237ea94a1a7cb8",
"assets/assets/paralax_new/crows/images/img_12.png": "98cfde91b1cc2e1fa2725500942102e0",
"assets/assets/paralax_new/crows/images/img_13.png": "8dd5170a1e260fea9da38f6dd422bd48",
"assets/assets/paralax_new/crows/images/img_14.png": "64c70a07bb36e280e12dd2c6c78960a7",
"assets/assets/paralax_new/crows/images/img_2.png": "64c70a07bb36e280e12dd2c6c78960a7",
"assets/assets/paralax_new/crows/images/img_3.png": "8dd5170a1e260fea9da38f6dd422bd48",
"assets/assets/paralax_new/crows/images/img_4.png": "98cfde91b1cc2e1fa2725500942102e0",
"assets/assets/paralax_new/crows/images/img_5.png": "e0036cbfd63a2a2844237ea94a1a7cb8",
"assets/assets/paralax_new/crows/images/img_6.png": "9f31271ed1c63be28b18eb1bb3abd35d",
"assets/assets/paralax_new/crows/images/img_7.png": "816a934482dfd10c4d8739a0e12f38a1",
"assets/assets/paralax_new/crows/images/img_8.png": "a2586e86155bb0dc7942b4b07dd93f1d",
"assets/assets/paralax_new/crows/images/img_9.png": "816a934482dfd10c4d8739a0e12f38a1",
"assets/assets/paralax_new/fighters_left/fighters_left.json": "d137894cc49deb52389c712798e900c1",
"assets/assets/paralax_new/fighters_left/images/fighters_single_00.png": "3fd9fac96711a0201e993abc0de99f57",
"assets/assets/paralax_new/fighters_left/images/fighters_single_01.png": "4666ee1ea025c06053f30008d5bd3016",
"assets/assets/paralax_new/fighters_left/images/fighters_single_02.png": "c18334147b9fffe461d136cdb17b51a0",
"assets/assets/paralax_new/fighters_left/images/fighters_single_03.png": "1d983fdf05e8b060b05bf0e642116307",
"assets/assets/paralax_new/fighters_left/images/fighters_single_04.png": "e72b5c3bcb3a00ca14543adcfd160e8b",
"assets/assets/paralax_new/fighters_left/images/fighters_single_05.png": "f0aa9f95f1fbdfae3d608269b81c619d",
"assets/assets/paralax_new/fighters_left/images/fighters_single_06.png": "d4f0c172c9321fe63a8d9946633a43c0",
"assets/assets/paralax_new/fighters_left/images/fighters_single_07.png": "82966b54347e391d0749f9118276a2d3",
"assets/assets/paralax_new/fighters_left/images/fighters_single_08.png": "ccb6ebdcecee1c6216af389570fc709e",
"assets/assets/paralax_new/fighters_left/images/fighters_single_09.png": "2034867c131bf0995bf51316333cc594",
"assets/assets/paralax_new/fighters_left/images/fighters_single_10.png": "88399d4ee283244b63209bd7985621c1",
"assets/assets/paralax_new/fighters_left/images/fighters_single_11.png": "93bf2f07368f52fb8652e43afc42a012",
"assets/assets/paralax_new/fighters_left/images/fighters_single_12.png": "3b4f4e8ab3e93fa4522853ad419da2c6",
"assets/assets/paralax_new/fighters_left/images/fighters_single_13.png": "783c7481aa6daf2dae146e1b6dfdbdf6",
"assets/assets/paralax_new/fighters_left/images/fighters_single_14.png": "f582cf7cd27a28bdcbac10128bb9ed5a",
"assets/assets/paralax_new/fighters_left/images/fighters_single_15.png": "c180f64a5ef2cf032557588f3b2becc2",
"assets/assets/paralax_new/fighters_left/images/fighters_single_16.png": "4a99ecdb29999da2dba980847cea8d54",
"assets/assets/paralax_new/fighters_left/images/fighters_single_17.png": "a5d0d020f9152a68c75c8ef35d394424",
"assets/assets/paralax_new/fighters_left/images/fighters_single_18.png": "52d7f2ecb9278420cd04e799d7325411",
"assets/assets/paralax_new/fighters_left/images/fighters_single_19.png": "ac80aef44a41f8ebc142f4f4f236eb2f",
"assets/assets/paralax_new/fighters_left/images/fighters_single_20.png": "b1192f7f2a2622713eb80d1a978c1683",
"assets/assets/paralax_new/fighters_left/images/fighters_single_21.png": "93e883865c4c4462a34115a6cd0fafb9",
"assets/assets/paralax_new/fighters_left/images/fighters_single_22.png": "8378805559a26cd10677b26b3991c230",
"assets/assets/paralax_new/fighters_left/images/fighters_single_23.png": "5d6785cfd7fe02011dc459352ab16e4d",
"assets/assets/paralax_new/fighters_left/images/fighters_single_24.png": "8abe5e746649c61ac8687779929c0ea0",
"assets/assets/paralax_new/fighters_left/images/fighters_single_25.png": "2b0fdba0ca4291236df4cb0fd7f2e008",
"assets/assets/paralax_new/fighters_left/images/fighters_single_26.png": "44d51fa567a80e3f5c79e54ef549fcb6",
"assets/assets/paralax_new/fighters_left/images/fighters_single_27.png": "503fec9da3d7adbef4fc70b2c242b5a2",
"assets/assets/paralax_new/fighters_left/images/fighters_single_28.png": "e094d6a381af5d3c3b8c1dd90f3b906a",
"assets/assets/paralax_new/fighters_left/images/fighters_single_29.png": "30c3a2be045b6c409306f10b1b96adc5",
"assets/assets/paralax_new/fighters_left/images/fighters_single_30.png": "f1b0070a62396512340c381abb3e91a7",
"assets/assets/paralax_new/fighters_left/images/fighters_single_31.png": "792aae3d02604df2b5d159a6f4d950a8",
"assets/assets/paralax_new/fighters_left/images/fighters_single_32.png": "3d32be17341d8597e5ee1bbe2d6bf305",
"assets/assets/paralax_new/fighters_left/images/fighters_single_33.png": "4665893c8ac13525625cdd94551aeb60",
"assets/assets/paralax_new/fighters_left/images/fighters_single_34.png": "dcbfd7bce0040040267a572609df0967",
"assets/assets/paralax_new/fighters_left/images/fighters_single_35.png": "0bc599f6517566badd7e87f0d0922fbe",
"assets/assets/paralax_new/fighters_left/images/fighters_single_36.png": "bf666e2903016e17cb9269f01aa2c8f8",
"assets/assets/paralax_new/fighters_left/images/fighters_single_37.png": "e16c1c646ea2f9736ac198c6aba5b592",
"assets/assets/paralax_new/fighters_left/images/fighters_single_38.png": "5a5b1d8cc19f3763f7e3e8e76006d082",
"assets/assets/paralax_new/fighters_left/images/fighters_single_39.png": "726d92e93d598e4f6eb2146df4f372ed",
"assets/assets/paralax_new/fighters_left/images/fighters_single_40.png": "917b640c08120c6813939fb3c5586f74",
"assets/assets/paralax_new/fighters_left/images/fighters_single_41.png": "dd46bf1320ad1c06f3a0694ec8bb4992",
"assets/assets/paralax_new/fighters_left/images/fighters_single_42.png": "e478d3ff72608fa497204840b58d544f",
"assets/assets/paralax_new/fighters_left/images/fighters_single_43.png": "ba9b28124748bdc99f1250d262d5347b",
"assets/assets/paralax_new/fighters_left/images/fighters_single_44.png": "975cd18453765c542cf9531b0d2757ba",
"assets/assets/paralax_new/fighters_left/images/fighters_single_45.png": "3a5e3d818d00a5aa0cf9083df70d3868",
"assets/assets/paralax_new/fighters_left/images/fighters_single_46.png": "5cd58ff7f6d45103c56430cc8c13632d",
"assets/assets/paralax_new/fighters_left/images/fighters_single_47.png": "3fd9fac96711a0201e993abc0de99f57",
"assets/assets/paralax_new/fighters_left.png": "06065810cdf3fb588ca091922e1ef205",
"assets/assets/paralax_new/fighters_right/fighters_right.json": "8c9afef3629b2104b8af46099379aafd",
"assets/assets/paralax_new/fighters_right/images/fighters_right_00.png": "9ff93b1b91fbe63fd1cca3504053a86f",
"assets/assets/paralax_new/fighters_right/images/fighters_right_01.png": "c401d217c97a27b476f380ada88fa182",
"assets/assets/paralax_new/fighters_right/images/fighters_right_02.png": "4dd0732f2d1c8bbcce804dbfc104b777",
"assets/assets/paralax_new/fighters_right/images/fighters_right_03.png": "fe8d5d9b286a1643d73c70561a771733",
"assets/assets/paralax_new/fighters_right/images/fighters_right_04.png": "95ffbec818e3621d9c72ffd74725c244",
"assets/assets/paralax_new/fighters_right/images/fighters_right_05.png": "e868f4e3cb83f101de7ab96c86d0f43d",
"assets/assets/paralax_new/fighters_right/images/fighters_right_06.png": "373464161d92af90c4610c854cf8ba97",
"assets/assets/paralax_new/fighters_right/images/fighters_right_07.png": "fe672a89b82e9750edc4ab5787498308",
"assets/assets/paralax_new/fighters_right/images/fighters_right_08.png": "480578358f63b1bf42480f5840680277",
"assets/assets/paralax_new/fighters_right/images/fighters_right_09.png": "0f04f02e421eda027fdf7e24f380fbca",
"assets/assets/paralax_new/fighters_right/images/fighters_right_10.png": "b86b327da38546b4ba0366785f2b3020",
"assets/assets/paralax_new/fighters_right/images/fighters_right_11.png": "a89b1b1a065151b3ccce733b7c10e33c",
"assets/assets/paralax_new/fighters_right/images/fighters_right_12.png": "088f499ab26f325a88b668b27511830c",
"assets/assets/paralax_new/fighters_right/images/fighters_right_13.png": "ed492f31d025a32c8daccc48addb7620",
"assets/assets/paralax_new/fighters_right/images/fighters_right_14.png": "8c63956b3531199cadc38e19b5d751b0",
"assets/assets/paralax_new/fighters_right/images/fighters_right_15.png": "163ea9681fc5852da03cae5a7200b021",
"assets/assets/paralax_new/fighters_right/images/fighters_right_16.png": "49be29250c4e069c8afb8851164b7a22",
"assets/assets/paralax_new/fighters_right/images/fighters_right_17.png": "1ef9f2d03b72b8d8ebcac9efc3ef9375",
"assets/assets/paralax_new/fighters_right/images/fighters_right_18.png": "e42fbf65327356f9fa65aec35b2dbe2d",
"assets/assets/paralax_new/fighters_right/images/fighters_right_19.png": "64080747c34b7fa28bd96d372143912d",
"assets/assets/paralax_new/fighters_right/images/fighters_right_20.png": "07a818377d0e65ea633fa70ab88e1584",
"assets/assets/paralax_new/fighters_right/images/fighters_right_21.png": "c9cc36e777d6c8e4a38295a639437146",
"assets/assets/paralax_new/fighters_right/images/fighters_right_22.png": "53dd27b862d8833a43eec078d9148693",
"assets/assets/paralax_new/fighters_right/images/fighters_right_23.png": "898da8c430cd4822b9a90dfafefbe9f0",
"assets/assets/paralax_new/fighters_right/images/fighters_right_24.png": "e95c98e312ffdf48d3125235864f6bfa",
"assets/assets/paralax_new/fighters_right/images/fighters_right_25.png": "9ed1dcda4cd26d37c40a9bb0f00488f6",
"assets/assets/paralax_new/fighters_right/images/fighters_right_26.png": "d7ec794f1ab7475e30b66d8986c2e0c2",
"assets/assets/paralax_new/fighters_right/images/fighters_right_27.png": "bc6b039be6685735b6de0aa8bbb1820b",
"assets/assets/paralax_new/fighters_right/images/fighters_right_28.png": "85b47d303ac429187f000e7e78e750ea",
"assets/assets/paralax_new/fighters_right/images/fighters_right_29.png": "b1064ac689678da6228a5ee6b957c6ac",
"assets/assets/paralax_new/fighters_right/images/fighters_right_30.png": "d346bcc4ba35cd97d2dacb0252c968bd",
"assets/assets/paralax_new/fighters_right/images/fighters_right_31.png": "cd756f90bee8c720f1996a52b3a332cc",
"assets/assets/paralax_new/fighters_right/images/fighters_right_32.png": "8333d2b3a3f652d8c5c18dc6b467a557",
"assets/assets/paralax_new/fighters_right/images/fighters_right_33.png": "4aaf95bb431fc96fda5f4e0d8aee65bc",
"assets/assets/paralax_new/fighters_right/images/fighters_right_34.png": "b9975b05595f197316f29c7386fa36fa",
"assets/assets/paralax_new/fighters_right/images/fighters_right_35.png": "d459695996f6118e27d537041d1f4f23",
"assets/assets/paralax_new/fighters_right/images/fighters_right_36.png": "9f9cf85f98915acf4f78756791c98570",
"assets/assets/paralax_new/fighters_right/images/fighters_right_37.png": "48caa07295cbb277eff1d1334a5d44ce",
"assets/assets/paralax_new/fighters_right/images/fighters_right_38.png": "75bd99909d5df5d008e11d28014a3f28",
"assets/assets/paralax_new/fighters_right/images/fighters_right_39.png": "040c321e2cdb6ce0a812acde4fc10505",
"assets/assets/paralax_new/fighters_right/images/fighters_right_40.png": "b0e27eee50054db35ede0dec99e3b1e6",
"assets/assets/paralax_new/fighters_right/images/fighters_right_41.png": "9b599d981e9cd3b1ea70ca73e96d9d11",
"assets/assets/paralax_new/fighters_right/images/fighters_right_42.png": "931a938e1a69b346a08a8318c34bba9f",
"assets/assets/paralax_new/fighters_right/images/fighters_right_43.png": "d7a7aca42b3eacdb5448523094afee4c",
"assets/assets/paralax_new/fighters_right/images/fighters_right_44.png": "903d6c5969972e358e95681181e83146",
"assets/assets/paralax_new/fighters_right/images/fighters_right_45.png": "12c33ac82d6fd9db3787782446a68d6b",
"assets/assets/paralax_new/fighters_right/images/fighters_right_46.png": "d751d36cc2b5790d995ad0fca1711546",
"assets/assets/paralax_new/fighters_right/images/fighters_right_47.png": "9ff93b1b91fbe63fd1cca3504053a86f",
"assets/assets/paralax_new/fire/fire.json": "f17c546384809105f58b99b67ba70c9f",
"assets/assets/paralax_new/fire/images/img_0.png": "d990d068229892b34b93fa3c1398a7ca",
"assets/assets/paralax_new/fire/images/img_1.png": "c6de2aeda2203e2dc1af239dbf88cc11",
"assets/assets/paralax_new/fire/images/img_10.png": "a261d34528f0432e5ba7064be69dd99c",
"assets/assets/paralax_new/fire/images/img_11.png": "ebe37006a85ec3734ba380cc96212c0c",
"assets/assets/paralax_new/fire/images/img_12.png": "2080161115d291e0a908a15c3c57b66e",
"assets/assets/paralax_new/fire/images/img_13.png": "a6951b48cfeaa47da8e0a3884a47f7de",
"assets/assets/paralax_new/fire/images/img_14.png": "a7e0919404caf758366b8386a82175c8",
"assets/assets/paralax_new/fire/images/img_15.png": "e1bb05be14aba4d75fb2d88e0640de81",
"assets/assets/paralax_new/fire/images/img_16.png": "b47fad2fcbddd6657cc0c5ab8d681c44",
"assets/assets/paralax_new/fire/images/img_17.png": "d6e9feee01bbd6cb9fe48d282a08c8cf",
"assets/assets/paralax_new/fire/images/img_18.png": "15e36ad2b0d7a2c1861525d4152028eb",
"assets/assets/paralax_new/fire/images/img_19.png": "23a95c5b8179dbaf07c197e269a71a2a",
"assets/assets/paralax_new/fire/images/img_2.png": "0a7ed533b8b8b5f8826e795f2faada8c",
"assets/assets/paralax_new/fire/images/img_20.png": "eb8bc563c4ab4908eba96c66dbda940c",
"assets/assets/paralax_new/fire/images/img_21.png": "1715d4fc44caca50c501b92b53bb95f9",
"assets/assets/paralax_new/fire/images/img_22.png": "d5d801e9a17f7c155dbaad6951dd768c",
"assets/assets/paralax_new/fire/images/img_23.png": "fea95e687ddb9357f136df911f50440c",
"assets/assets/paralax_new/fire/images/img_3.png": "da138f58518b828bed247db0ebf105c5",
"assets/assets/paralax_new/fire/images/img_4.png": "d5f37c96c80ba590aa44f1eebc2e5013",
"assets/assets/paralax_new/fire/images/img_5.png": "c3d118206adf8a0966535d18f87e8d65",
"assets/assets/paralax_new/fire/images/img_6.png": "2718336e9fb84c5de73b7499ac409145",
"assets/assets/paralax_new/fire/images/img_7.png": "25be0065e951448ea1a83dd77c820126",
"assets/assets/paralax_new/fire/images/img_8.png": "4f71ae72e1644e90e292ef16c9e96aa4",
"assets/assets/paralax_new/fire/images/img_9.png": "0054b98720b5078aac6b60c689156760",
"assets/assets/paralax_new/hottub/hottub.json": "7e4c12a083097b93eb8594667738070a",
"assets/assets/paralax_new/hottub/images/hand_00.png": "8e5e38a5e07625ec4124aa6f333b27a8",
"assets/assets/paralax_new/hottub/images/hand_01.png": "7ddeaa0c9e3ff7dbd8247d8fe33c36ce",
"assets/assets/paralax_new/hottub/images/hand_02.png": "fd18cbb5e65e046a257878831b93235b",
"assets/assets/paralax_new/hottub/images/hand_03.png": "82841352f6bb66f5d749d16389ef6969",
"assets/assets/paralax_new/hottub/images/hand_04.png": "09cf8a718cf23b67538d1c30e4041a62",
"assets/assets/paralax_new/hottub/images/hand_05.png": "c887ec661f1aa5003506376519a3c145",
"assets/assets/paralax_new/hottub/images/hand_06.png": "23330b2a7e694dc16cce6a2d3a26d9cd",
"assets/assets/paralax_new/hottub/images/hand_07.png": "9c6539e7bad3d45f25d6a59c432dd310",
"assets/assets/paralax_new/hottub/images/hand_08.png": "c8e0e2c455f9e1aab74a7ed8d20ec6de",
"assets/assets/paralax_new/hottub/images/hottub_bottom.png": "c77a35788ff99a55109248054b0ec2b4",
"assets/assets/paralax_new/hottub/images/hottub_top.png": "2aa6df1a55ec6e372911c1cbdf6c54ea",
"assets/assets/paralax_new/hottub/images/water_00.png": "3d577745c3d428654c8e8917c82e9bd3",
"assets/assets/paralax_new/hottub/images/water_01.png": "ebedf551464ac5c8e143bae3914f0b7f",
"assets/assets/paralax_new/hottub/images/water_02.png": "b53b439f6f122d86d9ca35de74f77b3e",
"assets/assets/paralax_new/hottub/images/water_03.png": "e470ff6c5b5e72dd631d27eeb2655e81",
"assets/assets/paralax_new/hottub/images/water_04.png": "74f4a0d240fe38e14612502a500fb0ef",
"assets/assets/paralax_new/hottub/images/water_05.png": "6e505facc3fca93c4a8ed26c64e1cf76",
"assets/assets/paralax_new/hottub/images/water_06.png": "a0bf97bdbb6de557463eb6c3d3ebec7b",
"assets/assets/paralax_new/hottub/images/water_07.png": "4774524597109d10e7c6c12e44b4a62c",
"assets/assets/paralax_new/hottub/images/water_08.png": "2ed58fc1d3b2f89de004989031503e40",
"assets/assets/paralax_new/hottub/images/water_09.png": "0daa8cf06461ccc5240463eb1216f9bf",
"assets/assets/paralax_new/hottub/images/water_10.png": "348f79b2ec997d9453fb6e681230acff",
"assets/assets/paralax_new/hottub/images/water_11.png": "648757da4df1fa2a11334e6f39cb0b5c",
"assets/assets/paralax_new/hottub/images/water_12.png": "654a0c6255eca416d7d41ad6e123c7d4",
"assets/assets/paralax_new/hottub/images/water_13.png": "156b71a4b9a8455535a6301d8c15e099",
"assets/assets/paralax_new/hottub/images/water_14.png": "c77ca76789f02b17423e2d57ece61e64",
"assets/assets/paralax_new/hottub/images/water_15.png": "d9986b3644df1d844d9e4cdf7272236b",
"assets/assets/paralax_new/hottub/images/water_16.png": "e1c97ed1d80a2e9aafb6dcbe1062ab52",
"assets/assets/paralax_new/hottub/images/water_17.png": "d70a372b99752f70665b97583d09cdd8",
"assets/assets/paralax_new/hottub/images/water_18.png": "a7c42c74952fd2ad0cc51313fd1edcad",
"assets/assets/paralax_new/hottub/images/water_19.png": "615322d091ab58f891d6839d7be80560",
"assets/assets/paralax_new/hottub/images/water_20.png": "c946ef436c84e136516c392b8959ed3b",
"assets/assets/paralax_new/hottub/images/water_21.png": "9eab4754d1b05d188711c95acbb97f35",
"assets/assets/paralax_new/hottub/images/water_22.png": "10b3e300b1dd3e447cccb7601bfa299c",
"assets/assets/paralax_new/hottub/images/water_23.png": "37c559815830f902005f79b3ef0a082e",
"assets/assets/paralax_new/hottub/images/water_24.png": "19733b5b75fd1008ff269feac4543b23",
"assets/assets/paralax_new/hottub/images/water_25.png": "e20bfa0878ae0808d5f0874842b936df",
"assets/assets/paralax_new/hottub/images/water_26.png": "34940ef52aa77e2c57b9717591c29e12",
"assets/assets/paralax_new/hottub/images/water_27.png": "f9822ae7cc2ad75408ca922ba50d8cd9",
"assets/assets/paralax_new/hottub/images/water_28.png": "98a6a476ff329fd8d9abb33bea81704c",
"assets/assets/paralax_new/hottub/images/water_29.png": "ca0de63bfebc409be6ec490f2dbcbacc",
"assets/assets/paralax_new/hottub/images/water_30.png": "ce8e78cb493b627e71c83e244525bc09",
"assets/assets/paralax_new/hottub/images/water_31.png": "4b1eda0f549445b7e2f28c010f74beda",
"assets/assets/paralax_new/hottub/images/water_32.png": "0e247e06cdd8dd74f4737f072198718c",
"assets/assets/paralax_new/hottub/images/water_33.png": "683d379927360cd3622333936978569d",
"assets/assets/paralax_new/hottub/images/water_34.png": "20e6f52feef80e70a9c812222fda9778",
"assets/assets/paralax_new/hottub/images/water_35.png": "e17459910d95932224510531b13e6670",
"assets/assets/paralax_new/hottub/images/water_36.png": "384b7313253b6b9b1191429e7b7c6481",
"assets/assets/paralax_new/hottub/images/water_37.png": "f2640d5055b5c046b8c6c4991efc89c0",
"assets/assets/paralax_new/hottub/images/water_38.png": "424d7ff9ceb20892a55243bb4d0d1cb6",
"assets/assets/paralax_new/hottub/images/water_39.png": "6dc36d44aa1e2a5451bb05fbfb13ba44",
"assets/assets/paralax_new/hottub/images/water_40.png": "444a7351e9c43c82f9b1163dfdb56985",
"assets/assets/paralax_new/hottub/images/water_41.png": "13259036aca915a24182683dc2bdfe96",
"assets/assets/paralax_new/hottub/images/water_42.png": "2c77012f3a38fa00c129e7db2e2a5363",
"assets/assets/paralax_new/hottub/images/water_43.png": "1601d63a0674f93d143c9ec8db1f44e8",
"assets/assets/paralax_new/hottub/images/water_44.png": "e5b963a2fba676ea7c4f04852deafa9f",
"assets/assets/paralax_new/hottub/images/water_45.png": "f2b1ae1c6ada9f3ead1efeb57e3cf789",
"assets/assets/paralax_new/hottub/images/water_46.png": "57dc5971584ef22d5f88e73af23388ae",
"assets/assets/paralax_new/hottub/images/water_47.png": "04f100f1d7368cf95e0e33e8ed404d8d",
"assets/assets/paralax_new/tube2/images/tube2_bttm.png": "0f6b9e5ed62ac097f6925678b17f3145",
"assets/assets/paralax_new/tube2/images/tube2_head_00.png": "8e68768df13c0239f98a07d5e53377b1",
"assets/assets/paralax_new/tube2/images/tube2_head_01.png": "292b84e4fff3c55a595b6d2036d7a7d4",
"assets/assets/paralax_new/tube2/images/tube2_head_02.png": "79547359d0d4f5efe8f849e1b60e2bc7",
"assets/assets/paralax_new/tube2/images/tube2_head_03.png": "862cf4f711a017833283416cd29bd073",
"assets/assets/paralax_new/tube2/images/tube2_head_04.png": "2ce1a5b49fc2742dfb1ff2a2b5e499bf",
"assets/assets/paralax_new/tube2/images/tube2_head_05.png": "e7deb2460d04a25870ba397015acb959",
"assets/assets/paralax_new/tube2/images/tube2_head_06.png": "de49b87c1e484c90f1f8df2d435f0859",
"assets/assets/paralax_new/tube2/images/tube2_head_07.png": "bf5c50f8911759825ab418af11800595",
"assets/assets/paralax_new/tube2/images/tube2_head_08.png": "3cd1d2ce0ad38046f999e96e88bb8c75",
"assets/assets/paralax_new/tube2/images/tube2_head_09.png": "387aba123639c6d9573b0dde462995b5",
"assets/assets/paralax_new/tube2/images/tube2_head_10.png": "0af56d5c28d2a9b398d8d6b16d2ec6e3",
"assets/assets/paralax_new/tube2/images/tube2_head_11.png": "1254ba710a7a2f911c6858c9f2db9d02",
"assets/assets/paralax_new/tube2/images/tube2_head_12.png": "08f4fc1a704a154fd18111aeb451b338",
"assets/assets/paralax_new/tube2/images/tube2_head_13.png": "e06be26065567e9c51cc5daa0bd4fc97",
"assets/assets/paralax_new/tube2/images/tube2_head_14.png": "7b48128f684cbb77be86676a61135a8f",
"assets/assets/paralax_new/tube2/images/tube2_head_15.png": "178c977147e16a73c5653f1703f2433c",
"assets/assets/paralax_new/tube2/images/tube2_head_16.png": "5d8751c7739fc6c2b3742184d8d6f93e",
"assets/assets/paralax_new/tube2/images/tube2_head_17.png": "7eb5110f5ca5fb47f3719419cc7272ef",
"assets/assets/paralax_new/tube2/images/tube2_head_18.png": "e400579fc22b1eb47db01653891fdfd6",
"assets/assets/paralax_new/tube2/images/tube2_head_19.png": "edce163345c52c18018bfe7f55856008",
"assets/assets/paralax_new/tube2/images/tube2_head_20.png": "f549619027d7bf55ab3a944bc01266c6",
"assets/assets/paralax_new/tube2/images/tube2_head_21.png": "cd15a7368d08d916ce23096fa92226d0",
"assets/assets/paralax_new/tube2/images/tube2_head_22.png": "d7e2cb1e411828254a345f878d961944",
"assets/assets/paralax_new/tube2/images/tube2_head_23.png": "b7907da2e4badc781076577c73204fa1",
"assets/assets/paralax_new/tube2/images/tube2_water_00.png": "8ee885d707a78853372c5643e5a4c38a",
"assets/assets/paralax_new/tube2/images/tube2_water_01.png": "ef4553d765ee4f2362ce0b899583c41d",
"assets/assets/paralax_new/tube2/images/tube2_water_02.png": "478b87b6539d414ffdfc454633a97f60",
"assets/assets/paralax_new/tube2/images/tube2_water_03.png": "daa98e572d749c2bb8596c057a105a44",
"assets/assets/paralax_new/tube2/images/tube2_water_04.png": "0e628642a6017d299e73bc4d7c0dfe16",
"assets/assets/paralax_new/tube2/images/tube2_water_05.png": "f9fbdd48337cb01d24351dbb7f6a77e1",
"assets/assets/paralax_new/tube2/images/tube2_water_06.png": "b4aac960bb65d4a63f8b60253f645091",
"assets/assets/paralax_new/tube2/images/tube2_water_07.png": "44d6cc45711259b209b46c362cbecdb7",
"assets/assets/paralax_new/tube2/images/tube2_water_08.png": "d3331f081517b385ac0122d3dfdf210c",
"assets/assets/paralax_new/tube2/images/tube2_water_09.png": "0de595bdd7fb25d302b00a046e27cd91",
"assets/assets/paralax_new/tube2/images/tube2_water_10.png": "3c26d6024fcff91169db50736ea0d9ae",
"assets/assets/paralax_new/tube2/images/tube2_water_11.png": "676687ebc1377851ce116c99b7a2e169",
"assets/assets/paralax_new/tube2/images/tube2_water_12.png": "602ff2064b42cce850c8625958879f0f",
"assets/assets/paralax_new/tube2/images/tube2_water_13.png": "2c87f07912c6eb201b2b4c6706db6e43",
"assets/assets/paralax_new/tube2/images/tube2_water_14.png": "50cd0cf06895ab1305bf4c1cdda19d3c",
"assets/assets/paralax_new/tube2/images/tube2_water_15.png": "8dfebbc17287c60fc5d5f668e0e1d46a",
"assets/assets/paralax_new/tube2/images/tube2_water_16.png": "e160028aa66caf9104b813b9eb5afd53",
"assets/assets/paralax_new/tube2/images/tube2_water_17.png": "910305cc35d71c8e3bc60208ed4bf15d",
"assets/assets/paralax_new/tube2/images/tube2_water_18.png": "63658257a6979f0e0ba2f5a14eb98f50",
"assets/assets/paralax_new/tube2/images/tube2_water_19.png": "0bc121681a2414c0d80da42174582adf",
"assets/assets/paralax_new/tube2/images/tube2_water_20.png": "48be29aed6f7bb07682c5617f9509f0e",
"assets/assets/paralax_new/tube2/images/tube2_water_21.png": "ae4940b1d684e0d663a1b9b5152a123f",
"assets/assets/paralax_new/tube2/images/tube2_water_22.png": "acb889510e05f3afe718ea9c38d07599",
"assets/assets/paralax_new/tube2/images/tube2_water_23.png": "a27c57d76944842c5c02e9db677239d1",
"assets/assets/paralax_new/tube2/images/tube2_water_24.png": "a7f4a6ee7a26554f7317646963eb4fec",
"assets/assets/paralax_new/tube2/images/tube2_water_25.png": "0b13c35e6abdb203580efcae095eeedb",
"assets/assets/paralax_new/tube2/images/tube2_water_26.png": "e1f158000f4b4d65497342218ab7fe5e",
"assets/assets/paralax_new/tube2/images/tube2_water_27.png": "07bf15416ae740166ee750325b823f5e",
"assets/assets/paralax_new/tube2/images/tube2_water_28.png": "d7d32512468b3ad177a6356064851d17",
"assets/assets/paralax_new/tube2/images/tube2_water_29.png": "05f1904f40cf195b001713d66d0d1a00",
"assets/assets/paralax_new/tube2/images/tube2_water_30.png": "b65c608b9a6bea5517b3b81cc0550d35",
"assets/assets/paralax_new/tube2/images/tube2_water_31.png": "10f9b74dc00bc0ca909c1332c1047aa1",
"assets/assets/paralax_new/tube2/images/tube2_water_32.png": "a8670705e418adb2d17f5b478d2516f2",
"assets/assets/paralax_new/tube2/images/tube2_water_33.png": "23493ae4e40a2f8776262c4f4f951afa",
"assets/assets/paralax_new/tube2/images/tube2_water_34.png": "574c2c2f33a929c78ce4192af06270b7",
"assets/assets/paralax_new/tube2/images/tube2_water_35.png": "fbf658cbd05429bf1c6d665210216ca1",
"assets/assets/paralax_new/tube2/images/tube2_water_36.png": "67219c2ca8843f90d01a8b87a7a20cea",
"assets/assets/paralax_new/tube2/images/tube2_water_37.png": "8b5235dcf7bf471c6993d9e5231aad36",
"assets/assets/paralax_new/tube2/images/tube2_water_38.png": "88e81140b172ca1eb6b3bdfe666db988",
"assets/assets/paralax_new/tube2/images/tube2_water_39.png": "a495acc0e101d538a8012dfab4c37741",
"assets/assets/paralax_new/tube2/images/tube2_water_40.png": "63e2d6ff8dc082b305300f4cc1f6dd0e",
"assets/assets/paralax_new/tube2/images/tube2_water_41.png": "fd6a9966e5f96b411694e32aea8bf14c",
"assets/assets/paralax_new/tube2/images/tube2_water_42.png": "681e41ce8b988a49ef9c3839c751bd16",
"assets/assets/paralax_new/tube2/images/tube2_water_43.png": "0084f67010853ea68f8528552ae581e6",
"assets/assets/paralax_new/tube2/images/tube2_water_44.png": "85441672965978a9c129f7ad0dcfe72a",
"assets/assets/paralax_new/tube2/images/tube2_water_45.png": "dc8e56b630dbe122a5c3eb4d242dd28f",
"assets/assets/paralax_new/tube2/images/tube2_water_46.png": "66d67c075a4503e8e94c0410eab4f2b1",
"assets/assets/paralax_new/tube2/images/tube2_water_47.png": "9e54b272b7855cd2c6c126530cccae94",
"assets/assets/paralax_new/tube2/tube2.json": "aab297988154d52f56b9905a833f1ad8",
"assets/assets/paralax_new/tube2.png": "1b1a36d9d5c81e7c3070bc31657eb8e4",
"assets/assets/paralax_new/tube2_cloud.png": "a9122cd36142c54abafb73df9d3ef010",
"assets/assets/paralax_new/tube_cloud.png": "003109b6dcfad8dc0f4b17f53c4179e5",
"assets/assets/paralax_new/walker.png": "05c049e58c34c01b750530f3b766befe",
"assets/assets/paralax_new/young_man/images/young_man.png": "957acb4171ea0676c201e16d2916babe",
"assets/assets/paralax_new/young_man/images/young_man_head_00.png": "6150e39e2720f9d76a1fd0df143f0aee",
"assets/assets/paralax_new/young_man/images/young_man_head_01.png": "f9aa788c745c834828c636509eda452c",
"assets/assets/paralax_new/young_man/images/young_man_head_02.png": "3883bf6f395538014d6f9ea411ae86af",
"assets/assets/paralax_new/young_man/images/young_man_head_03.png": "372e3062579d0d6ecb5484e032384dcf",
"assets/assets/paralax_new/young_man/images/young_man_head_04.png": "93d097f459bf2d5cb9bc09ea04410d69",
"assets/assets/paralax_new/young_man/images/young_man_head_05.png": "9b743bef8854f35b172597a3f055bcc8",
"assets/assets/paralax_new/young_man/images/young_man_head_06.png": "1ce8ba581397092a9745d60739430a69",
"assets/assets/paralax_new/young_man/images/young_man_head_07.png": "f8c489dcb4297fe22d6228e996b67228",
"assets/assets/paralax_new/young_man/images/young_man_head_08.png": "4e2319ed540a9e2857d61f87785784af",
"assets/assets/paralax_new/young_man/images/young_man_head_09.png": "929b5fefe9b4c96c2b025d0d712284e8",
"assets/assets/paralax_new/young_man/images/young_man_head_10.png": "0b97791a831baddba172473ea44790c1",
"assets/assets/paralax_new/young_man/images/young_man_head_11.png": "e2249627aa067434eb4d19aefd672088",
"assets/assets/paralax_new/young_man/images/young_man_head_12.png": "1df319fdfd2b5865ee4ae7b9592c7937",
"assets/assets/paralax_new/young_man/images/young_man_head_13.png": "ec229a4e2f3f762da61f93d2a9f185e3",
"assets/assets/paralax_new/young_man/images/young_man_head_14.png": "222692129afa1032ef20333a387f151d",
"assets/assets/paralax_new/young_man/images/young_man_head_15.png": "4e0246d45228d45d906bcaf4db89d1e5",
"assets/assets/paralax_new/young_man/images/young_man_head_16.png": "999ac7701b28268d967c4070abee3d6a",
"assets/assets/paralax_new/young_man/images/young_man_head_17.png": "23acdb1fcfe472616637447fe4b2de04",
"assets/assets/paralax_new/young_man/images/young_man_head_18.png": "6e200a280c0fbdeb71b5edd2705aecfb",
"assets/assets/paralax_new/young_man/images/young_man_head_19.png": "8c5055278a23adbcebd901040901f366",
"assets/assets/paralax_new/young_man/images/young_man_head_20.png": "daf73bd21607ef2ded91fca250dae873",
"assets/assets/paralax_new/young_man/images/young_man_head_21.png": "737fee39cfb6c6032b241d192cb8e14a",
"assets/assets/paralax_new/young_man/images/young_man_head_22.png": "201b57e8af029ce0c303dea04ec235d4",
"assets/assets/paralax_new/young_man/images/young_man_head_23.png": "bae35748ab04971944e79702747835bd",
"assets/assets/paralax_new/young_man/young_man.json": "173b3f334be54de9404a58fec5a772d6",
"assets/assets/paralax_video.mp4": "5da0a178181ede7d9a4bc9aa760ab92f",
"assets/assets/practice_medicine/keep_going.png": "ed12ebbe172e2e020b24f9c1d7caf004",
"assets/assets/practice_medicine/medicine.png": "65b535888211707cc540f32a847fb7e9",
"assets/assets/practice_medicine/quit_medicine.png": "5045c4ece513a9b4e7d788cc492adc93",
"assets/assets/virus_gif/bubonic.gif": "640d64d32745ac13868bf89ec24c1212",
"assets/assets/virus_gif/ebola.gif": "7ab125a9618943d230e900d0bf8634c5",
"assets/assets/virus_gif/smallpox.gif": "63107baddedd111adc37428500de552c",
"assets/assets/virus_gif/typhoid.gif": "a202f58612fd84921472f7f1d154e3e2",
"assets/assets/virus_gif/typhus.gif": "984c044e5dab61574359878f95b115b0",
"assets/assets/virus_gif/virus_01.gif": "3360a15ce998efa04bb2a712d3472b49",
"assets/FontManifest.json": "afbe17c657d5c749f49aa89d7cf4b313",
"assets/fonts/BebasNeue-Regular.ttf": "21bb70b62317f276f2e97a919ff5bd8c",
"assets/fonts/Lora-Italic.ttf": "ab2098e1bf41df6b514fdf1f3d4f30b0",
"assets/fonts/Lora-Regular.ttf": "c684a3de5c014a61d5139d5b97da99fc",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/OpenSans-Italic.ttf": "f6238deb7f40a7a03134c11fb63ad387",
"assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/NOTICES": "ed1c52c1ef560609864610b3e449cf14",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4bcb55771c1689f95783ecbd2a143018",
"/": "4bcb55771c1689f95783ecbd2a143018",
"main.dart.js": "7e9a46012716681c622de7b3dfa87b8f",
"manifest.json": "8b17efcb50f6b137f5c660ddb0b57391",
"version.json": "1524b53f903b1c326060d5aeb13171cd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
