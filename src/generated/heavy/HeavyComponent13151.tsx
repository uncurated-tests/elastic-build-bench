'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13151<T> = T extends (infer U)[]
  ? DeepReadonlyArray13151<U>
  : T extends object
  ? DeepReadonlyObject13151<T>
  : T;

interface DeepReadonlyArray13151<T> extends ReadonlyArray<DeepReadonly13151<T>> {}

type DeepReadonlyObject13151<T> = {
  readonly [P in keyof T]: DeepReadonly13151<T[P]>;
};

type UnionToIntersection13151<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13151<T> = UnionToIntersection13151<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13151<T extends unknown[], V> = [...T, V];

type TuplifyUnion13151<T, L = LastOf13151<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13151<TuplifyUnion13151<Exclude<T, L>>, L>;

type DeepPartial13151<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13151<T[P]> }
  : T;

type Paths13151<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13151<K, Paths13151<T[K], Prev13151[D]>> : never }[keyof T]
  : never;

type Prev13151 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13151<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13151 {
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

type ConfigPaths13151 = Paths13151<NestedConfig13151>;

interface HeavyProps13151 {
  config: DeepPartial13151<NestedConfig13151>;
  path?: ConfigPaths13151;
}

const HeavyComponent13151 = memo(function HeavyComponent13151({ config }: HeavyProps13151) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13151) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13151 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13151: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13151.displayName = 'HeavyComponent13151';
export default HeavyComponent13151;
