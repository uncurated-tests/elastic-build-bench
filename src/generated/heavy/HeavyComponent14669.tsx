'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14669<T> = T extends (infer U)[]
  ? DeepReadonlyArray14669<U>
  : T extends object
  ? DeepReadonlyObject14669<T>
  : T;

interface DeepReadonlyArray14669<T> extends ReadonlyArray<DeepReadonly14669<T>> {}

type DeepReadonlyObject14669<T> = {
  readonly [P in keyof T]: DeepReadonly14669<T[P]>;
};

type UnionToIntersection14669<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14669<T> = UnionToIntersection14669<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14669<T extends unknown[], V> = [...T, V];

type TuplifyUnion14669<T, L = LastOf14669<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14669<TuplifyUnion14669<Exclude<T, L>>, L>;

type DeepPartial14669<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14669<T[P]> }
  : T;

type Paths14669<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14669<K, Paths14669<T[K], Prev14669[D]>> : never }[keyof T]
  : never;

type Prev14669 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14669<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14669 {
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

type ConfigPaths14669 = Paths14669<NestedConfig14669>;

interface HeavyProps14669 {
  config: DeepPartial14669<NestedConfig14669>;
  path?: ConfigPaths14669;
}

const HeavyComponent14669 = memo(function HeavyComponent14669({ config }: HeavyProps14669) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14669) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14669 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14669: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14669.displayName = 'HeavyComponent14669';
export default HeavyComponent14669;
