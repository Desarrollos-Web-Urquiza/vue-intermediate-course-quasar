import { useQuery } from '@tanstack/vue-query'
import { githubApi } from 'src/api/githubApi'
import { Label } from '../interfaces/labels'

const getLabels = async():Promise<Label[]> => {
    const { data } = await githubApi('labels?per_page=100');
    return data;
}

const useLabels = () => {

    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60,
    });

    return {
        labelsQuery
    }
}

export default useLabels;