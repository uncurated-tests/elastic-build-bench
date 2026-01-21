'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11586<T> = T extends (infer U)[]
  ? DeepReadonlyArray11586<U>
  : T extends object
  ? DeepReadonlyObject11586<T>
  : T;

interface DeepReadonlyArray11586<T> extends ReadonlyArray<DeepReadonly11586<T>> {}

type DeepReadonlyObject11586<T> = {
  readonly [P in keyof T]: DeepReadonly11586<T[P]>;
};

type UnionToIntersection11586<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11586<T> = UnionToIntersection11586<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11586<T extends unknown[], V> = [...T, V];

type TuplifyUnion11586<T, L = LastOf11586<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11586<TuplifyUnion11586<Exclude<T, L>>, L>;

type DeepPartial11586<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11586<T[P]> }
  : T;

type Paths11586<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11586<K, Paths11586<T[K], Prev11586[D]>> : never }[keyof T]
  : never;

type Prev11586 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11586<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11586 {
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

type ConfigPaths11586 = Paths11586<NestedConfig11586>;

interface HeavyProps11586 {
  config: DeepPartial11586<NestedConfig11586>;
  path?: ConfigPaths11586;
}

const HeavyComponent11586 = memo(function HeavyComponent11586({ config }: HeavyProps11586) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11586) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11586 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11586: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11586.displayName = 'HeavyComponent11586';
export default HeavyComponent11586;
