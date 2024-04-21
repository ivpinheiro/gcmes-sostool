import { Roles } from "../model-role/model-role.model"
import {Activity, Teams, Workspace} from "../workspace/workspace.model"

export interface User {
  id: number,
  name: string,
  email: string,
  workspaceMember: WorkspaceMember[]
}

export interface WorkspaceMember{
  id: number,
  workspace: Workspace[]
  businessRole: Roles[]

}

export interface ProjectUser{
  id:number,
  name:string,
  description:string,
  teams: Teams[],
  businesRoles:Roles[],
  businesResponsibilities: Roles[],
  members:User[],
  activities: Activity[];

}
export interface RoleHistoryItem{

  role: Roles,
  dateStart: Date,
  dateEnd: Date;

}
