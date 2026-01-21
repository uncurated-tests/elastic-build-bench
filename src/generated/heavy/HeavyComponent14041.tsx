'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14041<T> = T extends (infer U)[]
  ? DeepReadonlyArray14041<U>
  : T extends object
  ? DeepReadonlyObject14041<T>
  : T;

interface DeepReadonlyArray14041<T> extends ReadonlyArray<DeepReadonly14041<T>> {}

type DeepReadonlyObject14041<T> = {
  readonly [P in keyof T]: DeepReadonly14041<T[P]>;
};

type UnionToIntersection14041<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14041<T> = UnionToIntersection14041<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14041<T extends unknown[], V> = [...T, V];

type TuplifyUnion14041<T, L = LastOf14041<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14041<TuplifyUnion14041<Exclude<T, L>>, L>;

type DeepPartial14041<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14041<T[P]> }
  : T;

type Paths14041<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14041<K, Paths14041<T[K], Prev14041[D]>> : never }[keyof T]
  : never;

type Prev14041 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14041<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14041 {
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

type ConfigPaths14041 = Paths14041<NestedConfig14041>;

interface HeavyProps14041 {
  config: DeepPartial14041<NestedConfig14041>;
  path?: ConfigPaths14041;
}

const HeavyComponent14041 = memo(function HeavyComponent14041({ config }: HeavyProps14041) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14041) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14041 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14041: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14041.displayName = 'HeavyComponent14041';
export default HeavyComponent14041;
