'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13317<T> = T extends (infer U)[]
  ? DeepReadonlyArray13317<U>
  : T extends object
  ? DeepReadonlyObject13317<T>
  : T;

interface DeepReadonlyArray13317<T> extends ReadonlyArray<DeepReadonly13317<T>> {}

type DeepReadonlyObject13317<T> = {
  readonly [P in keyof T]: DeepReadonly13317<T[P]>;
};

type UnionToIntersection13317<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13317<T> = UnionToIntersection13317<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13317<T extends unknown[], V> = [...T, V];

type TuplifyUnion13317<T, L = LastOf13317<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13317<TuplifyUnion13317<Exclude<T, L>>, L>;

type DeepPartial13317<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13317<T[P]> }
  : T;

type Paths13317<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13317<K, Paths13317<T[K], Prev13317[D]>> : never }[keyof T]
  : never;

type Prev13317 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13317<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13317 {
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

type ConfigPaths13317 = Paths13317<NestedConfig13317>;

interface HeavyProps13317 {
  config: DeepPartial13317<NestedConfig13317>;
  path?: ConfigPaths13317;
}

const HeavyComponent13317 = memo(function HeavyComponent13317({ config }: HeavyProps13317) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13317) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13317 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13317: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13317.displayName = 'HeavyComponent13317';
export default HeavyComponent13317;
