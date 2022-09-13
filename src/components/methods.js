export let methodsChildComponents= {
    limpiarAspecto(def){
        this.consul.forEach(element => {
            if(element.id==def.id){
                let aspecto=element.aspectos.length;
                element.aspectos.splice(aspecto-1,1);
                 if(element.definicion1==""&&element.definicion2==""&&element.aspectos==false){element.volver=false;} 
            }
        });
        let flashName='La definicion de este campo ha sido removidas correctamente';
        this.$emit('alertaFlashtwo',flashName);   
    } ,
    
    limpiarAspectos(def){
        this.consul.forEach(element => {
            if(element.id==def.id){
               element.aspectos=[];
                if(element.definicion1==""&&element.definicion2==""&&element.aspectos==false){element.volver=false;} 
            }
        });
        let flashName='Las definiciones de este campo han sido removidas correctamente';
        this.$emit('alertaFlashtwo',flashName);   
    }
    ,
    bajar(ref){
        this.$emit('bajar',ref)
    },
    limpiarDef1(def){
        this.consul.forEach(element => {
            if(element.id==def.id){                                
                element.tipo1="";
                element.descripcionTipo1="";
                element.nombre1="";
                element.definicion1="";
                 if(element.definicion1==""&&element.definicion2==""&&element.aspectos==false){element.volver=false;} 

            }
        });
        let flashName='La definicion de este campo ha sido removidas correctamente';
        this.$emit('alertaFlashtwo',flashName);           
    },
    limpiarDef2(def){
        this.consul.forEach(element => {
            if(element.id==def.id){                                
                element.tipo2="";
                element.descripcionTipo2="";
                element.nombre2="";
                element.definicion2="";
                 if(element.definicion1==""&&element.definicion2==""&&element.aspectos==false){element.volver=false;} 

            }
        });
        let flashName='La definicion de este campo ha sido removidas correctamente';
        this.$emit('alertaFlashtwo',flashName);   
    },
    agregarTipo1(){
        /*this.consul.forEach(element => {
            if(element.id==def.id){ 
                element.tipo1=def.nombre;
                element.descripcionTipo1=def.definicion;
                element.volver=true;  
              }
        }); */
        let flashName='la definición se ha cargado al final del formulario ';
        this.$emit('alertaFlash',flashName);   
    },
    agregarTipo2(){
        /*this.consul.forEach(element => {
            if(element.id==def.id){ 
                element.tipo2=def.nombre;
                element.descripcionTipo2=def.definicion;
                element.volver=true;  
              }
        });*/
        let flashName='la definición se ha cargado al final del formulario ';
        this.$emit('alertaFlash',flashName);      
    }
    ,
    agregarDefinicion1(def){
      this.consul.forEach(element => {
          if(element.id==def.id){ 
              element.nombre1=def.nombre;
              element.definicion1=def.definicion;
              element.volver=true;  
            }
      });
        
    },
    agregarDefinicion2(def){
        this.consul.forEach(element => {
            if(element.id==def.id){ 
                element.nombre2=def.nombre;
                element.definicion2=def.definicion;
                element.volver=true;  
              }
        });
    
    },
    agregarDefinicion3(def){
        
        this.consul.forEach(element => {
            if(element.id==def.id){ 
                element.aspectos=def.aspectos;
                element.volver=true;  
              }
        });
        let flashName='la definición se ha cargado al final del formulario ';
        this.$emit('alertaFlash',flashName);   
    
    }
}