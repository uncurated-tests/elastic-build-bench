'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2114<T> = T extends (infer U)[]
  ? DeepReadonlyArray2114<U>
  : T extends object
  ? DeepReadonlyObject2114<T>
  : T;

interface DeepReadonlyArray2114<T> extends ReadonlyArray<DeepReadonly2114<T>> {}

type DeepReadonlyObject2114<T> = {
  readonly [P in keyof T]: DeepReadonly2114<T[P]>;
};

type UnionToIntersection2114<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2114<T> = UnionToIntersection2114<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2114<T extends unknown[], V> = [...T, V];

type TuplifyUnion2114<T, L = LastOf2114<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2114<TuplifyUnion2114<Exclude<T, L>>, L>;

type DeepPartial2114<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2114<T[P]> }
  : T;

type Paths2114<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2114<K, Paths2114<T[K], Prev2114[D]>> : never }[keyof T]
  : never;

type Prev2114 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2114<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2114 {
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

type ConfigPaths2114 = Paths2114<NestedConfig2114>;

interface HeavyProps2114 {
  config: DeepPartial2114<NestedConfig2114>;
  path?: ConfigPaths2114;
}

const HeavyComponent2114 = memo(function HeavyComponent2114({ config }: HeavyProps2114) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2114) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2114 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2114: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2114.displayName = 'HeavyComponent2114';
export default HeavyComponent2114;
