export type CommentItem = {
    id: string;
    handle: string;
    time: string;
    content: string;
    likes: number;
    avatar?: string;
    replies?: CommentItem[];
};

export type InfluencerClip = {
    id: string;
    handle: string;
    followers: string;
    duration: string;
    image: string;
    video: string;
};

export type ArchiveQuestion = {
    id: string;
    title: string;
    tag: string;
    replies: string;
    span: "tall" | "medium" | "short";
};

export const question = {
    tag: "Pregunta del día",
    title: "¿Cuál fue la peor cita que has tenido?",
};

export const archiveQuestions: ArchiveQuestion[] = [
    {
        id: "peor-cita",
        title: "¿Cuál fue la peor cita que has tenido?",
        tag: "Hoy",
        replies: "1.2k respuestas",
        span: "tall",
    },
    {
        id: "ghosteo",
        title: "¿A quién ghosteaste y todavía te da culpa?",
        tag: "Incómodo",
        replies: "864 respuestas",
        span: "medium",
    },
    {
        id: "mentira",
        title: "¿Qué mentira dices en todas tus citas?",
        tag: "Confesión",
        replies: "640 respuestas",
        span: "short",
    },
    {
        id: "toxico",
        title: "¿Quién de tu grupo es el más tóxico?",
        tag: "El grupo",
        replies: "1.1k respuestas",
        span: "medium",
    },
    {
        id: "chisme",
        title: "¿Cuál es el chisme que nunca contaste?",
        tag: "Secreto",
        replies: "972 respuestas",
        span: "tall",
    },
    {
        id: "borracho",
        title: "¿A quién le escribiste borracho esta semana?",
        tag: "Madrugada",
        replies: "508 respuestas",
        span: "short",
    },
    {
        id: "ex",
        title: "¿Sigues stalkeando a tu ex?",
        tag: "Honestidad",
        replies: "2.4k respuestas",
        span: "medium",
    },
    {
        id: "amigo",
        title: "¿Con quién de tus amigos no saldrías nunca?",
        tag: "Incómodo",
        replies: "733 respuestas",
        span: "short",
    },
    {
        id: "bloqueo",
        title: "¿A quién bloquearías si nadie se enterara?",
        tag: "Sin filtro",
        replies: "419 respuestas",
        span: "medium",
    },
];

export const getQuestionById = (id: string) =>
    archiveQuestions.find((item) => item.id === id);

export const defaultQuestion = archiveQuestions[0];

export const passCard = {
    tag: question.tag,
    prompt: "Responde:",
    question: question.title,
    scanHeadline: "Si alguien escanea esto, el chisme ya salió del paquete.",
    legal: "Promoción no relacionada con el producto alimenticio. Consulta Términos y Condiciones y Aviso de Privacidad en chismokis.com/legal. Vigencia y mecánica en el sitio. Prohibida su venta. Marcas de Gamesa® / Chokis® usadas bajo autorización.",
};

const influencerVideo = "/assets/chismokis-mi-ligue-tenia-novia.mp4";

export const influencers: InfluencerClip[] = [
    {
        id: "vale",
        handle: "@chulisimotl",
        followers: "125K seguidores",
        duration: "0:46",
        image: "/assets/chulisimotl-thumb.webp",
        video: influencerVideo,
    },
    {
        id: "Belén",
        handle: "@beligzl",
        followers: "89K seguidores",
        duration: "0:46",
        image: "/influencers/chismokis-clip-thumb.jpeg",
        video: influencerVideo,
    },
    {
        id: "fer",
        handle: "@fercantu",
        followers: "210K seguidores",
        duration: "0:46",
        image: "/assets/fer-cantu-thumb.webp",
        video: influencerVideo,
    },
];

