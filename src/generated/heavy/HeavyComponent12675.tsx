'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12675<T> = T extends (infer U)[]
  ? DeepReadonlyArray12675<U>
  : T extends object
  ? DeepReadonlyObject12675<T>
  : T;

interface DeepReadonlyArray12675<T> extends ReadonlyArray<DeepReadonly12675<T>> {}

type DeepReadonlyObject12675<T> = {
  readonly [P in keyof T]: DeepReadonly12675<T[P]>;
};

type UnionToIntersection12675<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12675<T> = UnionToIntersection12675<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12675<T extends unknown[], V> = [...T, V];

type TuplifyUnion12675<T, L = LastOf12675<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12675<TuplifyUnion12675<Exclude<T, L>>, L>;

type DeepPartial12675<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12675<T[P]> }
  : T;

type Paths12675<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12675<K, Paths12675<T[K], Prev12675[D]>> : never }[keyof T]
  : never;

type Prev12675 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12675<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12675 {
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

type ConfigPaths12675 = Paths12675<NestedConfig12675>;

interface HeavyProps12675 {
  config: DeepPartial12675<NestedConfig12675>;
  path?: ConfigPaths12675;
}

const HeavyComponent12675 = memo(function HeavyComponent12675({ config }: HeavyProps12675) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12675) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12675 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12675: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12675.displayName = 'HeavyComponent12675';
export default HeavyComponent12675;
