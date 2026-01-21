'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11353<T> = T extends (infer U)[]
  ? DeepReadonlyArray11353<U>
  : T extends object
  ? DeepReadonlyObject11353<T>
  : T;

interface DeepReadonlyArray11353<T> extends ReadonlyArray<DeepReadonly11353<T>> {}

type DeepReadonlyObject11353<T> = {
  readonly [P in keyof T]: DeepReadonly11353<T[P]>;
};

type UnionToIntersection11353<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11353<T> = UnionToIntersection11353<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11353<T extends unknown[], V> = [...T, V];

type TuplifyUnion11353<T, L = LastOf11353<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11353<TuplifyUnion11353<Exclude<T, L>>, L>;

type DeepPartial11353<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11353<T[P]> }
  : T;

type Paths11353<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11353<K, Paths11353<T[K], Prev11353[D]>> : never }[keyof T]
  : never;

type Prev11353 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11353<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11353 {
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

type ConfigPaths11353 = Paths11353<NestedConfig11353>;

interface HeavyProps11353 {
  config: DeepPartial11353<NestedConfig11353>;
  path?: ConfigPaths11353;
}

const HeavyComponent11353 = memo(function HeavyComponent11353({ config }: HeavyProps11353) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11353) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11353 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11353: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11353.displayName = 'HeavyComponent11353';
export default HeavyComponent11353;
