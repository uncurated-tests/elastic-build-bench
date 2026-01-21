'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11904<T> = T extends (infer U)[]
  ? DeepReadonlyArray11904<U>
  : T extends object
  ? DeepReadonlyObject11904<T>
  : T;

interface DeepReadonlyArray11904<T> extends ReadonlyArray<DeepReadonly11904<T>> {}

type DeepReadonlyObject11904<T> = {
  readonly [P in keyof T]: DeepReadonly11904<T[P]>;
};

type UnionToIntersection11904<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11904<T> = UnionToIntersection11904<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11904<T extends unknown[], V> = [...T, V];

type TuplifyUnion11904<T, L = LastOf11904<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11904<TuplifyUnion11904<Exclude<T, L>>, L>;

type DeepPartial11904<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11904<T[P]> }
  : T;

type Paths11904<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11904<K, Paths11904<T[K], Prev11904[D]>> : never }[keyof T]
  : never;

type Prev11904 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11904<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11904 {
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

type ConfigPaths11904 = Paths11904<NestedConfig11904>;

interface HeavyProps11904 {
  config: DeepPartial11904<NestedConfig11904>;
  path?: ConfigPaths11904;
}

const HeavyComponent11904 = memo(function HeavyComponent11904({ config }: HeavyProps11904) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11904) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11904 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11904: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11904.displayName = 'HeavyComponent11904';
export default HeavyComponent11904;
