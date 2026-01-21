'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8700<T> = T extends (infer U)[]
  ? DeepReadonlyArray8700<U>
  : T extends object
  ? DeepReadonlyObject8700<T>
  : T;

interface DeepReadonlyArray8700<T> extends ReadonlyArray<DeepReadonly8700<T>> {}

type DeepReadonlyObject8700<T> = {
  readonly [P in keyof T]: DeepReadonly8700<T[P]>;
};

type UnionToIntersection8700<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8700<T> = UnionToIntersection8700<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8700<T extends unknown[], V> = [...T, V];

type TuplifyUnion8700<T, L = LastOf8700<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8700<TuplifyUnion8700<Exclude<T, L>>, L>;

type DeepPartial8700<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8700<T[P]> }
  : T;

type Paths8700<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8700<K, Paths8700<T[K], Prev8700[D]>> : never }[keyof T]
  : never;

type Prev8700 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8700<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8700 {
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

type ConfigPaths8700 = Paths8700<NestedConfig8700>;

interface HeavyProps8700 {
  config: DeepPartial8700<NestedConfig8700>;
  path?: ConfigPaths8700;
}

const HeavyComponent8700 = memo(function HeavyComponent8700({ config }: HeavyProps8700) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8700) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8700 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8700: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8700.displayName = 'HeavyComponent8700';
export default HeavyComponent8700;
