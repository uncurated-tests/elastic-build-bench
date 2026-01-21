'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13485<T> = T extends (infer U)[]
  ? DeepReadonlyArray13485<U>
  : T extends object
  ? DeepReadonlyObject13485<T>
  : T;

interface DeepReadonlyArray13485<T> extends ReadonlyArray<DeepReadonly13485<T>> {}

type DeepReadonlyObject13485<T> = {
  readonly [P in keyof T]: DeepReadonly13485<T[P]>;
};

type UnionToIntersection13485<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13485<T> = UnionToIntersection13485<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13485<T extends unknown[], V> = [...T, V];

type TuplifyUnion13485<T, L = LastOf13485<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13485<TuplifyUnion13485<Exclude<T, L>>, L>;

type DeepPartial13485<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13485<T[P]> }
  : T;

type Paths13485<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13485<K, Paths13485<T[K], Prev13485[D]>> : never }[keyof T]
  : never;

type Prev13485 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13485<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13485 {
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

type ConfigPaths13485 = Paths13485<NestedConfig13485>;

interface HeavyProps13485 {
  config: DeepPartial13485<NestedConfig13485>;
  path?: ConfigPaths13485;
}

const HeavyComponent13485 = memo(function HeavyComponent13485({ config }: HeavyProps13485) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13485) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13485 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13485: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13485.displayName = 'HeavyComponent13485';
export default HeavyComponent13485;
