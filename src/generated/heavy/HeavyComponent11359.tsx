'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11359<T> = T extends (infer U)[]
  ? DeepReadonlyArray11359<U>
  : T extends object
  ? DeepReadonlyObject11359<T>
  : T;

interface DeepReadonlyArray11359<T> extends ReadonlyArray<DeepReadonly11359<T>> {}

type DeepReadonlyObject11359<T> = {
  readonly [P in keyof T]: DeepReadonly11359<T[P]>;
};

type UnionToIntersection11359<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11359<T> = UnionToIntersection11359<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11359<T extends unknown[], V> = [...T, V];

type TuplifyUnion11359<T, L = LastOf11359<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11359<TuplifyUnion11359<Exclude<T, L>>, L>;

type DeepPartial11359<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11359<T[P]> }
  : T;

type Paths11359<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11359<K, Paths11359<T[K], Prev11359[D]>> : never }[keyof T]
  : never;

type Prev11359 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11359<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11359 {
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

type ConfigPaths11359 = Paths11359<NestedConfig11359>;

interface HeavyProps11359 {
  config: DeepPartial11359<NestedConfig11359>;
  path?: ConfigPaths11359;
}

const HeavyComponent11359 = memo(function HeavyComponent11359({ config }: HeavyProps11359) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11359) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11359 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11359: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11359.displayName = 'HeavyComponent11359';
export default HeavyComponent11359;
