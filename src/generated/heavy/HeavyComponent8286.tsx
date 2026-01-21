'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8286<T> = T extends (infer U)[]
  ? DeepReadonlyArray8286<U>
  : T extends object
  ? DeepReadonlyObject8286<T>
  : T;

interface DeepReadonlyArray8286<T> extends ReadonlyArray<DeepReadonly8286<T>> {}

type DeepReadonlyObject8286<T> = {
  readonly [P in keyof T]: DeepReadonly8286<T[P]>;
};

type UnionToIntersection8286<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8286<T> = UnionToIntersection8286<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8286<T extends unknown[], V> = [...T, V];

type TuplifyUnion8286<T, L = LastOf8286<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8286<TuplifyUnion8286<Exclude<T, L>>, L>;

type DeepPartial8286<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8286<T[P]> }
  : T;

type Paths8286<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8286<K, Paths8286<T[K], Prev8286[D]>> : never }[keyof T]
  : never;

type Prev8286 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8286<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8286 {
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

type ConfigPaths8286 = Paths8286<NestedConfig8286>;

interface HeavyProps8286 {
  config: DeepPartial8286<NestedConfig8286>;
  path?: ConfigPaths8286;
}

const HeavyComponent8286 = memo(function HeavyComponent8286({ config }: HeavyProps8286) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8286) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8286 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8286: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8286.displayName = 'HeavyComponent8286';
export default HeavyComponent8286;
