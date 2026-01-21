'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12973<T> = T extends (infer U)[]
  ? DeepReadonlyArray12973<U>
  : T extends object
  ? DeepReadonlyObject12973<T>
  : T;

interface DeepReadonlyArray12973<T> extends ReadonlyArray<DeepReadonly12973<T>> {}

type DeepReadonlyObject12973<T> = {
  readonly [P in keyof T]: DeepReadonly12973<T[P]>;
};

type UnionToIntersection12973<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12973<T> = UnionToIntersection12973<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12973<T extends unknown[], V> = [...T, V];

type TuplifyUnion12973<T, L = LastOf12973<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12973<TuplifyUnion12973<Exclude<T, L>>, L>;

type DeepPartial12973<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12973<T[P]> }
  : T;

type Paths12973<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12973<K, Paths12973<T[K], Prev12973[D]>> : never }[keyof T]
  : never;

type Prev12973 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12973<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12973 {
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

type ConfigPaths12973 = Paths12973<NestedConfig12973>;

interface HeavyProps12973 {
  config: DeepPartial12973<NestedConfig12973>;
  path?: ConfigPaths12973;
}

const HeavyComponent12973 = memo(function HeavyComponent12973({ config }: HeavyProps12973) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12973) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12973 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12973: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12973.displayName = 'HeavyComponent12973';
export default HeavyComponent12973;
