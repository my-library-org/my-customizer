 let Breakpoints  = {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
    xxl: '1320px',
    fluid: '100%'
}
 
 const changeBreakpoints = (breakpoints = false) => {
    if(breakpoints) Breakpoints = breakpoints 
 }

export { Breakpoints, changeBreakpoints}