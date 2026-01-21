'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11182<T> = T extends (infer U)[]
  ? DeepReadonlyArray11182<U>
  : T extends object
  ? DeepReadonlyObject11182<T>
  : T;

interface DeepReadonlyArray11182<T> extends ReadonlyArray<DeepReadonly11182<T>> {}

type DeepReadonlyObject11182<T> = {
  readonly [P in keyof T]: DeepReadonly11182<T[P]>;
};

type UnionToIntersection11182<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11182<T> = UnionToIntersection11182<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11182<T extends unknown[], V> = [...T, V];

type TuplifyUnion11182<T, L = LastOf11182<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11182<TuplifyUnion11182<Exclude<T, L>>, L>;

type DeepPartial11182<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11182<T[P]> }
  : T;

type Paths11182<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11182<K, Paths11182<T[K], Prev11182[D]>> : never }[keyof T]
  : never;

type Prev11182 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11182<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11182 {
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

type ConfigPaths11182 = Paths11182<NestedConfig11182>;

interface HeavyProps11182 {
  config: DeepPartial11182<NestedConfig11182>;
  path?: ConfigPaths11182;
}

const HeavyComponent11182 = memo(function HeavyComponent11182({ config }: HeavyProps11182) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11182) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11182 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11182: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11182.displayName = 'HeavyComponent11182';
export default HeavyComponent11182;
