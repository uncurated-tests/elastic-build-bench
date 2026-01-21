'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11126<T> = T extends (infer U)[]
  ? DeepReadonlyArray11126<U>
  : T extends object
  ? DeepReadonlyObject11126<T>
  : T;

interface DeepReadonlyArray11126<T> extends ReadonlyArray<DeepReadonly11126<T>> {}

type DeepReadonlyObject11126<T> = {
  readonly [P in keyof T]: DeepReadonly11126<T[P]>;
};

type UnionToIntersection11126<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11126<T> = UnionToIntersection11126<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11126<T extends unknown[], V> = [...T, V];

type TuplifyUnion11126<T, L = LastOf11126<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11126<TuplifyUnion11126<Exclude<T, L>>, L>;

type DeepPartial11126<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11126<T[P]> }
  : T;

type Paths11126<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11126<K, Paths11126<T[K], Prev11126[D]>> : never }[keyof T]
  : never;

type Prev11126 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11126<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11126 {
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

type ConfigPaths11126 = Paths11126<NestedConfig11126>;

interface HeavyProps11126 {
  config: DeepPartial11126<NestedConfig11126>;
  path?: ConfigPaths11126;
}

const HeavyComponent11126 = memo(function HeavyComponent11126({ config }: HeavyProps11126) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11126) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11126 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11126: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11126.displayName = 'HeavyComponent11126';
export default HeavyComponent11126;
