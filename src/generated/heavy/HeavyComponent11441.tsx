'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11441<T> = T extends (infer U)[]
  ? DeepReadonlyArray11441<U>
  : T extends object
  ? DeepReadonlyObject11441<T>
  : T;

interface DeepReadonlyArray11441<T> extends ReadonlyArray<DeepReadonly11441<T>> {}

type DeepReadonlyObject11441<T> = {
  readonly [P in keyof T]: DeepReadonly11441<T[P]>;
};

type UnionToIntersection11441<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11441<T> = UnionToIntersection11441<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11441<T extends unknown[], V> = [...T, V];

type TuplifyUnion11441<T, L = LastOf11441<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11441<TuplifyUnion11441<Exclude<T, L>>, L>;

type DeepPartial11441<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11441<T[P]> }
  : T;

type Paths11441<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11441<K, Paths11441<T[K], Prev11441[D]>> : never }[keyof T]
  : never;

type Prev11441 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11441<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11441 {
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

type ConfigPaths11441 = Paths11441<NestedConfig11441>;

interface HeavyProps11441 {
  config: DeepPartial11441<NestedConfig11441>;
  path?: ConfigPaths11441;
}

const HeavyComponent11441 = memo(function HeavyComponent11441({ config }: HeavyProps11441) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11441) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11441 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11441: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11441.displayName = 'HeavyComponent11441';
export default HeavyComponent11441;
