'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13877<T> = T extends (infer U)[]
  ? DeepReadonlyArray13877<U>
  : T extends object
  ? DeepReadonlyObject13877<T>
  : T;

interface DeepReadonlyArray13877<T> extends ReadonlyArray<DeepReadonly13877<T>> {}

type DeepReadonlyObject13877<T> = {
  readonly [P in keyof T]: DeepReadonly13877<T[P]>;
};

type UnionToIntersection13877<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13877<T> = UnionToIntersection13877<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13877<T extends unknown[], V> = [...T, V];

type TuplifyUnion13877<T, L = LastOf13877<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13877<TuplifyUnion13877<Exclude<T, L>>, L>;

type DeepPartial13877<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13877<T[P]> }
  : T;

type Paths13877<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13877<K, Paths13877<T[K], Prev13877[D]>> : never }[keyof T]
  : never;

type Prev13877 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13877<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13877 {
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

type ConfigPaths13877 = Paths13877<NestedConfig13877>;

interface HeavyProps13877 {
  config: DeepPartial13877<NestedConfig13877>;
  path?: ConfigPaths13877;
}

const HeavyComponent13877 = memo(function HeavyComponent13877({ config }: HeavyProps13877) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13877) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13877 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13877: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13877.displayName = 'HeavyComponent13877';
export default HeavyComponent13877;
