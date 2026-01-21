'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13095<T> = T extends (infer U)[]
  ? DeepReadonlyArray13095<U>
  : T extends object
  ? DeepReadonlyObject13095<T>
  : T;

interface DeepReadonlyArray13095<T> extends ReadonlyArray<DeepReadonly13095<T>> {}

type DeepReadonlyObject13095<T> = {
  readonly [P in keyof T]: DeepReadonly13095<T[P]>;
};

type UnionToIntersection13095<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13095<T> = UnionToIntersection13095<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13095<T extends unknown[], V> = [...T, V];

type TuplifyUnion13095<T, L = LastOf13095<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13095<TuplifyUnion13095<Exclude<T, L>>, L>;

type DeepPartial13095<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13095<T[P]> }
  : T;

type Paths13095<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13095<K, Paths13095<T[K], Prev13095[D]>> : never }[keyof T]
  : never;

type Prev13095 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13095<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13095 {
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

type ConfigPaths13095 = Paths13095<NestedConfig13095>;

interface HeavyProps13095 {
  config: DeepPartial13095<NestedConfig13095>;
  path?: ConfigPaths13095;
}

const HeavyComponent13095 = memo(function HeavyComponent13095({ config }: HeavyProps13095) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13095) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13095 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13095: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13095.displayName = 'HeavyComponent13095';
export default HeavyComponent13095;
