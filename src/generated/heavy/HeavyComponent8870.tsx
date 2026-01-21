'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8870<T> = T extends (infer U)[]
  ? DeepReadonlyArray8870<U>
  : T extends object
  ? DeepReadonlyObject8870<T>
  : T;

interface DeepReadonlyArray8870<T> extends ReadonlyArray<DeepReadonly8870<T>> {}

type DeepReadonlyObject8870<T> = {
  readonly [P in keyof T]: DeepReadonly8870<T[P]>;
};

type UnionToIntersection8870<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8870<T> = UnionToIntersection8870<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8870<T extends unknown[], V> = [...T, V];

type TuplifyUnion8870<T, L = LastOf8870<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8870<TuplifyUnion8870<Exclude<T, L>>, L>;

type DeepPartial8870<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8870<T[P]> }
  : T;

type Paths8870<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8870<K, Paths8870<T[K], Prev8870[D]>> : never }[keyof T]
  : never;

type Prev8870 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8870<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8870 {
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

type ConfigPaths8870 = Paths8870<NestedConfig8870>;

interface HeavyProps8870 {
  config: DeepPartial8870<NestedConfig8870>;
  path?: ConfigPaths8870;
}

const HeavyComponent8870 = memo(function HeavyComponent8870({ config }: HeavyProps8870) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8870) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8870 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8870: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8870.displayName = 'HeavyComponent8870';
export default HeavyComponent8870;
