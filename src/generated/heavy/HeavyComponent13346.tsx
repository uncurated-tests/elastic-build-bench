'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13346<T> = T extends (infer U)[]
  ? DeepReadonlyArray13346<U>
  : T extends object
  ? DeepReadonlyObject13346<T>
  : T;

interface DeepReadonlyArray13346<T> extends ReadonlyArray<DeepReadonly13346<T>> {}

type DeepReadonlyObject13346<T> = {
  readonly [P in keyof T]: DeepReadonly13346<T[P]>;
};

type UnionToIntersection13346<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13346<T> = UnionToIntersection13346<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13346<T extends unknown[], V> = [...T, V];

type TuplifyUnion13346<T, L = LastOf13346<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13346<TuplifyUnion13346<Exclude<T, L>>, L>;

type DeepPartial13346<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13346<T[P]> }
  : T;

type Paths13346<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13346<K, Paths13346<T[K], Prev13346[D]>> : never }[keyof T]
  : never;

type Prev13346 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13346<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13346 {
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

type ConfigPaths13346 = Paths13346<NestedConfig13346>;

interface HeavyProps13346 {
  config: DeepPartial13346<NestedConfig13346>;
  path?: ConfigPaths13346;
}

const HeavyComponent13346 = memo(function HeavyComponent13346({ config }: HeavyProps13346) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13346) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13346 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13346: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13346.displayName = 'HeavyComponent13346';
export default HeavyComponent13346;
