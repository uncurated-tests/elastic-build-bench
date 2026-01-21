'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8076<T> = T extends (infer U)[]
  ? DeepReadonlyArray8076<U>
  : T extends object
  ? DeepReadonlyObject8076<T>
  : T;

interface DeepReadonlyArray8076<T> extends ReadonlyArray<DeepReadonly8076<T>> {}

type DeepReadonlyObject8076<T> = {
  readonly [P in keyof T]: DeepReadonly8076<T[P]>;
};

type UnionToIntersection8076<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8076<T> = UnionToIntersection8076<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8076<T extends unknown[], V> = [...T, V];

type TuplifyUnion8076<T, L = LastOf8076<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8076<TuplifyUnion8076<Exclude<T, L>>, L>;

type DeepPartial8076<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8076<T[P]> }
  : T;

type Paths8076<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8076<K, Paths8076<T[K], Prev8076[D]>> : never }[keyof T]
  : never;

type Prev8076 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8076<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8076 {
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

type ConfigPaths8076 = Paths8076<NestedConfig8076>;

interface HeavyProps8076 {
  config: DeepPartial8076<NestedConfig8076>;
  path?: ConfigPaths8076;
}

const HeavyComponent8076 = memo(function HeavyComponent8076({ config }: HeavyProps8076) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8076) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8076 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8076: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8076.displayName = 'HeavyComponent8076';
export default HeavyComponent8076;
