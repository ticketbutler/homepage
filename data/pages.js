const testimonials = require("./test");
const contact = {
  type: "contact",
  title: "contact",
  path: "contact",
  address: "Esplanaden 7,",
  city: "1263 København K",
  phone: "+45 89 80 12 80",
  support: "hello@ticketbutler.io",

  address_text_da: "Adresse",
  address_text_en: "Address",
  phone_text_da: "Telefon",
  phone_text_en: "Phone",
  support_text_da: "Generelle henvendelser",
  support_text_en: "General enquiries",
  heading_da: "Kontakt",
  heading_en: "Contact",
  placeholder_name_da: "Dit navn",
  placeholder_name_en: "Your name",
  placeholder_email_da: "Din email",
  placeholder_email_en: "Your email",
  placeholder_text_da: "Besked",
  placeholder_text_en: "Message",
  button_text_da: "Send besked",
  button_text_en: "Send message",
  action_da: "/da/tak-side",
  action_en: "/en/thank-you-page",
  thanks_message_da:
    "Tak for din henvendelse! Vi vender tilbage inden for 2 arbejdsdage.",
  thanks_message_en:
    "Thanks for your inquiry! We will get back to you within 2 working days.",
  call_us_da: "For akutte tilfælde, ring venligst til:",
  call_us_en: "For urgent matters please call:",
  number: "89 80 12 80"
};

const newsletterSubscription = {
  type: "newsletter-subscription",
  heading_da: "Tilmeld Ticketbutler Nyhedsbrev",
  heading_en: "Subscribe to the Ticketbutler's Newsletter",
  button_text_da: "Tilmeld",
  button_text_en: "Subscribe",
  placeholder_da: "Din email her",
  placeholder_en: "Your email here",
  newsletter_text_en: "Thank you for suscribing!",
  newsletter_text_da: "Tak for din abonnement!"
};

const partnersSection = {
  type: "listOfImages",
  images: [
    {
      src: "/img/Comwell.png",
      href: "http://comwell.dk"
    },
    {
      src: "/img/zentropa_logo.png",
      href: "http://zentropa.dk/"
    },
    {
      src: "/img/mikkeller.png",
      href: "http://mikkeller.dk/"
    },

    {
      src: "/img/SPISlogo.png",
      href: "https://spisodense.dk/"
    },

    {
      src: "/img/IDA_logo_grey_RGB.png",
      href: "http://ida.dk"
    },

    {
      src: "/img/Rainmaking-logo.png",
      href: "http://rainmaking.io"
    }
  ]
};
const featuresNavigation = {
  type: "feature-navigation",
  items: [
    {
      image: "/img/sell-more.png",
      link_en: "/en/sell-more-tickets-online",
      link_da: "/da/saelg-flere-billetter-online",
      alt: "image1",
      name_en: "Sell more",
      name_da: "Sælg mere"
    },
    {
      image: "/img/better-experience.png",
      link_da: "/da/dit-billetsystem",
      link_en: "/en/your-ticket-system",
      alt: "image2",
      name_en: "Better experience",
      name_da: "Bedre oplevelse"
    },
    {
      image: "/img/know-your-guests.png",
      link_en: "/en/know-you-customers",
      link_da: "/da/kend-dine-gæster",
      alt: "image1",
      name_en: "Know your guests",
      name_da: "Kend dine gæster"
    },
    {
      image: "/img/be-in-control.png",
      link_da: "/da/billetter-billettyper",
      link_en: "/en/ticket-types",
      alt: "image2",
      name_en: "Be in control",
      name_da: "Vær i kontrol"
    }
  ]
};

