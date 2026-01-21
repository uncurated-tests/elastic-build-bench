'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11074<T> = T extends (infer U)[]
  ? DeepReadonlyArray11074<U>
  : T extends object
  ? DeepReadonlyObject11074<T>
  : T;

interface DeepReadonlyArray11074<T> extends ReadonlyArray<DeepReadonly11074<T>> {}

type DeepReadonlyObject11074<T> = {
  readonly [P in keyof T]: DeepReadonly11074<T[P]>;
};

type UnionToIntersection11074<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11074<T> = UnionToIntersection11074<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11074<T extends unknown[], V> = [...T, V];

type TuplifyUnion11074<T, L = LastOf11074<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11074<TuplifyUnion11074<Exclude<T, L>>, L>;

type DeepPartial11074<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11074<T[P]> }
  : T;

type Paths11074<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11074<K, Paths11074<T[K], Prev11074[D]>> : never }[keyof T]
  : never;

type Prev11074 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11074<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11074 {
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

type ConfigPaths11074 = Paths11074<NestedConfig11074>;

interface HeavyProps11074 {
  config: DeepPartial11074<NestedConfig11074>;
  path?: ConfigPaths11074;
}

const HeavyComponent11074 = memo(function HeavyComponent11074({ config }: HeavyProps11074) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11074) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11074 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11074: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11074.displayName = 'HeavyComponent11074';
export default HeavyComponent11074;
