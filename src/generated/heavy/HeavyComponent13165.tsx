'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13165<T> = T extends (infer U)[]
  ? DeepReadonlyArray13165<U>
  : T extends object
  ? DeepReadonlyObject13165<T>
  : T;

interface DeepReadonlyArray13165<T> extends ReadonlyArray<DeepReadonly13165<T>> {}

type DeepReadonlyObject13165<T> = {
  readonly [P in keyof T]: DeepReadonly13165<T[P]>;
};

type UnionToIntersection13165<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13165<T> = UnionToIntersection13165<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13165<T extends unknown[], V> = [...T, V];

type TuplifyUnion13165<T, L = LastOf13165<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13165<TuplifyUnion13165<Exclude<T, L>>, L>;

type DeepPartial13165<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13165<T[P]> }
  : T;

type Paths13165<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13165<K, Paths13165<T[K], Prev13165[D]>> : never }[keyof T]
  : never;

type Prev13165 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13165<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13165 {
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

type ConfigPaths13165 = Paths13165<NestedConfig13165>;

interface HeavyProps13165 {
  config: DeepPartial13165<NestedConfig13165>;
  path?: ConfigPaths13165;
}

const HeavyComponent13165 = memo(function HeavyComponent13165({ config }: HeavyProps13165) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13165) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13165 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13165: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13165.displayName = 'HeavyComponent13165';
export default HeavyComponent13165;
