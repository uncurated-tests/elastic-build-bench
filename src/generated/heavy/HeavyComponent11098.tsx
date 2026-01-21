'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11098<T> = T extends (infer U)[]
  ? DeepReadonlyArray11098<U>
  : T extends object
  ? DeepReadonlyObject11098<T>
  : T;

interface DeepReadonlyArray11098<T> extends ReadonlyArray<DeepReadonly11098<T>> {}

type DeepReadonlyObject11098<T> = {
  readonly [P in keyof T]: DeepReadonly11098<T[P]>;
};

type UnionToIntersection11098<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11098<T> = UnionToIntersection11098<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11098<T extends unknown[], V> = [...T, V];

type TuplifyUnion11098<T, L = LastOf11098<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11098<TuplifyUnion11098<Exclude<T, L>>, L>;

type DeepPartial11098<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11098<T[P]> }
  : T;

type Paths11098<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11098<K, Paths11098<T[K], Prev11098[D]>> : never }[keyof T]
  : never;

type Prev11098 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11098<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11098 {
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

type ConfigPaths11098 = Paths11098<NestedConfig11098>;

interface HeavyProps11098 {
  config: DeepPartial11098<NestedConfig11098>;
  path?: ConfigPaths11098;
}

const HeavyComponent11098 = memo(function HeavyComponent11098({ config }: HeavyProps11098) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11098) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11098 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11098: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11098.displayName = 'HeavyComponent11098';
export default HeavyComponent11098;
