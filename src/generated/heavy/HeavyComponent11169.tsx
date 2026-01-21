'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11169<T> = T extends (infer U)[]
  ? DeepReadonlyArray11169<U>
  : T extends object
  ? DeepReadonlyObject11169<T>
  : T;

interface DeepReadonlyArray11169<T> extends ReadonlyArray<DeepReadonly11169<T>> {}

type DeepReadonlyObject11169<T> = {
  readonly [P in keyof T]: DeepReadonly11169<T[P]>;
};

type UnionToIntersection11169<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11169<T> = UnionToIntersection11169<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11169<T extends unknown[], V> = [...T, V];

type TuplifyUnion11169<T, L = LastOf11169<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11169<TuplifyUnion11169<Exclude<T, L>>, L>;

type DeepPartial11169<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11169<T[P]> }
  : T;

type Paths11169<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11169<K, Paths11169<T[K], Prev11169[D]>> : never }[keyof T]
  : never;

type Prev11169 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11169<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11169 {
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

type ConfigPaths11169 = Paths11169<NestedConfig11169>;

interface HeavyProps11169 {
  config: DeepPartial11169<NestedConfig11169>;
  path?: ConfigPaths11169;
}

const HeavyComponent11169 = memo(function HeavyComponent11169({ config }: HeavyProps11169) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11169) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11169 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11169: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11169.displayName = 'HeavyComponent11169';
export default HeavyComponent11169;
