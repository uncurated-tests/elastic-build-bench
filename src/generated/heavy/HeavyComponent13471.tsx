'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13471<T> = T extends (infer U)[]
  ? DeepReadonlyArray13471<U>
  : T extends object
  ? DeepReadonlyObject13471<T>
  : T;

interface DeepReadonlyArray13471<T> extends ReadonlyArray<DeepReadonly13471<T>> {}

type DeepReadonlyObject13471<T> = {
  readonly [P in keyof T]: DeepReadonly13471<T[P]>;
};

type UnionToIntersection13471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13471<T> = UnionToIntersection13471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13471<T extends unknown[], V> = [...T, V];

type TuplifyUnion13471<T, L = LastOf13471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13471<TuplifyUnion13471<Exclude<T, L>>, L>;

type DeepPartial13471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13471<T[P]> }
  : T;

type Paths13471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13471<K, Paths13471<T[K], Prev13471[D]>> : never }[keyof T]
  : never;

type Prev13471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13471 {
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

type ConfigPaths13471 = Paths13471<NestedConfig13471>;

interface HeavyProps13471 {
  config: DeepPartial13471<NestedConfig13471>;
  path?: ConfigPaths13471;
}

const HeavyComponent13471 = memo(function HeavyComponent13471({ config }: HeavyProps13471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13471.displayName = 'HeavyComponent13471';
export default HeavyComponent13471;
