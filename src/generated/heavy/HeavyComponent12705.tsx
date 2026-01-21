'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12705<T> = T extends (infer U)[]
  ? DeepReadonlyArray12705<U>
  : T extends object
  ? DeepReadonlyObject12705<T>
  : T;

interface DeepReadonlyArray12705<T> extends ReadonlyArray<DeepReadonly12705<T>> {}

type DeepReadonlyObject12705<T> = {
  readonly [P in keyof T]: DeepReadonly12705<T[P]>;
};

type UnionToIntersection12705<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12705<T> = UnionToIntersection12705<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12705<T extends unknown[], V> = [...T, V];

type TuplifyUnion12705<T, L = LastOf12705<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12705<TuplifyUnion12705<Exclude<T, L>>, L>;

type DeepPartial12705<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12705<T[P]> }
  : T;

type Paths12705<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12705<K, Paths12705<T[K], Prev12705[D]>> : never }[keyof T]
  : never;

type Prev12705 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12705<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12705 {
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

type ConfigPaths12705 = Paths12705<NestedConfig12705>;

interface HeavyProps12705 {
  config: DeepPartial12705<NestedConfig12705>;
  path?: ConfigPaths12705;
}

const HeavyComponent12705 = memo(function HeavyComponent12705({ config }: HeavyProps12705) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12705) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12705 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12705: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12705.displayName = 'HeavyComponent12705';
export default HeavyComponent12705;
