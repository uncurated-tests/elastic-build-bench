'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8173<T> = T extends (infer U)[]
  ? DeepReadonlyArray8173<U>
  : T extends object
  ? DeepReadonlyObject8173<T>
  : T;

interface DeepReadonlyArray8173<T> extends ReadonlyArray<DeepReadonly8173<T>> {}

type DeepReadonlyObject8173<T> = {
  readonly [P in keyof T]: DeepReadonly8173<T[P]>;
};

type UnionToIntersection8173<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8173<T> = UnionToIntersection8173<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8173<T extends unknown[], V> = [...T, V];

type TuplifyUnion8173<T, L = LastOf8173<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8173<TuplifyUnion8173<Exclude<T, L>>, L>;

type DeepPartial8173<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8173<T[P]> }
  : T;

type Paths8173<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8173<K, Paths8173<T[K], Prev8173[D]>> : never }[keyof T]
  : never;

type Prev8173 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8173<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8173 {
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

type ConfigPaths8173 = Paths8173<NestedConfig8173>;

interface HeavyProps8173 {
  config: DeepPartial8173<NestedConfig8173>;
  path?: ConfigPaths8173;
}

const HeavyComponent8173 = memo(function HeavyComponent8173({ config }: HeavyProps8173) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8173) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8173 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8173: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8173.displayName = 'HeavyComponent8173';
export default HeavyComponent8173;
