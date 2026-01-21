'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8962<T> = T extends (infer U)[]
  ? DeepReadonlyArray8962<U>
  : T extends object
  ? DeepReadonlyObject8962<T>
  : T;

interface DeepReadonlyArray8962<T> extends ReadonlyArray<DeepReadonly8962<T>> {}

type DeepReadonlyObject8962<T> = {
  readonly [P in keyof T]: DeepReadonly8962<T[P]>;
};

type UnionToIntersection8962<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8962<T> = UnionToIntersection8962<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8962<T extends unknown[], V> = [...T, V];

type TuplifyUnion8962<T, L = LastOf8962<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8962<TuplifyUnion8962<Exclude<T, L>>, L>;

type DeepPartial8962<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8962<T[P]> }
  : T;

type Paths8962<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8962<K, Paths8962<T[K], Prev8962[D]>> : never }[keyof T]
  : never;

type Prev8962 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8962<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8962 {
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

type ConfigPaths8962 = Paths8962<NestedConfig8962>;

interface HeavyProps8962 {
  config: DeepPartial8962<NestedConfig8962>;
  path?: ConfigPaths8962;
}

const HeavyComponent8962 = memo(function HeavyComponent8962({ config }: HeavyProps8962) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8962) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8962 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8962: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8962.displayName = 'HeavyComponent8962';
export default HeavyComponent8962;
