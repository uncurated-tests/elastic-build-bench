'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13685<T> = T extends (infer U)[]
  ? DeepReadonlyArray13685<U>
  : T extends object
  ? DeepReadonlyObject13685<T>
  : T;

interface DeepReadonlyArray13685<T> extends ReadonlyArray<DeepReadonly13685<T>> {}

type DeepReadonlyObject13685<T> = {
  readonly [P in keyof T]: DeepReadonly13685<T[P]>;
};

type UnionToIntersection13685<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13685<T> = UnionToIntersection13685<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13685<T extends unknown[], V> = [...T, V];

type TuplifyUnion13685<T, L = LastOf13685<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13685<TuplifyUnion13685<Exclude<T, L>>, L>;

type DeepPartial13685<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13685<T[P]> }
  : T;

type Paths13685<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13685<K, Paths13685<T[K], Prev13685[D]>> : never }[keyof T]
  : never;

type Prev13685 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13685<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13685 {
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

type ConfigPaths13685 = Paths13685<NestedConfig13685>;

interface HeavyProps13685 {
  config: DeepPartial13685<NestedConfig13685>;
  path?: ConfigPaths13685;
}

const HeavyComponent13685 = memo(function HeavyComponent13685({ config }: HeavyProps13685) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13685) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13685 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13685: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13685.displayName = 'HeavyComponent13685';
export default HeavyComponent13685;
