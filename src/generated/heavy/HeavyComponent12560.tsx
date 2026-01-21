'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12560<T> = T extends (infer U)[]
  ? DeepReadonlyArray12560<U>
  : T extends object
  ? DeepReadonlyObject12560<T>
  : T;

interface DeepReadonlyArray12560<T> extends ReadonlyArray<DeepReadonly12560<T>> {}

type DeepReadonlyObject12560<T> = {
  readonly [P in keyof T]: DeepReadonly12560<T[P]>;
};

type UnionToIntersection12560<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12560<T> = UnionToIntersection12560<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12560<T extends unknown[], V> = [...T, V];

type TuplifyUnion12560<T, L = LastOf12560<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12560<TuplifyUnion12560<Exclude<T, L>>, L>;

type DeepPartial12560<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12560<T[P]> }
  : T;

type Paths12560<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12560<K, Paths12560<T[K], Prev12560[D]>> : never }[keyof T]
  : never;

type Prev12560 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12560<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12560 {
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

type ConfigPaths12560 = Paths12560<NestedConfig12560>;

interface HeavyProps12560 {
  config: DeepPartial12560<NestedConfig12560>;
  path?: ConfigPaths12560;
}

const HeavyComponent12560 = memo(function HeavyComponent12560({ config }: HeavyProps12560) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12560) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12560 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12560: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12560.displayName = 'HeavyComponent12560';
export default HeavyComponent12560;
