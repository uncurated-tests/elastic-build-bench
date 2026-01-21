'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11276<T> = T extends (infer U)[]
  ? DeepReadonlyArray11276<U>
  : T extends object
  ? DeepReadonlyObject11276<T>
  : T;

interface DeepReadonlyArray11276<T> extends ReadonlyArray<DeepReadonly11276<T>> {}

type DeepReadonlyObject11276<T> = {
  readonly [P in keyof T]: DeepReadonly11276<T[P]>;
};

type UnionToIntersection11276<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11276<T> = UnionToIntersection11276<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11276<T extends unknown[], V> = [...T, V];

type TuplifyUnion11276<T, L = LastOf11276<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11276<TuplifyUnion11276<Exclude<T, L>>, L>;

type DeepPartial11276<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11276<T[P]> }
  : T;

type Paths11276<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11276<K, Paths11276<T[K], Prev11276[D]>> : never }[keyof T]
  : never;

type Prev11276 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11276<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11276 {
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

type ConfigPaths11276 = Paths11276<NestedConfig11276>;

interface HeavyProps11276 {
  config: DeepPartial11276<NestedConfig11276>;
  path?: ConfigPaths11276;
}

const HeavyComponent11276 = memo(function HeavyComponent11276({ config }: HeavyProps11276) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11276) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11276 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11276: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11276.displayName = 'HeavyComponent11276';
export default HeavyComponent11276;
