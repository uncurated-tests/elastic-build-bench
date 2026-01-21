'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12902<T> = T extends (infer U)[]
  ? DeepReadonlyArray12902<U>
  : T extends object
  ? DeepReadonlyObject12902<T>
  : T;

interface DeepReadonlyArray12902<T> extends ReadonlyArray<DeepReadonly12902<T>> {}

type DeepReadonlyObject12902<T> = {
  readonly [P in keyof T]: DeepReadonly12902<T[P]>;
};

type UnionToIntersection12902<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12902<T> = UnionToIntersection12902<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12902<T extends unknown[], V> = [...T, V];

type TuplifyUnion12902<T, L = LastOf12902<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12902<TuplifyUnion12902<Exclude<T, L>>, L>;

type DeepPartial12902<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12902<T[P]> }
  : T;

type Paths12902<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12902<K, Paths12902<T[K], Prev12902[D]>> : never }[keyof T]
  : never;

type Prev12902 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12902<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12902 {
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

type ConfigPaths12902 = Paths12902<NestedConfig12902>;

interface HeavyProps12902 {
  config: DeepPartial12902<NestedConfig12902>;
  path?: ConfigPaths12902;
}

const HeavyComponent12902 = memo(function HeavyComponent12902({ config }: HeavyProps12902) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12902) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12902 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12902: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12902.displayName = 'HeavyComponent12902';
export default HeavyComponent12902;
