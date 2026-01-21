'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11893<T> = T extends (infer U)[]
  ? DeepReadonlyArray11893<U>
  : T extends object
  ? DeepReadonlyObject11893<T>
  : T;

interface DeepReadonlyArray11893<T> extends ReadonlyArray<DeepReadonly11893<T>> {}

type DeepReadonlyObject11893<T> = {
  readonly [P in keyof T]: DeepReadonly11893<T[P]>;
};

type UnionToIntersection11893<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11893<T> = UnionToIntersection11893<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11893<T extends unknown[], V> = [...T, V];

type TuplifyUnion11893<T, L = LastOf11893<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11893<TuplifyUnion11893<Exclude<T, L>>, L>;

type DeepPartial11893<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11893<T[P]> }
  : T;

type Paths11893<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11893<K, Paths11893<T[K], Prev11893[D]>> : never }[keyof T]
  : never;

type Prev11893 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11893<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11893 {
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

type ConfigPaths11893 = Paths11893<NestedConfig11893>;

interface HeavyProps11893 {
  config: DeepPartial11893<NestedConfig11893>;
  path?: ConfigPaths11893;
}

const HeavyComponent11893 = memo(function HeavyComponent11893({ config }: HeavyProps11893) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11893) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11893 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11893: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11893.displayName = 'HeavyComponent11893';
export default HeavyComponent11893;
