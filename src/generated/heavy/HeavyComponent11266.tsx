'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11266<T> = T extends (infer U)[]
  ? DeepReadonlyArray11266<U>
  : T extends object
  ? DeepReadonlyObject11266<T>
  : T;

interface DeepReadonlyArray11266<T> extends ReadonlyArray<DeepReadonly11266<T>> {}

type DeepReadonlyObject11266<T> = {
  readonly [P in keyof T]: DeepReadonly11266<T[P]>;
};

type UnionToIntersection11266<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11266<T> = UnionToIntersection11266<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11266<T extends unknown[], V> = [...T, V];

type TuplifyUnion11266<T, L = LastOf11266<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11266<TuplifyUnion11266<Exclude<T, L>>, L>;

type DeepPartial11266<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11266<T[P]> }
  : T;

type Paths11266<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11266<K, Paths11266<T[K], Prev11266[D]>> : never }[keyof T]
  : never;

type Prev11266 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11266<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11266 {
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

type ConfigPaths11266 = Paths11266<NestedConfig11266>;

interface HeavyProps11266 {
  config: DeepPartial11266<NestedConfig11266>;
  path?: ConfigPaths11266;
}

const HeavyComponent11266 = memo(function HeavyComponent11266({ config }: HeavyProps11266) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11266) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11266 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11266: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11266.displayName = 'HeavyComponent11266';
export default HeavyComponent11266;
