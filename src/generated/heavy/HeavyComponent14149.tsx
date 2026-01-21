'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14149<T> = T extends (infer U)[]
  ? DeepReadonlyArray14149<U>
  : T extends object
  ? DeepReadonlyObject14149<T>
  : T;

interface DeepReadonlyArray14149<T> extends ReadonlyArray<DeepReadonly14149<T>> {}

type DeepReadonlyObject14149<T> = {
  readonly [P in keyof T]: DeepReadonly14149<T[P]>;
};

type UnionToIntersection14149<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14149<T> = UnionToIntersection14149<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14149<T extends unknown[], V> = [...T, V];

type TuplifyUnion14149<T, L = LastOf14149<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14149<TuplifyUnion14149<Exclude<T, L>>, L>;

type DeepPartial14149<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14149<T[P]> }
  : T;

type Paths14149<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14149<K, Paths14149<T[K], Prev14149[D]>> : never }[keyof T]
  : never;

type Prev14149 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14149<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14149 {
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

type ConfigPaths14149 = Paths14149<NestedConfig14149>;

interface HeavyProps14149 {
  config: DeepPartial14149<NestedConfig14149>;
  path?: ConfigPaths14149;
}

const HeavyComponent14149 = memo(function HeavyComponent14149({ config }: HeavyProps14149) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14149) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14149 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14149: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14149.displayName = 'HeavyComponent14149';
export default HeavyComponent14149;
