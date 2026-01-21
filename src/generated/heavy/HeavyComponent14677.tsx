'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14677<T> = T extends (infer U)[]
  ? DeepReadonlyArray14677<U>
  : T extends object
  ? DeepReadonlyObject14677<T>
  : T;

interface DeepReadonlyArray14677<T> extends ReadonlyArray<DeepReadonly14677<T>> {}

type DeepReadonlyObject14677<T> = {
  readonly [P in keyof T]: DeepReadonly14677<T[P]>;
};

type UnionToIntersection14677<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14677<T> = UnionToIntersection14677<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14677<T extends unknown[], V> = [...T, V];

type TuplifyUnion14677<T, L = LastOf14677<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14677<TuplifyUnion14677<Exclude<T, L>>, L>;

type DeepPartial14677<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14677<T[P]> }
  : T;

type Paths14677<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14677<K, Paths14677<T[K], Prev14677[D]>> : never }[keyof T]
  : never;

type Prev14677 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14677<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14677 {
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

type ConfigPaths14677 = Paths14677<NestedConfig14677>;

interface HeavyProps14677 {
  config: DeepPartial14677<NestedConfig14677>;
  path?: ConfigPaths14677;
}

const HeavyComponent14677 = memo(function HeavyComponent14677({ config }: HeavyProps14677) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14677) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14677 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14677: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14677.displayName = 'HeavyComponent14677';
export default HeavyComponent14677;
