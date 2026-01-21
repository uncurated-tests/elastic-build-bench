'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11054<T> = T extends (infer U)[]
  ? DeepReadonlyArray11054<U>
  : T extends object
  ? DeepReadonlyObject11054<T>
  : T;

interface DeepReadonlyArray11054<T> extends ReadonlyArray<DeepReadonly11054<T>> {}

type DeepReadonlyObject11054<T> = {
  readonly [P in keyof T]: DeepReadonly11054<T[P]>;
};

type UnionToIntersection11054<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11054<T> = UnionToIntersection11054<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11054<T extends unknown[], V> = [...T, V];

type TuplifyUnion11054<T, L = LastOf11054<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11054<TuplifyUnion11054<Exclude<T, L>>, L>;

type DeepPartial11054<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11054<T[P]> }
  : T;

type Paths11054<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11054<K, Paths11054<T[K], Prev11054[D]>> : never }[keyof T]
  : never;

type Prev11054 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11054<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11054 {
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

type ConfigPaths11054 = Paths11054<NestedConfig11054>;

interface HeavyProps11054 {
  config: DeepPartial11054<NestedConfig11054>;
  path?: ConfigPaths11054;
}

const HeavyComponent11054 = memo(function HeavyComponent11054({ config }: HeavyProps11054) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11054) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11054 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11054: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11054.displayName = 'HeavyComponent11054';
export default HeavyComponent11054;
