'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13235<T> = T extends (infer U)[]
  ? DeepReadonlyArray13235<U>
  : T extends object
  ? DeepReadonlyObject13235<T>
  : T;

interface DeepReadonlyArray13235<T> extends ReadonlyArray<DeepReadonly13235<T>> {}

type DeepReadonlyObject13235<T> = {
  readonly [P in keyof T]: DeepReadonly13235<T[P]>;
};

type UnionToIntersection13235<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13235<T> = UnionToIntersection13235<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13235<T extends unknown[], V> = [...T, V];

type TuplifyUnion13235<T, L = LastOf13235<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13235<TuplifyUnion13235<Exclude<T, L>>, L>;

type DeepPartial13235<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13235<T[P]> }
  : T;

type Paths13235<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13235<K, Paths13235<T[K], Prev13235[D]>> : never }[keyof T]
  : never;

type Prev13235 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13235<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13235 {
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

type ConfigPaths13235 = Paths13235<NestedConfig13235>;

interface HeavyProps13235 {
  config: DeepPartial13235<NestedConfig13235>;
  path?: ConfigPaths13235;
}

const HeavyComponent13235 = memo(function HeavyComponent13235({ config }: HeavyProps13235) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13235) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13235 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13235: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13235.displayName = 'HeavyComponent13235';
export default HeavyComponent13235;
