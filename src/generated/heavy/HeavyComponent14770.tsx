'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14770<T> = T extends (infer U)[]
  ? DeepReadonlyArray14770<U>
  : T extends object
  ? DeepReadonlyObject14770<T>
  : T;

interface DeepReadonlyArray14770<T> extends ReadonlyArray<DeepReadonly14770<T>> {}

type DeepReadonlyObject14770<T> = {
  readonly [P in keyof T]: DeepReadonly14770<T[P]>;
};

type UnionToIntersection14770<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14770<T> = UnionToIntersection14770<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14770<T extends unknown[], V> = [...T, V];

type TuplifyUnion14770<T, L = LastOf14770<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14770<TuplifyUnion14770<Exclude<T, L>>, L>;

type DeepPartial14770<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14770<T[P]> }
  : T;

type Paths14770<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14770<K, Paths14770<T[K], Prev14770[D]>> : never }[keyof T]
  : never;

type Prev14770 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14770<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14770 {
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

type ConfigPaths14770 = Paths14770<NestedConfig14770>;

interface HeavyProps14770 {
  config: DeepPartial14770<NestedConfig14770>;
  path?: ConfigPaths14770;
}

const HeavyComponent14770 = memo(function HeavyComponent14770({ config }: HeavyProps14770) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14770) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14770 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14770: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14770.displayName = 'HeavyComponent14770';
export default HeavyComponent14770;
