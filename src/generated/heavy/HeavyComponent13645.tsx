'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13645<T> = T extends (infer U)[]
  ? DeepReadonlyArray13645<U>
  : T extends object
  ? DeepReadonlyObject13645<T>
  : T;

interface DeepReadonlyArray13645<T> extends ReadonlyArray<DeepReadonly13645<T>> {}

type DeepReadonlyObject13645<T> = {
  readonly [P in keyof T]: DeepReadonly13645<T[P]>;
};

type UnionToIntersection13645<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13645<T> = UnionToIntersection13645<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13645<T extends unknown[], V> = [...T, V];

type TuplifyUnion13645<T, L = LastOf13645<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13645<TuplifyUnion13645<Exclude<T, L>>, L>;

type DeepPartial13645<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13645<T[P]> }
  : T;

type Paths13645<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13645<K, Paths13645<T[K], Prev13645[D]>> : never }[keyof T]
  : never;

type Prev13645 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13645<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13645 {
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

type ConfigPaths13645 = Paths13645<NestedConfig13645>;

interface HeavyProps13645 {
  config: DeepPartial13645<NestedConfig13645>;
  path?: ConfigPaths13645;
}

const HeavyComponent13645 = memo(function HeavyComponent13645({ config }: HeavyProps13645) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13645) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13645 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13645: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13645.displayName = 'HeavyComponent13645';
export default HeavyComponent13645;
