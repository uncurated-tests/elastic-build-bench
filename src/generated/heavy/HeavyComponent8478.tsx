'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8478<T> = T extends (infer U)[]
  ? DeepReadonlyArray8478<U>
  : T extends object
  ? DeepReadonlyObject8478<T>
  : T;

interface DeepReadonlyArray8478<T> extends ReadonlyArray<DeepReadonly8478<T>> {}

type DeepReadonlyObject8478<T> = {
  readonly [P in keyof T]: DeepReadonly8478<T[P]>;
};

type UnionToIntersection8478<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8478<T> = UnionToIntersection8478<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8478<T extends unknown[], V> = [...T, V];

type TuplifyUnion8478<T, L = LastOf8478<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8478<TuplifyUnion8478<Exclude<T, L>>, L>;

type DeepPartial8478<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8478<T[P]> }
  : T;

type Paths8478<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8478<K, Paths8478<T[K], Prev8478[D]>> : never }[keyof T]
  : never;

type Prev8478 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8478<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8478 {
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

type ConfigPaths8478 = Paths8478<NestedConfig8478>;

interface HeavyProps8478 {
  config: DeepPartial8478<NestedConfig8478>;
  path?: ConfigPaths8478;
}

const HeavyComponent8478 = memo(function HeavyComponent8478({ config }: HeavyProps8478) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8478) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8478 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8478: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8478.displayName = 'HeavyComponent8478';
export default HeavyComponent8478;
