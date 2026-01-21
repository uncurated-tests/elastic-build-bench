'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13421<T> = T extends (infer U)[]
  ? DeepReadonlyArray13421<U>
  : T extends object
  ? DeepReadonlyObject13421<T>
  : T;

interface DeepReadonlyArray13421<T> extends ReadonlyArray<DeepReadonly13421<T>> {}

type DeepReadonlyObject13421<T> = {
  readonly [P in keyof T]: DeepReadonly13421<T[P]>;
};

type UnionToIntersection13421<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13421<T> = UnionToIntersection13421<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13421<T extends unknown[], V> = [...T, V];

type TuplifyUnion13421<T, L = LastOf13421<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13421<TuplifyUnion13421<Exclude<T, L>>, L>;

type DeepPartial13421<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13421<T[P]> }
  : T;

type Paths13421<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13421<K, Paths13421<T[K], Prev13421[D]>> : never }[keyof T]
  : never;

type Prev13421 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13421<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13421 {
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

type ConfigPaths13421 = Paths13421<NestedConfig13421>;

interface HeavyProps13421 {
  config: DeepPartial13421<NestedConfig13421>;
  path?: ConfigPaths13421;
}

const HeavyComponent13421 = memo(function HeavyComponent13421({ config }: HeavyProps13421) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13421) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13421 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13421: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13421.displayName = 'HeavyComponent13421';
export default HeavyComponent13421;
