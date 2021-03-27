
export default (parent:any, args:any, context:any, info:any) => {

    // console.log({ parent, args, context, info });
    const { text } = args;

    return text || 'Hello Word!';
}
