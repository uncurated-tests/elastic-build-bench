'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11858<T> = T extends (infer U)[]
  ? DeepReadonlyArray11858<U>
  : T extends object
  ? DeepReadonlyObject11858<T>
  : T;

interface DeepReadonlyArray11858<T> extends ReadonlyArray<DeepReadonly11858<T>> {}

type DeepReadonlyObject11858<T> = {
  readonly [P in keyof T]: DeepReadonly11858<T[P]>;
};

type UnionToIntersection11858<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11858<T> = UnionToIntersection11858<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11858<T extends unknown[], V> = [...T, V];

type TuplifyUnion11858<T, L = LastOf11858<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11858<TuplifyUnion11858<Exclude<T, L>>, L>;

type DeepPartial11858<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11858<T[P]> }
  : T;

type Paths11858<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11858<K, Paths11858<T[K], Prev11858[D]>> : never }[keyof T]
  : never;

type Prev11858 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11858<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11858 {
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

type ConfigPaths11858 = Paths11858<NestedConfig11858>;

interface HeavyProps11858 {
  config: DeepPartial11858<NestedConfig11858>;
  path?: ConfigPaths11858;
}

const HeavyComponent11858 = memo(function HeavyComponent11858({ config }: HeavyProps11858) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11858) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11858 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11858: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11858.displayName = 'HeavyComponent11858';
export default HeavyComponent11858;
