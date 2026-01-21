'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8380<T> = T extends (infer U)[]
  ? DeepReadonlyArray8380<U>
  : T extends object
  ? DeepReadonlyObject8380<T>
  : T;

interface DeepReadonlyArray8380<T> extends ReadonlyArray<DeepReadonly8380<T>> {}

type DeepReadonlyObject8380<T> = {
  readonly [P in keyof T]: DeepReadonly8380<T[P]>;
};

type UnionToIntersection8380<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8380<T> = UnionToIntersection8380<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8380<T extends unknown[], V> = [...T, V];

type TuplifyUnion8380<T, L = LastOf8380<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8380<TuplifyUnion8380<Exclude<T, L>>, L>;

type DeepPartial8380<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8380<T[P]> }
  : T;

type Paths8380<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8380<K, Paths8380<T[K], Prev8380[D]>> : never }[keyof T]
  : never;

type Prev8380 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8380<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8380 {
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

type ConfigPaths8380 = Paths8380<NestedConfig8380>;

interface HeavyProps8380 {
  config: DeepPartial8380<NestedConfig8380>;
  path?: ConfigPaths8380;
}

const HeavyComponent8380 = memo(function HeavyComponent8380({ config }: HeavyProps8380) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8380) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8380 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8380: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8380.displayName = 'HeavyComponent8380';
export default HeavyComponent8380;
