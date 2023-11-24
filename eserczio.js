let lista = ["patate","zucche","melenzane","pomodori","battaglioni"];

function lista_start() {
    
    while (true) {
        let comando = prompt("Inserisci il comando: " + "\nComandi disponibili: \n1 = Aggiungi un elemento alla lista. "  + "\n2 = Elimina un elemento dalla lista.\n3 = Ordina la lista in ordina alfabetico.\n4 = Modifica un elemento della lista.\n5 = Elimina l'intera lista.\n6 = Visualizza la lista.")
        
        if (comando == "1") {
            
            
            lista_aggiungi()
            
            
        } else if (comando == "2") {
            
           
            lista_remove_element()
            
            
        } else if (comando == "3") {
            
           
            lista_order()
            
            
        } else if (comando == "4") {
            
            
            lista_edit()
            
            
        } else if (comando == "5") {
            
            
            lista_destroy()
            
            
        } else if (comando == "6") {
            
            
            lista_show()
            
            
        } else {
            
            
            alert("il Comando non esiste.")
            
            
        }
        
        
        
    }
    
}


function lista_add() {
    
    let elemento = prompt("Scrivi l'elemento che vuoi aggiungere:")
    
    lista.push(elemento)
    
    alert("L'elemento è stato aggiunto con successo.\n" + "Ecco la lista aggiornata:\n" + lista)
    
}

function lista_remove_element() {
    
    let elemento = prompt("Quale elemento della lista vuoi rimuovere?\n" + lista + "\n(Se si desidera annullare l'operazione digitare ANNULLA)")
    
    if (elemento != "ANNULLA") {
        
        for (i = 0; i < lista.length; i++) {
            
            if (lista[i] == elemento) {
                
                

                lista.splice([i],1)
                alert("L'elemento è stato rimosso con successo.\nEcco la lista aggiornata:" + lista)
                return 
                
                
            } 
            
        }
      
        alert("L'elemento non è stato trovato.")        
         

    } else {
        
        alert("Operazione annullata.")
        
        
    }
}

function lista_order() {
    
    lista.sort(function (a,b) {
        
        if (a < b) {
            
            return -1
            
        } else if (a > b) {
            
            return 1
        }
        else {
            
            return 0
        }
        
        
    })
    
    alert("Ecco la lista ordinata in ordine alfabetico:\n" + lista)
    
    
}

function lista_edit() {
    
    let elemento = prompt("Quale elemento della lista vuoi modificare?\n" + lista + "\n(Se si desidera annullare l'operazione digitare ANNULLA)")
    
    
    
    if (elemento != "ANNULLA") {
        
        let nuovo_elemento = prompt("Digitare il nuovo elemento: ")
        
        for (i = 0; i < lista.length; i++) {
            
            if (lista[i] == elemento) {
                
                lista.splice([i],1, nuovo_elemento)
                alert("L'elemento è stato sostituito con successo.\nEcco la lista aggiornata:" + lista)
                return 
                
                
            }
            
        }

        alert("L'elemento non è stato trovato.")

        
    } else {
        
        alert("Operazione annullata.")
        
        
    }
    
    
}

function lista_destroy() {
    
    let conferma = prompt("Conferma di voler eliminare questa lista?\n" + lista +"\nDigiti Y per sì o N per no. L'operazione è permanente.")

    conferma = conferma.toLowerCase()

    if (conferma == "s") {

        lista.splice(0,lista.length)
        alert("La lista è stata eliminata con successo.")
        return

    } else if (conferma == "n") {

        alert("Operazione annullata.")
        return


    } else {

        alert("il comando non esiste.")
        return

    }
    
    
}

function lista_show() {
    
    alert("Ecco la lista:\n" + lista)
    return
    
    
}

lista_start()