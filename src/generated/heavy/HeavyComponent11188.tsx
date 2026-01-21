'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11188<T> = T extends (infer U)[]
  ? DeepReadonlyArray11188<U>
  : T extends object
  ? DeepReadonlyObject11188<T>
  : T;

interface DeepReadonlyArray11188<T> extends ReadonlyArray<DeepReadonly11188<T>> {}

type DeepReadonlyObject11188<T> = {
  readonly [P in keyof T]: DeepReadonly11188<T[P]>;
};

type UnionToIntersection11188<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11188<T> = UnionToIntersection11188<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11188<T extends unknown[], V> = [...T, V];

type TuplifyUnion11188<T, L = LastOf11188<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11188<TuplifyUnion11188<Exclude<T, L>>, L>;

type DeepPartial11188<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11188<T[P]> }
  : T;

type Paths11188<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11188<K, Paths11188<T[K], Prev11188[D]>> : never }[keyof T]
  : never;

type Prev11188 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11188<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11188 {
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

type ConfigPaths11188 = Paths11188<NestedConfig11188>;

interface HeavyProps11188 {
  config: DeepPartial11188<NestedConfig11188>;
  path?: ConfigPaths11188;
}

const HeavyComponent11188 = memo(function HeavyComponent11188({ config }: HeavyProps11188) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11188) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11188 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11188: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11188.displayName = 'HeavyComponent11188';
export default HeavyComponent11188;
