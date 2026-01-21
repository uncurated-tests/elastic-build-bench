'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14789<T> = T extends (infer U)[]
  ? DeepReadonlyArray14789<U>
  : T extends object
  ? DeepReadonlyObject14789<T>
  : T;

interface DeepReadonlyArray14789<T> extends ReadonlyArray<DeepReadonly14789<T>> {}

type DeepReadonlyObject14789<T> = {
  readonly [P in keyof T]: DeepReadonly14789<T[P]>;
};

type UnionToIntersection14789<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14789<T> = UnionToIntersection14789<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14789<T extends unknown[], V> = [...T, V];

type TuplifyUnion14789<T, L = LastOf14789<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14789<TuplifyUnion14789<Exclude<T, L>>, L>;

type DeepPartial14789<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14789<T[P]> }
  : T;

type Paths14789<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14789<K, Paths14789<T[K], Prev14789[D]>> : never }[keyof T]
  : never;

type Prev14789 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14789<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14789 {
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

type ConfigPaths14789 = Paths14789<NestedConfig14789>;

interface HeavyProps14789 {
  config: DeepPartial14789<NestedConfig14789>;
  path?: ConfigPaths14789;
}

const HeavyComponent14789 = memo(function HeavyComponent14789({ config }: HeavyProps14789) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14789) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14789 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14789: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14789.displayName = 'HeavyComponent14789';
export default HeavyComponent14789;
