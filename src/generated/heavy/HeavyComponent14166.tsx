'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14166<T> = T extends (infer U)[]
  ? DeepReadonlyArray14166<U>
  : T extends object
  ? DeepReadonlyObject14166<T>
  : T;

interface DeepReadonlyArray14166<T> extends ReadonlyArray<DeepReadonly14166<T>> {}

type DeepReadonlyObject14166<T> = {
  readonly [P in keyof T]: DeepReadonly14166<T[P]>;
};

type UnionToIntersection14166<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14166<T> = UnionToIntersection14166<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14166<T extends unknown[], V> = [...T, V];

type TuplifyUnion14166<T, L = LastOf14166<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14166<TuplifyUnion14166<Exclude<T, L>>, L>;

type DeepPartial14166<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14166<T[P]> }
  : T;

type Paths14166<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14166<K, Paths14166<T[K], Prev14166[D]>> : never }[keyof T]
  : never;

type Prev14166 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14166<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14166 {
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

type ConfigPaths14166 = Paths14166<NestedConfig14166>;

interface HeavyProps14166 {
  config: DeepPartial14166<NestedConfig14166>;
  path?: ConfigPaths14166;
}

const HeavyComponent14166 = memo(function HeavyComponent14166({ config }: HeavyProps14166) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14166) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14166 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14166: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14166.displayName = 'HeavyComponent14166';
export default HeavyComponent14166;
