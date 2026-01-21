'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11772<T> = T extends (infer U)[]
  ? DeepReadonlyArray11772<U>
  : T extends object
  ? DeepReadonlyObject11772<T>
  : T;

interface DeepReadonlyArray11772<T> extends ReadonlyArray<DeepReadonly11772<T>> {}

type DeepReadonlyObject11772<T> = {
  readonly [P in keyof T]: DeepReadonly11772<T[P]>;
};

type UnionToIntersection11772<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11772<T> = UnionToIntersection11772<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11772<T extends unknown[], V> = [...T, V];

type TuplifyUnion11772<T, L = LastOf11772<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11772<TuplifyUnion11772<Exclude<T, L>>, L>;

type DeepPartial11772<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11772<T[P]> }
  : T;

type Paths11772<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11772<K, Paths11772<T[K], Prev11772[D]>> : never }[keyof T]
  : never;

type Prev11772 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11772<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11772 {
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

type ConfigPaths11772 = Paths11772<NestedConfig11772>;

interface HeavyProps11772 {
  config: DeepPartial11772<NestedConfig11772>;
  path?: ConfigPaths11772;
}

const HeavyComponent11772 = memo(function HeavyComponent11772({ config }: HeavyProps11772) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11772) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11772 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11772: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11772.displayName = 'HeavyComponent11772';
export default HeavyComponent11772;
