import { Injectable } from '@angular/core';

/**
 * ServiceMock  PageLink
 * @author juancallejasduque@gmail.com
 */
@Injectable({
  providedIn: 'root'
})
export class PageLinkServiceMock {
  constructor() { }

  getPageLinks(): Array<{}> {
      return [
          {
            id: 1,
            title: "Titulo 1",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            img: { src:"https://via.placeholder.com/262x168?text=MiS%20RecorteS", alt:"Titulo 1"},
            update: Date(),
            url: "https://getpocket.com"
          },
          {
            id: 2,
            title: "Titulo 2",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            img: { src:"https://via.placeholder.com/262x168?text=MiS%20RecorteS", alt:"Titulo 2"},
            update: Date(),
            url: "https://getpocket.com"
          },
          {
            id: 3,
            title: "Titulo 3",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            img: { src:"https://via.placeholder.com/262x168?text=MiS%20RecorteS", alt:"Titulo 3"},
            update: Date(),
            url: "https://getpocket.com"
          },
          {
            id: 4,
            title: "Titulo 4",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            img: { src:"https://via.placeholder.com/262x168?text=MiS%20RecorteS", alt:"Titulo 4"},
            update: Date(),
            url: "https://getpocket.com"
          },
          {
            id: 5,
            title: "Titulo 5",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            img: { src:"https://via.placeholder.com/262x168?text=MiS%20RecorteS", alt:"Titulo 5"},
            update: Date(),
            url: "https://getpocket.com"
          }
      ];
  }
}