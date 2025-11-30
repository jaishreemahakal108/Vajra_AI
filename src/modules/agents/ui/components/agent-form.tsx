// import { useTRPC } from "@/trpc/client";
// import { AgentGetOne } from "../../types";
// import { useRouter } from "next/navigation";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useForm } from "react-hook-form";
// import z from "zod";
// import { agentsInsertSchema } from "../../schemas";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Textarea } from "@/components/ui/textarea";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// import { GeneratedAvatar } from "@/components/generated-avatar";

// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form";
// import { toast } from "sonner";

// interface AgentFormProps {
//     onSuccess?: () => void;
//     onCancle?: () => void;
//     initialValues?: AgentGetOne;
// };

// export const AgentForm = ({
//     onSuccess,
//     onCancle,
//     initialValues,
// } : AgentFormProps) => {
//     const trpc = useTRPC();
//     const router = useRouter();
//     const queryClient = useQueryClient();

//     const createAgent = useMutation(
//         trpc.agents.create.mutationOptions({
//             onSuccess: async () => {
//                 await queryClient.invalidateQueries(
//                     trpc.agents.getMany.queryOptions(),
//                 );

//                 if(initialValues?.id){
//                     await queryClient.invalidateQueries(
//                         trpc.agents.getOne.queryOptions({id: initialValues.id}),
//                     );
//                 }
//                 onSuccess?.();
//             },

//             onError: (error) => {
//                 toast.error(error.message);

                
//             },
//         }),
//     );

//     const form = useForm<z.infer<typeof agentsInsertSchema>> ({
//         resolver: zodResolver(agentsInsertSchema),
//         defaultValues: {
//             name: initialValues?.name ?? "",
//             instructions: initialValues?.instructions ?? "",
//         }
//     });

//     const isEdit = !!initialValues?.id;
//     const isPending = createAgent.isPending;

//     const onSubmit = (values: z.infer<typeof agentsInsertSchema>) => {
//         if(isEdit) {
//             console.log("TODO: updateAgent")
//         }
//         else {
//             createAgent.mutate(values);
//         }
//     };

//     return (
//         <Form {...form}>
//             <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
//                 <GeneratedAvatar 
//                     seed={form.watch("name")}
//                     variant="botttsNeutral"
//                     className="border size-16"
//                 />
//                 <FormField 
//                     name="name"
//                     control={form.control}
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Name</FormLabel>
//                             <FormControl>
//                                 <Input {...field} placeholder="e.g. Rajaswa"/>
//                             </FormControl>
//                             <FormMessage/>
//                         </FormItem>
//                     )}
//                 />

//                 <FormField 
//                     name="instructions"
//                     control={form.control}
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Instructions</FormLabel>
//                             <FormControl>
//                                 <Textarea {...field} placeholder="You are a helpful fullstack assistant that can answer questions and help with a code snippet."/>
//                             </FormControl>
//                             <FormMessage/>
//                         </FormItem>
//                     )}
//                 />
//                 <div className="flex justify-between gap-x-2">
//                     {onCancle && (
//                         <Button
//                             variant="ghost"
//                             disabled={isPending}
//                             type="button"
//                             onClick={() => onCancle()}
//                         >
//                             Cancle
//                         </Button>
//                     )}

//                     <Button disabled={isPending} type="submit">
//                         {isEdit ? "Update" : "Create"}
//                     </Button>
//                 </div>
//             </form>
//         </Form>
//     )
// }  
import { useTRPC } from "@/trpc/client";
import { AgentGetOne } from "../../types";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import z from "zod";
import { agentsInsertSchema } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { GeneratedAvatar } from "@/components/generated-avatar";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

interface AgentFormProps {
    onSuccess?: () => void;
    onCancle?: () => void;
    initialValues?: AgentGetOne;
};

export const AgentForm = ({
    onSuccess,
    onCancle,
    initialValues,
} : AgentFormProps) => {
    const trpc = useTRPC();
    const router = useRouter();
    const queryClient = useQueryClient();

    const createAgent = useMutation(
        trpc.agents.create.mutationOptions({
            onSuccess: async () => {
                await queryClient.invalidateQueries(
                    trpc.agents.getMany.queryOptions(),
                );

                if(initialValues?.id){
                    await queryClient.invalidateQueries(
                        trpc.agents.getOne.queryOptions({id: initialValues.id}),
                    );
                }
                onSuccess?.();
            },

            onError: (error) => {
                toast.error(error.message);
            },
        }),
    );

    const form = useForm<z.infer<typeof agentsInsertSchema>> ({
        resolver: zodResolver(agentsInsertSchema),
        defaultValues: {
            name: initialValues?.name ?? "",
            instructions: initialValues?.instructions ?? "",
        }
    });

    const isEdit = !!initialValues?.id;
    const isPending = createAgent.isPending;

    const onSubmit = (values: z.infer<typeof agentsInsertSchema>) => {
        if(isEdit) {
            console.log("TODO: updateAgent")
        }
        else {
            createAgent.mutate(values);
        }
    };

    return (
        <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex justify-center">
                    <GeneratedAvatar 
                        seed={form.watch("name")}
                        variant="botttsNeutral"
                        className="border-2 border-amber-200/50 size-20 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:scale-110 transition-all duration-300"
                    />
                </div>
                
                <div className="group">
                    <FormField 
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-medium">Name</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input 
                                            {...field} 
                                            placeholder="e.g. Rajaswa"
                                            className="bg-white/50 backdrop-blur-sm border-amber-200/50 focus:ring-2 focus:ring-amber-400/50 focus:border-transparent hover:border-amber-300/70 hover:shadow-md transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>

                <div className="group">
                    <FormField 
                        name="instructions"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-medium">Instructions</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Textarea 
                                            {...field} 
                                            placeholder="You are a helpful fullstack assistant that can answer questions and help with a code snippet."
                                            className="bg-white/50 backdrop-blur-sm border-amber-200/50 focus:ring-2 focus:ring-amber-400/50 focus:border-transparent hover:border-amber-300/70 hover:shadow-md transition-all duration-300 min-h-[100px]"
                                        />
                                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex justify-between gap-x-3 pt-2">
                    {onCancle && (
                        <Button
                            variant="ghost"
                            disabled={isPending}
                            type="button"
                            onClick={() => onCancle()}
                            className="flex-1 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300"
                        >
                            Cancle
                        </Button>
                    )}

                    <Button 
                        disabled={isPending} 
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0"
                    >
                        {isEdit ? "Update" : "Create"}
                    </Button>
                </div>
            </form>
        </Form>
    )
}