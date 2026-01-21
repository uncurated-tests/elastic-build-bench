'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12186<T> = T extends (infer U)[]
  ? DeepReadonlyArray12186<U>
  : T extends object
  ? DeepReadonlyObject12186<T>
  : T;

interface DeepReadonlyArray12186<T> extends ReadonlyArray<DeepReadonly12186<T>> {}

type DeepReadonlyObject12186<T> = {
  readonly [P in keyof T]: DeepReadonly12186<T[P]>;
};

type UnionToIntersection12186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12186<T> = UnionToIntersection12186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12186<T extends unknown[], V> = [...T, V];

type TuplifyUnion12186<T, L = LastOf12186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12186<TuplifyUnion12186<Exclude<T, L>>, L>;

type DeepPartial12186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12186<T[P]> }
  : T;

type Paths12186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12186<K, Paths12186<T[K], Prev12186[D]>> : never }[keyof T]
  : never;

type Prev12186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12186 {
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

type ConfigPaths12186 = Paths12186<NestedConfig12186>;

interface HeavyProps12186 {
  config: DeepPartial12186<NestedConfig12186>;
  path?: ConfigPaths12186;
}

const HeavyComponent12186 = memo(function HeavyComponent12186({ config }: HeavyProps12186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12186.displayName = 'HeavyComponent12186';
export default HeavyComponent12186;
