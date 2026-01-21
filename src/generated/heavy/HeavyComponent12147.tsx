'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12147<T> = T extends (infer U)[]
  ? DeepReadonlyArray12147<U>
  : T extends object
  ? DeepReadonlyObject12147<T>
  : T;

interface DeepReadonlyArray12147<T> extends ReadonlyArray<DeepReadonly12147<T>> {}

type DeepReadonlyObject12147<T> = {
  readonly [P in keyof T]: DeepReadonly12147<T[P]>;
};

type UnionToIntersection12147<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12147<T> = UnionToIntersection12147<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12147<T extends unknown[], V> = [...T, V];

type TuplifyUnion12147<T, L = LastOf12147<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12147<TuplifyUnion12147<Exclude<T, L>>, L>;

type DeepPartial12147<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12147<T[P]> }
  : T;

type Paths12147<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12147<K, Paths12147<T[K], Prev12147[D]>> : never }[keyof T]
  : never;

type Prev12147 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12147<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12147 {
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

type ConfigPaths12147 = Paths12147<NestedConfig12147>;

interface HeavyProps12147 {
  config: DeepPartial12147<NestedConfig12147>;
  path?: ConfigPaths12147;
}

const HeavyComponent12147 = memo(function HeavyComponent12147({ config }: HeavyProps12147) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12147) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12147 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12147: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12147.displayName = 'HeavyComponent12147';
export default HeavyComponent12147;
