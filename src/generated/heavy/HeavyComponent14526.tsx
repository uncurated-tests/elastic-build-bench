'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14526<T> = T extends (infer U)[]
  ? DeepReadonlyArray14526<U>
  : T extends object
  ? DeepReadonlyObject14526<T>
  : T;

interface DeepReadonlyArray14526<T> extends ReadonlyArray<DeepReadonly14526<T>> {}

type DeepReadonlyObject14526<T> = {
  readonly [P in keyof T]: DeepReadonly14526<T[P]>;
};

type UnionToIntersection14526<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14526<T> = UnionToIntersection14526<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14526<T extends unknown[], V> = [...T, V];

type TuplifyUnion14526<T, L = LastOf14526<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14526<TuplifyUnion14526<Exclude<T, L>>, L>;

type DeepPartial14526<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14526<T[P]> }
  : T;

type Paths14526<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14526<K, Paths14526<T[K], Prev14526[D]>> : never }[keyof T]
  : never;

type Prev14526 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14526<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14526 {
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

type ConfigPaths14526 = Paths14526<NestedConfig14526>;

interface HeavyProps14526 {
  config: DeepPartial14526<NestedConfig14526>;
  path?: ConfigPaths14526;
}

const HeavyComponent14526 = memo(function HeavyComponent14526({ config }: HeavyProps14526) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14526) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14526 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14526: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14526.displayName = 'HeavyComponent14526';
export default HeavyComponent14526;
