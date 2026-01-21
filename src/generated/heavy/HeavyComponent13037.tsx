'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13037<T> = T extends (infer U)[]
  ? DeepReadonlyArray13037<U>
  : T extends object
  ? DeepReadonlyObject13037<T>
  : T;

interface DeepReadonlyArray13037<T> extends ReadonlyArray<DeepReadonly13037<T>> {}

type DeepReadonlyObject13037<T> = {
  readonly [P in keyof T]: DeepReadonly13037<T[P]>;
};

type UnionToIntersection13037<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13037<T> = UnionToIntersection13037<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13037<T extends unknown[], V> = [...T, V];

type TuplifyUnion13037<T, L = LastOf13037<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13037<TuplifyUnion13037<Exclude<T, L>>, L>;

type DeepPartial13037<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13037<T[P]> }
  : T;

type Paths13037<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13037<K, Paths13037<T[K], Prev13037[D]>> : never }[keyof T]
  : never;

type Prev13037 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13037<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13037 {
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

type ConfigPaths13037 = Paths13037<NestedConfig13037>;

interface HeavyProps13037 {
  config: DeepPartial13037<NestedConfig13037>;
  path?: ConfigPaths13037;
}

const HeavyComponent13037 = memo(function HeavyComponent13037({ config }: HeavyProps13037) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13037) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13037 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13037: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13037.displayName = 'HeavyComponent13037';
export default HeavyComponent13037;
