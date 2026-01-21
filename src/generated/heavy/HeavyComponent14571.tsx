'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14571<T> = T extends (infer U)[]
  ? DeepReadonlyArray14571<U>
  : T extends object
  ? DeepReadonlyObject14571<T>
  : T;

interface DeepReadonlyArray14571<T> extends ReadonlyArray<DeepReadonly14571<T>> {}

type DeepReadonlyObject14571<T> = {
  readonly [P in keyof T]: DeepReadonly14571<T[P]>;
};

type UnionToIntersection14571<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14571<T> = UnionToIntersection14571<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14571<T extends unknown[], V> = [...T, V];

type TuplifyUnion14571<T, L = LastOf14571<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14571<TuplifyUnion14571<Exclude<T, L>>, L>;

type DeepPartial14571<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14571<T[P]> }
  : T;

type Paths14571<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14571<K, Paths14571<T[K], Prev14571[D]>> : never }[keyof T]
  : never;

type Prev14571 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14571<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14571 {
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

type ConfigPaths14571 = Paths14571<NestedConfig14571>;

interface HeavyProps14571 {
  config: DeepPartial14571<NestedConfig14571>;
  path?: ConfigPaths14571;
}

const HeavyComponent14571 = memo(function HeavyComponent14571({ config }: HeavyProps14571) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14571) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14571 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14571: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14571.displayName = 'HeavyComponent14571';
export default HeavyComponent14571;
