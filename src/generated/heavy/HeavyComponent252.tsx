'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly252<T> = T extends (infer U)[]
  ? DeepReadonlyArray252<U>
  : T extends object
  ? DeepReadonlyObject252<T>
  : T;

interface DeepReadonlyArray252<T> extends ReadonlyArray<DeepReadonly252<T>> {}

type DeepReadonlyObject252<T> = {
  readonly [P in keyof T]: DeepReadonly252<T[P]>;
};

type UnionToIntersection252<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf252<T> = UnionToIntersection252<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push252<T extends unknown[], V> = [...T, V];

type TuplifyUnion252<T, L = LastOf252<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push252<TuplifyUnion252<Exclude<T, L>>, L>;

type DeepPartial252<T> = T extends object
  ? { [P in keyof T]?: DeepPartial252<T[P]> }
  : T;

type Paths252<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join252<K, Paths252<T[K], Prev252[D]>> : never }[keyof T]
  : never;

type Prev252 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join252<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig252 {
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

type ConfigPaths252 = Paths252<NestedConfig252>;

interface HeavyProps252 {
  config: DeepPartial252<NestedConfig252>;
  path?: ConfigPaths252;
}

const HeavyComponent252 = memo(function HeavyComponent252({ config }: HeavyProps252) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 252) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-252 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H252: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent252.displayName = 'HeavyComponent252';
export default HeavyComponent252;
