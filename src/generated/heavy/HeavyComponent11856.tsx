'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11856<T> = T extends (infer U)[]
  ? DeepReadonlyArray11856<U>
  : T extends object
  ? DeepReadonlyObject11856<T>
  : T;

interface DeepReadonlyArray11856<T> extends ReadonlyArray<DeepReadonly11856<T>> {}

type DeepReadonlyObject11856<T> = {
  readonly [P in keyof T]: DeepReadonly11856<T[P]>;
};

type UnionToIntersection11856<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11856<T> = UnionToIntersection11856<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11856<T extends unknown[], V> = [...T, V];

type TuplifyUnion11856<T, L = LastOf11856<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11856<TuplifyUnion11856<Exclude<T, L>>, L>;

type DeepPartial11856<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11856<T[P]> }
  : T;

type Paths11856<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11856<K, Paths11856<T[K], Prev11856[D]>> : never }[keyof T]
  : never;

type Prev11856 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11856<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11856 {
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

type ConfigPaths11856 = Paths11856<NestedConfig11856>;

interface HeavyProps11856 {
  config: DeepPartial11856<NestedConfig11856>;
  path?: ConfigPaths11856;
}

const HeavyComponent11856 = memo(function HeavyComponent11856({ config }: HeavyProps11856) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11856) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11856 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11856: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11856.displayName = 'HeavyComponent11856';
export default HeavyComponent11856;
