'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11336<T> = T extends (infer U)[]
  ? DeepReadonlyArray11336<U>
  : T extends object
  ? DeepReadonlyObject11336<T>
  : T;

interface DeepReadonlyArray11336<T> extends ReadonlyArray<DeepReadonly11336<T>> {}

type DeepReadonlyObject11336<T> = {
  readonly [P in keyof T]: DeepReadonly11336<T[P]>;
};

type UnionToIntersection11336<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11336<T> = UnionToIntersection11336<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11336<T extends unknown[], V> = [...T, V];

type TuplifyUnion11336<T, L = LastOf11336<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11336<TuplifyUnion11336<Exclude<T, L>>, L>;

type DeepPartial11336<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11336<T[P]> }
  : T;

type Paths11336<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11336<K, Paths11336<T[K], Prev11336[D]>> : never }[keyof T]
  : never;

type Prev11336 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11336<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11336 {
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

type ConfigPaths11336 = Paths11336<NestedConfig11336>;

interface HeavyProps11336 {
  config: DeepPartial11336<NestedConfig11336>;
  path?: ConfigPaths11336;
}

const HeavyComponent11336 = memo(function HeavyComponent11336({ config }: HeavyProps11336) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11336) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11336 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11336: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11336.displayName = 'HeavyComponent11336';
export default HeavyComponent11336;
