'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11186<T> = T extends (infer U)[]
  ? DeepReadonlyArray11186<U>
  : T extends object
  ? DeepReadonlyObject11186<T>
  : T;

interface DeepReadonlyArray11186<T> extends ReadonlyArray<DeepReadonly11186<T>> {}

type DeepReadonlyObject11186<T> = {
  readonly [P in keyof T]: DeepReadonly11186<T[P]>;
};

type UnionToIntersection11186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11186<T> = UnionToIntersection11186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11186<T extends unknown[], V> = [...T, V];

type TuplifyUnion11186<T, L = LastOf11186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11186<TuplifyUnion11186<Exclude<T, L>>, L>;

type DeepPartial11186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11186<T[P]> }
  : T;

type Paths11186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11186<K, Paths11186<T[K], Prev11186[D]>> : never }[keyof T]
  : never;

type Prev11186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11186 {
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

type ConfigPaths11186 = Paths11186<NestedConfig11186>;

interface HeavyProps11186 {
  config: DeepPartial11186<NestedConfig11186>;
  path?: ConfigPaths11186;
}

const HeavyComponent11186 = memo(function HeavyComponent11186({ config }: HeavyProps11186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11186.displayName = 'HeavyComponent11186';
export default HeavyComponent11186;