module.exports = [
  {
    path_en: "/en",
    path_da: "/da",

    title_da: "Ticketbutler ",
    title_en: "Ticketbutler",
    meta_description_da:
      " Tiltræk flere kunder og sælg billetter med et full scale billetsystem, som matcher dit brand.",
    meta_description_en:
      "Attract more customers and sell tickets with a full-scale ticketing system that matches your brand.",

    sections: [
      {
        type: "header",
        button_link_da: "/da/login/",
        button_link_en: "/en/login/",
        button_text_da: "Opret sit første event",
        button_text_en: "Create your first event",
        heading_da: "Dit skræddersyede billetsystem",
        heading_en: "Your ticketing platform",
        image: "/img/splash-new.png",
        text_da: "Din data. Dit brand. Din succes",
        text_en: "Your data. Your brand. Your success"
      },
      partnersSection,

      {
        type: "future_image_right_new",
        heading_da: "Din succes er vores succes",
        heading_en: "We want you to have success",
        image: "/img/robust-billetsystem.png",
        image_alt_da: "Robust-billetsystem-knuckles",
        image_alt_en: "Robust-ticketing-platform-knuckles",
        text_da:
          "Ticketbutler er et online billetsystem pakket med features, som er udviklet til at gøre livet som arrangør nemmere. Dit brand er i fokus, du får gratis adgang til værdifuld data og dine gæster får en let og hurtig købsoplevelse.",
        text_en:
          "Ticketbutler is dedicated to help you get the most out of your event as possible. We do this by giving you the power of data, putting your brand in front, and giving your guests the best ticketing experience."
      },
      {
        type: "future_image_left",
        button_link_da: "/da/saelg-flere-billetter-online",
        button_link_en: "/en/sell-more-tickets-online",
        button_text_da: "Om øget salg",
        button_text_en: "About increased sales",
        heading_da: "Sælg billetter direkte fra din hjemmeside",
        heading_en: "Power your homepage with ticketing integration",
        image: "/img/iframe-screens-new.png",
        image_alt_da: "Saelg-billetter-online",
        image_alt_en: "Sell-tickets-online",
        text_da:
          "Alle besøgende på din hjemmeside er din mulighed for at sælge billetter eller hvad du ellers tilbyder. Gå ikke glip af besøgende ved at integrere billetsalget på din hjemmeside. Integrationen kræver ikke mere end et copy/paste og er designet til at matche dit brand. Foretrækker du at holde siderne adskilt, stiller vi også separate eventsider til rådighed.",
        text_en:
          "Every homepage visitor is an opportunity to not only sell tickets but also whatever you offer from your homepage. Never miss the opportunity to show off by integrating the ticketing on your homepage. You don’t have to be a nerd to integrate – it is as easy as copy/paste and the integration is designed to suit your brand. If you don’t want to integrate we also have beautiful event pages."
      },
      {
        type: "listOfImages",
        heading_da: "Ticketbutler kan blandt andet integreres med",
        heading_en: "Ticketbutler integrates among others with",
        images: [
          {
            src: "/img/squarespace-logo.png"
          },

          {
            src: "/img/Wix.com_Logo.png"
          },
          {
            src: "/img/WordPress-logotype-standard.png"
          }
        ],
        sectionStyle: {
          maxWidth: 500,
          margin: "0 auto"
        }
      },

      {
        type: "tall_centered_future",
        heading_da: "Dit billetsystem. Din identitet",
        heading_en: "Your ticketing platform, your identity",
        image: "/img/billetsystem-med-eget-design.png",
        image_alt_da: "saelg-billetter+brand",
        image_alt_en: "sell-tickets+brand",
        text_da:
          "Hele købsoplevelsen designes og tilpasses dit brand. Lige fra hjemmeside-integration og eventside, til e-mails og billetter, og selv ned til bankudskriften. Det handler om dig og dine gæster, ikke os.",
        text_en:
          "The whole ticketing experience is designed in your brand. From the integration and event page, all emails send out, the tickets, and even to the bank statements, it’s all about you, not us."
      },
      {
        type: "future_image_right_second",
        heading_da: "Byg din fanbase op",
        heading_en: "Your customers, your newsletter subscribers",
        image: "/img/billetsystem-til-koncerter.png",
        image_alt_da: "Billetsystem-til-koncerter",
        image_alt_en: "Ticketing-platform-for-concerts",
        text_da:
          "Mon ikke dine gæster også er interesserede i dine kommende begivenheder? Vi spørger altid dine gæster om de vil skrive sig op til dit nyhedsbrev, så du hurtigt kan bygge en fanbase op. Du fortjener det!",
        text_en:
          "Your guests attend your events because they are interested in what you do, so they might also be interested in your future events and other services. We ask all your guests to join your newsletter to build up your fan base faster. You’ve earned it!"
      },
      testimonials,
      {
        type: "future_layers",
        button_link_da: "/da/dit-billetsystem",
        button_link_en: "/en/your-ticket-system",
        button_text_da: "Om oplevelsen",
        button_text_en: "About the experience",
        heading_da: "Nemt for dine gæster",
        heading_en: "Made easy for your customers",
        image: "/img/simpel-billetservice.png",
        image_alt_da: "simpel-billetservice",
        image_alt_en: "simple-ticket-service",
        text_da:
          "Det tager kun et øjeblik for dine gæster at købe billetter. Designet til billetkøb fra smartphone, ingen brugeroprettelse og betaling med betalingskort eller MobilePay giver friktionsfri købsoplevelse.",
        text_en:
          "It takes seconds for your customers to buy your tickets. Designed to be easy buying tickets from a phone, no asking for creating a user, and various payment methods including MobilePay payments."
      },
      {
        type: "future_image_left",
        button_link_da: "/da/kend-dine-gæster",
        button_link_en: "/en/know-you-customers",
        button_text_da: "Om data",
        button_text_en: "About data",
        heading_da: "Lær din gæster at kende",
        heading_en: "Know your customers",
        image: "/img/online-billetsystem2.png",
        image_alt_da: "billetservice+online-data",
        image_alt_en: "ticket-service+online-data",
        text_da:
          "Jo bedre du kender dine kunder, desto bedre en oplevelse kan du give dem, og jo flere billetter kan du sælge. Skræddersy spørgsmål til dine gæster, optimér Facebook annoncer med Facebook Pixel, analysér dine kunder gennem Google Analytics og se sammenhængen mellem antallet af billetter solgt og din marketingstrategi. ",
        text_en:
          "The better you know your customers, the better experience you can provide and the more tickets you can sell. Ask your customers what you need to know, optimize Facebook ads with our Facebook pixel integration, get in depth knowledge with our Google Analytics integration, and follow ticket sales so you know what marketing efforts work."
      },

      {
        type: "future_image_right",
        button_link_da: "/da/billigt-billetsystem",
        button_link_en: "/en/best-value-ticket-system",
        button_text_da: "Se priser",
        button_text_en: "See prices",
        heading_da: "Priser for alle",
        heading_en: "We hug everyone",
        image: "/img/gratis-billetservice.png",
        image_alt_da: "Gratis-online-billetsystem",
        image_alt_en: "Free-online-ticketing-platform",
        text_da:
          "Om du repræsenterer et stort firma, et startup eller en énmandshær, står vi klar til at imødekomme dine behov, uanset om du bruger vores gratis løsning eller en skræddersyet løsning.",
        text_en:
          " It doesn’t matter if you’re a big company, a startup or a one man army. We accommodate your needs either if you use our free plan or an advanced tailored solution."
      },
      {
        type: "future_image_left",
        button_link_da: "/da/billigt-billetsystem",
        button_link_en: "/en/best-value-ticket-system",
        button_text_da: "Se mere",
        button_text_en: "See more",
        heading_da: "Dine penge, dit cashflow",
        heading_en: "Your money, your cashflow",
        image: "/img/cute-money-piggie.jpg",
        image_alt_da: "faa-udbetaling-inden-event",
        image_alt_en: "receive-money-before-event",
        text_da:
          "Du er måske vant til at få din omsætning udbetalt efter dit events afslutning. Med Ticketbutler kan du selv vælge om du ønsker din omsætning udbetalt løbende inden eventet eller samlet efter.",
        text_en:
          "You might be used to receive your event revenue after the event has ended. But with Ticketbutler you can choose to receive your revenue ongoing before the event or the total revenue after the event."
      },
      {
        type: "tall_centered_future_button_top",
        button_link: "#contact",
        button_text_da: "Kontakt os!",
        button_text_en: "Contact us!",
        heading_da: "Kom nemt i gang",
        heading_en: "Getting started is a breeze",
        image: "/img/simpelt-billetsystem.png",
        image_alt_da: "Saelg-billetter-online",
        image_alt_en: "Sell-tickets-online",
        text_da:
          "Giv os dit logo og brandfarver og du har dit eget billetsystem inden for et par dage. Vi designer systemet, så det ser lækkert ud til dit brand.",
        text_en:
          "Start your ticket sales in the matter of minutes through a few steps. If you need help we’re ready to give you personal assistance."
      },
      newsletterSubscription,

      contact
    ]
  },
  /*////////////////////////////PRICE PAGE///////////////////////////////////*/
  {
    path_da: "/da/billigt-billetsystem",
    path_en: "/en/best-value-ticket-system",
    title_da: "Priser | Ticketbutler",
    title_en: "A simple and cheap ticket system",
    meta_description_da:
      "Ticketbutler leverer et enkelt og billigt billetsystem med dit brand i fokus. Start dit event og sælg flere billetter.",
    meta_description_en:
      "Ticketbutler provides a simple and inexpensive ticketing system in your brand. Create your event today to begin selling tickets",
    sections: [
      {
        type: "header",
        button_link: "#contact",
        button_text_da: "Kontakt os!",
        button_text_en: "Contact us!",
        heading_da: "Priser for alle",
        heading_en: "Prices for all",
        image: "/img/gratis-billetservice.png",
        text_da:
          "Om du benytter vores gratis løsning eller ønsker skræddersyning, kan vi hjælpe dig.",
        text_en:
          "We are experts in ticketing and would love a challenge from you. Contact us if you want a tailored solution, deep integrations, or advanced ticketing features."
      },
      {
        type: "future_image_right_second",
        heading_da: "Gratis for betalte arrangementer",
        heading_en: "Free to use for paid events",
        image: "/img/konfetti-bred.png",
        image_alt_da: "enkelt-billigt-billetsystem",
        image_alt_en: "single-best-value-ticket-system",
        text_da:
          "Det er helt gratis at sælge billetter på Ticketbutler – kun et lavt billetgebyr lægges ovenpå billetprisen. Ingen kortgebyr. Ingen MobilePay gebyr. Ingen overraskelser.",
        text_en:
          "If you have tickets with a price Ticketbutler is absolutely free for you – only a small ticket fee is added on top of the ticket price. No extra processing fees, fees using MobilePay, or other surprises."
      },
      {
        type: "future_image_left",
        heading_da: "Gratis events",
        heading_en: "Organizing events with free tickets",
        image: "/img/business-happy.png",
        image_alt_da: "billigt-billetsystem",
        image_alt_en: "best-value-pricing-platform",
        text_da:
          "Nogensinde undret dig over hvorfor andre online billetsystemer er gratis til gratis arrangementer? Du betaler med værdien af data, branding og kundetrafik til billetudbyderen. For et lavt månedligt beløb, giver vi dig alle disse værdier, så din virksomhed kan vokse.",
        text_en:
          "Have you ever wondered why other ticketing platforms offer their service for free for free events? Because you pay with the value of data, branding, and customer traffic to the ticketing platform. We give all this value to you to make your business grow for a small subscription fee per month."
      },
      {
        type: "future_image_right_new",
        heading_da: "Få løbende udbetaling",
        heading_en: "Ongoing payments",
        image: "/img/cute-money-piggie.jpg",
        image_alt_da: "loebende-udbetaling-inden-arrangement",
        image_alt_en: "ongoing-payments-before-event",
        text_da:
          "Hvis du ønsker løbende udbetaling inden dit event, skal du blot udfylde en formular online, hvor du herefter modtager billetindtægterne løbende med en uges forsinkelse. Du kan også vælge at få en samlet udbetaling efter eventet, så du slipper for unødvendigt bogføringsarbejde.",
        text_en:
          "If you wish your revenue paid out ongoing before the event, you only need to fill a form online, and hereafter you receive your money ongoing with seven days delay. You can also choose to receive the total revenue after the event so you avoid unnecessary accounting work."
      },
      /* {
        type: "tall_centered_future",
        button_link: "#contact",
        button_text: "Kontakt os!",
        heading_da: "Hvilken pakke passer dig?",
        heading_en: "Which package suits you?",
        image: "/img/pricing-table2.png",
        image_alt_da: "gratis-online-billetsystem",
        image_alt_en: "free-online-ticketing-platform",
        text_da:
          "Er du en énmandshær, fra et startup eller stor virksomhed, kan vi hjælpe dig.",
        text_en:
          "It doesn’t matter if you’re a big company, a startup or a one man army, we can help you.",
        priceCard1Heading_da: "EVENTS UDEN BETALING",
        priceCard1Heading_en: "EVENTS WITHOUT PAYMENTS",
        priceCard1Subtitle_da:
          "For dig som løbende har events uden betalende gæster",
        priceCard1Subtitle_en: "You got ongoing events without paid tickets",
        priceCardtext_da: "per måned",
        priceCardtext_en: "per month",
        priceCardFirstListText_da: "Ubegrænset antal betalende gæster",
        priceCardFirstListText_en: "Unlimited amount of paid tickets",
        priceCardSecondListText_da: "Ubegrænset antal ikke-betalende gæster",
        priceCardSecondListText_en: "Unlimited amount of non-paid tickets",
        priceCardThirdListText_da: "3 kr + 3% per betalt billet ",
        priceCardThirdListText_en: "3 kr + 3% per paid ticket",
        priceCard2Heading_da: "EVENTS MED BETALING",
        priceCard2Heading_en: "EVENTS WITH PAYMENTS",
        priceCar2Subtitle_da:
          " For dig som primært sælger billetter med betaling",
        priceCard2Subtitle_en: "You primarily sell paid tickets",
        priceCard2text_da: "Gratis",
        priceCard2text_en: "Free",
        priceCard2SecondListText_da: "100 ikke-betalende gæster per måned",
        priceCard2SecondListText_en: "100 non-paid tickets per month",
        priceCard3Heading_da: "PREMIUM",
        priceCard3Heading_en: "PREMIUM",
        priceCard3Subtitle_da:
          "For dig som ønsker at skræddersy de små detaljer",
        priceCard3Subtitle_en: "You want to tailor the details",
        priceCard3ListText_da: "Ekstra skræddersyning",
        priceCard3ListText_en: "Extra tailoring",
        momsText_da: "Alle priser vises uden moms",
        momsText_en: "All prices are displayed without VAT"
      }, */
      {
        type: "price-calculator",
        heading_en: "Know the value of Ticketbutler",
        heading_da: "Kend værdien af Ticketbutler",
        text_da:
          "Ticketbutler tilbyder et billetsystem til de mest konkurrencedygtige priser. Udregn her din omsætning og omkostninger samt forventede antal nye tilmeldte til dit nyhedsbrev og ekstra visninger af din identitet.",
        text_en:
          "Ticketbutler offers a ticketing system at the most competitive price. Below you can calculate your revenue and costs together with the expected amount of new newsletter subscribers and extra impressions of your identity.",
        locale_en: "en",
        locale_da: "da"
      },
      testimonials,
      partnersSection,
      newsletterSubscription,

      contact
    ]
  },

  /*//////////////////////SELL MORE ONLINE///////////////////*/

  {
    path_da: "/da/saelg-flere-billetter-online",
    path_en: "/en/sell-more-tickets-online",
    title_da: "Sælg flere billetter online",
    title_en: "Sell more online",
    meta_description_da:
      "Arrangerer du events, og mangler du tips og tricks til at øge dit billetsalg? Ticketbutler er et online billetsystem, som hjælper dig på vejen mod succes",
    meta_description_en:
      "Are you organising events and need tips and tricks to increase your ticket sales? Ticketbutler is an online ticketing system that helps you reach success”",
    sections: [
      featuresNavigation,
      {
        type: "header",

        heading_da: "Sælg mere online",
        heading_en: "Sell more online",
        image: "/img/konfetti-bred.png",
        text_da:
          "Ticketbutler hjælper dig ikke kun med at sælge billetter – systemet understøtter også din forretning og forståelse af din målgruppe, så du øger din omsætning på tværs af virksomheden. Læs mere på siden her om hvordan.",
        text_en:
          "Ticketbutler is not only helping you to sell more tickets - the platform also supports your business and understanding of your target audience, such you will see an increased bottom line for your company as a whole. Read more on this page on how.",
        featureHeader: true
      },
      {
        type: "future_image_left",
        heading_da: "Øg din brand awareness",
        heading_en: "Start looking professional",
        image: "/img/brugerrejse-i-et-online-billetsystem2.png",
        image_alt: "brand-awareness",
        text_da:
          "Hele billet-oplevelsen er designet til at matche dit univers, så du øger din brand awareness. Fra eventside og integrationen på din hjemmeside, i udsendte e-mails og billetter, og selv på bankudskriften fremstår dit brand.",
        text_en:
          "Start looking professional in all touchpoints with your customers and create brand awareness by showing your throughout the whole ticketing experience: From the integration and event page, all emails send out, the tickets, and even to the bank statements, it’s all about you. Not us."
      },
      {
        type: "future_image_right_second",
        button_link: "#contact",
        button_text_da: "Kontakt os!",
        button_text_en: "Contact us!",
        heading_da: "Sælg mere med e-mail marketing",
        heading_en: "Sell more through newsletters",
        image: "/img/john-schnobrich-520023-unsplash.png",
        image_alt_da: "email-marketing-billetsystem",
        image_alt_en: "email-marketing-ticketing-platform",
        text_da:
          "Skal du arrangere flere events? Sælger din virksomhed andet end billetter? Dine gæster er interesseret i det du gør, og vi giver dem mulighed for at tilmelde sig dit nyhedsbrev, så din database vokser. E-mail marketing er et et værdifuldt værktøj, som du kan bruge til at promovere din virksomhed og fremtidige events. Tiltræk nye kunder og hold fast i de gamle. Dataen er din!",
        text_en:
          "Going to organize more events? Do you sell other services than tickets? Your guests are already interested in you, so we pick up newsletter subscribers on your behalf to give you a valuable way to promote yourself and do more sales in the future through emails. You know – it’s easier to sell to former customers than always finding new ones. The data is yours."
      },
      {
        type: "tall_centered_future",
        heading_da: "Øg dit online billetsalg og andre services ",
        heading_en:
          "Integrate to increase sales of tickets and your other services",
        image: "/img/simpel-integration-billetsystem.png",
        image_alt_da: "Sælg-billetter",
        image_alt_en: "Sell-tickets",
        text_da:
          "Du kender din målgruppe bedst og er den bedste til at sælge dit produkt og dine services. Ved at integrere billetsalg på din hjemmeside sikrer du dig besøgende, som ikke kun er interesserede i et enkelt event, men alt du tilbyder. Det kræver ingen nørder at integrere – det er blot en copy/paste. Vil du hellere have siderne adskilt tilbyder vi også separate eventsider. Integration med billet API? Kontakt os!",
        text_en:
          "By integrating the ticketing on your platform you get visitors who are not only interested in your single event but everything you have on offer. You will be in charge of what to show to your peers, because who is best at selling your event and services? You. Nerds not required to integrate – it’s literally a copy/paste. Don’t fancy integration? No worries, you’ll always get a beautiful event page. Want an API integration? Contact us!"
      },
      {
        type: "future_image_left",
        button_link:
          "https://www.facebook.com/business/learn/facebook-ads-pixel",
        button_text_da: "Om Facebook Pixel",
        button_text_en: "About Facebook Pixel",
        heading_da: "Optimér dit salg på Facebook",
        heading_en: "Optimize your Facebook marketing",
        image: "/img/facebook-pixel-billetsystem.png",
        text_da:
          "Hvorfor ikke nøjes med at investere i Facebook-annoncer som virker? Facebook Pixel fortæller dig om dine Facebook-annoncer virker, og automatisk optimerer dine annoncer så du sælger flere billetter. Altså får du mere for pengene i dine Facebook-kampagner.",
        text_en:
          "With the Facebook pixel integration  you know if your Facebook ad worked or not. Hereby you can optimize your ad spendings. Besides Facebook get to know your customers better to show the right ads to the right audience to sell more tickets and you can also choose to show ads to people who have bought tickets from you before. Meaning: more value for your ad money and more sales."
      },
      {
        type: "future_image_right_new",
        button_link: "#contact",
        button_text_da: "Kontakt os!",
        button_text_en: "Contact us!",
        heading_da: "Brug rabatkoder i din markedsføring",
        heading_en: "Track your marketing with discount codes",
        image: "/img/couponticketbutler.png",
        text_da:
          "Med Ticketbutler kan du oprette rabatkoder, hvilket er et stærkt marketing-værktøj: Opret en rabatkode til et af dine events og track gennem Ticketbutler, hvor mange gange koden er blevet brugt i dit online billetsalg. På den måde kan du måle hvor effektiv din kampagne har været.",
        text_en:
          "In Ticketbutler you can create discount codes, which is a strong marketing tool. Include a discount code in your marketing campaign and track in Ticketbutler how many times the discount code is used to see how efficient the campaign is."
      },
      newsletterSubscription,

      contact
    ]
  },
  /*//////////////////////////KNOW YOUR CUSTOMERS PAGE/////////////////*/
  {
    path_da: "/da/kend-dine-gæster",
    path_en: "/en/know-you-customers",
    title_da:
      "Kend dine gæster – og sælg flere billetter online med Ticketbutler",
    title_en: "Know your guests and sell more tickets online with Ticketbutler",
    meta_description_da:
      "Ticketbutler giver dig mulighed for, at stille dine gæster specifikke spørgsmål når du sælger billetter online. Skyd dit event i gang i dag.",
    meta_description_en:
      "“Ticketbutler gives you a way to ask your guests specific questions when you sell tickets online. Start your ticket sales today”",
    sections: [
      featuresNavigation,
      {
        type: "header",
        heading_da: "Kend dine gæster",
        heading_en: "Know your customers",
        image: "/img/billetsystem-til-koncerter.png",
        text_da:
          "Ticketbutler hjælper dig med at indsamle data på dine gæster, så du lærer din målgruppe bedre at kende.",
        text_en:
          "Ticketbutler helps you gather data from your guests, so you get to know your target audience better.",
        featureHeader: true
      },
      {
        type: "future_image_left",
        button_link: "https://www.google.com/analytics/",
        button_text_da: "Om Google Analytics ",
        button_text_en: "About Google Analytics",
        heading_da: "Forstå dine gæster med Google Analytics",
        heading_en: "Understand your customers with Google Analytics",
        image: "/img/google-analytics-i-billetsystem.png",
        image_alt_da: "Online-billetsalg-google-analytics",
        image_alt_en: "Online-tickets-sales-google-analytics",
        text_da:
          "Google Analytics er integreret i Ticketbutler og giver dig adgang til værdifuld information om dine gæster: Hvilken side kom gæsterne fra før de købte sine billetter? Hvor i verden befinder de sig? Hvilket køn har de? Få svar på endnu flere spørgsmål ved at dykke ned i din Google Analytics data.",
        text_en:
          "Dig deep in the understanding of your customers by our Google Analytics integration. Where on the internet were your customer before they bought their ticket? Where are they located physically? What gender do they have? Get an answer to these questions and a lot more by looking into your data."
      },
      {
        type: "future_image_right_new",
        heading_da: "Lær dine gæster at kende",
        heading_en: "Get the information your want",
        image: "/img/fbpixelticketbutler.png",
        image_alt_da: "track-billetsalg-google-analytics ",
        image_alt_en: "track-tickets-sales-google-analytics ",
        text_da:
          "Vil du stille dine gæster spørgsmål inden dit event? Definer specifikke spørgsmål i købsprocessen, som dine gæster skal svare på. Ud fra svarene kan du lære dine gæster bedre at kende, så du kan give dem en bedre oplevelse til eventet.",
        text_en:
          "Do you have specific questions you would like your customers to reply in the purchase flow? Either if it’s questions to the purchaser, to each ticket buyer, to ticket buyers buying specific ticket types, if it’s required to reply or not, we got you covered. Define the questions and easily fetch the data."
      },
      {
        type: "future_image_left",
        heading_da: "Lær fra din salgshistorik",
        heading_en: "We keep track on your sales history",
        image: "/img/online-billetsalg-overblik.png",
        image_alt_da: "Online-billetsalg-overblik",
        image_alt_en: "Online-tickets-sales-overview",
        text_da:
          "Ved at sammenligne din salgshistorik med dine kampagner kan du se, hvilke tiltag der har virket og hvilke der ikke har. Samtidig vil du kunne spore dine kunders adfærdsmønster, og optimere din salgsstrategi bedst derefter.",
        text_en:
          "By comparing the sales history with your marketing efforts you know when your marketing efforts work and when they don’t. Besides you will begin seeing patterns of the behaviour of your customers."
      },
      newsletterSubscription,

      contact
    ]
  },
  /*/////////////////////////////////// PROVIDE BETTER CUSTOMER EXPERIENCE PAGE//////////////////////*/
  {
    path_da: "/da/dit-billetsystem",
    path_en: "/en/your-ticket-system",
    title_da:
      "Dit billetsystem, din data, din succes – start dit event hos Ticketbutler",
    title_en:
      "Your ticketing platform, your data, your succes – start your event at Ticketbutler",
    meta_description_da:
      "Start dit event hos Ticketbutler: Et online billetsystem pakket med features og fordele, som kommer dig og dine gæster til gode.",
    meta_description_en:
      "Start event with Ticketbutler: An online ticketing system packed with features that benefits both you and your guests”",
    sections: [
      featuresNavigation,
      {
        type: "header",
        heading_da: "En bedre oplevelse for dig og dine kunder",
        heading_en: "A better experience for you and your customers",
        image: "/img/tilmeldingssystem-til-networking-events.jpg",
        text_da:
          "Gør alle glade ved at gøre det nemt for både dig selv og dine gæster",
        text_en:
          "Make everyone happy by making it easy for both yourself and your guests.",
        featureHeader: true
      },
      {
        type: "future_image_left",
        heading_da: "Gør det nemt for dine gæster",
        heading_en: "Make it easy for your customers",
        image: "/img/user-journey-with-mobilepay.png",
        image_alt_da: "sælg-billetter-online",
        image_alt_en: "sell-tickets-online",
        text_da:
          "Med billetsystemet integreret på din hjemmeside kan dine gæster købe sine billetter på få klik og du tvinger dem ikke til at forlade din hjemmeside. Vi kræver ingen brugeroprettelse og har kun brug for få informationer før gæsterne kan købe sine billetter med betalingskort eller MobilePay.",
        text_en:
          "By the ticketing integration you don’t make your ticket buyer leave your homepage and cut down a step in the purchase flow. And from your homepage your ticket buyers are only seconds away to secure their ticket through our simple buying process. We never ask your customers to create a user, they can pay with MobilePay and we’re only asking for the minimum amount of information to buy the ticket."
      },
      {
        type: "listOfImages",
        heading_da: "Dine gæster kan blandt andet betale med:",
        heading_en: "Your guests can pay amongs others pay with:",
        images: [
          {
            src: "/img/visa_pos_fc.png"
          },
          {
            src: "/img/mc_vrt_opt_pos_73_3x.png"
          },
          {
            src: "/img/MP_RGB_NoTM_Logo+Type Horisontal Blue SMALL.png"
          },
          {
            src: "/img/DK_Logo_CMYK.png"
          },
          {
            src: "/img/ApplePayPaymentMark.png"
          }
        ],
        sectionStyle: {
          maxWidth: 900,
          margin: "0 auto"
        },
        imageStyle: {
          maxHeight: 60,
          maxWidth: 100
        }
      },
      {
        type: "future_image_right",
        heading_da: "SMS, e-mails og påmindelser",
        heading_en: "SMS, emails, and reminders",
        image: "/img/send-sms-emails-og-påmindelser-i-billetsystem.jpg",
        image_alt_da: "billetter-sms-emails",
        image_alt_en: "tickets-sms-emails",
        text_da:
          "Hold dine gæster opdaterede gennem din foretrukne kanal. Send en besked på SMS, e-mail eller gennem vores automatiske påmindelser, så dine gæster er informerede om praktiske forhold og om, hvor meget de har at glæde sig til – måske de lokker sine venner med?",
        text_en:
          "Keep your guests updated through your preferred channel either by SMS, e-emails, or a message in the automated reminder emails. Inform them about practical things, but mostly about how much they should look forward to your event, so they will bring their friends."
      },

      {
        type: "tall_centered_future",
        heading_da: "Brug for en eventside?",
        heading_en: "Don’t fancy integration?",
        image: "/img/event-page-tb.png",
        image_alt_da: "sælg-billetter-fra-din-hjemmeside ",
        image_alt_en: "sell-tickets-from-your-website",
        text_da:
          "Ønsker du ikke at integrere Ticketbutler direkte på din hjemmeside, opretter vi automatisk en separat eventside i dit design.",
        text_en:
          "If you’re not into integrating the ticketing on your homepage Ticketbutler automatically creates a beautiful event page in your design. You can as well  add a picture and description to spice it up."
      },

      {
        type: "future_image_left",
        heading_da: "En naturlig udvidelse af dit brand",
        heading_en: "A natural extension of your brand",
        image: "/img/brugerrejse-i-et-online-billetsystem2.png",
        image_alt_da: "match-dit-brand",
        image_alt_en: "match-your-brand",
        text_da:
          "Hele billetoplevelsen designes i dit brand så dine gæster forbliver i dit univers – intet mix med Ticketbutler branding, ingen eksterne event-tilbud, ingen forstyrrelser – kun dig og dit brand.",
        text_en:
          "The whole ticketing experience is designed in your brand to give your customer the best impression of you – no mixing with Ticketbutler branding, no external offers to your customers, no distractions – just you and your brand."
      },
      {
        type: "future_image_right_second",
        heading_da: "Automatisk justering af sprog",
        heading_en: "Intelligent language choice",
        image: "/img/gratis-billetservice.png",
        image_alt_da: "Billetter-og-sprog",
        image_alt_en: "Tickets-and-languages",
        text_da:
          "Ticketbutler taler både dansk og engelsk. Sproget justeres automatisk alt efter sproget på den enhed dine gæster benytter.",
        text_en:
          "Ticketbutler speaks both Danish and English. The ticketing language will be chosen depending on the language of the computer your customer is sitting with."
      },
      newsletterSubscription,

      contact
    ]
  },
  /*///////////////////////////BE IN CONTROL PAGE////////////////////*/
  {
    path_da: "/da/billetter-billettyper",
    path_en: "/en/ticket-types",
    title_da: "Har du brug for flere billettyper til samme event?",
    title_en: "Do you need several ticket types for the same event?",
    meta_description_da:
      " Med Ticketbutler kan du stille dine gæster specifikke spørgsmål, når du sælger billetter online, og oprette flere billettyper til samme event.",
    meta_description_en:
      "With Ticketbutler you can aks your guests specific questions when you sell tickets online and create several ticket types for same event.",
    sections: [
      featuresNavigation,
      {
        type: "header",
        heading_da: "Vær i kontrol over dit event",
        heading_en: "Be in control of your event",
        image: "/img/simpelt-billetsystem.png",
        text_da:
          "Få kontrol over eventet ved at opsætte dine billetter så de matcher dine gæster, hold styr på billetsalget og check dine gæster ind med Ticketbutler app'en",
        text_en:
          "Get control of your event by setting up tickets that match your guests, keep track of ticket sales, and check guests in at the door with the Ticketbutler app.",
        featureHeader: true
      },
      {
        type: "future_image_left",
        heading_da: "Hjælp dine kunder",
        heading_en: "Support your customers",
        image: "/img/refunder-billetter-i-online-billetsystem.png",
        image_alt_da: "Refunder-billetter-i-online-billetsystem",
        image_alt_en: "Refund-tickets-in-online-ticket-platform",
        text_da:
          "Gør dine kunder glade og støt dem når de har brug for hjælp. Refundér deres billetter eller gensend deres billet (kommer snart!), hvis den er blevet væk – det kræver kun ét klik.",
        text_en:
          "Make your customers happy by supporting them when they are in need. Refund their money or resend their ticket if lost (coming soon!) by the click of a button."
      },
      {
        type: "future_image_right_new",
        heading_da: "Medlemsbilletter",
        heading_en: "Giving exclusive access or discounts to members",
        image: "/img/billetsystem-med-medlemsskab-til-medlemmer.jpg",
        image_alt_da: "Billetsystem-medlemskab",
        image_alt_en: "Ticket-platform-membership",
        text_da:
          "Har du medlemmer, som får gratis eller billigere billetter? Opret medlemsbilletter så medlemmet skal skrive sin medlemskode ind for at få adgang til at købe billetten.",
        text_en:
          "Do you have members who get free or discounted tickets? Create member tickets such the member write in their membership to get access to buy the member ticket."
      },
      {
        type: "future_image_left",
        heading_da: "Billetter til ethvert behov",
        heading_en: "Specify your tickets",
        image: "/img/billetsystem-med-billettyper.png",
        image_alt_da: "Billetsystem-mede-flere-billettyper",
        image_alt_en: "Ticketing-platform-with-more-ticket-types",
        text_da:
          "Med Ticketbutler kan du definere og oprette flere typer billetter til samme event efter behov – giv dem forskellige navne, priser, billetbeskrivelser, eller begræns antallet der er til salg. Brug billettyperne aktivt i din markedsføring f.eks. ved at sælge ‘Early bird’- eller VIP-billetter.",
        text_en:
          "You can customize the settings of the tickets – define ticket types, prices, put in a ticket description, limit the amount for sale, when it’s for sale, and use the ticket types in your marketing such as “Early bird” or “VIP special”. It is a ticketing system, after all."
      },
      {
        type: "tall_centered_future",
        heading_da: "Check dine gæster ind til eventet",
        heading_en: "Check in your guests at the door",
        image: "/img/ticketbutler-app-med-qr-kode.png",
        image_alt_da: "Billetscanner-app-QR-kode",
        image_alt_en: "Ticket-Scanner-App-QR-Code",
        text_da:
          "Når du har downloadet Ticketbutlers app til din smartphone kan du følge dit online billetsalg, checke gæster ind med et enkelt swipe eller scanne QR-koden på dine gæsters billetter til eventet.",
        text_en:
          " By downloading your new best friend you have the most important tools in your pocket. In the app you can follow your ticket sales, checking your guests in by swiping over their name, or scan the QR tickets through the smartphone camera."
      },
      {
        type: "future_image_left",
        heading_da: "Bevar overblikket",
        heading_en: "Always have an overview",
        image: " /img/online-billetsalg-overblik.png",
        image_alt_da: "Online-billetsalg-overblik",
        image_alt_en: "Online-ticketing-overview",
        text_da:
          "Dit Ticketbutler dashboard hjælper dig med at bevare overblikket over hvor mange billetter du har solgt over tid, hvem der har købt billetter og den øvrige data som gæsterne har tastet ind.",
        text_en:
          "From your Ticketbutler dashboard you always have an overview of tickets sold over time, who bought tickets, and what data your guests have entered."
      },
      newsletterSubscription,

      contact
    ]
  },
  /*//////////////////////////ABOUT US PAGE/////////////////////*/
  {
    path_da: "/da/om-os",
    path_en: "/en/about-us",
    title_da: "Om Ticketbutler – Dit skræddersyede billetsystem",
    title_en: "About Ticketbutler - Your tailored ticketing system",
    meta_description_da:
      "Ticketbutler er et online billetsystem, som let kan integreres på din egen hjemmeside.",
    meta_description_en:
      "Ticketbutler is an online ticket system that can be easily integrated into your own website.",
    sections: [
      {
        type: "header",

        heading_da: "Om Ticketbutler",
        heading_en: "About Ticketbutler",
        image: "/img/couponticketbutler.png",
        image_alt_da: "Om Ticketbutler",
        image_alt_en: "About Ticketbutler",
        text_da: "Hvorfor har verden brug for endnu et billetsystem?",
        text_en: "Why do the world need another ticketing system?"
      },
      {
        type: "tall_centered_future_button_top",
        button_link: "#contact",
        button_text_da: "Kontakt os!",
        button_text_en: "Contact us!",
        heading_da: "Hvem er Ticketbutler?",
        heading_en: "Who is Ticketbutler?",
        image: "/img/ticketbutler_logo-with-padding2.png",
        image_alt_da: " Ticketbutler-billetsystem-logo",
        image_alt_en: " Ticketbutler-ticketing-platform-logo",
        text_da:
          "Du kender sikkert Eventbrite, Billetto, Ticketmaster eller et af de andre store billetsystemer. Og ved du hvorfor? Fordi deres brand bliver smasket op i hovedet på dig, når du køber en billet. Hvis du som billetkøber skriver dig op på nyhedsbrevet, er det billetsystemets nyhedsbrev, du skriver dig op til. Billetsystemet bruger din data. Det er virksomhederne bag de store billetsystemers behov der tilfredsstilles i stedet for den  bagvedliggende arrangørs behov. Ticketbutler er et alternativ til de store billetsystemer og vi vil tilfredsstille jeres behov. Jeres brand sættes i centrum. Dataen er jeres. Det er altså jeres behov, der tilfredsstilles og er i centrum. Vores egne danske udviklere benytter de mest stabile og moderne teknologier, vi har verdensklasse service og vi kan varetage dine behov uanset om du er et startup eller stor virksomhed. Vi glæder os til at høre fra dig.",
        text_en:
          "You might already know Eventbrite, Billetto, Ticketmaster or one of the other giant ticketing companies. And do you know why? Because of their brand get smashed into your face, when you buy a ticket. If you sign up for the newsletter, it is the ticketing company newsletter you sign up for. The ticketing company utilizes your data. It is the company behind the giant ticketing systems need that is satisfied. Ticketbutler is an alternative to the giant ticketing companies and we want to satisfy your needs. Your brand is in focus. The data is yours. It is your needs that we satisfy and are in the center. Our own Danish developers use the most stable and modern technologies, we got world-class service, and vi can accommodate your needs no matter if you are a startup or a corporate. We are looking forward to hearing from you."
      },
      newsletterSubscription,

      contact
    ]
  },
  {
    path_da: "/da/tak",
    path_en: "/en/thanks",
    title_da: "Tak",
    title_en: "Thank you",
    sections: [
      {
        type: "header",

        heading_da: "Om Ticketbutler",
        heading_en: "About Ticketbutler",
        image: "/img/couponticketbutler.png",
        image_alt_da: "Om Ticketbutler",
        image_alt_en: "About Ticketbutler",
        text_da: "Hvorfor har verden brug for endnu et billetsystem?",
        text_en: "Why do the world need another ticketing system?"
      },
      {
        type: "tall_centered_future_button_top",

        thank_you_text_da: "Hvorfor har verden brug for endnu et billetsystem?",
        thank_you_text_en: "Why do the world need another ticketing system?"
      }
    ]
  }
];
