<?php

namespace App\Models\Inventory;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $table = 'brands';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 'image',
    ];

    public function product()
    {
        return $this->hasOne(Product::Class, 'brand_id');
    }

}
