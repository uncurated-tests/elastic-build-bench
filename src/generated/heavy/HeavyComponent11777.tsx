'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11777<T> = T extends (infer U)[]
  ? DeepReadonlyArray11777<U>
  : T extends object
  ? DeepReadonlyObject11777<T>
  : T;

interface DeepReadonlyArray11777<T> extends ReadonlyArray<DeepReadonly11777<T>> {}

type DeepReadonlyObject11777<T> = {
  readonly [P in keyof T]: DeepReadonly11777<T[P]>;
};

type UnionToIntersection11777<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11777<T> = UnionToIntersection11777<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11777<T extends unknown[], V> = [...T, V];

type TuplifyUnion11777<T, L = LastOf11777<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11777<TuplifyUnion11777<Exclude<T, L>>, L>;

type DeepPartial11777<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11777<T[P]> }
  : T;

type Paths11777<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11777<K, Paths11777<T[K], Prev11777[D]>> : never }[keyof T]
  : never;

type Prev11777 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11777<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11777 {
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

type ConfigPaths11777 = Paths11777<NestedConfig11777>;

interface HeavyProps11777 {
  config: DeepPartial11777<NestedConfig11777>;
  path?: ConfigPaths11777;
}

const HeavyComponent11777 = memo(function HeavyComponent11777({ config }: HeavyProps11777) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11777) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11777 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11777: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11777.displayName = 'HeavyComponent11777';
export default HeavyComponent11777;
