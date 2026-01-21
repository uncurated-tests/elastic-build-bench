'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14511<T> = T extends (infer U)[]
  ? DeepReadonlyArray14511<U>
  : T extends object
  ? DeepReadonlyObject14511<T>
  : T;

interface DeepReadonlyArray14511<T> extends ReadonlyArray<DeepReadonly14511<T>> {}

type DeepReadonlyObject14511<T> = {
  readonly [P in keyof T]: DeepReadonly14511<T[P]>;
};

type UnionToIntersection14511<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14511<T> = UnionToIntersection14511<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14511<T extends unknown[], V> = [...T, V];

type TuplifyUnion14511<T, L = LastOf14511<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14511<TuplifyUnion14511<Exclude<T, L>>, L>;

type DeepPartial14511<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14511<T[P]> }
  : T;

type Paths14511<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14511<K, Paths14511<T[K], Prev14511[D]>> : never }[keyof T]
  : never;

type Prev14511 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14511<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14511 {
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

type ConfigPaths14511 = Paths14511<NestedConfig14511>;

interface HeavyProps14511 {
  config: DeepPartial14511<NestedConfig14511>;
  path?: ConfigPaths14511;
}

const HeavyComponent14511 = memo(function HeavyComponent14511({ config }: HeavyProps14511) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14511) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14511 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14511: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14511.displayName = 'HeavyComponent14511';
export default HeavyComponent14511;
