export var PathEnum;
(function (PathEnum) {
    PathEnum["Model"] = "/v1/models";
    PathEnum["Completions"] = "/v1/completions";
    PathEnum["Chat"] = "/v1/chat/completions";
    PathEnum["Edit"] = "/v1/edits";
    PathEnum["Image"] = "/v1/images/generations";
    PathEnum["ImageEdit"] = "/v1/images/edits";
    PathEnum["IimageVariation"] = "/v1/images/variations";
    PathEnum["Embeddings"] = "/v1/embeddings";
    PathEnum["Transcriptions"] = "/v1/audio/transcriptions";
    PathEnum["Translations"] = "/v1/audio/translations";
    PathEnum["Files"] = "/v1/files";
    PathEnum["FineTune"] = "/v1/fine-tunes";
    PathEnum["Moderations"] = "/v1/moderations";
    PathEnum["Engines"] = "/v1/engines";
})(PathEnum || (PathEnum = {}));
export var MethodEnum;
(function (MethodEnum) {
    MethodEnum["POST"] = "POST";
    MethodEnum["GET"] = "GET";
    MethodEnum["PUT"] = "PUT";
    MethodEnum["DELETE"] = "DELETE";
})(MethodEnum || (MethodEnum = {}));
