'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14454<T> = T extends (infer U)[]
  ? DeepReadonlyArray14454<U>
  : T extends object
  ? DeepReadonlyObject14454<T>
  : T;

interface DeepReadonlyArray14454<T> extends ReadonlyArray<DeepReadonly14454<T>> {}

type DeepReadonlyObject14454<T> = {
  readonly [P in keyof T]: DeepReadonly14454<T[P]>;
};

type UnionToIntersection14454<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14454<T> = UnionToIntersection14454<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14454<T extends unknown[], V> = [...T, V];

type TuplifyUnion14454<T, L = LastOf14454<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14454<TuplifyUnion14454<Exclude<T, L>>, L>;

type DeepPartial14454<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14454<T[P]> }
  : T;

type Paths14454<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14454<K, Paths14454<T[K], Prev14454[D]>> : never }[keyof T]
  : never;

type Prev14454 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14454<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14454 {
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

type ConfigPaths14454 = Paths14454<NestedConfig14454>;

interface HeavyProps14454 {
  config: DeepPartial14454<NestedConfig14454>;
  path?: ConfigPaths14454;
}

const HeavyComponent14454 = memo(function HeavyComponent14454({ config }: HeavyProps14454) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14454) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14454 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14454: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14454.displayName = 'HeavyComponent14454';
export default HeavyComponent14454;
