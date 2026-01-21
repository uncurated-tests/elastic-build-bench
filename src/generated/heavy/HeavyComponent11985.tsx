'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11985<T> = T extends (infer U)[]
  ? DeepReadonlyArray11985<U>
  : T extends object
  ? DeepReadonlyObject11985<T>
  : T;

interface DeepReadonlyArray11985<T> extends ReadonlyArray<DeepReadonly11985<T>> {}

type DeepReadonlyObject11985<T> = {
  readonly [P in keyof T]: DeepReadonly11985<T[P]>;
};

type UnionToIntersection11985<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11985<T> = UnionToIntersection11985<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11985<T extends unknown[], V> = [...T, V];

type TuplifyUnion11985<T, L = LastOf11985<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11985<TuplifyUnion11985<Exclude<T, L>>, L>;

type DeepPartial11985<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11985<T[P]> }
  : T;

type Paths11985<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11985<K, Paths11985<T[K], Prev11985[D]>> : never }[keyof T]
  : never;

type Prev11985 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11985<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11985 {
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

type ConfigPaths11985 = Paths11985<NestedConfig11985>;

interface HeavyProps11985 {
  config: DeepPartial11985<NestedConfig11985>;
  path?: ConfigPaths11985;
}

const HeavyComponent11985 = memo(function HeavyComponent11985({ config }: HeavyProps11985) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11985) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11985 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11985: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11985.displayName = 'HeavyComponent11985';
export default HeavyComponent11985;
