'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11022<T> = T extends (infer U)[]
  ? DeepReadonlyArray11022<U>
  : T extends object
  ? DeepReadonlyObject11022<T>
  : T;

interface DeepReadonlyArray11022<T> extends ReadonlyArray<DeepReadonly11022<T>> {}

type DeepReadonlyObject11022<T> = {
  readonly [P in keyof T]: DeepReadonly11022<T[P]>;
};

type UnionToIntersection11022<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11022<T> = UnionToIntersection11022<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11022<T extends unknown[], V> = [...T, V];

type TuplifyUnion11022<T, L = LastOf11022<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11022<TuplifyUnion11022<Exclude<T, L>>, L>;

type DeepPartial11022<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11022<T[P]> }
  : T;

type Paths11022<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11022<K, Paths11022<T[K], Prev11022[D]>> : never }[keyof T]
  : never;

type Prev11022 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11022<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11022 {
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

type ConfigPaths11022 = Paths11022<NestedConfig11022>;

interface HeavyProps11022 {
  config: DeepPartial11022<NestedConfig11022>;
  path?: ConfigPaths11022;
}

const HeavyComponent11022 = memo(function HeavyComponent11022({ config }: HeavyProps11022) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11022) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11022 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11022: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11022.displayName = 'HeavyComponent11022';
export default HeavyComponent11022;
