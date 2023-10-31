'use client';

export default function Home() {
  return (
    <article>
      <h1>Welcome!!</h1>
    </article>
  );
}

// export default function Home() {
//   const [view, setView] = useState('profiles');
//   const [dashboardType, setDashboardType] = useState('dashboard');
//   let {
//     data: profiles,
//     error: profileError,
//     loading: loadingProfiles,
//   } = useExploreProfiles({
//     limit: 50,
//   }) as any;

//   let {
//     data: musicPubs,
//     error: musicPubError,
//     loading: loadingMusicPubs,
//   } = useExplorePublications({
//     limit: 25,
//     sortCriteria: PublicationSortCriteria.CuratedProfiles,
//     publicationTypes: [PublicationTypes.Post],
//     metadataFilter: {
//       restrictPublicationMainFocusTo: [PublicationMainFocus.Audio],
//     },
//   }) as any;

//   let {
//     data: publications,
//     error: pubError,
//     loading: loadingPubs,
//   } = useExplorePublications({
//     limit: 25,
//     sortCriteria: PublicationSortCriteria.CuratedProfiles,
//     publicationTypes: [PublicationTypes.Post],
//     metadataFilter: {
//       restrictPublicationMainFocusTo: [PublicationMainFocus.Image],
//     },
//   }) as any;

//   profiles = profiles?.filter((p) => p.picture?.original?.url);

//   publications = publications?.filter((p) => {
//     if (p.metadata && p.metadata.media[0]) {
//       if (p.metadata.media[0].original.mimeType.includes('image')) return true;
//       return false;
//     }
//     return true;
//   });

//   return (
//     <main
//       className="
//       px-6 py-14
//       sm:px-10
//     "
//     >
//       <div>
//         <a target="_blank" rel="no-opener" href="https://lens.xyz">
//           <div className="mb-2 flex max-w-[288px] cursor-pointer items-center rounded-lg bg-secondary px-3 py-1 text-foreground">
//             <p className="mr-2">📚</p>
//             <p className="text-sm">Learn more about Lens Protocol.</p>
//             <ArrowRight className="ml-2" size={14} />
//           </div>
//         </a>
//         <h1 className="mt-3 text-5xl font-bold">Social Explorer</h1>
//         <p className="mt-4 max-w-[750px] text-lg text-muted-foreground sm:text-xl">
//           An application boilerplate built with a modern stack. Simple to get
//           started building your first social app. Leveraging ShadCN, Lens
//           Protocol, Next.js, and WalletConnect.
//         </p>
//         <div className="mt-6 flex">
//           <Button variant="secondary" className="mr-3">
//             <Share className="mr-1 h-4 w-4" />
//             Share
//           </Button>
//           <a
//             target="_blank"
//             rel="no-opener"
//             href="https://aave.notion.site/08521d6d8ec84d10bf0f6d03abcf60cc?v=eb989b589d7447918187bf3c588a2748&pvs=4"
//             className={buttonVariants({ variant: 'outline' })}
//           >
//             <Globe className="mr-1 h-4 w-4" />
//             Explore Lens Apps
//           </a>
//         </div>
//       </div>

//       <div className="ml-2 mt-[70px] flex">
//         <div>
//           <Button
//             variant="ghost"
//             onClick={() => setDashboardType('dashboard')}
//             className={`${dashboardType !== 'dashboard' ? 'opacity-60' : ''}`}
//           >
//             My dashboard
//           </Button>
//         </div>
//         <div className="ml-4">
//           <Button
//             variant="ghost"
//             onClick={() => setDashboardType('algorithms')}
//             className={`${
//               dashboardType !== 'recommendation algorithms' ? 'opacity-50' : ''
//             }`}
//           >
//             Choose your algorithm
//           </Button>
//         </div>
//       </div>

