'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11861<T> = T extends (infer U)[]
  ? DeepReadonlyArray11861<U>
  : T extends object
  ? DeepReadonlyObject11861<T>
  : T;

interface DeepReadonlyArray11861<T> extends ReadonlyArray<DeepReadonly11861<T>> {}

type DeepReadonlyObject11861<T> = {
  readonly [P in keyof T]: DeepReadonly11861<T[P]>;
};

type UnionToIntersection11861<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11861<T> = UnionToIntersection11861<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11861<T extends unknown[], V> = [...T, V];

type TuplifyUnion11861<T, L = LastOf11861<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11861<TuplifyUnion11861<Exclude<T, L>>, L>;

type DeepPartial11861<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11861<T[P]> }
  : T;

type Paths11861<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11861<K, Paths11861<T[K], Prev11861[D]>> : never }[keyof T]
  : never;

type Prev11861 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11861<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11861 {
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

type ConfigPaths11861 = Paths11861<NestedConfig11861>;

interface HeavyProps11861 {
  config: DeepPartial11861<NestedConfig11861>;
  path?: ConfigPaths11861;
}

const HeavyComponent11861 = memo(function HeavyComponent11861({ config }: HeavyProps11861) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11861) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11861 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11861: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11861.displayName = 'HeavyComponent11861';
export default HeavyComponent11861;
