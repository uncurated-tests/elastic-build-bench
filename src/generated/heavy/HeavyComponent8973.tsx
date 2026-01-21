'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8973<T> = T extends (infer U)[]
  ? DeepReadonlyArray8973<U>
  : T extends object
  ? DeepReadonlyObject8973<T>
  : T;

interface DeepReadonlyArray8973<T> extends ReadonlyArray<DeepReadonly8973<T>> {}

type DeepReadonlyObject8973<T> = {
  readonly [P in keyof T]: DeepReadonly8973<T[P]>;
};

type UnionToIntersection8973<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8973<T> = UnionToIntersection8973<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8973<T extends unknown[], V> = [...T, V];

type TuplifyUnion8973<T, L = LastOf8973<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8973<TuplifyUnion8973<Exclude<T, L>>, L>;

type DeepPartial8973<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8973<T[P]> }
  : T;

type Paths8973<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8973<K, Paths8973<T[K], Prev8973[D]>> : never }[keyof T]
  : never;

type Prev8973 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8973<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8973 {
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

type ConfigPaths8973 = Paths8973<NestedConfig8973>;

interface HeavyProps8973 {
  config: DeepPartial8973<NestedConfig8973>;
  path?: ConfigPaths8973;
}

const HeavyComponent8973 = memo(function HeavyComponent8973({ config }: HeavyProps8973) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8973) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8973 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8973: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8973.displayName = 'HeavyComponent8973';
export default HeavyComponent8973;
