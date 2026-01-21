'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11296<T> = T extends (infer U)[]
  ? DeepReadonlyArray11296<U>
  : T extends object
  ? DeepReadonlyObject11296<T>
  : T;

interface DeepReadonlyArray11296<T> extends ReadonlyArray<DeepReadonly11296<T>> {}

type DeepReadonlyObject11296<T> = {
  readonly [P in keyof T]: DeepReadonly11296<T[P]>;
};

type UnionToIntersection11296<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11296<T> = UnionToIntersection11296<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11296<T extends unknown[], V> = [...T, V];

type TuplifyUnion11296<T, L = LastOf11296<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11296<TuplifyUnion11296<Exclude<T, L>>, L>;

type DeepPartial11296<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11296<T[P]> }
  : T;

type Paths11296<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11296<K, Paths11296<T[K], Prev11296[D]>> : never }[keyof T]
  : never;

type Prev11296 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11296<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11296 {
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

type ConfigPaths11296 = Paths11296<NestedConfig11296>;

interface HeavyProps11296 {
  config: DeepPartial11296<NestedConfig11296>;
  path?: ConfigPaths11296;
}

const HeavyComponent11296 = memo(function HeavyComponent11296({ config }: HeavyProps11296) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11296) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11296 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11296: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11296.displayName = 'HeavyComponent11296';
export default HeavyComponent11296;
