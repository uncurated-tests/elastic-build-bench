'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12517<T> = T extends (infer U)[]
  ? DeepReadonlyArray12517<U>
  : T extends object
  ? DeepReadonlyObject12517<T>
  : T;

interface DeepReadonlyArray12517<T> extends ReadonlyArray<DeepReadonly12517<T>> {}

type DeepReadonlyObject12517<T> = {
  readonly [P in keyof T]: DeepReadonly12517<T[P]>;
};

type UnionToIntersection12517<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12517<T> = UnionToIntersection12517<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12517<T extends unknown[], V> = [...T, V];

type TuplifyUnion12517<T, L = LastOf12517<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12517<TuplifyUnion12517<Exclude<T, L>>, L>;

type DeepPartial12517<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12517<T[P]> }
  : T;

type Paths12517<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12517<K, Paths12517<T[K], Prev12517[D]>> : never }[keyof T]
  : never;

type Prev12517 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12517<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12517 {
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

type ConfigPaths12517 = Paths12517<NestedConfig12517>;

interface HeavyProps12517 {
  config: DeepPartial12517<NestedConfig12517>;
  path?: ConfigPaths12517;
}

const HeavyComponent12517 = memo(function HeavyComponent12517({ config }: HeavyProps12517) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12517) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12517 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12517: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12517.displayName = 'HeavyComponent12517';
export default HeavyComponent12517;
