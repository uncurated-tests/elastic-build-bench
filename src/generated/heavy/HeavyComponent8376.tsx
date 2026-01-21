'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8376<T> = T extends (infer U)[]
  ? DeepReadonlyArray8376<U>
  : T extends object
  ? DeepReadonlyObject8376<T>
  : T;

interface DeepReadonlyArray8376<T> extends ReadonlyArray<DeepReadonly8376<T>> {}

type DeepReadonlyObject8376<T> = {
  readonly [P in keyof T]: DeepReadonly8376<T[P]>;
};

type UnionToIntersection8376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8376<T> = UnionToIntersection8376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8376<T extends unknown[], V> = [...T, V];

type TuplifyUnion8376<T, L = LastOf8376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8376<TuplifyUnion8376<Exclude<T, L>>, L>;

type DeepPartial8376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8376<T[P]> }
  : T;

type Paths8376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8376<K, Paths8376<T[K], Prev8376[D]>> : never }[keyof T]
  : never;

type Prev8376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8376 {
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

type ConfigPaths8376 = Paths8376<NestedConfig8376>;

interface HeavyProps8376 {
  config: DeepPartial8376<NestedConfig8376>;
  path?: ConfigPaths8376;
}

const HeavyComponent8376 = memo(function HeavyComponent8376({ config }: HeavyProps8376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8376.displayName = 'HeavyComponent8376';
export default HeavyComponent8376;
