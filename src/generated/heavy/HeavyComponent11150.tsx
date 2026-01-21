'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11150<T> = T extends (infer U)[]
  ? DeepReadonlyArray11150<U>
  : T extends object
  ? DeepReadonlyObject11150<T>
  : T;

interface DeepReadonlyArray11150<T> extends ReadonlyArray<DeepReadonly11150<T>> {}

type DeepReadonlyObject11150<T> = {
  readonly [P in keyof T]: DeepReadonly11150<T[P]>;
};

type UnionToIntersection11150<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11150<T> = UnionToIntersection11150<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11150<T extends unknown[], V> = [...T, V];

type TuplifyUnion11150<T, L = LastOf11150<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11150<TuplifyUnion11150<Exclude<T, L>>, L>;

type DeepPartial11150<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11150<T[P]> }
  : T;

type Paths11150<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11150<K, Paths11150<T[K], Prev11150[D]>> : never }[keyof T]
  : never;

type Prev11150 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11150<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11150 {
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

type ConfigPaths11150 = Paths11150<NestedConfig11150>;

interface HeavyProps11150 {
  config: DeepPartial11150<NestedConfig11150>;
  path?: ConfigPaths11150;
}

const HeavyComponent11150 = memo(function HeavyComponent11150({ config }: HeavyProps11150) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11150) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11150 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11150: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11150.displayName = 'HeavyComponent11150';
export default HeavyComponent11150;
