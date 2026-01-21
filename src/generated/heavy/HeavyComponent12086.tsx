'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12086<T> = T extends (infer U)[]
  ? DeepReadonlyArray12086<U>
  : T extends object
  ? DeepReadonlyObject12086<T>
  : T;

interface DeepReadonlyArray12086<T> extends ReadonlyArray<DeepReadonly12086<T>> {}

type DeepReadonlyObject12086<T> = {
  readonly [P in keyof T]: DeepReadonly12086<T[P]>;
};

type UnionToIntersection12086<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12086<T> = UnionToIntersection12086<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12086<T extends unknown[], V> = [...T, V];

type TuplifyUnion12086<T, L = LastOf12086<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12086<TuplifyUnion12086<Exclude<T, L>>, L>;

type DeepPartial12086<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12086<T[P]> }
  : T;

type Paths12086<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12086<K, Paths12086<T[K], Prev12086[D]>> : never }[keyof T]
  : never;

type Prev12086 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12086<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12086 {
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

type ConfigPaths12086 = Paths12086<NestedConfig12086>;

interface HeavyProps12086 {
  config: DeepPartial12086<NestedConfig12086>;
  path?: ConfigPaths12086;
}

const HeavyComponent12086 = memo(function HeavyComponent12086({ config }: HeavyProps12086) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12086) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12086 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12086: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12086.displayName = 'HeavyComponent12086';
export default HeavyComponent12086;
