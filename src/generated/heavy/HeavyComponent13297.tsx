'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13297<T> = T extends (infer U)[]
  ? DeepReadonlyArray13297<U>
  : T extends object
  ? DeepReadonlyObject13297<T>
  : T;

interface DeepReadonlyArray13297<T> extends ReadonlyArray<DeepReadonly13297<T>> {}

type DeepReadonlyObject13297<T> = {
  readonly [P in keyof T]: DeepReadonly13297<T[P]>;
};

type UnionToIntersection13297<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13297<T> = UnionToIntersection13297<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13297<T extends unknown[], V> = [...T, V];

type TuplifyUnion13297<T, L = LastOf13297<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13297<TuplifyUnion13297<Exclude<T, L>>, L>;

type DeepPartial13297<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13297<T[P]> }
  : T;

type Paths13297<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13297<K, Paths13297<T[K], Prev13297[D]>> : never }[keyof T]
  : never;

type Prev13297 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13297<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13297 {
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

type ConfigPaths13297 = Paths13297<NestedConfig13297>;

interface HeavyProps13297 {
  config: DeepPartial13297<NestedConfig13297>;
  path?: ConfigPaths13297;
}

const HeavyComponent13297 = memo(function HeavyComponent13297({ config }: HeavyProps13297) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13297) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13297 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13297: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13297.displayName = 'HeavyComponent13297';
export default HeavyComponent13297;
