'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14076<T> = T extends (infer U)[]
  ? DeepReadonlyArray14076<U>
  : T extends object
  ? DeepReadonlyObject14076<T>
  : T;

interface DeepReadonlyArray14076<T> extends ReadonlyArray<DeepReadonly14076<T>> {}

type DeepReadonlyObject14076<T> = {
  readonly [P in keyof T]: DeepReadonly14076<T[P]>;
};

type UnionToIntersection14076<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14076<T> = UnionToIntersection14076<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14076<T extends unknown[], V> = [...T, V];

type TuplifyUnion14076<T, L = LastOf14076<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14076<TuplifyUnion14076<Exclude<T, L>>, L>;

type DeepPartial14076<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14076<T[P]> }
  : T;

type Paths14076<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14076<K, Paths14076<T[K], Prev14076[D]>> : never }[keyof T]
  : never;

type Prev14076 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14076<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14076 {
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

type ConfigPaths14076 = Paths14076<NestedConfig14076>;

interface HeavyProps14076 {
  config: DeepPartial14076<NestedConfig14076>;
  path?: ConfigPaths14076;
}

const HeavyComponent14076 = memo(function HeavyComponent14076({ config }: HeavyProps14076) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14076) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14076 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14076: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14076.displayName = 'HeavyComponent14076';
export default HeavyComponent14076;
