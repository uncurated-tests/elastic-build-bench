'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8503<T> = T extends (infer U)[]
  ? DeepReadonlyArray8503<U>
  : T extends object
  ? DeepReadonlyObject8503<T>
  : T;

interface DeepReadonlyArray8503<T> extends ReadonlyArray<DeepReadonly8503<T>> {}

type DeepReadonlyObject8503<T> = {
  readonly [P in keyof T]: DeepReadonly8503<T[P]>;
};

type UnionToIntersection8503<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8503<T> = UnionToIntersection8503<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8503<T extends unknown[], V> = [...T, V];

type TuplifyUnion8503<T, L = LastOf8503<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8503<TuplifyUnion8503<Exclude<T, L>>, L>;

type DeepPartial8503<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8503<T[P]> }
  : T;

type Paths8503<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8503<K, Paths8503<T[K], Prev8503[D]>> : never }[keyof T]
  : never;

type Prev8503 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8503<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8503 {
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

type ConfigPaths8503 = Paths8503<NestedConfig8503>;

interface HeavyProps8503 {
  config: DeepPartial8503<NestedConfig8503>;
  path?: ConfigPaths8503;
}

const HeavyComponent8503 = memo(function HeavyComponent8503({ config }: HeavyProps8503) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8503) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8503 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8503: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8503.displayName = 'HeavyComponent8503';
export default HeavyComponent8503;
