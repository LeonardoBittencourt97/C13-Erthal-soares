export interface PracticeArea {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface Article {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: "trabalho" | "familia" | "consumidor" | "previdenciario" | "civel" | "atendimento";
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const OFFICE_INFO = {
  name: "Erthal Soares Advogadas",
  shortName: "Erthal Soares Advocacia",
  lawyerName: "Dra. Gisele Baptista Soares & Dra. Luiza Carolina Muniz Erthal",
  lawyers: [
    {
      name: "Dra. Gisele Baptista Soares",
      graduation: "Formada em 2009",
      experience: "Mais de 10 anos de atuação",
      specialty: "Especialista em Direito do Trabalho, Previdenciário e Família",
      states: "Paraná, Santa Catarina e São Paulo",
      details: [
        "Membro da Comissão de Esporte da OAB/PR",
        "Voluntária do movimento TLC em Curitiba e Região Metropolitana por mais de 20 anos, coordenando e desenvolvendo pessoas",
        "Atendimento com sensibilidade, foco na dignidade do trabalhador e nas relações familiares",
      ],
    },
    {
      name: "Dra. Luiza Carolina Muniz Erthal",
      graduation: "Graduada pela Faculdade de Direito de Curitiba (2004)",
      experience: "Mais de 15 anos de atuação",
      specialty: "Pós-graduada em Direito Internacional (PUC-PR) e em Direito Civil e Processo Civil (Unicuritiba)",
      states: "Paraná, São Paulo e Santa Catarina",
      details: [
        "Atuação especializada há mais de 15 anos nas áreas Cível, Previdenciário e Família",
        "Fluente em Inglês - Certificada pela Universidade de Cambridge",
        "Visão estratégica e negocial para litígios complexos e planejamento sucessório/patrimonial",
      ],
    },
  ],
  oab: "Advocacia Especializada",
  tagline: "Sucesso não tem a ver com o dinheiro que você ganha. Tem a ver com a diferença que você faz na vida das pessoas.",
  taglineAuthor: "Michelle Obama",
  address: "Paraná Office - Av. Paraná, 1755 - Sala 34 - Boa Vista, Curitiba - PR, CEP 82510-000",
  addressShort: "Boa Vista, Curitiba - PR",
  cityState: "Curitiba - PR",
  phone: "(41) 99164-1398",
  whatsappNumber: "5541991641398",
  whatsappFormatted: "(41) 99164-1398",
  whatsappUrl: "https://wa.me/5541991641398?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20com%20as%20advogadas.",
  mapsDirectionsUrl: "https://maps.google.com/?q=Av.+Paran%C3%A1,+1755+-+Sala+34+-+Boa+Vista,+Curitiba+-+PR,+82510-000",
  email: "",
  experienceYears: "Mais de 11 anos",
  workingHours: {
    weekdays: "Segunda a Quinta: 09:00 às 17:00",
    weekends: "Sexta, Sábado e Domingo: Atendimento e plantão personalizado mediante agendamento",
    differential: "Disponibilidade para atendimento personalizado em horários alternativos, nos finais de semana e feriados, nas residências, condomínios, salões de igrejas e eventos.",
  },
  social: {
    instagram: "https://www.instagram.com/sonalysantos.adv/",
  },
  instagramUrl: "https://www.instagram.com/sonalysantos.adv/",
  pillars: {
    mission: "Transformar vidas e restaurar a tranquilidade de famílias e trabalhadores por meio de uma advocacia técnica, ética e próxima, oferecendo atendimento onde e quando o cliente necessitar.",
    vision: "Ser referência no Paraná, Santa Catarina e São Paulo pelo atendimento jurídico verdadeiramente humanizado, acessível e de alta resolução nas áreas Cível, Família, Consumidor, Previdenciária e Trabalhista.",
    values: [
      "Atendimento Personalizado e Próximo (Inclusive em Residências e Horários Alternativos)",
      "Rigor Técnico com Mais de 11 Anos de História e Parcerias Estratégicas",
      "Ética e Conformidade Rigorosa com o Provimento 205/2021 CFOAB",
      "Sensibilidade Humana, Escuta Ativa e Defesa Firme de Direitos",
      "Sigilo Profissional Absoluto e Transparência Total em Todas as Fases",
    ],
  },
  metrics: [
    { value: "11+ Anos", label: "História e solidez jurídica do escritório" },
    { value: "3 Estados", label: "Atuação no Paraná, Santa Catarina e São Paulo" },
    { value: "15+ Anos", label: "Experiência prática das advogadas sócias" },
    { value: "Personalizado", label: "Atendimento onde você estiver e em horários flexíveis" },
  ],
};

export const LAWYER_PROFILE = {
  name: "Erthal Soares Advogadas",
  role: "Sociedade de Advogadas • Curitiba / PR",
  oab: "Advocacia Especializada",
  specialties: "Direito do Trabalho • Direito de Família • Direito do Consumidor • Direito Previdenciário • Direito Civil",
  photo: "/Foto_perfil.jpeg",
  bioShort: "Fundado pelas advogadas Dra. Gisele Baptista Soares e Dra. Luiza Carolina Muniz Erthal, o escritório Erthal Soares Advogadas reúne mais de 11 anos de história e uma sólida trajetória em Curitiba e nos estados do PR, SC e SP. Com atuação destacada nas áreas Cível, Família, Consumidor, Previdenciária e Trabalhista, o escritório se diferencia pela disponibilidade de atendimento personalizado em residências, condomínios e horários alternativos, sempre pautado na escuta sensível e no rigor técnico.",
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "trabalhista",
    code: "01",
    title: "Direito do Trabalho",
    subtitle: "Defesa dos Direitos e Verbas do Trabalhador",
    description:
      "Atuação combativa na reparação de violações laborais, cobrança de verbas rescisórias, horas extraordinárias, reconhecimento de vínculo para pejotização fraudulenta, equiparação salarial, indenizações por assédio moral e proteção integral no limbo previdenciário e estabilidade gestacional.",
    highlights: [
      "Cálculo e cobrança de horas extras, adicionais noturnos e reflexos",
      "Reconhecimento de vínculo de emprego (fraude da 'pejotização' / PJ sem autonomia)",
      "Rescisão indireta do contrato por descumprimento do empregador",
      "Acidentes de trabalho, danos morais e doenças ocupacionais",
      "Reversão de demissão por justa causa indevida e liberação de FGTS/seguro",
      "Orientação no limbo previdenciário entre alta do INSS e recusa da empresa",
    ],
  },
  {
    id: "familia",
    code: "02",
    title: "Direito de Família",
    subtitle: "Proteção do Patrimônio Afetivo e Resolução de Conflitos",
    description:
      "Acolhimento sensível e técnico em momentos delicados da vida familiar. Condução de divórcios consensuais e litigiosos, fixação e revisão de pensão alimentícia, partilha de bens, definição de guarda compartilhada, investigação de paternidade e dissolução de união estável.",
    highlights: [
      "Divórcio consensual em cartório e divórcio litigioso judicial",
      "Fixação, revisão e execução de alimentos (cobrança sob pena de prisão/penhora)",
      "Regulação de guarda, convivência e proteção contra alienação parental",
      "Partilha equilibrada de bens e reconhecimento/dissolução de união estável",
      "Pactos antenupciais, planejamento familiar e contratos de namoro",
      "Medidas protetivas urgentes e proteção integral do bem-estar dos filhos",
    ],
  },
  {
    id: "consumidor",
    code: "03",
    title: "Direito do Consumidor",
    subtitle: "Equilíbrio e Defesa Contra Práticas Abusivas",
    description:
      "Proteção efetiva contra arbitrariedades de fornecedores, concessionárias, bancos e operadoras. Atuação firme em casos de negativação indevida (SPC/Serasa com dano moral in re ipsa), fraudes bancárias/PIX, planos de saúde, atraso de entrega e produtos com vício/defeito.",
    highlights: [
      "Liminar para retirada de nome negativado indevidamente no SPC/Serasa",
      "Reparação por danos morais e materiais por fraudes e golpes bancários",
      "Descumprimento de prazos, atrasos na entrega e recusa injusta de troca",
      "Ações contra cobranças abusivas, vendas casadas e juros extorsivos",
      "Liminares contra recusa de cobertura de planos de saúde e reajustes ilegais",
      "Indenizações por cancelamentos de voos, overbooking e extravio de bagagens",
    ],
  },
  {
    id: "previdenciario",
    code: "04",
    title: "Direito Previdenciário",
    subtitle: "Conquista do Benefício Justo e Planejamento para o Futuro",
    description:
      "Assessoria integral perante o INSS e a Justiça Federal para obtenção do melhor benefício previdenciário. Desde auxílio-doença, aposentadoria por incapacidade permanente e BPC/LOAS até planejamento previdenciário e aposentadorias pelas novas regras de transição.",
    highlights: [
      "Concessão e restabelecimento de auxílio por incapacidade temporária (auxílio-doença)",
      "Conversão de auxílio-doença em aposentadoria por invalidez permanente",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos e pessoas com deficiência",
      "Planejamento Previdenciário completo com simulação do melhor momento e valor",
      "Aposentadoria por tempo, idade e regras de transição da Reforma da Previdência",
      "Averbação de tempo rural, atividade especial (insalubridade) e acerto de CNIS",
    ],
  },
  {
    id: "civel",
    code: "05",
    title: "Direito Civil & Sucessões",
    subtitle: "Segurança Contratual, Reparação de Danos e Inventários",
    description:
      "Atuação ampla nas relações jurídicas cotidianas, contratos civis e empresariais, inventários judiciais e extrajudiciais, usucapião, disputas possessórias, direito de vizinhança e cobrança de créditos e títulos executivos.",
    highlights: [
      "Inventário judicial e extrajudicial em cartório com partilha célere",
      "Elaboração, análise e rescisão de contratos civis e comerciais",
      "Ações indenizatórias por danos materiais, perdas e danos e responsabilidade civil",
      "Ações de usucapião, regularização de imóveis e reintegração de posse",
      "Ações de cobrança, execução de títulos e recuperação de créditos",
      "Interdição e curatela de adultos para resguardo e proteção patrimonial",
    ],
  },
];

export const ARTICLES: Article[] = [
  {
    id: "artigo-rescisao-trabalhista",
    number: "01",
    title: "Rescisão Indireta e Verbas Não Pagas: Quando o Empregado Pode Romper o Contrato",
    category: "Direito do Trabalho",
    readTime: "4 min de leitura",
    summary:
      "Entenda as hipóteses legais da CLT em que o trabalhador tem o direito de considerar rescindido o contrato de trabalho por falta grave do empregador, recebendo todas as verbas como se demitido fosse.",
    content: [
      "A rescisão indireta é conhecida popularmente como a 'justa causa do patrão'. Ela ocorre quando a empresa comete infrações graves contra o empregado previstas no artigo 483 da CLT, como atrasos recorrentes de salários, ausência de depósito de FGTS, assédio moral continuado ou submissão a perigo manifesto de mal considerável.",
      "Ao ter reconhecida a rescisão indireta em juízo, o trabalhador não perde seus direitos: recebe o aviso prévio indenizado, o saldo de salário, férias proporcionais acrescidas de 1/3, décimo terceiro salário, a multa rescisória de 40% sobre todo o saldo do FGTS e a liberação das guias para habilitação no seguro-desemprego.",
      "Para que o pedido seja acolhido pelos Tribunais Regionais do Trabalho, é fundamental reunir elementos probatórios robustos, como extratos do FGTS da Caixa Econômica, holerites com datas de crédito fora do prazo, mensagens, e-mails ou testemunhas idôneas.",
    ],
    oabDisclaimer:
      "Artigo de caráter estritamente informativo e educativo, em conformidade com o Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-divorcio-pensao",
    number: "02",
    title: "Divórcio, Guarda Compartilhada e Alimentos: Desmistificando Mitos Comuns",
    category: "Direito de Família",
    readTime: "5 min de leitura",
    summary:
      "Descubra como o Código Civil e a jurisprudência brasileira tratam a definição da residência dos filhos, o cálculo dos alimentos com base no binômio necessidade-possibilidade e a divisão de bens.",
    content: [
      "Uma das maiores dúvidas nos processos de separação diz respeito à guarda compartilhada. Ao contrário do que muitos pensam, a guarda compartilhada não significa que a criança deva ficar metade da semana em cada casa, e sim que ambos os pais tomam em conjunto todas as decisões cruciais sobre a vida do filho (escola, médicos, educação e religião).",
      "Outro mito frequente é a crença de que existe uma porcentagem pré-fixada em 30% para a pensão alimentícia. Na realidade, o valor é fixado pelo juiz após a análise minuciosa do trinômio necessidade do alimentando, possibilidade financeira do alimentante e proporcionalidade.",
      "No que tange à partilha de bens, o regime adotado (seja comunhão parcial, separação total ou comunhão universal) é o guia absoluto. O diálogo estruturado e a mediação orientada por profissionais experientes permitem que a partilha ocorra de maneira equilibrada, célere e menos traumática para todos.",
    ],
    oabDisclaimer:
      "Conteúdo puramente educativo com objetivo de esclarecer direitos da família brasileira, conforme o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-consumidor-negativacao",
    number: "03",
    title: "Negativação Indevida no SPC/Serasa e Golpes Digitais: A Proteção do Consumidor",
    category: "Direito do Consumidor",
    readTime: "4 min de leitura",
    summary:
      "Como agir legalmente ao descobrir uma dívida inexistente negativando seu nome ou ao ser vítima de fraudes eletrônicas em instituições financeiras.",
    content: [
      "Ter o nome inscrito indevidamente nos cadastros de inadimplentes (como SPC, Serasa e Boa Vista) por uma dívida já quitada ou por uma contratação fraudulenta feita por terceiros gera consequências graves, impedindo acesso ao crédito, aluguel de imóveis e aberturas de contas.",
      "A jurisprudência pacificada do Superior Tribunal de Justiça (STJ) estabelece que a inscrição indevida em cadastro de proteção ao crédito enseja dano moral 'in re ipsa', isto é, o dano moral é presumido por lei, não havendo necessidade de provar sofrimento psicológico para ter direito à indenização pecuniária e à exclusão imediata do registro.",
      "Nos casos de fraudes bancárias, transações via Pix falso ou contratações de empréstimos consignados sem anuência do correntista, as instituições financeiras respondem objetivamente pelos danos gerados por fortuito interno, conforme a Súmula 479 do STJ.",
    ],
    oabDisclaimer:
      "Publicação meramente educativa visando a conscientização sobre direitos do consumidor, atendendo aos preceitos éticos da OAB.",
  },
  {
    id: "artigo-previdenciario-beneficios",
    number: "04",
    title: "Benefícios por Incapacidade do INSS: O Que Fazer Diante da Negativa Administrativa",
    category: "Direito Previdenciário",
    readTime: "5 min de leitura",
    summary:
      "Orientações práticas sobre a concessão de auxílio por incapacidade temporária, conversão em aposentadoria por invalidez e a importância do acerto no extrato CNIS.",
    content: [
      "O indeferimento de auxílio-doença ou auxílio por incapacidade pelo perito do INSS é uma das situações mais angustiantes para o segurado que realmente não reúne condições físicas ou psicológicas de trabalhar. Muitas perícias administrativas são rápidas e não examinam a integralidade dos laudos emitidos pelos médicos assistentes.",
      "Nesses cenários, a via judicial oferece uma garantia fundamental: a realização de uma perícia médica imparcial, com perito nomeado pelo juiz federal e especialista na patologia em questão, acompanhada de quesitos técnicos formulados pelas advogadas do segurado.",
      "Além disso, antes de formular qualquer pedido de aposentadoria definitiva, é indispensável efetuar o Acerto de Vínculos e Remunerações no CNIS (Cadastro Nacional de Informações Sociais), corrigindo indicadores de pendência (como PREM-EXT ou PEXT) para que nenhum mês trabalhado seja desperdiçado.",
    ],
    oabDisclaimer:
      "Material didático elaborado em conformidade com as diretrizes do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-inventario-cartorio",
    number: "05",
    title: "Inventário Extrajudicial em Cartório: Como Agilizar a Partilha de Bens e Sucessão",
    category: "Direito Civil & Sucessões",
    readTime: "4 min de leitura",
    summary:
      "Entenda os requisitos legais da Lei 11.441/07 para realizar a partilha de bens de forma rápida, segura e econômica diretamente no Tabelionato de Notas.",
    content: [
      "Historicamente, a abertura de inventário no Poder Judiciário costumava se arrastar por longos anos, gerando despesas recorrentes, desvalorização dos bens e atritos familiares prolongados. Desde a edição da Lei 11.441/2007, a partilha de bens pode ser concluída em poucos dias pela via extrajudicial.",
      "Para que o inventário em cartório seja viável, é necessário que todos os herdeiros sejam maiores e capazes (ou estejam emancipados), haja concordância unânime sobre a divisão do patrimônio e estejam assistidos por advogadas constituídas, que redigirão a minuta da escritura pública.",
      "A escritura pública lavrada pelo tabelião não depende de homologação judicial e serve diretamente como documento hábil para transferência dos bens imóveis no Cartório de Registro de Imóveis, liberação de saldos bancários e transferência de veículos no Detran.",
    ],
    oabDisclaimer:
      "Texto puramente informativo com finalidade de esclarecimento público, em cumprimento ao Provimento 205/2021 da OAB.",
  },
];

export const EDUCATIONAL_TOPICS = ARTICLES;

export const WORK_PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Atendimento Personalizado & Escuta",
    subtitle: "No escritório, residência ou ambiente flexível",
    description:
      "Você conversa diretamente com as advogadas sócias para expor seu caso com total sigilo. Entendemos suas necessidades com sensibilidade e flexibilidade de horários, inclusive em plantões.",
  },
  {
    number: "02",
    title: "Análise Técnica & Estratégia Jurídica",
    subtitle: "Rigor normativo e diagnóstico preventivo",
    description:
      "Avaliamos contratos, documentos e histórico fático com base em mais de 11 anos de experiência nas áreas Cível, Família, Consumidor, Previdenciária e Trabalhista, traçando o plano de ação mais vantajoso.",
  },
  {
    number: "03",
    title: "Atuação Ativa & Negociação Resolutiva",
    subtitle: "Celeridade e firmeza na defesa de direitos",
    description:
      "Buscamos primeiro a via consensual rápida e vantajosa. Não havendo acordo, ingressamos com as medidas judiciais ou recursos pertinentes, com acompanhamento diligente em cada instância.",
  },
  {
    number: "04",
    title: "Acompanhamento Contínuo & Prestação de Contas",
    subtitle: "Transparência total até a conclusão do processo",
    description:
      "Mantemos você informado sobre cada movimentação em linguagem clara e acessível, garantindo que você tenha plena ciência e tranquilidade em relação ao andamento da sua causa.",
  },
];

