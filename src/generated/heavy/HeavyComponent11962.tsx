'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11962<T> = T extends (infer U)[]
  ? DeepReadonlyArray11962<U>
  : T extends object
  ? DeepReadonlyObject11962<T>
  : T;

interface DeepReadonlyArray11962<T> extends ReadonlyArray<DeepReadonly11962<T>> {}

type DeepReadonlyObject11962<T> = {
  readonly [P in keyof T]: DeepReadonly11962<T[P]>;
};

type UnionToIntersection11962<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11962<T> = UnionToIntersection11962<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11962<T extends unknown[], V> = [...T, V];

type TuplifyUnion11962<T, L = LastOf11962<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11962<TuplifyUnion11962<Exclude<T, L>>, L>;

type DeepPartial11962<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11962<T[P]> }
  : T;

type Paths11962<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11962<K, Paths11962<T[K], Prev11962[D]>> : never }[keyof T]
  : never;

type Prev11962 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11962<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11962 {
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

type ConfigPaths11962 = Paths11962<NestedConfig11962>;

interface HeavyProps11962 {
  config: DeepPartial11962<NestedConfig11962>;
  path?: ConfigPaths11962;
}

const HeavyComponent11962 = memo(function HeavyComponent11962({ config }: HeavyProps11962) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11962) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11962 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11962: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11962.displayName = 'HeavyComponent11962';
export default HeavyComponent11962;
