/// <reference types="jellycommands/ambient" />

type Searcher = Awaited<ReturnType<typeof import('./qa/search').createSearch>>;

// See https://jellycommands.dev/guide/props.html
interface Props {
    search: Searcher;
}