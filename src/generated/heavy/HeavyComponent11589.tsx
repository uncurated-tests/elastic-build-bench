'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11589<T> = T extends (infer U)[]
  ? DeepReadonlyArray11589<U>
  : T extends object
  ? DeepReadonlyObject11589<T>
  : T;

interface DeepReadonlyArray11589<T> extends ReadonlyArray<DeepReadonly11589<T>> {}

type DeepReadonlyObject11589<T> = {
  readonly [P in keyof T]: DeepReadonly11589<T[P]>;
};

type UnionToIntersection11589<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11589<T> = UnionToIntersection11589<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11589<T extends unknown[], V> = [...T, V];

type TuplifyUnion11589<T, L = LastOf11589<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11589<TuplifyUnion11589<Exclude<T, L>>, L>;

type DeepPartial11589<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11589<T[P]> }
  : T;

type Paths11589<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11589<K, Paths11589<T[K], Prev11589[D]>> : never }[keyof T]
  : never;

type Prev11589 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11589<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11589 {
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

type ConfigPaths11589 = Paths11589<NestedConfig11589>;

interface HeavyProps11589 {
  config: DeepPartial11589<NestedConfig11589>;
  path?: ConfigPaths11589;
}

const HeavyComponent11589 = memo(function HeavyComponent11589({ config }: HeavyProps11589) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11589) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11589 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11589: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11589.displayName = 'HeavyComponent11589';
export default HeavyComponent11589;
