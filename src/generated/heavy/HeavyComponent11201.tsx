'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11201<T> = T extends (infer U)[]
  ? DeepReadonlyArray11201<U>
  : T extends object
  ? DeepReadonlyObject11201<T>
  : T;

interface DeepReadonlyArray11201<T> extends ReadonlyArray<DeepReadonly11201<T>> {}

type DeepReadonlyObject11201<T> = {
  readonly [P in keyof T]: DeepReadonly11201<T[P]>;
};

type UnionToIntersection11201<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11201<T> = UnionToIntersection11201<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11201<T extends unknown[], V> = [...T, V];

type TuplifyUnion11201<T, L = LastOf11201<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11201<TuplifyUnion11201<Exclude<T, L>>, L>;

type DeepPartial11201<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11201<T[P]> }
  : T;

type Paths11201<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11201<K, Paths11201<T[K], Prev11201[D]>> : never }[keyof T]
  : never;

type Prev11201 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11201<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11201 {
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

type ConfigPaths11201 = Paths11201<NestedConfig11201>;

interface HeavyProps11201 {
  config: DeepPartial11201<NestedConfig11201>;
  path?: ConfigPaths11201;
}

const HeavyComponent11201 = memo(function HeavyComponent11201({ config }: HeavyProps11201) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11201) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11201 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11201: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11201.displayName = 'HeavyComponent11201';
export default HeavyComponent11201;
