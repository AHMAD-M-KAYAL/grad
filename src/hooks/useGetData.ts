import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"

const useData = <T>(endPoint: string) => {
    const { data, error, isLoading } = useQuery<T[], Error>({
        queryKey: [endPoint],
        queryFn: () =>
            apiClient
                .get<T[]>(endPoint)
                .then(res => res.data ?? []) // تأكد دائماً من إرجاع مصفوفة حتى لو فاضية
    });
    return { data, error, isLoading }
}

export default useData
