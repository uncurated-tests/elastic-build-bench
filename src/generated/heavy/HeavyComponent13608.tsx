'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13608<T> = T extends (infer U)[]
  ? DeepReadonlyArray13608<U>
  : T extends object
  ? DeepReadonlyObject13608<T>
  : T;

interface DeepReadonlyArray13608<T> extends ReadonlyArray<DeepReadonly13608<T>> {}

type DeepReadonlyObject13608<T> = {
  readonly [P in keyof T]: DeepReadonly13608<T[P]>;
};

type UnionToIntersection13608<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13608<T> = UnionToIntersection13608<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13608<T extends unknown[], V> = [...T, V];

type TuplifyUnion13608<T, L = LastOf13608<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13608<TuplifyUnion13608<Exclude<T, L>>, L>;

type DeepPartial13608<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13608<T[P]> }
  : T;

type Paths13608<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13608<K, Paths13608<T[K], Prev13608[D]>> : never }[keyof T]
  : never;

type Prev13608 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13608<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13608 {
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

type ConfigPaths13608 = Paths13608<NestedConfig13608>;

interface HeavyProps13608 {
  config: DeepPartial13608<NestedConfig13608>;
  path?: ConfigPaths13608;
}

const HeavyComponent13608 = memo(function HeavyComponent13608({ config }: HeavyProps13608) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13608) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13608 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13608: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13608.displayName = 'HeavyComponent13608';
export default HeavyComponent13608;
