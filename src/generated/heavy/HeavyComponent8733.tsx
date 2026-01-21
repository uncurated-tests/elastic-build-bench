'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8733<T> = T extends (infer U)[]
  ? DeepReadonlyArray8733<U>
  : T extends object
  ? DeepReadonlyObject8733<T>
  : T;

interface DeepReadonlyArray8733<T> extends ReadonlyArray<DeepReadonly8733<T>> {}

type DeepReadonlyObject8733<T> = {
  readonly [P in keyof T]: DeepReadonly8733<T[P]>;
};

type UnionToIntersection8733<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8733<T> = UnionToIntersection8733<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8733<T extends unknown[], V> = [...T, V];

type TuplifyUnion8733<T, L = LastOf8733<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8733<TuplifyUnion8733<Exclude<T, L>>, L>;

type DeepPartial8733<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8733<T[P]> }
  : T;

type Paths8733<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8733<K, Paths8733<T[K], Prev8733[D]>> : never }[keyof T]
  : never;

type Prev8733 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8733<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8733 {
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

type ConfigPaths8733 = Paths8733<NestedConfig8733>;

interface HeavyProps8733 {
  config: DeepPartial8733<NestedConfig8733>;
  path?: ConfigPaths8733;
}

const HeavyComponent8733 = memo(function HeavyComponent8733({ config }: HeavyProps8733) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8733) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8733 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8733: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8733.displayName = 'HeavyComponent8733';
export default HeavyComponent8733;
