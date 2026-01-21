'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12846<T> = T extends (infer U)[]
  ? DeepReadonlyArray12846<U>
  : T extends object
  ? DeepReadonlyObject12846<T>
  : T;

interface DeepReadonlyArray12846<T> extends ReadonlyArray<DeepReadonly12846<T>> {}

type DeepReadonlyObject12846<T> = {
  readonly [P in keyof T]: DeepReadonly12846<T[P]>;
};

type UnionToIntersection12846<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12846<T> = UnionToIntersection12846<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12846<T extends unknown[], V> = [...T, V];

type TuplifyUnion12846<T, L = LastOf12846<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12846<TuplifyUnion12846<Exclude<T, L>>, L>;

type DeepPartial12846<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12846<T[P]> }
  : T;

type Paths12846<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12846<K, Paths12846<T[K], Prev12846[D]>> : never }[keyof T]
  : never;

type Prev12846 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12846<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12846 {
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

type ConfigPaths12846 = Paths12846<NestedConfig12846>;

interface HeavyProps12846 {
  config: DeepPartial12846<NestedConfig12846>;
  path?: ConfigPaths12846;
}

const HeavyComponent12846 = memo(function HeavyComponent12846({ config }: HeavyProps12846) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12846) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12846 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12846: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12846.displayName = 'HeavyComponent12846';
export default HeavyComponent12846;
