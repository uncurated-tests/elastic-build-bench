'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13344<T> = T extends (infer U)[]
  ? DeepReadonlyArray13344<U>
  : T extends object
  ? DeepReadonlyObject13344<T>
  : T;

interface DeepReadonlyArray13344<T> extends ReadonlyArray<DeepReadonly13344<T>> {}

type DeepReadonlyObject13344<T> = {
  readonly [P in keyof T]: DeepReadonly13344<T[P]>;
};

type UnionToIntersection13344<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13344<T> = UnionToIntersection13344<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13344<T extends unknown[], V> = [...T, V];

type TuplifyUnion13344<T, L = LastOf13344<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13344<TuplifyUnion13344<Exclude<T, L>>, L>;

type DeepPartial13344<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13344<T[P]> }
  : T;

type Paths13344<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13344<K, Paths13344<T[K], Prev13344[D]>> : never }[keyof T]
  : never;

type Prev13344 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13344<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13344 {
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

type ConfigPaths13344 = Paths13344<NestedConfig13344>;

interface HeavyProps13344 {
  config: DeepPartial13344<NestedConfig13344>;
  path?: ConfigPaths13344;
}

const HeavyComponent13344 = memo(function HeavyComponent13344({ config }: HeavyProps13344) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13344) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13344 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13344: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13344.displayName = 'HeavyComponent13344';
export default HeavyComponent13344;
