'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11554<T> = T extends (infer U)[]
  ? DeepReadonlyArray11554<U>
  : T extends object
  ? DeepReadonlyObject11554<T>
  : T;

interface DeepReadonlyArray11554<T> extends ReadonlyArray<DeepReadonly11554<T>> {}

type DeepReadonlyObject11554<T> = {
  readonly [P in keyof T]: DeepReadonly11554<T[P]>;
};

type UnionToIntersection11554<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11554<T> = UnionToIntersection11554<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11554<T extends unknown[], V> = [...T, V];

type TuplifyUnion11554<T, L = LastOf11554<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11554<TuplifyUnion11554<Exclude<T, L>>, L>;

type DeepPartial11554<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11554<T[P]> }
  : T;

type Paths11554<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11554<K, Paths11554<T[K], Prev11554[D]>> : never }[keyof T]
  : never;

type Prev11554 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11554<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11554 {
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

type ConfigPaths11554 = Paths11554<NestedConfig11554>;

interface HeavyProps11554 {
  config: DeepPartial11554<NestedConfig11554>;
  path?: ConfigPaths11554;
}

const HeavyComponent11554 = memo(function HeavyComponent11554({ config }: HeavyProps11554) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11554) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11554 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11554: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11554.displayName = 'HeavyComponent11554';
export default HeavyComponent11554;
