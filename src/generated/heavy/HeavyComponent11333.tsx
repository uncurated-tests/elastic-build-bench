'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11333<T> = T extends (infer U)[]
  ? DeepReadonlyArray11333<U>
  : T extends object
  ? DeepReadonlyObject11333<T>
  : T;

interface DeepReadonlyArray11333<T> extends ReadonlyArray<DeepReadonly11333<T>> {}

type DeepReadonlyObject11333<T> = {
  readonly [P in keyof T]: DeepReadonly11333<T[P]>;
};

type UnionToIntersection11333<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11333<T> = UnionToIntersection11333<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11333<T extends unknown[], V> = [...T, V];

type TuplifyUnion11333<T, L = LastOf11333<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11333<TuplifyUnion11333<Exclude<T, L>>, L>;

type DeepPartial11333<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11333<T[P]> }
  : T;

type Paths11333<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11333<K, Paths11333<T[K], Prev11333[D]>> : never }[keyof T]
  : never;

type Prev11333 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11333<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11333 {
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

type ConfigPaths11333 = Paths11333<NestedConfig11333>;

interface HeavyProps11333 {
  config: DeepPartial11333<NestedConfig11333>;
  path?: ConfigPaths11333;
}

const HeavyComponent11333 = memo(function HeavyComponent11333({ config }: HeavyProps11333) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11333) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11333 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11333: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11333.displayName = 'HeavyComponent11333';
export default HeavyComponent11333;
