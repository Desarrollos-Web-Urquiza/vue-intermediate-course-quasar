import { useQuery } from '@tanstack/vue-query'
import { useIssuesStore } from 'src/stores/issues'
import { githubApi } from 'src/api/githubApi'
import { Label } from '../interfaces/labels'
import { storeToRefs } from 'pinia'

const getLabels = async():Promise<Label[]> => {
    const { data } = await githubApi('labels?per_page=100');
    return data;
}

const useLabels = () => {

    const issuesStore = useIssuesStore();
    const { labels } = storeToRefs(issuesStore);

    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60,
    });

    return {
        labelsQuery,

        //Getters
        selectedLabels: labels,

        //Methods
        toggleLabel: issuesStore.toggleLabel
    }
}

export default useLabels;