'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13275<T> = T extends (infer U)[]
  ? DeepReadonlyArray13275<U>
  : T extends object
  ? DeepReadonlyObject13275<T>
  : T;

interface DeepReadonlyArray13275<T> extends ReadonlyArray<DeepReadonly13275<T>> {}

type DeepReadonlyObject13275<T> = {
  readonly [P in keyof T]: DeepReadonly13275<T[P]>;
};

type UnionToIntersection13275<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13275<T> = UnionToIntersection13275<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13275<T extends unknown[], V> = [...T, V];

type TuplifyUnion13275<T, L = LastOf13275<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13275<TuplifyUnion13275<Exclude<T, L>>, L>;

type DeepPartial13275<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13275<T[P]> }
  : T;

type Paths13275<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13275<K, Paths13275<T[K], Prev13275[D]>> : never }[keyof T]
  : never;

type Prev13275 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13275<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13275 {
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

type ConfigPaths13275 = Paths13275<NestedConfig13275>;

interface HeavyProps13275 {
  config: DeepPartial13275<NestedConfig13275>;
  path?: ConfigPaths13275;
}

const HeavyComponent13275 = memo(function HeavyComponent13275({ config }: HeavyProps13275) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13275) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13275 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13275: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13275.displayName = 'HeavyComponent13275';
export default HeavyComponent13275;
