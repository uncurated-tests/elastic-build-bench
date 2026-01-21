'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8620<T> = T extends (infer U)[]
  ? DeepReadonlyArray8620<U>
  : T extends object
  ? DeepReadonlyObject8620<T>
  : T;

interface DeepReadonlyArray8620<T> extends ReadonlyArray<DeepReadonly8620<T>> {}

type DeepReadonlyObject8620<T> = {
  readonly [P in keyof T]: DeepReadonly8620<T[P]>;
};

type UnionToIntersection8620<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8620<T> = UnionToIntersection8620<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8620<T extends unknown[], V> = [...T, V];

type TuplifyUnion8620<T, L = LastOf8620<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8620<TuplifyUnion8620<Exclude<T, L>>, L>;

type DeepPartial8620<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8620<T[P]> }
  : T;

type Paths8620<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8620<K, Paths8620<T[K], Prev8620[D]>> : never }[keyof T]
  : never;

type Prev8620 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8620<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8620 {
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

type ConfigPaths8620 = Paths8620<NestedConfig8620>;

interface HeavyProps8620 {
  config: DeepPartial8620<NestedConfig8620>;
  path?: ConfigPaths8620;
}

const HeavyComponent8620 = memo(function HeavyComponent8620({ config }: HeavyProps8620) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8620) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8620 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8620: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8620.displayName = 'HeavyComponent8620';
export default HeavyComponent8620;
