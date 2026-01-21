'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13284<T> = T extends (infer U)[]
  ? DeepReadonlyArray13284<U>
  : T extends object
  ? DeepReadonlyObject13284<T>
  : T;

interface DeepReadonlyArray13284<T> extends ReadonlyArray<DeepReadonly13284<T>> {}

type DeepReadonlyObject13284<T> = {
  readonly [P in keyof T]: DeepReadonly13284<T[P]>;
};

type UnionToIntersection13284<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13284<T> = UnionToIntersection13284<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13284<T extends unknown[], V> = [...T, V];

type TuplifyUnion13284<T, L = LastOf13284<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13284<TuplifyUnion13284<Exclude<T, L>>, L>;

type DeepPartial13284<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13284<T[P]> }
  : T;

type Paths13284<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13284<K, Paths13284<T[K], Prev13284[D]>> : never }[keyof T]
  : never;

type Prev13284 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13284<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13284 {
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

type ConfigPaths13284 = Paths13284<NestedConfig13284>;

interface HeavyProps13284 {
  config: DeepPartial13284<NestedConfig13284>;
  path?: ConfigPaths13284;
}

const HeavyComponent13284 = memo(function HeavyComponent13284({ config }: HeavyProps13284) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13284) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13284 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13284: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13284.displayName = 'HeavyComponent13284';
export default HeavyComponent13284;
