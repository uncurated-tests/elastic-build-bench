'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11850<T> = T extends (infer U)[]
  ? DeepReadonlyArray11850<U>
  : T extends object
  ? DeepReadonlyObject11850<T>
  : T;

interface DeepReadonlyArray11850<T> extends ReadonlyArray<DeepReadonly11850<T>> {}

type DeepReadonlyObject11850<T> = {
  readonly [P in keyof T]: DeepReadonly11850<T[P]>;
};

type UnionToIntersection11850<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11850<T> = UnionToIntersection11850<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11850<T extends unknown[], V> = [...T, V];

type TuplifyUnion11850<T, L = LastOf11850<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11850<TuplifyUnion11850<Exclude<T, L>>, L>;

type DeepPartial11850<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11850<T[P]> }
  : T;

type Paths11850<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11850<K, Paths11850<T[K], Prev11850[D]>> : never }[keyof T]
  : never;

type Prev11850 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11850<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11850 {
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

type ConfigPaths11850 = Paths11850<NestedConfig11850>;

interface HeavyProps11850 {
  config: DeepPartial11850<NestedConfig11850>;
  path?: ConfigPaths11850;
}

const HeavyComponent11850 = memo(function HeavyComponent11850({ config }: HeavyProps11850) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11850) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11850 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11850: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11850.displayName = 'HeavyComponent11850';
export default HeavyComponent11850;
