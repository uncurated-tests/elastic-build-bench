'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13018<T> = T extends (infer U)[]
  ? DeepReadonlyArray13018<U>
  : T extends object
  ? DeepReadonlyObject13018<T>
  : T;

interface DeepReadonlyArray13018<T> extends ReadonlyArray<DeepReadonly13018<T>> {}

type DeepReadonlyObject13018<T> = {
  readonly [P in keyof T]: DeepReadonly13018<T[P]>;
};

type UnionToIntersection13018<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13018<T> = UnionToIntersection13018<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13018<T extends unknown[], V> = [...T, V];

type TuplifyUnion13018<T, L = LastOf13018<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13018<TuplifyUnion13018<Exclude<T, L>>, L>;

type DeepPartial13018<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13018<T[P]> }
  : T;

type Paths13018<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13018<K, Paths13018<T[K], Prev13018[D]>> : never }[keyof T]
  : never;

type Prev13018 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13018<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13018 {
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

type ConfigPaths13018 = Paths13018<NestedConfig13018>;

interface HeavyProps13018 {
  config: DeepPartial13018<NestedConfig13018>;
  path?: ConfigPaths13018;
}

const HeavyComponent13018 = memo(function HeavyComponent13018({ config }: HeavyProps13018) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13018) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13018 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13018: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13018.displayName = 'HeavyComponent13018';
export default HeavyComponent13018;
