'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14678<T> = T extends (infer U)[]
  ? DeepReadonlyArray14678<U>
  : T extends object
  ? DeepReadonlyObject14678<T>
  : T;

interface DeepReadonlyArray14678<T> extends ReadonlyArray<DeepReadonly14678<T>> {}

type DeepReadonlyObject14678<T> = {
  readonly [P in keyof T]: DeepReadonly14678<T[P]>;
};

type UnionToIntersection14678<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14678<T> = UnionToIntersection14678<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14678<T extends unknown[], V> = [...T, V];

type TuplifyUnion14678<T, L = LastOf14678<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14678<TuplifyUnion14678<Exclude<T, L>>, L>;

type DeepPartial14678<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14678<T[P]> }
  : T;

type Paths14678<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14678<K, Paths14678<T[K], Prev14678[D]>> : never }[keyof T]
  : never;

type Prev14678 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14678<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14678 {
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

type ConfigPaths14678 = Paths14678<NestedConfig14678>;

interface HeavyProps14678 {
  config: DeepPartial14678<NestedConfig14678>;
  path?: ConfigPaths14678;
}

const HeavyComponent14678 = memo(function HeavyComponent14678({ config }: HeavyProps14678) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14678) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14678 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14678: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14678.displayName = 'HeavyComponent14678';
export default HeavyComponent14678;
