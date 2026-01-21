'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8271<T> = T extends (infer U)[]
  ? DeepReadonlyArray8271<U>
  : T extends object
  ? DeepReadonlyObject8271<T>
  : T;

interface DeepReadonlyArray8271<T> extends ReadonlyArray<DeepReadonly8271<T>> {}

type DeepReadonlyObject8271<T> = {
  readonly [P in keyof T]: DeepReadonly8271<T[P]>;
};

type UnionToIntersection8271<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8271<T> = UnionToIntersection8271<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8271<T extends unknown[], V> = [...T, V];

type TuplifyUnion8271<T, L = LastOf8271<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8271<TuplifyUnion8271<Exclude<T, L>>, L>;

type DeepPartial8271<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8271<T[P]> }
  : T;

type Paths8271<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8271<K, Paths8271<T[K], Prev8271[D]>> : never }[keyof T]
  : never;

type Prev8271 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8271<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8271 {
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

type ConfigPaths8271 = Paths8271<NestedConfig8271>;

interface HeavyProps8271 {
  config: DeepPartial8271<NestedConfig8271>;
  path?: ConfigPaths8271;
}

const HeavyComponent8271 = memo(function HeavyComponent8271({ config }: HeavyProps8271) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8271) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8271 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8271: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8271.displayName = 'HeavyComponent8271';
export default HeavyComponent8271;
