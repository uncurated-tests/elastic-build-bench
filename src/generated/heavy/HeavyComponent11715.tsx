'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11715<T> = T extends (infer U)[]
  ? DeepReadonlyArray11715<U>
  : T extends object
  ? DeepReadonlyObject11715<T>
  : T;

interface DeepReadonlyArray11715<T> extends ReadonlyArray<DeepReadonly11715<T>> {}

type DeepReadonlyObject11715<T> = {
  readonly [P in keyof T]: DeepReadonly11715<T[P]>;
};

type UnionToIntersection11715<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11715<T> = UnionToIntersection11715<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11715<T extends unknown[], V> = [...T, V];

type TuplifyUnion11715<T, L = LastOf11715<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11715<TuplifyUnion11715<Exclude<T, L>>, L>;

type DeepPartial11715<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11715<T[P]> }
  : T;

type Paths11715<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11715<K, Paths11715<T[K], Prev11715[D]>> : never }[keyof T]
  : never;

type Prev11715 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11715<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11715 {
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

type ConfigPaths11715 = Paths11715<NestedConfig11715>;

interface HeavyProps11715 {
  config: DeepPartial11715<NestedConfig11715>;
  path?: ConfigPaths11715;
}

const HeavyComponent11715 = memo(function HeavyComponent11715({ config }: HeavyProps11715) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11715) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11715 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11715: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11715.displayName = 'HeavyComponent11715';
export default HeavyComponent11715;
