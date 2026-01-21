'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12225<T> = T extends (infer U)[]
  ? DeepReadonlyArray12225<U>
  : T extends object
  ? DeepReadonlyObject12225<T>
  : T;

interface DeepReadonlyArray12225<T> extends ReadonlyArray<DeepReadonly12225<T>> {}

type DeepReadonlyObject12225<T> = {
  readonly [P in keyof T]: DeepReadonly12225<T[P]>;
};

type UnionToIntersection12225<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12225<T> = UnionToIntersection12225<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12225<T extends unknown[], V> = [...T, V];

type TuplifyUnion12225<T, L = LastOf12225<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12225<TuplifyUnion12225<Exclude<T, L>>, L>;

type DeepPartial12225<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12225<T[P]> }
  : T;

type Paths12225<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12225<K, Paths12225<T[K], Prev12225[D]>> : never }[keyof T]
  : never;

type Prev12225 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12225<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12225 {
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

type ConfigPaths12225 = Paths12225<NestedConfig12225>;

interface HeavyProps12225 {
  config: DeepPartial12225<NestedConfig12225>;
  path?: ConfigPaths12225;
}

const HeavyComponent12225 = memo(function HeavyComponent12225({ config }: HeavyProps12225) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12225) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12225 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12225: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12225.displayName = 'HeavyComponent12225';
export default HeavyComponent12225;
