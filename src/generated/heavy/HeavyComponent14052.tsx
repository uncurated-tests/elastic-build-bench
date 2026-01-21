'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14052<T> = T extends (infer U)[]
  ? DeepReadonlyArray14052<U>
  : T extends object
  ? DeepReadonlyObject14052<T>
  : T;

interface DeepReadonlyArray14052<T> extends ReadonlyArray<DeepReadonly14052<T>> {}

type DeepReadonlyObject14052<T> = {
  readonly [P in keyof T]: DeepReadonly14052<T[P]>;
};

type UnionToIntersection14052<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14052<T> = UnionToIntersection14052<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14052<T extends unknown[], V> = [...T, V];

type TuplifyUnion14052<T, L = LastOf14052<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14052<TuplifyUnion14052<Exclude<T, L>>, L>;

type DeepPartial14052<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14052<T[P]> }
  : T;

type Paths14052<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14052<K, Paths14052<T[K], Prev14052[D]>> : never }[keyof T]
  : never;

type Prev14052 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14052<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14052 {
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

type ConfigPaths14052 = Paths14052<NestedConfig14052>;

interface HeavyProps14052 {
  config: DeepPartial14052<NestedConfig14052>;
  path?: ConfigPaths14052;
}

const HeavyComponent14052 = memo(function HeavyComponent14052({ config }: HeavyProps14052) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14052) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14052 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14052: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14052.displayName = 'HeavyComponent14052';
export default HeavyComponent14052;
