'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13474<T> = T extends (infer U)[]
  ? DeepReadonlyArray13474<U>
  : T extends object
  ? DeepReadonlyObject13474<T>
  : T;

interface DeepReadonlyArray13474<T> extends ReadonlyArray<DeepReadonly13474<T>> {}

type DeepReadonlyObject13474<T> = {
  readonly [P in keyof T]: DeepReadonly13474<T[P]>;
};

type UnionToIntersection13474<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13474<T> = UnionToIntersection13474<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13474<T extends unknown[], V> = [...T, V];

type TuplifyUnion13474<T, L = LastOf13474<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13474<TuplifyUnion13474<Exclude<T, L>>, L>;

type DeepPartial13474<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13474<T[P]> }
  : T;

type Paths13474<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13474<K, Paths13474<T[K], Prev13474[D]>> : never }[keyof T]
  : never;

type Prev13474 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13474<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13474 {
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

type ConfigPaths13474 = Paths13474<NestedConfig13474>;

interface HeavyProps13474 {
  config: DeepPartial13474<NestedConfig13474>;
  path?: ConfigPaths13474;
}

const HeavyComponent13474 = memo(function HeavyComponent13474({ config }: HeavyProps13474) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13474) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13474 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13474: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13474.displayName = 'HeavyComponent13474';
export default HeavyComponent13474;
