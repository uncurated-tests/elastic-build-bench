'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8758<T> = T extends (infer U)[]
  ? DeepReadonlyArray8758<U>
  : T extends object
  ? DeepReadonlyObject8758<T>
  : T;

interface DeepReadonlyArray8758<T> extends ReadonlyArray<DeepReadonly8758<T>> {}

type DeepReadonlyObject8758<T> = {
  readonly [P in keyof T]: DeepReadonly8758<T[P]>;
};

type UnionToIntersection8758<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8758<T> = UnionToIntersection8758<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8758<T extends unknown[], V> = [...T, V];

type TuplifyUnion8758<T, L = LastOf8758<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8758<TuplifyUnion8758<Exclude<T, L>>, L>;

type DeepPartial8758<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8758<T[P]> }
  : T;

type Paths8758<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8758<K, Paths8758<T[K], Prev8758[D]>> : never }[keyof T]
  : never;

type Prev8758 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8758<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8758 {
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

type ConfigPaths8758 = Paths8758<NestedConfig8758>;

interface HeavyProps8758 {
  config: DeepPartial8758<NestedConfig8758>;
  path?: ConfigPaths8758;
}

const HeavyComponent8758 = memo(function HeavyComponent8758({ config }: HeavyProps8758) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8758) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8758 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8758: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8758.displayName = 'HeavyComponent8758';
export default HeavyComponent8758;
