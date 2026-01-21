'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13735<T> = T extends (infer U)[]
  ? DeepReadonlyArray13735<U>
  : T extends object
  ? DeepReadonlyObject13735<T>
  : T;

interface DeepReadonlyArray13735<T> extends ReadonlyArray<DeepReadonly13735<T>> {}

type DeepReadonlyObject13735<T> = {
  readonly [P in keyof T]: DeepReadonly13735<T[P]>;
};

type UnionToIntersection13735<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13735<T> = UnionToIntersection13735<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13735<T extends unknown[], V> = [...T, V];

type TuplifyUnion13735<T, L = LastOf13735<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13735<TuplifyUnion13735<Exclude<T, L>>, L>;

type DeepPartial13735<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13735<T[P]> }
  : T;

type Paths13735<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13735<K, Paths13735<T[K], Prev13735[D]>> : never }[keyof T]
  : never;

type Prev13735 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13735<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13735 {
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

type ConfigPaths13735 = Paths13735<NestedConfig13735>;

interface HeavyProps13735 {
  config: DeepPartial13735<NestedConfig13735>;
  path?: ConfigPaths13735;
}

const HeavyComponent13735 = memo(function HeavyComponent13735({ config }: HeavyProps13735) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13735) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13735 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13735: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13735.displayName = 'HeavyComponent13735';
export default HeavyComponent13735;
