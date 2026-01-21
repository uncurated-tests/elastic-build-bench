'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11846<T> = T extends (infer U)[]
  ? DeepReadonlyArray11846<U>
  : T extends object
  ? DeepReadonlyObject11846<T>
  : T;

interface DeepReadonlyArray11846<T> extends ReadonlyArray<DeepReadonly11846<T>> {}

type DeepReadonlyObject11846<T> = {
  readonly [P in keyof T]: DeepReadonly11846<T[P]>;
};

type UnionToIntersection11846<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11846<T> = UnionToIntersection11846<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11846<T extends unknown[], V> = [...T, V];

type TuplifyUnion11846<T, L = LastOf11846<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11846<TuplifyUnion11846<Exclude<T, L>>, L>;

type DeepPartial11846<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11846<T[P]> }
  : T;

type Paths11846<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11846<K, Paths11846<T[K], Prev11846[D]>> : never }[keyof T]
  : never;

type Prev11846 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11846<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11846 {
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

type ConfigPaths11846 = Paths11846<NestedConfig11846>;

interface HeavyProps11846 {
  config: DeepPartial11846<NestedConfig11846>;
  path?: ConfigPaths11846;
}

const HeavyComponent11846 = memo(function HeavyComponent11846({ config }: HeavyProps11846) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11846) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11846 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11846: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11846.displayName = 'HeavyComponent11846';
export default HeavyComponent11846;
