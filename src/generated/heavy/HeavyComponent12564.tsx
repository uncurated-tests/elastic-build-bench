'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12564<T> = T extends (infer U)[]
  ? DeepReadonlyArray12564<U>
  : T extends object
  ? DeepReadonlyObject12564<T>
  : T;

interface DeepReadonlyArray12564<T> extends ReadonlyArray<DeepReadonly12564<T>> {}

type DeepReadonlyObject12564<T> = {
  readonly [P in keyof T]: DeepReadonly12564<T[P]>;
};

type UnionToIntersection12564<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12564<T> = UnionToIntersection12564<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12564<T extends unknown[], V> = [...T, V];

type TuplifyUnion12564<T, L = LastOf12564<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12564<TuplifyUnion12564<Exclude<T, L>>, L>;

type DeepPartial12564<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12564<T[P]> }
  : T;

type Paths12564<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12564<K, Paths12564<T[K], Prev12564[D]>> : never }[keyof T]
  : never;

type Prev12564 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12564<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12564 {
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

type ConfigPaths12564 = Paths12564<NestedConfig12564>;

interface HeavyProps12564 {
  config: DeepPartial12564<NestedConfig12564>;
  path?: ConfigPaths12564;
}

const HeavyComponent12564 = memo(function HeavyComponent12564({ config }: HeavyProps12564) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12564) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12564 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12564: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12564.displayName = 'HeavyComponent12564';
export default HeavyComponent12564;
