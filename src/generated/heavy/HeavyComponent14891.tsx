'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14891<T> = T extends (infer U)[]
  ? DeepReadonlyArray14891<U>
  : T extends object
  ? DeepReadonlyObject14891<T>
  : T;

interface DeepReadonlyArray14891<T> extends ReadonlyArray<DeepReadonly14891<T>> {}

type DeepReadonlyObject14891<T> = {
  readonly [P in keyof T]: DeepReadonly14891<T[P]>;
};

type UnionToIntersection14891<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14891<T> = UnionToIntersection14891<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14891<T extends unknown[], V> = [...T, V];

type TuplifyUnion14891<T, L = LastOf14891<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14891<TuplifyUnion14891<Exclude<T, L>>, L>;

type DeepPartial14891<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14891<T[P]> }
  : T;

type Paths14891<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14891<K, Paths14891<T[K], Prev14891[D]>> : never }[keyof T]
  : never;

type Prev14891 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14891<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14891 {
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

type ConfigPaths14891 = Paths14891<NestedConfig14891>;

interface HeavyProps14891 {
  config: DeepPartial14891<NestedConfig14891>;
  path?: ConfigPaths14891;
}

const HeavyComponent14891 = memo(function HeavyComponent14891({ config }: HeavyProps14891) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14891) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14891 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14891: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14891.displayName = 'HeavyComponent14891';
export default HeavyComponent14891;
