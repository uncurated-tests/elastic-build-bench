'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14023<T> = T extends (infer U)[]
  ? DeepReadonlyArray14023<U>
  : T extends object
  ? DeepReadonlyObject14023<T>
  : T;

interface DeepReadonlyArray14023<T> extends ReadonlyArray<DeepReadonly14023<T>> {}

type DeepReadonlyObject14023<T> = {
  readonly [P in keyof T]: DeepReadonly14023<T[P]>;
};

type UnionToIntersection14023<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14023<T> = UnionToIntersection14023<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14023<T extends unknown[], V> = [...T, V];

type TuplifyUnion14023<T, L = LastOf14023<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14023<TuplifyUnion14023<Exclude<T, L>>, L>;

type DeepPartial14023<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14023<T[P]> }
  : T;

type Paths14023<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14023<K, Paths14023<T[K], Prev14023[D]>> : never }[keyof T]
  : never;

type Prev14023 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14023<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14023 {
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

type ConfigPaths14023 = Paths14023<NestedConfig14023>;

interface HeavyProps14023 {
  config: DeepPartial14023<NestedConfig14023>;
  path?: ConfigPaths14023;
}

const HeavyComponent14023 = memo(function HeavyComponent14023({ config }: HeavyProps14023) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14023) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14023 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14023: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14023.displayName = 'HeavyComponent14023';
export default HeavyComponent14023;
