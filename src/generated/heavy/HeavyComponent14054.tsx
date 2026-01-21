'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14054<T> = T extends (infer U)[]
  ? DeepReadonlyArray14054<U>
  : T extends object
  ? DeepReadonlyObject14054<T>
  : T;

interface DeepReadonlyArray14054<T> extends ReadonlyArray<DeepReadonly14054<T>> {}

type DeepReadonlyObject14054<T> = {
  readonly [P in keyof T]: DeepReadonly14054<T[P]>;
};

type UnionToIntersection14054<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14054<T> = UnionToIntersection14054<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14054<T extends unknown[], V> = [...T, V];

type TuplifyUnion14054<T, L = LastOf14054<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14054<TuplifyUnion14054<Exclude<T, L>>, L>;

type DeepPartial14054<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14054<T[P]> }
  : T;

type Paths14054<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14054<K, Paths14054<T[K], Prev14054[D]>> : never }[keyof T]
  : never;

type Prev14054 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14054<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14054 {
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

type ConfigPaths14054 = Paths14054<NestedConfig14054>;

interface HeavyProps14054 {
  config: DeepPartial14054<NestedConfig14054>;
  path?: ConfigPaths14054;
}

const HeavyComponent14054 = memo(function HeavyComponent14054({ config }: HeavyProps14054) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14054) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14054 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14054: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14054.displayName = 'HeavyComponent14054';
export default HeavyComponent14054;
