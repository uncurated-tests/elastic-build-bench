'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11183<T> = T extends (infer U)[]
  ? DeepReadonlyArray11183<U>
  : T extends object
  ? DeepReadonlyObject11183<T>
  : T;

interface DeepReadonlyArray11183<T> extends ReadonlyArray<DeepReadonly11183<T>> {}

type DeepReadonlyObject11183<T> = {
  readonly [P in keyof T]: DeepReadonly11183<T[P]>;
};

type UnionToIntersection11183<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11183<T> = UnionToIntersection11183<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11183<T extends unknown[], V> = [...T, V];

type TuplifyUnion11183<T, L = LastOf11183<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11183<TuplifyUnion11183<Exclude<T, L>>, L>;

type DeepPartial11183<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11183<T[P]> }
  : T;

type Paths11183<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11183<K, Paths11183<T[K], Prev11183[D]>> : never }[keyof T]
  : never;

type Prev11183 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11183<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11183 {
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

type ConfigPaths11183 = Paths11183<NestedConfig11183>;

interface HeavyProps11183 {
  config: DeepPartial11183<NestedConfig11183>;
  path?: ConfigPaths11183;
}

const HeavyComponent11183 = memo(function HeavyComponent11183({ config }: HeavyProps11183) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11183) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11183 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11183: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11183.displayName = 'HeavyComponent11183';
export default HeavyComponent11183;
