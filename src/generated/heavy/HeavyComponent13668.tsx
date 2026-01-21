'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13668<T> = T extends (infer U)[]
  ? DeepReadonlyArray13668<U>
  : T extends object
  ? DeepReadonlyObject13668<T>
  : T;

interface DeepReadonlyArray13668<T> extends ReadonlyArray<DeepReadonly13668<T>> {}

type DeepReadonlyObject13668<T> = {
  readonly [P in keyof T]: DeepReadonly13668<T[P]>;
};

type UnionToIntersection13668<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13668<T> = UnionToIntersection13668<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13668<T extends unknown[], V> = [...T, V];

type TuplifyUnion13668<T, L = LastOf13668<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13668<TuplifyUnion13668<Exclude<T, L>>, L>;

type DeepPartial13668<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13668<T[P]> }
  : T;

type Paths13668<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13668<K, Paths13668<T[K], Prev13668[D]>> : never }[keyof T]
  : never;

type Prev13668 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13668<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13668 {
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

type ConfigPaths13668 = Paths13668<NestedConfig13668>;

interface HeavyProps13668 {
  config: DeepPartial13668<NestedConfig13668>;
  path?: ConfigPaths13668;
}

const HeavyComponent13668 = memo(function HeavyComponent13668({ config }: HeavyProps13668) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13668) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13668 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13668: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13668.displayName = 'HeavyComponent13668';
export default HeavyComponent13668;