export const WORK_STEPS = WORK_PROCESS_STEPS;

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "trabalho",
    label: "Direito do Trabalho",
    iconName: "Briefcase",
    items: [
      {
        id: "faq-trab-1",
        question: "Fui demitido. A quais verbas rescisórias tenho direito?",
        answer:
          "Na demissão sem justa causa, você tem direito a saldo de salário, aviso prévio (trabalhado ou indenizado proporcional), 13º salário proporcional, férias vencidas e proporcionais com acréscimo de 1/3 constitucional, liberação das guias de seguro-desemprego e saque do FGTS com a multa rescisória de 40%. Em consultas orientadas, realizamos o cálculo exato para verificar se a empresa não cometeu erros a seu desfavor.",
      },
      {
        id: "faq-trab-2",
        question: "Fui contratado como 'PJ' (Pessoa Jurídica), mas tinha chefe e horário. Posso pedir direitos trabalhistas?",
        answer:
          "Sim. Se você cumpria ordens diretas de uma chefia (subordinação), tinha horário obrigatório de entrada e saída (habitualidade), recebia pagamento mensal e não podia mandar outra pessoa trabalhar no seu lugar (pessoalidade), a jurisprudência considera o contrato PJ uma fraude trabalhista (pejotização). Na Justiça do Trabalho, é possível pedir o reconhecimento de vínculo de emprego com pagamento de todo o FGTS, férias, 13º salário e benefícios da categoria.",
      },
      {
        id: "faq-trab-3",
        question: "O que é o 'limbo previdenciário' e de quem é a responsabilidade do salário?",
        answer:
          "O limbo previdenciário ocorre quando o INSS dá alta ao trabalhador afirmando que ele está apto, mas o médico da empresa recusa seu retorno por considerá-lo inapto. Nessa situação de desamparo, a jurisprudência pacificada do TST entende que a responsabilidade pelos salários é da empresa, já que o contrato de trabalho voltou a vigorar plenamente.",
      },
      {
        id: "faq-trab-4",
        question: "Sofri assédio moral no trabalho ou estou doente. Posso pedir rescisão indireta?",
        answer:
          "Sim. O assédio moral (humilhações, cobranças abusivas, perseguições) ou a falta de condições dignas de saúde justificam o pedido judicial de rescisão indireta do contrato de trabalho (art. 483 da CLT). Se deferida, você sai do emprego recebendo exatamente todas as verbas da demissão sem justa causa, além de eventual indenização por danos morais.",
      },
    ],
  },
  {
    id: "familia",
    label: "Direito de Família",
    iconName: "HeartHandshake",
    items: [
      {
        id: "faq-fam-1",
        question: "Quanto vou receber ou pagar de pensão alimentícia? Existe porcentagem fixa de 30%?",
        answer:
          "Não existe na lei brasileira uma porcentagem fixa de 30%. O valor da pensão alimentícia é determinado pelo magistrado após avaliar as necessidades reais da criança (escola, alimentação, saúde, lazer, moradia) e a real capacidade financeira de quem vai pagar, respeitando a proporcionalidade entre pai e mãe.",
      },
      {
        id: "faq-fam-2",
        question: "Como funciona a guarda compartilhada na prática?",
        answer:
          "A guarda compartilhada é a regra geral no Brasil. Ela não obriga que o filho fique pulando de casa a cada semana. Ela estabelece que a residência principal da criança seja fixada na casa de um dos genitores para garantir rotina e estabilidade emocional, enquanto todas as decisões fundamentais (educação, saúde, convívio) são exercidas em conjunto por pai e mãe.",
      },
      {
        id: "faq-fam-3",
        question: "Como fazer um divórcio rápido e sem desgaste?",
        answer:
          "Quando há consenso entre o casal sobre a partilha de bens e não há filhos menores ou incapazes, o divórcio pode ser feito em poucos dias diretamente em Cartório de Notas por escritura pública. Havendo filhos menores ou desacordo quanto a bens, o divórcio é processado judicialmente, sempre buscando a mediação inicial para evitar traumas e demora.",
      },
      {
        id: "faq-fam-4",
        question: "Quem sai da residência do casal perde o direito à sua parte no imóvel?",
        answer:
          "Não. Sair temporariamente da casa conjugal para evitar brigas ou agressões não significa abrir mão do direito à meação patrimonial do bem. A partilha seguirá rigorosamente as regras do regime de bens do casamento ou da união estável.",
      },
    ],
  },
  {
    id: "consumidor",
    label: "Direito do Consumidor",
    iconName: "ShieldAlert",
    items: [
      {
        id: "faq-cons-1",
        question: "Meu nome foi negativado indevidamente no SPC/Serasa. Tenho direito a indenização?",
        answer:
          "Sim. Se seu nome foi inscrito em cadastros de inadimplentes por uma dívida já paga ou que você jamais contraiu (golpe, cobrança indevida), a Justiça brasileira considera o dano moral presumido ('in re ipsa'). É cabível pedido de tutela de urgência (liminar) para exclusão do nome em até 48 horas, além de ação de indenização por danos morais.",
      },
      {
        id: "faq-cons-2",
        question: "Fui vítima de golpe do Pix ou empréstimo não autorizado na minha conta. O banco responde?",
        answer:
          "Sim. Conforme a Súmula 479 do STJ, as instituições financeiras respondem objetivamente pelos danos gerados por fortuito interno relativo a fraudes e delitos praticados por terceiros no âmbito de operações bancárias. É possível requerer o cancelamento do contrato e a devolução dos valores subtraídos.",
      },
      {
        id: "faq-cons-3",
        question: "Qual é o prazo de garantia para produtos com defeito e o direito de arrependimento?",
        answer:
          "O Código de Defesa do Consumidor concede 30 dias de garantia legal para bens não duráveis e 90 dias para bens duráveis (como eletrodomésticos e veículos), além da garantia do fabricante. Já o direito de arrependimento (7 dias para devolver sem custos) vale para qualquer compra feita fora do estabelecimento comercial (pela internet, telefone ou catálogo).",
      },
    ],
  },
  {
    id: "previdenciario",
    label: "Direito Previdenciário",
    iconName: "Award",
    items: [
      {
        id: "faq-prev-1",
        question: "Tive meu auxílio-doença negado pelo INSS. O que devo fazer?",
        answer:
          "Diante da negativa do INSS, é recomendável ingressar com uma ação judicial perante a Justiça Federal. No processo judicial, a perícia é realizada por um médico especialista nomeado pelo juiz, de forma muito mais detalhada e imparcial do que a perícia administrativa do posto do INSS.",
      },
      {
        id: "faq-prev-2",
        question: "Quem tem direito ao benefício assistencial BPC/LOAS?",
        answer:
          "O BPC/LOAS é um benefício de um salário mínimo mensal pago a idosos com 65 anos ou mais e a pessoas com deficiência de qualquer idade com impedimento de longo prazo, desde que comprovada a situação de vulnerabilidade e baixa renda familiar per capita, independentemente de terem contribuído para o INSS.",
      },
      {
        id: "faq-prev-3",
        question: "Por que fazer um Planejamento Previdenciário antes de pedir a aposentadoria?",
        answer:
          "Com as novas regras da Reforma da Previdência, existem múltiplas regras de transição (pedágio de 50%, pedágio de 100%, pontos, idade progressiva). Pedir o benefício no momento errado ou sem corrigir o CNIS pode fazer com que você perca até 40% do valor mensal da aposentadoria para o resto da vida. O planejamento simula cenários exatos de retorno financeiro.",
      },
    ],
  },
  {
    id: "civel",
    label: "Direito Civil & Sucessões",
    iconName: "Scale",
    items: [
      {
        id: "faq-civ-1",
        question: "Quanto tempo dura um inventário e quando ele pode ser feito em cartório?",
        answer:
          "O inventário extrajudicial em cartório pode ser concluído em poucos dias ou semanas, desde que haja consenso entre os herdeiros, ausência de herdeiros menores/incapazes e auxílio de advogadas. Quando há litígio ou menores, o inventário é judicial, onde conduzimos com celeridade para evitar que o patrimônio se degrade.",
      },
      {
        id: "faq-civ-2",
        question: "Moro em um terreno há anos sem escritura. Posso requerer usucapião?",
        answer:
          "Sim. Se você possui posse mansa, pacífica, contínua e com ânimo de dono por determinado tempo (que varia de 5 a 15 anos dependendo da modalidade legal e metragem), é plenamente possível ingressar com pedido de usucapião (judicial ou extrajudicial) para obter a matrícula definitiva da propriedade.",
      },
      {
        id: "faq-civ-3",
        question: "Como funciona a cobrança e execução de dívidas de contratos e cheques?",
        answer:
          "Documentos assinados por devedor e duas testemunhas, contratos de locação e cheques são títulos executivos. Isso permite ingressar diretamente com Ação de Execução de Título, com prazo legal de apenas 3 dias para pagamento sob pena de penhora imediata de bens e bloqueio de contas bancárias (Sisbajud).",
      },
    ],
  },
  {
    id: "atendimento",
    label: "Atendimento & Honorários",
    iconName: "Compass",
    items: [
      {
        id: "faq-atend-1",
        question: "Como funciona o atendimento personalizado e em horários alternativos?",
        answer:
          "Entendemos que a rotina de trabalho e os compromissos dos nossos clientes muitas vezes impedem deslocamentos em horário comercial. Por isso, oferecemos atendimento com hora marcada nos finais de semana, feriados e em locais alternativos (residências, condomínios, salões paroquiais ou online com total comodidade).",
      },
      {
        id: "faq-atend-2",
        question: "O escritório atua fora de Curitiba e do Paraná?",
        answer:
          "Sim. As advogadas sócias possuem atuação consolidada e recorrente nos estados do Paraná, Santa Catarina e São Paulo, além de contarem com parcerias com escritórios renomados em todo o território nacional para atendimento em outras comarcas e áreas complementares.",
      },
      {
        id: "faq-atend-3",
        question: "Como são definidos os honorários advocatícios?",
        answer:
          "Nossos honorários são formalizados em contrato de prestação de serviços transparente e detalhado, seguindo rigorosamente a Tabela da Ordem dos Advogados do Brasil (OAB) e o Provimento 205/2021. Adequamos as condições de acordo com a complexidade da matéria e a modalidade de atuação.",
      },
    ],
  },
];

export const FAQ_DATA = FAQ_CATEGORIES;