'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12526<T> = T extends (infer U)[]
  ? DeepReadonlyArray12526<U>
  : T extends object
  ? DeepReadonlyObject12526<T>
  : T;

interface DeepReadonlyArray12526<T> extends ReadonlyArray<DeepReadonly12526<T>> {}

type DeepReadonlyObject12526<T> = {
  readonly [P in keyof T]: DeepReadonly12526<T[P]>;
};

type UnionToIntersection12526<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12526<T> = UnionToIntersection12526<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12526<T extends unknown[], V> = [...T, V];

type TuplifyUnion12526<T, L = LastOf12526<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12526<TuplifyUnion12526<Exclude<T, L>>, L>;

type DeepPartial12526<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12526<T[P]> }
  : T;

type Paths12526<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12526<K, Paths12526<T[K], Prev12526[D]>> : never }[keyof T]
  : never;

type Prev12526 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12526<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12526 {
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

type ConfigPaths12526 = Paths12526<NestedConfig12526>;

interface HeavyProps12526 {
  config: DeepPartial12526<NestedConfig12526>;
  path?: ConfigPaths12526;
}

const HeavyComponent12526 = memo(function HeavyComponent12526({ config }: HeavyProps12526) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12526) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12526 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12526: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12526.displayName = 'HeavyComponent12526';
export default HeavyComponent12526;
