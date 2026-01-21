'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12472<T> = T extends (infer U)[]
  ? DeepReadonlyArray12472<U>
  : T extends object
  ? DeepReadonlyObject12472<T>
  : T;

interface DeepReadonlyArray12472<T> extends ReadonlyArray<DeepReadonly12472<T>> {}

type DeepReadonlyObject12472<T> = {
  readonly [P in keyof T]: DeepReadonly12472<T[P]>;
};

type UnionToIntersection12472<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12472<T> = UnionToIntersection12472<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12472<T extends unknown[], V> = [...T, V];

type TuplifyUnion12472<T, L = LastOf12472<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12472<TuplifyUnion12472<Exclude<T, L>>, L>;

type DeepPartial12472<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12472<T[P]> }
  : T;

type Paths12472<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12472<K, Paths12472<T[K], Prev12472[D]>> : never }[keyof T]
  : never;

type Prev12472 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12472<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12472 {
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

type ConfigPaths12472 = Paths12472<NestedConfig12472>;

interface HeavyProps12472 {
  config: DeepPartial12472<NestedConfig12472>;
  path?: ConfigPaths12472;
}

const HeavyComponent12472 = memo(function HeavyComponent12472({ config }: HeavyProps12472) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12472) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12472 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12472: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12472.displayName = 'HeavyComponent12472';
export default HeavyComponent12472;
