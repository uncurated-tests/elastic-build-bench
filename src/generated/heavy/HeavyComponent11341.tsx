'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11341<T> = T extends (infer U)[]
  ? DeepReadonlyArray11341<U>
  : T extends object
  ? DeepReadonlyObject11341<T>
  : T;

interface DeepReadonlyArray11341<T> extends ReadonlyArray<DeepReadonly11341<T>> {}

type DeepReadonlyObject11341<T> = {
  readonly [P in keyof T]: DeepReadonly11341<T[P]>;
};

type UnionToIntersection11341<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11341<T> = UnionToIntersection11341<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11341<T extends unknown[], V> = [...T, V];

type TuplifyUnion11341<T, L = LastOf11341<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11341<TuplifyUnion11341<Exclude<T, L>>, L>;

type DeepPartial11341<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11341<T[P]> }
  : T;

type Paths11341<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11341<K, Paths11341<T[K], Prev11341[D]>> : never }[keyof T]
  : never;

type Prev11341 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11341<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11341 {
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

type ConfigPaths11341 = Paths11341<NestedConfig11341>;

interface HeavyProps11341 {
  config: DeepPartial11341<NestedConfig11341>;
  path?: ConfigPaths11341;
}

const HeavyComponent11341 = memo(function HeavyComponent11341({ config }: HeavyProps11341) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11341) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11341 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11341: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11341.displayName = 'HeavyComponent11341';
export default HeavyComponent11341;
