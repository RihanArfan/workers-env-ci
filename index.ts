export interface Env {
  ENVIRONMENT: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return new Response(env.ENVIRONMENT, {
      headers: {
        'content-type': "text/plain",
      },
    });
  }
};
