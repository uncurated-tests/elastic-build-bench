'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11954<T> = T extends (infer U)[]
  ? DeepReadonlyArray11954<U>
  : T extends object
  ? DeepReadonlyObject11954<T>
  : T;

interface DeepReadonlyArray11954<T> extends ReadonlyArray<DeepReadonly11954<T>> {}

type DeepReadonlyObject11954<T> = {
  readonly [P in keyof T]: DeepReadonly11954<T[P]>;
};

type UnionToIntersection11954<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11954<T> = UnionToIntersection11954<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11954<T extends unknown[], V> = [...T, V];

type TuplifyUnion11954<T, L = LastOf11954<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11954<TuplifyUnion11954<Exclude<T, L>>, L>;

type DeepPartial11954<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11954<T[P]> }
  : T;

type Paths11954<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11954<K, Paths11954<T[K], Prev11954[D]>> : never }[keyof T]
  : never;

type Prev11954 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11954<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11954 {
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

type ConfigPaths11954 = Paths11954<NestedConfig11954>;

interface HeavyProps11954 {
  config: DeepPartial11954<NestedConfig11954>;
  path?: ConfigPaths11954;
}

const HeavyComponent11954 = memo(function HeavyComponent11954({ config }: HeavyProps11954) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11954) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11954 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11954: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11954.displayName = 'HeavyComponent11954';
export default HeavyComponent11954;
