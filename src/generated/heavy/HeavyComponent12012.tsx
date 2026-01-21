'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12012<T> = T extends (infer U)[]
  ? DeepReadonlyArray12012<U>
  : T extends object
  ? DeepReadonlyObject12012<T>
  : T;

interface DeepReadonlyArray12012<T> extends ReadonlyArray<DeepReadonly12012<T>> {}

type DeepReadonlyObject12012<T> = {
  readonly [P in keyof T]: DeepReadonly12012<T[P]>;
};

type UnionToIntersection12012<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12012<T> = UnionToIntersection12012<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12012<T extends unknown[], V> = [...T, V];

type TuplifyUnion12012<T, L = LastOf12012<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12012<TuplifyUnion12012<Exclude<T, L>>, L>;

type DeepPartial12012<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12012<T[P]> }
  : T;

type Paths12012<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12012<K, Paths12012<T[K], Prev12012[D]>> : never }[keyof T]
  : never;

type Prev12012 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12012<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12012 {
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

type ConfigPaths12012 = Paths12012<NestedConfig12012>;

interface HeavyProps12012 {
  config: DeepPartial12012<NestedConfig12012>;
  path?: ConfigPaths12012;
}

const HeavyComponent12012 = memo(function HeavyComponent12012({ config }: HeavyProps12012) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12012) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12012 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12012: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12012.displayName = 'HeavyComponent12012';
export default HeavyComponent12012;
