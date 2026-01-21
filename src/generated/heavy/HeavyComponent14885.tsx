'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14885<T> = T extends (infer U)[]
  ? DeepReadonlyArray14885<U>
  : T extends object
  ? DeepReadonlyObject14885<T>
  : T;

interface DeepReadonlyArray14885<T> extends ReadonlyArray<DeepReadonly14885<T>> {}

type DeepReadonlyObject14885<T> = {
  readonly [P in keyof T]: DeepReadonly14885<T[P]>;
};

type UnionToIntersection14885<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14885<T> = UnionToIntersection14885<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14885<T extends unknown[], V> = [...T, V];

type TuplifyUnion14885<T, L = LastOf14885<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14885<TuplifyUnion14885<Exclude<T, L>>, L>;

type DeepPartial14885<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14885<T[P]> }
  : T;

type Paths14885<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14885<K, Paths14885<T[K], Prev14885[D]>> : never }[keyof T]
  : never;

type Prev14885 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14885<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14885 {
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

type ConfigPaths14885 = Paths14885<NestedConfig14885>;

interface HeavyProps14885 {
  config: DeepPartial14885<NestedConfig14885>;
  path?: ConfigPaths14885;
}

const HeavyComponent14885 = memo(function HeavyComponent14885({ config }: HeavyProps14885) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14885) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14885 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14885: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14885.displayName = 'HeavyComponent14885';
export default HeavyComponent14885;
