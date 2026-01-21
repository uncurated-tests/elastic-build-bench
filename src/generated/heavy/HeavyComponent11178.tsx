'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11178<T> = T extends (infer U)[]
  ? DeepReadonlyArray11178<U>
  : T extends object
  ? DeepReadonlyObject11178<T>
  : T;

interface DeepReadonlyArray11178<T> extends ReadonlyArray<DeepReadonly11178<T>> {}

type DeepReadonlyObject11178<T> = {
  readonly [P in keyof T]: DeepReadonly11178<T[P]>;
};

type UnionToIntersection11178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11178<T> = UnionToIntersection11178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11178<T extends unknown[], V> = [...T, V];

type TuplifyUnion11178<T, L = LastOf11178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11178<TuplifyUnion11178<Exclude<T, L>>, L>;

type DeepPartial11178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11178<T[P]> }
  : T;

type Paths11178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11178<K, Paths11178<T[K], Prev11178[D]>> : never }[keyof T]
  : never;

type Prev11178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11178 {
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

type ConfigPaths11178 = Paths11178<NestedConfig11178>;

interface HeavyProps11178 {
  config: DeepPartial11178<NestedConfig11178>;
  path?: ConfigPaths11178;
}

const HeavyComponent11178 = memo(function HeavyComponent11178({ config }: HeavyProps11178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11178.displayName = 'HeavyComponent11178';
export default HeavyComponent11178;
