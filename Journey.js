/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
		Id: 0,
		Name: "Fernando",
                Photo: "Fernando.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere visitar a su primo que estudia en Granada",
                touch1: "Móvil (llamada o whatsapp)",
                feel1: "5",
                con1: "Tiene que ver qué días tiene su primo libre para poder ir a visitarlo ",
                ima1: "cartoon-phoning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Le pregunta a sus amigos por sitios donde alojarse",
                touch2: "conversación",
                feel2: "4",
                con2: "Sus amigos le recomiendan el hostel Carlota Braun pero no pueden ayudarle a hacer la reserva",
                ima2: "cartoon-speaking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Entra en la página de Carlota Braun",
                touch3: "ordenador",
                feel3: "1",
                con3: "Al entrar en la página principal se siente abrumado ya que no se maneja bien con los ordenadores y encuentra más díficil de lo que pensaba ver las habitaciones disponibles",
                ima3: "cartoon-PCtyping.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Observa la oferta de habitaciones que tiene el hostel ",
                touch4: "ordenador",
                feel4: "3",
                con4: "Consigue entrar en el apartado de las habitaciones pero descubre que no hay mucha variedad",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra una opción que le parece adecuada",
                touch5: "ordenador",
                feel5: "2",
                con5: "Al intentar hacer la reserva le sale una habitación distinta a la que había seleccionado",
                ima5: "cartoon-PChard.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Se da por vencido al no conseguir seleccionar la habitación que quería",
                touch6: "ordenador",
                feel6: "1",
                con6: "No consigue reservar la habitación y no sabe si va a tener que cancelar el viaje",
                ima6: "cartoon-PCangry.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
		Id: 1,
		Name: "Yasmine",
                Photo: "Yasmine.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje a Granada",
                touch1: "agenda",
                feel1: "5",
                con1: "Mira en su agenda qué fechas tiene disponibles para ir ",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet información sobre el alojamiento en Granada y las actividades que puede realizar durante la estancia",
                touch2: "móvil",
                feel2: "2",
                con2: "Ve que los precios de los hoteles no se ajustan a su presupuesto y tampoco ofrecen muchos servicios en los que ella está interesada.",
                ima2: "cartoon-phone.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Comienza a buscar alojamiento en hostels.",
                touch3: "móvil",
                feel3: "3",
                con3: "Hay varios hostels que se ajustan a su presupuesto y no sabe bien por cuál decidirse.",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Lee reseñas acerca de los distintos hostels y se decide por Carlota Braun",
                touch4: "móvil",
                feel4: "3",
                con4: "No está convencida de todo del hostel porque le ha costado encontrar la ubicación exacta del hostel en la página",
                ima4: "cartoon-phone.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Comprueba las habitaciones disponibles ",
                touch5: "ordenador",
                feel5: "3",
                con5: "Sólo hay un tipo de habitación para la fecha, pero le parece adecuada",
                ima5: "cartoon-PCtyping.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar la habitación deseada",
                touch6: "Ordenador (reserva OK)",
                feel6: "4",
                con6: "Le habría gustado tener más opciones de habitaciones para elegir",
                ima6: "cartoon-PChappy.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



