'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13292<T> = T extends (infer U)[]
  ? DeepReadonlyArray13292<U>
  : T extends object
  ? DeepReadonlyObject13292<T>
  : T;

interface DeepReadonlyArray13292<T> extends ReadonlyArray<DeepReadonly13292<T>> {}

type DeepReadonlyObject13292<T> = {
  readonly [P in keyof T]: DeepReadonly13292<T[P]>;
};

type UnionToIntersection13292<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13292<T> = UnionToIntersection13292<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13292<T extends unknown[], V> = [...T, V];

type TuplifyUnion13292<T, L = LastOf13292<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13292<TuplifyUnion13292<Exclude<T, L>>, L>;

type DeepPartial13292<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13292<T[P]> }
  : T;

type Paths13292<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13292<K, Paths13292<T[K], Prev13292[D]>> : never }[keyof T]
  : never;

type Prev13292 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13292<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13292 {
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

type ConfigPaths13292 = Paths13292<NestedConfig13292>;

interface HeavyProps13292 {
  config: DeepPartial13292<NestedConfig13292>;
  path?: ConfigPaths13292;
}

const HeavyComponent13292 = memo(function HeavyComponent13292({ config }: HeavyProps13292) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13292) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13292 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13292: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13292.displayName = 'HeavyComponent13292';
export default HeavyComponent13292;
