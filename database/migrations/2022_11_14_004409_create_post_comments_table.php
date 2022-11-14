<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->string('comment', 100);
            $table->foreignId('post_id')->constrained('posts');
            $table->integer('depth');
            $table->integer('group');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments', function (Blueprint $table) {
            //
            $table->dropForeign('posts_post_id_foreign');
            // 관례: 관계명칭자동생성
            // 관계명칭: 테이블명_컬럼명_foreign
            // 예시) book_book_id_foreign
            $table->dropColumn('post_id');
        });
    }
};
