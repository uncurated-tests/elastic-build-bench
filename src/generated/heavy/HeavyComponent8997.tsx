'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8997<T> = T extends (infer U)[]
  ? DeepReadonlyArray8997<U>
  : T extends object
  ? DeepReadonlyObject8997<T>
  : T;

interface DeepReadonlyArray8997<T> extends ReadonlyArray<DeepReadonly8997<T>> {}

type DeepReadonlyObject8997<T> = {
  readonly [P in keyof T]: DeepReadonly8997<T[P]>;
};

type UnionToIntersection8997<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8997<T> = UnionToIntersection8997<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8997<T extends unknown[], V> = [...T, V];

type TuplifyUnion8997<T, L = LastOf8997<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8997<TuplifyUnion8997<Exclude<T, L>>, L>;

type DeepPartial8997<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8997<T[P]> }
  : T;

type Paths8997<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8997<K, Paths8997<T[K], Prev8997[D]>> : never }[keyof T]
  : never;

type Prev8997 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8997<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8997 {
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

type ConfigPaths8997 = Paths8997<NestedConfig8997>;

interface HeavyProps8997 {
  config: DeepPartial8997<NestedConfig8997>;
  path?: ConfigPaths8997;
}

const HeavyComponent8997 = memo(function HeavyComponent8997({ config }: HeavyProps8997) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8997) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8997 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8997: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8997.displayName = 'HeavyComponent8997';
export default HeavyComponent8997;
