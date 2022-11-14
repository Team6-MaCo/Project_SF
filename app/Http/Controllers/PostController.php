<?php

namespace App\Http\Controllers;

use Dotenv\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller
{
    //
    public function index() {
        $posts = Post::all();
        return Inertia::render('Board/Index', [
            'posts'=>$posts
        ]);
    }

    public function create() {
        return Inertia::render('Board/Create');
    }

    public function store(Request $req) {
        $validation = $req->validate([
            'title'=>['required'],
            'body'=>['required'],
            'picture'=>['image', 'mimes:jpeg,png,jpg,gif,svg'],
        ]);
        $board = new Post();
        $board->user_id = auth()->user()->id;
        $board->title = $validation['title'];
        $board->body = $validation['body'];

        if($req->hasFile('picture')){
            $fileName = time() . '-' . $req->file('picture')->getClientOriginalName();
            $req->file('picture')->storeAs('public/images', $fileName);
            $board->image_name = $fileName;
        }
        $board->view_count = 0;
        $board->save();

        return redirect()->route('board.index');
    }

    public function show($id) {
        $post = Post::find($id);
        return Inertia::render('Board/Post', [
            'post' => $post
        ]);
    }
    public function edit($id) {
        $post = Post::find($id);
        return Inertia::render('Board/Edit', [
            'post' => $post
        ]);
    }
    public function update(Request $req, $id){
        Validator::make($req->all(), [
            'title' => ['required'],
            'body' => ['required'],
            'picture' => ['image', 'mimes:jpeg,png,jpg,gif,svg'],
        ])->validate();

        Post::find($id)->update($req->all());
        return redirect()->route('board.index');
    }

    public function destroy($id)
    {
        Post::find($id)->delete();
        return redirect()->route('board.index');
    }
}
