'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11582<T> = T extends (infer U)[]
  ? DeepReadonlyArray11582<U>
  : T extends object
  ? DeepReadonlyObject11582<T>
  : T;

interface DeepReadonlyArray11582<T> extends ReadonlyArray<DeepReadonly11582<T>> {}

type DeepReadonlyObject11582<T> = {
  readonly [P in keyof T]: DeepReadonly11582<T[P]>;
};

type UnionToIntersection11582<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11582<T> = UnionToIntersection11582<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11582<T extends unknown[], V> = [...T, V];

type TuplifyUnion11582<T, L = LastOf11582<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11582<TuplifyUnion11582<Exclude<T, L>>, L>;

type DeepPartial11582<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11582<T[P]> }
  : T;

type Paths11582<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11582<K, Paths11582<T[K], Prev11582[D]>> : never }[keyof T]
  : never;

type Prev11582 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11582<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11582 {
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

type ConfigPaths11582 = Paths11582<NestedConfig11582>;

interface HeavyProps11582 {
  config: DeepPartial11582<NestedConfig11582>;
  path?: ConfigPaths11582;
}

const HeavyComponent11582 = memo(function HeavyComponent11582({ config }: HeavyProps11582) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11582) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11582 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11582: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11582.displayName = 'HeavyComponent11582';
export default HeavyComponent11582;
