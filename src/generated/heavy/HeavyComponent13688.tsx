'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13688<T> = T extends (infer U)[]
  ? DeepReadonlyArray13688<U>
  : T extends object
  ? DeepReadonlyObject13688<T>
  : T;

interface DeepReadonlyArray13688<T> extends ReadonlyArray<DeepReadonly13688<T>> {}

type DeepReadonlyObject13688<T> = {
  readonly [P in keyof T]: DeepReadonly13688<T[P]>;
};

type UnionToIntersection13688<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13688<T> = UnionToIntersection13688<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13688<T extends unknown[], V> = [...T, V];

type TuplifyUnion13688<T, L = LastOf13688<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13688<TuplifyUnion13688<Exclude<T, L>>, L>;

type DeepPartial13688<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13688<T[P]> }
  : T;

type Paths13688<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13688<K, Paths13688<T[K], Prev13688[D]>> : never }[keyof T]
  : never;

type Prev13688 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13688<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13688 {
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

type ConfigPaths13688 = Paths13688<NestedConfig13688>;

interface HeavyProps13688 {
  config: DeepPartial13688<NestedConfig13688>;
  path?: ConfigPaths13688;
}

const HeavyComponent13688 = memo(function HeavyComponent13688({ config }: HeavyProps13688) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13688) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13688 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13688: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13688.displayName = 'HeavyComponent13688';
export default HeavyComponent13688;
