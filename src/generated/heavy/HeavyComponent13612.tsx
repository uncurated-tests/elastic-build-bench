'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13612<T> = T extends (infer U)[]
  ? DeepReadonlyArray13612<U>
  : T extends object
  ? DeepReadonlyObject13612<T>
  : T;

interface DeepReadonlyArray13612<T> extends ReadonlyArray<DeepReadonly13612<T>> {}

type DeepReadonlyObject13612<T> = {
  readonly [P in keyof T]: DeepReadonly13612<T[P]>;
};

type UnionToIntersection13612<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13612<T> = UnionToIntersection13612<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13612<T extends unknown[], V> = [...T, V];

type TuplifyUnion13612<T, L = LastOf13612<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13612<TuplifyUnion13612<Exclude<T, L>>, L>;

type DeepPartial13612<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13612<T[P]> }
  : T;

type Paths13612<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13612<K, Paths13612<T[K], Prev13612[D]>> : never }[keyof T]
  : never;

type Prev13612 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13612<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13612 {
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

type ConfigPaths13612 = Paths13612<NestedConfig13612>;

interface HeavyProps13612 {
  config: DeepPartial13612<NestedConfig13612>;
  path?: ConfigPaths13612;
}

const HeavyComponent13612 = memo(function HeavyComponent13612({ config }: HeavyProps13612) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13612) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13612 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13612: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13612.displayName = 'HeavyComponent13612';
export default HeavyComponent13612;
