'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14700<T> = T extends (infer U)[]
  ? DeepReadonlyArray14700<U>
  : T extends object
  ? DeepReadonlyObject14700<T>
  : T;

interface DeepReadonlyArray14700<T> extends ReadonlyArray<DeepReadonly14700<T>> {}

type DeepReadonlyObject14700<T> = {
  readonly [P in keyof T]: DeepReadonly14700<T[P]>;
};

type UnionToIntersection14700<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14700<T> = UnionToIntersection14700<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14700<T extends unknown[], V> = [...T, V];

type TuplifyUnion14700<T, L = LastOf14700<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14700<TuplifyUnion14700<Exclude<T, L>>, L>;

type DeepPartial14700<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14700<T[P]> }
  : T;

type Paths14700<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14700<K, Paths14700<T[K], Prev14700[D]>> : never }[keyof T]
  : never;

type Prev14700 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14700<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14700 {
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

type ConfigPaths14700 = Paths14700<NestedConfig14700>;

interface HeavyProps14700 {
  config: DeepPartial14700<NestedConfig14700>;
  path?: ConfigPaths14700;
}

const HeavyComponent14700 = memo(function HeavyComponent14700({ config }: HeavyProps14700) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14700) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14700 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14700: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14700.displayName = 'HeavyComponent14700';
export default HeavyComponent14700;
