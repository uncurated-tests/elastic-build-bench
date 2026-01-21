'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14351<T> = T extends (infer U)[]
  ? DeepReadonlyArray14351<U>
  : T extends object
  ? DeepReadonlyObject14351<T>
  : T;

interface DeepReadonlyArray14351<T> extends ReadonlyArray<DeepReadonly14351<T>> {}

type DeepReadonlyObject14351<T> = {
  readonly [P in keyof T]: DeepReadonly14351<T[P]>;
};

type UnionToIntersection14351<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14351<T> = UnionToIntersection14351<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14351<T extends unknown[], V> = [...T, V];

type TuplifyUnion14351<T, L = LastOf14351<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14351<TuplifyUnion14351<Exclude<T, L>>, L>;

type DeepPartial14351<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14351<T[P]> }
  : T;

type Paths14351<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14351<K, Paths14351<T[K], Prev14351[D]>> : never }[keyof T]
  : never;

type Prev14351 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14351<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14351 {
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

type ConfigPaths14351 = Paths14351<NestedConfig14351>;

interface HeavyProps14351 {
  config: DeepPartial14351<NestedConfig14351>;
  path?: ConfigPaths14351;
}

const HeavyComponent14351 = memo(function HeavyComponent14351({ config }: HeavyProps14351) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14351) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14351 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14351: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14351.displayName = 'HeavyComponent14351';
export default HeavyComponent14351;
