'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14355<T> = T extends (infer U)[]
  ? DeepReadonlyArray14355<U>
  : T extends object
  ? DeepReadonlyObject14355<T>
  : T;

interface DeepReadonlyArray14355<T> extends ReadonlyArray<DeepReadonly14355<T>> {}

type DeepReadonlyObject14355<T> = {
  readonly [P in keyof T]: DeepReadonly14355<T[P]>;
};

type UnionToIntersection14355<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14355<T> = UnionToIntersection14355<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14355<T extends unknown[], V> = [...T, V];

type TuplifyUnion14355<T, L = LastOf14355<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14355<TuplifyUnion14355<Exclude<T, L>>, L>;

type DeepPartial14355<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14355<T[P]> }
  : T;

type Paths14355<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14355<K, Paths14355<T[K], Prev14355[D]>> : never }[keyof T]
  : never;

type Prev14355 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14355<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14355 {
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

type ConfigPaths14355 = Paths14355<NestedConfig14355>;

interface HeavyProps14355 {
  config: DeepPartial14355<NestedConfig14355>;
  path?: ConfigPaths14355;
}

const HeavyComponent14355 = memo(function HeavyComponent14355({ config }: HeavyProps14355) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14355) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14355 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14355: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14355.displayName = 'HeavyComponent14355';
export default HeavyComponent14355;
