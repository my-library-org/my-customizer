import Dictionary from "./Dictionary"
import {Breakpoints} from './Breakpoints'

const customizer = (style) => {

    const dictionary = Dictionary;
    const breakPoints = Breakpoints
    let output = '';
    
    //functions 
    const isBreak = (property, object) => {
        if(property === 'break'){  
            for(const point in object[property]){
                output += breakPoints[point] + '{' //@media (min-width: Npx){
 
                for (const subProp in object[property][point]) {//add properties
                    output +=  dictionary[subProp] + object[property][point][subProp] + ";"
                }  

                output += '}'
            }
            return true
        }else return false           
    }

    const addProperties = (property, object) => {
        //if the property contain others properties Ejem: h3:{c: 'red'}
        if(typeof object[property] === 'object'){
            if(isBreak(property, object)) return true
            else if(property === 'global'){
               let global = ''
               for(const subProp in object[property]) {
                   global += dictionary[subProp] + object[property][subProp] + ";"
                }
                output += global + 
                ':hover { ' + global + '}'+
                ':active { ' + global + '}'+
                ':focus { ' + global + '}'
 
            }
            else{
                output += property + '{'
                for(const subProp in object[property]) addProperties(subProp, object[property])
                output += '}'
            }
        }
        else output += dictionary[property] + object[property] + ";"
    }
    //end Functions
    
    for(const property in style ) addProperties(property, style)  
         
    return output
}
export default customizer