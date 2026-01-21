'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13188<T> = T extends (infer U)[]
  ? DeepReadonlyArray13188<U>
  : T extends object
  ? DeepReadonlyObject13188<T>
  : T;

interface DeepReadonlyArray13188<T> extends ReadonlyArray<DeepReadonly13188<T>> {}

type DeepReadonlyObject13188<T> = {
  readonly [P in keyof T]: DeepReadonly13188<T[P]>;
};

type UnionToIntersection13188<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13188<T> = UnionToIntersection13188<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13188<T extends unknown[], V> = [...T, V];

type TuplifyUnion13188<T, L = LastOf13188<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13188<TuplifyUnion13188<Exclude<T, L>>, L>;

type DeepPartial13188<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13188<T[P]> }
  : T;

type Paths13188<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13188<K, Paths13188<T[K], Prev13188[D]>> : never }[keyof T]
  : never;

type Prev13188 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13188<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13188 {
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

type ConfigPaths13188 = Paths13188<NestedConfig13188>;

interface HeavyProps13188 {
  config: DeepPartial13188<NestedConfig13188>;
  path?: ConfigPaths13188;
}

const HeavyComponent13188 = memo(function HeavyComponent13188({ config }: HeavyProps13188) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13188) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13188 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13188: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13188.displayName = 'HeavyComponent13188';
export default HeavyComponent13188;
