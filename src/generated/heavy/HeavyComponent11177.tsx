'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11177<T> = T extends (infer U)[]
  ? DeepReadonlyArray11177<U>
  : T extends object
  ? DeepReadonlyObject11177<T>
  : T;

interface DeepReadonlyArray11177<T> extends ReadonlyArray<DeepReadonly11177<T>> {}

type DeepReadonlyObject11177<T> = {
  readonly [P in keyof T]: DeepReadonly11177<T[P]>;
};

type UnionToIntersection11177<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11177<T> = UnionToIntersection11177<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11177<T extends unknown[], V> = [...T, V];

type TuplifyUnion11177<T, L = LastOf11177<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11177<TuplifyUnion11177<Exclude<T, L>>, L>;

type DeepPartial11177<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11177<T[P]> }
  : T;

type Paths11177<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11177<K, Paths11177<T[K], Prev11177[D]>> : never }[keyof T]
  : never;

type Prev11177 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11177<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11177 {
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

type ConfigPaths11177 = Paths11177<NestedConfig11177>;

interface HeavyProps11177 {
  config: DeepPartial11177<NestedConfig11177>;
  path?: ConfigPaths11177;
}

const HeavyComponent11177 = memo(function HeavyComponent11177({ config }: HeavyProps11177) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11177) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11177 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11177: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11177.displayName = 'HeavyComponent11177';
export default HeavyComponent11177;
