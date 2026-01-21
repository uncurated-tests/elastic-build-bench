'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11049<T> = T extends (infer U)[]
  ? DeepReadonlyArray11049<U>
  : T extends object
  ? DeepReadonlyObject11049<T>
  : T;

interface DeepReadonlyArray11049<T> extends ReadonlyArray<DeepReadonly11049<T>> {}

type DeepReadonlyObject11049<T> = {
  readonly [P in keyof T]: DeepReadonly11049<T[P]>;
};

type UnionToIntersection11049<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11049<T> = UnionToIntersection11049<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11049<T extends unknown[], V> = [...T, V];

type TuplifyUnion11049<T, L = LastOf11049<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11049<TuplifyUnion11049<Exclude<T, L>>, L>;

type DeepPartial11049<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11049<T[P]> }
  : T;

type Paths11049<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11049<K, Paths11049<T[K], Prev11049[D]>> : never }[keyof T]
  : never;

type Prev11049 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11049<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11049 {
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

type ConfigPaths11049 = Paths11049<NestedConfig11049>;

interface HeavyProps11049 {
  config: DeepPartial11049<NestedConfig11049>;
  path?: ConfigPaths11049;
}

const HeavyComponent11049 = memo(function HeavyComponent11049({ config }: HeavyProps11049) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11049) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11049 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11049: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11049.displayName = 'HeavyComponent11049';
export default HeavyComponent11049;
