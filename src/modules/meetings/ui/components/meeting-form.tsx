// import { useTRPC } from "@/trpc/client";
// import { MeetingGetOne } from "../../types";
// import { useRouter } from "next/navigation";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useForm } from "react-hook-form";
// import z from "zod";
// import { meetingsInsertSchema } from "../../schemas";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { CommandSelect } from "@/components/command-select";
// import { GeneratedAvatar } from "@/components/generated-avatar";
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form";
// import { toast } from "sonner";
// import { useState } from "react";
// import { NewAgentDialog } from "@/modules/agents/ui/components/new-agent-dialog";

// interface MeetingFormProps {
//     onSuccess?: (id?: string) => void;
//     onCancle?: () => void;
//     initialValues?: MeetingGetOne;
// };

// export const MeetingForm = ({
//     onSuccess,
//     onCancle,
//     initialValues,
// } : MeetingFormProps) => {
//     const trpc = useTRPC();
//     const router = useRouter();
//     const queryClient = useQueryClient();

//     const [openNewAgnetDialog, setOpenNewAgnetDialog] = useState(false);
//     const [agentSearch, setAgentSearch] = useState("");

//     const agents = useQuery(
//         trpc.agents.getMany.queryOptions({
//             pageSize: 100,
//             search: agentSearch, 
//         }),
//     );

//     const createMeeting = useMutation(
//         trpc.meetings.create.mutationOptions({
//             onSuccess: async (data) => {
//                 await queryClient.invalidateQueries(
//                     trpc.meetings.getMany.queryOptions({}),
//                 );

//                 if(initialValues?.id){
//                     await queryClient.invalidateQueries(
//                         trpc.agents.getOne.queryOptions({id: initialValues.id}),
//                     );
//                 }
//                 onSuccess?.(data.id);
//             },

//             onError: (error) => {
//                 toast.error(error.message);
//             },
//         }),
//     );

//     const updateMeeting = useMutation(
//         trpc.meetings.update.mutationOptions({
//             onSuccess: async () => {
//                 await queryClient.invalidateQueries(
//                     trpc.meetings.getMany.queryOptions({}),
//                 );

//                 onSuccess?.();
//             },

//             onError: (error) => {
//                 toast.error(error.message);
//             },
//         }),
//     );

//     const form = useForm<z.infer<typeof meetingsInsertSchema>> ({
//         resolver: zodResolver(meetingsInsertSchema),
//         defaultValues: {
//             name: initialValues?.name ?? "",
//             agentId: initialValues?.agentId ?? "",
//         }
//     });

//     const isEdit = !!initialValues?.id;
//     const isPending = createMeeting.isPending || updateMeeting.isPending;

//     const onSubmit = (values: z.infer<typeof meetingsInsertSchema>) => {
//         if(isEdit) {
//             updateMeeting.mutate({ ...values, id: initialValues.id });
//         }
//         else {
//             createMeeting.mutate(values);
//         }
//     };

//     return (
//         <>
//             <NewAgentDialog open={openNewAgnetDialog} onOpenChange={setOpenNewAgnetDialog}/>
//             <Form {...form}>
//                 <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
//                     <div className="group">
//                         <FormField 
//                             name="name"
//                             control={form.control}
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel className="text-gray-700 font-medium">Name</FormLabel>
//                                     <FormControl>
//                                         <div className="relative">
//                                             <Input 
//                                                 {...field} 
//                                                 placeholder="e.g. Consultations"
//                                                 className="bg-white/50 backdrop-blur-sm border-amber-200/50 focus:ring-2 focus:ring-amber-400/50 focus:border-transparent hover:border-amber-300/70 hover:shadow-md transition-all duration-300"
//                                             />
//                                             <div className="absolute inset-0 rounded-md bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
//                                         </div>
//                                     </FormControl>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//                         <FormField 
//                             name="agentId"
//                             control={form.control}
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel className="text-gray-700 font-medium">Agent</FormLabel>
//                                     <FormControl>
//                                         <div className="relative">
//                                             <CommandSelect 
//                                                 options={(agents.data?.items ?? []).map((agent) => ({
//                                                     id: agent.id,
//                                                     value: agent.id,
//                                                     children: (
//                                                         <div className="flex items-center gap-x-2">
//                                                             <GeneratedAvatar 
//                                                                 seed={agent.name}
//                                                                 variant="botttsNeutral"
//                                                                 className="border size-6"
//                                                             />
//                                                             <span>{agent.name}</span>
//                                                         </div>
//                                                     )
//                                                 }))}
//                                                 onSelect={field.onChange}
//                                                 onSearch={setAgentSearch}
//                                                 value={field.value}
//                                                 placeholder="Select an agent"
//                                             />
//                                         </div>
//                                     </FormControl>
//                                     <FormDescription>
//                                         Not found what you are looking for?{" "}
//                                         <button
//                                             type="button"
//                                             className="hover:underline"
//                                             onClick={() => setOpenNewAgnetDialog(true)}
//                                         >
//                                             Create new agent
//                                         </button>
//                                     </FormDescription>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//                     </div>

//                     <div className="flex justify-between gap-x-3 pt-2">
//                         {onCancle && (
//                             <Button
//                                 variant="ghost"
//                                 disabled={isPending}
//                                 type="button"
//                                 onClick={() => onCancle()}
//                                 className="flex-1 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300"
//                             >
//                                 Cancle
//                             </Button>
//                         )}

//                         <Button 
//                             disabled={isPending} 
//                             type="submit"
//                             className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0"
//                         >
//                             {isEdit ? "Update" : "Create"}
//                         </Button>
//                     </div>
//                 </form>
//             </Form>
//         </>
//     )
// }
import { useTRPC } from "@/trpc/client";
import { MeetingGetOne } from "../../types";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import z from "zod";
import { meetingsInsertSchema } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CommandSelect } from "@/components/command-select";
import { GeneratedAvatar } from "@/components/generated-avatar";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useState } from "react";
import { NewAgentDialog } from "@/modules/agents/ui/components/new-agent-dialog";

interface MeetingFormProps {
    onSuccess?: (id?: string) => void;
    onCancle?: () => void;
    initialValues?: MeetingGetOne;
};

export const MeetingForm = ({
    onSuccess,
    onCancle,
    initialValues,
} : MeetingFormProps) => {
    const trpc = useTRPC();
    const router = useRouter();
    const queryClient = useQueryClient();

    const [openNewAgnetDialog, setOpenNewAgnetDialog] = useState(false);
    const [agentSearch, setAgentSearch] = useState("");

    const agents = useQuery(
        trpc.agents.getMany.queryOptions({
            pageSize: 100,
            search: agentSearch, 
        }),
    );

    const createMeeting = useMutation(
        trpc.meetings.create.mutationOptions({
            onSuccess: async (data) => {
                await queryClient.invalidateQueries(
                    trpc.meetings.getMany.queryOptions({}),
                );

                if(initialValues?.id){
                    await queryClient.invalidateQueries(
                        trpc.agents.getOne.queryOptions({id: initialValues.id}),
                    );
                }
                onSuccess?.(data.id);
            },

            onError: (error) => {
                toast.error(error.message);
            },
        }),
    );

    const updateMeeting = useMutation(
        trpc.meetings.update.mutationOptions({
            onSuccess: async () => {
                await queryClient.invalidateQueries(
                    trpc.meetings.getMany.queryOptions({}),
                );

                onSuccess?.();
            },

            onError: (error) => {
                toast.error(error.message);
            },
        }),
    );

    const form = useForm<z.infer<typeof meetingsInsertSchema>> ({
        resolver: zodResolver(meetingsInsertSchema),
        defaultValues: {
            name: initialValues?.name ?? "",
            agentId: initialValues?.agentId ?? "",
        }
    });

    const isEdit = !!initialValues?.id;
    const isPending = createMeeting.isPending || updateMeeting.isPending;

    const onSubmit = (values: z.infer<typeof meetingsInsertSchema>) => {
        if(isEdit) {
            updateMeeting.mutate({ ...values, id: initialValues.id });
        }
        else {
            createMeeting.mutate(values);
        }
    };

    return (
        <>
            <NewAgentDialog open={openNewAgnetDialog} onOpenChange={setOpenNewAgnetDialog}/>
            <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-5">
                        {/* Name Field */}
                        <FormField 
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <div className="relative group">
                                            <Input 
                                                {...field} 
                                                placeholder="e.g. Consultations"
                                                className="bg-white/50 backdrop-blur-sm border-amber-200/50 focus:ring-2 focus:ring-amber-400/50 focus:border-transparent hover:border-amber-300/70 hover:shadow-md transition-all duration-300"
                                            />
                                            {/* Hover glow effect */}
                                            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                            {/* Focus glow effect */}
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-md opacity-0 group-focus-within:opacity-20 blur transition-opacity duration-500 -z-10" />
                                        </div>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        {/* Agent Field - with gap */}
                        <FormField 
                            name="agentId"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="pt-2">
                                    <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
                                        Agent
                                    </FormLabel>
                                    <FormControl>
                                        <div className="relative group">
                                            <CommandSelect 
                                                options={(agents.data?.items ?? []).map((agent) => ({
                                                    id: agent.id,
                                                    value: agent.id,
                                                    children: (
                                                        <div className="flex items-center gap-x-2">
                                                            <GeneratedAvatar 
                                                                seed={agent.name}
                                                                variant="botttsNeutral"
                                                                className="border size-6"
                                                            />
                                                            <span>{agent.name}</span>
                                                        </div>
                                                    )
                                                }))}
                                                onSelect={field.onChange}
                                                onSearch={setAgentSearch}
                                                value={field.value}
                                                placeholder="Select an agent"
                                                className="bg-white/50 backdrop-blur-sm border-amber-200/50 hover:border-amber-300/70 hover:shadow-md transition-all duration-300"
                                            />
                                            {/* Focus glow effect for select */}
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-md opacity-0 group-focus-within:opacity-20 blur transition-opacity duration-500 -z-10" />
                                        </div>
                                    </FormControl>
                                    <FormDescription>
                                        Not found what you are looking for?{" "}
                                        <button
                                            type="button"
                                            className="relative inline-flex items-center hover:underline text-amber-600 hover:text-amber-700 transition-colors animate-pulse"
                                            onClick={() => setOpenNewAgnetDialog(true)}
                                        >
                                            <span className="relative z-10">Create new agent</span>
                                            <span className="absolute inset-0 bg-amber-400/20 blur-md rounded animate-pulse"></span>
                                        </button>
                                    </FormDescription>
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
                                Cancel
                            </Button>
                        )}

                        <Button 
                            disabled={isPending} 
                            type="submit"
                            className="relative flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0 overflow-hidden group"
                        >
                            <span className="relative z-10">{isEdit ? "Update" : "Create"}</span>
                            {/* Button glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-md opacity-50 group-hover:opacity-75 blur transition-opacity duration-300 -z-10"></div>
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    )
}