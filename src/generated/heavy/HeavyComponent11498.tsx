'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11498<T> = T extends (infer U)[]
  ? DeepReadonlyArray11498<U>
  : T extends object
  ? DeepReadonlyObject11498<T>
  : T;

interface DeepReadonlyArray11498<T> extends ReadonlyArray<DeepReadonly11498<T>> {}

type DeepReadonlyObject11498<T> = {
  readonly [P in keyof T]: DeepReadonly11498<T[P]>;
};

type UnionToIntersection11498<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11498<T> = UnionToIntersection11498<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11498<T extends unknown[], V> = [...T, V];

type TuplifyUnion11498<T, L = LastOf11498<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11498<TuplifyUnion11498<Exclude<T, L>>, L>;

type DeepPartial11498<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11498<T[P]> }
  : T;

type Paths11498<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11498<K, Paths11498<T[K], Prev11498[D]>> : never }[keyof T]
  : never;

type Prev11498 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11498<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11498 {
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

type ConfigPaths11498 = Paths11498<NestedConfig11498>;

interface HeavyProps11498 {
  config: DeepPartial11498<NestedConfig11498>;
  path?: ConfigPaths11498;
}

const HeavyComponent11498 = memo(function HeavyComponent11498({ config }: HeavyProps11498) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11498) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11498 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11498: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11498.displayName = 'HeavyComponent11498';
export default HeavyComponent11498;
