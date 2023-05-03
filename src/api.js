import { MethodEnum, PathEnum } from './typing';
import { createParser } from "eventsource-parser";
import { serialize } from 'object-to-formdata';
const OPENAI_URL = "https://api.openai.com";
export class OpenAiAPI {
    configuration;
    constructor(configuration) {
        this.configuration = configuration;
    }
    async doFetch(path, method, body) {
        return await fetch(`${this.configuration.basePath ? this.configuration.basePath : OPENAI_URL}${path}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.configuration.apiKey}`,
                ...(this.configuration.organization && {
                    "OpenAI-Organization": this.configuration.organization,
                }),
            },
            cache: "no-store",
            method: method,
            body: body ? JSON.stringify(body) : null,
        });
    }
    async fetchOpenaiStream(path, method, body) {
        const res = await this.doFetch(path, method, body);
        if (body.stream) {
            return new Response(this.stream(res));
        }
        return JSON.parse(await res.text());
    }
    async fetchOpenai(path, method, body) {
        const res = await this.doFetch(path, method, body);
        return JSON.parse(await res.text());
    }
    stream(res) {
        return new ReadableStream({
            async start(controller) {
                function onParse(event) {
                    if (event.type === "event") {
                        const data = event.data;
                        if (data === "[DONE]") {
                            controller.close();
                            return;
                        }
                        try {
                            const queue = new TextEncoder().encode(JSON.parse(data));
                            controller.enqueue(queue);
                        }
                        catch (e) {
                            controller.error(e);
                        }
                    }
                }
                const parser = createParser(onParse);
                const reader = res.body?.pipeThrough(new TextDecoderStream()).getReader();
                // eslint-disable-next-line no-constant-condition
                while (true) {
                    const { done, value } = await reader.read();
                    if (done)
                        break;
                    parser.feed(value);
                }
            },
        });
    }
    async retrieveModel(model) {
        return await this.fetchOpenai(`${PathEnum.Model}/${model}`, MethodEnum.GET, null);
    }
    async listModels() {
        return await this.fetchOpenai(PathEnum.Model, MethodEnum.GET, null);
    }
    async createCompletion(req) {
        return await this.fetchOpenaiStream(PathEnum.Completions, MethodEnum.POST, req);
    }
    async createChatCompletion(req) {
        return await this.fetchOpenaiStream(PathEnum.Chat, MethodEnum.POST, req);
    }
    async createEdit(req) {
        return await this.fetchOpenai(PathEnum.Edit, MethodEnum.POST, req);
    }
    async createEmbedding(req) {
        return await this.fetchOpenai(PathEnum.Embeddings, MethodEnum.POST, req);
    }
    async createImage(req) {
        return await this.fetchOpenai(PathEnum.Image, MethodEnum.POST, req);
    }
    async createImageEdit(req) {
        return await this.fetchOpenai(PathEnum.ImageEdit, MethodEnum.POST, serialize(req));
    }
    async createImageVariation(req) {
        return await this.fetchOpenai(PathEnum.IimageVariation, MethodEnum.POST, serialize(req));
    }
    async createTranscription(req) {
        return await this.fetchOpenai(PathEnum.Transcriptions, MethodEnum.POST, serialize(req));
    }
    async createTranslation(req) {
        return await this.fetchOpenai(PathEnum.Translations, MethodEnum.POST, serialize(req));
    }
    async listFiles() {
        return await this.fetchOpenai(PathEnum.Files, MethodEnum.GET, null);
    }
    async createFile(req) {
        return await this.fetchOpenai(PathEnum.Files, MethodEnum.POST, serialize(req));
    }
    async deleteFile(fileId) {
        return await this.fetchOpenai(`${PathEnum.Files}/${fileId}`, MethodEnum.DELETE, null);
    }
    async retrieveFile(fileId) {
        return await this.fetchOpenai(`${PathEnum.Files}/${fileId}`, MethodEnum.GET, null);
    }
    async downloadFile(fileId) {
        return await this.fetchOpenai(`${PathEnum.Files}/${fileId}/content`, MethodEnum.GET, null);
    }
    async createFineTune(req) {
        return await this.fetchOpenai(PathEnum.FineTune, MethodEnum.POST, req);
    }
    async listFineTunes() {
        return await this.fetchOpenai(PathEnum.FineTune, MethodEnum.GET, null);
    }
    async retrieveFineTune(fineTuneId) {
        return await this.fetchOpenai(`${PathEnum.FineTune}/${fineTuneId}`, MethodEnum.GET, null);
    }
    async cancelFineTune(fineTuneId) {
        return await this.fetchOpenai(`${PathEnum.FineTune}/${fineTuneId}/cancel`, MethodEnum.POST, null);
    }
    async listFineTuneEvents(fineTuneId, stream) {
        if (stream?.stream) {
            return await this.fetchOpenaiStream(`${PathEnum.FineTune}/${fineTuneId}/events`, MethodEnum.POST, stream);
        }
        return await this.fetchOpenai(`${PathEnum.FineTune}/${fineTuneId}/events`, MethodEnum.POST, null);
    }
    async deleteModel(model) {
        return await this.fetchOpenai(`${PathEnum.Model}/${model}`, MethodEnum.DELETE, null);
    }
    async createModeration(req) {
        return await this.fetchOpenai(PathEnum.Moderations, MethodEnum.POST, req);
    }
    /**
     * @deprecated
     */
    async listEngines() {
        return await this.fetchOpenai(PathEnum.Engines, MethodEnum.GET, null);
    }
    /**
     * @deprecated
     */
    async retrieveEngine(engineId) {
        return await this.fetchOpenai(`${PathEnum.Engines}/${engineId}`, MethodEnum.GET, null);
    }
}
