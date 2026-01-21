'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14751<T> = T extends (infer U)[]
  ? DeepReadonlyArray14751<U>
  : T extends object
  ? DeepReadonlyObject14751<T>
  : T;

interface DeepReadonlyArray14751<T> extends ReadonlyArray<DeepReadonly14751<T>> {}

type DeepReadonlyObject14751<T> = {
  readonly [P in keyof T]: DeepReadonly14751<T[P]>;
};

type UnionToIntersection14751<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14751<T> = UnionToIntersection14751<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14751<T extends unknown[], V> = [...T, V];

type TuplifyUnion14751<T, L = LastOf14751<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14751<TuplifyUnion14751<Exclude<T, L>>, L>;

type DeepPartial14751<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14751<T[P]> }
  : T;

type Paths14751<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14751<K, Paths14751<T[K], Prev14751[D]>> : never }[keyof T]
  : never;

type Prev14751 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14751<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14751 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths14751 = Paths14751<NestedConfig14751>;

interface HeavyProps14751 {
  config: DeepPartial14751<NestedConfig14751>;
  path?: ConfigPaths14751;
}

const HeavyComponent14751 = memo(function HeavyComponent14751({ config }: HeavyProps14751) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14751) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14751 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14751: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14751.displayName = 'HeavyComponent14751';
export default HeavyComponent14751;
