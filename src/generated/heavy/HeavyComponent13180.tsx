'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13180<T> = T extends (infer U)[]
  ? DeepReadonlyArray13180<U>
  : T extends object
  ? DeepReadonlyObject13180<T>
  : T;

interface DeepReadonlyArray13180<T> extends ReadonlyArray<DeepReadonly13180<T>> {}

type DeepReadonlyObject13180<T> = {
  readonly [P in keyof T]: DeepReadonly13180<T[P]>;
};

type UnionToIntersection13180<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13180<T> = UnionToIntersection13180<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13180<T extends unknown[], V> = [...T, V];

type TuplifyUnion13180<T, L = LastOf13180<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13180<TuplifyUnion13180<Exclude<T, L>>, L>;

type DeepPartial13180<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13180<T[P]> }
  : T;

type Paths13180<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13180<K, Paths13180<T[K], Prev13180[D]>> : never }[keyof T]
  : never;

type Prev13180 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13180<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13180 {
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

type ConfigPaths13180 = Paths13180<NestedConfig13180>;

interface HeavyProps13180 {
  config: DeepPartial13180<NestedConfig13180>;
  path?: ConfigPaths13180;
}

const HeavyComponent13180 = memo(function HeavyComponent13180({ config }: HeavyProps13180) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13180) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13180 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13180: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13180.displayName = 'HeavyComponent13180';
export default HeavyComponent13180;
