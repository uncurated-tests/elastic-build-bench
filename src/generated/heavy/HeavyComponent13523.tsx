'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13523<T> = T extends (infer U)[]
  ? DeepReadonlyArray13523<U>
  : T extends object
  ? DeepReadonlyObject13523<T>
  : T;

interface DeepReadonlyArray13523<T> extends ReadonlyArray<DeepReadonly13523<T>> {}

type DeepReadonlyObject13523<T> = {
  readonly [P in keyof T]: DeepReadonly13523<T[P]>;
};

type UnionToIntersection13523<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13523<T> = UnionToIntersection13523<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13523<T extends unknown[], V> = [...T, V];

type TuplifyUnion13523<T, L = LastOf13523<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13523<TuplifyUnion13523<Exclude<T, L>>, L>;

type DeepPartial13523<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13523<T[P]> }
  : T;

type Paths13523<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13523<K, Paths13523<T[K], Prev13523[D]>> : never }[keyof T]
  : never;

type Prev13523 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13523<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13523 {
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

type ConfigPaths13523 = Paths13523<NestedConfig13523>;

interface HeavyProps13523 {
  config: DeepPartial13523<NestedConfig13523>;
  path?: ConfigPaths13523;
}

const HeavyComponent13523 = memo(function HeavyComponent13523({ config }: HeavyProps13523) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13523) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13523 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13523: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13523.displayName = 'HeavyComponent13523';
export default HeavyComponent13523;
