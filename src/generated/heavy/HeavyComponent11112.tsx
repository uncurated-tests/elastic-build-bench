'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11112<T> = T extends (infer U)[]
  ? DeepReadonlyArray11112<U>
  : T extends object
  ? DeepReadonlyObject11112<T>
  : T;

interface DeepReadonlyArray11112<T> extends ReadonlyArray<DeepReadonly11112<T>> {}

type DeepReadonlyObject11112<T> = {
  readonly [P in keyof T]: DeepReadonly11112<T[P]>;
};

type UnionToIntersection11112<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11112<T> = UnionToIntersection11112<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11112<T extends unknown[], V> = [...T, V];

type TuplifyUnion11112<T, L = LastOf11112<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11112<TuplifyUnion11112<Exclude<T, L>>, L>;

type DeepPartial11112<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11112<T[P]> }
  : T;

type Paths11112<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11112<K, Paths11112<T[K], Prev11112[D]>> : never }[keyof T]
  : never;

type Prev11112 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11112<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11112 {
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

type ConfigPaths11112 = Paths11112<NestedConfig11112>;

interface HeavyProps11112 {
  config: DeepPartial11112<NestedConfig11112>;
  path?: ConfigPaths11112;
}

const HeavyComponent11112 = memo(function HeavyComponent11112({ config }: HeavyProps11112) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11112) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11112 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11112: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11112.displayName = 'HeavyComponent11112';
export default HeavyComponent11112;