//       {dashboardType === 'algorithms' && (
//         <div className="mt-3 min-h-[300px] px-6 md:flex">
//           <p>Choose your algorithm coming soon...</p>
//         </div>
//       )}
//       {dashboardType === 'dashboard' && (
//         <div className="mt-3 min-h-[300px] md:flex">
//           <div className="flex flex-col rounded-bl rounded-tl border border px-2 pb-8 pt-3 md:w-[230px]">
//             <p className="mb-2 ml-4 mt-1 font-medium">Social Views</p>
//             <Button
//               onClick={() => setView('profiles')}
//               variant={view === 'profiles' ? 'secondary' : 'ghost'}
//               className="mb-1 justify-start"
//             >
//               <PersonStanding size={16} />
//               <p className="ml-2 text-sm">Profiles</p>
//             </Button>
//             <Button
//               onClick={() => setView('publications')}
//               variant={view === 'publications' ? 'secondary' : 'ghost'}
//               className="mb-1 justify-start"
//             >
//               <Newspaper size={16} />
//               <p className="ml-2 text-sm">Publications</p>
//             </Button>
//             <Button
//               onClick={() => setView('music')}
//               variant={view === 'music' ? 'secondary' : 'ghost'}
//               className="mb-1 justify-start"
//             >
//               <ListMusic size={16} />
//               <p className="ml-2 text-sm">Music</p>
//             </Button>
//             <Button
//               onClick={() => setView('collect')}
//               variant={view === 'collect' ? 'secondary' : 'ghost'}
//               className="mb-1 justify-start"
//             >
//               <Shapes size={16} />
//               <p className="ml-2 text-sm">Collect</p>
//             </Button>
//           </div>
//           <div
//             className="
//           flex flex-1 rounded-br
//           rounded-tr pb-4 sm:border-b sm:border-r sm:border-t"
//           >
//             {view === 'profiles' && (
//               <div className="flex flex-1 flex-wrap p-4">
//                 {loadingProfiles && (
//                   <div
//                     className="
//                       flex flex-1 items-center justify-center
//                     "
//                   >
//                     <Loader2 className="h-12 w-12 animate-spin" />
//                   </div>
//                 )}
//                 {profiles?.map((profile) => (
//                   <a
//                     key={profile.id}
//                     className="
//                       cursor-pointer p-4 sm:w-1/2 lg:w-1/4"
//                     rel="no-opener"
//                     target="_blank"
//                     href={`https://share.lens.xyz/u/${profile.handle}`}
//                   >
//                     <div className="space-y-3">
//                       <div className="overflow-hidden rounded-md">
//                         <img
//                           alt="Thinking Components"
//                           loading="lazy"
//                           decoding="async"
//                           data-nimg="1"
//                           className="aspect-square h-auto w-auto object-cover transition-all hover:scale-105"
//                           src={profile.picture?.original?.url}
//                         />
//                       </div>
//                       <div className="space-y-1 text-sm">
//                         <h3 className="font-medium leading-none">
//                           {profile.handle}
//                         </h3>
//                         <p className="text-xs text-muted-foreground">
//                           {profile.name}
//                         </p>
//                       </div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             )}
//             {view === 'publications' && (
//               <div className="flex flex-1 flex-col flex-wrap">
//                 {loadingPubs && (
//                   <div
//                     className="
//                       flex flex-1 items-center justify-center
//                     "
//                   >
//                     <Loader2 className="h-12 w-12 animate-spin" />
//                   </div>
//                 )}
//                 {publications?.map((publication) => (
//                   <a
//                     target="_blank"
//                     rel-no-opener
//                     className="border-b"
//                     key={publication.id}
//                     href={`https://share.lens.xyz/p/${publication.id}`}
//                   >
//                     <div
//                       className="
//                       mb-4 space-y-3 px-2 pb-2
//                       pt-6 sm:px-6
//                       "
//                     >
//                       <div className="flex">
//                         <Avatar>
//                           <AvatarImage
//                             src={publication.profile?.picture?.original?.url}
//                           />
//                           <AvatarFallback>
//                             {publication.profile.handle.slice(0, 2)}
//                           </AvatarFallback>
//                         </Avatar>
//                         <div className="ml-4">
//                           <h3 className="mb-1 font-medium leading-none">
//                             {publication.profile.handle}
//                           </h3>
//                           <p className="text-xs text-muted-foreground">
//                             {publication.profile.name}
//                           </p>
//                         </div>
//                       </div>
//                       <div>
//                         <img
//                           className={cn(`
//                             h-auto max-w-full
//                             rounded-2xl object-cover transition-all hover:scale-105 sm:max-w-[500px]
//                             `)}
//                           src={
//                             publication.__typename === 'Post'
//                               ? publication.metadata?.media[0]?.original.url
//                               : ''
//                           }
//                         />
//                         <ReactMarkdown
//                           className="
//                           mt-4 break-words
//                           "
//                         >
//                           {publication.metadata.content.replace(
//                             /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
//                             '[LINK]($1)',
//                           )}
//                         </ReactMarkdown>
//                       </div>
//                       <div>
//                         <Button
//                           className="mr-1 rounded-full"
//                           variant="secondary"
//                         >
//                           <MessageSquare className="mr-2 h-4 w-4" />
//                           {publication.stats.totalAmountOfComments}
//                         </Button>
//                         <Button
//                           className="mr-1 rounded-full"
//                           variant="secondary"
//                         >
//                           <Repeat2 className="mr-2 h-4 w-4" />
//                           {publication.stats.totalAmountOfMirrors}
//                         </Button>
//                         <Button
//                           className="mr-1 rounded-full"
//                           variant="secondary"
//                         >
//                           <Heart className="mr-2 h-4 w-4" />
//                           {publication.stats.totalUpvotes}
//                         </Button>
//                         <Button
//                           className="mr-1 rounded-full"
//                           variant="secondary"
//                         >
//                           <Grab className="mr-2 h-4 w-4" />
//                           {publication.stats.totalAmountOfCollects}
//                         </Button>
//                       </div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             )}
//             {view === 'music' && (
//               <div className="flex flex-1 flex-col flex-wrap">
//                 {loadingMusicPubs && (
//                   <div
//                     className="
//                       flex flex-1 items-center justify-center
//                     "
//                   >
//                     <Loader2 className="h-12 w-12 animate-spin" />
//                   </div>
//                 )}
//                 {musicPubs?.map((publication) => (
//                   <a
//                     target="_blank"
//                     rel-no-opener
//                     className="border-b "
//                     key={publication.id}
//                     href={`https://share.lens.xyz/p/${publication.id}`}
//                   >
//                     <div className="mb-4 space-y-3 p-4">
//                       <div className="flex">
//                         <Avatar>
//                           <AvatarImage
//                             src={publication.profile?.picture?.original?.url}
//                           />
//                           <AvatarFallback>
//                             {publication.profile.handle.slice(0, 2)}
//                           </AvatarFallback>
//                         </Avatar>
//                         <div className="ml-4">
//                           <h3 className="mb-1 font-medium leading-none">
//                             {publication.profile.handle}
//                           </h3>
//                           <p className="text-xs text-muted-foreground">
//                             {publication.profile.name}
//                           </p>
//                         </div>
//                       </div>
//                       <div>
//                         <img
//                           className={cn(`
//                              h-auto max-w-full
//                              rounded-2xl object-cover transition-all hover:scale-105 sm:max-w-[500px]
//                              `)}
//                           src={
//                             publication.__typename === 'Post'
//                               ? publication.metadata?.media[0]?.original.cover?.replace(
//                                   'ipfs://',
//                                   'https://cloudflare-ipfs.com/ipfs/',
//                                 )
//                               : ''
//                           }
//                         />
//                         <audio controls>
//                           <source
//                             type={
//                               publication.metadata?.media[0]?.original?.mimeType
//                             }
//                             src={publication.metadata?.media[0]?.original?.url}
//                           />
//                         </audio>
//                         <ReactMarkdown
//                           className="
//                           mt-4 break-words
//                           "
//                         >
//                           {publication.metadata.content.replace(
//                             /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
//                             '[LINK]($1)',
//                           )}
//                         </ReactMarkdown>
//                       </div>
//                       <div>
//                         <Button
//                           className="mr-1 rounded-full"
//                           variant="secondary"
//                         >
//                           <MessageSquare className="mr-2 h-4 w-4" />
//                           {publication.stats.totalAmountOfComments}
//                         </Button>
//                         <Button
//                           className="mr-1 rounded-full"
//                           variant="secondary"
//                         >
//                           <Repeat2 className="mr-2 h-4 w-4" />
//                           {publication.stats.totalAmountOfMirrors}
//                         </Button>
//                         <Button
//                           className="mr-1 rounded-full"
//                           variant="secondary"
//                         >
//                           <Heart className="mr-2 h-4 w-4" />
//                           {publication.stats.totalUpvotes}
//                         </Button>
//                         <Button
//                           className="mr-1 rounded-full"
//                           variant="secondary"
//                         >
//                           <Grab className="mr-2 h-4 w-4" />
//                           {publication.stats.totalAmountOfCollects}
//                         </Button>
//                       </div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }
