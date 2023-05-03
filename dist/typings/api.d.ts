import { Configuration, CreateChatCompletionRequest, CreateChatCompletionResponse, CreateCompletionRequest, CreateCompletionResponse, CreateEditRequest, CreateEditResponse, CreateEmbeddingRequest, CreateEmbeddingResponse, CreateFineTuneRequest, CreateImageRequest, CreateModerationRequest, CreateModerationResponse, CreateTranscriptionResponse, CreateTranslationResponse, DeleteFileResponse, DeleteModelResponse, Engine, FineTune, ImagesResponse, ListEnginesResponse, ListFilesResponse, ListFineTuneEventsResponse, ListFineTunesResponse, ListModelsResponse, Model, OpenAIFile } from 'openai';
import { CreateFileRequest, CreateImageEditRequest, CreateImageImageVariationRequest, CreateTranscriptionRequest, CreateTranslationRequest, FineTuneEventsRequest, streamWise } from './typing';
export declare class OpenAiAPI {
    configuration: Configuration;
    constructor(configuration: Configuration);
    doFetch<T>(path: string, method: string, body: T): Promise<Response>;
    fetchOpenaiStream<T extends streamWise, U>(path: string, method: string, body: T): Promise<Response | U>;
    fetchOpenai<T, U>(path: string, method: string, body: T): Promise<U>;
    stream(res: Response): ReadableStream;
    retrieveModel(model: string): Promise<Model>;
    listModels(): Promise<ListModelsResponse>;
    createCompletion(req: CreateCompletionRequest): Promise<CreateCompletionResponse | Response>;
    createChatCompletion(req: CreateChatCompletionRequest): Promise<CreateChatCompletionResponse | Response>;
    createEdit(req: CreateEditRequest): Promise<CreateEditResponse>;
    createEmbedding(req: CreateEmbeddingRequest): Promise<CreateEmbeddingResponse>;
    createImage(req: CreateImageRequest): Promise<ImagesResponse>;
    createImageEdit(req: CreateImageEditRequest): Promise<ImagesResponse>;
    createImageVariation(req: CreateImageImageVariationRequest): Promise<ImagesResponse>;
    createTranscription(req: CreateTranscriptionRequest): Promise<CreateTranscriptionResponse>;
    createTranslation(req: CreateTranslationRequest): Promise<CreateTranslationResponse>;
    listFiles(): Promise<ListFilesResponse>;
    createFile(req: CreateFileRequest): Promise<OpenAIFile>;
    deleteFile(fileId: string): Promise<DeleteFileResponse>;
    retrieveFile(fileId: string): Promise<OpenAIFile>;
    downloadFile(fileId: string): Promise<string>;
    createFineTune(req: CreateFineTuneRequest): Promise<FineTune>;
    listFineTunes(): Promise<ListFineTunesResponse>;
    retrieveFineTune(fineTuneId: string): Promise<FineTune>;
    cancelFineTune(fineTuneId: string): Promise<FineTune>;
    listFineTuneEvents(fineTuneId: string, stream?: FineTuneEventsRequest): Promise<ListFineTuneEventsResponse | Response>;
    deleteModel(model: string): Promise<DeleteModelResponse>;
    createModeration(req: CreateModerationRequest): Promise<CreateModerationResponse>;
    /**
     * @deprecated
     */
    listEngines(): Promise<ListEnginesResponse>;
    /**
     * @deprecated
     */
    retrieveEngine(engineId: string): Promise<Engine>;
}
