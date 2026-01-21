'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11035<T> = T extends (infer U)[]
  ? DeepReadonlyArray11035<U>
  : T extends object
  ? DeepReadonlyObject11035<T>
  : T;

interface DeepReadonlyArray11035<T> extends ReadonlyArray<DeepReadonly11035<T>> {}

type DeepReadonlyObject11035<T> = {
  readonly [P in keyof T]: DeepReadonly11035<T[P]>;
};

type UnionToIntersection11035<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11035<T> = UnionToIntersection11035<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11035<T extends unknown[], V> = [...T, V];

type TuplifyUnion11035<T, L = LastOf11035<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11035<TuplifyUnion11035<Exclude<T, L>>, L>;

type DeepPartial11035<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11035<T[P]> }
  : T;

type Paths11035<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11035<K, Paths11035<T[K], Prev11035[D]>> : never }[keyof T]
  : never;

type Prev11035 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11035<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11035 {
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

type ConfigPaths11035 = Paths11035<NestedConfig11035>;

interface HeavyProps11035 {
  config: DeepPartial11035<NestedConfig11035>;
  path?: ConfigPaths11035;
}

const HeavyComponent11035 = memo(function HeavyComponent11035({ config }: HeavyProps11035) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11035) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11035 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11035: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11035.displayName = 'HeavyComponent11035';
export default HeavyComponent11035;
