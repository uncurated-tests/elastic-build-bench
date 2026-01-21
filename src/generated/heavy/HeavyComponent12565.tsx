'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12565<T> = T extends (infer U)[]
  ? DeepReadonlyArray12565<U>
  : T extends object
  ? DeepReadonlyObject12565<T>
  : T;

interface DeepReadonlyArray12565<T> extends ReadonlyArray<DeepReadonly12565<T>> {}

type DeepReadonlyObject12565<T> = {
  readonly [P in keyof T]: DeepReadonly12565<T[P]>;
};

type UnionToIntersection12565<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12565<T> = UnionToIntersection12565<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12565<T extends unknown[], V> = [...T, V];

type TuplifyUnion12565<T, L = LastOf12565<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12565<TuplifyUnion12565<Exclude<T, L>>, L>;

type DeepPartial12565<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12565<T[P]> }
  : T;

type Paths12565<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12565<K, Paths12565<T[K], Prev12565[D]>> : never }[keyof T]
  : never;

type Prev12565 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12565<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12565 {
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

type ConfigPaths12565 = Paths12565<NestedConfig12565>;

interface HeavyProps12565 {
  config: DeepPartial12565<NestedConfig12565>;
  path?: ConfigPaths12565;
}

const HeavyComponent12565 = memo(function HeavyComponent12565({ config }: HeavyProps12565) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12565) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12565 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12565: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12565.displayName = 'HeavyComponent12565';
export default HeavyComponent12565;
