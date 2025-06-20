import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from 'yup';
import yup from '@/lib/yupExtensions'

export const useMyForm = () => {

    const formSchema = yup.object({
        name: yup.string().min(2, 'Name should be longer than 1 character').required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        bio: yup.string(),
        phone: yup.string().phone('ua', 'Phone must be valid')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    return {
        register,
        handleSubmit,
        errors
    }

} 