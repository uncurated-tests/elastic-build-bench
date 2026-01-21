'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9751<T> = T extends (infer U)[]
  ? DeepReadonlyArray9751<U>
  : T extends object
  ? DeepReadonlyObject9751<T>
  : T;

interface DeepReadonlyArray9751<T> extends ReadonlyArray<DeepReadonly9751<T>> {}

type DeepReadonlyObject9751<T> = {
  readonly [P in keyof T]: DeepReadonly9751<T[P]>;
};

type UnionToIntersection9751<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9751<T> = UnionToIntersection9751<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9751<T extends unknown[], V> = [...T, V];

type TuplifyUnion9751<T, L = LastOf9751<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9751<TuplifyUnion9751<Exclude<T, L>>, L>;

type DeepPartial9751<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9751<T[P]> }
  : T;

type Paths9751<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9751<K, Paths9751<T[K], Prev9751[D]>> : never }[keyof T]
  : never;

type Prev9751 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9751<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9751 {
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

type ConfigPaths9751 = Paths9751<NestedConfig9751>;

interface HeavyProps9751 {
  config: DeepPartial9751<NestedConfig9751>;
  path?: ConfigPaths9751;
}

const HeavyComponent9751 = memo(function HeavyComponent9751({ config }: HeavyProps9751) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9751) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9751 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9751: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9751.displayName = 'HeavyComponent9751';
export default HeavyComponent9751;
