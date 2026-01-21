'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8801<T> = T extends (infer U)[]
  ? DeepReadonlyArray8801<U>
  : T extends object
  ? DeepReadonlyObject8801<T>
  : T;

interface DeepReadonlyArray8801<T> extends ReadonlyArray<DeepReadonly8801<T>> {}

type DeepReadonlyObject8801<T> = {
  readonly [P in keyof T]: DeepReadonly8801<T[P]>;
};

type UnionToIntersection8801<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8801<T> = UnionToIntersection8801<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8801<T extends unknown[], V> = [...T, V];

type TuplifyUnion8801<T, L = LastOf8801<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8801<TuplifyUnion8801<Exclude<T, L>>, L>;

type DeepPartial8801<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8801<T[P]> }
  : T;

type Paths8801<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8801<K, Paths8801<T[K], Prev8801[D]>> : never }[keyof T]
  : never;

type Prev8801 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8801<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8801 {
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

type ConfigPaths8801 = Paths8801<NestedConfig8801>;

interface HeavyProps8801 {
  config: DeepPartial8801<NestedConfig8801>;
  path?: ConfigPaths8801;
}

const HeavyComponent8801 = memo(function HeavyComponent8801({ config }: HeavyProps8801) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8801) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8801 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8801: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8801.displayName = 'HeavyComponent8801';
export default HeavyComponent8801;
