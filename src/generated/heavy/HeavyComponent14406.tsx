'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14406<T> = T extends (infer U)[]
  ? DeepReadonlyArray14406<U>
  : T extends object
  ? DeepReadonlyObject14406<T>
  : T;

interface DeepReadonlyArray14406<T> extends ReadonlyArray<DeepReadonly14406<T>> {}

type DeepReadonlyObject14406<T> = {
  readonly [P in keyof T]: DeepReadonly14406<T[P]>;
};

type UnionToIntersection14406<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14406<T> = UnionToIntersection14406<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14406<T extends unknown[], V> = [...T, V];

type TuplifyUnion14406<T, L = LastOf14406<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14406<TuplifyUnion14406<Exclude<T, L>>, L>;

type DeepPartial14406<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14406<T[P]> }
  : T;

type Paths14406<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14406<K, Paths14406<T[K], Prev14406[D]>> : never }[keyof T]
  : never;

type Prev14406 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14406<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14406 {
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

type ConfigPaths14406 = Paths14406<NestedConfig14406>;

interface HeavyProps14406 {
  config: DeepPartial14406<NestedConfig14406>;
  path?: ConfigPaths14406;
}

const HeavyComponent14406 = memo(function HeavyComponent14406({ config }: HeavyProps14406) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14406) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14406 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14406: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14406.displayName = 'HeavyComponent14406';
export default HeavyComponent14406;
