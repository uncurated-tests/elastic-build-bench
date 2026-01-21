'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12774<T> = T extends (infer U)[]
  ? DeepReadonlyArray12774<U>
  : T extends object
  ? DeepReadonlyObject12774<T>
  : T;

interface DeepReadonlyArray12774<T> extends ReadonlyArray<DeepReadonly12774<T>> {}

type DeepReadonlyObject12774<T> = {
  readonly [P in keyof T]: DeepReadonly12774<T[P]>;
};

type UnionToIntersection12774<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12774<T> = UnionToIntersection12774<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12774<T extends unknown[], V> = [...T, V];

type TuplifyUnion12774<T, L = LastOf12774<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12774<TuplifyUnion12774<Exclude<T, L>>, L>;

type DeepPartial12774<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12774<T[P]> }
  : T;

type Paths12774<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12774<K, Paths12774<T[K], Prev12774[D]>> : never }[keyof T]
  : never;

type Prev12774 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12774<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12774 {
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

type ConfigPaths12774 = Paths12774<NestedConfig12774>;

interface HeavyProps12774 {
  config: DeepPartial12774<NestedConfig12774>;
  path?: ConfigPaths12774;
}

const HeavyComponent12774 = memo(function HeavyComponent12774({ config }: HeavyProps12774) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12774) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12774 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12774: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12774.displayName = 'HeavyComponent12774';
export default HeavyComponent12774;
