'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13581<T> = T extends (infer U)[]
  ? DeepReadonlyArray13581<U>
  : T extends object
  ? DeepReadonlyObject13581<T>
  : T;

interface DeepReadonlyArray13581<T> extends ReadonlyArray<DeepReadonly13581<T>> {}

type DeepReadonlyObject13581<T> = {
  readonly [P in keyof T]: DeepReadonly13581<T[P]>;
};

type UnionToIntersection13581<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13581<T> = UnionToIntersection13581<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13581<T extends unknown[], V> = [...T, V];

type TuplifyUnion13581<T, L = LastOf13581<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13581<TuplifyUnion13581<Exclude<T, L>>, L>;

type DeepPartial13581<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13581<T[P]> }
  : T;

type Paths13581<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13581<K, Paths13581<T[K], Prev13581[D]>> : never }[keyof T]
  : never;

type Prev13581 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13581<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13581 {
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

type ConfigPaths13581 = Paths13581<NestedConfig13581>;

interface HeavyProps13581 {
  config: DeepPartial13581<NestedConfig13581>;
  path?: ConfigPaths13581;
}

const HeavyComponent13581 = memo(function HeavyComponent13581({ config }: HeavyProps13581) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13581) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13581 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13581: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13581.displayName = 'HeavyComponent13581';
export default HeavyComponent13581;
