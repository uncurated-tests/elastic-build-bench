'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13385<T> = T extends (infer U)[]
  ? DeepReadonlyArray13385<U>
  : T extends object
  ? DeepReadonlyObject13385<T>
  : T;

interface DeepReadonlyArray13385<T> extends ReadonlyArray<DeepReadonly13385<T>> {}

type DeepReadonlyObject13385<T> = {
  readonly [P in keyof T]: DeepReadonly13385<T[P]>;
};

type UnionToIntersection13385<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13385<T> = UnionToIntersection13385<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13385<T extends unknown[], V> = [...T, V];

type TuplifyUnion13385<T, L = LastOf13385<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13385<TuplifyUnion13385<Exclude<T, L>>, L>;

type DeepPartial13385<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13385<T[P]> }
  : T;

type Paths13385<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13385<K, Paths13385<T[K], Prev13385[D]>> : never }[keyof T]
  : never;

type Prev13385 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13385<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13385 {
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

type ConfigPaths13385 = Paths13385<NestedConfig13385>;

interface HeavyProps13385 {
  config: DeepPartial13385<NestedConfig13385>;
  path?: ConfigPaths13385;
}

const HeavyComponent13385 = memo(function HeavyComponent13385({ config }: HeavyProps13385) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13385) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13385 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13385: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13385.displayName = 'HeavyComponent13385';
export default HeavyComponent13385;
