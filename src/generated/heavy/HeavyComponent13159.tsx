'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13159<T> = T extends (infer U)[]
  ? DeepReadonlyArray13159<U>
  : T extends object
  ? DeepReadonlyObject13159<T>
  : T;

interface DeepReadonlyArray13159<T> extends ReadonlyArray<DeepReadonly13159<T>> {}

type DeepReadonlyObject13159<T> = {
  readonly [P in keyof T]: DeepReadonly13159<T[P]>;
};

type UnionToIntersection13159<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13159<T> = UnionToIntersection13159<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13159<T extends unknown[], V> = [...T, V];

type TuplifyUnion13159<T, L = LastOf13159<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13159<TuplifyUnion13159<Exclude<T, L>>, L>;

type DeepPartial13159<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13159<T[P]> }
  : T;

type Paths13159<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13159<K, Paths13159<T[K], Prev13159[D]>> : never }[keyof T]
  : never;

type Prev13159 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13159<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13159 {
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

type ConfigPaths13159 = Paths13159<NestedConfig13159>;

interface HeavyProps13159 {
  config: DeepPartial13159<NestedConfig13159>;
  path?: ConfigPaths13159;
}

const HeavyComponent13159 = memo(function HeavyComponent13159({ config }: HeavyProps13159) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13159) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13159 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13159: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13159.displayName = 'HeavyComponent13159';
export default HeavyComponent13159;
