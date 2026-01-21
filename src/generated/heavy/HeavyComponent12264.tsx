'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12264<T> = T extends (infer U)[]
  ? DeepReadonlyArray12264<U>
  : T extends object
  ? DeepReadonlyObject12264<T>
  : T;

interface DeepReadonlyArray12264<T> extends ReadonlyArray<DeepReadonly12264<T>> {}

type DeepReadonlyObject12264<T> = {
  readonly [P in keyof T]: DeepReadonly12264<T[P]>;
};

type UnionToIntersection12264<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12264<T> = UnionToIntersection12264<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12264<T extends unknown[], V> = [...T, V];

type TuplifyUnion12264<T, L = LastOf12264<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12264<TuplifyUnion12264<Exclude<T, L>>, L>;

type DeepPartial12264<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12264<T[P]> }
  : T;

type Paths12264<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12264<K, Paths12264<T[K], Prev12264[D]>> : never }[keyof T]
  : never;

type Prev12264 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12264<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12264 {
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

type ConfigPaths12264 = Paths12264<NestedConfig12264>;

interface HeavyProps12264 {
  config: DeepPartial12264<NestedConfig12264>;
  path?: ConfigPaths12264;
}

const HeavyComponent12264 = memo(function HeavyComponent12264({ config }: HeavyProps12264) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12264) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12264 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12264: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12264.displayName = 'HeavyComponent12264';
export default HeavyComponent12264;
