export interface RouterLink {
  name: string
  tittle: string
  path: string
}

export const routeLinks: RouterLink[] = [
  {
    name: 'Home',
    tittle: 'Home',
    path: '/'
  },
  {
    name: 'About',
    tittle: 'About',
    path: '/about'
  },
  {
    path: '/characters',
    name: 'characters',
    tittle: 'Personajes',
  }
];
