'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11320<T> = T extends (infer U)[]
  ? DeepReadonlyArray11320<U>
  : T extends object
  ? DeepReadonlyObject11320<T>
  : T;

interface DeepReadonlyArray11320<T> extends ReadonlyArray<DeepReadonly11320<T>> {}

type DeepReadonlyObject11320<T> = {
  readonly [P in keyof T]: DeepReadonly11320<T[P]>;
};

type UnionToIntersection11320<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11320<T> = UnionToIntersection11320<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11320<T extends unknown[], V> = [...T, V];

type TuplifyUnion11320<T, L = LastOf11320<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11320<TuplifyUnion11320<Exclude<T, L>>, L>;

type DeepPartial11320<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11320<T[P]> }
  : T;

type Paths11320<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11320<K, Paths11320<T[K], Prev11320[D]>> : never }[keyof T]
  : never;

type Prev11320 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11320<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11320 {
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

type ConfigPaths11320 = Paths11320<NestedConfig11320>;

interface HeavyProps11320 {
  config: DeepPartial11320<NestedConfig11320>;
  path?: ConfigPaths11320;
}

const HeavyComponent11320 = memo(function HeavyComponent11320({ config }: HeavyProps11320) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11320) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11320 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11320: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11320.displayName = 'HeavyComponent11320';
export default HeavyComponent11320;
