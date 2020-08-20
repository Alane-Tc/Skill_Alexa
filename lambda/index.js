// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
const albanil=[
"Quisiera ser mariachi, para tocarte la cucaracha",
"Seño, no mueva tanto la jaula, que se le va a marear la cotorra",
"Quisiera ser frijol, para embarrarme en tu tlacoyo",
"Entonces dime biscocho. ¿Cuándo le ponemos el requesón a esa gordita de chicharrón?",
"Biscocho. Habrá quien te quiera bien y habrá quien te quiera mal, pero a mi aflójame tu tamal",
"Quisiera ser plomero. Para destaparte el agujero",
"Entonces que mi reina. ¿Vas a dejar jugar a tu chiquito con mi mocoso?",
"No soy ni Sabina ni Neruda, pero si te ando chupando la peluda",
"Quisiera ser pirata, no por el oro ni la plata, sino por lo que traes entre pata y pata",
"Si se juntan los mares y los ríos. ¿Por qué no juntar tus pelos con los míos?",
"Mamacita. Vamos hacer barbacoa, tu pones el hoyo y yo el animal",
"Con esas nalgas, dedícame un pedo",
"Quisiera ser microbusero, Para subirte en la parada",
"Con tu pantalón vaquero y tu bonita cazadora. No estás como un tren, sino como una locomotora",
"Me gustaría ser heladero. Para lamerte sin parar",
"Te llenaré de mecánicos el taller ",
"Yo no soy rata, ni tampoco soy oso. Pero yo si te doy bien duro por el chicloso",
"Me gusta tu boca, y me gusta tu pelo. Pero lo que más me gusta, es que me saques el veneno",
"Habrá quien te quiera bien , y quien te quiera mal. Pero a mi no más dame chansa, de comerme tu tamal",
"Quién fuera excusado, pa ver de tí, todo lo que me ha gustado"
    ];

    
const contesta=[
" . ¿Quieres que te diga otro piropo?",
" . ¿Te gustaria otro piropo?",
" . ¿Otro piropo?",
" . ¿Te digo otro piropo?"
        ];

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Hola, bienvenido a piropos de albañiles. Ahora mismo, me convertiré en albañil. Si quieres que te diga uno, dime, quiero un piropo';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Estás?. No te escucho')
            .getResponse();
            //Quién fuera excusado, pa ver de tí, todo lo que me ha gustado
            //Hola, bienvenido a piropos de albañiles. Ahora mismo, me convertiré en albañil. Si quieres que te diga uno, dime, quiero un piropo
    }
};

//Lo que dira alexa 
const PiropoalbaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Piropoalba';
    },
    handle(handlerInput) {
     const speechOutput= albanil[Math.floor(Math.random()*albanil.length)];
        //var speechOutput= nivel1[1];
   
    return handlerInput.responseBuilder
   // .speak(`${speechOutput} si quieres que te diga otro piropo di, quiero otro piropo`)
   .speak(speechOutput + ' ' + contesta[Math.floor(Math.random()*contesta.length)])
   //.speak(speechOutput + '.fgfgfgfgfgf ')// + contesta[Math.floor(Math.random()*contesta.length)])
    .reprompt('No te escuche bien. ¿Puedes repetirmelo?')
    .getResponse(); 
}
};   




//const HelloWorldIntentHandler = {
   // canHandle(handlerInput) {
       // return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
          //  && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    //},
    //handle(handlerInput) {
       // const speakOutput = 'Hello World!';
        //return handlerInput.responseBuilder
           // .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            //.getResponse();
//    }
//};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Para recibir ayuda. Puedes visitar la página de AMAZON';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'oye, pense que te gustaba. Al diablo, es broma. Espero verte de nuevo. Te quiero mucho';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Lo siento, tuve problemas para hacer lo que me pediste. Inténtalo de nuevo.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        PiropoalbaIntentHandler,
       // HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler,
        
        // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
