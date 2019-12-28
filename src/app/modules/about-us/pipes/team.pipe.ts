import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Pipe({
  name: 'team'
})
export class TeamPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let users: UserModel[] = value;
    let id: string = args[0];
    let result = "";
    if (users) {
      users = users.sort((a, b) => {
        if (a.isLeaderOf(id) && !b.isLeaderOf(id))
          return -1;
        if (!a.isLeaderOf(id) && b.isLeaderOf(id))
          return 1;
        return a.name.localeCompare(b.name);
      });
      for(let [i,user] of users.entries()){
        if(user.wca_id){
          result+=" <a href='https://www.worldcubeassociation.org/persons/"+user.wca_id+"'>";
        }
        result+=user.name;
        if(user.wca_id){
          result+="</a>";
        }
        if(user.isLeaderOf(id)){
          result+=" (Leader)";
        }
        if(i+1 < users.length){
          result+=",";
        }

      }
    }
    return result;
  }

}
