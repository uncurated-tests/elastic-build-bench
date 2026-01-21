'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2674<T> = T extends (infer U)[]
  ? DeepReadonlyArray2674<U>
  : T extends object
  ? DeepReadonlyObject2674<T>
  : T;

interface DeepReadonlyArray2674<T> extends ReadonlyArray<DeepReadonly2674<T>> {}

type DeepReadonlyObject2674<T> = {
  readonly [P in keyof T]: DeepReadonly2674<T[P]>;
};

type UnionToIntersection2674<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2674<T> = UnionToIntersection2674<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2674<T extends unknown[], V> = [...T, V];

type TuplifyUnion2674<T, L = LastOf2674<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2674<TuplifyUnion2674<Exclude<T, L>>, L>;

type DeepPartial2674<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2674<T[P]> }
  : T;

type Paths2674<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2674<K, Paths2674<T[K], Prev2674[D]>> : never }[keyof T]
  : never;

type Prev2674 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2674<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2674 {
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

type ConfigPaths2674 = Paths2674<NestedConfig2674>;

interface HeavyProps2674 {
  config: DeepPartial2674<NestedConfig2674>;
  path?: ConfigPaths2674;
}

const HeavyComponent2674 = memo(function HeavyComponent2674({ config }: HeavyProps2674) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2674) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2674 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2674: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2674.displayName = 'HeavyComponent2674';
export default HeavyComponent2674;
