'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11930<T> = T extends (infer U)[]
  ? DeepReadonlyArray11930<U>
  : T extends object
  ? DeepReadonlyObject11930<T>
  : T;

interface DeepReadonlyArray11930<T> extends ReadonlyArray<DeepReadonly11930<T>> {}

type DeepReadonlyObject11930<T> = {
  readonly [P in keyof T]: DeepReadonly11930<T[P]>;
};

type UnionToIntersection11930<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11930<T> = UnionToIntersection11930<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11930<T extends unknown[], V> = [...T, V];

type TuplifyUnion11930<T, L = LastOf11930<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11930<TuplifyUnion11930<Exclude<T, L>>, L>;

type DeepPartial11930<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11930<T[P]> }
  : T;

type Paths11930<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11930<K, Paths11930<T[K], Prev11930[D]>> : never }[keyof T]
  : never;

type Prev11930 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11930<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11930 {
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

type ConfigPaths11930 = Paths11930<NestedConfig11930>;

interface HeavyProps11930 {
  config: DeepPartial11930<NestedConfig11930>;
  path?: ConfigPaths11930;
}

const HeavyComponent11930 = memo(function HeavyComponent11930({ config }: HeavyProps11930) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11930) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11930 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11930: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11930.displayName = 'HeavyComponent11930';
export default HeavyComponent11930;
