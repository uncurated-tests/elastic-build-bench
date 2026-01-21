'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14804<T> = T extends (infer U)[]
  ? DeepReadonlyArray14804<U>
  : T extends object
  ? DeepReadonlyObject14804<T>
  : T;

interface DeepReadonlyArray14804<T> extends ReadonlyArray<DeepReadonly14804<T>> {}

type DeepReadonlyObject14804<T> = {
  readonly [P in keyof T]: DeepReadonly14804<T[P]>;
};

type UnionToIntersection14804<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14804<T> = UnionToIntersection14804<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14804<T extends unknown[], V> = [...T, V];

type TuplifyUnion14804<T, L = LastOf14804<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14804<TuplifyUnion14804<Exclude<T, L>>, L>;

type DeepPartial14804<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14804<T[P]> }
  : T;

type Paths14804<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14804<K, Paths14804<T[K], Prev14804[D]>> : never }[keyof T]
  : never;

type Prev14804 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14804<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14804 {
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

type ConfigPaths14804 = Paths14804<NestedConfig14804>;

interface HeavyProps14804 {
  config: DeepPartial14804<NestedConfig14804>;
  path?: ConfigPaths14804;
}

const HeavyComponent14804 = memo(function HeavyComponent14804({ config }: HeavyProps14804) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14804) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14804 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14804: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14804.displayName = 'HeavyComponent14804';
export default HeavyComponent14804;
