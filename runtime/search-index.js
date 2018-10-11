var N = null;var searchIndex = {};
searchIndex["dynasmrt"]={"doc":"","items":[[3,"AssemblyOffset","dynasmrt","A struct representing an offset into the assembling buffer of a `DynasmLabelApi` struct. The wrapped `usize` is the offset from the start of the assembling buffer in bytes.",N,N],[12,"0","","",0,N],[3,"DynamicLabel","","A dynamic label",N,N],[3,"ExecutableBuffer","","A structure holding a buffer of executable memory",N,N],[3,"Executor","","A read-only shared reference to the executable buffer inside an Assembler. By locking it the internal `ExecutableBuffer` can be accessed and executed.",N,N],[4,"DynasmError","","An error type that is returned from various check and check_exact methods",N,N],[13,"CheckFailed","","",1,N],[0,"common","","",N,N],[3,"UncommittedModifier","dynasmrt::common","This struct is a wrapper around an `Assembler` normally created using the `Assembler.alter_uncommitted` method. It allows the user to edit parts of the assembling buffer that cannot be determined easily or efficiently in advance. Due to limitations of the label resolution algorithms, this assembler does not allow labels to be used.",N,N],[11,"new","","create a new uncommittedmodifier",2,[[["vec"],["assemblyoffset"]],["uncommittedmodifier"]]],[11,"goto","","Sets the current modification offset to the given value",2,[[["self"],["assemblyoffset"]]]],[11,"check","","Checks that the current modification offset is not larger than the specified offset.",2,[[["self"],["assemblyoffset"]],["result",["dynasmerror"]]]],[11,"check_exact","","Checks that the current modification offset is exactly the specified offset.",2,[[["self"],["assemblyoffset"]],["result",["dynasmerror"]]]],[0,"x64","dynasmrt","",N,N],[3,"Assembler","dynasmrt::x64","This struct is an implementation of a dynasm runtime. It supports incremental compilation as well as multithreaded execution with simultaneous compilation. Its implementation ensures that no memory is writeable and executable at the same time.",N,N],[3,"AssemblyModifier","","This struct is a wrapper around an `Assembler` normally created using the `Assembler.alter` method. Instead of writing to a temporary assembling buffer, this struct assembles directly into an executable buffer. The `goto` method can be used to set the assembling offset in the `ExecutableBuffer` of the assembler (this offset is initialized to 0) after which the data at this location can be overwritten by assembling into this struct.",N,N],[11,"new","","Create a new `Assembler` instance This function will return an error if it was not able to map the required executable memory. However, further methods on the `Assembler` will simply panic if an error occurs during memory remapping as otherwise it would violate the invariants of the assembler. This behaviour could be improved but currently the underlying memmap crate does not return the original mappings if a call to mprotect/VirtualProtect fails so there is no reliable way to error out if a call fails while leaving the logic of the `Assembler` intact.",3,[[],["result",["assembler"]]]],[11,"new_dynamic_label","","Create a new dynamic label that can be referenced and defined.",3,[[["self"]],["dynamiclabel"]]],[11,"alter","","To allow already committed code to be altered, this method allows modification of the internal ExecutableBuffer directly. When this method is called, all data will be committed and access to the internal `ExecutableBuffer` will be locked. The passed function will then be called with an `AssemblyModifier` as argument. Using this `AssemblyModifier` changes can be made to the committed code. After this function returns, any labels in these changes will be resolved and the `ExecutableBuffer` will be unlocked again.",3,[[["self"],["f"]]]],[11,"alter_uncommitted","","Similar to `Assembler::alter`, this method allows modification of the yet to be committed assembing buffer. Note that it is not possible to use labels in this context, and overriding labels will cause corruption when the assembler tries to resolve the labels at commit time.",3,[[["self"]],["uncommittedmodifier"]]],[11,"commit","","Commit the assembled code from a temporary buffer to the executable buffer. This method requires write access to the execution buffer and therefore has to obtain a lock on the datastructure. When this method is called, all labels will be resolved, and the result can no longer be changed.",3,[[["self"]]]],[11,"finalize","","Consumes the assembler to return the internal ExecutableBuffer. This method will only fail if an `Executor` currently holds a lock on the datastructure, in which case it will return itself.",3,[[["self"]],["result",["executablebuffer","assembler"]]]],[11,"reader","","Creates a read-only reference to the internal `ExecutableBuffer` that must be locked to access it. Multiple of such read-only locks can be obtained at the same time, but as long as they are alive they will block any `self.commit()` calls.",3,[[["self"]],["executor"]]],[11,"goto","","Sets the current modification offset to the given value",4,[[["self"],["assemblyoffset"]]]],[11,"check","","Checks that the current modification offset is not larger than the specified offset.",4,[[["self"],["assemblyoffset"]],["result",["dynasmerror"]]]],[11,"check_exact","","Checks that the current modification offset is exactly the specified offset.",4,[[["self"],["assemblyoffset"]],["result",["dynasmerror"]]]],[0,"x86","dynasmrt","",N,N],[3,"Assembler","dynasmrt::x86","This struct is an implementation of a dynasm runtime. It supports incremental compilation as well as multithreaded execution with simultaneous compilation. Its implementation ensures that no memory is writeable and executable at the same time.",N,N],[3,"AssemblyModifier","","This struct is a wrapper around an `Assembler` normally created using the `Assembler.alter` method. Instead of writing to a temporary assembling buffer, this struct assembles directly into an executable buffer. The `goto` method can be used to set the assembling offset in the `ExecutableBuffer` of the assembler (this offset is initialized to 0) after which the data at this location can be overwritten by assembling into this struct.",N,N],[11,"new","","Create a new `Assembler` instance This function will return an error if it was not able to map the required executable memory. However, further methods on the `Assembler` will simply panic if an error occurs during memory remapping as otherwise it would violate the invariants of the assembler. This behaviour could be improved but currently the underlying memmap crate does not return the original mappings if a call to mprotect/VirtualProtect fails so there is no reliable way to error out if a call fails while leaving the logic of the `Assembler` intact.",5,[[],["result",["assembler"]]]],[11,"new_dynamic_label","","Create a new dynamic label that can be referenced and defined.",5,[[["self"]],["dynamiclabel"]]],[11,"alter","","To allow already committed code to be altered, this method allows modification of the internal ExecutableBuffer directly. When this method is called, all data will be committed and access to the internal `ExecutableBuffer` will be locked. The passed function will then be called with an `AssemblyModifier` as argument. Using this `AssemblyModifier` changes can be made to the committed code. After this function returns, any labels in these changes will be resolved and the `ExecutableBuffer` will be unlocked again.",5,[[["self"],["f"]]]],[11,"alter_uncommitted","","Similar to `Assembler::alter`, this method allows modification of the yet to be committed assembing buffer. Note that it is not possible to use labels in this context, and overriding labels will cause corruption when the assembler tries to resolve the labels at commit time.",5,[[["self"]],["uncommittedmodifier"]]],[11,"commit","","Commit the assembled code from a temporary buffer to the executable buffer. This method requires write access to the execution buffer and therefore has to obtain a lock on the datastructure. When this method is called, all labels will be resolved, and the result can no longer be changed.",5,[[["self"]]]],[11,"finalize","","Consumes the assembler to return the internal ExecutableBuffer. This method will only fail if an `Executor` currently holds a lock on the datastructure, in which case it will return itself.",5,[[["self"]],["result",["executablebuffer","assembler"]]]],[11,"reader","","Creates a read-only reference to the internal `ExecutableBuffer` that must be locked to access it. Multiple of such read-only locks can be obtained at the same time, but as long as they are alive they will block any `self.commit()` calls.",5,[[["self"]],["executor"]]],[11,"goto","","Sets the current modification offset to the given value",6,[[["self"],["assemblyoffset"]]]],[11,"check","","Checks that the current modification offset is not larger than the specified offset.",6,[[["self"],["assemblyoffset"]],["result",["dynasmerror"]]]],[11,"check_exact","","Checks that the current modification offset is exactly the specified offset.",6,[[["self"],["assemblyoffset"]],["result",["dynasmerror"]]]],[8,"DynasmApi","dynasmrt","This trait represents the interface that must be implemented to allow the dynasm preprocessor to assemble into a datastructure.",N,N],[10,"offset","","Report the current offset into the assembling target",7,[[["self"]],["assemblyoffset"]]],[10,"push","","Push a byte into the assembling target",7,[[["self"],["u8"]]]],[11,"push_i8","","Push a signed byte into the assembling target",7,[[["self"],["i8"]]]],[11,"push_i16","","Push a signed word into the assembling target",7,[[["self"],["i16"]]]],[11,"push_i32","","Push a signed doubleword into the assembling target",7,[[["self"],["i32"]]]],[11,"push_i64","","Push a signed quadword into the assembling target",7,[[["self"],["i64"]]]],[11,"push_u16","","Push an usigned word into the assembling target",7,[[["self"],["u16"]]]],[11,"push_u32","","Push an usigned doubleword into the assembling target",7,[[["self"],["u32"]]]],[11,"push_u64","","Push an usigned quadword into the assembling target",7,[[["self"],["u64"]]]],[11,"runtime_error","","This function is called in when a runtime error has to be generated. It panics.",7,N],[8,"DynasmLabelApi","","This trait extends DynasmApi to not only allow assembling, but also labels and various directives",N,N],[16,"Relocation","","",8,N],[10,"align","","Push nops until the assembling target end is aligned to the given alignment",8,[[["self"],["usize"]]]],[10,"local_label","","Record the definition of a local label",8,[[["self"],["str"]]]],[10,"global_label","","Record the definition of a global label",8,[[["self"],["str"]]]],[10,"dynamic_label","","Record the definition of a dynamic label",8,[[["self"],["dynamiclabel"]]]],[10,"forward_reloc","","Record a relocation spot for a forward reference to a local label",8,N],[10,"backward_reloc","","Record a relocation spot for a backward reference to a local label",8,N],[10,"global_reloc","","Record a relocation spot for a reference to a global label",8,N],[10,"dynamic_reloc","","Record a relocation spot for a reference to a dynamic label",8,N],[10,"bare_reloc","","Record a relocation spot to an arbitrary target",8,N],[11,"ptr","","Obtain a pointer into the executable memory from an offset into it. When an offset returned from `DynasmLabelApi::offset` is used, the resulting pointer will point to the start of the first instruction after the offset call, which can then be jumped or called to divert control flow into the executable buffer. Note that if this buffer is accessed through an Executor, these pointers will only be valid as long as its lock is held. When no locks are held, The assembler is free to relocate the executable buffer when it requires more memory than available.",9,N],[11,"lock","","Gain read-access to the internal `ExecutableBuffer`. While the returned guard is alive, it can be used to read and execute from the `ExecutableBuffer`. Any pointers created to the `Executablebuffer` should no longer be used when the guard is dropped.",10,[[["self"]],["rwlockreadguard",["executablebuffer"]]]],[14,"Pointer","","This macro takes a *const pointer from the source operand, and then casts it to the desired return type. this allows it to be used as an easy shorthand for passing pointers as dynasm immediate arguments.",N,N],[14,"MutPointer","","Preforms the same action as the `Pointer!` macro, but casts to a *mut pointer.",N,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,N],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"to_owned","","",10,[[["self"]],["t"]]],[11,"clone_into","","",10,N],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"to_string","","",1,[[["self"]],["string"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"from","dynasmrt::common","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"from","dynasmrt::x64","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"from","dynasmrt::x86","",5,[[["t"]],["t"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"offset","dynasmrt::common","",2,[[["self"]],["assemblyoffset"]]],[11,"push","","",2,[[["self"],["u8"]]]],[11,"offset","dynasmrt::x64","",3,[[["self"]],["assemblyoffset"]]],[11,"push","","",3,[[["self"],["u8"]]]],[11,"offset","","",4,[[["self"]],["assemblyoffset"]]],[11,"push","","",4,[[["self"],["u8"]]]],[11,"offset","dynasmrt::x86","",5,[[["self"]],["assemblyoffset"]]],[11,"push","","",5,[[["self"],["u8"]]]],[11,"offset","","",6,[[["self"]],["assemblyoffset"]]],[11,"push","","",6,[[["self"],["u8"]]]],[11,"align","dynasmrt::x64","",3,[[["self"],["usize"]]]],[11,"global_label","","",3,[[["self"],["str"]]]],[11,"global_reloc","","",3,N],[11,"dynamic_label","","",3,[[["self"],["dynamiclabel"]]]],[11,"dynamic_reloc","","",3,N],[11,"local_label","","",3,[[["self"],["str"]]]],[11,"forward_reloc","","",3,N],[11,"backward_reloc","","",3,N],[11,"bare_reloc","","",3,N],[11,"align","","",4,[[["self"],["usize"]]]],[11,"global_label","","",4,[[["self"],["str"]]]],[11,"global_reloc","","",4,N],[11,"dynamic_label","","",4,[[["self"],["dynamiclabel"]]]],[11,"dynamic_reloc","","",4,N],[11,"local_label","","",4,[[["self"],["str"]]]],[11,"forward_reloc","","",4,N],[11,"backward_reloc","","",4,N],[11,"bare_reloc","","",4,N],[11,"align","dynasmrt::x86","",5,[[["self"],["usize"]]]],[11,"global_label","","",5,[[["self"],["str"]]]],[11,"global_reloc","","",5,N],[11,"dynamic_label","","",5,[[["self"],["dynamiclabel"]]]],[11,"dynamic_reloc","","",5,N],[11,"local_label","","",5,[[["self"],["str"]]]],[11,"forward_reloc","","",5,N],[11,"backward_reloc","","",5,N],[11,"bare_reloc","","",5,N],[11,"align","","",6,[[["self"],["usize"]]]],[11,"global_label","","",6,[[["self"],["str"]]]],[11,"global_reloc","","",6,N],[11,"dynamic_label","","",6,[[["self"],["dynamiclabel"]]]],[11,"dynamic_reloc","","",6,N],[11,"local_label","","",6,[[["self"],["str"]]]],[11,"forward_reloc","","",6,N],[11,"backward_reloc","","",6,N],[11,"bare_reloc","","",6,N],[11,"clone","dynasmrt","",0,[[["self"]],["assemblyoffset"]]],[11,"clone","","",11,[[["self"]],["dynamiclabel"]]],[11,"clone","","",10,[[["self"]],["executor"]]],[11,"clone","","",1,[[["self"]],["dynasmerror"]]],[11,"extend","dynasmrt::common","",2,[[["self"],["t"]]]],[11,"extend","","",2,[[["self"],["t"]]]],[11,"extend","dynasmrt::x64","",3,[[["self"],["t"]]]],[11,"extend","","",3,[[["self"],["t"]]]],[11,"extend","","",4,[[["self"],["t"]]]],[11,"extend","","",4,[[["self"],["t"]]]],[11,"extend","dynasmrt::x86","",5,[[["self"],["t"]]]],[11,"extend","","",5,[[["self"],["t"]]]],[11,"extend","","",6,[[["self"],["t"]]]],[11,"extend","","",6,[[["self"],["t"]]]],[11,"partial_cmp","dynasmrt","",0,[[["self"],["assemblyoffset"]],["option",["ordering"]]]],[11,"lt","","",0,[[["self"],["assemblyoffset"]],["bool"]]],[11,"le","","",0,[[["self"],["assemblyoffset"]],["bool"]]],[11,"gt","","",0,[[["self"],["assemblyoffset"]],["bool"]]],[11,"ge","","",0,[[["self"],["assemblyoffset"]],["bool"]]],[11,"eq","","",0,[[["self"],["assemblyoffset"]],["bool"]]],[11,"ne","","",0,[[["self"],["assemblyoffset"]],["bool"]]],[11,"eq","","",11,[[["self"],["dynamiclabel"]],["bool"]]],[11,"ne","","",11,[[["self"],["dynamiclabel"]],["bool"]]],[11,"cmp","","",0,[[["self"],["assemblyoffset"]],["ordering"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","dynasmrt::x64","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","dynasmrt::x86","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","dynasmrt","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",11,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",10,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"deref","","",9,N],[11,"hash","","",0,N],[11,"hash","","",11,N],[11,"description","","",1,[[["self"]],["str"]]]],"paths":[[3,"AssemblyOffset"],[4,"DynasmError"],[3,"UncommittedModifier"],[3,"Assembler"],[3,"AssemblyModifier"],[3,"Assembler"],[3,"AssemblyModifier"],[8,"DynasmApi"],[8,"DynasmLabelApi"],[3,"ExecutableBuffer"],[3,"Executor"],[3,"DynamicLabel"]]};
initSearch(searchIndex);
var path = $(".location").text();
var nest_count;
if (path) {
    nest_count = path.split("::").length + 1;
} else {
    nest_count = 1;
}

var base_path = "";
for (i = 0; i < nest_count; i++) {
    base_path += "../";
}

$(".sidebar").prepend('\
  <p class="location">\
      <a href="' + base_path + 'language/index.html">dynasm-rs</a>\
  </p>\
  <div class = "block modules">\
  <h3>Components</h3>\
    <ul>\
      <li>\
        <a href="' + base_path + 'language/index.html">Syntax</a>\
      </li>\
      <li>\
        <a href="' + base_path + 'plugin/dynasm/index.html">Plugin (dynasm)</a>\
      </li>\
      <li>\
        <a href="' + base_path + 'runtime/dynasmrt/index.html">Runtime (dynasmrt)</a>\
      </li>\
    </ul>\
  </div>');
