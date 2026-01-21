'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13410<T> = T extends (infer U)[]
  ? DeepReadonlyArray13410<U>
  : T extends object
  ? DeepReadonlyObject13410<T>
  : T;

interface DeepReadonlyArray13410<T> extends ReadonlyArray<DeepReadonly13410<T>> {}

type DeepReadonlyObject13410<T> = {
  readonly [P in keyof T]: DeepReadonly13410<T[P]>;
};

type UnionToIntersection13410<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13410<T> = UnionToIntersection13410<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13410<T extends unknown[], V> = [...T, V];

type TuplifyUnion13410<T, L = LastOf13410<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13410<TuplifyUnion13410<Exclude<T, L>>, L>;

type DeepPartial13410<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13410<T[P]> }
  : T;

type Paths13410<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13410<K, Paths13410<T[K], Prev13410[D]>> : never }[keyof T]
  : never;

type Prev13410 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13410<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13410 {
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

type ConfigPaths13410 = Paths13410<NestedConfig13410>;

interface HeavyProps13410 {
  config: DeepPartial13410<NestedConfig13410>;
  path?: ConfigPaths13410;
}

const HeavyComponent13410 = memo(function HeavyComponent13410({ config }: HeavyProps13410) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13410) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13410 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13410: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13410.displayName = 'HeavyComponent13410';
export default HeavyComponent13410;
