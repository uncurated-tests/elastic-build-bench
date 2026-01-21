'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13305<T> = T extends (infer U)[]
  ? DeepReadonlyArray13305<U>
  : T extends object
  ? DeepReadonlyObject13305<T>
  : T;

interface DeepReadonlyArray13305<T> extends ReadonlyArray<DeepReadonly13305<T>> {}

type DeepReadonlyObject13305<T> = {
  readonly [P in keyof T]: DeepReadonly13305<T[P]>;
};

type UnionToIntersection13305<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13305<T> = UnionToIntersection13305<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13305<T extends unknown[], V> = [...T, V];

type TuplifyUnion13305<T, L = LastOf13305<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13305<TuplifyUnion13305<Exclude<T, L>>, L>;

type DeepPartial13305<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13305<T[P]> }
  : T;

type Paths13305<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13305<K, Paths13305<T[K], Prev13305[D]>> : never }[keyof T]
  : never;

type Prev13305 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13305<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13305 {
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

type ConfigPaths13305 = Paths13305<NestedConfig13305>;

interface HeavyProps13305 {
  config: DeepPartial13305<NestedConfig13305>;
  path?: ConfigPaths13305;
}

const HeavyComponent13305 = memo(function HeavyComponent13305({ config }: HeavyProps13305) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13305) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13305 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13305: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13305.displayName = 'HeavyComponent13305';
export default HeavyComponent13305;
