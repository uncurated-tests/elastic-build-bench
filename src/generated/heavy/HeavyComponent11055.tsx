'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11055<T> = T extends (infer U)[]
  ? DeepReadonlyArray11055<U>
  : T extends object
  ? DeepReadonlyObject11055<T>
  : T;

interface DeepReadonlyArray11055<T> extends ReadonlyArray<DeepReadonly11055<T>> {}

type DeepReadonlyObject11055<T> = {
  readonly [P in keyof T]: DeepReadonly11055<T[P]>;
};

type UnionToIntersection11055<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11055<T> = UnionToIntersection11055<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11055<T extends unknown[], V> = [...T, V];

type TuplifyUnion11055<T, L = LastOf11055<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11055<TuplifyUnion11055<Exclude<T, L>>, L>;

type DeepPartial11055<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11055<T[P]> }
  : T;

type Paths11055<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11055<K, Paths11055<T[K], Prev11055[D]>> : never }[keyof T]
  : never;

type Prev11055 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11055<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11055 {
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

type ConfigPaths11055 = Paths11055<NestedConfig11055>;

interface HeavyProps11055 {
  config: DeepPartial11055<NestedConfig11055>;
  path?: ConfigPaths11055;
}

const HeavyComponent11055 = memo(function HeavyComponent11055({ config }: HeavyProps11055) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11055) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11055 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11055: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11055.displayName = 'HeavyComponent11055';
export default HeavyComponent11055;
