'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11399<T> = T extends (infer U)[]
  ? DeepReadonlyArray11399<U>
  : T extends object
  ? DeepReadonlyObject11399<T>
  : T;

interface DeepReadonlyArray11399<T> extends ReadonlyArray<DeepReadonly11399<T>> {}

type DeepReadonlyObject11399<T> = {
  readonly [P in keyof T]: DeepReadonly11399<T[P]>;
};

type UnionToIntersection11399<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11399<T> = UnionToIntersection11399<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11399<T extends unknown[], V> = [...T, V];

type TuplifyUnion11399<T, L = LastOf11399<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11399<TuplifyUnion11399<Exclude<T, L>>, L>;

type DeepPartial11399<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11399<T[P]> }
  : T;

type Paths11399<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11399<K, Paths11399<T[K], Prev11399[D]>> : never }[keyof T]
  : never;

type Prev11399 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11399<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11399 {
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

type ConfigPaths11399 = Paths11399<NestedConfig11399>;

interface HeavyProps11399 {
  config: DeepPartial11399<NestedConfig11399>;
  path?: ConfigPaths11399;
}

const HeavyComponent11399 = memo(function HeavyComponent11399({ config }: HeavyProps11399) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11399) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11399 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11399: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11399.displayName = 'HeavyComponent11399';
export default HeavyComponent11399;
