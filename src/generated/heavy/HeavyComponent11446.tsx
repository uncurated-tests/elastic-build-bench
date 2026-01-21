'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11446<T> = T extends (infer U)[]
  ? DeepReadonlyArray11446<U>
  : T extends object
  ? DeepReadonlyObject11446<T>
  : T;

interface DeepReadonlyArray11446<T> extends ReadonlyArray<DeepReadonly11446<T>> {}

type DeepReadonlyObject11446<T> = {
  readonly [P in keyof T]: DeepReadonly11446<T[P]>;
};

type UnionToIntersection11446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11446<T> = UnionToIntersection11446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11446<T extends unknown[], V> = [...T, V];

type TuplifyUnion11446<T, L = LastOf11446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11446<TuplifyUnion11446<Exclude<T, L>>, L>;

type DeepPartial11446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11446<T[P]> }
  : T;

type Paths11446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11446<K, Paths11446<T[K], Prev11446[D]>> : never }[keyof T]
  : never;

type Prev11446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11446 {
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

type ConfigPaths11446 = Paths11446<NestedConfig11446>;

interface HeavyProps11446 {
  config: DeepPartial11446<NestedConfig11446>;
  path?: ConfigPaths11446;
}

const HeavyComponent11446 = memo(function HeavyComponent11446({ config }: HeavyProps11446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11446.displayName = 'HeavyComponent11446';
export default HeavyComponent11446;
