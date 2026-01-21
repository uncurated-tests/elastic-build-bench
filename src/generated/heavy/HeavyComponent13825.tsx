'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13825<T> = T extends (infer U)[]
  ? DeepReadonlyArray13825<U>
  : T extends object
  ? DeepReadonlyObject13825<T>
  : T;

interface DeepReadonlyArray13825<T> extends ReadonlyArray<DeepReadonly13825<T>> {}

type DeepReadonlyObject13825<T> = {
  readonly [P in keyof T]: DeepReadonly13825<T[P]>;
};

type UnionToIntersection13825<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13825<T> = UnionToIntersection13825<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13825<T extends unknown[], V> = [...T, V];

type TuplifyUnion13825<T, L = LastOf13825<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13825<TuplifyUnion13825<Exclude<T, L>>, L>;

type DeepPartial13825<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13825<T[P]> }
  : T;

type Paths13825<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13825<K, Paths13825<T[K], Prev13825[D]>> : never }[keyof T]
  : never;

type Prev13825 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13825<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13825 {
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

type ConfigPaths13825 = Paths13825<NestedConfig13825>;

interface HeavyProps13825 {
  config: DeepPartial13825<NestedConfig13825>;
  path?: ConfigPaths13825;
}

const HeavyComponent13825 = memo(function HeavyComponent13825({ config }: HeavyProps13825) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13825) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13825 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13825: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13825.displayName = 'HeavyComponent13825';
export default HeavyComponent13825;
