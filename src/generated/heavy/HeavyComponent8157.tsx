'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8157<T> = T extends (infer U)[]
  ? DeepReadonlyArray8157<U>
  : T extends object
  ? DeepReadonlyObject8157<T>
  : T;

interface DeepReadonlyArray8157<T> extends ReadonlyArray<DeepReadonly8157<T>> {}

type DeepReadonlyObject8157<T> = {
  readonly [P in keyof T]: DeepReadonly8157<T[P]>;
};

type UnionToIntersection8157<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8157<T> = UnionToIntersection8157<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8157<T extends unknown[], V> = [...T, V];

type TuplifyUnion8157<T, L = LastOf8157<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8157<TuplifyUnion8157<Exclude<T, L>>, L>;

type DeepPartial8157<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8157<T[P]> }
  : T;

type Paths8157<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8157<K, Paths8157<T[K], Prev8157[D]>> : never }[keyof T]
  : never;

type Prev8157 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8157<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8157 {
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

type ConfigPaths8157 = Paths8157<NestedConfig8157>;

interface HeavyProps8157 {
  config: DeepPartial8157<NestedConfig8157>;
  path?: ConfigPaths8157;
}

const HeavyComponent8157 = memo(function HeavyComponent8157({ config }: HeavyProps8157) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8157) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8157 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8157: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8157.displayName = 'HeavyComponent8157';
export default HeavyComponent8157;
