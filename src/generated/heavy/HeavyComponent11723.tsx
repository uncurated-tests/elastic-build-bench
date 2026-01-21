'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11723<T> = T extends (infer U)[]
  ? DeepReadonlyArray11723<U>
  : T extends object
  ? DeepReadonlyObject11723<T>
  : T;

interface DeepReadonlyArray11723<T> extends ReadonlyArray<DeepReadonly11723<T>> {}

type DeepReadonlyObject11723<T> = {
  readonly [P in keyof T]: DeepReadonly11723<T[P]>;
};

type UnionToIntersection11723<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11723<T> = UnionToIntersection11723<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11723<T extends unknown[], V> = [...T, V];

type TuplifyUnion11723<T, L = LastOf11723<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11723<TuplifyUnion11723<Exclude<T, L>>, L>;

type DeepPartial11723<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11723<T[P]> }
  : T;

type Paths11723<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11723<K, Paths11723<T[K], Prev11723[D]>> : never }[keyof T]
  : never;

type Prev11723 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11723<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11723 {
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

type ConfigPaths11723 = Paths11723<NestedConfig11723>;

interface HeavyProps11723 {
  config: DeepPartial11723<NestedConfig11723>;
  path?: ConfigPaths11723;
}

const HeavyComponent11723 = memo(function HeavyComponent11723({ config }: HeavyProps11723) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11723) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11723 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11723: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11723.displayName = 'HeavyComponent11723';
export default HeavyComponent11723;
