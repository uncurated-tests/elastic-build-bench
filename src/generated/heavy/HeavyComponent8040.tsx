'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8040<T> = T extends (infer U)[]
  ? DeepReadonlyArray8040<U>
  : T extends object
  ? DeepReadonlyObject8040<T>
  : T;

interface DeepReadonlyArray8040<T> extends ReadonlyArray<DeepReadonly8040<T>> {}

type DeepReadonlyObject8040<T> = {
  readonly [P in keyof T]: DeepReadonly8040<T[P]>;
};

type UnionToIntersection8040<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8040<T> = UnionToIntersection8040<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8040<T extends unknown[], V> = [...T, V];

type TuplifyUnion8040<T, L = LastOf8040<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8040<TuplifyUnion8040<Exclude<T, L>>, L>;

type DeepPartial8040<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8040<T[P]> }
  : T;

type Paths8040<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8040<K, Paths8040<T[K], Prev8040[D]>> : never }[keyof T]
  : never;

type Prev8040 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8040<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8040 {
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

type ConfigPaths8040 = Paths8040<NestedConfig8040>;

interface HeavyProps8040 {
  config: DeepPartial8040<NestedConfig8040>;
  path?: ConfigPaths8040;
}

const HeavyComponent8040 = memo(function HeavyComponent8040({ config }: HeavyProps8040) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8040) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8040 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8040: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8040.displayName = 'HeavyComponent8040';
export default HeavyComponent8040;
