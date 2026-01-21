'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11497<T> = T extends (infer U)[]
  ? DeepReadonlyArray11497<U>
  : T extends object
  ? DeepReadonlyObject11497<T>
  : T;

interface DeepReadonlyArray11497<T> extends ReadonlyArray<DeepReadonly11497<T>> {}

type DeepReadonlyObject11497<T> = {
  readonly [P in keyof T]: DeepReadonly11497<T[P]>;
};

type UnionToIntersection11497<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11497<T> = UnionToIntersection11497<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11497<T extends unknown[], V> = [...T, V];

type TuplifyUnion11497<T, L = LastOf11497<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11497<TuplifyUnion11497<Exclude<T, L>>, L>;

type DeepPartial11497<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11497<T[P]> }
  : T;

type Paths11497<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11497<K, Paths11497<T[K], Prev11497[D]>> : never }[keyof T]
  : never;

type Prev11497 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11497<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11497 {
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

type ConfigPaths11497 = Paths11497<NestedConfig11497>;

interface HeavyProps11497 {
  config: DeepPartial11497<NestedConfig11497>;
  path?: ConfigPaths11497;
}

const HeavyComponent11497 = memo(function HeavyComponent11497({ config }: HeavyProps11497) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11497) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11497 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11497: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11497.displayName = 'HeavyComponent11497';
export default HeavyComponent11497;
