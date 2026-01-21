'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8511<T> = T extends (infer U)[]
  ? DeepReadonlyArray8511<U>
  : T extends object
  ? DeepReadonlyObject8511<T>
  : T;

interface DeepReadonlyArray8511<T> extends ReadonlyArray<DeepReadonly8511<T>> {}

type DeepReadonlyObject8511<T> = {
  readonly [P in keyof T]: DeepReadonly8511<T[P]>;
};

type UnionToIntersection8511<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8511<T> = UnionToIntersection8511<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8511<T extends unknown[], V> = [...T, V];

type TuplifyUnion8511<T, L = LastOf8511<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8511<TuplifyUnion8511<Exclude<T, L>>, L>;

type DeepPartial8511<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8511<T[P]> }
  : T;

type Paths8511<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8511<K, Paths8511<T[K], Prev8511[D]>> : never }[keyof T]
  : never;

type Prev8511 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8511<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8511 {
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

type ConfigPaths8511 = Paths8511<NestedConfig8511>;

interface HeavyProps8511 {
  config: DeepPartial8511<NestedConfig8511>;
  path?: ConfigPaths8511;
}

const HeavyComponent8511 = memo(function HeavyComponent8511({ config }: HeavyProps8511) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8511) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8511 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8511: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8511.displayName = 'HeavyComponent8511';
export default HeavyComponent8511;
