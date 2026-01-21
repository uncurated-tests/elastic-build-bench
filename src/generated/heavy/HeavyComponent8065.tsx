'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8065<T> = T extends (infer U)[]
  ? DeepReadonlyArray8065<U>
  : T extends object
  ? DeepReadonlyObject8065<T>
  : T;

interface DeepReadonlyArray8065<T> extends ReadonlyArray<DeepReadonly8065<T>> {}

type DeepReadonlyObject8065<T> = {
  readonly [P in keyof T]: DeepReadonly8065<T[P]>;
};

type UnionToIntersection8065<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8065<T> = UnionToIntersection8065<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8065<T extends unknown[], V> = [...T, V];

type TuplifyUnion8065<T, L = LastOf8065<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8065<TuplifyUnion8065<Exclude<T, L>>, L>;

type DeepPartial8065<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8065<T[P]> }
  : T;

type Paths8065<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8065<K, Paths8065<T[K], Prev8065[D]>> : never }[keyof T]
  : never;

type Prev8065 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8065<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8065 {
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

type ConfigPaths8065 = Paths8065<NestedConfig8065>;

interface HeavyProps8065 {
  config: DeepPartial8065<NestedConfig8065>;
  path?: ConfigPaths8065;
}

const HeavyComponent8065 = memo(function HeavyComponent8065({ config }: HeavyProps8065) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8065) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8065 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8065: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8065.displayName = 'HeavyComponent8065';
export default HeavyComponent8065;
