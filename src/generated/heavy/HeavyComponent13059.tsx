'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13059<T> = T extends (infer U)[]
  ? DeepReadonlyArray13059<U>
  : T extends object
  ? DeepReadonlyObject13059<T>
  : T;

interface DeepReadonlyArray13059<T> extends ReadonlyArray<DeepReadonly13059<T>> {}

type DeepReadonlyObject13059<T> = {
  readonly [P in keyof T]: DeepReadonly13059<T[P]>;
};

type UnionToIntersection13059<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13059<T> = UnionToIntersection13059<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13059<T extends unknown[], V> = [...T, V];

type TuplifyUnion13059<T, L = LastOf13059<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13059<TuplifyUnion13059<Exclude<T, L>>, L>;

type DeepPartial13059<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13059<T[P]> }
  : T;

type Paths13059<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13059<K, Paths13059<T[K], Prev13059[D]>> : never }[keyof T]
  : never;

type Prev13059 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13059<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13059 {
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

type ConfigPaths13059 = Paths13059<NestedConfig13059>;

interface HeavyProps13059 {
  config: DeepPartial13059<NestedConfig13059>;
  path?: ConfigPaths13059;
}

const HeavyComponent13059 = memo(function HeavyComponent13059({ config }: HeavyProps13059) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13059) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13059 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13059: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13059.displayName = 'HeavyComponent13059';
export default HeavyComponent13059;
