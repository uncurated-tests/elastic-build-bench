'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11505<T> = T extends (infer U)[]
  ? DeepReadonlyArray11505<U>
  : T extends object
  ? DeepReadonlyObject11505<T>
  : T;

interface DeepReadonlyArray11505<T> extends ReadonlyArray<DeepReadonly11505<T>> {}

type DeepReadonlyObject11505<T> = {
  readonly [P in keyof T]: DeepReadonly11505<T[P]>;
};

type UnionToIntersection11505<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11505<T> = UnionToIntersection11505<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11505<T extends unknown[], V> = [...T, V];

type TuplifyUnion11505<T, L = LastOf11505<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11505<TuplifyUnion11505<Exclude<T, L>>, L>;

type DeepPartial11505<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11505<T[P]> }
  : T;

type Paths11505<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11505<K, Paths11505<T[K], Prev11505[D]>> : never }[keyof T]
  : never;

type Prev11505 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11505<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11505 {
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

type ConfigPaths11505 = Paths11505<NestedConfig11505>;

interface HeavyProps11505 {
  config: DeepPartial11505<NestedConfig11505>;
  path?: ConfigPaths11505;
}

const HeavyComponent11505 = memo(function HeavyComponent11505({ config }: HeavyProps11505) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11505) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11505 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11505: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11505.displayName = 'HeavyComponent11505';
export default HeavyComponent11505;
