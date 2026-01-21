'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13096<T> = T extends (infer U)[]
  ? DeepReadonlyArray13096<U>
  : T extends object
  ? DeepReadonlyObject13096<T>
  : T;

interface DeepReadonlyArray13096<T> extends ReadonlyArray<DeepReadonly13096<T>> {}

type DeepReadonlyObject13096<T> = {
  readonly [P in keyof T]: DeepReadonly13096<T[P]>;
};

type UnionToIntersection13096<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13096<T> = UnionToIntersection13096<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13096<T extends unknown[], V> = [...T, V];

type TuplifyUnion13096<T, L = LastOf13096<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13096<TuplifyUnion13096<Exclude<T, L>>, L>;

type DeepPartial13096<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13096<T[P]> }
  : T;

type Paths13096<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13096<K, Paths13096<T[K], Prev13096[D]>> : never }[keyof T]
  : never;

type Prev13096 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13096<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13096 {
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

type ConfigPaths13096 = Paths13096<NestedConfig13096>;

interface HeavyProps13096 {
  config: DeepPartial13096<NestedConfig13096>;
  path?: ConfigPaths13096;
}

const HeavyComponent13096 = memo(function HeavyComponent13096({ config }: HeavyProps13096) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13096) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13096 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13096: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13096.displayName = 'HeavyComponent13096';
export default HeavyComponent13096;
