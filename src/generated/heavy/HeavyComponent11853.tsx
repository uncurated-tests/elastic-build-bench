'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11853<T> = T extends (infer U)[]
  ? DeepReadonlyArray11853<U>
  : T extends object
  ? DeepReadonlyObject11853<T>
  : T;

interface DeepReadonlyArray11853<T> extends ReadonlyArray<DeepReadonly11853<T>> {}

type DeepReadonlyObject11853<T> = {
  readonly [P in keyof T]: DeepReadonly11853<T[P]>;
};

type UnionToIntersection11853<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11853<T> = UnionToIntersection11853<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11853<T extends unknown[], V> = [...T, V];

type TuplifyUnion11853<T, L = LastOf11853<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11853<TuplifyUnion11853<Exclude<T, L>>, L>;

type DeepPartial11853<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11853<T[P]> }
  : T;

type Paths11853<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11853<K, Paths11853<T[K], Prev11853[D]>> : never }[keyof T]
  : never;

type Prev11853 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11853<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11853 {
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

type ConfigPaths11853 = Paths11853<NestedConfig11853>;

interface HeavyProps11853 {
  config: DeepPartial11853<NestedConfig11853>;
  path?: ConfigPaths11853;
}

const HeavyComponent11853 = memo(function HeavyComponent11853({ config }: HeavyProps11853) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11853) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11853 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11853: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11853.displayName = 'HeavyComponent11853';
export default HeavyComponent11853;
