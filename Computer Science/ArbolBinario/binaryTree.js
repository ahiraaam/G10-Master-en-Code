// Clase nodo para relacionar nuestro arbol

class Node{
    constructor(data,left,right)
    {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// Clase del arbol

class Tree{
    // root: es el elemento raiz, odin : padre de todo;
    constructor()
    {
        this.root = null;
    }

    add( data )
    {
        // validar por nodo raiz
        if(this.root === null)
        {
            this.root = new Node(data,null,null);
            return;
        }

        // sabemos que root no es null

        let currentNode = this.root;
        //console.log(currentNode);

        while (true) {
            // añadiremos los valores que sean menor a la izquierda

            if(data < currentNode.data)
            {
                //validar que left sea null

                if (currentNode.left !== null)
                {
                    // current Node ya tiene un valor en left
                    currentNode = currentNode.left;
                }else{
                    // añadir a la izquierda
                    currentNode.left = new Node(data,null,null);
                    return currentNode.left;
                }
            }else
            {
                // añadir a la derecha
                
                if ( currentNode.right !== null )
                {
                    // currentNode ya tiene un valor en right
                    currentNode = currentNode.right;
                }else
                {
                    currentNode.right = new Node(data,null,null);
                    return currentNode.right;
                }
            }
        }
    }

    contains( data )
    {
        // asignamos currentNode desde root
        let currentNode = this.root;

        //validar que currentNode no sea null
        while( currentNode !== null )
        {
            // organiza numeros izquierda menores / derecha mayores
            if( data === currentNode.data  )
            {
                return true;
            }else
            {
                if ( data < currentNode.data )
                {
                    console.log("AVANZA POR LA IZQUIERDA");
                    currentNode = currentNode.left;
                }else{
                    console.log("AVANZA POR LA DERECHA");
                    currentNode = currentNode.right;
                }
            }
        }

        return false;
    }
}


let arbol = new Tree();
arbol.add(50);
arbol.add(35);
arbol.add(15);
arbol.add(20);
arbol.add(65);

console.log(arbol);

console.log(arbol.contains(65));
console.log(arbol.contains(20));
console.log(arbol.contains(19));