'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13547<T> = T extends (infer U)[]
  ? DeepReadonlyArray13547<U>
  : T extends object
  ? DeepReadonlyObject13547<T>
  : T;

interface DeepReadonlyArray13547<T> extends ReadonlyArray<DeepReadonly13547<T>> {}

type DeepReadonlyObject13547<T> = {
  readonly [P in keyof T]: DeepReadonly13547<T[P]>;
};

type UnionToIntersection13547<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13547<T> = UnionToIntersection13547<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13547<T extends unknown[], V> = [...T, V];

type TuplifyUnion13547<T, L = LastOf13547<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13547<TuplifyUnion13547<Exclude<T, L>>, L>;

type DeepPartial13547<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13547<T[P]> }
  : T;

type Paths13547<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13547<K, Paths13547<T[K], Prev13547[D]>> : never }[keyof T]
  : never;

type Prev13547 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13547<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13547 {
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

type ConfigPaths13547 = Paths13547<NestedConfig13547>;

interface HeavyProps13547 {
  config: DeepPartial13547<NestedConfig13547>;
  path?: ConfigPaths13547;
}

const HeavyComponent13547 = memo(function HeavyComponent13547({ config }: HeavyProps13547) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13547) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13547 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13547: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13547.displayName = 'HeavyComponent13547';
export default HeavyComponent13547;
