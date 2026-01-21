'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14607<T> = T extends (infer U)[]
  ? DeepReadonlyArray14607<U>
  : T extends object
  ? DeepReadonlyObject14607<T>
  : T;

interface DeepReadonlyArray14607<T> extends ReadonlyArray<DeepReadonly14607<T>> {}

type DeepReadonlyObject14607<T> = {
  readonly [P in keyof T]: DeepReadonly14607<T[P]>;
};

type UnionToIntersection14607<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14607<T> = UnionToIntersection14607<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14607<T extends unknown[], V> = [...T, V];

type TuplifyUnion14607<T, L = LastOf14607<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14607<TuplifyUnion14607<Exclude<T, L>>, L>;

type DeepPartial14607<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14607<T[P]> }
  : T;

type Paths14607<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14607<K, Paths14607<T[K], Prev14607[D]>> : never }[keyof T]
  : never;

type Prev14607 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14607<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14607 {
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

type ConfigPaths14607 = Paths14607<NestedConfig14607>;

interface HeavyProps14607 {
  config: DeepPartial14607<NestedConfig14607>;
  path?: ConfigPaths14607;
}

const HeavyComponent14607 = memo(function HeavyComponent14607({ config }: HeavyProps14607) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14607) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14607 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14607: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14607.displayName = 'HeavyComponent14607';
export default HeavyComponent14607;
