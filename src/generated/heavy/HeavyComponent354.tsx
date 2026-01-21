'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly354<T> = T extends (infer U)[]
  ? DeepReadonlyArray354<U>
  : T extends object
  ? DeepReadonlyObject354<T>
  : T;

interface DeepReadonlyArray354<T> extends ReadonlyArray<DeepReadonly354<T>> {}

type DeepReadonlyObject354<T> = {
  readonly [P in keyof T]: DeepReadonly354<T[P]>;
};

type UnionToIntersection354<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf354<T> = UnionToIntersection354<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push354<T extends unknown[], V> = [...T, V];

type TuplifyUnion354<T, L = LastOf354<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push354<TuplifyUnion354<Exclude<T, L>>, L>;

type DeepPartial354<T> = T extends object
  ? { [P in keyof T]?: DeepPartial354<T[P]> }
  : T;

type Paths354<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join354<K, Paths354<T[K], Prev354[D]>> : never }[keyof T]
  : never;

type Prev354 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join354<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig354 {
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

type ConfigPaths354 = Paths354<NestedConfig354>;

interface HeavyProps354 {
  config: DeepPartial354<NestedConfig354>;
  path?: ConfigPaths354;
}

const HeavyComponent354 = memo(function HeavyComponent354({ config }: HeavyProps354) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 354) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-354 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H354: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent354.displayName = 'HeavyComponent354';
export default HeavyComponent354;
