export interface IChildren {
  children:React.ReactNode
}

/**
 *
 */

export interface ISectionWrapper extends IChildren {
  padding?:string
}


export interface IBaseLayout extends IChildren {
  padding?: string
  id:string
  mt?:number
}


