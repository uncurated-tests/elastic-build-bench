'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11109<T> = T extends (infer U)[]
  ? DeepReadonlyArray11109<U>
  : T extends object
  ? DeepReadonlyObject11109<T>
  : T;

interface DeepReadonlyArray11109<T> extends ReadonlyArray<DeepReadonly11109<T>> {}

type DeepReadonlyObject11109<T> = {
  readonly [P in keyof T]: DeepReadonly11109<T[P]>;
};

type UnionToIntersection11109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11109<T> = UnionToIntersection11109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11109<T extends unknown[], V> = [...T, V];

type TuplifyUnion11109<T, L = LastOf11109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11109<TuplifyUnion11109<Exclude<T, L>>, L>;

type DeepPartial11109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11109<T[P]> }
  : T;

type Paths11109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11109<K, Paths11109<T[K], Prev11109[D]>> : never }[keyof T]
  : never;

type Prev11109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11109 {
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

type ConfigPaths11109 = Paths11109<NestedConfig11109>;

interface HeavyProps11109 {
  config: DeepPartial11109<NestedConfig11109>;
  path?: ConfigPaths11109;
}

const HeavyComponent11109 = memo(function HeavyComponent11109({ config }: HeavyProps11109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11109.displayName = 'HeavyComponent11109';
export default HeavyComponent11109;
