'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13063<T> = T extends (infer U)[]
  ? DeepReadonlyArray13063<U>
  : T extends object
  ? DeepReadonlyObject13063<T>
  : T;

interface DeepReadonlyArray13063<T> extends ReadonlyArray<DeepReadonly13063<T>> {}

type DeepReadonlyObject13063<T> = {
  readonly [P in keyof T]: DeepReadonly13063<T[P]>;
};

type UnionToIntersection13063<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13063<T> = UnionToIntersection13063<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13063<T extends unknown[], V> = [...T, V];

type TuplifyUnion13063<T, L = LastOf13063<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13063<TuplifyUnion13063<Exclude<T, L>>, L>;

type DeepPartial13063<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13063<T[P]> }
  : T;

type Paths13063<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13063<K, Paths13063<T[K], Prev13063[D]>> : never }[keyof T]
  : never;

type Prev13063 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13063<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13063 {
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

type ConfigPaths13063 = Paths13063<NestedConfig13063>;

interface HeavyProps13063 {
  config: DeepPartial13063<NestedConfig13063>;
  path?: ConfigPaths13063;
}

const HeavyComponent13063 = memo(function HeavyComponent13063({ config }: HeavyProps13063) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13063) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13063 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13063: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13063.displayName = 'HeavyComponent13063';
export default HeavyComponent13063;
