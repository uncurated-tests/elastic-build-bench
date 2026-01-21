'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14333<T> = T extends (infer U)[]
  ? DeepReadonlyArray14333<U>
  : T extends object
  ? DeepReadonlyObject14333<T>
  : T;

interface DeepReadonlyArray14333<T> extends ReadonlyArray<DeepReadonly14333<T>> {}

type DeepReadonlyObject14333<T> = {
  readonly [P in keyof T]: DeepReadonly14333<T[P]>;
};

type UnionToIntersection14333<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14333<T> = UnionToIntersection14333<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14333<T extends unknown[], V> = [...T, V];

type TuplifyUnion14333<T, L = LastOf14333<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14333<TuplifyUnion14333<Exclude<T, L>>, L>;

type DeepPartial14333<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14333<T[P]> }
  : T;

type Paths14333<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14333<K, Paths14333<T[K], Prev14333[D]>> : never }[keyof T]
  : never;

type Prev14333 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14333<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14333 {
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

type ConfigPaths14333 = Paths14333<NestedConfig14333>;

interface HeavyProps14333 {
  config: DeepPartial14333<NestedConfig14333>;
  path?: ConfigPaths14333;
}

const HeavyComponent14333 = memo(function HeavyComponent14333({ config }: HeavyProps14333) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14333) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14333 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14333: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14333.displayName = 'HeavyComponent14333';
export default HeavyComponent14333;
