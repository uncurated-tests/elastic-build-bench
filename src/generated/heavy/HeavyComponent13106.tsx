'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13106<T> = T extends (infer U)[]
  ? DeepReadonlyArray13106<U>
  : T extends object
  ? DeepReadonlyObject13106<T>
  : T;

interface DeepReadonlyArray13106<T> extends ReadonlyArray<DeepReadonly13106<T>> {}

type DeepReadonlyObject13106<T> = {
  readonly [P in keyof T]: DeepReadonly13106<T[P]>;
};

type UnionToIntersection13106<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13106<T> = UnionToIntersection13106<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13106<T extends unknown[], V> = [...T, V];

type TuplifyUnion13106<T, L = LastOf13106<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13106<TuplifyUnion13106<Exclude<T, L>>, L>;

type DeepPartial13106<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13106<T[P]> }
  : T;

type Paths13106<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13106<K, Paths13106<T[K], Prev13106[D]>> : never }[keyof T]
  : never;

type Prev13106 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13106<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13106 {
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

type ConfigPaths13106 = Paths13106<NestedConfig13106>;

interface HeavyProps13106 {
  config: DeepPartial13106<NestedConfig13106>;
  path?: ConfigPaths13106;
}

const HeavyComponent13106 = memo(function HeavyComponent13106({ config }: HeavyProps13106) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13106) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13106 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13106: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13106.displayName = 'HeavyComponent13106';
export default HeavyComponent13106;
