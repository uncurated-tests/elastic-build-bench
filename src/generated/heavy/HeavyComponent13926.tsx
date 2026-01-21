'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13926<T> = T extends (infer U)[]
  ? DeepReadonlyArray13926<U>
  : T extends object
  ? DeepReadonlyObject13926<T>
  : T;

interface DeepReadonlyArray13926<T> extends ReadonlyArray<DeepReadonly13926<T>> {}

type DeepReadonlyObject13926<T> = {
  readonly [P in keyof T]: DeepReadonly13926<T[P]>;
};

type UnionToIntersection13926<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13926<T> = UnionToIntersection13926<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13926<T extends unknown[], V> = [...T, V];

type TuplifyUnion13926<T, L = LastOf13926<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13926<TuplifyUnion13926<Exclude<T, L>>, L>;

type DeepPartial13926<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13926<T[P]> }
  : T;

type Paths13926<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13926<K, Paths13926<T[K], Prev13926[D]>> : never }[keyof T]
  : never;

type Prev13926 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13926<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13926 {
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

type ConfigPaths13926 = Paths13926<NestedConfig13926>;

interface HeavyProps13926 {
  config: DeepPartial13926<NestedConfig13926>;
  path?: ConfigPaths13926;
}

const HeavyComponent13926 = memo(function HeavyComponent13926({ config }: HeavyProps13926) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13926) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13926 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13926: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13926.displayName = 'HeavyComponent13926';
export default HeavyComponent13926;
