import { Issue } from '../interfaces/issue'
import { useQuery } from '@tanstack/vue-query'
import { githubApi } from '../../api/githubApi'


const getIssue = async( issueNumber: number ):Promise<Issue> => {

    const { data } = await githubApi.get<Issue>(`/issues/${ issueNumber }`)

    return data;
}


const useIssue = ( issueNumber: number ) => {

    const issueQuery = useQuery ({
        queryKey: ['issue', issueNumber],
        queryFn: () => getIssue(issueNumber),
        staleTime: 1000 * 60,
    })

    return {
        issueQuery
    }
}

export default useIssue;