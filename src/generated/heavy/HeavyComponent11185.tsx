'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11185<T> = T extends (infer U)[]
  ? DeepReadonlyArray11185<U>
  : T extends object
  ? DeepReadonlyObject11185<T>
  : T;

interface DeepReadonlyArray11185<T> extends ReadonlyArray<DeepReadonly11185<T>> {}

type DeepReadonlyObject11185<T> = {
  readonly [P in keyof T]: DeepReadonly11185<T[P]>;
};

type UnionToIntersection11185<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11185<T> = UnionToIntersection11185<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11185<T extends unknown[], V> = [...T, V];

type TuplifyUnion11185<T, L = LastOf11185<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11185<TuplifyUnion11185<Exclude<T, L>>, L>;

type DeepPartial11185<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11185<T[P]> }
  : T;

type Paths11185<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11185<K, Paths11185<T[K], Prev11185[D]>> : never }[keyof T]
  : never;

type Prev11185 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11185<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11185 {
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

type ConfigPaths11185 = Paths11185<NestedConfig11185>;

interface HeavyProps11185 {
  config: DeepPartial11185<NestedConfig11185>;
  path?: ConfigPaths11185;
}

const HeavyComponent11185 = memo(function HeavyComponent11185({ config }: HeavyProps11185) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11185) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11185 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11185: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11185.displayName = 'HeavyComponent11185';
export default HeavyComponent11185;
