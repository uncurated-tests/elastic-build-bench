'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13569<T> = T extends (infer U)[]
  ? DeepReadonlyArray13569<U>
  : T extends object
  ? DeepReadonlyObject13569<T>
  : T;

interface DeepReadonlyArray13569<T> extends ReadonlyArray<DeepReadonly13569<T>> {}

type DeepReadonlyObject13569<T> = {
  readonly [P in keyof T]: DeepReadonly13569<T[P]>;
};

type UnionToIntersection13569<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13569<T> = UnionToIntersection13569<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13569<T extends unknown[], V> = [...T, V];

type TuplifyUnion13569<T, L = LastOf13569<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13569<TuplifyUnion13569<Exclude<T, L>>, L>;

type DeepPartial13569<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13569<T[P]> }
  : T;

type Paths13569<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13569<K, Paths13569<T[K], Prev13569[D]>> : never }[keyof T]
  : never;

type Prev13569 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13569<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13569 {
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

type ConfigPaths13569 = Paths13569<NestedConfig13569>;

interface HeavyProps13569 {
  config: DeepPartial13569<NestedConfig13569>;
  path?: ConfigPaths13569;
}

const HeavyComponent13569 = memo(function HeavyComponent13569({ config }: HeavyProps13569) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13569) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13569 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13569: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13569.displayName = 'HeavyComponent13569';
export default HeavyComponent13569;
