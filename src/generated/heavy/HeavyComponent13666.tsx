'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13666<T> = T extends (infer U)[]
  ? DeepReadonlyArray13666<U>
  : T extends object
  ? DeepReadonlyObject13666<T>
  : T;

interface DeepReadonlyArray13666<T> extends ReadonlyArray<DeepReadonly13666<T>> {}

type DeepReadonlyObject13666<T> = {
  readonly [P in keyof T]: DeepReadonly13666<T[P]>;
};

type UnionToIntersection13666<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13666<T> = UnionToIntersection13666<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13666<T extends unknown[], V> = [...T, V];

type TuplifyUnion13666<T, L = LastOf13666<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13666<TuplifyUnion13666<Exclude<T, L>>, L>;

type DeepPartial13666<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13666<T[P]> }
  : T;

type Paths13666<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13666<K, Paths13666<T[K], Prev13666[D]>> : never }[keyof T]
  : never;

type Prev13666 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13666<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13666 {
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

type ConfigPaths13666 = Paths13666<NestedConfig13666>;

interface HeavyProps13666 {
  config: DeepPartial13666<NestedConfig13666>;
  path?: ConfigPaths13666;
}

const HeavyComponent13666 = memo(function HeavyComponent13666({ config }: HeavyProps13666) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13666) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13666 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13666: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13666.displayName = 'HeavyComponent13666';
export default HeavyComponent13666;