export const initialComments: CommentItem[] = [
    {
        id: "c1",
        avatar: "/assets/avatars/avatar-01.webp",
        handle: "cookie_not_found_404_184729",
        time: "2m",
        content:
            "Llegó 40 minutos tarde, pidió el menú más caro, se tomó dos copas y al final me soltó que “solo quería ser amigos… pero si me quedaba a dormir no se iba a quejar”. Yo pagué. Lo dejé en la cuenta. Nunca más.",
        likes: 342,
        replies: [
            {
                id: "c1-r1",
                avatar: "/assets/avatars/avatar-07.webp",
                handle: "cookie_not_found_404_551203",
                time: "1m",
                content:
                    "El “si te quedas no me quejo” es el red flag con moño. Yo también pagué. Nunca más es poco.",
                likes: 88,
            },
            {
                id: "c1-r2",
                avatar: "/assets/avatars/avatar-04.webp",
                handle: "cookie_not_found_404_882014",
                time: "ahora",
                content: "¿Y todavía le dio like a tu story al día siguiente o ya ni eso?",
                likes: 41,
            },
        ],
    },
    {
        id: "c2",
        avatar: "/assets/avatars/avatar-02.webp",
        handle: "cookie_not_found_404_392847",
        time: "11m",
        content:
            "Me llevó al mismo restaurante donde yo había ido con mi ex. Y se lo dijo al mesero. En voz alta. El mesero me reconoció y preguntó que si “el otro chico ya no venía”. Quise que me tragara la mesa.",
        likes: 218,
    },
    {
        id: "c3",
        avatar: "/assets/avatars/avatar-03.webp",
        handle: "cookie_not_found_404_501638",
        time: "28m",
        content:
            "Pasó toda la cena contestando mensajes. Al final era su mamá… coordinando la siguiente cita. Con otra. Me mostró el chat “para que no pensara mal”. Pensé peor.",
        likes: 501,
    },
    {
        id: "c4",
        avatar: "/assets/avatars/avatar-04.webp",
        handle: "cookie_not_found_404_267194",
        time: "1h",
        content:
            "Se presentó con otro nombre. Googleé el que venía en la reserva. Tenía novia, un perro en común y fotos de vacaciones de hace dos semanas. Pedí el postre para llevar y me fui. El postre estuvo mejor que él.",
        likes: 167,
    },
    {
        id: "c5",
        avatar: "/assets/avatars/avatar-05.webp",
        handle: "cookie_not_found_404_748203",
        time: "1h",
        content:
            "A la tercera copa me confesó que seguía viviendo con su ex “por la renta”. A la cuarta, que dormían en la misma cama “pero cada quien de su lado”. A la quinta me invitó a su depa. Adivinen quién abrió la puerta.",
        likes: 689,
    },
    {
        id: "c6",
        avatar: "/assets/avatars/avatar-06.webp",
        handle: "cookie_not_found_404_916452",
        time: "2h",
        content:
            "Todo iba bien hasta que en el baño del bar me escribió su “mejor amiga” desde su celular, que se le había quedado en la mesa: “¿ya te la llevaste o sigues perdiendo el tiempo?”. Volví, le dejé el teléfono al lado del vaso y me fui sin decir adiós. Ni siquiera me preguntó por qué.",
        likes: 874,
    },
    {
        id: "c7",
        avatar: "/assets/avatars/avatar-07.webp",
        handle: "cookie_not_found_404_334801",
        time: "3h",
        content:
            "Me dijo que era alérgico a casi todo. Pidió ensalada. Luego se comió la mitad de mi arrachera, me pidió un shot y al llegar la cuenta sacó la calculadora para “ser justos”. Su parte: el agua. La mía: todo lo demás. Inclusive el shot.",
        likes: 256,
    },
    {
        id: "c8",
        avatar: "/assets/avatars/avatar-08.webp",
        handle: "cookie_not_found_404_620917",
        time: "4h",
        content:
            "Salimos, nos besamos, me dijo que yo era distinto. A las 7am subió una story en close friends con otra persona en su cama y la canción de “no soy de nadie”. Me etiquetó en el close… el de ella. Su novia me mandó mensaje a las 7:12. Yo todavía tenía el lipstick en la copa del Uber.",
        likes: 1104,
        replies: [
            {
                id: "c8-r1",
                avatar: "/assets/avatars/avatar-02.webp",
                handle: "cookie_not_found_404_229441",
                time: "3h",
                content:
                    "La novia a las 7:12 es el plot twist que merecíamos. ¿Le contestaste o le pasaste el close friends?",
                likes: 203,
            },
        ],
    },
    {
        id: "c9",
        avatar: "/assets/avatars/avatar-03.webp",
        handle: "cookie_not_found_404_845176",
        time: "5h",
        content:
            "En medio del segundo trago se le ocurrió “ser honesto”: tenía novia, pero “estaban en una etapa abierta que ella todavía no sabía”. Le dije que entonces yo también iba a ser honesta. Le puse la nota de voz a ella. En speaker. En el restaurante. El mesero nos trajo la cuenta sin que la pidiéramos.",
        likes: 932,
    },
    {
        id: "c10",
        avatar: "/assets/avatars/avatar-06.webp",
        handle: "cookie_not_found_404_173584",
        time: "6h",
        content:
            "Me citó en su depa “para un vino rápido antes del restaurante”. No había vino. Había un roomie grabando un podcast en la sala, una toalla en el sofá y la pregunta de si yo “era de las que se quedan”. Me fui. El restaurante nunca existió. El podcast sí: la semana siguiente subieron un episodio que se llamaba “la que sí se fue”. Me reí. Luego los reporté.",
        likes: 743,
    },
];
