'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13340<T> = T extends (infer U)[]
  ? DeepReadonlyArray13340<U>
  : T extends object
  ? DeepReadonlyObject13340<T>
  : T;

interface DeepReadonlyArray13340<T> extends ReadonlyArray<DeepReadonly13340<T>> {}

type DeepReadonlyObject13340<T> = {
  readonly [P in keyof T]: DeepReadonly13340<T[P]>;
};

type UnionToIntersection13340<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13340<T> = UnionToIntersection13340<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13340<T extends unknown[], V> = [...T, V];

type TuplifyUnion13340<T, L = LastOf13340<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13340<TuplifyUnion13340<Exclude<T, L>>, L>;

type DeepPartial13340<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13340<T[P]> }
  : T;

type Paths13340<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13340<K, Paths13340<T[K], Prev13340[D]>> : never }[keyof T]
  : never;

type Prev13340 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13340<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13340 {
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

type ConfigPaths13340 = Paths13340<NestedConfig13340>;

interface HeavyProps13340 {
  config: DeepPartial13340<NestedConfig13340>;
  path?: ConfigPaths13340;
}

const HeavyComponent13340 = memo(function HeavyComponent13340({ config }: HeavyProps13340) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13340) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13340 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13340: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13340.displayName = 'HeavyComponent13340';
export default HeavyComponent13340;
