'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11597<T> = T extends (infer U)[]
  ? DeepReadonlyArray11597<U>
  : T extends object
  ? DeepReadonlyObject11597<T>
  : T;

interface DeepReadonlyArray11597<T> extends ReadonlyArray<DeepReadonly11597<T>> {}

type DeepReadonlyObject11597<T> = {
  readonly [P in keyof T]: DeepReadonly11597<T[P]>;
};

type UnionToIntersection11597<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11597<T> = UnionToIntersection11597<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11597<T extends unknown[], V> = [...T, V];

type TuplifyUnion11597<T, L = LastOf11597<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11597<TuplifyUnion11597<Exclude<T, L>>, L>;

type DeepPartial11597<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11597<T[P]> }
  : T;

type Paths11597<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11597<K, Paths11597<T[K], Prev11597[D]>> : never }[keyof T]
  : never;

type Prev11597 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11597<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11597 {
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

type ConfigPaths11597 = Paths11597<NestedConfig11597>;

interface HeavyProps11597 {
  config: DeepPartial11597<NestedConfig11597>;
  path?: ConfigPaths11597;
}

const HeavyComponent11597 = memo(function HeavyComponent11597({ config }: HeavyProps11597) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11597) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11597 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11597: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11597.displayName = 'HeavyComponent11597';
export default HeavyComponent11597;
