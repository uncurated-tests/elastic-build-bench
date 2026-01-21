'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13895<T> = T extends (infer U)[]
  ? DeepReadonlyArray13895<U>
  : T extends object
  ? DeepReadonlyObject13895<T>
  : T;

interface DeepReadonlyArray13895<T> extends ReadonlyArray<DeepReadonly13895<T>> {}

type DeepReadonlyObject13895<T> = {
  readonly [P in keyof T]: DeepReadonly13895<T[P]>;
};

type UnionToIntersection13895<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13895<T> = UnionToIntersection13895<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13895<T extends unknown[], V> = [...T, V];

type TuplifyUnion13895<T, L = LastOf13895<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13895<TuplifyUnion13895<Exclude<T, L>>, L>;

type DeepPartial13895<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13895<T[P]> }
  : T;

type Paths13895<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13895<K, Paths13895<T[K], Prev13895[D]>> : never }[keyof T]
  : never;

type Prev13895 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13895<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13895 {
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

type ConfigPaths13895 = Paths13895<NestedConfig13895>;

interface HeavyProps13895 {
  config: DeepPartial13895<NestedConfig13895>;
  path?: ConfigPaths13895;
}

const HeavyComponent13895 = memo(function HeavyComponent13895({ config }: HeavyProps13895) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13895) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13895 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13895: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13895.displayName = 'HeavyComponent13895';
export default HeavyComponent13895;
