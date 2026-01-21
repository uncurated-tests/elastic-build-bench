'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8122<T> = T extends (infer U)[]
  ? DeepReadonlyArray8122<U>
  : T extends object
  ? DeepReadonlyObject8122<T>
  : T;

interface DeepReadonlyArray8122<T> extends ReadonlyArray<DeepReadonly8122<T>> {}

type DeepReadonlyObject8122<T> = {
  readonly [P in keyof T]: DeepReadonly8122<T[P]>;
};

type UnionToIntersection8122<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8122<T> = UnionToIntersection8122<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8122<T extends unknown[], V> = [...T, V];

type TuplifyUnion8122<T, L = LastOf8122<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8122<TuplifyUnion8122<Exclude<T, L>>, L>;

type DeepPartial8122<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8122<T[P]> }
  : T;

type Paths8122<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8122<K, Paths8122<T[K], Prev8122[D]>> : never }[keyof T]
  : never;

type Prev8122 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8122<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8122 {
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

type ConfigPaths8122 = Paths8122<NestedConfig8122>;

interface HeavyProps8122 {
  config: DeepPartial8122<NestedConfig8122>;
  path?: ConfigPaths8122;
}

const HeavyComponent8122 = memo(function HeavyComponent8122({ config }: HeavyProps8122) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8122) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8122 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8122: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8122.displayName = 'HeavyComponent8122';
export default HeavyComponent8122;
