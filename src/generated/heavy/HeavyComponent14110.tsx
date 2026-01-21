'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14110<T> = T extends (infer U)[]
  ? DeepReadonlyArray14110<U>
  : T extends object
  ? DeepReadonlyObject14110<T>
  : T;

interface DeepReadonlyArray14110<T> extends ReadonlyArray<DeepReadonly14110<T>> {}

type DeepReadonlyObject14110<T> = {
  readonly [P in keyof T]: DeepReadonly14110<T[P]>;
};

type UnionToIntersection14110<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14110<T> = UnionToIntersection14110<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14110<T extends unknown[], V> = [...T, V];

type TuplifyUnion14110<T, L = LastOf14110<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14110<TuplifyUnion14110<Exclude<T, L>>, L>;

type DeepPartial14110<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14110<T[P]> }
  : T;

type Paths14110<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14110<K, Paths14110<T[K], Prev14110[D]>> : never }[keyof T]
  : never;

type Prev14110 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14110<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14110 {
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

type ConfigPaths14110 = Paths14110<NestedConfig14110>;

interface HeavyProps14110 {
  config: DeepPartial14110<NestedConfig14110>;
  path?: ConfigPaths14110;
}

const HeavyComponent14110 = memo(function HeavyComponent14110({ config }: HeavyProps14110) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14110) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14110 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14110: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14110.displayName = 'HeavyComponent14110';
export default HeavyComponent14110;
