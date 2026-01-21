'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13660<T> = T extends (infer U)[]
  ? DeepReadonlyArray13660<U>
  : T extends object
  ? DeepReadonlyObject13660<T>
  : T;

interface DeepReadonlyArray13660<T> extends ReadonlyArray<DeepReadonly13660<T>> {}

type DeepReadonlyObject13660<T> = {
  readonly [P in keyof T]: DeepReadonly13660<T[P]>;
};

type UnionToIntersection13660<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13660<T> = UnionToIntersection13660<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13660<T extends unknown[], V> = [...T, V];

type TuplifyUnion13660<T, L = LastOf13660<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13660<TuplifyUnion13660<Exclude<T, L>>, L>;

type DeepPartial13660<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13660<T[P]> }
  : T;

type Paths13660<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13660<K, Paths13660<T[K], Prev13660[D]>> : never }[keyof T]
  : never;

type Prev13660 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13660<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13660 {
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

type ConfigPaths13660 = Paths13660<NestedConfig13660>;

interface HeavyProps13660 {
  config: DeepPartial13660<NestedConfig13660>;
  path?: ConfigPaths13660;
}

const HeavyComponent13660 = memo(function HeavyComponent13660({ config }: HeavyProps13660) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13660) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13660 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13660: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13660.displayName = 'HeavyComponent13660';
export default HeavyComponent13660;
