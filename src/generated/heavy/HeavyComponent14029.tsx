'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14029<T> = T extends (infer U)[]
  ? DeepReadonlyArray14029<U>
  : T extends object
  ? DeepReadonlyObject14029<T>
  : T;

interface DeepReadonlyArray14029<T> extends ReadonlyArray<DeepReadonly14029<T>> {}

type DeepReadonlyObject14029<T> = {
  readonly [P in keyof T]: DeepReadonly14029<T[P]>;
};

type UnionToIntersection14029<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14029<T> = UnionToIntersection14029<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14029<T extends unknown[], V> = [...T, V];

type TuplifyUnion14029<T, L = LastOf14029<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14029<TuplifyUnion14029<Exclude<T, L>>, L>;

type DeepPartial14029<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14029<T[P]> }
  : T;

type Paths14029<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14029<K, Paths14029<T[K], Prev14029[D]>> : never }[keyof T]
  : never;

type Prev14029 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14029<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14029 {
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

type ConfigPaths14029 = Paths14029<NestedConfig14029>;

interface HeavyProps14029 {
  config: DeepPartial14029<NestedConfig14029>;
  path?: ConfigPaths14029;
}

const HeavyComponent14029 = memo(function HeavyComponent14029({ config }: HeavyProps14029) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14029) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14029 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14029: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14029.displayName = 'HeavyComponent14029';
export default HeavyComponent14029;
