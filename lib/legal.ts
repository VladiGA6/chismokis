export type LegalBlock =
    | { type: "p"; text: string }
    | { type: "list"; items: string[] }
    | { type: "pairs"; items: { term: string; detail: string }[] };

export type LegalSection = {
    title: string;
    blocks: LegalBlock[];
};

export type LegalDoc = {
    title: string;
    kicker: string;
    updated?: string;
    sourceUrl: string;
    intro: string[];
    sections: LegalSection[];
};

export const termsDoc: LegalDoc = {
    title: "Términos y condiciones",
    kicker: "Gamesa LLC",
    sourceUrl: "https://www.gamesacookies.com/terms-use-disclaimers-gamesa",
    intro: [
        "Lee con cuidado los siguientes Términos de uso y descargos de responsabilidad antes de usar este sitio.",
    ],
    sections: [
        {
            title: "Aceptación de los términos",
            blocks: [
                {
                    type: "p",
                    text: 'Este sitio web (el "sitio") es operado por Gamesa LLC ("Gamesa"). En todo el sitio, los términos "nosotros", "nos" y "nuestro" se refieren a Gamesa. Gamesa ofrece este sitio, incluida toda la información, las herramientas y los servicios disponibles, condicionado a tu aceptación de todos los términos, condiciones, políticas y avisos aquí establecidos. El uso de este sitio constituye tu acuerdo con estos Términos de uso. Si NO estás de acuerdo, por favor NO uses este sitio.',
                },
            ],
        },
        {
            title: "Exactitud y integridad de la información",
            blocks: [
                {
                    type: "p",
                    text: "Gamesa no es responsable si la información disponible en este sitio no es exacta, completa o actual. El material se ofrece solo como información general y no debe usarse como única base para tomar decisiones sin consultar fuentes primarias más precisas, completas o oportunas. Nos reservamos el derecho de modificar el contenido en cualquier momento, pero no tenemos obligación de actualizar la información. Aceptas que es tu responsabilidad vigilar los cambios del sitio.",
                },
            ],
        },
        {
            title: "Tu uso del sitio",
            blocks: [
                {
                    type: "p",
                    text: "Todo el contenido de este sitio (incluyendo, sin limitación, texto, diseño, gráficos, logotipos, íconos, imágenes, clips de audio, descargas, interfaces, código y software) es propiedad exclusiva de Gamesa, sus licenciantes o proveedores de contenido, y está protegido por derechos de autor, marcas y demás leyes aplicables. Puedes acceder, copiar, descargar e imprimir el material para uso personal y no comercial, siempre que no modifiques ni elimines avisos de copyright, marca u otros derechos. Cualquier otro uso —incluida la modificación, distribución, transmisión, carga, licencia o creación de obras derivadas— está expresamente prohibido.",
                },
                {
                    type: "p",
                    text: "Gamesa o sus licenciantes conservan el título completo del material, incluidos todos los derechos de propiedad intelectual, y te lo proporcionan bajo una licencia revocable en cualquier momento a entera discreción de Gamesa. Gamesa no garantiza ni declara que tu uso de los materiales no infrinja derechos de terceros. Como condición de uso, no emplearás el sitio para ningún fin ilícito o prohibido por estos Términos o por la ley aplicable.",
                },
            ],
        },
        {
            title: "Materiales que envías",
            blocks: [
                {
                    type: "p",
                    text: "Reconoces que eres responsable de cualquier material que envíes a través del sitio, incluida su legalidad, fiabilidad, adecuación, originalidad y derechos de autor. No puedes cargar, distribuir ni publicar contenido que (i) sea confidencial, propietario, falso, fraudulento, calumnioso, difamatorio, obsceno, amenazante, invasivo de la privacidad, infractor de propiedad intelectual, abusivo, ilegal u objetable; (ii) pueda constituir o fomentar un delito, violar derechos de terceros o generar responsabilidad; o (iii) contenga virus, proselitismo político, cadenas, envíos masivos o cualquier forma de spam.",
                },
                {
                    type: "p",
                    text: "No puedes usar un correo u otros datos falsos, suplantar a ninguna persona o entidad, ni inducir a error sobre el origen del contenido. No puedes cargar contenido comercial. Si envías material, y salvo que indiquemos lo contrario, otorgas a Gamesa y a sus afiliadas un derecho no exclusivo, libre de regalías, perpetuo, irrevocable y totalmente sublicenciable para usar, reproducir, modificar, adaptar, publicar, traducir, crear obras derivadas, distribuir y mostrar ese material en todo el mundo y en cualquier medio. Gamesa puede usar las ideas, conceptos o know-how que tú o quienes actúen en tu nombre le proporcionen. También otorgas el derecho a usar el nombre que envíes junto con ese material, si así lo eligen.",
                },
                {
                    type: "p",
                    text: "Toda la información personal se tratará conforme a la Política de privacidad del sitio. Declaras y garantizas que posees o controlas todos los derechos sobre el contenido que publicas; que es exacto; que su uso no viola estas disposiciones ni causará daño a ninguna persona o entidad; y que indemnizarás a Gamesa por todas las reclamaciones derivadas del contenido que suministres.",
                },
            ],
        },
        {
            title: "Descargos de responsabilidad",
            blocks: [
                {
                    type: "p",
                    text: 'El uso de este sitio es bajo tu propio riesgo. El sitio se ofrece "tal cual". Gamesa niega expresamente cualquier garantía, expresa o implícita, respecto de cualquier asunto relacionado con el sitio, incluida, sin limitación, la garantía implícita de comerciabilidad, idoneidad para un fin particular o no infracción. Si descargas material, lo haces a tu discreción y riesgo. Eres responsable de cualquier daño a tu sistema o pérdida de datos que resulte de esa descarga.',
                },
            ],
        },
        {
            title: "Limitación de responsabilidad",
            blocks: [
                {
                    type: "p",
                    text: "EN NINGÚN CASO Y BAJO NINGUNA TEORÍA LEGAL O EN EQUIDAD, YA SEA EN RESPONSABILIDAD EXTRACONTRACTUAL, CONTRACTUAL, OBJETIVA O DE OTRO TIPO, GAMESA SERÁ RESPONSABLE POR DAÑOS DIRECTOS, INDIRECTOS, ESPECIALES, INCIDENTALES O CONSECUENTES DERIVADOS DEL USO DE LA INFORMACIÓN AQUÍ CONTENIDA, INCLUIDOS, SIN LIMITACIÓN, LUCRO CESANTE, PÉRDIDA DE FONDO DE COMERCIO, PÉRDIDA DE DATOS, INTERRUPCIÓN DEL TRABAJO, EXACTITUD DE RESULTADOS O FALLA INFORMÁTICA. RECONOCES QUE NI GAMESA NI SUS PROVEEDORES SERÁN RESPONSABLES POR CONDUCTA DIFAMATORIA, OFENSIVA O ILEGAL DE CUALQUIER USUARIO. TU ÚNICO Y EXCLUSIVO RECURSO ES DEJAR DE USAR EL SITIO. CUALQUIER ACCIÓN DERIVADA DEL SITIO DEBE INICIARSE DENTRO DE UN (1) AÑO DESDE QUE NACE LA CAUSA; DE LO CONTRARIO QUEDA PERMANENTEMENTE EXCLUIDA. ALGUNAS JURISDICCIONES NO PERMITEN ESTAS LIMITACIONES, POR LO QUE PARTE DE LO ANTERIOR PUEDE NO APLICARTE.",
                },
            ],
        },
        {
            title: "Indemnización",
            blocks: [
                {
                    type: "p",
                    text: "Aceptas defender, indemnizar y sacar en paz y a salvo a Gamesa frente a cualquier reclamación, daño, costo y gasto, incluidos honorarios de abogados, que surjan de o se relacionen con tu uso del Sitio.",
                },
            ],
        },
        {
            title: "Aviso de derechos de autor",
            blocks: [
                {
                    type: "p",
                    text: "Salvo que se indique lo contrario, las imágenes, botones y textos de este Sitio son propiedad exclusiva de Gamesa y sus afiliadas. Excepto para uso personal, no pueden copiarse, distribuirse, mostrarse, reproducirse ni transmitirse por ningún medio sin el permiso previo por escrito de Gamesa.",
                },
            ],
        },
        {
            title: "Marcas",
            blocks: [
                {
                    type: "p",
                    text: 'Este Sitio muestra logotipos, identidades de marca y otras marcas (en conjunto, las "Marcas") que son propiedad de, o están licenciadas a, Gamesa, sus afiliadas, licenciantes o proveedores. Nada en este Sitio debe interpretarse como una licencia o derecho para usar cualquier Marca sin permiso escrito de Gamesa o del tercero titular. Gamesa se reserva todos los derechos no otorgados expresamente. Este sitio y su contenido, incluida la selección y disposición, están protegidos como compilación bajo las leyes de derechos de autor de Estados Unidos y otros países.',
                },
            ],
        },
        {
            title: "Enlaces a sitios de terceros",
            blocks: [
                {
                    type: "p",
                    text: "Como cortesía, este Sitio puede enlazar a sitios de terceros no mantenidos por Gamesa. Aunque esos terceros estén afiliados, Gamesa no controla esos sitios, que tienen políticas de privacidad y prácticas legales independientes. Gamesa no es responsable de su contenido ni hace declaraciones sobre su exactitud. Visitarlos es bajo tu propio riesgo.",
                },
            ],
        },
        {
            title: "Declaraciones prospectivas",
            blocks: [
                {
                    type: "p",
                    text: 'Este Sitio puede contener declaraciones, estimaciones o proyecciones que constituyen "declaraciones prospectivas" según las leyes federales de valores de EE. UU. Esas declaraciones son especulativas y se basan en información disponible, planes operativos y proyecciones sobre eventos futuros. Están sujetas a numerosos riesgos e incertidumbres. Los resultados reales pueden diferir de la experiencia histórica y de las expectativas actuales. Gamesa no asume obligación de actualizar o revisar esas declaraciones.',
                },
            ],
        },
        {
            title: "Jurisdicción",
            blocks: [
                {
                    type: "p",
                    text: "Gamesa opera este Sitio desde sus oficinas en Nueva York, Estados Unidos. Estos Términos se rigen e interpretan conforme a las leyes del Estado de Nueva York. Al usar el sitio consientes la jurisdicción de los tribunales de Nueva York para cualquier acción derivada de estos Términos. Si alguna porción se considera ilícita, nula o inaplicable, esa parte se considerará separable y no afectará la validez del resto. La falta de actuación de Gamesa ante un incumplimiento no constituye una renuncia ni limita sus derechos respecto de ese o posteriores incumplimientos.",
                },
            ],
        },
    ],
};

