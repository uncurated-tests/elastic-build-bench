'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11614<T> = T extends (infer U)[]
  ? DeepReadonlyArray11614<U>
  : T extends object
  ? DeepReadonlyObject11614<T>
  : T;

interface DeepReadonlyArray11614<T> extends ReadonlyArray<DeepReadonly11614<T>> {}

type DeepReadonlyObject11614<T> = {
  readonly [P in keyof T]: DeepReadonly11614<T[P]>;
};

type UnionToIntersection11614<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11614<T> = UnionToIntersection11614<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11614<T extends unknown[], V> = [...T, V];

type TuplifyUnion11614<T, L = LastOf11614<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11614<TuplifyUnion11614<Exclude<T, L>>, L>;

type DeepPartial11614<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11614<T[P]> }
  : T;

type Paths11614<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11614<K, Paths11614<T[K], Prev11614[D]>> : never }[keyof T]
  : never;

type Prev11614 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11614<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11614 {
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

type ConfigPaths11614 = Paths11614<NestedConfig11614>;

interface HeavyProps11614 {
  config: DeepPartial11614<NestedConfig11614>;
  path?: ConfigPaths11614;
}

const HeavyComponent11614 = memo(function HeavyComponent11614({ config }: HeavyProps11614) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11614) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11614 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11614: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11614.displayName = 'HeavyComponent11614';
export default HeavyComponent11614;
