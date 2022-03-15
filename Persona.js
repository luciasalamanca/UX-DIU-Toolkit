/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Fernando",
				Photo: "Fernando.jpg",
				Quote: "En esta vida no hay nada como un buen amigo",
				Age: 28,
				Occupation: "En paro",
				Family: "Soltero",
				Location: "Badajoz (Granja de Torrehermosa)",
				Character: "Le gusta pasear por el campo",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Encontrar un trabajo estable", "Encontrar pareja", "Conocer lugares nuevos"],
				Frustrations: ["No se maneja bien en las grandes ciudades", "Le gustaría saber manejarse mejor con las nuevas tecnologías", ],
				Bio: "Fernando ha vivido toda su vida en su pueblo, no cursó estudios superiores por lo que no tuvo la oportunidad de vivir en una ciudad. Desde que dejó el instituto ha trabajado en numerosos trabajos: jornalero, albañil, panadero,... Sin embargo, ahora mismo no encuentra trabajo debido a la crisis producida tras la pandemia. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 0 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Ahora que tiene tiempo libre quiere ir a visitar a su primo que estudia en Granada, pero no tiene mucho dinero por lo que busca un lugar barato.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Yasmine",
				Photo: "Yasmine.jpg",
				Quote: "Viajar te abre la mente",
				Age: 22,
				Occupation: "Becaria en un laboratorio",
				Family: "En una relación a distancia.",
				Location: "Almería (Roquetas de Mar)",
				Character: "Alegre y divertida.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Encontrar un trabajo que le guste.", "Viajar por el mundo.", "Conocer a gente nueva.", "Aprender a tocar la guitarra."],
				Frustrations: ["No recibe mucho dinero de las prácticas.", "La relación a distancia le empieza a pesar.", "Quiere dar un cambio de aires en su vida."],
				Bio: "Yasmine hace un año que acabó la carrera y está trabajando de prácticas en un laboratorio en una situación un poco precaria. Está un poco cansada de la rutina de su vida y necesita un cambio de aire para no sentirse estancada. Cree que es el mejor momento para viajar y descubrir nuevos lugares. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos:   "Muchos amigos de Yasmine le han aconsejado que visite Granada debido a la variedad cultural de la ciudad y así tomar esta como un punto de partida para su viaje personal. Como su idea es viajar a muchos sitios más necesita encontrar un alojamiento barato ya que su presupuesto es bastante limitado." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4}
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
