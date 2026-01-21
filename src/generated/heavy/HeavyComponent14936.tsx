'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14936<T> = T extends (infer U)[]
  ? DeepReadonlyArray14936<U>
  : T extends object
  ? DeepReadonlyObject14936<T>
  : T;

interface DeepReadonlyArray14936<T> extends ReadonlyArray<DeepReadonly14936<T>> {}

type DeepReadonlyObject14936<T> = {
  readonly [P in keyof T]: DeepReadonly14936<T[P]>;
};

type UnionToIntersection14936<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14936<T> = UnionToIntersection14936<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14936<T extends unknown[], V> = [...T, V];

type TuplifyUnion14936<T, L = LastOf14936<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14936<TuplifyUnion14936<Exclude<T, L>>, L>;

type DeepPartial14936<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14936<T[P]> }
  : T;

type Paths14936<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14936<K, Paths14936<T[K], Prev14936[D]>> : never }[keyof T]
  : never;

type Prev14936 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14936<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14936 {
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

type ConfigPaths14936 = Paths14936<NestedConfig14936>;

interface HeavyProps14936 {
  config: DeepPartial14936<NestedConfig14936>;
  path?: ConfigPaths14936;
}

const HeavyComponent14936 = memo(function HeavyComponent14936({ config }: HeavyProps14936) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14936) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14936 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14936: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14936.displayName = 'HeavyComponent14936';
export default HeavyComponent14936;
