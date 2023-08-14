                                {include file='user/help/head.tpl'}

                                <div class="row">
                                    {foreach $classList_L1 as $list_L1}
                                        <div class="col-lg-6">
                                            <div class="card card-custom mb-8 gutter-b card-stretch rounded-lg shadow">


                                                {if $list_L1->name =='Windows' }
                                                    {$url = '/user/tutorial?os=Windows&client=SSTap'}
                                                {/if}

                                                {if $list_L1->name =='Android' }
                                                    {$url = '/user/tutorial?os=Android&client=Home'}
                                                {/if}

                                                {if $list_L1->name =='iOS' }
                                                    {$url = '/user/tutorial?os=iOS&client=Shadowrocket'}
                                                {/if}

                                                {if $list_L1->name =='Mac' }
                                                    {$url = '/user/tutorial?os=MacOS&client=Home'}
                                                {/if}

                                                {if $list_L1->name =='Linux' }
                                                    {$url = '/user/tutorial?os=iOS&client=Clash'}
                                                {/if}

                                                <a href="{$url}">

                                                    <div class="card-body os-card {$list_L1->name}-card">
                                                        <div class="card-icon">
                                                            {if $list_L1->li != null}<span class="{$list_L1->li}"></span>&nbsp;{/if}
                                                        </div>
                                                        <h4>{$list_L1->name}</h4>
                                                        <div class="card-description">{$list_L1->descs}</div>
                                                    </div>
                                                </a>
                                            </div>

                                        </div>

                                    {/foreach}
                                </div>

                            </div>
                        </div>
                    </div>
                    {include file='include/global/footer.tpl'}
                </div>
            </div>
        </div>
        {include file='include/global/scripts.tpl'}

    </body>
</html>
