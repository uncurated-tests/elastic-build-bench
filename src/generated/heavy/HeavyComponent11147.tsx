'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11147<T> = T extends (infer U)[]
  ? DeepReadonlyArray11147<U>
  : T extends object
  ? DeepReadonlyObject11147<T>
  : T;

interface DeepReadonlyArray11147<T> extends ReadonlyArray<DeepReadonly11147<T>> {}

type DeepReadonlyObject11147<T> = {
  readonly [P in keyof T]: DeepReadonly11147<T[P]>;
};

type UnionToIntersection11147<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11147<T> = UnionToIntersection11147<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11147<T extends unknown[], V> = [...T, V];

type TuplifyUnion11147<T, L = LastOf11147<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11147<TuplifyUnion11147<Exclude<T, L>>, L>;

type DeepPartial11147<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11147<T[P]> }
  : T;

type Paths11147<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11147<K, Paths11147<T[K], Prev11147[D]>> : never }[keyof T]
  : never;

type Prev11147 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11147<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11147 {
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

type ConfigPaths11147 = Paths11147<NestedConfig11147>;

interface HeavyProps11147 {
  config: DeepPartial11147<NestedConfig11147>;
  path?: ConfigPaths11147;
}

const HeavyComponent11147 = memo(function HeavyComponent11147({ config }: HeavyProps11147) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11147) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11147 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11147: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11147.displayName = 'HeavyComponent11147';
export default HeavyComponent11147;
