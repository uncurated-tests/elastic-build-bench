'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14961<T> = T extends (infer U)[]
  ? DeepReadonlyArray14961<U>
  : T extends object
  ? DeepReadonlyObject14961<T>
  : T;

interface DeepReadonlyArray14961<T> extends ReadonlyArray<DeepReadonly14961<T>> {}

type DeepReadonlyObject14961<T> = {
  readonly [P in keyof T]: DeepReadonly14961<T[P]>;
};

type UnionToIntersection14961<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14961<T> = UnionToIntersection14961<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14961<T extends unknown[], V> = [...T, V];

type TuplifyUnion14961<T, L = LastOf14961<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14961<TuplifyUnion14961<Exclude<T, L>>, L>;

type DeepPartial14961<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14961<T[P]> }
  : T;

type Paths14961<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14961<K, Paths14961<T[K], Prev14961[D]>> : never }[keyof T]
  : never;

type Prev14961 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14961<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14961 {
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

type ConfigPaths14961 = Paths14961<NestedConfig14961>;

interface HeavyProps14961 {
  config: DeepPartial14961<NestedConfig14961>;
  path?: ConfigPaths14961;
}

const HeavyComponent14961 = memo(function HeavyComponent14961({ config }: HeavyProps14961) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14961) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14961 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14961: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14961.displayName = 'HeavyComponent14961';
export default HeavyComponent14961;
