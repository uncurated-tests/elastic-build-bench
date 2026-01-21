'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8803<T> = T extends (infer U)[]
  ? DeepReadonlyArray8803<U>
  : T extends object
  ? DeepReadonlyObject8803<T>
  : T;

interface DeepReadonlyArray8803<T> extends ReadonlyArray<DeepReadonly8803<T>> {}

type DeepReadonlyObject8803<T> = {
  readonly [P in keyof T]: DeepReadonly8803<T[P]>;
};

type UnionToIntersection8803<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8803<T> = UnionToIntersection8803<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8803<T extends unknown[], V> = [...T, V];

type TuplifyUnion8803<T, L = LastOf8803<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8803<TuplifyUnion8803<Exclude<T, L>>, L>;

type DeepPartial8803<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8803<T[P]> }
  : T;

type Paths8803<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8803<K, Paths8803<T[K], Prev8803[D]>> : never }[keyof T]
  : never;

type Prev8803 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8803<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8803 {
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

type ConfigPaths8803 = Paths8803<NestedConfig8803>;

interface HeavyProps8803 {
  config: DeepPartial8803<NestedConfig8803>;
  path?: ConfigPaths8803;
}

const HeavyComponent8803 = memo(function HeavyComponent8803({ config }: HeavyProps8803) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8803) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8803 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8803: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8803.displayName = 'HeavyComponent8803';
export default HeavyComponent8803;
