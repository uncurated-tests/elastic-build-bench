'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11528<T> = T extends (infer U)[]
  ? DeepReadonlyArray11528<U>
  : T extends object
  ? DeepReadonlyObject11528<T>
  : T;

interface DeepReadonlyArray11528<T> extends ReadonlyArray<DeepReadonly11528<T>> {}

type DeepReadonlyObject11528<T> = {
  readonly [P in keyof T]: DeepReadonly11528<T[P]>;
};

type UnionToIntersection11528<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11528<T> = UnionToIntersection11528<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11528<T extends unknown[], V> = [...T, V];

type TuplifyUnion11528<T, L = LastOf11528<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11528<TuplifyUnion11528<Exclude<T, L>>, L>;

type DeepPartial11528<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11528<T[P]> }
  : T;

type Paths11528<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11528<K, Paths11528<T[K], Prev11528[D]>> : never }[keyof T]
  : never;

type Prev11528 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11528<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11528 {
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

type ConfigPaths11528 = Paths11528<NestedConfig11528>;

interface HeavyProps11528 {
  config: DeepPartial11528<NestedConfig11528>;
  path?: ConfigPaths11528;
}

const HeavyComponent11528 = memo(function HeavyComponent11528({ config }: HeavyProps11528) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11528) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11528 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11528: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11528.displayName = 'HeavyComponent11528';
export default HeavyComponent11528;
