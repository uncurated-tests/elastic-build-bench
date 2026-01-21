'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11926<T> = T extends (infer U)[]
  ? DeepReadonlyArray11926<U>
  : T extends object
  ? DeepReadonlyObject11926<T>
  : T;

interface DeepReadonlyArray11926<T> extends ReadonlyArray<DeepReadonly11926<T>> {}

type DeepReadonlyObject11926<T> = {
  readonly [P in keyof T]: DeepReadonly11926<T[P]>;
};

type UnionToIntersection11926<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11926<T> = UnionToIntersection11926<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11926<T extends unknown[], V> = [...T, V];

type TuplifyUnion11926<T, L = LastOf11926<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11926<TuplifyUnion11926<Exclude<T, L>>, L>;

type DeepPartial11926<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11926<T[P]> }
  : T;

type Paths11926<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11926<K, Paths11926<T[K], Prev11926[D]>> : never }[keyof T]
  : never;

type Prev11926 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11926<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11926 {
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

type ConfigPaths11926 = Paths11926<NestedConfig11926>;

interface HeavyProps11926 {
  config: DeepPartial11926<NestedConfig11926>;
  path?: ConfigPaths11926;
}

const HeavyComponent11926 = memo(function HeavyComponent11926({ config }: HeavyProps11926) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11926) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11926 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11926: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11926.displayName = 'HeavyComponent11926';
export default HeavyComponent11926;
