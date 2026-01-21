'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11876<T> = T extends (infer U)[]
  ? DeepReadonlyArray11876<U>
  : T extends object
  ? DeepReadonlyObject11876<T>
  : T;

interface DeepReadonlyArray11876<T> extends ReadonlyArray<DeepReadonly11876<T>> {}

type DeepReadonlyObject11876<T> = {
  readonly [P in keyof T]: DeepReadonly11876<T[P]>;
};

type UnionToIntersection11876<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11876<T> = UnionToIntersection11876<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11876<T extends unknown[], V> = [...T, V];

type TuplifyUnion11876<T, L = LastOf11876<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11876<TuplifyUnion11876<Exclude<T, L>>, L>;

type DeepPartial11876<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11876<T[P]> }
  : T;

type Paths11876<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11876<K, Paths11876<T[K], Prev11876[D]>> : never }[keyof T]
  : never;

type Prev11876 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11876<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11876 {
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

type ConfigPaths11876 = Paths11876<NestedConfig11876>;

interface HeavyProps11876 {
  config: DeepPartial11876<NestedConfig11876>;
  path?: ConfigPaths11876;
}

const HeavyComponent11876 = memo(function HeavyComponent11876({ config }: HeavyProps11876) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11876) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11876 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11876: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11876.displayName = 'HeavyComponent11876';
export default HeavyComponent11876;
