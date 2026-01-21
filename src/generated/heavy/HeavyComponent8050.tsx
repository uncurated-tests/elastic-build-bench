'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8050<T> = T extends (infer U)[]
  ? DeepReadonlyArray8050<U>
  : T extends object
  ? DeepReadonlyObject8050<T>
  : T;

interface DeepReadonlyArray8050<T> extends ReadonlyArray<DeepReadonly8050<T>> {}

type DeepReadonlyObject8050<T> = {
  readonly [P in keyof T]: DeepReadonly8050<T[P]>;
};

type UnionToIntersection8050<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8050<T> = UnionToIntersection8050<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8050<T extends unknown[], V> = [...T, V];

type TuplifyUnion8050<T, L = LastOf8050<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8050<TuplifyUnion8050<Exclude<T, L>>, L>;

type DeepPartial8050<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8050<T[P]> }
  : T;

type Paths8050<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8050<K, Paths8050<T[K], Prev8050[D]>> : never }[keyof T]
  : never;

type Prev8050 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8050<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8050 {
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

type ConfigPaths8050 = Paths8050<NestedConfig8050>;

interface HeavyProps8050 {
  config: DeepPartial8050<NestedConfig8050>;
  path?: ConfigPaths8050;
}

const HeavyComponent8050 = memo(function HeavyComponent8050({ config }: HeavyProps8050) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8050) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8050 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8050: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8050.displayName = 'HeavyComponent8050';
export default HeavyComponent8050;
