'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13820<T> = T extends (infer U)[]
  ? DeepReadonlyArray13820<U>
  : T extends object
  ? DeepReadonlyObject13820<T>
  : T;

interface DeepReadonlyArray13820<T> extends ReadonlyArray<DeepReadonly13820<T>> {}

type DeepReadonlyObject13820<T> = {
  readonly [P in keyof T]: DeepReadonly13820<T[P]>;
};

type UnionToIntersection13820<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13820<T> = UnionToIntersection13820<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13820<T extends unknown[], V> = [...T, V];

type TuplifyUnion13820<T, L = LastOf13820<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13820<TuplifyUnion13820<Exclude<T, L>>, L>;

type DeepPartial13820<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13820<T[P]> }
  : T;

type Paths13820<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13820<K, Paths13820<T[K], Prev13820[D]>> : never }[keyof T]
  : never;

type Prev13820 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13820<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13820 {
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

type ConfigPaths13820 = Paths13820<NestedConfig13820>;

interface HeavyProps13820 {
  config: DeepPartial13820<NestedConfig13820>;
  path?: ConfigPaths13820;
}

const HeavyComponent13820 = memo(function HeavyComponent13820({ config }: HeavyProps13820) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13820) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13820 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13820: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13820.displayName = 'HeavyComponent13820';
export default HeavyComponent13820;
