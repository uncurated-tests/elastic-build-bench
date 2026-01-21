'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14118<T> = T extends (infer U)[]
  ? DeepReadonlyArray14118<U>
  : T extends object
  ? DeepReadonlyObject14118<T>
  : T;

interface DeepReadonlyArray14118<T> extends ReadonlyArray<DeepReadonly14118<T>> {}

type DeepReadonlyObject14118<T> = {
  readonly [P in keyof T]: DeepReadonly14118<T[P]>;
};

type UnionToIntersection14118<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14118<T> = UnionToIntersection14118<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14118<T extends unknown[], V> = [...T, V];

type TuplifyUnion14118<T, L = LastOf14118<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14118<TuplifyUnion14118<Exclude<T, L>>, L>;

type DeepPartial14118<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14118<T[P]> }
  : T;

type Paths14118<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14118<K, Paths14118<T[K], Prev14118[D]>> : never }[keyof T]
  : never;

type Prev14118 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14118<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14118 {
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

type ConfigPaths14118 = Paths14118<NestedConfig14118>;

interface HeavyProps14118 {
  config: DeepPartial14118<NestedConfig14118>;
  path?: ConfigPaths14118;
}

const HeavyComponent14118 = memo(function HeavyComponent14118({ config }: HeavyProps14118) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14118) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14118 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14118: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14118.displayName = 'HeavyComponent14118';
export default HeavyComponent14118;
