
import {firestore} from '../firebase';
import {useFormInput} from '../hooks'
function CreatePost() {

    console.log('hello');
    const title=useFormInput('title');
    const subTitle=useFormInput('subtitile');
    const content=useFormInput('content');

    function handleSubmit (e){
       // e.preventDefault()
        console.log('title',title.value);
        console.log('subTitle',subTitle.value);
        console.log('content',content.value);


        firestore.collection('posts').add({
            title:title.value,
            content:content.value,
            subTitle:subTitle.value,
            createdAt:new Date(),
        })
    }
    return(
    <div className="create-post">
        <h1>
        Create Post
        </h1>
            <div className="form-field">
                <label>Title</label>
                <input {...title}/>   
            </div>
            <div className="form-field">
                <label>Sub Title</label>
                <input 
                {...subTitle}
                />
            </div>
            <div className="form-field">
                <label>Content</label>
                <textarea 
                {...content}
                ></textarea>
            </div>
            <button type="submit" className="create-post-btn" onClick={handleSubmit}>
                Create Post
            </button>
    </div>
    );
}
export default CreatePost;