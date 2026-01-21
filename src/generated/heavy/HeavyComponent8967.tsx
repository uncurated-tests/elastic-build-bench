'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8967<T> = T extends (infer U)[]
  ? DeepReadonlyArray8967<U>
  : T extends object
  ? DeepReadonlyObject8967<T>
  : T;

interface DeepReadonlyArray8967<T> extends ReadonlyArray<DeepReadonly8967<T>> {}

type DeepReadonlyObject8967<T> = {
  readonly [P in keyof T]: DeepReadonly8967<T[P]>;
};

type UnionToIntersection8967<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8967<T> = UnionToIntersection8967<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8967<T extends unknown[], V> = [...T, V];

type TuplifyUnion8967<T, L = LastOf8967<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8967<TuplifyUnion8967<Exclude<T, L>>, L>;

type DeepPartial8967<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8967<T[P]> }
  : T;

type Paths8967<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8967<K, Paths8967<T[K], Prev8967[D]>> : never }[keyof T]
  : never;

type Prev8967 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8967<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8967 {
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

type ConfigPaths8967 = Paths8967<NestedConfig8967>;

interface HeavyProps8967 {
  config: DeepPartial8967<NestedConfig8967>;
  path?: ConfigPaths8967;
}

const HeavyComponent8967 = memo(function HeavyComponent8967({ config }: HeavyProps8967) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8967) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8967 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8967: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8967.displayName = 'HeavyComponent8967';
export default HeavyComponent8967;
