'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11578<T> = T extends (infer U)[]
  ? DeepReadonlyArray11578<U>
  : T extends object
  ? DeepReadonlyObject11578<T>
  : T;

interface DeepReadonlyArray11578<T> extends ReadonlyArray<DeepReadonly11578<T>> {}

type DeepReadonlyObject11578<T> = {
  readonly [P in keyof T]: DeepReadonly11578<T[P]>;
};

type UnionToIntersection11578<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11578<T> = UnionToIntersection11578<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11578<T extends unknown[], V> = [...T, V];

type TuplifyUnion11578<T, L = LastOf11578<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11578<TuplifyUnion11578<Exclude<T, L>>, L>;

type DeepPartial11578<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11578<T[P]> }
  : T;

type Paths11578<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11578<K, Paths11578<T[K], Prev11578[D]>> : never }[keyof T]
  : never;

type Prev11578 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11578<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11578 {
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

type ConfigPaths11578 = Paths11578<NestedConfig11578>;

interface HeavyProps11578 {
  config: DeepPartial11578<NestedConfig11578>;
  path?: ConfigPaths11578;
}

const HeavyComponent11578 = memo(function HeavyComponent11578({ config }: HeavyProps11578) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11578) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11578 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11578: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11578.displayName = 'HeavyComponent11578';
export default HeavyComponent11578;
