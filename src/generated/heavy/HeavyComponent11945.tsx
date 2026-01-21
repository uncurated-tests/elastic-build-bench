'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11945<T> = T extends (infer U)[]
  ? DeepReadonlyArray11945<U>
  : T extends object
  ? DeepReadonlyObject11945<T>
  : T;

interface DeepReadonlyArray11945<T> extends ReadonlyArray<DeepReadonly11945<T>> {}

type DeepReadonlyObject11945<T> = {
  readonly [P in keyof T]: DeepReadonly11945<T[P]>;
};

type UnionToIntersection11945<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11945<T> = UnionToIntersection11945<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11945<T extends unknown[], V> = [...T, V];

type TuplifyUnion11945<T, L = LastOf11945<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11945<TuplifyUnion11945<Exclude<T, L>>, L>;

type DeepPartial11945<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11945<T[P]> }
  : T;

type Paths11945<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11945<K, Paths11945<T[K], Prev11945[D]>> : never }[keyof T]
  : never;

type Prev11945 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11945<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11945 {
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

type ConfigPaths11945 = Paths11945<NestedConfig11945>;

interface HeavyProps11945 {
  config: DeepPartial11945<NestedConfig11945>;
  path?: ConfigPaths11945;
}

const HeavyComponent11945 = memo(function HeavyComponent11945({ config }: HeavyProps11945) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11945) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11945 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11945: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11945.displayName = 'HeavyComponent11945';
export default HeavyComponent11945;
