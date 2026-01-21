'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11323<T> = T extends (infer U)[]
  ? DeepReadonlyArray11323<U>
  : T extends object
  ? DeepReadonlyObject11323<T>
  : T;

interface DeepReadonlyArray11323<T> extends ReadonlyArray<DeepReadonly11323<T>> {}

type DeepReadonlyObject11323<T> = {
  readonly [P in keyof T]: DeepReadonly11323<T[P]>;
};

type UnionToIntersection11323<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11323<T> = UnionToIntersection11323<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11323<T extends unknown[], V> = [...T, V];

type TuplifyUnion11323<T, L = LastOf11323<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11323<TuplifyUnion11323<Exclude<T, L>>, L>;

type DeepPartial11323<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11323<T[P]> }
  : T;

type Paths11323<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11323<K, Paths11323<T[K], Prev11323[D]>> : never }[keyof T]
  : never;

type Prev11323 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11323<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11323 {
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

type ConfigPaths11323 = Paths11323<NestedConfig11323>;

interface HeavyProps11323 {
  config: DeepPartial11323<NestedConfig11323>;
  path?: ConfigPaths11323;
}

const HeavyComponent11323 = memo(function HeavyComponent11323({ config }: HeavyProps11323) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11323) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11323 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11323: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11323.displayName = 'HeavyComponent11323';
export default HeavyComponent11323;
