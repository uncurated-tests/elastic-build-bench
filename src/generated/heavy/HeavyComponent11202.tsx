'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11202<T> = T extends (infer U)[]
  ? DeepReadonlyArray11202<U>
  : T extends object
  ? DeepReadonlyObject11202<T>
  : T;

interface DeepReadonlyArray11202<T> extends ReadonlyArray<DeepReadonly11202<T>> {}

type DeepReadonlyObject11202<T> = {
  readonly [P in keyof T]: DeepReadonly11202<T[P]>;
};

type UnionToIntersection11202<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11202<T> = UnionToIntersection11202<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11202<T extends unknown[], V> = [...T, V];

type TuplifyUnion11202<T, L = LastOf11202<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11202<TuplifyUnion11202<Exclude<T, L>>, L>;

type DeepPartial11202<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11202<T[P]> }
  : T;

type Paths11202<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11202<K, Paths11202<T[K], Prev11202[D]>> : never }[keyof T]
  : never;

type Prev11202 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11202<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11202 {
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

type ConfigPaths11202 = Paths11202<NestedConfig11202>;

interface HeavyProps11202 {
  config: DeepPartial11202<NestedConfig11202>;
  path?: ConfigPaths11202;
}

const HeavyComponent11202 = memo(function HeavyComponent11202({ config }: HeavyProps11202) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11202) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11202 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11202: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11202.displayName = 'HeavyComponent11202';
export default HeavyComponent11202;
