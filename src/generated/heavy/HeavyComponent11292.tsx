'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11292<T> = T extends (infer U)[]
  ? DeepReadonlyArray11292<U>
  : T extends object
  ? DeepReadonlyObject11292<T>
  : T;

interface DeepReadonlyArray11292<T> extends ReadonlyArray<DeepReadonly11292<T>> {}

type DeepReadonlyObject11292<T> = {
  readonly [P in keyof T]: DeepReadonly11292<T[P]>;
};

type UnionToIntersection11292<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11292<T> = UnionToIntersection11292<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11292<T extends unknown[], V> = [...T, V];

type TuplifyUnion11292<T, L = LastOf11292<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11292<TuplifyUnion11292<Exclude<T, L>>, L>;

type DeepPartial11292<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11292<T[P]> }
  : T;

type Paths11292<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11292<K, Paths11292<T[K], Prev11292[D]>> : never }[keyof T]
  : never;

type Prev11292 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11292<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11292 {
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

type ConfigPaths11292 = Paths11292<NestedConfig11292>;

interface HeavyProps11292 {
  config: DeepPartial11292<NestedConfig11292>;
  path?: ConfigPaths11292;
}

const HeavyComponent11292 = memo(function HeavyComponent11292({ config }: HeavyProps11292) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11292) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11292 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11292: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11292.displayName = 'HeavyComponent11292';
export default HeavyComponent11292;
