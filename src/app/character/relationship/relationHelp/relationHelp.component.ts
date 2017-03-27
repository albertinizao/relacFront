import { HelpBox } from './helpBox'
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-relation-help',
  templateUrl: './relationHelp.component.html',
  styleUrls: ['./relationHelp.component.css', '../../../generic/relationColors.css']
})
export class RelationHelpComponent {
  public messages:string[][] = [
    ["working","It represents how do you like to work with this person. You don't need to be friend to work well together."],
    ["confidential","It represents how do you like to say your confidences to this person. How much vulnerable do you show with it without problem."],
    ["loyalty","It represents how do you accept the danger for this person. For wich you return to search for."],
    ["trust","It represents how do you think the person how may do a thing for you if you only question it."],
    ["respect","It represents how do you think about the advices of the other person. If you think he know the things he does."],
    ["funny","It represents how do you think about the free time with this person. If you laugth talking with him or playing any game."],
    ["affection","It represents how do you think about the other person in love sense, like if is your son of your partner."]
  ];
}
