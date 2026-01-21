'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14162<T> = T extends (infer U)[]
  ? DeepReadonlyArray14162<U>
  : T extends object
  ? DeepReadonlyObject14162<T>
  : T;

interface DeepReadonlyArray14162<T> extends ReadonlyArray<DeepReadonly14162<T>> {}

type DeepReadonlyObject14162<T> = {
  readonly [P in keyof T]: DeepReadonly14162<T[P]>;
};

type UnionToIntersection14162<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14162<T> = UnionToIntersection14162<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14162<T extends unknown[], V> = [...T, V];

type TuplifyUnion14162<T, L = LastOf14162<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14162<TuplifyUnion14162<Exclude<T, L>>, L>;

type DeepPartial14162<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14162<T[P]> }
  : T;

type Paths14162<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14162<K, Paths14162<T[K], Prev14162[D]>> : never }[keyof T]
  : never;

type Prev14162 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14162<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14162 {
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

type ConfigPaths14162 = Paths14162<NestedConfig14162>;

interface HeavyProps14162 {
  config: DeepPartial14162<NestedConfig14162>;
  path?: ConfigPaths14162;
}

const HeavyComponent14162 = memo(function HeavyComponent14162({ config }: HeavyProps14162) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14162) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14162 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14162: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14162.displayName = 'HeavyComponent14162';
export default HeavyComponent14162;
