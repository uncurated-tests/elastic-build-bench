'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14972<T> = T extends (infer U)[]
  ? DeepReadonlyArray14972<U>
  : T extends object
  ? DeepReadonlyObject14972<T>
  : T;

interface DeepReadonlyArray14972<T> extends ReadonlyArray<DeepReadonly14972<T>> {}

type DeepReadonlyObject14972<T> = {
  readonly [P in keyof T]: DeepReadonly14972<T[P]>;
};

type UnionToIntersection14972<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14972<T> = UnionToIntersection14972<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14972<T extends unknown[], V> = [...T, V];

type TuplifyUnion14972<T, L = LastOf14972<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14972<TuplifyUnion14972<Exclude<T, L>>, L>;

type DeepPartial14972<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14972<T[P]> }
  : T;

type Paths14972<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14972<K, Paths14972<T[K], Prev14972[D]>> : never }[keyof T]
  : never;

type Prev14972 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14972<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14972 {
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

type ConfigPaths14972 = Paths14972<NestedConfig14972>;

interface HeavyProps14972 {
  config: DeepPartial14972<NestedConfig14972>;
  path?: ConfigPaths14972;
}

const HeavyComponent14972 = memo(function HeavyComponent14972({ config }: HeavyProps14972) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14972) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14972 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14972: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14972.displayName = 'HeavyComponent14972';
export default HeavyComponent14972;
