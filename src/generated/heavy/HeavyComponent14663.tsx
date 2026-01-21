'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14663<T> = T extends (infer U)[]
  ? DeepReadonlyArray14663<U>
  : T extends object
  ? DeepReadonlyObject14663<T>
  : T;

interface DeepReadonlyArray14663<T> extends ReadonlyArray<DeepReadonly14663<T>> {}

type DeepReadonlyObject14663<T> = {
  readonly [P in keyof T]: DeepReadonly14663<T[P]>;
};

type UnionToIntersection14663<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14663<T> = UnionToIntersection14663<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14663<T extends unknown[], V> = [...T, V];

type TuplifyUnion14663<T, L = LastOf14663<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14663<TuplifyUnion14663<Exclude<T, L>>, L>;

type DeepPartial14663<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14663<T[P]> }
  : T;

type Paths14663<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14663<K, Paths14663<T[K], Prev14663[D]>> : never }[keyof T]
  : never;

type Prev14663 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14663<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14663 {
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

type ConfigPaths14663 = Paths14663<NestedConfig14663>;

interface HeavyProps14663 {
  config: DeepPartial14663<NestedConfig14663>;
  path?: ConfigPaths14663;
}

const HeavyComponent14663 = memo(function HeavyComponent14663({ config }: HeavyProps14663) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14663) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14663 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14663: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14663.displayName = 'HeavyComponent14663';
export default HeavyComponent14663;
