'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8864<T> = T extends (infer U)[]
  ? DeepReadonlyArray8864<U>
  : T extends object
  ? DeepReadonlyObject8864<T>
  : T;

interface DeepReadonlyArray8864<T> extends ReadonlyArray<DeepReadonly8864<T>> {}

type DeepReadonlyObject8864<T> = {
  readonly [P in keyof T]: DeepReadonly8864<T[P]>;
};

type UnionToIntersection8864<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8864<T> = UnionToIntersection8864<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8864<T extends unknown[], V> = [...T, V];

type TuplifyUnion8864<T, L = LastOf8864<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8864<TuplifyUnion8864<Exclude<T, L>>, L>;

type DeepPartial8864<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8864<T[P]> }
  : T;

type Paths8864<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8864<K, Paths8864<T[K], Prev8864[D]>> : never }[keyof T]
  : never;

type Prev8864 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8864<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8864 {
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

type ConfigPaths8864 = Paths8864<NestedConfig8864>;

interface HeavyProps8864 {
  config: DeepPartial8864<NestedConfig8864>;
  path?: ConfigPaths8864;
}

const HeavyComponent8864 = memo(function HeavyComponent8864({ config }: HeavyProps8864) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8864) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8864 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8864: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8864.displayName = 'HeavyComponent8864';
export default HeavyComponent8864;