export const privacyDoc: LegalDoc = {
    title: "Política de privacidad",
    kicker: "Gamesa LLC",
    updated: "10 de marzo de 2026",
    sourceUrl: "https://www.gamesacookies.com/gamesa-privacy-notice",
    intro: [
        "A través de este Aviso, Gamesa LLC y sus empresas del grupo pretenden explicar qué información recopilamos sobre ti y por qué. También queremos que entiendas cómo usamos y compartimos tu información y las opciones que tienes. Nuestro objetivo es ganarnos y conservar tu confianza cuando visitas sitios y aplicaciones sobre nuestros productos y marcas.",
        'Este Aviso describe cómo tratamos la información personal en sitios web ("sitios"), aplicaciones móviles o de redes sociales ("apps") y cualquier otro servicio donde incluimos un enlace o referencia autorizada a este Aviso (en conjunto, los "Servicios"). No describe nuestras prácticas en sitios o apps donde no se referencia.',
        "El uso de nuestras apps y sitios indica que aceptas la recopilación, el uso y el intercambio de tu información según este Aviso.",
    ],
    sections: [
        {
            title: "Qué información recopilamos",
            blocks: [
                {
                    type: "p",
                    text: "Recopilamos identificadores e información de contacto. Por ejemplo, tu nombre y dirección si te registras en nuestro sitio o apps. También podemos recopilar tu teléfono o correo, e identificadores en línea. Si interactúas con nosotros en redes sociales, podemos recopilar tu identificador de usuario.",
                },
                {
                    type: "p",
                    text: "Recopilamos información de pago. Si compras con nosotros, nosotros (o socios que procesan tarjetas) podemos recopilar tus datos de facturación, incluido el número de tarjeta.",
                },
                {
                    type: "p",
                    text: "Recopilamos la información que envías o nos autorizas a recabar. Incluye comentarios, videos o fotos que publiques en un espacio público del sitio, y cualquier otra información que nos facilites, como actividades físicas o preferencias de nutrición.",
                },
                {
                    type: "p",
                    text: "Recopilamos información demográfica y de intereses: género, edad, datos del hogar o estilo de vida, y código postal.",
                },
                {
                    type: "p",
                    text: "Recopilamos actividad de internet y de red, como datos del dispositivo y de uso: navegador, sitio de procedencia o destino, sistema operativo, proveedor de internet, direcciones IP y otros identificadores, incluidos los de dispositivos móviles. También podemos recabar información sobre tu uso de los Servicios mediante cookies, etiquetas de píxel y tecnologías similares.",
                },
                {
                    type: "p",
                    text: "Recopilamos información de geolocalización. Con GPS o Wi-Fi podemos recabar tu ubicación. Por ejemplo, en apps móviles podemos acceder a la ubicación del dispositivo para funciones basadas en lugar.",
                },
                {
                    type: "p",
                    text: "Recopilamos información de solicitudes de empleo, profesional y educativa: historial laboral, habilidades, cómo conociste la vacante, y, si aplica, historial de manejo y capacidad para el puesto. También podemos recabar los últimos cuatro dígitos de tu número de seguro social y tu nacionalidad.",
                },
                {
                    type: "p",
                    text: "Recopilamos información de terceros. A veces puedes enviar un mensaje a un amigo desde nuestros sitios o apps; en ese caso necesitaremos el nombre y el correo de esa persona.",
                },
            ],
        },
        {
            title: "Cómo recopilamos la información",
            blocks: [
                {
                    type: "p",
                    text: "La recopilamos directamente de ti cuando:",
                },
                {
                    type: "list",
                    items: [
                        "Haces una compra con nosotros.",
                        "Te registras en uno de nuestros sitios o apps.",
                        "Te unes a programas de lealtad.",
                        "Solicitas un empleo.",
                        "Te suscribes a boletines y notificaciones.",
                        "Participas en promociones, sorteos o concursos.",
                        "Completas una encuesta.",
                        "Nos contactas.",
                        "Visitas físicamente una de nuestras ubicaciones.",
                        "Nos la envías de otro modo.",
                    ],
                },
                {
                    type: "p",
                    text: "La recopilamos de forma pasiva. Usamos herramientas como cookies del navegador e IDs de dispositivo móvil, en sitios, correos y publicidad. Recabamos información de uso y del navegador a lo largo del tiempo. Terceros también pueden recabar información personal de este modo, incluso desde nuestras apps.",
                },
                {
                    type: "p",
                    text: "Terceros pueden compartir información sobre ti con nosotros: socios comerciales, empresas que compilan datos de compradores, plataformas de redes sociales e interacciones con nuestros anuncios en sitios de terceros.",
                },
            ],
        },
        {
            title: "Podemos combinar información de distintas fuentes",
            blocks: [
                {
                    type: "p",
                    text: "Por ejemplo, podemos combinar información offline con online; información recabada en sitios de terceros, incluidas redes sociales; información entre dispositivos; e información de terceros con la que ya tenemos.",
                },
            ],
        },
        {
            title: "Cómo podemos usar la información",
            blocks: [
                {
                    type: "p",
                    text: "Para prestarte productos y servicios: responder preguntas, permitirte participar en programas (incluidos sorteos), procesar registros y pedidos, enviar a tus amigos la información que pediste, o contactarte si ganaste un premio.",
                },
                {
                    type: "p",
                    text: "Para mejorar productos y servicios y personalizar tu experiencia, usando información que nos das o que nos proporcionan socios.",
                },
                {
                    type: "p",
                    text: "Para seguridad: protegerte a ti, a nuestros sitios y apps, a la empresa, a clientes y a consumidores.",
                },
                {
                    type: "p",
                    text: "Para marketing: enviarte información sobre productos, ofertas o actualizaciones, y mostrarte anuncios —propios o de terceros— en plataformas de terceros, incluido el correo o las notificaciones push.",
                },
                {
                    type: "p",
                    text: "Para obtener tu opinión y fines transaccionales: contactarte sobre este Aviso, los Términos de uso, una solicitud de empleo o preguntas sobre productos y promociones.",
                },
                {
                    type: "p",
                    text: "Según lo permita la ley o te notifiquemos.",
                },
            ],
        },
        {
            title: "Cómo podemos compartir la información",
            blocks: [
                {
                    type: "p",
                    text: "Dentro de la familia de empresas y marcas Gamesa, incluidas filiales actuales y futuras, afiliadas y joint ventures, y con terceros con los que tenemos relación de propiedad o comercial.",
                },
                {
                    type: "p",
                    text: "Con proveedores que prestan servicios en nuestro nombre, por ejemplo quienes operan sitios y apps o gestionan promociones.",
                },
                {
                    type: "p",
                    text: "Con socios comerciales selectos, como socios de promociones conjuntas. Si te registras en una promoción conjunta, tu información puede recabarse tanto por nosotros como por el tercero, y usarse según este Aviso o según las políticas de esos socios.",
                },
                {
                    type: "p",
                    text: "Con socios de analítica y publicidad, que pueden recabar actividad de internet y de red, como datos de dispositivo y uso.",
                },
                {
                    type: "p",
                    text: "Si creemos que debemos hacerlo para cumplir la ley o proteger a la empresa: por orden judicial, requerimiento de una agencia gubernamental (incluidas autoridades de EE. UU. y de otros países) o para investigar un posible fraude.",
                },
                {
                    type: "p",
                    text: "Con cualquier sucesor de todo o parte del negocio. Por ejemplo, si se vende una parte de la empresa, tu información puede incluirse en esa transacción.",
                },
                {
                    type: "p",
                    text: "Si hay razones adicionales para compartir información, te las describiremos.",
                },
            ],
        },
        {
            title: "Tienes opciones sobre el uso de tu información",
            blocks: [
                {
                    type: "p",
                    text: "Puedes darte de baja del marketing por correo siguiendo las instrucciones de cualquier mensaje promocional. Seguirás pudiendo recibir correos no comerciales cuando la ley lo permita.",
                },
                {
                    type: "p",
                    text: "Puedes controlar cookies y herramientas de seguimiento. Consulta la política de cookies de Gamesa para gestionar cómo nosotros y nuestros proveedores las usamos.",
                },
                {
                    type: "p",
                    text: 'Señales "Do-Not-Track": algunos navegadores las envían. Como los estándares siguen en desarrollo, actualmente no actuamos en respuesta a esas señales.',
                },
                {
                    type: "p",
                    text: "Puedes controlar herramientas en tu dispositivo móvil, por ejemplo apagar el GPS o las notificaciones push, o cambiar preferencias en tu perfil.",
                },
                {
                    type: "p",
                    text: "Según el estado donde vivas, puedes tener derechos adicionales. Solo los honramos cuando la ley lo exige:",
                },
                {
                    type: "list",
                    items: [
                        "Confirmar si procesamos tu información personal y acceder a una copia en formato portable.",
                        "Solicitar la eliminación de tu información personal.",
                        "Solicitar la corrección de información inexacta.",
                        "Optar por no vender, compartir o usar tu información para publicidad dirigida.",
                        "En algunos casos, oponerte a decisiones automatizadas y elaboración de perfiles con efectos legales o significativos.",
                    ],
                },
                {
                    type: "p",
                    text: "También puedes oponerte al tratamiento (o limitar el uso) de tu información sensible. Tienes derecho a no recibir un trato discriminatorio por ejercer estos derechos. Estos derechos están sujetos a excepciones legales; por ejemplo, podemos no atender ciertas solicitudes sin verificar tu identidad de forma razonable.",
                },
                {
                    type: "p",
                    text: "Para ejercerlos, tú o tu agente autorizado pueden:",
                },
                {
                    type: "list",
                    items: [
                        "Llamar al número gratuito 1-833-548-0119; o",
                        "Enviar la solicitud a través del portal seguro de Gamesa.",
                    ],
                },
                {
                    type: "p",
                    text: "Podemos pedirte datos para verificar tu identidad. Si actúas mediante un agente autorizado, podemos solicitar evidencia de poder notarial o autorización escrita válida. Si tu jurisdicción reconoce el derecho a apelar una decisión, puedes hacerlo por el mismo portal. Indica el estado desde el que escribes y la información del asunto. Si tu jurisdicción lo permite, también puedes presentar una queja ante la oficina del Fiscal General del estado.",
                },
            ],
        },
        {
            title: "Venta o intercambio de información personal",
            blocks: [
                {
                    type: "p",
                    text: "Residentes de ciertos estados pueden oponerse a la venta de información personal y a su intercambio para publicidad dirigida. No vendemos tu información a cambio de dinero, pero los Servicios pueden usar tecnologías de analítica y publicidad de socios que emplean tu información para mostrarte anuncios basados en tu actividad en nuestros Servicios y en sitios, apps y servicios de terceros.",
                },
                {
                    type: "p",
                    text: "No tenemos conocimiento real de que vendamos o compartamos información personal de consumidores menores de 16 años.",
                },
                {
                    type: "p",
                    text: 'Si no deseas que vendamos o compartamos tu información para publicidad dirigida, puedes oponerte a través de "Your Privacy Choices" en el sitio oficial de Gamesa.',
                },
            ],
        },
        {
            title: "Conservación de la información personal",
            blocks: [
                {
                    type: "p",
                    text: "Conservamos las categorías descritas mientras sea necesario para los fines de este Aviso o lo autorice la ley. En general, mientras ocurra alguna de estas situaciones:",
                },
                {
                    type: "list",
                    items: [
                        "La información es razonablemente necesaria para gestionar nuestras operaciones, tu relación con nosotros u otro fin para el que se recabó.",
                        "Es razonablemente necesaria para un fin revelado y compatible con el contexto de la recopilación.",
                        "Es razonablemente necesaria para proteger o defender nuestros derechos o bienes.",
                        "Estamos obligados o autorizados a conservarla por leyes o reglamentos aplicables.",
                    ],
                },
            ],
        },
        {
            title: "Privacidad de menores",
            blocks: [
                {
                    type: "p",
                    text: "No es nuestra intención recabar información personal de menores de 13 años. Si eres padre, madre o tutor y crees que tu hijo o hija menor de 13 nos dio información, contáctanos a través del sitio oficial de Gamesa y tomaremos las medidas adecuadas. También puedes escribirnos a la dirección indicada más abajo, marcando la consulta como “COPPA Information Request”.",
                },
            ],
        },
        {
            title: "Datos biométricos",
            blocks: [
                {
                    type: "p",
                    text: "Gamesa puede recabar, almacenar y usar datos biométricos de empleados, consumidores u otras personas en el curso de sus operaciones. Obtendrá consentimiento por escrito cuando la ley lo exija.",
                },
                {
                    type: "p",
                    text: "Dato biométrico: información biológica o características físicas únicas que pueden identificar a una persona (huella, palma, retina o iris, voz o geometría facial).",
                },
                {
                    type: "p",
                    text: "Gamesa no divulgará esos datos a terceros salvo que te notifique y obtenga tu consentimiento por escrito, o lo exija la ley.",
                },
                {
                    type: "p",
                    text: "Salvo orden judicial o ley aplicable, destruirá de forma permanente los datos biométricos cuando ocurra lo primero de: (1) se cumpla el motivo inicial de la recopilación; o (2) transcurran dos años desde la última interacción de la persona con Gamesa.",
                },
                {
                    type: "p",
                    text: "Gamesa usará un estándar razonable de cuidado para almacenar, transmitir y proteger esos datos.",
                },
            ],
        },
        {
            title: "Medidas de seguridad",
            blocks: [
                {
                    type: "p",
                    text: "Usamos medidas técnicas y organizativas para proteger sitios y apps. Ningún sistema de almacenamiento ni transmisión por internet o red pública puede garantizarse como perfectamente seguro.",
                },
            ],
        },
        {
            title: "Los servicios están pensados para un público de Estados Unidos",
            blocks: [
                {
                    type: "p",
                    text: "Si estás fuera de Estados Unidos, visita el sitio designado para tu país. Si vives fuera y eliges usar este sitio o app, lo haces bajo tu propio riesgo. Tu información se enviará y almacenará en Estados Unidos, que puede no ofrecer el mismo nivel de protección que las leyes de tu país.",
                },
            ],
        },
        {
            title: "Enlaces y herramientas de terceros que no controlamos",
            blocks: [
                {
                    type: "p",
                    text: "Podemos enlazar o permitir el acceso a los Servicios desde sitios o plataformas de terceros. Nuestros sitios y apps también pueden incluir contenido de terceros que recaba información, incluidas cookies y tecnologías de seguimiento, para sus propios fines (publicidad conductual y analítica). No controlamos a esos terceros: lee sus políticas de privacidad.",
                },
            ],
        },
        {
            title: "Podemos actualizar este aviso",
            blocks: [
                {
                    type: "p",
                    text: "De vez en cuando podemos cambiar este Aviso. Cuando lo hagamos, te notificaremos los cambios materiales según exija la ley. Eso puede incluir publicar una copia actualizada aquí y actualizar la fecha. Revisa este Aviso periódicamente.",
                },
            ],
        },
        {
            title: "Avisos específicos de California",
            blocks: [
                {
                    type: "p",
                    text: "Ley “Shine the Light”: si resides en California, tienes derecho a pedirnos una vez al año información sobre la revelación, si la hubo, de información personal a terceros para su marketing directo en el año calendario anterior. Escribe a la dirección indicada más abajo e indica que eres residente de California haciendo una consulta “Shine the Light”. Nos reservamos el derecho de no responder solicitudes enviadas por otros medios, mal etiquetadas o incompletas.",
                },
            ],
        },
        {
            title: "Ley de Privacidad del Consumidor de California (CCPA)",
            blocks: [
                {
                    type: "p",
                    text: "En esta sección listamos categorías de información personal, según la CCPA, que se han recopilado, revelado con fines comerciales, compartido para publicidad conductual entre contextos o vendido con fines comerciales en los 12 meses anteriores. Algunas pueden considerarse sensibles. Las revelaciones también aplican a residentes de otros estados.",
                },
                {
                    type: "pairs",
                    items: [
                        {
                            term: "Identificadores",
                            detail: "Nombre, dirección, teléfono, IP o correo. Podemos usarlos para responderte, permitirte participar en programas, procesar registros y otros fines comerciales.",
                        },
                        {
                            term: "Información comercial",
                            detail: "Registro de compras. Podemos usarla para darte productos, identificar ofertas relevantes y otros fines comerciales.",
                        },
                        {
                            term: "Información biométrica",
                            detail: "Grabaciones de voz, imágenes e información de actividad física que nos proporciones. La usamos para prestarte productos y Servicios, por ejemplo en atención al cliente.",
                        },
                        {
                            term: "Actividad de internet y de red",
                            detail: "Interacciones con nuestros Servicios. Podemos usarla para mejorarlos, entender a quienes nos visitan y qué contenido les interesa.",
                        },
                        {
                            term: "Geolocalización precisa",
                            detail: "Mediante GPS o Wi-Fi. Podemos usarla para mejorar la calidad, seguridad y relevancia de los Servicios.",
                        },
                        {
                            term: "Otra información electrónica",
                            detail: "Incluye lo que publicas en un espacio público (videos o fotos). Podemos usarla para prestarte el servicio solicitado, en sorteos y otros fines comerciales.",
                        },
                        {
                            term: "Inferencias sobre ti",
                            detail: "Para personalizar tu experiencia y otros fines comerciales.",
                        },
                        {
                            term: "Características de clasificaciones protegidas",
                            detail: "Por ejemplo tu género. Podemos usarla para el programa de igualdad de oportunidades laborales y otros fines comerciales.",
                        },
                    ],
                },
                {
                    type: "p",
                    text: "Recopilamos estas categorías de ti, de interacciones y de terceros, y las revelamos dentro de la familia Gamesa, a socios y proveedores de hosting, publicidad y otros servicios, a socios de analítica y cuando sea necesario para cumplir un proceso legal. También puede revelarse a terceros con quienes interactúas o a quienes nos indiques.",
                },
                {
                    type: "p",
                    text: "En California puedes tener derechos adicionales: solicitar más información sobre nuestras prácticas de tratamiento (categorías recopiladas, fuentes, fines, terceros y categorías reveladas, vendidas o compartidas) y pedirnos que limitemos el uso y la revelación de información sensible a ciertos usos permitidos.",
                },
                {
                    type: "p",
                    text: "Para ejercerlos: llama al 1-833-548-0119 o usa el portal seguro de Gamesa.",
                },
                {
                    type: "p",
                    text: "Venta o intercambio: en los últimos 12 meses hemos trabajado con socios publicitarios que pueden haber tenido acceso a identificadores, actividad de red, geolocalización y otra información personal. Si recabamos geolocalización precisa para un Servicio que pediste, ese dato puede considerarse “sensible” bajo la ley de California; su uso para ese Servicio es coherente con los fines comerciales permitidos.",
                },
                {
                    type: "p",
                    text: 'Si no deseas que vendamos o compartamos tu información para publicidad dirigida, puedes oponerte en "Your Privacy Choices" del sitio oficial.',
                },
            ],
        },
        {
            title: "Incentivos financieros",
            blocks: [
                {
                    type: "p",
                    text: "Ofrecemos Joy, un programa de recompensas con puntos y descuentos para quienes optan por participar, y programas promocionales similares. Pueden requerir nombre, fecha de nacimiento, dirección, teléfono y correo, que usamos para operar el programa, enviarte ofertas y para los demás fines de este Aviso. Más información en www.us-joy.com. Revisa los términos del programa aplicable.",
                },
                {
                    type: "p",
                    text: "Los incentivos de Joy y programas similares recompensan la lealtad según el volumen de compra, no el valor de tu información personal. Según nuestra estimación razonable y de buena fe, recibimos valor en mayor lealtad y compras.",
                },
                {
                    type: "p",
                    text: "Puedes retirarte del incentivo en cualquier momento cancelando tu participación en Joy o programas similares, contactándonos como se indica abajo.",
                },
            ],
        },
        {
            title: "Contacto",
            blocks: [
                {
                    type: "p",
                    text: "Si tienes preguntas sobre este Aviso o nuestras prácticas, envía una consulta general desde el sitio oficial de Gamesa, o escríbenos o llámanos a:",
                },
                {
                    type: "list",
                    items: [
                        "Attn: Consumer Relations",
                        "700 Anderson Hill Road",
                        "Purchase, NY 10577",
                        "1-800-433-2652",
                    ],
                },
            ],
        },
    ],
};
