'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8553<T> = T extends (infer U)[]
  ? DeepReadonlyArray8553<U>
  : T extends object
  ? DeepReadonlyObject8553<T>
  : T;

interface DeepReadonlyArray8553<T> extends ReadonlyArray<DeepReadonly8553<T>> {}

type DeepReadonlyObject8553<T> = {
  readonly [P in keyof T]: DeepReadonly8553<T[P]>;
};

type UnionToIntersection8553<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8553<T> = UnionToIntersection8553<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8553<T extends unknown[], V> = [...T, V];

type TuplifyUnion8553<T, L = LastOf8553<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8553<TuplifyUnion8553<Exclude<T, L>>, L>;

type DeepPartial8553<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8553<T[P]> }
  : T;

type Paths8553<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8553<K, Paths8553<T[K], Prev8553[D]>> : never }[keyof T]
  : never;

type Prev8553 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8553<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8553 {
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

type ConfigPaths8553 = Paths8553<NestedConfig8553>;

interface HeavyProps8553 {
  config: DeepPartial8553<NestedConfig8553>;
  path?: ConfigPaths8553;
}

const HeavyComponent8553 = memo(function HeavyComponent8553({ config }: HeavyProps8553) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8553) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8553 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8553: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8553.displayName = 'HeavyComponent8553';
export default HeavyComponent8553;
