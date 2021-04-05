const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  const books2 = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  const liste = [];

  function Liste() {
    count = 0;
    console.log("Voici la liste des titres des livres du CDI !")
    while (count < books.length){
    liste.push({title: books[count].title});
    console.log(liste[count]);
    count += 1;
    }
      }

      function Emprunt_verrif() {
        count = 0;
        test = 0;
        console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?")
        while (count < books.length){
            if (books[count].rented < 1){
            test +=1
            }
        count += 1;
        }
        if (test == 0){
            console.log("Tous les livres ont été empruntés au moins une fois")
            }
        if (test > 0){
            console.log("Des livres n'ont jamais été  empruntés")
                }
        }

        function Must() {
            count = 0;
            max = 0;
            indice_max = 0;
            console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?")
            while (count < books.length){
                if (books[count].rented > max){
                    max = (books[count].rented)
                    indice_max = count;
                }
            count += 1;
            }
            console.log("Le livre le plus emprunté est :")
            console.log(books[indice_max]);
        }

        function Less() {
            count = 0;
            count2 = 0;
            max = 0;
            indice_max = 0;
            min = (books[indice_max].rented);
            indice_min = 0;
            while (count < books.length){
                if (books[count].rented > max){
                    max = (books[count].rented)
                    indice_max = count;
                }
            count += 1;
            }
            while (count2 < books.length){
                if (books[count2].rented < min){
                    min = (books[count2].rented)
                    indice_min = count2;
                }
            count2 += 1;
            }
            console.log("Le livre le moins emprunté est :")
            console.log(books[indice_min]);

        }

        function Delete() {
            count = 0;
            indice = 0;
            console.log("Voici la liste avant la suppression de l'ID 133712 :")
            while (count < books2.length){
                console.log(books2[count]);
                if (books2[count].id == 133712){
                    indice = count;
                }
            count += 1;
            }
     
            books2.splice(indice,1);
            console.log("Le livre ave l'id 133712 est bien supprimé");
            console.log("Voici la liste après la suppression de l'ID 133712 :")
            count = 0;
           while (count < books2.length){
            console.log(books2[count]);
            count += 1;
        }
    }