'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12598<T> = T extends (infer U)[]
  ? DeepReadonlyArray12598<U>
  : T extends object
  ? DeepReadonlyObject12598<T>
  : T;

interface DeepReadonlyArray12598<T> extends ReadonlyArray<DeepReadonly12598<T>> {}

type DeepReadonlyObject12598<T> = {
  readonly [P in keyof T]: DeepReadonly12598<T[P]>;
};

type UnionToIntersection12598<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12598<T> = UnionToIntersection12598<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12598<T extends unknown[], V> = [...T, V];

type TuplifyUnion12598<T, L = LastOf12598<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12598<TuplifyUnion12598<Exclude<T, L>>, L>;

type DeepPartial12598<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12598<T[P]> }
  : T;

type Paths12598<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12598<K, Paths12598<T[K], Prev12598[D]>> : never }[keyof T]
  : never;

type Prev12598 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12598<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12598 {
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

type ConfigPaths12598 = Paths12598<NestedConfig12598>;

interface HeavyProps12598 {
  config: DeepPartial12598<NestedConfig12598>;
  path?: ConfigPaths12598;
}

const HeavyComponent12598 = memo(function HeavyComponent12598({ config }: HeavyProps12598) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12598) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12598 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12598: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12598.displayName = 'HeavyComponent12598';
export default HeavyComponent12598;
